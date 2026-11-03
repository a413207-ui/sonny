// 地上的金幣與遺忘藥水：物件池 + 兩個 InstancedMesh。吸取範圍和經驗寶石相同。
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

const COIN = 0;
const POTION = 1;
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();

export class Pickups {
  constructor(scene) {
    const c = CONFIG.pickups;
    const max = c.max;
    this.max = max;
    this.count = 0;
    this.x = new Float32Array(max);
    this.z = new Float32Array(max);
    this.kind = new Uint8Array(max);
    this.value = new Float32Array(max);
    this.pulled = new Uint8Array(max);
    this.vel = new Float32Array(max);
    this.overflowGold = 0; // 池子滿時直接入帳的金幣
    this.overflowPotions = 0;

    const mk = (geo, color) => {
      const mesh = new THREE.InstancedMesh(geo, new THREE.MeshLambertMaterial({ color, emissive: 0x332200 }), max);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.count = 0;
      mesh.frustumCulled = false;
      scene.add(mesh);
      return mesh;
    };
    this.coinMesh = mk(new THREE.CylinderGeometry(1, 1, 0.25, 14), c.coinColor);
    this.potionMesh = mk(new THREE.SphereGeometry(1, 10, 8), c.potionColor);
  }

  reset() {
    this.count = 0;
    this.coinMesh.count = 0;
    this.potionMesh.count = 0;
    this.overflowGold = 0;
    this.overflowPotions = 0;
  }

  add(kind, x, z, value) {
    if (this.count >= this.max) {
      if (kind === COIN) this.overflowGold += value;
      else this.overflowPotions += value;
      return;
    }
    const i = this.count++;
    this.x[i] = x;
    this.z[i] = z;
    this.kind[i] = kind;
    this.value[i] = value;
    this.pulled[i] = 0;
    this.vel[i] = 0;
  }

  addGold(x, z, amount) {
    this.add(COIN, x, z, amount);
  }

  addPotion(x, z) {
    this.add(POTION, x, z, 1);
  }

  // 回傳 { gold, potions } 這一幀撿到的量
  update(dt, px, pz, pickupRadius, out) {
    out.gold = this.overflowGold;
    out.potions = this.overflowPotions;
    this.overflowGold = 0;
    this.overflowPotions = 0;
    const pr2 = pickupRadius * pickupRadius;
    const cr = CONFIG.pickups.collectRadius;
    const maxV = CONFIG.xp.gemMagnetSpeed;
    for (let i = this.count - 1; i >= 0; i--) {
      const dx = px - this.x[i];
      const dz = pz - this.z[i];
      const d2 = dx * dx + dz * dz;
      if (!this.pulled[i] && d2 < pr2) this.pulled[i] = 1;
      if (!this.pulled[i]) continue;
      const d = Math.sqrt(d2) || 1;
      this.vel[i] = Math.min(maxV, this.vel[i] + 40 * dt);
      const step = Math.min(d, this.vel[i] * dt);
      this.x[i] += (dx / d) * step;
      this.z[i] += (dz / d) * step;
      if (d - step < cr) {
        if (this.kind[i] === COIN) out.gold += this.value[i];
        else out.potions += this.value[i];
        this.removeAt(i);
      }
    }
    return out;
  }

  // 過關時把地上的金幣全部算進來
  collectAllGold() {
    let g = 0;
    for (let i = this.count - 1; i >= 0; i--) {
      if (this.kind[i] === COIN) {
        g += this.value[i];
        this.removeAt(i);
      }
    }
    return g;
  }

  removeAt(i) {
    const last = --this.count;
    if (i === last) return;
    this.x[i] = this.x[last];
    this.z[i] = this.z[last];
    this.kind[i] = this.kind[last];
    this.value[i] = this.value[last];
    this.pulled[i] = this.pulled[last];
    this.vel[i] = this.vel[last];
  }

  syncMesh(time) {
    let nc = 0;
    let np = 0;
    for (let i = 0; i < this.count; i++) {
      if (this.kind[i] === COIN) {
        const sc = this.value[i] >= 10 ? 0.55 : 0.32;
        _p.set(this.x[i], 0.45 + Math.sin(time * 3 + i) * 0.06, this.z[i]);
        _e.set(Math.PI / 2, time * 3 + i, 0, 'YXZ');
        _q.setFromEuler(_e);
        _s.set(sc, sc, sc);
        _m.compose(_p, _q, _s);
        this.coinMesh.setMatrixAt(nc++, _m);
      } else {
        const b = Math.sin(time * 5 + i) * 0.05;
        _p.set(this.x[i], 0.5 + b, this.z[i]);
        _q.identity();
        _s.set(0.35, 0.45, 0.35);
        _m.compose(_p, _q, _s);
        this.potionMesh.setMatrixAt(np++, _m);
      }
    }
    this.coinMesh.count = nc;
    this.potionMesh.count = np;
    this.coinMesh.instanceMatrix.needsUpdate = true;
    this.potionMesh.instanceMatrix.needsUpdate = true;
  }
}
