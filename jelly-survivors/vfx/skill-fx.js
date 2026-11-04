// 技能 → 00GameDevs 特效的接法（只加視覺，不改任何技能邏輯或數值）。
// 對應表見 MANIFEST（docs/vfx.md 有整理）。原本的簡單幾何特效保留當「備援」：
// 特效還沒載入、或物件池滿了的那一發，就照舊顯示原本的幾何形狀。
import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { VfxSystem } from './system.js';

// 職業配色（跟 config.js 的職業／招式顏色同一套）
const C = {
  novice: '#f0c860',
  blade: '#ff8a5c',
  bladeDeep: '#d0703c',
  bladeGold: '#e8b040',
  mage: '#9c7bff',
  frost: '#6fd0ff',
  arcane: '#c05cff',
  ranger: '#4fcf8a',
  rangerMark: '#d6ff7a', // 預警圈用比較亮的黃綠，在草地上才看得清楚
  feather: '#8be0c0',
  arrowTint: '#c8ffd8', // 箭雨：把冰槍改成箭的淡綠色
};

// cap = 物件池大小 [高, 中, 低]；set = 什麼時候載入（novice 開局、職業 id 轉職後）
// fixed = 不受品質的 density/detail 影響（預警圈這種純外框）
export const BINDINGS = {
  // ----- 初心者（開局載入）-----
  slash: { fx: 'azure-sweep', set: 'novice', opts: { color: C.novice }, cap: [4, 3, 2] },
  rockHit: { fx: 'shockwave', set: 'novice', opts: { color: '#c9bfae', speed: 1.5 }, cap: [6, 3, 1] },
  death: { fx: 'smoke-puff', set: 'novice', opts: { color: '#e4e0f0' }, cap: [14, 8, 4] },
  levelUp: { fx: 'revival-bloom', set: 'novice', cap: [2, 1, 1] },
  // ----- 果凍劍士 -----
  whirl: { fx: 'shadow-glaive', set: 'blade', opts: { color: C.blade }, cap: [4, 4, 4], maxLife: Infinity },
  quake: { fx: 'magma-fissure', set: 'blade', opts: { color: C.bladeDeep }, cap: [12, 6, 3] },
  quakeBurst: { fx: 'shockwave', set: 'blade', opts: { color: '#e8a070' }, cap: [3, 2, 1] },
  guard: { fx: 'prism-guard', set: 'blade', opts: { color: C.bladeGold }, cap: [2, 1, 1] },
  guardWave: { fx: 'shockwave', set: 'blade', opts: { color: '#ffe08a' }, cap: [2, 1, 1] },
  // ----- 星屑術士 -----
  meteor: { fx: 'fireball', set: 'mage', opts: { color: C.mage }, cap: [8, 5, 4] },
  frost: { fx: 'ice-shatter', set: 'mage', opts: { color: C.frost }, cap: [2, 2, 1] },
  arcane: { fx: 'arcane-missile', set: 'mage', opts: { color: C.arcane, quantity: 2 }, cap: [10, 6, 4] },
  // ----- 疾風射手 -----
  volley: { fx: 'electric-magic-arrow-strike', set: 'ranger', opts: { color: C.ranger }, cap: [12, 6, 3] },
  feather: { fx: 'spiral-gale', set: 'ranger', opts: { color: C.feather }, cap: [8, 5, 3] },
  rainMark: {
    fx: 'spell-indicator-circle', set: 'ranger', fixed: true,
    opts: { color: C.rangerMark, size: 1, warningDuration: CONFIG.skills.rain.delay }, cap: [12, 8, 6],
  },
  rain: { fx: 'frost-lance-rain', set: 'ranger', opts: { color: C.arrowTint, quantity: 6 }, cap: [8, 6, 4] },
};

const SETS = {};
for (const [k, b] of Object.entries(BINDINGS)) (SETS[b.set] ||= []).push(k);

// 視覺大小（特效原本的單位 → 遊戲世界）。數字是用 tools 的截圖比對出來的。
const NATIVE = {
  sweepRadius: 2.9, // azure-sweep 環的半徑
  shockRadius: 2.2, // shockwave
  iceRadius: 2.0, // ice-shatter
  fissureLen: 4.4, // magma-fissure 一段裂痕長度
  rainSpread: 1.5, // frost-lance-rain 落點範圍
};

// frost-lance-rain 的冰槍大約在 0.6 秒（視覺時間）落地
const RAIN_LAND = 0.6;

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();
const ZERO_M = new THREE.Matrix4().makeScale(0, 0, 0);
const UP = new THREE.Vector3(0, 1, 0);
const X_AXIS = new THREE.Vector3(1, 0, 0);

// ---------- 子彈類：每顆子彈跟著一個特效 ----------
// 用子彈的 serial 追蹤（weapons.js 的陣列會換位置，但 serial 不變），不用改子彈邏輯。
class ProjectileFx {
  constructor(sys, skill, key, { scale = 0.5, y = 0.6, skipStart = 0, onEnd = null, instanced = null } = {}) {
    this.sys = sys;
    this.skill = skill;
    this.key = key;
    this.scale = scale;
    this.y = y;
    this.skipStart = skipStart; // 跳過蓄力（例如雷矢 1.2 秒蓄力，遊戲裡箭是立刻射出去的）
    this.onEnd = onEnd;
    this.instanced = instanced; // 丟石頭：改用 InstancedMesh 畫石頭模型
    this.map = new Map();
    this.free = [];
    this.stamp = 0;
  }

  rec() {
    return this.free.pop() || { item: null, stamp: 0, x: 0, z: 0, life: 0 };
  }

  reset() {
    for (const r of this.map.values()) {
      if (r.item) this.sys.release(r.item);
      r.item = null;
      this.free.push(r);
    }
    this.map.clear();
  }

  sync(time) {
    const sk = this.skill;
    if (sk.count === 0 && this.map.size === 0) return;
    const stamp = ++this.stamp;
    let covered = 0;
    for (let i = 0; i < sk.count; i++) {
      const serial = sk.serial[i];
      let r = this.map.get(serial);
      if (!r) {
        r = this.rec();
        r.item = this.key && !this.instanced ? this.sys.play(this.key) : null;
        if (r.item) {
          r.item.fx.group.scale.setScalar(this.scale);
          if (this.skipStart) r.item.fx.update(this.skipStart);
        }
        this.map.set(serial, r);
      }
      r.stamp = stamp;
      r.x = sk.x[i];
      r.z = sk.z[i];
      r.life = sk.life[i];
      if (this.instanced) {
        covered++;
        continue;
      }
      if (!r.item) continue;
      const g = r.item.fx.group;
      g.position.set(r.x, this.y, r.z);
      // 用 setDirection 讓特效知道「正在飛」（雷矢的電弧、尾跡會跟著變）；位置每幀再對齊子彈
      _v.set(sk.vx[i], 0, sk.vz[i]);
      const spd = _v.length();
      if (spd > 1e-4) r.item.fx.setDirection(_v.multiplyScalar(1 / spd), spd);
      sk.mesh.setMatrixAt(i, ZERO_M); // 這顆有特效了，原本的簡單幾何藏起來
      covered++;
    }
    if (this.instanced) this.instanced.sync(sk, time);
    else if (covered === sk.count) sk.mesh.visible = false;
    for (const [serial, r] of this.map) {
      if (r.stamp === stamp) continue;
      // 不見了：還有壽命 = 打中東西；壽命用完 = 自然消失
      const hit = r.life > 0.06 && Math.abs(r.x) < CONFIG.map.size / 2 && Math.abs(r.z) < CONFIG.map.size / 2;
      if (r.item) {
        if (hit) r.item.fx.hit?.(_v2.set(r.x, this.y, r.z));
        else r.item.fx.stop?.();
      }
      if (this.onEnd) this.onEnd(r, hit);
      r.item = null;
      this.map.delete(serial);
      this.free.push(r);
    }
  }
}

// 丟石頭：00GameDevs 的 angular-rock 模型，拆成每個材質一個 InstancedMesh（全部石頭只多幾個 draw call）
class RockInstances {
  constructor(scene, asset, max, scale) {
    this.meshes = [];
    this.scale = scale;
    asset.group.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(asset.group);
    const center = box.getCenter(new THREE.Vector3());
    asset.group.traverse((o) => {
      if (!o.isMesh) return;
      const geo = o.geometry.clone();
      geo.applyMatrix4(o.matrixWorld);
      geo.translate(-center.x, -center.y, -center.z); // 以石頭中心旋轉
      const im = new THREE.InstancedMesh(geo, o.material, max);
      im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      im.count = 0;
      im.frustumCulled = false;
      im.visible = false;
      scene.add(im);
      this.meshes.push(im);
    });
  }

  sync(sk, time) {
    const sc = this.scale * sk.def.radius * sk.game.stats.areaMult / 0.3;
    for (let i = 0; i < sk.count; i++) {
      _e.set(time * 9 + i, time * 7, 0);
      _q.setFromEuler(_e);
      _m.compose(_v.set(sk.x[i], 0.6, sk.z[i]), _q, _s.set(sc, sc, sc));
      for (const im of this.meshes) im.setMatrixAt(i, _m);
    }
    for (const im of this.meshes) {
      im.count = sk.count;
      im.visible = sk.count > 0;
      im.instanceMatrix.needsUpdate = true;
    }
    sk.mesh.visible = false;
  }
}

export class SkillFx {
  constructor(game) {
    this.game = game;
    this.sys = new VfxSystem(game.world, BINDINGS, { mobile: CONFIG.isMobile });
    this.sk = game.skills;
    this.ready = new Set();
    this.proj = {};
    this.strikeRecs = new Map(); // Strike 的格子 → { mark, boom }
    this.whirlItems = [];
  }

  get quality() {
    return this.sys.quality;
  }

  setQuality(q) {
    return this.sys.setQuality(q);
  }

  // 載入一組特效（'novice' 開局；'blade' / 'mage' / 'ranger' 轉職後）
  async prepare(set) {
    if (this.ready.has(set)) return;
    const jobs = [this.sys.prepare(SETS[set] || [])];
    if (set === 'novice') jobs.push(this.prepareRock());
    await Promise.all(jobs);
    this.ready.add(set);
    this.attach(set);
  }

  async prepareRock() {
    const mod = await this.sys.load('angular-rock');
    const asset = mod.default();
    this.rockInst = new RockInstances(this.game.world.scene, asset, CONFIG.maxProjectiles, 0.42);
    asset.dispose();
    // 預熱石頭的材質：先放一顆在鏡頭前編譯，再藏起來
    const t = this.game.world.camTarget;
    for (const im of this.rockInst.meshes) {
      im.setMatrixAt(0, _m.makeTranslation(t.x, 0.6, t.z));
      im.count = 1;
      im.visible = true;
    }
    this.sys.prewarm([]);
    for (const im of this.rockInst.meshes) {
      im.count = 0;
      im.visible = false;
    }
  }

  // 特效都準備好之後，才把子彈類接上（之前一律用原本的幾何）
  attach(set) {
    const s = this.sk;
    const sys = this.sys;
    if (set === 'novice') {
      this.proj.rock = new ProjectileFx(sys, s.rock, null, {
        instanced: this.rockInst,
        onEnd: (r, hit) => {
          if (!hit) return;
          const it = sys.play('rockHit');
          if (it) {
            it.fx.group.position.set(r.x, 0.05, r.z);
            it.fx.group.scale.setScalar(0.3);
          }
        },
      });
    } else if (set === 'blade') {
      this.quakeTrail = new Map();
    } else if (set === 'mage') {
      this.proj.arcane = new ProjectileFx(sys, s.arcane, 'arcane', { scale: 0.65 });
    } else if (set === 'ranger') {
      this.proj.volley = new ProjectileFx(sys, s.volley, 'volley', { scale: 0.6, skipStart: 1.2 });
      this.proj.feather = new ProjectileFx(sys, s.feather, 'feather', { scale: 0.6 });
    }
  }

  // 職業選好後：升級的光綻改成職業顏色（在轉職畫面時做，不是戰鬥中）
  setJobColor(jobId) {
    const col = jobId ? CONFIG.job.classes[jobId].color : null;
    const pool = this.sys.pools.get('levelUp');
    if (pool) for (const it of pool.items) it.fx.setOptions({ color: col || '#ffb3d1' });
  }

  reset() {
    for (const p of Object.values(this.proj)) p.reset();
    this.quakeTrail?.clear();
    this.strikeRecs.clear();
    this.whirlItems.length = 0;
    this.sys.clear();
    this.setJobColor(null);
  }

  // ---------- weapons.js / main.js 呼叫的事件 ----------
  // 普通揮砍：蒼刃迴斬，大小跟著揮砍範圍，朝揮砍方向
  slash(dx, dz, range, f) {
    const it = this.sys.play('slash');
    if (!it) return;
    const p = this.game.player;
    const g = it.fx.group;
    g.position.set(p.x, 0.35, p.z);
    g.rotation.set(0, Math.atan2(-dz, dx), 0);
    g.scale.setScalar(range / NATIVE.sweepRadius);
    it.tick = () => g.position.set(p.x, 0.35, p.z);
    f.pivot.visible = false; // 原本的扇形不用畫
  }

  // 周身爆發：震盾 = 稜晶護壁 + 小震波；霜晶爆 = 冰晶爆散
  aura(id, R, auraSkill) {
    const p = this.game.player;
    let ok = false;
    if (id === 'guard') {
      const sh = this.sys.play('guard');
      if (sh) {
        const g = sh.fx.group;
        g.scale.setScalar(1.3);
        sh.maxLife = 1.6;
        sh.tick = (it) => {
          g.position.set(p.x, 0.1, p.z);
          g.rotation.set(0, Math.atan2(-p.faceZ, p.faceX), 0);
          if (it.t > 0.55 && !it.data.stopped) {
            it.data.stopped = true;
            it.fx.stop();
          }
        };
        sh.data.stopped = false;
        sh.tick(sh, 0);
        ok = true;
      }
      const w = this.sys.play('guardWave');
      if (w) {
        w.fx.group.position.set(p.x, 0.05, p.z);
        w.fx.group.scale.setScalar((R / NATIVE.shockRadius) * 0.6); // 「小」震波
        ok = true;
      }
    } else if (id === 'frost') {
      const it = this.sys.play('frost');
      if (it) {
        it.fx.group.position.set(p.x, 0.05, p.z);
        it.fx.group.scale.setScalar(R / NATIVE.iceRadius);
        ok = true;
      }
    }
    if (ok) auraSkill.fx.visible = false;
  }

  // 指定地點落下：流星墜 = 火球從天而降；箭雨 = 預警圈 → 冰槍雨（改成箭的顏色）
  strikeMark(id, s) {
    let rec = this.strikeRecs.get(s);
    if (!rec) {
      rec = { mark: null, boom: null, id };
      this.strikeRecs.set(s, rec);
    }
    rec.id = id;
    rec.boom = null;
    rec.fall = null;
    if (id === 'rain') {
      // 預警圈（green）先亮；冰槍雨同時開始落下，跳過一段時間讓冰槍剛好在傷害那一刻落地
      const it = this.sys.play('rainMark');
      rec.mark = it;
      if (it) {
        it.fx.group.position.set(s.x, 0.04, s.z);
        it.fx.group.scale.setScalar(s.r);
      }
      const rain = this.sys.play('rain');
      rec.fall = rain;
      if (rain) {
        rain.fx.group.position.set(s.x, 0, s.z);
        rain.fx.group.scale.setScalar(s.r / NATIVE.rainSpread);
        rain.fx.update(Math.max(0, RAIN_LAND - CONFIG.skills.rain.delay));
      }
    } else if (id === 'meteor') {
      const it = this.sys.play('meteor');
      rec.mark = it;
      if (it) {
        const delay = CONFIG.skills.meteor.delay;
        const g = it.fx.group;
        g.scale.setScalar(0.9 + 0.15 * s.r);
        it.fx.update(0.35); // 跳過出現階段，一出來就是燃燒中的火球
        // 從斜上方落下，delay 秒剛好落地
        const sx = s.x - 4;
        const sy = 9;
        const sz = s.z - 2;
        _v.set(s.x - sx, 0.4 - sy, s.z - sz).normalize();
        it.fx.setDirection(_v, 0);
        g.position.set(sx, sy, sz);
        it.maxLife = 4;
        it.tick = (item) => {
          if (item.data.landed) return;
          const k = Math.min(1, s.t / delay);
          g.position.set(sx + (s.x - sx) * k, sy + (0.4 - sy) * k, sz + (s.z - sz) * k);
        };
        it.data.landed = false;
      }
    }
  }

  strikeBoom(id, s) {
    const rec = this.strikeRecs.get(s);
    if (!rec) return;
    if (id === 'rain') {
      rec.boom = rec.fall;
    } else if (id === 'meteor' && rec.mark) {
      rec.mark.data.landed = true;
      rec.mark.fx.group.position.set(s.x, 0.4, s.z);
      rec.mark.fx.hit(_v.set(s.x, 0.2, s.z), UP);
      rec.boom = rec.mark;
    }
  }

  // 怪物死亡：煙團（池子滿了就不放，不影響遊戲）
  death(x, z, radius) {
    const it = this.sys.play('death');
    if (!it) return;
    it.fx.group.position.set(x, 0.3, z);
    it.fx.group.scale.setScalar(Math.min(2.4, 0.3 + radius * 0.6));
  }

  // 升級：生機光綻，跟著角色
  levelUp() {
    const it = this.sys.play('levelUp');
    if (!it) return;
    const p = this.game.player;
    const g = it.fx.group;
    g.scale.setScalar(1.3);
    it.tick = () => g.position.set(p.x, 0.05, p.z);
    it.tick(it);
  }

  // ---------- 每幀 ----------
  sync(dt, time) {
    for (const p of Object.values(this.proj)) p.sync(time);
    if (this.ready.has('blade')) {
      this.syncWhirl();
      this.syncQuake();
    }
    this.syncStrikes();
    this.sys.update(dt);
  }

  // 旋風刃：每把刀一個殘影弧刃，繞著角色轉（刀尖朝切線方向）
  syncWhirl() {
    const sk = this.sk.whirl;
    const items = this.whirlItems;
    const n = sk.level > 0 ? sk.def.count[sk.level - 1] : 0;
    while (items.length > n) {
      const it = items.pop();
      if (it) this.sys.release(it);
    }
    if (n === 0) return;
    while (items.length < n) {
      const it = this.sys.play('whirl');
      if (!it) break;
      it.fx.update(0.5); // 跳過出現階段
      items.push(it);
    }
    const p = this.game.player;
    const R = sk.radius();
    const sc = this.game.stats.areaMult * 0.6;
    for (let k = 0; k < items.length; k++) {
      const a = sk.angle + (k / n) * Math.PI * 2;
      const g = items[k].fx.group;
      g.position.set(p.x + Math.cos(a) * R, 0.6, p.z + Math.sin(a) * R);
      // 逆時針轉：切線方向 (-sin, cos)
      _v.set(-Math.sin(a), 0, Math.cos(a));
      g.quaternion.setFromUnitVectors(X_AXIS, _v);
      g.scale.setScalar(sc);
    }
    if (items.length === n) sk.mesh.visible = false;
  }

  // 裂地波：衝擊波往前走，沿路一段一段裂開熔岩裂地；出手時一個小震波
  syncQuake() {
    const sk = this.sk.quake;
    const trail = this.quakeTrail;
    const seg = NATIVE.fissureLen * 0.8;
    const stamp = (this.quakeStamp = (this.quakeStamp || 0) + 1);
    for (let i = 0; i < sk.count; i++) {
      const serial = sk.serial[i];
      let t = trail.get(serial);
      if (!t) {
        t = { ox: sk.x[i], oz: sk.z[i], laid: 0, stamp };
        trail.set(serial, t);
        const b = this.sys.play('quakeBurst');
        if (b) {
          b.fx.group.position.set(sk.x[i], 0.05, sk.z[i]);
          b.fx.group.scale.setScalar(0.35);
        }
      }
      t.stamp = stamp;
      const dist = Math.hypot(sk.x[i] - t.ox, sk.z[i] - t.oz);
      // 每走 seg 距離，在走過的那一段放一條裂痕
      while (dist >= (t.laid + 0.5) * seg) {
        const it = this.sys.play('quake');
        const vl = Math.hypot(sk.vx[i], sk.vz[i]) || 1;
        const dx = sk.vx[i] / vl;
        const dz = sk.vz[i] / vl;
        if (it) {
          const c = (t.laid + 0.5) * seg;
          const g = it.fx.group;
          g.position.set(t.ox + dx * c, 0.02, t.oz + dz * c);
          g.rotation.set(0, Math.atan2(-dz, dx), 0);
          g.scale.set(seg / NATIVE.fissureLen, 1, 1);
        }
        t.laid++;
      }
    }
    for (const [serial, t] of trail) if (t.stamp !== stamp) trail.delete(serial);
  }

  // 落點技能：有特效的那一格把原本的圈／圓盤藏起來
  syncStrikes() {
    for (const [s, rec] of this.strikeRecs) {
      if (!s.active) {
        this.strikeRecs.delete(s);
        continue;
      }
      if (s.boom < 0) {
        if (rec.mark && rec.id === 'rain') s.ring.visible = false;
      } else if (rec.boom) {
        s.disc.visible = false;
      }
    }
  }

  // ---------- 測試／除錯 ----------
  // 每個綁定都直接在角色旁邊播一次（不經過技能），檢查都能播、播完會自動回收
  demoAll() {
    const p = this.game.player;
    const out = {};
    for (const key of Object.keys(BINDINGS)) {
      const it = this.sys.play(key);
      out[key] = !!it;
      if (!it) continue;
      it.fx.group.position.set(p.x + 2, 0.5, p.z);
      if (key === 'whirl') it.maxLife = 1.5;
      else if (BINDINGS[key].fx === 'fireball' || key === 'arcane' || key === 'feather' || key === 'volley') {
        it.tick = (x) => {
          if (x.t > 0.8 && !x.data.hit) {
            x.data.hit = true;
            x.fx.hit?.(_v.set(p.x + 3, 0.5, p.z));
          }
        };
        it.data.hit = false;
      }
    }
    return out;
  }
}

export { SETS };
