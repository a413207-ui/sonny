// 王：果凍史萊姆王。本體放在怪物物件池裡（所以所有招式都打得到），這裡只負責招式與附加外觀。
// 招式：
//   衝撞 —— 停下蓄力（地上出現紅色警示帶）→ 朝玩家方向高速衝刺
//   分裂 —— 定時在身邊分裂出小史萊姆；血量低於一半時立刻大分裂一次，之後衝撞變頻繁
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';

export class BossAI {
  constructor(game) {
    this.game = game;
    this.def = CONFIG.enemies[CONFIG.boss.type];
    // 王冠（佔位外觀）
    this.crown = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.1, 0.7, 6, 1, true),
      new THREE.MeshLambertMaterial({ color: 0xffd23f, emissive: 0x553300, side: THREE.DoubleSide })
    );
    this.crown.visible = false;
    game.world.scene.add(this.crown);
    // 衝撞警示帶
    this.warn = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff3030, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide })
    );
    this.warn.rotation.x = -Math.PI / 2;
    this.warn.visible = false;
    game.world.scene.add(this.warn);
    this.reset();
  }

  reset() {
    this.spawned = false;
    this.alive = false;
    this.state = 'chase';
    this.timer = 0;
    this.splitTimer = 0;
    this.enraged = false;
    this.dirX = 0;
    this.dirZ = 1;
    this.crown.visible = false;
    this.warn.visible = false;
  }

  spawn() {
    const g = this.game;
    const pt = g.spawnPoint();
    const i = g.enemies.spawnForced(CONFIG.boss.type, pt.x, pt.z);
    if (i < 0) return false;
    this.spawned = true;
    this.alive = true;
    this.state = 'chase';
    this.timer = CONFIG.boss.charge.interval * 0.6;
    this.splitTimer = CONFIG.boss.split.interval;
    return true;
  }

  index() {
    return this.alive ? this.game.enemies.findType(CONFIG.boss.type) : -1;
  }

  // 王的血量比例（給血條用）
  hpFrac() {
    const i = this.index();
    if (i < 0) return 0;
    const en = this.game.enemies;
    return Math.max(0, en.hp[i] / en.maxHp[i]);
  }

  update(dt) {
    const i = this.index();
    if (i < 0) return;
    const B = CONFIG.boss;
    const g = this.game;
    const en = g.enemies;
    const p = g.player;

    if (!this.enraged && en.hp[i] / en.maxHp[i] < B.enrageHpFrac) {
      this.enraged = true;
      this.split(i, B.enrageSplitCount);
    }

    this.splitTimer -= dt;
    if (this.splitTimer <= 0) {
      this.splitTimer = B.split.interval;
      this.split(i, B.split.count);
    }

    this.timer -= dt;
    const C = B.charge;
    if (this.state === 'chase') {
      en.forced[i] = 0;
      if (this.timer <= 0) {
        this.state = 'windup';
        this.timer = C.windup;
        const dx = p.x - en.x[i];
        const dz = p.z - en.z[i];
        const l = Math.hypot(dx, dz) || 1;
        this.dirX = dx / l;
        this.dirZ = dz / l;
        en.forced[i] = 1;
        en.fvx[i] = en.fvz[i] = 0;
      }
    } else if (this.state === 'windup') {
      if (this.timer <= 0) {
        this.state = 'charge';
        this.timer = C.duration;
        en.fvx[i] = this.dirX * C.speed;
        en.fvz[i] = this.dirZ * C.speed;
      }
    } else if (this.timer <= 0) {
      this.state = 'chase';
      en.forced[i] = 0;
      this.timer = C.interval * (this.enraged ? B.enrageChargeMult : 1);
    }
  }

  split(i, n) {
    const g = this.game;
    const en = g.enemies;
    const hpMult = CONFIG.boss.split.hpMult * Math.pow(CONFIG.stage.hpGrowth, g.tier);
    const r = en.radius[i] + 0.8;
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 + Math.random() * 0.3;
      if (en.spawn('slime', en.x[i] + Math.cos(a) * r, en.z[i] + Math.sin(a) * r, hpMult, 1, 1.1, Math.cos(a), Math.sin(a)) < 0) break;
    }
  }

  onDeath() {
    this.alive = false;
    this.crown.visible = false;
    this.warn.visible = false;
  }

  syncMesh(time) {
    const i = this.index();
    if (i < 0) {
      this.crown.visible = false;
      this.warn.visible = false;
      return;
    }
    const en = this.game.enemies;
    const r = en.radius[i];
    const b = Math.sin(time * 6 + en.phase[i]);
    this.crown.visible = true;
    this.crown.position.set(en.x[i], r * (0.8 + 0.12 * b) * 2 + 0.15, en.z[i]);
    this.crown.rotation.y = time * 0.8;
    if (this.state === 'windup') {
      const len = CONFIG.boss.charge.speed * CONFIG.boss.charge.duration;
      this.warn.visible = true;
      this.warn.scale.set(r * 2, len, 1);
      this.warn.rotation.z = -Math.atan2(this.dirX, -this.dirZ);
      this.warn.position.set(en.x[i] + this.dirX * len / 2, 0.08, en.z[i] + this.dirZ * len / 2);
      this.warn.material.opacity = 0.2 + 0.25 * (0.5 + 0.5 * Math.sin(time * 20));
    } else {
      this.warn.visible = false;
    }
  }
}
