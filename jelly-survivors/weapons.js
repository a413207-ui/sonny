// 招式：每個招式一個 class，用 SKILL_CLASSES 註冊。之後的職業招式照同樣介面加進來即可。
// 介面：constructor(game) / setLevel(lv) / update(dt) / reset()
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

const DEG = Math.PI / 180;

// ---------- 普通揮砍 ----------
class Slash {
  constructor(game) {
    this.game = game;
    this.def = CONFIG.skills.slash;
    this.level = 0;
    this.timer = 0.3;
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
    for (const f of this.fx) f.pivot.visible = false;
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
    this.timer = d.cooldown[L] * g.stats.cooldownMult;
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

// ---------- 丟石頭（子彈物件池 + InstancedMesh）----------
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();

class Rock {
  constructor(game) {
    this.game = game;
    this.def = CONFIG.skills.rock;
    this.level = 0;
    this.timer = 0.6;
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
    this.lastHit = new Uint32Array(max);
    this.mesh = new THREE.InstancedMesh(
      new THREE.DodecahedronGeometry(1, 0),
      new THREE.MeshLambertMaterial({ color: 0x9a9184 }),
      max
    );
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    game.world.scene.add(this.mesh);
  }

  setLevel(lv) {
    this.level = lv;
  }

  reset() {
    this.count = 0;
    this.mesh.count = 0;
    this.timer = 0.6;
  }

  fire(tx, tz, damage, pierce) {
    if (this.count >= this.max) return;
    const p = this.game.player;
    const dx = tx - p.x;
    const dz = tz - p.z;
    const l = Math.hypot(dx, dz) || 1;
    const i = this.count++;
    this.x[i] = p.x;
    this.z[i] = p.z;
    this.vx[i] = (dx / l) * this.def.speed;
    this.vz[i] = (dz / l) * this.def.speed;
    this.life[i] = this.def.lifetime;
    this.dmg[i] = damage;
    this.pierce[i] = pierce;
    this.lastHit[i] = 0;
  }

  update(dt) {
    const g = this.game;
    const d = this.def;
    const L = this.level - 1;
    const half = CONFIG.map.size / 2;

    this.timer -= dt;
    if (this.timer <= 0) {
      const p = g.player;
      const n = d.count[L];
      let fired = 0;
      for (let k = 0; k < n; k++) {
        const t = g.enemies.randomInRange(p.x, p.z, d.targetRange);
        if (t < 0) break;
        this.fire(g.enemies.x[t], g.enemies.z[t], d.damage[L] * g.stats.damageMult, d.pierce[L]);
        fired++;
      }
      this.timer = fired ? d.cooldown[L] * g.stats.cooldownMult : 0.2;
    }

    const r = d.radius * g.stats.areaMult;
    for (let i = this.count - 1; i >= 0; i--) {
      this.x[i] += this.vx[i] * dt;
      this.z[i] += this.vz[i] * dt;
      this.life[i] -= dt;
      let alive = this.life[i] > 0 && Math.abs(this.x[i]) < half && Math.abs(this.z[i]) < half;
      if (alive) {
        g.enemies.query(this.x[i], this.z[i], r, (e) => {
          if (g.enemies.uid[e] === this.lastHit[i]) return false;
          g.damageEnemy(e, this.dmg[i], this.x[i] - this.vx[i], this.z[i] - this.vz[i]);
          this.lastHit[i] = g.enemies.uid[e];
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
    this.lastHit[i] = this.lastHit[last];
  }

  syncMesh(time) {
    const sc = this.def.radius * this.game.stats.areaMult;
    for (let i = 0; i < this.count; i++) {
      _p.set(this.x[i], 0.6, this.z[i]);
      _e.set(time * 9 + i, time * 7, 0);
      _q.setFromEuler(_e);
      _s.set(sc, sc, sc);
      _m.compose(_p, _q, _s);
      this.mesh.setMatrixAt(i, _m);
    }
    this.mesh.count = this.count;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

export const SKILL_CLASSES = { slash: Slash, rock: Rock };
