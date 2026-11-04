// 存檔：只用瀏覽器 localStorage（不收集任何個資）。格式含版本號；讀檔失敗時不覆蓋原檔。
// 版本：v1 = 第一版（T-TW-01）；v2 = 第二版（T-TW-02）。舊版本讀進來會先 migrate 再還原。
import { SAVE_KEY, SAVE_VERSION } from './config.js';
import { Sim, U8_LAYERS } from './sim.js';

export const BACKUP_KEY_V1 = `${SAVE_KEY}.v1-backup`;
const OPTIONAL_LAYERS = new Set(['rail', 'elev']);

function rle(arr) {
  const out = [];
  let i = 0;
  while (i < arr.length) {
    const v = arr[i];
    let j = i + 1;
    while (j < arr.length && arr[j] === v) j++;
    out.push(j - i, v);
    i = j;
  }
  return out;
}
function unrle(list, n) {
  if (!Array.isArray(list)) throw new Error('格子資料格式錯誤');
  const out = new Uint8Array(n);
  let o = 0;
  for (let k = 0; k + 1 < list.length; k += 2) {
    const len = list[k], v = list[k + 1];
    if (!Number.isInteger(len) || len < 0 || !Number.isInteger(v) || v < 0 || v > 255 || o + len > n) throw new Error('格子資料損壞');
    out.fill(v, o, o + len);
    o += len;
  }
  if (o !== n) throw new Error('格子大小不符');
  return out;
}

export function serialize(sim) {
  const s = sim.s;
  const grid = {};
  for (const k of U8_LAYERS) grid[k] = rle(s.grid[k]);
  const pop = [];
  for (let i = 0; i < s.grid.pop.length; i++) if (s.grid.pop[i]) pop.push(i, s.grid.pop[i]);
  grid.pop = pop;
  const { grid: _g, ...rest } = s;
  return { saveVersion: SAVE_VERSION, mapSize: [sim.map.w, sim.map.h], savedAt: Date.now(), state: { ...rest, version: SAVE_VERSION, grid } };
}

// ---------- 版本遷移 ----------
// 每一步只補新欄位，舊的值（金錢、時代、縣市、格子…）原封不動。
function checkV1(obj) {
  const st = obj.state;
  if (!st || typeof st !== 'object' || !st.grid || typeof st.grid !== 'object') throw new Error('v1 存檔缺少 state/grid');
  if (typeof st.money !== 'number' || !Number.isFinite(st.money) || !Number.isInteger(st.era) || st.era < 1 || st.era > 5 || !Array.isArray(st.owned)) throw new Error('v1 存檔欄位損壞');
  for (const k of ['road', 'zone', 'level', 'bld', 'pipe', 'wire']) if (!Array.isArray(st.grid[k])) throw new Error(`v1 存檔缺少格子圖層 ${k}`);
}
export const MIGRATIONS = {
  // v1 → v2：新增 bera（建築樣式時代）、trans（交通）、metro（捷運）、rail（鐵路）、elev（高架）圖層，以及時代事件、完成條件欄位。
  // 舊建築的樣式時代記成「存檔當時的時代」，所以讀進來外觀不會突然變，也不會被當成要改建的舊樣式。
  1(obj, map) {
    checkV1(obj);
    const st = obj.state;
    const n = map.n;
    const zone = unrle(st.grid.zone, n), level = unrle(st.grid.level, n), bld = unrle(st.grid.bld, n);
    const bera = new Uint8Array(n);
    for (let i = 0; i < n; i++) if ((zone[i] && level[i]) || bld[i]) bera[i] = st.era;
    const grid = { ...st.grid, bera: rle(bera), trans: [n, 0], metro: [n, 0], rail: [n, 0], elev: [n, 0] };
    const state = { ...st, version: 2, grid, eraStart: st.month || 0, effects: [], eventsDone: {}, victory: null };
    return { ...obj, saveVersion: 2, state, migratedFrom: 1 };
  },
};
export function migrate(obj, map) {
  let cur = obj;
  const from = cur.saveVersion;
  while (cur.saveVersion < SAVE_VERSION) {
    const step = MIGRATIONS[cur.saveVersion];
    if (!step) throw new Error(`不支援的存檔版本（${cur.saveVersion}）`);
    try {
      cur = step(cur, map);
    } catch (e) {
      throw new Error(`存檔從第 ${from} 版升級失敗：${e.message || e}`);
    }
  }
  return cur;
}

export function deserialize(map, obj) {
  if (!obj || typeof obj !== 'object') throw new Error('存檔不是物件');
  if (!Number.isInteger(obj.saveVersion) || obj.saveVersion < 1 || obj.saveVersion > SAVE_VERSION) throw new Error(`存檔版本不符（${obj.saveVersion}）`);
  if (!Array.isArray(obj.mapSize) || obj.mapSize[0] !== map.w || obj.mapSize[1] !== map.h) throw new Error('地圖大小不符');
  if (obj.saveVersion < SAVE_VERSION) obj = migrate(obj, map);
  const st = obj.state;
  if (!st || typeof st.money !== 'number' || !Number.isFinite(st.money) || !Number.isInteger(st.era) || st.era < 1 || st.era > 5 || !Array.isArray(st.owned) || !st.grid) throw new Error('存檔欄位損壞');
  const grid = {};
  // 第一版沒有的圖層由 migrate 補上；v2 裡選用的圖層（rail、elev）缺少時當作全空
  for (const k of U8_LAYERS) grid[k] = st.grid[k] === undefined && OPTIONAL_LAYERS.has(k) ? new Uint8Array(map.n) : unrle(st.grid[k], map.n);
  grid.pop = new Uint16Array(map.n);
  const p = st.grid.pop;
  if (!Array.isArray(p)) throw new Error('人口資料損壞');
  for (let k = 0; k + 1 < p.length; k += 2) {
    if (!Number.isInteger(p[k]) || p[k] < 0 || p[k] >= map.n) throw new Error('人口資料損壞');
    grid.pop[p[k]] = p[k + 1];
  }
  const sim = new Sim(map, { ...st, grid });
  if (obj.migratedFrom) sim.migratedFrom = obj.migratedFrom;
  return sim;
}

// 瀏覽器用
export function saveToStorage(sim) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(serialize(sim)));
    return true;
  } catch {
    return false;
  }
}

// 回傳 { sim, migratedFrom? } 或 { error, raw }（raw 存在時表示有壞檔，呼叫端不能覆蓋）或 {}（沒有存檔）
// 舊版本存檔成功遷移時，先把原檔另存到 BACKUP_KEY_V1（已經有備份就不動），之後的自動存檔才會寫成新版本。
export function loadFromStorage(map) {
  let raw = null;
  try { raw = localStorage.getItem(SAVE_KEY); } catch { return {}; }
  if (!raw) return {};
  try {
    const obj = JSON.parse(raw);
    const oldVersion = obj?.saveVersion;
    const sim = deserialize(map, obj);
    if (sim.migratedFrom) {
      let backedUp = false;
      try {
        if (!localStorage.getItem(BACKUP_KEY_V1)) localStorage.setItem(BACKUP_KEY_V1, raw);
        backedUp = true;
      } catch { /* 備份失敗：呼叫端不要覆蓋 */ }
      if (!backedUp) return { error: '舊存檔無法備份，為了安全先不升級', raw };
      return { sim, migratedFrom: oldVersion };
    }
    return { sim };
  } catch (e) {
    return { error: String(e.message || e), raw };
  }
}

export function backupBrokenSave(raw) {
  try { localStorage.setItem(`${SAVE_KEY}.broken-${Date.now()}`, raw); return true; } catch { return false; }
}
