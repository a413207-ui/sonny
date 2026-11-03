// 怪物：資料用 struct-of-arrays 物件池，畫面用 InstancedMesh，碰撞用空間格子。
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

const TYPE_IDS = { slime: 0, caterpillar: 1 };
const TYPE_KEYS = ['slime', 'caterpillar'];
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
    this.speed = new Float32Array(max);
    this.damage = new Float32Array(max);
    this.radius = new Float32Array(max);
    this.flash = new Float32Array(max);
    this.phase = new Float32Array(max);
    this.dead = new Uint8Array(max);
    this.uid = new Uint32Array(max); // 不會因交換位置而改變的編號
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
    this.colSlime = new THREE.Color(s.color);
    this.colCat = new THREE.Color(cat.color);
    this.colCatHead = new THREE.Color(cat.headColor);
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
    this.speed[i] = def.speed * spdMult * (0.9 + Math.random() * 0.2);
    this.damage[i] = def.damage * dmgMult;
    this.radius[i] = def.radius;
    this.flash[i] = 0;
    this.phase[i] = Math.random() * Math.PI * 2;
    this.dead[i] = 0;
    this.uid[i] = this.nextUid++;
    if (typeKey === 'caterpillar') {
      const sp = def.segmentSpacing;
      for (let k = 0; k < this.segs; k++) {
        this.segX[i * this.segs + k] = x - dirX * sp * k;
        this.segZ[i * this.segs + k] = z - dirZ * sp * k;
      }
    }
    return i;
  }

  // 造成傷害；回傳是否打死
  hit(i, amount, fromX, fromZ) {
    if (this.dead[i]) return false;
    this.hp[i] -= amount;
    this.flash[i] = CONFIG.enemyFlashTime;
    const dx = this.x[i] - fromX;
    const dz = this.z[i] - fromZ;
    const l = Math.hypot(dx, dz) || 1;
    const mass = CONFIG.enemies[TYPE_KEYS[this.type[i]]].mass;
    this.kx[i] += (dx / l) * CONFIG.knockback / mass;
    this.kz[i] += (dz / l) * CONFIG.knockback / mass;
    if (this.hp[i] <= 0) {
      this.dead[i] = 1;
      return true;
    }
    return false;
  }

  typeKey(i) {
    return TYPE_KEYS[this.type[i]];
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
      if (dist > despawn) {
        respawn(i);
        continue;
      }
      dx /= dist;
      dz /= dist;
      // 毛蟲會左右扭動前進
      if (this.type[i] === 1) {
        const wig = Math.sin(time * 4 + this.phase[i]) * 0.45;
        const tx = dx - dz * wig;
        const tz = dz + dx * wig;
        const l = Math.hypot(tx, tz);
        dx = tx / l;
        dz = tz / l;
      }
      let vx = dx * this.speed[i];
      let vz = dz * this.speed[i];

      // 分離：避免全部疊成一團
      const ri = this.radius[i];
      const xi = this.x[i];
      const zi = this.z[i];
      let sx = 0;
      let sz = 0;
      this.query(xi, zi, ri, (j, d2) => {
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

      if (this.type[i] === 1) {
        const b = i * this.segs;
        this.segX[b] = nx;
        this.segZ[b] = nz;
        for (let k = 1; k < this.segs; k++) {
          const ax = this.segX[b + k - 1];
          const az = this.segZ[b + k - 1];
          const ex = this.segX[b + k] - ax;
          const ez = this.segZ[b + k] - az;
          const l = Math.hypot(ex, ez) || 1;
          this.segX[b + k] = ax + (ex / l) * cat.segmentSpacing;
          this.segZ[b + k] = az + (ez / l) * cat.segmentSpacing;
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
    this.speed[to] = this.speed[from];
    this.damage[to] = this.damage[from];
    this.radius[to] = this.radius[from];
    this.flash[to] = this.flash[from];
    this.phase[to] = this.phase[from];
    this.dead[to] = this.dead[from];
    this.uid[to] = this.uid[from];
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
    const slime = CONFIG.enemies.slime;
    const cat = CONFIG.enemies.caterpillar;
    let ns = 0;
    let nc = 0;
    for (let i = 0; i < this.count; i++) {
      const flashing = this.flash[i] > 0;
      if (this.type[i] === 0) {
        // 史萊姆：Q 彈的上下壓扁動畫
        const r = slime.radius;
        const b = Math.sin(time * 6 + this.phase[i]);
        const sy = r * (0.8 + 0.12 * b);
        const sxz = r * (1.05 - 0.08 * b);
        _p.set(this.x[i], sy, this.z[i]);
        _s.set(sxz, sy, sxz);
        _q.identity();
        _m.compose(_p, _q, _s);
        this.slimeMesh.setMatrixAt(ns, _m);
        this.slimeMesh.setColorAt(ns, flashing ? _white : this.colSlime);
        ns++;
      } else {
        const base = i * this.segs;
        for (let k = 0; k < this.segs; k++) {
          const r = k === 0 ? cat.segmentRadius * 1.15 : cat.segmentRadius * (1 - k * 0.06);
          const hop = Math.abs(Math.sin(time * 8 + this.phase[i] - k * 0.8)) * 0.12;
          _p.set(this.segX[base + k], r + hop, this.segZ[base + k]);
          _s.set(r, r, r);
          _q.setFromAxisAngle(_yAxis, 0);
          _m.compose(_p, _q, _s);
          this.segMesh.setMatrixAt(nc, _m);
          _c.copy(k === 0 ? this.colCatHead : this.colCat);
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
