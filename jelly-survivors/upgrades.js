// 升級卡池：招式 6 格、被動 6 格、每項最高 Lv5；欄位滿了只出已擁有項目的升級。
import { CONFIG } from './config.js';

export class Upgrades {
  constructor() {
    this.reset();
  }

  reset() {
    this.skills = new Map(); // id -> level（照取得順序）
    this.passives = new Map();
  }

  level(kind, id) {
    return (kind === 'skill' ? this.skills : this.passives).get(id) || 0;
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

  // 被動 → 實際數值倍率
  stats() {
    const P = CONFIG.passives;
    const lv = (id) => this.passives.get(id) || 0;
    return {
      damageMult: 1 + P.might.perLevel * lv('might'),
      cooldownMult: Math.max(0.3, 1 - P.haste.perLevel * lv('haste')),
      speedMult: 1 + P.swift.perLevel * lv('swift'),
      areaMult: 1 + P.area.perLevel * lv('area'),
      bonusHp: P.vitality.perLevel * lv('vitality'),
      pickupMult: 1 + P.magnet.perLevel * lv('magnet'),
    };
  }
}

// 卡片上要顯示的說明
export function cardText(card) {
  const d = card.def;
  if (card.kind === 'skill') {
    const desc = d.desc[card.nextLevel - 1];
    return { title: d.name, icon: d.icon, tag: card.nextLevel === 1 ? '新招式' : `Lv${card.nextLevel}`, desc };
  }
  if (card.kind === 'passive') {
    return { title: d.name, icon: d.icon, tag: card.nextLevel === 1 ? '新被動' : `Lv${card.nextLevel}`, desc: d.desc };
  }
  return { title: d.name, icon: d.icon, tag: '補給', desc: d.desc };
}
