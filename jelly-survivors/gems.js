// 經驗寶石：小藍 / 中綠 / 大紫，物件池 + 單一 InstancedMesh（用 instanceColor 分色）。
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

const KINDS = ['small', 'medium', 'large'];
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _y = new THREE.Vector3(0, 1, 0);

export class Gems {
  constructor(scene) {
    const max = CONFIG.xp.maxGems;
    this.max = max;
    this.count = 0;
    this.x = new Float32Array(max);
    this.z = new Float32Array(max);
    this.value = new Float32Array(max);
    this.kind = new Uint8Array(max);
    this.pulled = new Uint8Array(max); // 已被吸住
    this.vel = new Float32Array(max);
    this.colors = KINDS.map((k) => new THREE.Color(CONFIG.xp.gems[k].color));

    this.mesh = new THREE.InstancedMesh(
      new THREE.OctahedronGeometry(1, 0),
      new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x222222 }),
      max
    );
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.setColorAt(0, this.colors[0]);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }

  reset() {
    this.count = 0;
    this.mesh.count = 0;
  }

  // 依怪物的掉落表決定掉哪一種
  dropFrom(table, x, z) {
    const r = Math.random();
    let kind = 'small';
    if (r < table.large) kind = 'large';
    else if (r < table.large + table.medium) kind = 'medium';
    this.add(kind, x, z);
  }

  add(kindKey, x, z) {
    const val = CONFIG.xp.gems[kindKey].value;
    if (this.count >= this.max) {
      // 池子滿了：把經驗併到一顆既有的寶石，並升級它的外觀
      const j = Math.floor(Math.random() * this.count);
      this.value[j] += val;
      if (this.value[j] >= CONFIG.xp.gems.large.value) this.kind[j] = 2;
      else if (this.value[j] >= CONFIG.xp.gems.medium.value) this.kind[j] = Math.max(this.kind[j], 1);
      return;
    }
    const i = this.count++;
    this.x[i] = x;
    this.z[i] = z;
    this.value[i] = val;
    this.kind[i] = KINDS.indexOf(kindKey);
    this.pulled[i] = 0;
    this.vel[i] = 0;
  }

  // 回傳這一幀收到的經驗
  update(dt, px, pz, pickupRadius) {
    const pr2 = pickupRadius * pickupRadius;
    const cr = CONFIG.xp.gemCollectRadius;
    const maxV = CONFIG.xp.gemMagnetSpeed;
    let gained = 0;
    for (let i = this.count - 1; i >= 0; i--) {
      const dx = px - this.x[i];
      const dz = pz - this.z[i];
      const d2 = dx * dx + dz * dz;
      if (!this.pulled[i] && d2 < pr2) this.pulled[i] = 1;
      if (this.pulled[i]) {
        const d = Math.sqrt(d2) || 1;
        this.vel[i] = Math.min(maxV, this.vel[i] + 40 * dt);
        const step = Math.min(d, this.vel[i] * dt);
        this.x[i] += (dx / d) * step;
        this.z[i] += (dz / d) * step;
        if (d - step < cr) {
          gained += this.value[i];
          this.removeAt(i);
        }
      }
    }
    return gained;
  }

  // 一次吸全部（之後的「磁鐵」道具可以用）
  pullAll() {
    this.pulled.fill(1, 0, this.count);
  }

  removeAt(i) {
    const last = --this.count;
    if (i === last) return;
    this.x[i] = this.x[last];
    this.z[i] = this.z[last];
    this.value[i] = this.value[last];
    this.kind[i] = this.kind[last];
    this.pulled[i] = this.pulled[last];
    this.vel[i] = this.vel[last];
  }

  syncMesh(time) {
    for (let i = 0; i < this.count; i++) {
      const k = this.kind[i];
      const sc = CONFIG.xp.gems[KINDS[k]].scale;
      _p.set(this.x[i], 0.35 + Math.sin(time * 3 + i) * 0.08, this.z[i]);
      _q.setFromAxisAngle(_y, time * 2 + i);
      _s.set(sc * 0.7, sc, sc * 0.7);
      _m.compose(_p, _q, _s);
      this.mesh.setMatrixAt(i, _m);
      this.mesh.setColorAt(i, this.colors[k]);
    }
    this.mesh.count = this.count;
    this.mesh.instanceMatrix.needsUpdate = true;
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }
}
