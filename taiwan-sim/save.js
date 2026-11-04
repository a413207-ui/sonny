// 存檔：只用瀏覽器 localStorage（不收集任何個資）。格式含版本號；讀檔失敗時不覆蓋原檔。
import { SAVE_KEY, SAVE_VERSION } from './config.js';
import { Sim } from './sim.js';

const U8_KEYS = ['road', 'zone', 'level', 'bld', 'pipe', 'wire'];

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
  for (const k of U8_KEYS) grid[k] = rle(s.grid[k]);
  const pop = [];
  for (let i = 0; i < s.grid.pop.length; i++) if (s.grid.pop[i]) pop.push(i, s.grid.pop[i]);
  grid.pop = pop;
  const { grid: _g, ...rest } = s;
  return { saveVersion: SAVE_VERSION, mapSize: [sim.map.w, sim.map.h], savedAt: Date.now(), state: { ...rest, grid } };
}

export function deserialize(map, obj) {
  if (!obj || typeof obj !== 'object') throw new Error('存檔不是物件');
  if (obj.saveVersion !== SAVE_VERSION) throw new Error(`存檔版本不符（${obj.saveVersion}）`);
  if (!Array.isArray(obj.mapSize) || obj.mapSize[0] !== map.w || obj.mapSize[1] !== map.h) throw new Error('地圖大小不符');
  const st = obj.state;
  if (!st || typeof st.money !== 'number' || !Number.isFinite(st.money) || !Number.isInteger(st.era) || !Array.isArray(st.owned)) throw new Error('存檔欄位損壞');
  const grid = {};
  for (const k of U8_KEYS) grid[k] = unrle(st.grid[k], map.n);
  grid.pop = new Uint16Array(map.n);
  const p = st.grid.pop;
  if (!Array.isArray(p)) throw new Error('人口資料損壞');
  for (let k = 0; k + 1 < p.length; k += 2) {
    if (!Number.isInteger(p[k]) || p[k] < 0 || p[k] >= map.n) throw new Error('人口資料損壞');
    grid.pop[p[k]] = p[k + 1];
  }
  return new Sim(map, { ...st, grid });
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

// 回傳 { sim } 或 { error, raw }（raw 存在時表示有壞檔，呼叫端不能覆蓋）或 {}（沒有存檔）
export function loadFromStorage(map) {
  let raw = null;
  try { raw = localStorage.getItem(SAVE_KEY); } catch { return {}; }
  if (!raw) return {};
  try {
    return { sim: deserialize(map, JSON.parse(raw)) };
  } catch (e) {
    return { error: String(e.message || e), raw };
  }
}

export function backupBrokenSave(raw) {
  try { localStorage.setItem(`${SAVE_KEY}.broken-${Date.now()}`, raw); return true; } catch { return false; }
}
