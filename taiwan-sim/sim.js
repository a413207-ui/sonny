// 台灣模擬：模擬核心（純邏輯，不碰 DOM；瀏覽器和 Node 測試共用）。
import {
  START, LAND, ERAS, MAX_PLAYABLE_ERA, POWER_REQUIRED_FROM_ERA, TERRAIN, HILL_DENSITY, ROAD, ZONES,
  GROWTH, HAPPINESS, ECON, FACILITIES, LINES, FINANCE, MILESTONES, UNDO_LIMIT, TIME,
  TRANSPORT, ERA_UPGRADES, OBSOLETE, FACILITY_REBUILD, LANDMARK, ERA_EVENTS, REGION_TYPES, REGIONS, REGION_INCOME,
  SPECIAL_EFFECTS, VICTORY, BUILDING_STYLES, SAVE_VERSION, RAIL, ELEVATED,
  TAX, BUDGET, CRIME, HEALTH, TRAFFIC, LAND_VALUE, POLLUTION,
} from './config.js';
import { allocServices, updateServices, eduLevelCap } from './services.js';
import { allocCommute, computeCommute } from './commute.js';
import { buildingName, makeResident, hash3, yearOf, seeded } from './names.js';
import { COMMUTE, RESIDENTS, SERVICE_BUILDINGS } from './config.js';

// 建築編號（存檔用，只能往後加，不能改舊的）
export const BLD = {
  NONE: 0, PORT: 1, WELL: 2, WATERWORKS: 3, COAL: 4, LIGHTHOUSE: 5, STATION: 6,
  WATERPOINT: 7, PURIFIER: 8, HYDRO: 9, NUCLEAR: 10, MODERNPLANT: 11, DAM: 12, EPZ: 13, SKYSCRAPER: 14, RAILSTOP: 15,
  SHUFANG: 16, GONGXUE: 17, MIDDLE: 18, UNIVERSITY: 19, BAOJIA: 20, PAICHU: 21, POLICEHQ: 22, HERBAL: 23, HOSPITAL: 24, MEDCENTER: 25,
};
export const BLD_KEY = [null, 'port', 'well', 'waterworks', 'coal', 'lighthouse', 'station', 'waterpoint', 'purifier', 'hydro', 'nuclear', 'modernplant', 'dam', 'epz', 'skyscraper', 'railstop',
  'shufang', 'gongxue', 'middle', 'university', 'baojia', 'paichu', 'policehq', 'herbal', 'hospital', 'medcenter'];
export const KEY_BLD = Object.fromEntries(BLD_KEY.map((k, i) => [k, i]).filter(([k]) => k));
export const ZONE = { NONE: 0, R: 1, C: 2, I: 3 };
export const ZONE_KEY = [null, 'R', 'C', 'I'];
// 每格存的圖層（u8）；pop 另外是 u16
// bera：這格建築是「哪個時代的樣式」（0 = 沒有）；trans：道路上的交通升級（TRANSPORT.level）；metro：捷運
// rail：鐵路（1 = 鐵軌、2 = 鐵橋）；relev：這格的鐵路是高架
// elev：高架道路（1 = 只有高架、2 = 高架＋底下的地面道路，兩層交叉）。高架底下可以蓋東西（柱子格除外）
export const U8_LAYERS = ['road', 'zone', 'level', 'bld', 'pipe', 'wire', 'bera', 'trans', 'metro', 'rail', 'elev', 'relev'];
export const TOOLS = ['road', 'rail', 'R', 'C', 'I', ...Object.keys(FACILITIES), 'pipe', 'wire', ...Object.keys(TRANSPORT), 'bulldoze'];
const LINE_TOOLS = new Set(['road', 'rail', 'pipe', 'wire', ...Object.keys(TRANSPORT)]);
// 可以蓋成高架的工具（任何道路種類＋鐵路）
export const ELEVATABLE = new Set(['road', 'rail', ...Object.keys(TRANSPORT).filter((k) => TRANSPORT[k].on === 'road')]);
const RECT_TOOLS = new Set(['R', 'C', 'I', 'bulldoze']);
const WATER_KEYS = Object.keys(FACILITIES).filter((k) => FACILITIES[k].kind === 'water' || FACILITIES[k].water);
const POWER_KEYS = Object.keys(FACILITIES).filter((k) => FACILITIES[k].kind === 'power');
const SPECIAL_KEYS = Object.keys(FACILITIES).filter((k) => FACILITIES[k].specialOf);

const z0 = (g, i) => g.zone[i];
export const landPrice = (n) => Math.round(LAND.base * LAND.ratio ** (n - 1));
export const eraInfo = (era) => ERAS[era - 1];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const styleName = (z, bera, level) => {
  const list = BUILDING_STYLES[z]?.[bera];
  if (!list || !level) return null;
  return list[Math.min(level, list.length) - 1];
};

function mulberry(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 每個縣市的平原/丘陵格數（田賦用），每張地圖算一次
function countyStats(map) {
  if (map._countyStats) return map._countyStats;
  const st = new Map();
  for (const c of map.meta.counties) st.set(c.id, { plain: 0, hill: 0 });
  for (let i = 0; i < map.n; i++) {
    const c = st.get(map.county[i]);
    if (!c) continue;
    if (map.terrain[i] === TERRAIN.PLAIN) c.plain++;
    else if (map.terrain[i] === TERRAIN.HILL) c.hill++;
  }
  map._countyStats = st;
  return st;
}

export class Sim {
  constructor(map, state = null) {
    this.map = map;
    const n = map.n;
    this.s = state || Sim.newState(map);
    Sim.fillDefaults(this.s);
    const g = this.s.grid;
    for (const k of U8_LAYERS) if (!g[k]) g[k] = new Uint8Array(n);
    if (!g.pop) g.pop = new Uint16Array(n);
    this.rng = mulberry(this.s.rngSeed);
    // 縣市類型（依 county id）
    this.ctype = new Map();
    for (const c of map.meta.counties) this.ctype.set(c.id, REGION_TYPES[REGIONS[c.name]?.type] || REGION_TYPES.west);
    this.cstats = countyStats(map);
    // 衍生資料（不存檔）
    this.connected = new Uint8Array(n);   // 接到港口的道路節點
    this.comp = new Int32Array(n);        // 道路連通區塊編號
    this.dist = new Int32Array(n);        // 道路離港口距離
    this.access = new Uint8Array(n);      // 區塊旁邊有接港口的路
    this.waterCov = new Uint8Array(n);
    this.waterOK = new Uint8Array(n);
    this.powerCov = new Uint8Array(n);
    this.powerOK = new Uint8Array(n);
    this.happy = new Uint8Array(n);
    this.transit = new Uint8Array(n);     // 交通加成（百分比）
    this.plantPen = new Int8Array(n);     // 電廠附近的幸福度扣分
    this.landmark = new Uint8Array(n);    // 地標加分
    this.pillar = new Uint8Array(n);      // 高架道路的柱子
    this.railPillar = new Uint8Array(n);  // 高架鐵路的柱子
    this.railActive = new Uint8Array(n);  // 連到車站的鐵路
    this.accessRoad = new Int32Array(n).fill(-1); // 區塊進出用的地面道路格
    allocServices(this);                  // 教育、警力、醫療、污染、健康、犯罪、地價、車流（services.js）
    allocCommute(this);                   // 通勤配對與路線（commute.js）
    this.stamp = new Int32Array(n);
    this.stampId = 0;
    this.zoneList = [];
    this.bldList = {};
    this.lineCount = { pipe: 0, wire: 0, road: 0, bridge: 0, trans: {}, metro: 0 };
    this.util = { water: { cap: 0, use: 0 }, power: { cap: 0, use: 0 } };
    this.totals = { pop: 0, capC: 0, capI: 0, filledC: 0, filledI: 0, jobs: 0, workers: 0, openJobs: 0 };
    this.demand = { R: 0.5, C: 0, I: 0 };
    this.events = [];          // 給介面用的事件（提示、音效）
    this.dirtyCells = new Set(); // 給畫面重畫用
    this.dirtyAll = true;
    this.infraDirty = true;
    this.undoStack = [];
    this.updateInfra();
    this.computeTotals();
    computeCommute(this);
    updateServices(this);
    this.updateHappiness();
    this.ensureInfo();
  }

  static newState(map) {
    const kao = map.countyByName.get(START.region);
    const n = map.n;
    const s = {
      version: SAVE_VERSION, month: 0, monthFrac: 0, money: START.money, era: 1, eraStart: 0,
      owned: [kao.id], purchases: 0, rngSeed: 12345,
      loan: { taken: false, monthsLeft: 0 }, pendingLoan: false, gameOver: null, victory: null,
      milestones: {}, ships: [], shipTimer: 0.5, portRR: 0, portUnloaded: {},
      effects: [], eventsDone: {},
      stats: { income: 0, expense: 0, net: 0, breakdown: {}, history: [] }, deficitStreak: 0, warning: null,
      grid: { pop: new Uint16Array(n) },
    };
    for (const k of U8_LAYERS) s.grid[k] = new Uint8Array(n);
    for (const p of map.ports) if (p.county === kao.id) s.grid.bld[p.y * map.w + p.x] = BLD.PORT;
    return s;
  }

  // 第二版新增的欄位（舊狀態缺少時補上預設值）
  static fillDefaults(s) {
    if (!Number.isInteger(s.eraStart)) s.eraStart = s.month || 0;
    if (!Array.isArray(s.effects)) s.effects = [];
    if (!s.eventsDone || typeof s.eventsDone !== 'object') s.eventsDone = {};
    if (s.victory === undefined) s.victory = null;
    // 第三版：稅率與預算
    if (!s.taxRates || typeof s.taxRates !== 'object') s.taxRates = {};
    for (const z of ['R', 'C', 'I']) if (!Number.isFinite(s.taxRates[z])) s.taxRates[z] = TAX.default;
    if (!s.budget || typeof s.budget !== 'object') s.budget = {};
    for (const k of Object.keys(BUDGET.keys)) if (!Number.isFinite(s.budget[k])) s.budget[k] = BUDGET.default;
    // 第四版：每棟建築的名字、住戶、公司（key = 格子編號）
    if (!s.info || typeof s.info !== 'object' || Array.isArray(s.info)) s.info = {};
    if (!Number.isInteger(s.infoSeq)) s.infoSeq = 0;
    return s;
  }

  // ---------- 查詢 ----------
  idx(x, y) { return y * this.map.w + x; }
  inMap(x, y) { return x >= 0 && y >= 0 && x < this.map.w && y < this.map.h; }
  owns(i) { return this.s.owned.includes(this.map.county[i]); }
  get era() { return this.s.era; }
  get money() { return this.s.money; }
  ownedPorts() { return this.map.ports.filter((p) => this.s.owned.includes(p.county)); }
  // 樣式時代（舊存檔或沒記到的格子當作目前時代）
  beraAt(i) { return this.s.grid.bera[i] || this.s.era; }
  capAt(i, level = this.s.grid.level[i], bera = this.beraAt(i)) {
    const z = ZONE_KEY[this.s.grid.zone[i]];
    if (!z) return 0;
    const c = (ZONES[z].cap[level] || 0) * (ERA_UPGRADES.capMult[bera] || 1);
    return Math.floor(this.map.terrain[i] === TERRAIN.HILL ? c * HILL_DENSITY : c);
  }
  // 這格目前最多能長到幾級：本時代上限，以及「舊樣式」那個時代的上限
  maxLevelAt(i) { return Math.min(eraInfo(this.s.era).maxLevel, eraInfo(this.beraAt(i)).maxLevel); }
  // 成長上限再加上：商業/工業看教育、住宅高樓看地價
  growthLevelCap(i) {
    let cap = this.maxLevelAt(i);
    const z = this.s.grid.zone[i];
    if (z === ZONE.C || z === ZONE.I) cap = Math.min(cap, eduLevelCap(this, i));
    else if (z === ZONE.R && this.landValue[i] < LAND_VALUE.highLevelMin) cap = Math.min(cap, 4);
    return cap;
  }
  eduCap(i) { return eduLevelCap(this, i); }
  // ---------- 稅率、預算 ----------
  taxRate(z) { return this.s.taxRates[z]; }
  setTax(z, v) {
    if (!['R', 'C', 'I'].includes(z)) return false;
    this.s.taxRates[z] = Math.round(clamp(Number(v) || 0, TAX.min, TAX.max));
    this.computeTotals();
    return true;
  }
  setBudget(k, v) {
    if (!(k in BUDGET.keys)) return false;
    this.s.budget[k] = Math.round(clamp(Number(v) || 0, BUDGET.min, BUDGET.max));
    this.updateInfra();
    return true;
  }
  // 稅率對成長機率的倍率（高於預設 → 變慢）
  taxGrowthMult(z) {
    const d = this.s.taxRates[ZONE_KEY[z]] - TAX.default;
    return clamp(1 - d * TAX.growthPerPoint, 1 - 1, 1 + TAX.maxBonus);
  }
  jammed(i) { const a = this.accessRoad[i]; return a >= 0 && this.cong[a] >= TRAFFIC.yellow; }
  powerNeeded() { return this.s.era >= POWER_REQUIRED_FROM_ERA; }
  hasSpecial(key) { return (this.bldList[key] || []).length > 0; }
  nextLandPrice() { return landPrice(this.s.purchases + 1); }
  regionType(countyId) { return this.ctype.get(countyId) || REGION_TYPES.west; }
  buildMult(i) { const t = this.regionType(this.map.county[i]); return t.buildMult[this.s.era] ?? 1; }
  regionBuyable(name) {
    const c = this.map.countyByName.get(name);
    if (!c) return { ok: false, reason: '沒有這個縣市' };
    if (this.s.owned.includes(c.id)) return { ok: false, reason: '已經買下' };
    if (!LAND.allowOthers) return { ok: false, reason: '之後開放' };
    const price = this.nextLandPrice();
    if (this.s.money < price) return { ok: false, reason: '錢不夠', price };
    return { ok: true, price };
  }
  // 縣市每月田賦（買下後原有聚落繳的；開局縣市不算）
  landIncomeOf(countyId) {
    const c = this.map.counties.get(countyId);
    if (!c || c.name === START.region) return 0;
    const st = this.cstats.get(countyId);
    return (st.plain * REGION_INCOME.perPlain + st.hill * REGION_INCOME.perHill) * this.regionType(countyId).taxMult * eraInfo(this.s.era).taxMult;
  }
  // 目前生效的時代事件倍率
  eff(key) {
    let v = 1;
    for (const e of this.s.effects) if (e[key] != null) v *= e[key];
    return v;
  }
  specialEff(key) {
    let v = 1;
    for (const [k, e] of Object.entries(SPECIAL_EFFECTS)) if (e[key] != null && this.hasSpecial(k)) v *= e[key];
    return v;
  }
  isObsolete(key) { const o = OBSOLETE[key]; return !!(o && this.s.era >= o.fromEra); }
  facCapacity(key) {
    const f = FACILITIES[key];
    const base = f.kind === 'special' ? (f.water || 0) : f.capacity;
    return this.isObsolete(key) ? base * (OBSOLETE[key].capacityMult ?? 1) : base;
  }
  facMaintenance(key) {
    const f = FACILITIES[key];
    let m = f.maintenance;
    if (f.kind === 'service') m *= (this.s.budget[f.svc] ?? BUDGET.default) / 100;
    if (this.isObsolete(key)) m *= OBSOLETE[key].maintenanceMult ?? 1;
    if (f.kind === 'power') m *= this.eff('maintPower');
    return m;
  }
  facNearPenalty(key) {
    const p = FACILITIES[key].nearPenalty || 0;
    return this.isObsolete(key) ? p * (OBSOLETE[key].nearPenaltyMult ?? 1) : p;
  }
  cellStatus(i) {
    const g = this.s.grid;
    const z = g.zone[i];
    const out = { access: !!this.access[i], water: !!this.waterOK[i], waterCov: !!this.waterCov[i], power: !!this.powerOK[i], powerCov: !!this.powerCov[i], happy: this.happy[i], transit: this.transit[i] };
    if (!z) return out;
    const why = [];
    if (!out.access) why.push('沒有接到通往港口的路');
    if (!out.water) why.push(out.waterCov ? '水量不足' : '沒有水');
    if (this.powerNeeded() && !out.power) why.push(out.powerCov ? '電力不足' : '沒有電');
    if (z === ZONE.R && out.happy < GROWTH.happinessMin) why.push('幸福度太低（工業或電廠太近）');
    if (z === ZONE.R && this.crime[i] >= CRIME.growthBlock) why.push(`犯罪太高（${this.crime[i]}）：蓋警察局`);
    if (z === ZONE.R && this.health[i] < HEALTH.growthBlock) why.push(`健康太差（${this.health[i]}）：蓋醫院、遠離污染`);
    if (this.jammed(i)) why.push('門口的路塞車：成長變慢（蓋公路、高速公路、高架或鐵路分散車流）');
    if (g.level[i] && g.level[i] < this.maxLevelAt(i) && g.level[i] >= this.growthLevelCap(i)) {
      why.push(z === ZONE.R ? `地價不夠（${this.landValue[i]}／${LAND_VALUE.highLevelMin}）：蓋不了更高的樓` : `教育程度不夠（${this.edu[i]}）：蓋學校才能再升級`);
    }
    if (g.level[i] && g.level[i] >= this.maxLevelAt(i)) {
      if (this.beraAt(i) < this.s.era && g.level[i] < eraInfo(this.s.era).maxLevel) why.push(`還是${eraInfo(this.beraAt(i)).name}的舊樣式：改建後才能再長高`);
      else why.push('已達本時代最高等級');
    }
    out.why = why;
    return out;
  }

  // ---------- 建造 ----------
  cellsFor(tool, x0, y0, x1, y1) {
    const out = [];
    if (LINE_TOOLS.has(tool)) {
      // L 形：先橫（x）後直（y）
      const sx = Math.sign(x1 - x0) || 1;
      for (let x = x0; x !== x1 + sx; x += sx) out.push([x, y0]);
      const sy = Math.sign(y1 - y0) || 1;
      if (y1 !== y0) for (let y = y0 + sy; y !== y1 + sy; y += sy) out.push([x1, y]);
    } else if (RECT_TOOLS.has(tool)) {
      for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++) for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) out.push([x, y]);
    } else out.push([x1, y1]);
    return out.filter(([x, y]) => this.inMap(x, y)).map(([x, y]) => this.idx(x, y));
  }

  near(i, r, pred) {
    const { w, h } = this.map;
    const x = i % w, y = (i / w) | 0;
    for (let yy = Math.max(0, y - r); yy <= Math.min(h - 1, y + r); yy++) for (let xx = Math.max(0, x - r); xx <= Math.min(w - 1, x + r); xx++) {
      if (pred(yy * w + xx)) return true;
    }
    return false;
  }
  neighbors4(i) {
    const { w, h } = this.map;
    const x = i % w, y = (i / w) | 0;
    const out = [];
    if (x > 0) out.push(i - 1);
    if (x < w - 1) out.push(i + 1);
    if (y > 0) out.push(i - w);
    if (y < h - 1) out.push(i + w);
    return out;
  }
  // 設施擺放條件（新蓋、改建共用）
  facilitySpotReason(key, i) {
    const f = FACILITIES[key], m = this.map;
    if (f.needs === 'river' && !this.near(i, 1, (j) => m.terrain[j] === TERRAIN.RIVER)) return `${f.name}要蓋在河邊`;
    if (f.needs === 'coast' && !this.near(i, 1, (j) => m.terrain[j] === TERRAIN.SEA)) return `${f.name}要蓋在海邊`;
    if (f.needs === 'road' && !this.neighbors4(i).some((j) => this.connected[j] && this.hasGroundRoad(j))) return `${f.name}要緊鄰接到港口的路`;
    if (f.needs === 'rail' && !this.neighbors4(i).some((j) => this.s.grid.rail[j])) return `${f.name}要緊鄰鐵路`;
    return null;
  }

  // 高架柱子：每一段連續高架從端點（編號最小的端點；環狀就用編號最小的格）起算，第 1、1+N、1+2N…格有柱子
  pillarsFor(startCells, isElev) {
    const n = this.map.n, every = ELEVATED.pillarEvery;
    const seen = new Set();
    const out = [];
    for (const st of startCells) {
      if (seen.has(st) || !isElev(st)) continue;
      const comp = [st]; seen.add(st);
      for (let h = 0; h < comp.length; h++) for (const j of this.neighbors4(comp[h])) if (!seen.has(j) && isElev(j)) { seen.add(j); comp.push(j); }
      const deg = (i) => this.neighbors4(i).filter(isElev).length;
      const ends = comp.filter((i) => deg(i) <= 1);
      const anchor = Math.min(...(ends.length ? ends : comp));
      const dist = new Map([[anchor, 0]]);
      const q = [anchor];
      for (let h = 0; h < q.length; h++) for (const j of this.neighbors4(q[h])) if (!dist.has(j) && isElev(j)) { dist.set(j, dist.get(q[h]) + 1); q.push(j); }
      for (const [i, d] of dist) if (d % every === 0) out.push(i);
    }
    void n;
    return out;
  }
  // 這格有地面道路（港口也算）／有高架道路橋面
  hasGroundRoad(i) { const g = this.s.grid; return !!((g.road[i] && g.elev[i] !== 1) || g.bld[i] === BLD.PORT); }
  hasDeck(i) { const g = this.s.grid; return !!(g.road[i] && g.elev[i]); }
  // 地面上有沒有東西（分區、建築、地面鐵路）：高架的柱子不能壓在這些上面（可以立在地面道路的中央分隔島）
  groundBusy(i) { const g = this.s.grid; return !!(g.zone[i] || g.bld[i] || (g.rail[i] && !g.relev[i])); }
  railGroundBusy(i) { const g = this.s.grid; return !!(g.zone[i] || g.bld[i]); }
  anyPillar(i) { return !!(this.pillar[i] || this.railPillar[i]); }
  // 地面空著（上面只有高架、而且不是柱子格）
  groundFree(i) {
    const g = this.s.grid;
    return (!g.road[i] || g.elev[i] === 1) && (!g.rail[i] || g.relev[i]) && !g.bld[i] && !this.anyPillar(i);
  }
  railCost(i) {
    const t = this.map.terrain[i];
    return t === TERRAIN.MOUNTAIN ? RAIL.cost.mountain : t === TERRAIN.HILL ? RAIL.cost.hill : RAIL.cost.plain;
  }
  // 地面道路（高架不算）擋住
  groundRoad(i) { const g = this.s.grid; return !!(g.road[i] && g.elev[i] !== 1); }
  roadCost(i) {
    const t = this.map.terrain[i];
    return t === TERRAIN.MOUNTAIN ? ROAD.cost.mountain : t === TERRAIN.HILL ? ROAD.cost.hill : ROAD.cost.plain;
  }
  canElevate() { return this.s.era >= ELEVATED.era; }

  // 回傳 { cells: [{i, cost, set}], cost, reason }
  // opts.elev：道路類工具（路、公路、高速公路）蓋成高架
  plan(tool, x0, y0, x1 = x0, y1 = y0, opts = {}) {
    const s = this.s, g = s.grid, m = this.map, era = s.era;
    const cells = [];
    let cost = 0;
    const reasons = new Set();
    const add = (i, c, set) => { c = Math.round(c * this.buildMult(i)); cells.push({ i, cost: c, set }); cost += c; };
    const elev = !!opts.elev && ELEVATABLE.has(tool);
    if (elev && !this.canElevate()) return { cells: [], cost: 0, reason: `要到${eraInfo(ELEVATED.era).name}才能蓋高架`, skipped: [] };
    for (const i of this.cellsFor(tool, x0, y0, x1, y1)) {
      const t = m.terrain[i];
      const empty = this.groundFree(i) && !g.zone[i]; // 高架底下（不是柱子）也算空地
      if (t === TERRAIN.SEA) { reasons.add('不能蓋在海上'); continue; }
      if (!this.owns(i)) { reasons.add('這裡還沒買下（到「區域」購買）'); continue; }
      if (tool === 'road') {
        if (g.bld[i] === BLD.PORT) continue;
        if (elev) {
          if (g.road[i] && g.elev[i]) continue;
          if (g.road[i]) add(i, ELEVATED.cost, { elev: 2 });                 // 從地面道路上面跨過（地面道路保留，兩層交叉）
          else add(i, (t === TERRAIN.RIVER ? ROAD.cost.plain : this.roadCost(i)) + ELEVATED.cost, { road: 1, elev: 1 });
        } else {
          if (g.road[i] && g.elev[i] === 1) {
            // 在高架底下鋪地面道路（柱子格不行）
            if (this.anyPillar(i)) { reasons.add('高架柱子擋住'); continue; }
            if (g.zone[i] || g.bld[i]) { reasons.add('有東西擋住，先拆除'); continue; }
            add(i, t === TERRAIN.RIVER ? ROAD.bridgeCost[era] : this.roadCost(i), { elev: 2 });
            continue;
          }
          if (g.road[i]) continue;
          if (g.zone[i] || g.bld[i]) { reasons.add('有東西擋住，先拆除（或打開「高架」從上面跨過）'); continue; }
          if (this.railPillar[i]) { reasons.add('高架鐵路的柱子擋住'); continue; }
          if (t === TERRAIN.RIVER) add(i, ROAD.bridgeCost[era], { road: 2 });
          else add(i, this.roadCost(i), { road: 1 });
        }
      } else if (tool === 'rail') {
        if (era < RAIL.era) { reasons.add(`要到${eraInfo(RAIL.era).name}才能鋪鐵路`); continue; }
        if (elev) {
          // 高架鐵路：從分區、建築、道路上面跨過（柱子格除外）
          if (g.rail[i] && g.relev[i]) continue;
          if (g.rail[i]) add(i, ELEVATED.cost, { relev: 1 });               // 地面鐵路改成高架
          else add(i, (t === TERRAIN.RIVER ? RAIL.cost.plain : this.railCost(i)) + ELEVATED.cost, { rail: 1, relev: 1 });
        } else {
          if (g.rail[i]) continue;
          if (g.zone[i] || g.bld[i]) { reasons.add('有東西擋住，先拆除（或打開「高架」從上面跨過）'); continue; }
          if (this.anyPillar(i)) { reasons.add('高架柱子擋住'); continue; }
          if (t === TERRAIN.RIVER) add(i, RAIL.bridgeCost, { rail: 2 });
          else add(i, this.railCost(i), { rail: 1 });
        }
      } else if (ZONES[tool]) {
        const z = ZONE[tool];
        if (g.zone[i] === z) continue;
        if (t === TERRAIN.MOUNTAIN) { reasons.add('高山只能鋪路'); continue; }
        if (t === TERRAIN.RIVER) { reasons.add('河流上不能劃區'); continue; }
        if (this.anyPillar(i)) { reasons.add('高架柱子的格子不能蓋'); continue; }
        if (!this.groundFree(i)) { reasons.add('有東西擋住，先拆除'); continue; }
        add(i, ZONES[tool].cost, { zone: z, level: 0, pop: 0, bera: era });
      } else if (FACILITIES[tool]) {
        const f = FACILITIES[tool];
        if (era < f.era) { reasons.add(`要到${eraInfo(f.era).name}才能蓋`); continue; }
        if (f.specialOf) {
          if (this.hasSpecial(tool) || cells.length) { reasons.add(`${f.name}已經蓋好了`); continue; }
          if (f.specialOf < era) { reasons.add('已經過了這個時代'); continue; }
        }
        if (t !== TERRAIN.PLAIN && t !== TERRAIN.HILL) { reasons.add('要蓋在平原或丘陵'); continue; }
        if (this.anyPillar(i)) { reasons.add('高架柱子的格子不能蓋'); continue; }
        if (!empty) { reasons.add('有東西擋住，先拆除'); continue; }
        const why = this.facilitySpotReason(tool, i);
        if (why) { reasons.add(why); continue; }
        add(i, f.cost, { bld: KEY_BLD[tool], bera: era });
      } else if (LINES[tool]) {
        const l = LINES[tool];
        if (era < l.era) { reasons.add(`要到${eraInfo(l.era).name}才能用${l.name}`); continue; }
        if (g[tool][i]) continue;
        add(i, l.cost, { [tool]: 1 });
      } else if (TRANSPORT[tool]) {
        const tr = TRANSPORT[tool];
        if (era < tr.era) { reasons.add(`要到${eraInfo(tr.era).name}才能蓋${tr.name}`); continue; }
        const c = tr.cost * this.eff('transportCost');
        if (tr.on === 'road') {
          if (elev) {
            // 高架模式：沒有路的地方直接蓋一段高架的公路/高速公路；已有的路改成高架並升級
            if (g.bld[i] === BLD.PORT) continue;
            if (g.road[i] && g.elev[i] && g.trans[i] >= tr.level) continue;
            const set = { trans: Math.max(tr.level, g.trans[i]), elev: g.road[i] ? (g.elev[i] || 2) : 1 }; // 已有地面路 → 從上面跨過
            let cc = c * (g.trans[i] >= tr.level ? 0 : 1);
            if (!g.road[i]) { set.road = 1; cc += (t === TERRAIN.RIVER ? ROAD.cost.plain : this.roadCost(i)) + ELEVATED.cost; } else if (!g.elev[i]) cc += ELEVATED.cost;
            add(i, cc, set);
          } else {
            if (!g.road[i]) { reasons.add(`${tr.name}要蓋在已有的道路上（把路升級；打開「高架」可以直接蓋新的高架${tr.name}）`); continue; }
            if (g.trans[i] >= tr.level) continue;
            add(i, c, { trans: tr.level });
          }
        } else {
          if (g.metro[i]) continue;
          add(i, c, { metro: 1 });
        }
      } else if (tool === 'bulldoze') {
        if (g.bld[i] === BLD.PORT) { reasons.add('港口不能拆'); continue; }
        if (!g.road[i] && !g.zone[i] && !g.bld[i] && !g.pipe[i] && !g.wire[i] && !g.metro[i] && !g.rail[i]) continue;
        cells.push({ i, cost: 0, set: Object.fromEntries([...U8_LAYERS.map((k) => [k, 0]), ['pop', 0]]) });
      }
    }
    // 高架：算出蓋好後的柱子位置，柱子不能壓在地面上的東西
    if (cells.some((c) => c.set.elev || c.set.relev)) {
      const key = cells.some((c) => c.set.relev) ? 'relev' : 'elev';
      const base = key === 'relev' ? 'rail' : 'road';
      const newElev = new Set(cells.filter((c) => c.set[key]).map((c) => c.i));
      const isElev = (j) => newElev.has(j) || !!(g[base][j] && g[key][j]);
      const pil = this.pillarsFor([...newElev], isElev);
      const bad = pil.find((j) => (key === 'relev' ? this.railGroundBusy(j) : this.groundBusy(j)));
      if (bad != null) {
        const W = m.w;
        return { cells, cost, reason: `高架的柱子（每 ${ELEVATED.pillarEvery} 格一根）會壓到 (${bad % W}, ${(bad / W) | 0}) 的東西，先拆除或換個位置`, skipped: [...reasons], pillars: pil };
      }
      return { cells, cost, reason: cost > s.money ? '錢不夠' : null, skipped: [...reasons], pillars: pil };
    }
    let reason = cells.length ? null : ([...reasons][0] || '這裡沒有可以蓋的地方');
    if (cells.length && cost > s.money) reason = '錢不夠';
    return { cells, cost, reason, skipped: [...reasons] };
  }

  snapshotCell(i) {
    const g = this.s.grid;
    return [i, ...U8_LAYERS.map((k) => g[k][i]), g.pop[i]];
  }
  restoreCell(snap) {
    const g = this.s.grid, i = snap[0];
    U8_LAYERS.forEach((k, j) => { g[k][i] = snap[j + 1]; });
    g.pop[i] = snap[U8_LAYERS.length + 1];
    this.markDirty(i);
  }

  build(tool, x0, y0, x1 = x0, y1 = y0, opts = {}) {
    if (this.s.gameOver) return { ok: false, reason: '遊戲已結束' };
    const p = this.plan(tool, x0, y0, x1, y1, opts);
    if (p.reason) return { ok: false, reason: p.reason };
    const g = this.s.grid;
    const undo = { tool, cost: p.cost, cells: [] };
    for (const c of p.cells) {
      const i = c.i;
      undo.cells.push(this.snapshotCell(i));
      for (const [k, v] of Object.entries(c.set)) g[k][i] = v;
      this.markDirty(i);
    }
    this.s.money -= p.cost;
    this.undoStack.push(undo);
    if (this.undoStack.length > UNDO_LIMIT) this.undoStack.shift();
    this.infraDirty = true;
    this.commuteDirty = true; // 下個月重新配對通勤
    // deferInfra：一次蓋很多次時（經濟模擬機器人）先不重算，最後再呼叫 updateInfra()
    if (!this.deferInfra) { this.updateInfra(); this.checkMilestones(); }
    return { ok: true, cost: p.cost, count: p.cells.length };
  }

  undo() {
    const u = this.undoStack.pop();
    if (!u) return { ok: false, reason: '沒有可以復原的步驟' };
    for (let k = u.cells.length - 1; k >= 0; k--) this.restoreCell(u.cells[k]);
    this.s.money += u.cost;
    this.infraDirty = true;
    this.updateInfra();
    return { ok: true, refund: u.cost, tool: u.tool };
  }

  buyRegion(name) {
    const r = this.regionBuyable(name);
    if (!r.ok) return r;
    const c = this.map.countyByName.get(name);
    this.s.money -= r.price;
    this.s.owned.push(c.id);
    this.s.purchases++;
    for (const p of this.map.ports) if (p.county === c.id) {
      const i = p.y * this.map.w + p.x;
      const g = this.s.grid;
      for (const k of U8_LAYERS) g[k][i] = 0;
      g.pop[i] = 0; g.bld[i] = BLD.PORT;
      this.markDirty(i);
    }
    this.undoStack.length = 0; // 買地不能復原，之前的步驟也不再復原（避免退錢後錢變負的）
    this.infraDirty = true;
    this.updateInfra();
    this.events.push({ type: 'region', name, price: r.price });
    this.checkMilestones();
    this.dirtyAll = true;
    return { ok: true, price: r.price };
  }

  // ---------- 每棟建築的名字、住戶、公司（第四版）----------
  // 這格現在是哪種建築：'R' 'C' 'I'（已經蓋起來的區塊）、'B:設施名'（港口以外的建築）、null
  infoKind(i) {
    const g = this.s.grid;
    if (g.bld[i] && g.bld[i] !== BLD.PORT) return `B:${BLD_KEY[g.bld[i]]}`;
    if (g.zone[i] && g.level[i]) return ZONE_KEY[g.zone[i]];
    return null;
  }
  // 補上新建築的名字、拿掉已經拆掉的（名字一旦產生就存進存檔，不會再變）
  ensureInfo() {
    const s = this.s, info = s.info;
    for (const key of Object.keys(info)) {
      const i = Number(key);
      if (this.infoKind(i) !== info[key].k) delete info[key];
    }
    const add = (i) => {
      const k = this.infoKind(i);
      if (!k || info[i]) return;
      const seed = hash3(s.rngSeed, i, ++s.infoSeq);
      const era = k.startsWith('B:') ? s.era : this.beraAt(i);
      const rec = { k, s: seed, t: s.month };
      if (k === 'R') rec.n = buildingName(seed, 'R', era);
      else if (k === 'C' || k === 'I') { const r = buildingName(seed, k, era); rec.n = r.name; rec.ind = r.industry; } else rec.n = buildingName(seed, 'B', era, FACILITIES[k.slice(2)]?.name || '');
      info[i] = rec;
    };
    for (const i of this.zoneList) if (this.s.grid.level[i]) add(i);
    for (const [key, list] of Object.entries(this.bldList)) if (key !== 'port') for (const i of list) add(i);
  }
  infoOf(i) { return this.s.info[i] || null; }
  // 立刻重新配對通勤（測試、改了人口之後用）
  recomputeCommute() { computeCommute(this); updateServices(this); this.updateHappiness(); }
  // 住宅的代表住戶（第一次看的時候產生並存進存檔；工作地點跟著通勤配對，換工作時才更新）
  residentsOf(i) {
    const rec = this.s.info[i];
    if (!rec || rec.k !== 'R') return [];
    const g = this.s.grid;
    const want = Math.min(RESIDENTS.residentsShown, g.pop[i]);
    if (!rec.r) rec.r = [];
    const year = yearOf(this.s.month);
    while (rec.r.length < want) rec.r.push([...makeResident(rec.s, rec.r.length, this.beraAt(i), year, this.edu[i]), -1]);
    const groups = this.commute.byHome.get(i) || [];
    const total = groups.reduce((a, b) => a + b.count, 0);
    const workers = this.workers[i] || 0;
    const out = [];
    rec.r.slice(0, Math.max(want, 0)).forEach((p, k) => {
      const [name, birth, edu, female] = p;
      const age = year - birth;
      // 工作：照通勤配對的比例分給代表住戶；原本的工作還在就不換
      let gr = groups.find((x) => x.job === p[4]);
      // 原本的公司還在、這棟也還有人通勤：保留原本的工作（通勤方式與時間用這棟的路線估）
      if (!gr && p[4] >= 0 && groups.length && (this.s.info[p[4]]?.k === 'C' || this.s.info[p[4]]?.k === 'I')) gr = { ...groups[0], job: p[4] };
      const share = workers ? total / workers : 0;
      const rnd = seeded(hash3(rec.s, k, 99));
      if (!gr && total && rnd() < share) {
        let r = rnd() * total;
        for (const x of groups) { r -= x.count; if (r <= 0) { gr = x; break; } }
        gr = gr || groups[0];
      }
      p[4] = gr ? gr.job : -1;
      out.push({ name, age, female: !!female, edu: RESIDENTS.eduLevels[edu], job: gr ? gr.job : -1, jobName: gr ? this.s.info[gr.job]?.n : null, mode: gr ? this.modeName(gr.mode, rnd) : null, minutes: gr ? gr.minutes : null });
    });
    return out;
  }
  modeName(mode, rnd = Math.random) {
    if (mode === 'walk') return '走路';
    if (mode === 'rail') return this.lineCount.metro && rnd() < 0.5 ? '捷運' : '火車';
    const opts = { 1: ['走路', '牛車'], 2: ['腳踏車', '人力車'], 3: ['腳踏車', '機車', '公車'], 4: ['機車', '汽車', '公車'], 5: ['機車', '汽車', '公車'] }[this.s.era];
    return opts[Math.floor(rnd() * opts.length) % opts.length];
  }
  // 公司：員工、職缺、員工從哪些住宅來、要的教育、稅收貢獻
  companyOf(i) {
    const rec = this.s.info[i];
    if (!rec || (rec.k !== 'C' && rec.k !== 'I')) return null;
    const g = this.s.grid;
    const jobs = this.capAt(i);
    const groups = this.commute.byJob.get(i) || [];
    const employees = groups.reduce((a, b) => a + b.count, 0);
    const from = new Map();
    for (const gr of groups) from.set(gr.home, (from.get(gr.home) || 0) + gr.count);
    const lv = g.level[i];
    const eduReq = lv >= 6 ? '大學以上' : lv >= 5 ? '高中職以上' : lv >= 4 ? '國中以上' : lv >= 3 ? '小學以上' : '不限';
    const inc = this.incomeBreakdown();
    const t = this.totals;
    const isC = g.zone[i] === ZONE.C;
    const totalCap = isC ? t.capC : t.capI;
    const tax = totalCap ? (isC ? inc.C : inc.I + inc.trade) * jobs / totalCap : 0;
    return {
      name: rec.n, industry: rec.ind, kind: isC ? '商業' : '工業', jobs, employees, openings: Math.max(0, jobs - employees),
      from: [...from].sort((a, b) => b[1] - a[1]).map(([h, c]) => ({ home: h, name: this.s.info[h]?.n || '住宅', count: c })),
      eduReq, tax: Math.round(tax),
    };
  }
  // 公共建築與其他設施
  publicInfoOf(i) {
    const rec = this.s.info[i];
    const key = BLD_KEY[this.s.grid.bld[i]];
    const f = FACILITIES[key];
    if (!f) return null;
    const out = { name: rec?.n || f.name, type: f.name, maintenance: Math.round(this.facMaintenance(key)), rows: [] };
    const covered = (r) => {
      let pop = 0;
      const { w, h } = this.map;
      const x0 = i % w, y0 = (i / w) | 0;
      for (let y = Math.max(0, y0 - r); y <= Math.min(h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
        const j = y * w + x;
        if (this.s.grid.zone[j] === ZONE.R) pop += this.s.grid.pop[j];
      }
      return pop;
    };
    if (f.kind === 'service') {
      const b = SERVICE_BUILDINGS[key];
      const budget = this.s.budget[b.svc];
      const eff = Math.round(b.strength * Math.sqrt(Math.max(0, budget) / 100));
      const pop = covered(b.radius);
      out.rows.push(['服務範圍', `${b.radius} 格`], ['預算', `${budget}%（強度 ${b.strength} → ${eff}）`], ['範圍內居民', `${pop.toLocaleString()} 人`]);
      if (b.svc === 'edu') out.rows.push(['在學人數', `約 ${Math.round(pop * 0.18).toLocaleString()} 人（範圍內居民的 18%）`]);
      if (b.svc === 'health') out.rows.push(['每月看診', `約 ${Math.round(pop * 0.08).toLocaleString()} 人次`]);
      if (b.svc === 'police') out.rows.push(['範圍內平均犯罪', `${this.avgAround(i, b.radius, this.crime)}`]);
    } else if (f.kind === 'water' || f.kind === 'power') {
      out.rows.push(['供應量', `${Math.round(this.facCapacity(key)).toLocaleString()}`], ['範圍', `${f.coverRadius} 格`]);
    } else if (key === 'railstop' || key === 'station') {
      let riders = 0;
      for (const gr of this.commute.groups) if (gr.mode === 'rail' && this.isNearRail(gr.home, i)) riders += gr.count;
      out.rows.push(['搭火車通勤', `附近約 ${riders.toLocaleString()} 人`]);
    }
    if (f.specialOf) out.rows.push(['時代特殊建築', `${eraInfo(f.specialOf).name}`]);
    return out;
  }
  avgAround(i, r, arr) {
    const { w, h } = this.map;
    const x0 = i % w, y0 = (i / w) | 0;
    let s = 0, c = 0;
    for (let y = Math.max(0, y0 - r); y <= Math.min(h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
      const j = y * w + x;
      if (this.s.grid.zone[j]) { s += arr[j]; c++; }
    }
    return c ? Math.round(s / c) : 0;
  }
  isNearRail(home, stop) {
    const w = this.map.w;
    return Math.abs((home % w) - (stop % w)) <= RAIL.radius * 2 && Math.abs(((home / w) | 0) - ((stop / w) | 0)) <= RAIL.radius * 2;
  }

  // ---------- 建築隨時代演進：改建 ----------
  // 舊樣式（樣式時代 < 目前時代）且已經蓋起來的區塊
  oldStyleCells() {
    const g = this.s.grid, era = this.s.era;
    return this.zoneList.filter((i) => g.level[i] && this.beraAt(i) < era);
  }
  zoneRebuildCost(i) {
    const R = ERA_UPGRADES.rebuildCost;
    return Math.round((R.base + R.perLevel * this.s.grid.level[i]) * eraInfo(this.s.era).taxMult * this.buildMult(i));
  }
  // cells 省略 = 全部舊樣式
  rebuildPlan(cells = null) {
    const list = (cells || this.oldStyleCells()).filter((i) => this.s.grid.zone[i] && this.s.grid.level[i] && this.beraAt(i) < this.s.era);
    return { cells: list, cost: list.reduce((a, i) => a + this.zoneRebuildCost(i), 0) };
  }
  rebuildZones(cells = null) {
    if (this.s.gameOver) return { ok: false, reason: '遊戲已結束' };
    const p = this.rebuildPlan(cells);
    if (!p.cells.length) return { ok: false, reason: '沒有需要改建的舊建築' };
    if (p.cost > this.s.money) return { ok: false, reason: '錢不夠', cost: p.cost };
    for (const i of p.cells) { this.s.grid.bera[i] = this.s.era; this.markDirty(i); }
    this.s.money -= p.cost;
    this.undoStack.length = 0;
    this.infraDirty = true;
    this.updateInfra();
    this.computeTotals();
    this.events.push({ type: 'rebuild', count: p.cells.length, cost: p.cost });
    return { ok: true, cost: p.cost, count: p.cells.length };
  }
  // 過時設施可以改建成什麼
  facilityUpgrade(i) {
    const key = BLD_KEY[this.s.grid.bld[i]];
    const o = OBSOLETE[key];
    if (!o) return null;
    const to = o.upgradeTo.find((k) => FACILITIES[k].era <= this.s.era);
    if (!to) return { key, to: null, reason: `要到${eraInfo(Math.min(...o.upgradeTo.map((k) => FACILITIES[k].era))).name}才能改建` };
    const cost = Math.round(FACILITIES[to].cost * FACILITY_REBUILD.costRatio * this.buildMult(i));
    const why = this.facilitySpotReason(to, i);
    return { key, to, cost, reason: why || (cost > this.s.money ? '錢不夠' : null) };
  }
  upgradeFacility(i) {
    if (this.s.gameOver) return { ok: false, reason: '遊戲已結束' };
    const u = this.facilityUpgrade(i);
    if (!u) return { ok: false, reason: '這個建築不用改建' };
    if (!u.to || u.reason) return { ok: false, reason: u.reason };
    this.s.grid.bld[i] = KEY_BLD[u.to];
    this.s.grid.bera[i] = this.s.era;
    this.s.money -= u.cost;
    this.markDirty(i);
    this.undoStack.length = 0;
    this.infraDirty = true;
    this.updateInfra();
    this.events.push({ type: 'upgrade', from: FACILITIES[u.key].name, to: FACILITIES[u.to].name, cost: u.cost });
    return { ok: true, cost: u.cost, to: u.to };
  }
  // 過時設施變差了多少（給介面清楚標示）：例如「容量 300 → 150」
  obsoleteEffects(key) {
    if (!this.isObsolete(key)) return [];
    const o = OBSOLETE[key], f = FACILITIES[key], out = [];
    if (o.capacityMult != null && o.capacityMult !== 1) out.push(`供應量 ${f.capacity.toLocaleString()} → ${Math.round(f.capacity * o.capacityMult).toLocaleString()}`);
    if (o.maintenanceMult != null && o.maintenanceMult !== 1) out.push(`維護費 ×${o.maintenanceMult}`);
    if (o.nearPenaltyMult != null && o.nearPenaltyMult !== 1 && f.nearPenalty) out.push(`附近住宅幸福度 ${f.nearPenalty} → ${Math.round(f.nearPenalty * o.nearPenaltyMult)}`);
    return out;
  }
  obsoleteFacilities() {
    const out = [];
    for (const key of Object.keys(OBSOLETE)) for (const i of this.bldList[key] || []) if (this.isObsolete(key)) out.push(i);
    return out;
  }

  markDirty(i) { this.dirtyCells.add(i); }

  // ---------- 基礎設施（道路連通、水、電、交通、幸福度）----------
  updateInfra() {
    const m = this.map, g = this.s.grid, n = m.n, w = m.w;
    this.connected.fill(0);
    this.comp.fill(-1);
    this.dist.fill(0);
    this.access.fill(0);
    // 掃一次：分區、設施清單
    const zoneList = [];
    const bldList = {};
    for (const k of BLD_KEY) if (k) bldList[k] = [];
    const transCells = [];
    let roads = 0, bridges = 0, pipes = 0, wires = 0, metros = 0, rails = 0, railBridges = 0, elevs = 0;
    const railCells = [], elevCells = [], relevCells = [];
    let relevs = 0;
    const trans = {};
    for (let i = 0; i < n; i++) {
      if (g.zone[i]) zoneList.push(i);
      if (g.bld[i] && BLD_KEY[g.bld[i]]) bldList[BLD_KEY[g.bld[i]]].push(i);
      if (g.road[i] === 1) roads++; else if (g.road[i] === 2) bridges++;
      if (g.pipe[i]) pipes++;
      if (g.wire[i]) wires++;
      if (g.trans[i]) { trans[g.trans[i]] = (trans[g.trans[i]] || 0) + 1; transCells.push(i); }
      if (g.metro[i]) { metros++; transCells.push(i); }
      if (g.rail[i]) { if (g.rail[i] === 2) railBridges++; else rails++; railCells.push(i); }
      if (g.elev[i] && g.road[i]) { elevs++; elevCells.push(i); }
      if (g.relev[i] && g.rail[i]) { relevs++; relevCells.push(i); }
    }
    this.zoneList = zoneList;
    this.bldList = bldList;
    this.lineCount = { road: roads, bridge: bridges, pipe: pipes, wire: wires, trans, metro: metros, rail: rails, railBridge: railBridges, elev: elevs, relev: relevs };
    this.pillar.fill(0);
    for (const i of this.pillarsFor(elevCells, (j) => g.road[j] && g.elev[j])) this.pillar[i] = 1;
    this.railPillar.fill(0);
    for (const i of this.pillarsFor(relevCells, (j) => g.rail[j] && g.relev[j])) this.railPillar[i] = 1;
    // 道路 BFS（從自己擁有的港口出發）
    const q = new Int32Array(n);
    let comp = 0;
    for (const p of bldList.port) {
      if (!this.owns(p) || this.comp[p] >= 0) continue;
      let h = 0, t = 0;
      q[t++] = p; this.comp[p] = comp; this.connected[p] = 1; this.dist[p] = 0;
      while (h < t) {
        const i = q[h++];
        const x = i % w;
        const nb = [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, i - w, i + w];
        for (const j of nb) {
          if (j < 0 || j >= n || this.comp[j] >= 0) continue;
          if (!(g.road[j] || g.bld[j] === BLD.PORT)) continue;
          this.comp[j] = comp; this.connected[j] = 1; this.dist[j] = this.dist[i] + 1;
          q[t++] = j;
        }
      }
      comp++;
    }
    for (const i of zoneList) {
      let best = -1;
      // 只能從地面道路進出（高架不能）
      for (const j of this.neighbors4(i)) if (this.connected[j] && this.hasGroundRoad(j) && (best < 0 || this.dist[j] < this.dist[best])) best = j;
      this.accessRoad[i] = best;
      if (best >= 0) { this.access[i] = 1; this.comp[i] = this.comp[best]; this.dist[i] = this.dist[best] + 1; }
    }
    // 交通加成：範圍內取最大
    this.transit.fill(0);
    const levelKey = {};
    for (const [k, tr] of Object.entries(TRANSPORT)) if (tr.level) levelKey[tr.level] = k;
    const stampMax = (arr, ci, r, v) => {
      const x0 = ci % w, y0 = (ci / w) | 0;
      for (let y = Math.max(0, y0 - r); y <= Math.min(m.h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
        const j = y * w + x;
        if (arr[j] < v) arr[j] = v;
      }
    };
    // 鐵路：連到車站（或火車站）的整條鐵路才有加成
    this.railActive.fill(0);
    const railSeen = new Uint8Array(railCells.length ? n : 0);
    for (const st of railCells) {
      if (railSeen[st]) continue;
      const comp = [st]; railSeen[st] = 1;
      let hasStop = false;
      for (let h = 0; h < comp.length; h++) {
        for (const j of this.neighbors4(comp[h])) {
          if (g.bld[j] === BLD.RAILSTOP || g.bld[j] === BLD.STATION) hasStop = true;
          if (g.rail[j] && !railSeen[j]) { railSeen[j] = 1; comp.push(j); }
        }
      }
      if (hasStop) for (const i of comp) { this.railActive[i] = 1; stampMax(this.transit, i, RAIL.radius, Math.round(RAIL.bonus * 100)); }
    }
    for (const i of transCells) {
      if (g.trans[i] && this.connected[i]) { const tr = TRANSPORT[levelKey[g.trans[i]]]; if (tr) stampMax(this.transit, i, tr.radius, Math.round(tr.bonus * 100)); }
      if (g.metro[i]) stampMax(this.transit, i, TRANSPORT.metro.radius, Math.round(TRANSPORT.metro.bonus * 100));
    }
    // 電廠扣分、地標加分
    this.plantPen.fill(0);
    this.landmark.fill(0);
    for (const key of POWER_KEYS) {
      const p = this.facNearPenalty(key);
      if (!p) continue;
      for (const c of bldList[key]) {
        const x0 = c % w, y0 = (c / w) | 0, r = HAPPINESS.radius;
        for (let y = Math.max(0, y0 - r); y <= Math.min(m.h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
          const j = y * w + x;
          if (this.plantPen[j] > p) this.plantPen[j] = Math.max(-128, p);
        }
      }
    }
    for (const key of SPECIAL_KEYS) {
      if (FACILITIES[key].specialOf >= this.s.era) continue;
      for (const c of bldList[key]) stampMax(this.landmark, c, LANDMARK.radius, LANDMARK.happiness);
    }
    this.updateUtility('water', WATER_KEYS, 'pipe', this.waterCov, this.waterOK);
    this.updateUtility('power', POWER_KEYS, 'wire', this.powerCov, this.powerOK);
    updateServices(this);
    this.updateHappiness();
    this.ensureInfo();
    this.infraDirty = false;
  }

  usage(i) {
    const g = this.s.grid;
    if (g.zone[i] === ZONE.R) return g.pop[i];
    return this.capAt(i) * 0.5;
  }

  updateUtility(kind, facKeys, lineKey, cov, ok) {
    const m = this.map, g = this.s.grid, w = m.w, n = m.n;
    cov.fill(0);
    ok.fill(0);
    const groups = [];
    // 單獨覆蓋的設施（水井）與管線網路
    const netOf = new Map(); // 設施 cell → 網路
    const visited = this._visited || (this._visited = new Uint8Array(n));
    visited.fill(0);
    const q = this._q || (this._q = new Int32Array(n));
    const isNode = (b) => b && b !== 'well' && facKeys.includes(b);
    for (const key of facKeys) {
      const f = FACILITIES[key];
      for (const c of this.bldList[key]) {
        if (netOf.has(c)) continue;
        const group = { cap: 0, use: 0, cells: [], plants: [], lines: [] };
        if (key === 'well') {
          group.cap = this.facCapacity('well'); group.plants.push([c, f.coverRadius]);
          groups.push(group);
          continue;
        }
        // 從廠沿管線 BFS，碰到的同種廠都算同一網路
        let h = 0, t = 0;
        q[t++] = c; visited[c] = 1;
        while (h < t) {
          const i = q[h++];
          const b = BLD_KEY[g.bld[i]];
          if (isNode(b)) {
            group.cap += this.facCapacity(b); group.plants.push([i, FACILITIES[b].coverRadius]); netOf.set(i, group);
          } else if (g[lineKey][i]) group.lines.push(i);
          const x = i % w;
          for (const j of [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, i - w, i + w]) {
            if (j < 0 || j >= n || visited[j]) continue;
            if (g[lineKey][j] || isNode(BLD_KEY[g.bld[j]])) { visited[j] = 1; q[t++] = j; }
          }
        }
        groups.push(group);
      }
    }
    // 覆蓋範圍 → 群組內的分區格
    const total = { cap: 0, use: 0 };
    for (const grp of groups) {
      const sid = ++this.stampId;
      const add = (ci, r) => {
        const x0 = ci % w, y0 = (ci / w) | 0;
        for (let y = Math.max(0, y0 - r); y <= Math.min(m.h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
          const j = y * w + x;
          if (this.stamp[j] === sid) continue;
          this.stamp[j] = sid;
          if (m.terrain[j] === TERRAIN.SEA) continue;
          cov[j] = 1;
          grp.cells.push(j);
          if (g.zone[j]) grp.use += this.usage(j);
        }
      };
      for (const [c, r] of grp.plants) add(c, r);
      for (const c of grp.lines) add(c, LINES[lineKey].radius);
      grp.ok = grp.use <= grp.cap && grp.cap > 0;
      total.cap += grp.cap; total.use += grp.use;
    }
    for (const grp of groups) if (grp.ok) for (const j of grp.cells) ok[j] = 1;
    this.util[kind] = { cap: Math.round(total.cap), use: Math.round(total.use), groups: groups.length, short: groups.filter((x) => !x.ok).length };
  }

  updateHappiness() {
    const g = this.s.grid, m = this.map, w = m.w, H = HAPPINESS, r = H.radius;
    for (const i of this.zoneList) {
      if (g.zone[i] !== ZONE.R) continue;
      let v = H.base;
      if (this.waterOK[i]) v += H.water;
      if (this.powerOK[i]) v += H.power;
      let ind = 0, shop = false;
      const x0 = i % w, y0 = (i / w) | 0;
      for (let y = Math.max(0, y0 - r); y <= Math.min(m.h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
        const j = y * w + x;
        if (g.zone[j] === ZONE.I && g.level[j] > 0) ind++;
        else if (g.zone[j] === ZONE.C && g.level[j] > 0) shop = true;
      }
      v += Math.max(H.industryNearMax, ind * H.industryNear);
      if (shop) v += H.commerceNear;
      v += this.plantPen[i] + this.landmark[i] + this.transit[i] * 0.3;
      v -= this.crime[i] * CRIME.happiness + this.pollution[i] * POLLUTION.happiness + (this.jammed(i) ? TRAFFIC.jamHappiness : 0);
      if (this.commuteMin && this.commuteMin[i] > COMMUTE.longMinutes) v -= COMMUTE.longHappiness; // 通勤太久
      this.happy[i] = clamp(Math.round(v), 0, 100);
    }
  }

  growthOK(i) {
    const g = this.s.grid;
    if (!this.access[i] || !this.waterOK[i]) return false;
    if (this.powerNeeded() && !this.powerOK[i]) return false;
    if (g.zone[i] === ZONE.R && this.happy[i] < GROWTH.happinessMin) return false;
    if (g.zone[i] === ZONE.R && this.crime[i] >= CRIME.growthBlock) return false;
    if (g.zone[i] === ZONE.R && this.health[i] < HEALTH.growthBlock) return false;
    return true;
  }

  // ---------- 人口、工作、需求 ----------
  // 每格的稅收權重：縣市 taxMult × 交通加成
  taxWeight(i) { return this.regionType(this.map.county[i]).taxMult * (1 + this.transit[i] / 100) * (0.7 + 0.6 * this.landValue[i] / 100); }
  computeTotals() {
    const g = this.s.grid;
    let pop = 0, capC = 0, capI = 0, wR = 0, wC = 0, wI = 0;
    for (const i of this.zoneList) {
      const z = g.zone[i];
      if (z === ZONE.R) { pop += g.pop[i]; wR += g.pop[i] * this.taxWeight(i); } else if (this.access[i]) {
        const c = this.capAt(i);
        if (z === ZONE.C) { capC += c; wC += c * this.taxWeight(i); } else { capI += c; wI += c * this.taxWeight(i); }
      }
    }
    const workers = pop * ECON.labor;
    const needJobs = Math.max(0, workers - pop * ECON.selfEmployed);
    const jobs = capC + capI;
    const f = jobs > 0 ? Math.min(1, needJobs / jobs) : 0;
    const openJobs = jobs + ECON.baseJobs - needJobs;
    this.totals = { pop, capC, capI, jobs, workers, needJobs, filledC: capC * f, filledI: capI * f, openJobs, wR, wC: wC * f, wI: wI * f };
    this.demand = {
      R: clamp(openJobs / Math.max(50, needJobs * 0.25 + 50), -1, 1),
      C: clamp((pop * ECON.shopNeed - capC + 10) / Math.max(20, pop * ECON.shopNeed * 0.5), -1, 1),
      I: clamp((capC * ECON.goodsNeed + ECON.industryBase + pop * 0.05 - capI) / Math.max(30, capI * 0.5 + 30), -1, 1),
    };
    // 稅率：高於預設 → 需求下降
    for (const z of ['R', 'C', 'I']) this.demand[z] = clamp(this.demand[z] - (this.s.taxRates[z] - TAX.default) * TAX.demandPerPoint, -1, 1);
    return this.totals;
  }

  // ---------- 時間 ----------
  // dt：經過幾個月（可以是小數）
  advance(dtMonths) {
    const s = this.s;
    if (s.gameOver || s.pendingLoan) return;
    while (dtMonths > 0 && !s.gameOver && !s.pendingLoan) {
      const step = Math.min(dtMonths, 1 - s.monthFrac, 0.25);
      this.updateShips(step);
      s.monthFrac += step;
      dtMonths -= step;
      if (s.monthFrac >= 1 - 1e-9) {
        s.monthFrac = 0;
        this.monthTick();
      }
    }
  }

  refreshUtilities() {
    this.updateUtility('water', WATER_KEYS, 'pipe', this.waterCov, this.waterOK);
    this.updateUtility('power', POWER_KEYS, 'wire', this.powerCov, this.powerOK);
  }

  monthTick() {
    const s = this.s, g = s.grid;
    if (this.infraDirty) this.updateInfra();
    else { this.refreshUtilities(); updateServices(this); this.updateHappiness(); }
    // 通勤：每幾個月（或蓋了東西之後）重新配對
    if (this.commuteDirty || ++this.commuteAge >= COMMUTE.recomputeMonths) { computeCommute(this); updateServices(this); this.updateHappiness(); }
    this.computeTotals();
    const era = s.era;
    let needC = this.totals.pop * ECON.shopNeed - this.totals.capC + 10;
    let needI = this.totals.capC * ECON.goodsNeed + ECON.industryBase + this.totals.pop * 0.05 - this.totals.capI;
    const rng = this.rng;
    // 打亂順序，避免總是從北邊先長
    const list = this.zoneList.slice();
    for (let k = list.length - 1; k > 0; k--) { const j = (rng() * (k + 1)) | 0; [list[k], list[j]] = [list[j], list[k]]; }
    let rebuilt = 0;
    for (const i of list) {
      if (!this.growthOK(i)) continue;
      const z = g.zone[i], lv = g.level[i];
      // 交通加成、稅率、塞車都會影響成長機率
      const boost = (1 + 2 * this.transit[i] / 100) * this.taxGrowthMult(z0(g, i)) * (this.jammed(i) ? TRAFFIC.jamGrowth : 1)
        * (this.commuteMin[i] > COMMUTE.longMinutes ? COMMUTE.longGrowth : 1);
      const maxLv = this.growthLevelCap(i);
      // （預設關閉）舊樣式自動改建成新時代樣式；Sonny 決定舊建築要付錢才升級
      if (ERA_UPGRADES.autoRebuild && lv && this.beraAt(i) < era && rng() < ERA_UPGRADES.rebuildChance * boost) {
        const before = this.capAt(i);
        g.bera[i] = era; this.markDirty(i); rebuilt++;
        if (z === ZONE.C) { needC -= this.capAt(i) - before; } else if (z === ZONE.I) needI -= this.capAt(i) - before;
        continue;
      }
      if (z === ZONE.R) {
        const cap = this.capAt(i);
        if (lv === 0) {
          if (this.demand.R > -0.5 && rng() < GROWTH.firstBuildChance) { g.level[i] = 1; g.bera[i] = era; this.markDirty(i); }
        } else {
          if (lv < maxLv && g.pop[i] >= cap * GROWTH.fullRatio && this.demand.R > 0 && rng() < GROWTH.levelUpChance * boost) { g.level[i] = lv + 1; this.markDirty(i); }
          if (g.pop[i] > 0 && g.pop[i] < cap) {
            const add = g.pop[i] * GROWTH.naturalGrowth * (0.5 + this.health[i] / 100); // 健康影響自然增加
            const whole = Math.floor(add) + (rng() < add % 1 ? 1 : 0);
            g.pop[i] += Math.min(whole, cap - g.pop[i]);
          }
        }
      } else {
        const isC = z === ZONE.C;
        const need = isC ? needC : needI;
        const grow = (to) => {
          // 空地第一次蓋 → 目前時代樣式；已經蓋好的長高 → 維持原本樣式
          const bera = lv === 0 ? era : this.beraAt(i);
          const inc = this.capAt(i, to, bera) - this.capAt(i, lv);
          g.level[i] = to; if (lv === 0) g.bera[i] = era; this.markDirty(i);
          if (isC) { needC -= inc; needI += inc * ECON.goodsNeed; } else needI -= inc;
        };
        if (lv === 0) { if (need > -10 && rng() < GROWTH.firstBuildChance) grow(1); } else if (lv < maxLv && need > 0 && rng() < GROWTH.levelUpChance * boost) grow(lv + 1);
      }
    }
    if (rebuilt) this.events.push({ type: 'autoRebuild', count: rebuilt });
    this.ensureInfo();
    // 重算一次（成長後），再算錢
    this.refreshUtilities();
    this.computeTotals();
    this.economy();
    s.portUnloaded = {};
    s.month++;
    this.updateEraEvents();
    this.checkEra();
    this.checkMilestones();
    this.checkVictory();
  }

  maintenance() {
    const lc = this.lineCount, era = this.s.era;
    let fac = 0;
    const services = { edu: 0, police: 0, health: 0 };
    for (const [k, list] of Object.entries(this.bldList)) {
      const f = FACILITIES[k];
      if (!f || !list.length) continue;
      if (f.kind === 'service') services[f.svc] += this.facMaintenance(k) * list.length;
      else fac += this.facMaintenance(k) * list.length;
    }
    let transport = lc.metro * TRANSPORT.metro.maintenance + lc.rail * RAIL.maintenance + lc.railBridge * RAIL.bridgeMaintenance + (lc.elev + (lc.relev || 0)) * ELEVATED.maintenance;
    for (const tr of Object.values(TRANSPORT)) if (tr.level) transport += (lc.trans[tr.level] || 0) * tr.maintenance;
    return {
      roads: (lc.road * ROAD.maintenance + lc.bridge * ROAD.bridgeMaintenance[era]) * this.s.budget.roads / 100,
      facilities: fac,
      lines: lc.pipe * LINES.pipe.maintenance + lc.wire * LINES.wire.maintenance,
      transport,
      edu: services.edu, police: services.police, health: services.health,
      loan: this.s.loan.taken && this.s.loan.monthsLeft > 0 ? FINANCE.loan.monthlyPayment : 0,
    };
  }

  // 收入明細（不改狀態）
  incomeBreakdown() {
    const t = this.totals, tax = ECON.tax, em = eraInfo(this.s.era).taxMult;
    let land = 0;
    for (const id of this.s.owned) land += this.landIncomeOf(id);
    return {
      R: (t.wR ?? t.pop) * tax.R * em * this.eff('taxR') * this.s.taxRates.R / TAX.default,
      C: (t.wC ?? t.filledC) * tax.C * em * this.eff('taxC') * this.specialEff('taxC') * this.s.taxRates.C / TAX.default,
      I: (t.wI ?? t.filledI) * tax.I * em * this.eff('taxI') * this.s.taxRates.I / TAX.default,
      trade: this.bldList.port.length ? t.filledI * ECON.tradePerIndustryJob * em * this.eff('trade') * this.specialEff('trade') : 0,
      land,
    };
  }

  economy() {
    const s = this.s;
    const inc = this.incomeBreakdown();
    const exp = this.maintenance();
    const income = Math.round(Object.values(inc).reduce((a, b) => a + b, 0));
    const expense = Math.round(Object.values(exp).reduce((a, b) => a + b, 0));
    const net = income - expense;
    s.money += net;
    if (s.loan.taken && s.loan.monthsLeft > 0) s.loan.monthsLeft--;
    s.stats = { income, expense, net, breakdown: { income: inc, expense: exp }, history: [...s.stats.history.slice(-11), net] };
    s.deficitStreak = net < 0 ? s.deficitStreak + 1 : 0;
    // 預警
    const runway = net < 0 ? s.money / -net : Infinity;
    let warning = null;
    if (s.money < 0) warning = 'broke';
    else if (runway < FINANCE.dangerRunwayMonths) warning = 'danger';
    else if (runway < FINANCE.warnRunwayMonths) warning = 'warn';
    if (warning && warning !== s.warning && warning !== 'broke') this.events.push({ type: 'warning', level: warning, runway });
    if (s.deficitStreak === FINANCE.deficitStreakWarn && runway < 24) this.events.push({ type: 'deficit', months: s.deficitStreak });
    s.warning = warning;
    if (s.money < 0) {
      if (!s.loan.taken) { s.pendingLoan = true; this.events.push({ type: 'loanOffer' }); } else this.endGame('破產：緊急貸款用過了，錢又用完');
    }
  }

  // 收支預估（不改狀態）
  forecast() {
    const income = Math.round(Object.values(this.incomeBreakdown()).reduce((a, b) => a + b, 0));
    const expense = Math.round(Object.values(this.maintenance()).reduce((a, b) => a + b, 0));
    return { income, expense, net: income - expense };
  }

  takeLoan() {
    const s = this.s;
    if (!s.pendingLoan || s.loan.taken) return { ok: false };
    s.money += FINANCE.loan.amount;
    s.loan = { taken: true, monthsLeft: FINANCE.loan.months };
    s.pendingLoan = false;
    this.events.push({ type: 'loanTaken' });
    return { ok: true };
  }
  declineLoan() {
    if (!this.s.pendingLoan) return;
    this.s.pendingLoan = false;
    this.endGame('破產：沒有借緊急貸款');
  }
  summary() {
    const s = this.s;
    return {
      month: s.month, pop: this.totals.pop, era: s.era,
      regions: s.owned.map((id) => this.map.counties.get(id).name),
      milestones: Object.keys(s.milestones).length, money: Math.round(s.money),
    };
  }
  endGame(reason) {
    this.s.gameOver = { reason, ...this.summary() };
    this.events.push({ type: 'gameOver' });
  }

  // ---------- 時代 ----------
  checkEra() {
    const s = this.s;
    const e = eraInfo(s.era);
    if (s.era >= MAX_PLAYABLE_ERA || !e.popToNext) return;
    if (this.totals.pop >= e.popToNext && this.hasSpecial(e.special)) {
      s.era++;
      s.eraStart = s.month;
      this.dirtyAll = true;
      this.infraDirty = true;
      const obsolete = Object.entries(OBSOLETE).filter(([k, o]) => o.fromEra === s.era && (this.bldList[k] || []).length).map(([, o]) => o.text);
      this.events.push({ type: 'era', era: s.era, name: eraInfo(s.era).name, old: this.oldStyleCells().length, obsolete });
    }
  }
  eraProgress() {
    const e = eraInfo(this.s.era);
    return {
      era: this.s.era, name: e.name, nextName: ERAS[this.s.era]?.name || null,
      popNeed: e.popToNext, pop: this.totals.pop, special: e.special, specialName: FACILITIES[e.special]?.name || e.special,
      specialBuilt: this.hasSpecial(e.special), locked: this.s.era >= MAX_PLAYABLE_ERA, last: !e.popToNext,
    };
  }
  updateEraEvents() {
    const s = this.s;
    s.effects = s.effects.filter((e) => e.until > s.month);
    for (const ev of ERA_EVENTS) {
      if (ev.era !== s.era || s.eventsDone[ev.id] !== undefined || s.month - s.eraStart < ev.atMonth) continue;
      s.eventsDone[ev.id] = s.month;
      if (ev.effect) s.effects.push({ id: ev.id, until: s.month + ev.months, ...ev.effect });
      if (ev.grant) s.money += ev.grant;
      this.events.push({ type: 'eraEvent', id: ev.id, name: ev.name, text: ev.text });
    }
  }
  activeEvents() {
    return this.s.effects.map((e) => ({ ...ERA_EVENTS.find((x) => x.id === e.id), monthsLeft: e.until - this.s.month }));
  }

  // ---------- 完成條件 ----------
  victoryProgress() {
    const V = VICTORY;
    const items = [
      { id: 'era', text: `進入${eraInfo(V.era).name}`, done: this.s.era >= V.era },
      { id: 'pop', text: `人口 ${V.pop.toLocaleString()}`, done: this.totals.pop >= V.pop, now: this.totals.pop },
      { id: 'special', text: `蓋好${FACILITIES[V.special].name}`, done: this.hasSpecial(V.special) },
      { id: 'milestone', text: MILESTONES.find((x) => x.id === V.milestone).name, done: this.s.milestones[V.milestone] !== undefined },
    ];
    return { items, done: items.every((x) => x.done), victory: this.s.victory };
  }
  checkVictory() {
    if (this.s.victory) return;
    if (this.victoryProgress().done) {
      this.s.victory = { ...this.summary() };
      this.events.push({ type: 'victory' });
    }
  }

  checkMilestones() {
    const s = this.s, m = this.map, g = s.grid, ms = s.milestones;
    const hit = (id) => {
      if (ms[id] !== undefined) return;
      ms[id] = s.month;
      const def = MILESTONES.find((x) => x.id === id);
      this.events.push({ type: 'milestone', id, name: def.name });
    };
    const kao = m.countyByName.get(START.region).id;
    const taipei = m.countyByName.get('臺北市')?.id;
    if (ms.firstRoad === undefined || ms.taipei === undefined) {
      for (let i = 0; i < m.n; i++) {
        if (!g.road[i] || !this.connected[i]) continue;
        if (m.county[i] === kao) hit('firstRoad');
        if (m.county[i] === taipei) hit('taipei');
      }
    }
    if (ms.firstBridge === undefined && this.lineCount.bridge > 0) hit('firstBridge');
    if (s.purchases > 0) hit('firstRegion');
    if (SPECIAL_KEYS.some((k) => this.hasSpecial(k))) hit('firstSpecial');
    if (s.era >= 2) hit('era2');
    if (s.era >= ERAS.length) hit('modern');
  }

  // ---------- 船與移民 ----------
  shipFor(era) { return eraInfo(era).ship; }

  eligibleTargets(comp) {
    const g = this.s.grid;
    const out = [];
    for (const i of this.zoneList) {
      if (g.zone[i] !== ZONE.R || !g.level[i] || this.comp[i] !== comp || !this.growthOK(i)) continue;
      const room = this.capAt(i) - g.pop[i];
      if (room > 0) out.push([i, room]);
    }
    out.sort((a, b) => this.dist[a[0]] - this.dist[b[0]]);
    return out;
  }

  vacancy() {
    let v = 0;
    const g = this.s.grid;
    for (const i of this.zoneList) if (g.zone[i] === ZONE.R && g.level[i] && this.growthOK(i)) v += Math.max(0, this.capAt(i) - g.pop[i]);
    return v;
  }

  jobRoom() {
    const t = this.totals;
    return Math.max(0, t.openJobs) / (ECON.labor - ECON.selfEmployed) + 20;
  }
  portCapacity() { return Math.round(eraInfo(this.s.era).portUnload * this.eff('portCap')); }

  updateShips(dt) {
    const s = this.s;
    const ports = this.ownedPorts();
    if (!ports.length) return;
    s.shipTimer -= dt;
    if (s.shipTimer <= 0) {
      const sh = this.shipFor(s.era);
      s.shipTimer += sh.intervalMonths;
      const port = ports[s.portRR % ports.length];
      s.portRR++;
      // 住宅稅越高，願意來的移民越少
      const taxImm = clamp(1 - (this.s.taxRates.R - TAX.default) * TAX.immigrationPerPoint, 0.1, 1 + TAX.maxBonus);
      const capacity = Math.max(1, Math.round(sh.capacity * this.eff('immigration') * taxImm));
      const attract = Math.min(1, Math.min(this.vacancy(), this.jobRoom()) / capacity);
      const passengers = Math.max(1, Math.round(capacity * (0.3 + 0.7 * attract)));
      s.ships.push({ id: (s.shipSeq = (s.shipSeq || 0) + 1), port: port.name, era: s.era, t: 0, phase: 'in', passengers, capacity, travel: sh.travelMonths });
    }
    for (const ship of s.ships) {
      ship.t += dt / ship.travel;
      if (ship.phase === 'in' && ship.t >= 1) { ship.phase = 'dock'; ship.t = 0; this.arrive(ship); } else if (ship.phase === 'dock' && ship.t >= 0.3) { ship.phase = 'out'; ship.t = 0; }
    }
    s.ships = s.ships.filter((x) => !(x.phase === 'out' && x.t >= 1));
  }

  arrive(ship) {
    const s = this.s, g = s.grid, m = this.map;
    const port = m.ports.find((p) => p.name === ship.port);
    if (!port) return;
    const pi = port.y * m.w + port.x;
    const used = s.portUnloaded[ship.port] || 0;
    const portRoom = Math.max(0, this.portCapacity() - used);
    const targets = this.eligibleTargets(this.comp[pi]);
    const vacancy = targets.reduce((a, b) => a + b[1], 0);
    let n = Math.floor(Math.min(ship.passengers, portRoom, vacancy, this.jobRoom()));
    const unloaded = n;
    const placed = [];
    for (const [i, room] of targets) {
      if (n <= 0) break;
      const k = Math.min(room, n);
      g.pop[i] += k; n -= k;
      placed.push([i, k]);
      this.markDirty(i);
    }
    s.portUnloaded[ship.port] = used + unloaded;
    ship.unloaded = unloaded;
    this.totals.pop += unloaded;
    let why = null;
    if (unloaded < ship.passengers) {
      if (!targets.length) why = this.zoneList.some((i) => g.zone[i] === ZONE.R) ? '住宅沒接路、沒水電或沒空位' : '還沒有住宅區';
      else if (vacancy <= unloaded) why = '空房子不夠';
      else if (portRoom <= unloaded) why = '港口容量滿了';
      else why = '工作不夠';
    }
    this.events.push({ type: 'ship', port: ship.port, shipName: this.shipFor(ship.era).name, passengers: ship.passengers, unloaded, placed, why });
    if (unloaded > 0) {
      if (s.milestones.firstShip === undefined) { s.milestones.firstShip = s.month; this.events.push({ type: 'milestone', id: 'firstShip', name: MILESTONES.find((x) => x.id === 'firstShip').name }); }
    }
  }

  // 日期字串
  dateText() {
    const y = TIME.startYear + Math.floor(this.s.month / 12);
    return `${y}年${(this.s.month % 12) + 1}月`;
  }
}
