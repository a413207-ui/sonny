// 台灣模擬：城市服務系統（第三版）——教育、治安／犯罪、醫療／健康／污染、交通車流、土地價值。
// 純邏輯（瀏覽器和 Node 共用），每次基礎設施更新、每個月重算一次。所有數值在 config.js。
import {
  SERVICE_BUILDINGS, EDUCATION, CRIME, POLLUTION, HEALTH, TRAFFIC, LAND_VALUE, RAIL, TRANSPORT, BUDGET, TERRAIN,
} from './config.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// 預算 → 服務效果倍率（加碼效果遞減；0% 預算 = 沒有效果）
export const budgetEffect = (pct) => Math.sqrt(Math.max(0, pct) / 100);

export function allocServices(sim) {
  const n = sim.map.n;
  sim.edu = new Uint8Array(n);
  sim.police = new Uint8Array(n);
  sim.care = new Uint8Array(n);
  sim.pollution = new Uint8Array(n);
  sim.health = new Uint8Array(n);
  sim.crime = new Uint8Array(n);
  sim.landValue = new Uint8Array(n);
  sim.flow = new Float32Array(n);
  sim.cong = new Float32Array(n);
  sim.transitCov = new Uint8Array(n);
  sim.svcStats = {};
}

// 範圍內取最大值；越遠越弱（邊緣剩一半）
function stampMax(sim, arr, ci, r, v) {
  const { w, h } = sim.map;
  const x0 = ci % w, y0 = (ci / w) | 0;
  for (let y = Math.max(0, y0 - r); y <= Math.min(h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
    const d = Math.max(Math.abs(x - x0), Math.abs(y - y0));
    const val = Math.round(v * (1 - (0.5 * d) / Math.max(1, r)));
    const j = y * w + x;
    if (arr[j] < val) arr[j] = val;
  }
}
// 範圍內累加（污染）
function stampAdd(sim, arr, ci, r, v) {
  const { w, h } = sim.map;
  const x0 = ci % w, y0 = (ci / w) | 0;
  for (let y = Math.max(0, y0 - r); y <= Math.min(h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
    const d = Math.max(Math.abs(x - x0), Math.abs(y - y0));
    arr[y * w + x] += v * (1 - d / (r + 1));
  }
}

// 道路容量（每月車流）
export function roadCapacity(sim, i) {
  const g = sim.s.grid, T = TRAFFIC.capacity, era = sim.s.era;
  if (!g.road[i]) return 0;
  let c = 0;
  if (g.elev[i] !== 1) c += g.trans[i] ? T.trans[g.trans[i]] : g.road[i] === 2 ? T.bridge : T.road[era];
  if (g.elev[i]) c += g.trans[i] ? T.trans[g.trans[i]] : T.elevated;
  return c * (0.7 + 0.3 * Math.min(1.5, (sim.s.budget?.roads ?? BUDGET.default) / 100));
}

export function updateServices(sim) {
  const m = sim.map, g = sim.s.grid, n = m.n, w = m.w;
  const era = sim.s.era;
  const budget = sim.s.budget || {};
  // ---- 服務範圍 ----
  sim.edu.fill(0); sim.police.fill(0); sim.care.fill(0);
  const target = { edu: sim.edu, police: sim.police, health: sim.care };
  for (const [k, b] of Object.entries(SERVICE_BUILDINGS)) {
    const list = sim.bldList[k];
    if (!list || !list.length) continue;
    const eff = b.strength * budgetEffect(budget[b.svc] ?? BUDGET.default);
    for (const c of list) stampMax(sim, target[b.svc], c, b.radius, Math.min(100, eff));
  }
  // ---- 鐵路／捷運通勤範圍（分散車流）----
  sim.transitCov.fill(0);
  for (let i = 0; i < n; i++) {
    if (sim.railActive[i]) stampMax(sim, sim.transitCov, i, RAIL.radius, 1);
    else if (g.metro[i]) stampMax(sim, sim.transitCov, i, TRANSPORT.metro.radius, 1);
  }
  // ---- 污染 ----
  const pol = sim._pol || (sim._pol = new Float32Array(n));
  pol.fill(0);
  const PI = POLLUTION.industry;
  for (const i of sim.zoneList) {
    if (g.zone[i] !== 3 || !g.level[i]) continue;
    const v = g.level[i] * PI.perLevel * (sim.beraAt(i) >= 5 ? PI.techMult : 1);
    stampAdd(sim, pol, i, PI.radius, v);
  }
  for (const [k, [v, r]] of Object.entries(POLLUTION.sources)) {
    if (!v) continue;
    const mult = sim.isObsolete?.(k) ? 1.5 : 1;
    for (const c of sim.bldList[k] || []) stampAdd(sim, pol, c, r, v * mult);
  }
  for (let i = 0; i < n; i++) sim.pollution[i] = pol[i] > 100 ? 100 : pol[i];
  // ---- 健康（所有陸地，畫圖層用）----
  for (let i = 0; i < n; i++) {
    if (m.terrain[i] === TERRAIN.SEA) { sim.health[i] = 0; continue; }
    sim.health[i] = clamp(Math.round(HEALTH.base + sim.care[i] * HEALTH.care + (sim.waterOK[i] ? HEALTH.water : 0) - sim.pollution[i] * HEALTH.pollution), 0, 100);
  }
  // ---- 失業率 ----
  const t = sim.totals;
  const unemp = t.needJobs > 0 ? clamp((t.needJobs - t.jobs) / t.needJobs, 0, 1) : 0;
  // ---- 交通車流 ----
  const flow = sim.flow, cong = sim.cong;
  flow.fill(0); cong.fill(0);
  const share = TRAFFIC.carShare[era] ?? 1;
  let maxDist = 0;
  const roads = [];
  for (let i = 0; i < n; i++) if (g.road[i] && sim.connected[i]) { roads.push(i); if (sim.dist[i] > maxDist) maxDist = sim.dist[i]; }
  for (const i of sim.zoneList) {
    const a = sim.accessRoad[i];
    if (a < 0 || !g.level[i]) continue;
    let trips = g.zone[i] === 1 ? g.pop[i] * TRAFFIC.perPop : sim.capAt(i) * TRAFFIC.perJob;
    trips *= share * (sim.transitCov[i] ? 1 - TRAFFIC.transitShare : 1);
    flow[a] += trips;
  }
  // 依離港口的距離分桶，從遠到近往港口方向累積
  const buckets = Array.from({ length: maxDist + 1 }, () => []);
  for (const i of roads) buckets[sim.dist[i]].push(i);
  const cap = sim._cap || (sim._cap = new Float32Array(n));
  for (const i of roads) cap[i] = roadCapacity(sim, i);
  for (let d = maxDist; d > 0; d--) {
    for (const i of buckets[d]) {
      if (!flow[i]) continue;
      let best = -1;
      for (const j of sim.neighbors4(i)) if (sim.connected[j] && sim.dist[j] === d - 1 && (best < 0 || cap[j] > cap[best])) best = j;
      if (best >= 0) flow[best] += flow[i] * TRAFFIC.decay;
    }
  }
  let jammed = 0, busiest = 0;
  for (const i of roads) {
    cong[i] = cap[i] > 0 ? flow[i] / cap[i] : 0;
    if (cong[i] >= TRAFFIC.yellow) jammed++;
    if (cong[i] > busiest) busiest = cong[i];
  }
  // ---- 犯罪、土地價值（分區格）----
  let crimeSum = 0, eduSum = 0, healthSum = 0, lvSum = 0, zn = 0;
  sim.crime.fill(0); sim.landValue.fill(0);
  for (const i of sim.zoneList) {
    const density = g.level[i] / 6;
    const cr = clamp(Math.round(CRIME.base + density * CRIME.density + unemp * CRIME.unemployment - sim.edu[i] * CRIME.education - sim.police[i] * CRIME.police), 0, 100);
    sim.crime[i] = cr;
    const a = sim.accessRoad[i];
    const jam = a >= 0 && cong[a] >= TRAFFIC.yellow ? 1 : 0;
    const L = LAND_VALUE;
    sim.landValue[i] = clamp(Math.round(L.base + sim.edu[i] * L.education + sim.health[i] * L.health - (HEALTH.base * L.health) - cr * L.crime - sim.pollution[i] * L.pollution + sim.transit[i] * L.transit - jam * L.jam + sim.landmark[i] * L.landmark), 0, 100);
    if (g.level[i]) { crimeSum += cr; eduSum += sim.edu[i]; healthSum += sim.health[i]; lvSum += sim.landValue[i]; zn++; }
  }
  sim.svcStats = {
    unemployment: unemp, jammedRoads: jammed, roads: roads.length, busiest,
    crime: zn ? crimeSum / zn : 0, edu: zn ? eduSum / zn : 0, health: zn ? healthSum / zn : 0, landValue: zn ? lvSum / zn : LAND_VALUE.base,
  };
}

// 教育要求：商業/工業長到某一級要多少教育
export function eduLevelCap(sim, i) {
  let cap = 6;
  for (const [lv, need] of Object.entries(EDUCATION.levelReq)) if (sim.edu[i] < need) cap = Math.min(cap, Number(lv) - 1);
  return cap;
}

// 圖層：回傳 0–100 的值（null = 這格不畫）
export const LAYERS = {
  traffic: { name: '交通', icon: '🚦' },
  edu: { name: '教育', icon: '🎓' },
  police: { name: '警力', icon: '👮' },
  crime: { name: '犯罪', icon: '🦹' },
  health: { name: '健康', icon: '🏥' },
  pollution: { name: '污染', icon: '🏭' },
  landValue: { name: '地價', icon: '💹' },
};
export function layerValue(sim, kind, i) {
  const g = sim.s.grid;
  if (kind === 'traffic') return g.road[i] && sim.connected[i] ? sim.cong[i] : null;
  if (kind === 'crime' || kind === 'landValue') return g.zone[i] ? sim[kind][i] : null;
  if (kind === 'police') return sim.police[i] || null;
  if (kind === 'edu') return sim.edu[i] || null;
  if (kind === 'health') return g.zone[i] || sim.care[i] ? sim.health[i] : null;
  if (kind === 'pollution') return sim.pollution[i] >= 3 ? sim.pollution[i] : null;
  return null;
}
