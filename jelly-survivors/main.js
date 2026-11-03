// 遊戲主程式：狀態機、遊戲迴圈、出怪、玩家、經驗與升級、HUD。
import * as THREE from './vendor/three.module.min.js';
import { CONFIG } from './config.js';
import { World } from './world.js';
import { Input } from './input.js';
import { Enemies } from './enemies.js';
import { Gems } from './gems.js';
import { createSkills } from './weapons.js';
import { Upgrades, cardText } from './upgrades.js';
import { Pickups } from './pickups.js';
import { BossAI } from './boss.js';
import { SaveStore } from './save.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const DEBUG = params.has('debug');

const pct = (v) => `${v >= 0 ? '+' : ''}${Math.round(v * 100)}%`;

// 技能圖示：優先用 config 的 PNG，載入失敗時改顯示文字縮寫（佔位）
function skillIcon(def) {
  const wrap = document.createElement('div');
  wrap.className = 'skicon';
  wrap.style.setProperty('--c', def.color || '#888');
  const abbr = document.createElement('span');
  abbr.className = 'abbr';
  abbr.textContent = def.abbr || def.name.slice(0, 1);
  wrap.appendChild(abbr);
  if (def.icon) {
    const img = document.createElement('img');
    img.alt = def.name;
    img.draggable = false;
    img.onload = () => wrap.classList.add('has-img');
    img.onerror = () => img.remove();
    img.src = def.icon;
    wrap.appendChild(img);
  }
  return wrap;
}

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
    this.pickups = new Pickups(this.world.scene);
    this.upgrades = new Upgrades();
    this.save = new SaveStore();
    this.player = this.createPlayer();
    this.skills = createSkills(this);
    this.boss = new BossAI(this);
    this.pickOut = { gold: 0, potions: 0 };
    this.buildSkillbar();

    this.state = 'title';
    this.input.handlers.pause = () => this.togglePause();
    this.input.handlers.choose = (n) => {
      if (this.state === 'levelup') this.chooseCard(n);
      else if (this.state === 'jobchange') this.chooseJob(n);
    };
    $('start-btn').onclick = () => this.start();
    $('pause-btn').onclick = () => this.togglePause();
    $('resume-btn').onclick = () => this.togglePause();
    $('restart-btn').onclick = () => this.start();
    $('again-btn').onclick = () => this.start();
    $('title-btn').onclick = () => this.showTitle();
    $('title-shop-btn').onclick = () => this.openShop('title');
    $('result-shop-btn').onclick = () => this.openShop('over');
    $('shop-back-btn').onclick = () => this.closeShop();
    $('pause-forget-btn').onclick = () => this.openForget('paused');
    $('lu-forget-btn').onclick = () => this.openForget('levelup');
    $('forget-cancel-btn').onclick = () => this.closeForget();
    window.addEventListener('resize', () => this.state !== 'title' && this.layoutPassives());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'playing') this.togglePause();
    });
    window.addEventListener('keydown', (e) => {
      if (this.state === 'title' && (e.code === 'Enter' || e.code === 'Space')) this.start();
    });

    if (DEBUG) {
      window.__game = this;
      window.__CONFIG = CONFIG;
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
    this.showTitle();
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
    this.pickups.reset();
    this.boss.reset();
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
    this.potions = 0;
    this.runGold = 0;
    this.nextElite = CONFIG.elite.firstAt;
    this.pendingJob = false;
    this.jobOffered = false;
    this.bossKilled = false;
    this.bannerUntil = 0;
    $('banner').classList.add('hidden');
    this.world.follow(0, 0, 0, true);
    this.hudCache = {};
    this.updateHud();
  }

  refreshUpgrades() {
    this.stats = this.upgrades.stats(this.save.data.meta);
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
    $('jobchange').classList.toggle('hidden', s !== 'jobchange');
    $('forget').classList.toggle('hidden', s !== 'forget');
    $('result').classList.toggle('hidden', s !== 'over');
    $('shop').classList.toggle('hidden', s !== 'shop');
    const inRun = s !== 'title' && s !== 'shop';
    $('hud').classList.toggle('hidden', !inRun);
    $('skillbar').classList.toggle('hidden', !inRun);
    $('passives').classList.toggle('hidden', !inRun);
    if (s !== 'playing') this.input.release();
    if (inRun) this.layoutPassives();
    if (s === 'paused' || s === 'levelup') this.updatePotionButtons();
  }

  showTitle() {
    const sv = this.save;
    $('title-gold').textContent = String(sv.gold);
    const note = $('save-note');
    let msg = '';
    if (!sv.available) msg = '這個瀏覽器無法存檔（可能是無痕模式），金幣與局外升級不會保留。';
    else if (sv.wasReset) msg = '存檔資料損壞或版本不符，已重設為新存檔。';
    note.textContent = msg;
    note.classList.toggle('hidden', !msg);
    this.setState('title');
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

    this.spawnSpecial();
    this.spawn(dt);
    this.boss.update(dt);
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

    this.enemies.compact((i) => this.onEnemyDeath(i));

    const pickR = CONFIG.player.pickupRadius * this.stats.pickupMult;
    const gained = this.gems.update(dt, p.x, p.z, pickR);
    if (gained) this.addXp(gained);
    const got = this.pickups.update(dt, p.x, p.z, pickR, this.pickOut);
    if (got.gold) this.runGold += got.gold * this.stats.goldMult;
    if (got.potions) {
      this.potions = Math.min(CONFIG.potion.max, this.potions + got.potions);
      this.showBanner(`撿到${CONFIG.potion.name}！`);
    }

    if (p.hp <= 0) {
      p.hp = 0;
      this.finish(false);
    } else if (this.bossKilled) {
      this.finish(true);
    } else if (this.elapsed >= CONFIG.stage.duration) {
      this.elapsed = CONFIG.stage.duration;
      this.finish(true);
    } else if (this.pendingJob) {
      this.openJobChange();
    } else if (this.pendingLevels > 0) {
      this.openLevelUp();
    }
  }

  onEnemyDeath(i) {
    const en = this.enemies;
    const def = CONFIG.enemies[en.typeKey(i)];
    const x = en.x[i];
    const z = en.z[i];
    this.kills++;
    if (def.boss) {
      this.bossKilled = true;
      this.boss.onDeath();
      this.runGold += def.gold.amount * this.stats.goldMult; // 王的金幣直接入帳
      return;
    }
    if (def.drops) {
      for (const kind of def.drops.gems) this.gems.add(kind, x + (Math.random() - 0.5) * 2, z + (Math.random() - 0.5) * 2);
    } else {
      this.gems.dropFrom(def.gem, x, z);
    }
    if (def.gold && Math.random() < def.gold.chance) this.pickups.addGold(x + 0.4, z, def.gold.amount);
    if (def.potionChance && Math.random() < def.potionChance) this.pickups.addPotion(x - 0.6, z + 0.3);
  }

  // 精英怪與王
  spawnSpecial() {
    const el = CONFIG.elite;
    if (this.elapsed >= this.nextElite && this.nextElite <= el.lastAt) {
      // 時間跳很多（例如測試）時不要一次補出好幾隻
      while (this.nextElite <= this.elapsed) this.nextElite += el.interval;
      const pt = this.spawnPoint();
      if (this.enemies.spawnForced(el.type, pt.x, pt.z, Math.pow(CONFIG.stage.hpGrowth, this.tier)) >= 0) {
        this.showBanner(el.warning);
      }
    }
    if (!this.boss.spawned && this.elapsed >= CONFIG.boss.spawnAt) {
      if (this.boss.spawn()) this.showBanner(CONFIG.boss.warning, 3);
    }
  }

  showBanner(text, seconds = 2.2) {
    const el = $('banner');
    el.textContent = text;
    el.classList.remove('hidden');
    this.bannerUntil = this.time + seconds;
  }

  // ---------- 出怪 ----------
  get tier() {
    return Math.floor(this.elapsed / CONFIG.stage.tierInterval);
  }

  spawn(dt) {
    const st = CONFIG.stage;
    const tier = this.tier;
    const bossMult = this.boss.alive ? CONFIG.boss.spawnRateMult : 1;
    this.spawnAcc += st.spawnRateBase * Math.pow(st.spawnRateGrowth, tier) * bossMult * dt;
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

  damageEnemy(i, dmg, fromX, fromZ, kb = 1) {
    this.enemies.hit(i, dmg, fromX, fromZ, kb);
  }

  // ---------- 經驗 / 升級 ----------
  addXp(v) {
    this.xp += v;
    while (this.xp >= this.xpNeed) {
      this.xp -= this.xpNeed;
      this.level++;
      this.xpNeed = CONFIG.xpForLevel(this.level);
      this.pendingLevels++;
      if (this.level >= CONFIG.job.level && !this.upgrades.job && !this.jobOffered) {
        this.pendingJob = true;
        this.jobOffered = true;
      }
    }
  }

  openLevelUp() {
    this.pendingLevels--;
    this.showCards();
  }

  showCards() {
    this.cards = this.upgrades.roll(3);
    const wrap = $('cards');
    wrap.innerHTML = '';
    this.cards.forEach((card, idx) => {
      const t = cardText(card);
      const el = document.createElement('button');
      el.className = `card ${card.kind}`;
      el.innerHTML = `<span class="key">${idx + 1}</span><div class="icon"></div><div class="body"><span class="tag"></span><div class="title"></div><div class="desc"></div></div>`;
      if (card.kind === 'skill') el.querySelector('.icon').appendChild(skillIcon(card.def));
      else el.querySelector('.icon').textContent = t.emoji;
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
    this.applyStatChange();
    this.cards = null;
    this.setState('playing');
    if (this.pendingLevels > 0) this.openLevelUp();
  }

  // 重新計算數值；最大血量增加時一併回血
  applyStatChange() {
    const p = this.player;
    const oldBonus = this.stats.bonusHp;
    this.refreshUpgrades();
    const hpGain = this.stats.bonusHp - oldBonus;
    if (hpGain > 0) {
      p.maxHp += hpGain;
      p.hp = Math.min(p.maxHp, p.hp + hpGain);
    }
  }

  // ---------- 轉職 ----------
  openJobChange() {
    this.pendingJob = false;
    const wrap = $('jobs');
    wrap.innerHTML = '';
    this.jobIds = Object.keys(CONFIG.job.classes);
    this.jobIds.forEach((id, idx) => {
      const job = CONFIG.job.classes[id];
      const el = document.createElement('button');
      el.className = 'card job';
      el.style.setProperty('--jc', job.color);
      el.innerHTML = `<span class="key">${idx + 1}</span><div class="body"><div class="title"></div><div class="desc"></div><div class="jobskills"></div></div>`;
      el.querySelector('.title').textContent = job.name;
      el.querySelector('.desc').textContent = job.desc;
      const list = el.querySelector('.jobskills');
      for (const sid of job.skills) {
        const row = document.createElement('div');
        row.className = 'jobskill';
        row.appendChild(skillIcon(CONFIG.skills[sid]));
        const name = document.createElement('span');
        name.textContent = CONFIG.skills[sid].name;
        row.appendChild(name);
        list.appendChild(row);
      }
      el.onclick = () => this.chooseJob(idx);
      wrap.appendChild(el);
    });
    this.setState('jobchange');
    this.levelUpOpenedAt = performance.now();
  }

  chooseJob(n) {
    const id = this.jobIds?.[n];
    if (!id || this.state !== 'jobchange') return;
    if (performance.now() - this.levelUpOpenedAt < 250) return;
    const job = CONFIG.job.classes[id];
    this.upgrades.job = id;
    this.potions = Math.min(CONFIG.potion.max, this.potions + CONFIG.job.potionsOnChange);
    // 有空格就直接送第一個職業招式 Lv1
    const first = job.skills[0];
    if (this.upgrades.skills.size < CONFIG.slots.skills) this.upgrades.apply({ kind: 'skill', id: first, nextLevel: 1 });
    this.applyStatChange();
    this.showBanner(`轉職成功：${job.name}！`);
    this.setState('playing');
    if (this.pendingLevels > 0) this.openLevelUp();
  }

  // ---------- 遺忘藥水 ----------
  updatePotionButtons() {
    for (const id of ['pause-forget-btn', 'lu-forget-btn']) {
      const b = $(id);
      b.textContent = `🧪 使用${CONFIG.potion.name}（${this.potions}）`;
      b.classList.toggle('hidden', this.potions <= 0 || this.upgrades.skills.size === 0);
    }
  }

  openForget(from) {
    if (this.potions <= 0 || this.upgrades.skills.size === 0) return;
    this.forgetFrom = from;
    $('forget-count').textContent = String(this.potions);
    const list = $('forget-list');
    list.innerHTML = '';
    for (const [id, lv] of this.upgrades.skills) {
      const def = CONFIG.skills[id];
      const b = document.createElement('button');
      b.className = 'forget-item';
      b.dataset.id = id;
      b.appendChild(skillIcon(def));
      const t = document.createElement('span');
      t.textContent = `${def.name}  Lv${lv}`;
      b.appendChild(t);
      b.onclick = () => this.forgetSkill(id);
      list.appendChild(b);
    }
    this.setState('forget');
  }

  forgetSkill(id) {
    if (this.potions <= 0 || !this.upgrades.removeSkill(id)) return;
    this.potions--;
    this.skills[id].setLevel(0);
    this.skills[id].reset();
    this.refreshUpgrades();
    this.showBanner(`忘掉了「${CONFIG.skills[id].name}」`);
    this.closeForget(true);
  }

  closeForget(changed = false) {
    if (this.forgetFrom === 'levelup') {
      // 空出欄位後重新抽卡，新招式才有機會出現
      if (changed) this.showCards();
      this.setState('levelup');
      this.levelUpOpenedAt = performance.now();
    } else {
      this.setState('paused');
    }
  }

  // ---------- 結算 / 局外升級 ----------
  finish(won) {
    if (won) this.runGold += this.pickups.collectAllGold() * this.stats.goldMult;
    const gold = Math.floor(this.runGold);
    this.save.recordRun({ gold, time: this.elapsed, level: this.level, won, bossKilled: this.bossKilled });
    let title = 'Game Over';
    if (this.bossKilled) title = '過關！打倒果凍史萊姆王';
    else if (won) title = '過關！撐過 10:00';
    $('result-title').textContent = title;
    $('r-time').textContent = fmtTime(this.elapsed);
    $('r-kills').textContent = String(this.kills);
    $('r-level').textContent = String(this.level);
    $('r-job').textContent = this.upgrades.job ? CONFIG.job.classes[this.upgrades.job].name : '初心者';
    $('r-gold').textContent = `+${gold}`;
    $('r-total').textContent = String(this.save.gold);
    this.won = won;
    this.setState('over');
  }

  openShop(from) {
    this.shopFrom = from;
    this.renderShop();
    this.setState('shop');
  }

  closeShop() {
    if (this.shopFrom === 'over') {
      $('r-total').textContent = String(this.save.gold);
      this.setState('over');
    } else {
      this.showTitle();
    }
  }

  renderShop() {
    const sv = this.save;
    $('shop-gold').textContent = String(sv.gold);
    const list = $('shop-list');
    list.innerHTML = '';
    for (const [id, def] of Object.entries(CONFIG.meta)) {
      const lv = sv.metaLevel(id);
      const max = def.cost.length;
      const price = sv.price(id);
      const row = document.createElement('div');
      row.className = 'shop-row';
      row.dataset.id = id;
      row.innerHTML = `<span class="sicon"></span><div class="sinfo"><b></b><small></small></div><button class="buy"></button>`;
      row.querySelector('.sicon').textContent = def.icon;
      row.querySelector('b').textContent = `${def.name}  Lv${lv}/${max}`;
      row.querySelector('small').textContent = `${def.desc}（目前 ${this.metaEffectText(id, lv)}）`;
      const btn = row.querySelector('.buy');
      if (price === null) {
        btn.textContent = '已滿級';
        btn.disabled = true;
      } else {
        btn.textContent = `🪙 ${price}`;
        btn.disabled = sv.gold < price;
        btn.onclick = () => {
          if (sv.buy(id)) this.renderShop();
        };
      }
      list.appendChild(row);
    }
  }

  metaEffectText(id, lv) {
    const def = CONFIG.meta[id];
    return id === 'vitality' ? `+${def.per * lv}` : pct(def.per * lv);
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
    this.pickups.syncMesh(this.time);
    for (const s of Object.values(this.skills)) s.syncMesh?.(this.time);
    this.boss.syncMesh(this.time);
    if (this.bannerUntil && this.time > this.bannerUntil) {
      this.bannerUntil = 0;
      $('banner').classList.add('hidden');
    }
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
    this.setText('gold', $('gold'), `🪙 ${Math.floor(this.runGold)}`);

    // 王血條
    const bossOn = this.boss.alive;
    if (this.hudCache.bossOn !== bossOn) {
      this.hudCache.bossOn = bossOn;
      $('bossbar').classList.toggle('hidden', !bossOn);
      this.layoutPassives();
    }
    if (bossOn) this.setWidth('boss', $('boss-fill'), this.boss.hpFrac());

    this.updateSkillbar();
    this.updatePassives();
  }

  // ---------- 技能欄（下方 6 格）----------
  buildSkillbar() {
    const bar = $('skillbar');
    this.slotEls = [];
    for (let i = 0; i < CONFIG.slots.skills; i++) {
      const el = document.createElement('div');
      el.className = 'sk empty';
      el.innerHTML = '<div class="ic"></div><div class="cd"></div><span class="lv"></span>';
      bar.appendChild(el);
      this.slotEls.push({ el, ic: el.querySelector('.ic'), cd: el.querySelector('.cd'), lv: el.querySelector('.lv'), id: null, lvNum: 0, cdv: -1 });
    }
  }

  updateSkillbar() {
    const owned = [...this.upgrades.skills];
    for (let k = 0; k < this.slotEls.length; k++) {
      const s = this.slotEls[k];
      const [id, lv] = owned[k] || [null, 0];
      if (s.id !== id) {
        s.id = id;
        s.ic.innerHTML = '';
        s.el.classList.toggle('empty', !id);
        s.el.dataset.id = id || '';
        if (id) s.ic.appendChild(skillIcon(CONFIG.skills[id]));
        s.lvNum = -1;
        s.cdv = -1;
      }
      if (s.lvNum !== lv) {
        s.lvNum = lv;
        s.lv.textContent = id ? `Lv${lv}` : '';
      }
      // 冷卻：遮罩轉圈（量化成 50 段，避免每幀改 style）
      const frac = id ? Math.round(this.skills[id].cooldownFrac() * 50) / 50 : 0;
      if (s.cdv !== frac) {
        s.cdv = frac;
        s.cd.style.setProperty('--cd', String(frac));
      }
    }
  }

  // 被動數值面板放在上方 HUD（含王血條）的正下方，手機直式時 HUD 比較高也不會重疊
  layoutPassives() {
    const bottom = $('hud').getBoundingClientRect().bottom;
    if (bottom > 0) $('passives').style.top = `${Math.round(bottom + 6)}px`;
  }

  // ---------- 左側被動數值 ----------
  updatePassives() {
    const st = this.stats;
    const job = this.upgrades.job ? CONFIG.job.classes[this.upgrades.job].name : '初心者';
    const rows = [
      ['攻擊', pct(st.damageMult - 1)],
      ['攻速', pct(1 - st.cooldownMult)],
      ['移速', pct(st.speedMult - 1)],
      ['範圍', pct(st.areaMult - 1)],
      ['血量', `+${st.bonusHp}`],
      ['吸取範圍', pct(st.pickupMult - 1)],
      ['金幣', pct(st.goldMult - 1)],
    ];
    const key = `${job}|${this.potions}|${rows.map((r) => r[1]).join(',')}`;
    if (this.hudCache.passives === key) return;
    this.hudCache.passives = key;
    const el = $('passives');
    el.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'job';
    head.textContent = job;
    el.appendChild(head);
    for (const [name, val] of rows) {
      const r = document.createElement('div');
      r.className = 'pv';
      r.innerHTML = '<span></span><b></b>';
      r.firstChild.textContent = name;
      r.lastChild.textContent = val;
      if (val === '+0%' || val === '+0') r.classList.add('zero');
      el.appendChild(r);
    }
    const pot = document.createElement('div');
    pot.className = 'pv potion';
    pot.textContent = `🧪 ${CONFIG.potion.name} ×${this.potions}`;
    el.appendChild(pot);
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
