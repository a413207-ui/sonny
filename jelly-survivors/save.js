// 存檔：只用瀏覽器 localStorage，不收集任何個資。
// 格式：{ v: 版本, gold: 金幣, meta: { 局外升級 id: 等級 }, records: { runs, clears, bossKills, bestTime, bestLevel } }
// 讀到壞掉、版本不認得、或數值不合理的存檔時，安全地重設成新存檔，遊戲照常進行。
import { CONFIG } from './config.js';

const MAX_GOLD = 1e9;

export function defaultSave() {
  const meta = {};
  for (const id of Object.keys(CONFIG.meta)) meta[id] = 0;
  return {
    v: CONFIG.save.version,
    gold: 0,
    meta,
    records: { runs: 0, clears: 0, bossKills: 0, bestTime: 0, bestLevel: 0 },
  };
}

const int = (v, lo, hi) => Number.isInteger(v) && v >= lo && v <= hi;
const num = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;

// 檢查並整理存檔；不合法回傳 null
export function validate(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
  // 之後格式改版時，在這裡把舊版本轉成新版本（例如 if (data.v === 1) data = migrate1to2(data)）
  if (data.v !== CONFIG.save.version) return null;
  if (!int(data.gold, 0, MAX_GOLD)) return null;
  if (!data.meta || typeof data.meta !== 'object') return null;
  const out = defaultSave();
  out.gold = data.gold;
  for (const [id, def] of Object.entries(CONFIG.meta)) {
    const lv = data.meta[id] ?? 0; // 新增的升級項目從 0 開始
    if (!int(lv, 0, def.cost.length)) return null;
    out.meta[id] = lv;
  }
  const r = data.records;
  if (r && typeof r === 'object') {
    for (const k of Object.keys(out.records)) {
      if (num(r[k], 0, 1e9)) out.records[k] = r[k];
    }
  }
  return out;
}

export class SaveStore {
  constructor() {
    this.key = CONFIG.save.key;
    this.wasReset = false; // 這次載入時是否因為壞檔而重設
    this.available = true; // localStorage 能不能用（無痕模式等可能不行）
    this.data = this.load();
  }

  load() {
    let raw = null;
    try {
      raw = localStorage.getItem(this.key);
    } catch {
      this.available = false;
      return defaultSave();
    }
    if (raw === null) return defaultSave();
    let parsed = null;
    try {
      parsed = validate(JSON.parse(raw));
    } catch {
      parsed = null;
    }
    if (!parsed) {
      this.wasReset = true;
      const fresh = defaultSave();
      this.write(fresh);
      return fresh;
    }
    return parsed;
  }

  write(data = this.data) {
    if (!this.available) return false;
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }

  get gold() {
    return this.data.gold;
  }

  metaLevel(id) {
    return this.data.meta[id] || 0;
  }

  // 下一級價格；已滿級回傳 null
  price(id) {
    const def = CONFIG.meta[id];
    const lv = this.metaLevel(id);
    return lv < def.cost.length ? def.cost[lv] : null;
  }

  buy(id) {
    const cost = this.price(id);
    if (cost === null || this.data.gold < cost) return false;
    this.data.gold -= cost;
    this.data.meta[id] = this.metaLevel(id) + 1;
    this.write();
    return true;
  }

  // 一局結束：存金幣與紀錄
  recordRun({ gold, time, level, won, bossKilled }) {
    const d = this.data;
    d.gold = Math.min(MAX_GOLD, d.gold + Math.max(0, Math.floor(gold)));
    const r = d.records;
    r.runs++;
    if (won) r.clears++;
    if (bossKilled) r.bossKills++;
    r.bestTime = Math.max(r.bestTime, Math.floor(time));
    r.bestLevel = Math.max(r.bestLevel, level);
    this.write();
  }
}
