// 升級卡池：招式 6 格、被動 6 格、每項最高 Lv5；欄位滿了只出已擁有項目的升級。
// 職業招式只有轉職成該職業後才會進卡池，而且要等玩家等級到 CONFIG.job.unlockLevels 才解鎖
// （第 1 招轉職時直接給、第 2 招 Lv18、第 3 招 Lv26）。
import { CONFIG } from './config.js';

export class Upgrades {
  constructor() {
    this.reset();
  }

  reset() {
    this.skills = new Map(); // id -> level（照取得順序 = 技能欄順序）
    this.passives = new Map();
    this.job = null;
    this.playerLevel = 1; // 由 Game 在升級時更新，用來判斷職業招式是否解鎖
  }

  level(kind, id) {
    return (kind === 'skill' ? this.skills : this.passives).get(id) || 0;
  }

  // 這個招式目前能不能進卡池（初心者招式 or 自己職業、且已解鎖的招式）
  skillAllowed(def, id) {
    if (!def.job) return true;
    return def.job === this.job && this.playerLevel >= jobSkillUnlockLevel(id);
  }

  // 列出現在可以拿的所有卡
  candidates() {
    const out = [];
    const { skills: maxS, passives: maxP, maxLevel } = CONFIG.slots;
    const add = (kind, id, def, owned, slotsFull) => {
      const lv = owned.get(id) || 0;
      if (lv >= maxLevel) return;
      if (lv === 0 && slotsFull) return;
      out.push({ kind, id, def, nextLevel: lv + 1 });
    };
    for (const [id, def] of Object.entries(CONFIG.skills)) {
      if (!this.skillAllowed(def, id)) continue;
      add('skill', id, def, this.skills, this.skills.size >= maxS);
    }
    for (const [id, def] of Object.entries(CONFIG.passives)) {
      add('passive', id, def, this.passives, this.passives.size >= maxP);
    }
    return out;
  }

  // 隨機三選一
  roll(n = 3) {
    const pool = this.candidates();
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const picks = pool.slice(0, n);
    if (picks.length === 0) picks.push({ kind: 'fallback', id: 'snack', def: CONFIG.fallbackCard, nextLevel: 0 });
    return picks;
  }

  apply(card) {
    if (card.kind === 'skill') this.skills.set(card.id, card.nextLevel);
    else if (card.kind === 'passive') this.passives.set(card.id, card.nextLevel);
  }

  // 遺忘藥水：丟掉一個主動招式
  removeSkill(id) {
    return this.skills.delete(id);
  }

  // 局內被動 + 局外升級 + 職業加成 → 實際數值倍率
  // meta = 存檔裡的局外升級等級 { might: 2, ... }
  stats(meta = {}) {
    const P = CONFIG.passives;
    const M = CONFIG.meta;
    const lv = (id) => this.passives.get(id) || 0;
    const ml = (id) => meta[id] || 0;
    const job = (this.job && CONFIG.job.classes[this.job].bonus) || {};
    return {
      damageMult: 1 + P.might.perLevel * lv('might') + M.might.per * ml('might'),
      cooldownMult: 1 - Math.min(P.haste.maxReduction, P.haste.perLevel * lv('haste')),
      speedMult: 1 + P.swift.perLevel * lv('swift') + M.swift.per * ml('swift') + (job.speed || 0),
      areaMult: 1 + P.area.perLevel * lv('area') + (job.area || 0),
      bonusHp: P.vitality.perLevel * lv('vitality') + M.vitality.per * ml('vitality') + (job.bonusHp || 0),
      pickupMult: 1 + P.magnet.perLevel * lv('magnet') + M.magnet.per * ml('magnet'),
      goldMult: 1 + M.greed.per * ml('greed'),
    };
  }
}

// 職業招式在職業招式清單裡的順序決定解鎖等級；初心者招式回傳 0（一開始就能拿）
export function jobSkillUnlockLevel(id) {
  const def = CONFIG.skills[id];
  if (!def?.job) return 0;
  const idx = CONFIG.job.classes[def.job].skills.indexOf(id);
  const L = CONFIG.job.unlockLevels;
  return L[Math.min(idx, L.length - 1)];
}

// 卡片上要顯示的說明
export function cardText(card) {
  const d = card.def;
  if (card.kind === 'skill') {
    const desc = d.desc[card.nextLevel - 1];
    const tag = card.nextLevel === 1 ? (d.job ? '職業招式' : '新招式') : `Lv${card.nextLevel}`;
    return { title: d.name, icon: d.icon, abbr: d.abbr, color: d.color, tag, desc };
  }
  if (card.kind === 'passive') {
    return { title: d.name, emoji: d.icon, tag: card.nextLevel === 1 ? '新被動' : `Lv${card.nextLevel}`, desc: d.desc };
  }
  return { title: d.name, emoji: d.icon, tag: '補給', desc: d.desc };
}
