// 怪物：資料用 struct-of-arrays 物件池，畫面用 InstancedMesh，碰撞用空間格子。
// 怪物種類照 CONFIG.enemies 的順序編號；外觀分成 slime（Q 彈球）和 caterpillar（一串小球）兩種畫法，
// 精英和王只是放大、換色的同一種畫法，所以整場怪物仍然只有 2 個 draw call。
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

export const TYPE_KEYS = Object.keys(CONFIG.enemies);
export const TYPE_IDS = Object.fromEntries(TYPE_KEYS.map((k, i) => [k, i]));
const DEFS = TYPE_KEYS.map((k) => CONFIG.enemies[k]);
const RENDER_CAT = DEFS.map((d) => (d.render === 'caterpillar' ? 1 : 0));
const MASS = DEFS.map((d) => d.mass);
const SCALE = DEFS.map((d) => d.scale || 1);
const NO_DESPAWN = DEFS.map((d) => (d.noDespawn ? 1 : 0));
const HEAVY = 20; // 質量超過這個值的怪（王）不會被小怪推開
const CELL = 2.5;

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();
const _white = new THREE.Color(0xffffff);
const _yAxis = new THREE.Vector3(0, 1, 0);

export class Enemies {
  constructor(scene) {
    const max = CONFIG.stage.maxEnemies;
    this.max = max;
    this.count = 0;
    this.type = new Uint8Array(max);
    this.x = new Float32Array(max);
    this.z = new Float32Array(max);
    this.kx = new Float32Array(max); // 擊退速度
    this.kz = new Float32Array(max);
    this.hp = new Float32Array(max);
    this.maxHp = new Float32Array(max);
    this.slow = new Float32Array(max); // 減速剩餘秒數
    this.forced = new Uint8Array(max); // 1 = 由外部（王的招式）決定速度
    this.fvx = new Float32Array(max);
    this.fvz = new Float32Array(max);
    this.speed = new Float32Array(max);
    this.damage = new Float32Array(max);
    this.radius = new Float32Array(max);
    this.flash = new Float32Array(max);
    this.phase = new Float32Array(max);
    this.dead = new Uint8Array(max);
    this.uid = new Uint32Array(max); // 不會因交換位置而改變的編號
    this.lastProj = new Uint32Array(max); // 最後打中它的子彈編號（貫穿子彈不重複打）
    this.nextUid = 1;

    const cat = CONFIG.enemies.caterpillar;
    this.segs = cat.segments;
    this.segX = new Float32Array(max * this.segs);
    this.segZ = new Float32Array(max * this.segs);

    // 空間格子（linked list）
    const half = CONFIG.map.size / 2 + 4;
    this.gridOrigin = -half;
    this.gridW = Math.ceil((half * 2) / CELL);
    this.cellHead = new Int32Array(this.gridW * this.gridW);
    this.cellNext = new Int32Array(max);

    // 佔位外型：史萊姆 = 水藍半透明球；毛蟲 = 一串綠色小球
    const s = CONFIG.enemies.slime;
    this.slimeMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 16, 12),
      new THREE.MeshStandardMaterial({
        color: 0xffffff, transparent: true, opacity: s.opacity, roughness: 0.15, metalness: 0,
      }),
      max
    );
    this.segMesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 10, 8),
      new THREE.MeshLambertMaterial({ color: 0xffffff }),
      max * this.segs
    );
    for (const mesh of [this.slimeMesh, this.segMesh]) {
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.setColorAt(0, _white); // 建立 instanceColor
      mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
      mesh.count = 0;
      mesh.frustumCulled = false;
      scene.add(mesh);
    }
    this.colBody = DEFS.map((d) => new THREE.Color(d.color));
    this.colHead = DEFS.map((d) => new THREE.Color(d.headColor ?? d.color));
  }

  reset() {
    this.count = 0;
    this.slimeMesh.count = 0;
    this.segMesh.count = 0;
  }

  get full() {
    return this.count >= this.max;
  }

  spawn(typeKey, x, z, hpMult, dmgMult, spdMult = 1, dirX = 0, dirZ = 1) {
    if (this.count >= this.max) return -1;
    const def = CONFIG.enemies[typeKey];
    const i = this.count++;
    this.type[i] = TYPE_IDS[typeKey];
    this.x[i] = x;
    this.z[i] = z;
    this.kx[i] = this.kz[i] = 0;
    this.hp[i] = def.hp * hpMult;
    this.maxHp[i] = this.hp[i];
    this.slow[i] = 0;
    this.forced[i] = 0;
    this.speed[i] = def.speed * spdMult * (0.9 + Math.random() * 0.2);
    this.damage[i] = def.damage * dmgMult;
    this.radius[i] = def.radius;
    this.flash[i] = 0;
    this.phase[i] = Math.random() * Math.PI * 2;
    this.dead[i] = 0;
    this.uid[i] = this.nextUid++;
    this.lastProj[i] = 0;
    if (RENDER_CAT[this.type[i]]) {
      const sp = CONFIG.enemies.caterpillar.segmentSpacing * SCALE[this.type[i]];
      for (let k = 0; k < this.segs; k++) {
        this.segX[i * this.segs + k] = x - dirX * sp * k;
        this.segZ[i * this.segs + k] = z - dirZ * sp * k;
      }
    }
    return i;
  }

  // 精英／王一定要出得來：池子滿了就把最後一隻一般怪讓出來
  spawnForced(typeKey, x, z, hpMult = 1) {
    if (this.count >= this.max) {
      for (let i = this.count - 1; i >= 0; i--) {
        const d = DEFS[this.type[i]];
        if (!d.elite && !d.boss) {
          this.moveSlot(this.count - 1, i);
          this.count--;
          break;
        }
      }
    }
    return this.spawn(typeKey, x, z, hpMult, 1, 1);
  }

  // 造成傷害；回傳是否打死。kb = 擊退倍率
  hit(i, amount, fromX, fromZ, kb = 1) {
    if (this.dead[i]) return false;
    this.hp[i] -= amount;
    this.flash[i] = CONFIG.enemyFlashTime;
    const dx = this.x[i] - fromX;
    const dz = this.z[i] - fromZ;
    const l = Math.hypot(dx, dz) || 1;
    const k = (CONFIG.knockback * kb) / MASS[this.type[i]];
    this.kx[i] += (dx / l) * k;
    this.kz[i] += (dz / l) * k;
    if (this.hp[i] <= 0) {
      this.dead[i] = 1;
      return true;
    }
    return false;
  }

  typeKey(i) {
    return TYPE_KEYS[this.type[i]];
  }

  // 找某一種怪的第一隻（王只有一隻），沒有回傳 -1
  findType(typeKey) {
    const t = TYPE_IDS[typeKey];
    for (let i = 0; i < this.count; i++) if (this.type[i] === t && !this.dead[i]) return i;
    return -1;
  }

  // 減速（取較長的那個）
  applySlow(i, seconds) {
    if (this.slow[i] < seconds) this.slow[i] = seconds;
  }

  buildGrid() {
    this.cellHead.fill(-1);
    for (let i = 0; i < this.count; i++) {
      const c = this.cellOf(this.x[i], this.z[i]);
      this.cellNext[i] = this.cellHead[c];
      this.cellHead[c] = i;
    }
  }

  cellOf(x, z) {
    const w = this.gridW;
    let cx = Math.floor((x - this.gridOrigin) / CELL);
    let cz = Math.floor((z - this.gridOrigin) / CELL);
    cx = cx < 0 ? 0 : cx >= w ? w - 1 : cx;
    cz = cz < 0 ? 0 : cz >= w ? w - 1 : cz;
    return cz * w + cx;
  }

  // 對 (x,z) 半徑 r 內的每個活著的怪呼叫 cb(i, distSq)；cb 回傳 true 可提前結束
  query(x, z, r, cb) {
    const w = this.gridW;
    const o = this.gridOrigin;
    const x0 = Math.max(0, Math.floor((x - r - 1 - o) / CELL));
    const x1 = Math.min(w - 1, Math.floor((x + r + 1 - o) / CELL));
    const z0 = Math.max(0, Math.floor((z - r - 1 - o) / CELL));
    const z1 = Math.min(w - 1, Math.floor((z + r + 1 - o) / CELL));
    for (let cz = z0; cz <= z1; cz++) {
      for (let cx = x0; cx <= x1; cx++) {
        for (let i = this.cellHead[cz * w + cx]; i !== -1; i = this.cellNext[i]) {
          if (this.dead[i]) continue;
          const dx = this.x[i] - x;
          const dz = this.z[i] - z;
          const rr = r + this.radius[i];
          const d2 = dx * dx + dz * dz;
          if (d2 <= rr * rr && cb(i, d2)) return;
        }
      }
    }
  }

  nearest(x, z, maxR) {
    let best = -1;
    let bestD = Infinity;
    this.query(x, z, maxR, (i, d2) => {
      if (d2 < bestD) {
        bestD = d2;
        best = i;
      }
    });
    return best;
  }

  randomInRange(x, z, maxR) {
    // 蓄水池抽樣：不用額外陣列
    let pick = -1;
    let n = 0;
    this.query(x, z, maxR, (i) => {
      n++;
      if (Math.random() * n < 1) pick = i;
    });
    return pick;
  }

  update(dt, px, pz, time, world, respawn) {
    const half = CONFIG.map.size / 2;
    const despawn = CONFIG.stage.despawnDistance;
    const cat = CONFIG.enemies.caterpillar;
    this.buildGrid();

    for (let i = 0; i < this.count; i++) {
      if (this.dead[i]) continue;
      let dx = px - this.x[i];
      let dz = pz - this.z[i];
      const dist = Math.hypot(dx, dz) || 1;
      if (dist > despawn && !NO_DESPAWN[this.type[i]]) {
        respawn(i);
        continue;
      }
      dx /= dist;
      dz /= dist;
      const t = this.type[i];
      // 毛蟲會左右扭動前進
      if (RENDER_CAT[t]) {
        const wig = Math.sin(time * 4 + this.phase[i]) * 0.45;
        const tx = dx - dz * wig;
        const tz = dz + dx * wig;
        const l = Math.hypot(tx, tz);
        dx = tx / l;
        dz = tz / l;
      }
      let spd = this.speed[i];
      if (this.slow[i] > 0) {
        this.slow[i] -= dt;
        spd *= 0.5;
      }
      let vx = dx * spd;
      let vz = dz * spd;
      if (this.forced[i]) {
        vx = this.fvx[i];
        vz = this.fvz[i];
      }

      // 分離：避免全部疊成一團
      const ri = this.radius[i];
      const xi = this.x[i];
      const zi = this.z[i];
      let sx = 0;
      let sz = 0;
      if (MASS[t] < HEAVY) this.query(xi, zi, ri, (j, d2) => {
        if (j === i) return false;
        const rr = ri + this.radius[j];
        if (d2 < rr * rr && d2 > 1e-6) {
          const d = Math.sqrt(d2);
          const push = (rr - d) / rr;
          sx += ((xi - this.x[j]) / d) * push;
          sz += ((zi - this.z[j]) / d) * push;
        }
        return false;
      });
      vx += sx * 4;
      vz += sz * 4;

      // 擊退衰減
      vx += this.kx[i];
      vz += this.kz[i];
      const decay = Math.exp(-10 * dt);
      this.kx[i] *= decay;
      this.kz[i] *= decay;

      let nx = xi + vx * dt;
      let nz = zi + vz * dt;
      const lim = half - ri;
      nx = nx < -lim ? -lim : nx > lim ? lim : nx;
      nz = nz < -lim ? -lim : nz > lim ? lim : nz;
      this.x[i] = nx;
      this.z[i] = nz;
      if (this.flash[i] > 0) this.flash[i] -= dt;

      if (RENDER_CAT[t]) {
        const b = i * this.segs;
        const spacing = cat.segmentSpacing * SCALE[t];
        this.segX[b] = nx;
        this.segZ[b] = nz;
        for (let k = 1; k < this.segs; k++) {
          const ax = this.segX[b + k - 1];
          const az = this.segZ[b + k - 1];
          const ex = this.segX[b + k] - ax;
          const ez = this.segZ[b + k] - az;
          const l = Math.hypot(ex, ez) || 1;
          this.segX[b + k] = ax + (ex / l) * spacing;
          this.segZ[b + k] = az + (ez / l) * spacing;
        }
      }
    }
  }

  // 把死掉的怪移出物件池（和最後一個交換），每隻死怪呼叫 onDeath
  compact(onDeath) {
    for (let i = this.count - 1; i >= 0; i--) {
      if (!this.dead[i]) continue;
      onDeath(i);
      this.moveSlot(this.count - 1, i);
      this.count--;
    }
  }

  moveSlot(from, to) {
    if (from === to) return;
    this.type[to] = this.type[from];
    this.x[to] = this.x[from];
    this.z[to] = this.z[from];
    this.kx[to] = this.kx[from];
    this.kz[to] = this.kz[from];
    this.hp[to] = this.hp[from];
    this.maxHp[to] = this.maxHp[from];
    this.slow[to] = this.slow[from];
    this.forced[to] = this.forced[from];
    this.fvx[to] = this.fvx[from];
    this.fvz[to] = this.fvz[from];
    this.speed[to] = this.speed[from];
    this.damage[to] = this.damage[from];
    this.radius[to] = this.radius[from];
    this.flash[to] = this.flash[from];
    this.phase[to] = this.phase[from];
    this.dead[to] = this.dead[from];
    this.uid[to] = this.uid[from];
    this.lastProj[to] = this.lastProj[from];
    const s = this.segs;
    this.segX.copyWithin(to * s, from * s, from * s + s);
    this.segZ.copyWithin(to * s, from * s, from * s + s);
  }

  // 搬到新位置（離太遠時重新出現在出怪圈）
  relocate(i, x, z) {
    this.x[i] = x;
    this.z[i] = z;
    const s = this.segs;
    for (let k = 0; k < s; k++) {
      this.segX[i * s + k] = x;
      this.segZ[i * s + k] = z;
    }
  }

  syncMeshes(time) {
    const cat = CONFIG.enemies.caterpillar;
    let ns = 0;
    let nc = 0;
    for (let i = 0; i < this.count; i++) {
      const flashing = this.flash[i] > 0;
      const t = this.type[i];
      if (!RENDER_CAT[t]) {
        // 史萊姆：Q 彈的上下壓扁動畫（大小跟著碰撞半徑）
        const r = this.radius[i];
        const b = Math.sin(time * 6 + this.phase[i]);
        const sy = r * (0.8 + 0.12 * b);
        const sxz = r * (1.05 - 0.08 * b);
        _p.set(this.x[i], sy, this.z[i]);
        _s.set(sxz, sy, sxz);
        _q.identity();
        _m.compose(_p, _q, _s);
        this.slimeMesh.setMatrixAt(ns, _m);
        this.slimeMesh.setColorAt(ns, flashing ? _white : this.colBody[t]);
        ns++;
      } else {
        const base = i * this.segs;
        const sc = SCALE[t];
        for (let k = 0; k < this.segs; k++) {
          const r = sc * (k === 0 ? cat.segmentRadius * 1.15 : cat.segmentRadius * (1 - k * 0.06));
          const hop = Math.abs(Math.sin(time * 8 + this.phase[i] - k * 0.8)) * 0.12 * sc;
          _p.set(this.segX[base + k], r + hop, this.segZ[base + k]);
          _s.set(r, r, r);
          _q.setFromAxisAngle(_yAxis, 0);
          _m.compose(_p, _q, _s);
          this.segMesh.setMatrixAt(nc, _m);
          _c.copy(k === 0 ? this.colHead[t] : this.colBody[t]);
          this.segMesh.setColorAt(nc, flashing ? _white : _c);
          nc++;
        }
      }
    }
    this.slimeMesh.count = ns;
    this.segMesh.count = nc;
    this.slimeMesh.instanceMatrix.needsUpdate = true;
    this.slimeMesh.instanceColor.needsUpdate = true;
    this.segMesh.instanceMatrix.needsUpdate = true;
    this.segMesh.instanceColor.needsUpdate = true;
  }
}
