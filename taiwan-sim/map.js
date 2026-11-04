// 讀取前處理好的地形格子檔（src/data/taiwan-grid.json），瀏覽器與 Node 共用。
import { TERRAIN } from './config.js';

function unRle(b64, n) {
  const bin = atob(b64);
  const out = new Uint8Array(n);
  let o = 0;
  for (let i = 0; i + 1 < bin.length; i += 2) {
    const len = bin.charCodeAt(i);
    const v = bin.charCodeAt(i + 1);
    out.fill(v, o, o + len);
    o += len;
  }
  if (o !== n) throw new Error(`地形檔長度不符 (${o} ≠ ${n})`);
  return out;
}

export function decodeMap(json) {
  const { w, h } = json;
  const n = w * h;
  const terrain = unRle(json.terrain, n);
  const height = unRle(json.height, n);
  const county = unRle(json.county, n);
  const heightM = new Float32Array(n);
  for (let i = 0; i < n; i++) heightM[i] = height[i] * json.heightUnit;
  // 海岸：陸地格且上下左右有海
  const coast = new Uint8Array(n);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    if (terrain[i] === TERRAIN.SEA) continue;
    if ((x > 0 && terrain[i - 1] === 0) || (x < w - 1 && terrain[i + 1] === 0) || (y > 0 && terrain[i - w] === 0) || (y < h - 1 && terrain[i + w] === 0)) coast[i] = 1;
  }
  const counties = new Map(json.counties.map((c) => [c.id, c]));
  const countyByName = new Map(json.counties.map((c) => [c.name, c]));
  return { w, h, n, terrain, height, heightM, county, coast, counties, countyByName, ports: json.ports, meta: json };
}

export async function loadMapBrowser(url = 'data/taiwan-grid.json') {
  const res = await fetch(url);
  if (!res.ok) throw new Error('讀不到地形檔');
  return decodeMap(await res.json());
}
