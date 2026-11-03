// 招式：依 CONFIG.skills[id].type 選用下面的 class；新招式通常只要在 config.js 加一筆資料。
// 介面：constructor(game, id) / setLevel(lv) / update(dt) / reset() / cooldownFrac() / syncMesh?(time)
//   cooldownFrac()：0 = 冷卻好了，1 = 剛放完（技能欄的轉圈遮罩用）
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

const DEG = Math.PI / 180;

// ---------- 普通揮砍 ----------
class Slash {
  constructor(game, id) {
    this.game = game;
    this.id = id;
    this.def = CONFIG.skills[id];
    this.level = 0;
    this.timer = 0.3;
    this.cd = 1;
    this.fx = []; // 揮砍特效池
    this.geoCache = new Map();
    this.mat = new THREE.MeshBasicMaterial({
      color: 0xfff6c8, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false,
    });
    for (let i = 0; i < 4; i++) {
      const pivot = new THREE.Object3D();
      const mesh = new THREE.Mesh(this.geometry(130), this.mat.clone());
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = 0.25;
      pivot.add(mesh);
      pivot.visible = false;
      game.world.scene.add(pivot);
      this.fx.push({ pivot, mesh, t: 0 });
    }
  }

  geometry(arcDeg) {
    if (!this.geoCache.has(arcDeg)) {
      const a = arcDeg * DEG;
      this.geoCache.set(arcDeg, new THREE.RingGeometry(0.45, 1, 24, 1, -a / 2, a));
    }
    return this.geoCache.get(arcDeg);
  }

  setLevel(lv) {
    this.level = lv;
  }

  reset() {
    this.timer = 0.3;
    this.cd = 1;
    for (const f of this.fx) f.pivot.visible = false;
  }

  cooldownFrac() {
    return Math.max(0, Math.min(1, this.timer / this.cd));
  }

  update(dt) {
    const g = this.game;
    const L = this.level - 1;
    const d = this.def;
    for (const f of this.fx) {
      if (!f.pivot.visible) continue;
      f.t += dt;
      const k = f.t / 0.22;
      if (k >= 1) {
        f.pivot.visible = false;
        continue;
      }
      f.mesh.material.opacity = 0.85 * (1 - k);
      const s = f.range * (0.75 + 0.25 * Math.min(1, k * 3));
      f.mesh.scale.set(s, s, 1);
      f.pivot.position.set(g.player.x, 0, g.player.z);
    }

    this.timer -= dt;
    if (this.timer > 0) return;

    const p = g.player;
    const target = g.enemies.nearest(p.x, p.z, d.seekRange);
    let dx = p.faceX;
    let dz = p.faceZ;
    if (target >= 0) {
      dx = g.enemies.x[target] - p.x;
      dz = g.enemies.z[target] - p.z;
      const l = Math.hypot(dx, dz) || 1;
      dx /= l;
      dz /= l;
    }
    this.timer = this.cd = d.cooldown[L] * g.stats.cooldownMult;
    const range = d.range[L] * g.stats.areaMult;
    const arc = d.arc[L];
    const damage = d.damage[L] * g.stats.damageMult;
    this.swing(dx, dz, range, arc, damage);
    if (d.doubleSided[L]) this.swing(-dx, -dz, range, arc, damage);
  }

  swing(dx, dz, range, arc, damage) {
    const g = this.game;
    const p = g.player;
    const cosHalf = Math.cos((arc / 2) * DEG);
    g.enemies.query(p.x, p.z, range, (i, d2) => {
      const d = Math.sqrt(d2) || 1;
      const ex = (g.enemies.x[i] - p.x) / d;
      const ez = (g.enemies.z[i] - p.z) / d;
      if (d < 0.9 || ex * dx + ez * dz >= cosHalf) g.damageEnemy(i, damage, p.x, p.z);
      return false;
    });
    const f = this.fx.find((e) => !e.pivot.visible) || this.fx[0];
    f.mesh.geometry = this.geometry(arc);
    f.pivot.rotation.y = Math.atan2(-dz, dx);
    f.pivot.position.set(p.x, 0, p.z);
    f.pivot.visible = true;
    f.range = range;
    f.t = 0;
  }
}

// ---------- 子彈類（丟石頭、裂地波、奧術飛彈、散射箭、追風羽）----------
// 物件池 + 每個招式一個 InstancedMesh。
// target：random = 每顆各挑一隻隨機敵人；nearest = 朝最近的敵人，多顆時排成扇形（spread 度）
// homing > 0 時會轉彎追最近的敵人。
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();
const _q2 = new THREE.Quaternion();
const RING = 4; // 每顆子彈記住最近打過的 4 隻，避免貫穿時同一隻被連打

let projectileSerial = 1;

function shapeGeometry(shape) {
  switch (shape) {
    case 'wave': return new THREE.BoxGeometry(2.4, 0.3, 0.5);
    case 'arrow': return new THREE.BoxGeometry(0.35, 0.35, 2.4);
    case 'orb': return new THREE.SphereGeometry(1, 10, 8);
    default: return new THREE.DodecahedronGeometry(1, 0);
  }
}

class Projectile {
  constructor(game, id) {
    this.game = game;
    this.id = id;
    this.def = CONFIG.skills[id];
    this.level = 0;
    this.timer = 0.6;
    this.cd = 1;
    const max = CONFIG.maxProjectiles;
    this.max = max;
    this.count = 0;
    this.x = new Float32Array(max);
    this.z = new Float32Array(max);
    this.vx = new Float32Array(max);
    this.vz = new Float32Array(max);
    this.life = new Float32Array(max);
    this.dmg = new Float32Array(max);
    this.pierce = new Uint8Array(max);
    this.serial = new Uint32Array(max);
    this.hits = new Uint32Array(max * RING);
    this.hitPos = new Uint8Array(max);
    this.target = new Int32Array(max); // 追蹤目標的 index（配合 uid 檢查）
    this.targetUid = new Uint32Array(max);
    const shape = this.def.shape || 'rock';
    this.spin = shape === 'rock';
    const mat = shape === 'rock'
      ? new THREE.MeshLambertMaterial({ color: this.def.meshColor })
      : new THREE.MeshBasicMaterial({ color: this.def.meshColor, transparent: shape === 'wave', opacity: 0.85 });
    this.mesh = new THREE.InstancedMesh(shapeGeometry(shape), mat, max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    game.world.scene.add(this.mesh);
  }

  setLevel(lv) {
    this.level = lv;
  }

  reset() {
    this.count = 0;
    this.mesh.count = 0;
    this.mesh.visible = false;
    this.timer = 0.6;
    this.cd = 1;
  }

  cooldownFrac() {
    return Math.max(0, Math.min(1, this.timer / this.cd));
  }

  fire(dirX, dirZ, damage, pierce) {
    if (this.count >= this.max) return;
    const p = this.game.player;
    const i = this.count++;
    this.x[i] = p.x;
    this.z[i] = p.z;
    this.vx[i] = dirX * this.def.speed;
    this.vz[i] = dirZ * this.def.speed;
    this.life[i] = this.def.lifetime;
    this.dmg[i] = damage;
    this.pierce[i] = pierce;
    this.serial[i] = projectileSerial++;
    this.hits.fill(0, i * RING, i * RING + RING);
    this.hitPos[i] = 0;
    this.target[i] = -1;
  }

  update(dt) {
    const g = this.game;
    const en = g.enemies;
    const d = this.def;
    const L = this.level - 1;
    const half = CONFIG.map.size / 2;
    const p = g.player;

    this.timer -= dt;
    if (this.timer <= 0) {
      const n = d.count[L];
      const damage = d.damage[L] * g.stats.damageMult;
      let fired = 0;
      if (d.target === 'nearest') {
        const t = en.nearest(p.x, p.z, d.targetRange);
        if (t >= 0) {
          const base = Math.atan2(en.z[t] - p.z, en.x[t] - p.x);
          const spread = n > 1 ? ((d.spread || 0) * DEG) : 0;
          for (let k = 0; k < n; k++) {
            const a = base + (n > 1 ? (k / (n - 1) - 0.5) * spread : 0);
            this.fire(Math.cos(a), Math.sin(a), damage, d.pierce[L]);
            fired++;
          }
        }
      } else {
        for (let k = 0; k < n; k++) {
          const t = en.randomInRange(p.x, p.z, d.targetRange);
          if (t < 0) break;
          const dx = en.x[t] - p.x;
          const dz = en.z[t] - p.z;
          const l = Math.hypot(dx, dz) || 1;
          this.fire(dx / l, dz / l, damage, d.pierce[L]);
          fired++;
        }
      }
      this.timer = fired ? (this.cd = d.cooldown[L] * g.stats.cooldownMult) : 0.2;
    }

    const r = d.radius * g.stats.areaMult;
    const homing = d.homing || 0;
    for (let i = this.count - 1; i >= 0; i--) {
      if (homing > 0) this.steer(i, homing, dt);
      this.x[i] += this.vx[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.life[i] -= dt;
      let alive = this.life[i] > 0 && Math.abs(this.x[i]) < half && Math.abs(this.z[i]) < half;
      if (alive) {
        const b = i * RING;
        en.query(this.x[i], this.z[i], r, (e) => {
          const uid = en.uid[e];
          if (en.lastProj[e] === this.serial[i]) return false;
          for (let k = 0; k < RING; k++) if (this.hits[b + k] === uid) return false;
          g.damageEnemy(e, this.dmg[i], this.x[i] - this.vx[i], this.z[i] - this.vz[i]);
          en.lastProj[e] = this.serial[i];
          this.hits[b + this.hitPos[i]] = uid;
          this.hitPos[i] = (this.hitPos[i] + 1) % RING;
          if (this.pierce[i] === 0) {
            alive = false;
            return true;
          }
          this.pierce[i]--;
          return false;
        });
      }
      if (!alive) this.removeAt(i);
    }
  }

  // 追蹤：目標還活著就轉向它，否則找附近最近的
  steer(i, turn, dt) {
    const en = this.game.enemies;
    let t = this.target[i];
    if (t < 0 || t >= en.count || en.dead[t] || en.uid[t] !== this.targetUid[i]) {
      t = en.nearest(this.x[i], this.z[i], 8);
      this.target[i] = t;
      if (t < 0) return;
      this.targetUid[i] = en.uid[t];
    }
    const spd = this.def.speed;
    const dx = en.x[t] - this.x[i];
    const dz = en.z[t] - this.z[i];
    const l = Math.hypot(dx, dz) || 1;
    const k = Math.min(1, turn * dt);
    let vx = this.vx[i] + ((dx / l) * spd - this.vx[i]) * k;
    let vz = this.vz[i] + ((dz / l) * spd - this.vz[i]) * k;
    const v = Math.hypot(vx, vz) || 1;
    this.vx[i] = (vx / v) * spd;
    this.vz[i] = (vz / v) * spd;
  }

  removeAt(i) {
    const last = --this.count;
    if (i === last) return;
    this.x[i] = this.x[last];
    this.z[i] = this.z[last];
    this.vx[i] = this.vx[last];
    this.vz[i] = this.vz[last];
    this.life[i] = this.life[last];
    this.dmg[i] = this.dmg[last];
    this.pierce[i] = this.pierce[last];
    this.serial[i] = this.serial[last];
    this.hits.copyWithin(i * RING, last * RING, last * RING + RING);
    this.hitPos[i] = this.hitPos[last];
    this.target[i] = this.target[last];
    this.targetUid[i] = this.targetUid[last];
  }

  syncMesh(time) {
    const sc = this.def.radius * this.game.stats.areaMult;
    for (let i = 0; i < this.count; i++) {
      _p.set(this.x[i], 0.6, this.z[i]);
      if (this.spin) _e.set(time * 9 + i, time * 7, 0);
      else _e.set(0, Math.atan2(this.vx[i], this.vz[i]), 0);
      _q.setFromEuler(_e);
      _s.set(sc, sc, sc);
      _m.compose(_p, _q, _s);
      this.mesh.setMatrixAt(i, _m);
    }
    this.mesh.count = this.count;
    this.mesh.visible = this.count > 0;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

// ---------- 環繞（旋風刃）----------
class Orbit {
  constructor(game, id) {
    this.game = game;
    this.id = id;
    this.def = CONFIG.skills[id];
    this.level = 0;
    this.angle = 0;
    this.tick = 0;
    const maxN = Math.max(...this.def.count);
    this.mesh = new THREE.InstancedMesh(
      new THREE.ConeGeometry(0.5, 1.6, 4),
      new THREE.MeshLambertMaterial({ color: this.def.meshColor, emissive: 0x442200 }),
      maxN
    );
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    game.world.scene.add(this.mesh);
  }

  setLevel(lv) {
    this.level = lv;
    this.mesh.visible = lv > 0;
    if (lv === 0) this.mesh.count = 0;
  }

  reset() {
    this.angle = 0;
    this.tick = 0;
  }

  cooldownFrac() {
    return 0; // 一直在轉，沒有冷卻
  }

  radius() {
    return this.def.orbitRadius[this.level - 1] * this.game.stats.areaMult;
  }

  update(dt) {
    const g = this.game;
    const d = this.def;
    const L = this.level - 1;
    this.angle += d.spin[L] * dt;
    this.tick -= dt;
    if (this.tick > 0) return;
    this.tick = d.hitInterval * g.stats.cooldownMult;
    const n = d.count[L];
    const R = this.radius();
    const br = d.bladeRadius * g.stats.areaMult;
    const damage = d.damage[L] * g.stats.damageMult;
    const p = g.player;
    for (let k = 0; k < n; k++) {
      const a = this.angle + (k / n) * Math.PI * 2;
      const bx = p.x + Math.cos(a) * R;
      const bz = p.z + Math.sin(a) * R;
      g.enemies.query(bx, bz, br, (e) => {
        g.damageEnemy(e, damage, p.x, p.z);
        return false;
      });
    }
  }

  syncMesh() {
    if (this.level === 0) return;
    const p = this.game.player;
    const n = this.def.count[this.level - 1];
    const R = this.radius();
    const sc = this.game.stats.areaMult;
    for (let k = 0; k < n; k++) {
      const a = this.angle + (k / n) * Math.PI * 2;
      _p.set(p.x + Math.cos(a) * R, 0.7, p.z + Math.sin(a) * R);
      // 刀尖朝切線方向
      _e.set(Math.PI / 2, 0, 0);
      _q.setFromEuler(_e);
      _e.set(0, -a, 0);
      _q.premultiply(_q2.setFromEuler(_e));
      _s.set(sc * 0.6, sc, sc * 0.3);
      _m.compose(_p, _q, _s);
      this.mesh.setMatrixAt(k, _m);
    }
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

// ---------- 周身爆發（震盾、霜晶爆）----------
class Aura {
  constructor(game, id) {
    this.game = game;
    this.id = id;
    this.def = CONFIG.skills[id];
    this.level = 0;
    this.timer = 0.8;
    this.cd = 1;
    this.fxT = 1;
    this.fx = new THREE.Mesh(
      new THREE.RingGeometry(0.75, 1, 40),
      new THREE.MeshBasicMaterial({ color: this.def.meshColor, transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false })
    );
    this.fx.rotation.x = -Math.PI / 2;
    this.fx.position.y = 0.2;
    this.fx.visible = false;
    game.world.scene.add(this.fx);
  }

  setLevel(lv) {
    this.level = lv;
  }

  reset() {
    this.timer = 0.8;
    this.cd = 1;
    this.fx.visible = false;
  }

  cooldownFrac() {
    return Math.max(0, Math.min(1, this.timer / this.cd));
  }

  update(dt) {
    const g = this.game;
    const d = this.def;
    const L = this.level - 1;
    this.timer -= dt;
    if (this.timer > 0) return;
    const p = g.player;
    const R = d.radius[L] * g.stats.areaMult;
    const damage = d.damage[L] * g.stats.damageMult;
    const slow = d.slow[L];
    g.enemies.query(p.x, p.z, R, (e) => {
      g.damageEnemy(e, damage, p.x, p.z, d.knockback);
      if (slow > 0) g.enemies.applySlow(e, slow);
      return false;
    });
    this.timer = this.cd = d.cooldown[L] * g.stats.cooldownMult;
    this.fxT = 0;
    this.fxR = R;
    this.fx.visible = true;
  }

  syncMesh(time) {
    const dt = this.lastTime === undefined ? 0 : Math.max(0, time - this.lastTime);
    this.lastTime = time;
    if (!this.fx.visible) return;
    this.fxT += dt;
    const k = this.fxT / 0.3;
    if (k >= 1) {
      this.fx.visible = false;
      return;
    }
    const p = this.game.player;
    const s = this.fxR * (0.4 + 0.6 * k);
    this.fx.scale.set(s, s, 1);
    this.fx.position.set(p.x, 0.2, p.z);
    this.fx.material.opacity = 0.75 * (1 - k);
  }
}

// ---------- 指定地點落下（流星墜、箭雨）----------
class Strike {
  constructor(game, id) {
    this.game = game;
    this.id = id;
    this.def = CONFIG.skills[id];
    this.level = 0;
    this.timer = 1;
    this.cd = 1;
    this.pool = [];
    const ringGeo = new THREE.RingGeometry(0.85, 1, 32);
    const discGeo = new THREE.CircleGeometry(1, 32);
    for (let i = 0; i < 16; i++) {
      const mk = (geo) => {
        const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
          color: this.def.meshColor, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false,
        }));
        m.rotation.x = -Math.PI / 2;
        m.visible = false;
        game.world.scene.add(m);
        return m;
      };
      this.pool.push({ ring: mk(ringGeo), disc: mk(discGeo), active: false, t: 0, x: 0, z: 0, r: 1, dmg: 0, boom: -1 });
    }
  }

  setLevel(lv) {
    this.level = lv;
  }

  reset() {
    this.timer = 1;
    this.cd = 1;
    for (const s of this.pool) {
      s.active = false;
      s.ring.visible = s.disc.visible = false;
    }
  }

  cooldownFrac() {
    return Math.max(0, Math.min(1, this.timer / this.cd));
  }

  update(dt) {
    const g = this.game;
    const d = this.def;
    const L = this.level - 1;
    const en = g.enemies;

    for (const s of this.pool) {
      if (!s.active) continue;
      s.t += dt;
      if (s.boom < 0 && s.t >= d.delay) {
        s.boom = 0;
        en.query(s.x, s.z, s.r, (e) => {
          g.damageEnemy(e, s.dmg, s.x, s.z);
          return false;
        });
      }
      if (s.boom >= 0) {
        s.boom += dt;
        if (s.boom > 0.25) s.active = false;
      }
    }

    this.timer -= dt;
    if (this.timer > 0) return;
    const p = g.player;
    let fired = 0;
    for (let k = 0; k < d.count[L]; k++) {
      const t = en.randomInRange(p.x, p.z, d.targetRange);
      if (t < 0) break;
      const s = this.pool.find((e) => !e.active);
      if (!s) break;
      s.active = true;
      s.t = 0;
      s.boom = -1;
      s.x = en.x[t];
      s.z = en.z[t];
      s.r = d.radius[L] * g.stats.areaMult;
      s.dmg = d.damage[L] * g.stats.damageMult;
      fired++;
    }
    this.timer = fired ? (this.cd = d.cooldown[L] * g.stats.cooldownMult) : 0.3;
  }

  syncMesh() {
    for (const s of this.pool) {
      if (!s.active) {
        s.ring.visible = s.disc.visible = false;
        continue;
      }
      if (s.boom < 0) {
        const k = Math.min(1, s.t / this.def.delay);
        s.ring.visible = true;
        s.disc.visible = false;
        s.ring.position.set(s.x, 0.15, s.z);
        s.ring.scale.set(s.r, s.r, 1);
        s.ring.material.opacity = 0.3 + 0.5 * k;
      } else {
        s.ring.visible = false;
        s.disc.visible = true;
        s.disc.position.set(s.x, 0.18, s.z);
        s.disc.scale.set(s.r, s.r, 1);
        s.disc.material.opacity = 0.8 * (1 - s.boom / 0.25);
      }
    }
  }
}

const TYPES = { slash: Slash, projectile: Projectile, orbit: Orbit, aura: Aura, strike: Strike };

// 依 config 建立所有招式的實例（id -> 物件）
export function createSkills(game) {
  const out = {};
  for (const [id, def] of Object.entries(CONFIG.skills)) out[id] = new TYPES[def.type](game, id);
  return out;
}
