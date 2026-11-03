// 遊戲主程式：狀態機、遊戲迴圈、出怪、玩家、經驗與升級、HUD。
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';
import { World } from './world.js';
import { Input } from './input.js';
import { Enemies } from './enemies.js';
import { Gems } from './gems.js';
import { SKILL_CLASSES } from './weapons.js';
import { Upgrades, cardText } from './upgrades.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const DEBUG = params.has('debug');

function fmtTime(t) {
  const s = Math.floor(t);
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

class Game {
  constructor() {
    this.world = new World($('game'));
    this.input = new Input(this.world.canvas, $('joystick'));
    this.enemies = new Enemies(this.world.scene);
    this.gems = new Gems(this.world.scene);
    this.upgrades = new Upgrades();
    this.player = this.createPlayer();
    this.skills = {};
    for (const [id, Cls] of Object.entries(SKILL_CLASSES)) this.skills[id] = new Cls(this);

    this.state = 'title';
    this.input.handlers.pause = () => this.togglePause();
    this.input.handlers.choose = (n) => this.state === 'levelup' && this.chooseCard(n);
    $('start-btn').onclick = () => this.start();
    $('pause-btn').onclick = () => this.togglePause();
    $('resume-btn').onclick = () => this.togglePause();
    $('restart-btn').onclick = () => this.start();
    $('again-btn').onclick = () => this.start();
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.togglePause();
    });
    window.addEventListener('keydown', (e) => {
      if (this.state === 'title' && (e.code === 'Enter' || e.code === 'Space')) this.start();
    });

    if (DEBUG) {
      window.__game = this;
      this.debugEl = document.createElement('div');
      this.debugEl.id = 'debug';
      document.body.appendChild(this.debugEl);
      this.timeScale = Number(params.get('speed')) || 1;
    } else {
      this.timeScale = 1;
    }
    this.fpsAcc = 0;
    this.fpsFrames = 0;
    this.fps = 0;

    this.resetRun();
    this.last = performance.now();
    this.time = 0; // 動畫用時間（暫停時也會走）
    requestAnimationFrame((t) => this.frame(t));
  }

  createPlayer() {
    const c = CONFIG.player;
    const group = new THREE.Group();
    const bodyMat = new THREE.MeshLambertMaterial({ color: c.color });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 0.7, 4, 12), bodyMat);
    body.position.y = 0.8;
    group.add(body);
    // 鼻子 / 面向指示
    const nose = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.3), new THREE.MeshLambertMaterial({ color: 0x8a4b2a }));
    nose.position.set(0, 1.05, -0.45);
    group.add(nose);
    // 腳下的圈
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.55, 0.7, 24),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, depthWrite: false })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.03;
    group.add(ring);
    this.world.scene.add(group);
    return { mesh: group, bodyMat, x: 0, z: 0, faceX: 0, faceZ: -1, hp: c.maxHp, maxHp: c.maxHp, invuln: 0 };
  }

  resetRun() {
    this.enemies.reset();
    this.gems.reset();
    this.upgrades.reset();
    for (const s of Object.values(this.skills)) {
      s.reset();
      s.setLevel(0);
    }
    this.upgrades.apply({ kind: 'skill', id: 'slash', nextLevel: 1 }); // 初心者起手：普通揮砍
    this.refreshUpgrades();

    const p = this.player;
    p.x = p.z = 0;
    p.faceX = 0;
    p.faceZ = -1;
    p.maxHp = CONFIG.player.maxHp + this.stats.bonusHp;
    p.hp = p.maxHp;
    p.invuln = 0;

    this.elapsed = 0;
    this.kills = 0;
    this.level = 1;
    this.xp = 0;
    this.xpNeed = CONFIG.xpForLevel(1);
    this.pendingLevels = 0;
    this.spawnAcc = 0;
    this.world.follow(0, 0, 0, true);
    this.hudCache = {};
    this.updateHud();
  }

  refreshUpgrades() {
    this.stats = this.upgrades.stats();
    for (const [id, s] of Object.entries(this.skills)) s.setLevel(this.upgrades.level('skill', id));
  }

  start() {
    this.resetRun();
    this.setState('playing');
  }

  setState(s) {
    this.state = s;
    $('start').classList.toggle('hidden', s !== 'title');
    $('pause').classList.toggle('hidden', s !== 'paused');
    $('levelup').classList.toggle('hidden', s !== 'levelup');
    $('result').classList.toggle('hidden', s !== 'over');
    $('hud').classList.toggle('hidden', s === 'title');
    if (s !== 'playing') this.input.release();
  }

  togglePause() {
    if (this.state === 'playing') this.setState('paused');
    else if (this.state === 'paused') this.setState('playing');
  }

  // ---------- 主迴圈 ----------
  frame(now) {
    const realDt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.time += realDt;
    if (this.state === 'playing') {
      // 慢的裝置拆成小步，避免穿透
      let remaining = realDt * this.timeScale;
      while (remaining > 1e-6 && this.state === 'playing') {
        const step = Math.min(remaining, 1 / 30);
        this.update(step);
        remaining -= step;
      }
    }
    this.syncVisuals(realDt);
    this.world.render();
    this.updateFps(realDt);
    requestAnimationFrame((t) => this.frame(t));
  }

  update(dt) {
    this.elapsed += dt;
    const p = this.player;
    const half = CONFIG.map.size / 2 - CONFIG.player.radius;

    // 移動（螢幕上 = 世界 -Z）
    const mv = this.input.update();
    const spd = CONFIG.player.speed * this.stats.speedMult;
    if (mv.x || mv.y) {
      p.x = Math.max(-half, Math.min(half, p.x + mv.x * spd * dt));
      p.z = Math.max(-half, Math.min(half, p.z + mv.y * spd * dt));
      const l = Math.hypot(mv.x, mv.y);
      p.faceX = mv.x / l;
      p.faceZ = mv.y / l;
    }

    this.spawn(dt);
    this.enemies.update(dt, p.x, p.z, this.elapsed, this.world, (i) => {
      const pt = this.spawnPoint();
      this.enemies.relocate(i, pt.x, pt.z);
    });

    for (const s of Object.values(this.skills)) if (s.level > 0) s.update(dt);

    // 接觸傷害
    if (p.invuln > 0) p.invuln -= dt;
    else {
      let dmg = 0;
      this.enemies.query(p.x, p.z, CONFIG.player.radius, (i) => {
        if (this.enemies.damage[i] > dmg) dmg = this.enemies.damage[i];
        return false;
      });
      if (dmg > 0) {
        p.hp -= dmg;
        p.invuln = CONFIG.player.invulnTime;
      }
    }
    if (CONFIG.player.hpRegen) p.hp = Math.min(p.maxHp, p.hp + CONFIG.player.hpRegen * dt);

    this.enemies.compact((i) => {
      this.kills++;
      const def = CONFIG.enemies[this.enemies.typeKey(i)];
      this.gems.dropFrom(def.gem, this.enemies.x[i], this.enemies.z[i]);
    });

    const gained = this.gems.update(dt, p.x, p.z, CONFIG.player.pickupRadius * this.stats.pickupMult);
    if (gained) this.addXp(gained);

    if (p.hp <= 0) {
      p.hp = 0;
      this.finish(false);
    } else if (this.elapsed >= CONFIG.stage.duration) {
      this.elapsed = CONFIG.stage.duration;
      this.finish(true);
    } else if (this.pendingLevels > 0) {
      this.openLevelUp();
    }
  }

  // ---------- 出怪 ----------
  get tier() {
    return Math.floor(this.elapsed / CONFIG.stage.tierInterval);
  }

  spawn(dt) {
    const st = CONFIG.stage;
    const tier = this.tier;
    this.spawnAcc += st.spawnRateBase * Math.pow(st.spawnRateGrowth, tier) * dt;
    const hpMult = Math.pow(st.hpGrowth, tier);
    const dmgMult = Math.pow(st.damageGrowth, tier);
    const spdMult = Math.pow(st.speedGrowth, tier);
    let guard = 0;
    while (this.spawnAcc >= 1 && !this.enemies.full && guard++ < 20) {
      const entries = st.spawnTable.filter((e) => tier >= e.from);
      let r = Math.random() * entries.reduce((a, e) => a + e.weight, 0);
      const entry = entries.find((e) => (r -= e.weight) < 0) || entries[0];
      const n = entry.group[0] + Math.floor(Math.random() * (entry.group[1] - entry.group[0] + 1));
      const pt = this.spawnPoint();
      // 朝玩家的方向
      let dx = this.player.x - pt.x;
      let dz = this.player.z - pt.z;
      const l = Math.hypot(dx, dz) || 1;
      dx /= l;
      dz /= l;
      const lim = CONFIG.map.size / 2 - 1;
      for (let k = 0; k < n; k++) {
        let x;
        let z;
        if (entry.formation === 'line') {
          // 排成一列往玩家爬
          x = pt.x - dx * k * 2.6;
          z = pt.z - dz * k * 2.6;
        } else {
          const a = Math.random() * Math.PI * 2;
          const rr = Math.sqrt(Math.random()) * 1.8;
          x = pt.x + Math.cos(a) * rr;
          z = pt.z + Math.sin(a) * rr;
        }
        x = Math.max(-lim, Math.min(lim, x));
        z = Math.max(-lim, Math.min(lim, z));
        if (this.enemies.spawn(entry.type, x, z, hpMult, dmgMult, spdMult, dx, dz) < 0) break;
      }
      this.spawnAcc -= n;
    }
    if (this.enemies.full) this.spawnAcc = Math.min(this.spawnAcc, 1);
  }

  // 在畫面外的圓圈上找一個點；貼著地圖邊緣時改找別的方向
  spawnPoint() {
    const p = this.player;
    const r = this.world.viewRadius + 2;
    const lim = CONFIG.map.size / 2 - 1;
    let best = null;
    for (let t = 0; t < 8; t++) {
      const a = Math.random() * Math.PI * 2;
      const x = Math.max(-lim, Math.min(lim, p.x + Math.cos(a) * r));
      const z = Math.max(-lim, Math.min(lim, p.z + Math.sin(a) * r));
      const d = Math.hypot(x - p.x, z - p.z);
      if (!best || d > best.d) best = { x, z, d };
      if (d > r * 0.8) break;
    }
    return best;
  }

  damageEnemy(i, dmg, fromX, fromZ) {
    this.enemies.hit(i, dmg, fromX, fromZ);
  }

  // ---------- 經驗 / 升級 ----------
  addXp(v) {
    this.xp += v;
    while (this.xp >= this.xpNeed) {
      this.xp -= this.xpNeed;
      this.level++;
      this.xpNeed = CONFIG.xpForLevel(this.level);
      this.pendingLevels++;
    }
  }

  openLevelUp() {
    this.pendingLevels--;
    this.cards = this.upgrades.roll(3);
    const wrap = $('cards');
    wrap.innerHTML = '';
    this.cards.forEach((card, idx) => {
      const t = cardText(card);
      const el = document.createElement('button');
      el.className = `card ${card.kind}`;
      el.innerHTML = `<span class="key">${idx + 1}</span><div class="icon"></div><div class="body"><span class="tag"></span><div class="title"></div><div class="desc"></div></div>`;
      el.querySelector('.icon').textContent = t.icon;
      el.querySelector('.tag').textContent = t.tag;
      el.querySelector('.title').textContent = t.title;
      el.querySelector('.desc').textContent = t.desc;
      el.onclick = () => this.chooseCard(idx);
      wrap.appendChild(el);
    });
    this.setState('levelup');
    this.levelUpOpenedAt = performance.now();
  }

  chooseCard(n) {
    const card = this.cards?.[n];
    if (!card) return;
    // 防止移動中誤觸：卡片出現 250ms 內不接受點擊
    if (performance.now() - this.levelUpOpenedAt < 250) return;
    const p = this.player;
    if (card.kind === 'fallback') p.hp = Math.min(p.maxHp, p.hp + card.def.heal);
    this.upgrades.apply(card);
    const oldBonus = this.stats.bonusHp;
    this.refreshUpgrades();
    const hpGain = this.stats.bonusHp - oldBonus;
    if (hpGain > 0) {
      p.maxHp += hpGain;
      p.hp = Math.min(p.maxHp, p.hp + hpGain);
    }
    this.cards = null;
    this.setState('playing');
    if (this.pendingLevels > 0) this.openLevelUp();
  }

  finish(won) {
    $('result-title').textContent = won ? '過關！果凍平原制霸' : 'Game Over';
    $('r-time').textContent = fmtTime(this.elapsed);
    $('r-kills').textContent = String(this.kills);
    $('r-level').textContent = String(this.level);
    this.won = won;
    this.setState('over');
  }

  // ---------- 畫面 ----------
  syncVisuals(dt) {
    const p = this.player;
    p.mesh.position.set(p.x, 0, p.z);
    p.mesh.rotation.y = Math.atan2(-p.faceX, -p.faceZ);
    const blink = p.invuln > 0 && Math.floor(this.time * 20) % 2 === 0;
    p.bodyMat.emissive.setHex(blink ? 0xff3030 : 0x000000);
    this.world.follow(p.x, p.z, dt);
    this.enemies.syncMeshes(this.time);
    this.gems.syncMesh(this.time);
    this.skills.rock.syncMesh(this.time);
    this.updateHud();
  }

  setText(key, el, value) {
    if (this.hudCache[key] !== value) {
      this.hudCache[key] = value;
      el.textContent = value;
    }
  }

  setWidth(key, el, frac) {
    const v = `${(Math.max(0, Math.min(1, frac)) * 100).toFixed(1)}%`;
    if (this.hudCache[key] !== v) {
      this.hudCache[key] = v;
      el.style.width = v;
    }
  }

  updateHud() {
    const p = this.player;
    this.setWidth('hp', $('hp-fill'), p.hp / p.maxHp);
    this.setText('hpt', $('hp-text'), `${Math.ceil(p.hp)} / ${p.maxHp}`);
    this.setWidth('xp', $('xp-fill'), this.xp / this.xpNeed);
    this.setText('lv', $('level'), `Lv ${this.level}`);
    this.setText('time', $('timer'), fmtTime(this.elapsed));
    this.setText('kills', $('kills'), `💀 ${this.kills}`);
    const slots = [
      ...[...this.upgrades.skills].map(([id, lv]) => `${CONFIG.skills[id].icon}${lv}`),
      ...[...this.upgrades.passives].map(([id, lv]) => `${CONFIG.passives[id].icon}${lv}`),
    ].join('|');
    if (this.hudCache.slots !== slots) {
      this.hudCache.slots = slots;
      const el = $('slots');
      el.innerHTML = '';
      for (const s of slots ? slots.split('|') : []) {
        const span = document.createElement('span');
        span.className = 'slot';
        span.textContent = s;
        el.appendChild(span);
      }
    }
  }

  updateFps(dt) {
    this.fpsAcc += dt;
    this.fpsFrames++;
    if (this.fpsAcc >= 0.5) {
      this.fps = this.fpsFrames / this.fpsAcc;
      this.fpsAcc = 0;
      this.fpsFrames = 0;
      if (this.debugEl) {
        this.debugEl.textContent = `FPS ${this.fps.toFixed(0)} | 怪 ${this.enemies.count}/${this.enemies.max} | 寶石 ${this.gems.count} | 階 ${this.tier}`;
      }
    }
  }
}

new Game();
