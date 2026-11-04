// 台灣模擬：模擬核心（純邏輯，不碰 DOM；瀏覽器和 Node 測試共用）。
import {
  START, LAND, ERAS, MAX_PLAYABLE_ERA, POWER_REQUIRED_FROM_ERA, TERRAIN, HILL_DENSITY, ROAD, ZONES,
  GROWTH, HAPPINESS, ECON, PORT, FACILITIES, LINES, FINANCE, MILESTONES, UNDO_LIMIT, TIME,
} from './config.js';

export const BLD = { NONE: 0, PORT: 1, WELL: 2, WATERWORKS: 3, COAL: 4, LIGHTHOUSE: 5, STATION: 6 };
export const BLD_KEY = [null, 'port', 'well', 'waterworks', 'coal', 'lighthouse', 'station'];
const KEY_BLD = Object.fromEntries(BLD_KEY.map((k, i) => [k, i]).filter(([k]) => k));
export const ZONE = { NONE: 0, R: 1, C: 2, I: 3 };
export const ZONE_KEY = [null, 'R', 'C', 'I'];
export const TOOLS = ['road', 'R', 'C', 'I', 'well', 'waterworks', 'coal', 'pipe', 'wire', 'lighthouse', 'station', 'bulldoze'];
const LINE_TOOLS = new Set(['road', 'pipe', 'wire']);
const RECT_TOOLS = new Set(['R', 'C', 'I', 'bulldoze']);

export const landPrice = (n) => Math.round(LAND.base * LAND.ratio ** (n - 1));
export const eraInfo = (era) => ERAS[era - 1];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

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

export class Sim {
  constructor(map, state = null) {
    this.map = map;
    const n = map.n;
    this.s = state || Sim.newState(map);
    const g = this.s.grid;
    for (const k of ['road', 'zone', 'level', 'bld', 'pipe', 'wire']) if (!g[k]) g[k] = new Uint8Array(n);
    if (!g.pop) g.pop = new Uint16Array(n);
    this.rng = mulberry(this.s.rngSeed);
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
    this.stamp = new Int32Array(n);
    this.stampId = 0;
    this.zoneList = [];
    this.bldList = {};
    this.lineCount = { pipe: 0, wire: 0, road: 0, bridge: 0 };
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
  }

  static newState(map) {
    const kao = map.countyByName.get(START.region);
    const n = map.n;
    const s = {
      version: 1, month: 0, monthFrac: 0, money: START.money, era: 1,
      owned: [kao.id], purchases: 0, rngSeed: 12345,
      loan: { taken: false, monthsLeft: 0 }, pendingLoan: false, gameOver: null,
      milestones: {}, ships: [], shipTimer: 0.5, portRR: 0, portUnloaded: {},
      stats: { income: 0, expense: 0, net: 0, breakdown: {}, history: [] }, deficitStreak: 0, warning: null,
      grid: { road: new Uint8Array(n), zone: new Uint8Array(n), level: new Uint8Array(n), bld: new Uint8Array(n), pipe: new Uint8Array(n), wire: new Uint8Array(n), pop: new Uint16Array(n) },
    };
    for (const p of map.ports) if (p.county === kao.id) s.grid.bld[p.y * map.w + p.x] = BLD.PORT;
    return s;
  }

  // ---------- 查詢 ----------
  idx(x, y) { return y * this.map.w + x; }
  inMap(x, y) { return x >= 0 && y >= 0 && x < this.map.w && y < this.map.h; }
  owns(i) { return this.s.owned.includes(this.map.county[i]); }
  get era() { return this.s.era; }
  get money() { return this.s.money; }
  ownedPorts() { return this.map.ports.filter((p) => this.s.owned.includes(p.county)); }
  capAt(i, level = this.s.grid.level[i]) {
    const z = ZONE_KEY[this.s.grid.zone[i]];
    if (!z) return 0;
    const c = ZONES[z].cap[level] || 0;
    return Math.floor(this.map.terrain[i] === TERRAIN.HILL ? c * HILL_DENSITY : c);
  }
  powerNeeded() { return this.s.era >= POWER_REQUIRED_FROM_ERA; }
  hasSpecial(key) { return (this.bldList[key] || []).length > 0; }
  nextLandPrice() { return landPrice(this.s.purchases + 1); }
  regionBuyable(name) {
    const c = this.map.countyByName.get(name);
    if (!c) return { ok: false, reason: '沒有這個縣市' };
    if (this.s.owned.includes(c.id)) return { ok: false, reason: '已經買下' };
    if (!LAND.allowOthers && !LAND.mvpRegions.includes(name)) return { ok: false, reason: '之後開放' };
    const price = this.nextLandPrice();
    if (this.s.money < price) return { ok: false, reason: '錢不夠', price };
    return { ok: true, price };
  }
  cellStatus(i) {
    const g = this.s.grid;
    const z = g.zone[i];
    const out = { access: !!this.access[i], water: !!this.waterOK[i], waterCov: !!this.waterCov[i], power: !!this.powerOK[i], powerCov: !!this.powerCov[i], happy: this.happy[i] };
    if (!z) return out;
    const why = [];
    if (!out.access) why.push('沒有接到通往港口的路');
    if (!out.water) why.push(out.waterCov ? '水量不足' : '沒有水');
    if (this.powerNeeded() && !out.power) why.push(out.powerCov ? '電力不足' : '沒有電');
    if (z === ZONE.R && out.happy < GROWTH.happinessMin) why.push('幸福度太低（工業或電廠太近）');
    if (g.level[i] >= eraInfo(this.s.era).maxLevel) why.push('已達本時代最高等級');
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

  // 回傳 { cells: [{i, cost, set}], cost, reason }
  plan(tool, x0, y0, x1 = x0, y1 = y0) {
    const s = this.s, g = s.grid, m = this.map, era = s.era;
    const cells = [];
    let cost = 0;
    const reasons = new Set();
    for (const i of this.cellsFor(tool, x0, y0, x1, y1)) {
      const t = m.terrain[i];
      const empty = !g.road[i] && !g.zone[i] && !g.bld[i];
      if (t === TERRAIN.SEA) { reasons.add('不能蓋在海上'); continue; }
      if (!this.owns(i)) { reasons.add('這裡還沒買下（到「區域」購買）'); continue; }
      if (tool === 'road') {
        if (g.road[i] || g.bld[i] === BLD.PORT) continue;
        if (g.zone[i] || g.bld[i]) { reasons.add('有東西擋住，先拆除'); continue; }
        let c, set;
        if (t === TERRAIN.RIVER) { c = ROAD.bridgeCost[Math.min(era, 2)]; set = { road: 2 }; } else {
          c = t === TERRAIN.MOUNTAIN ? ROAD.cost.mountain : t === TERRAIN.HILL ? ROAD.cost.hill : ROAD.cost.plain;
          set = { road: 1 };
        }
        cells.push({ i, cost: c, set });
        cost += c;
      } else if (ZONES[tool]) {
        const z = ZONE[tool];
        if (g.zone[i] === z) continue;
        if (t === TERRAIN.MOUNTAIN) { reasons.add('高山只能鋪路'); continue; }
        if (t === TERRAIN.RIVER) { reasons.add('河流上不能劃區'); continue; }
        if (g.road[i] || g.bld[i]) { reasons.add('有東西擋住，先拆除'); continue; }
        const c = ZONES[tool].cost;
        cells.push({ i, cost: c, set: { zone: z, level: 0, pop: 0 } });
        cost += c;
      } else if (FACILITIES[tool]) {
        const f = FACILITIES[tool];
        if (era < f.era) { reasons.add(`要到${eraInfo(f.era).name}才能蓋`); continue; }
        if (f.specialOf) {
          if (this.hasSpecial(tool)) { reasons.add(`${f.name}已經蓋好了`); continue; }
          if (f.specialOf < era) { reasons.add('已經過了這個時代'); continue; }
        }
        if (t !== TERRAIN.PLAIN && t !== TERRAIN.HILL) { reasons.add('要蓋在平原或丘陵'); continue; }
        if (!empty) { reasons.add('有東西擋住，先拆除'); continue; }
        if (f.needs === 'river' && !this.near(i, 1, (j) => m.terrain[j] === TERRAIN.RIVER)) { reasons.add(`${f.name}要蓋在河邊`); continue; }
        if (f.needs === 'coast' && !this.near(i, 1, (j) => m.terrain[j] === TERRAIN.SEA)) { reasons.add(`${f.name}要蓋在海邊`); continue; }
        if (f.needs === 'road' && !this.neighbors4(i).some((j) => this.connected[j])) { reasons.add(`${f.name}要緊鄰接到港口的路`); continue; }
        cells.push({ i, cost: f.cost, set: { bld: KEY_BLD[tool] } });
        cost += f.cost;
      } else if (LINES[tool]) {
        const l = LINES[tool];
        if (era < l.era) { reasons.add(`要到${eraInfo(l.era).name}才能用${l.name}`); continue; }
        if (g[tool][i]) continue;
        cells.push({ i, cost: l.cost, set: { [tool]: 1 } });
        cost += l.cost;
      } else if (tool === 'bulldoze') {
        if (g.bld[i] === BLD.PORT) { reasons.add('港口不能拆'); continue; }
        if (!g.road[i] && !g.zone[i] && !g.bld[i] && !g.pipe[i] && !g.wire[i]) continue;
        cells.push({ i, cost: 0, set: { road: 0, zone: 0, level: 0, pop: 0, bld: 0, pipe: 0, wire: 0 } });
      }
    }
    let reason = cells.length ? null : ([...reasons][0] || '這裡沒有可以蓋的地方');
    if (cells.length && cost > s.money) reason = '錢不夠';
    return { cells, cost, reason, skipped: [...reasons] };
  }

  build(tool, x0, y0, x1 = x0, y1 = y0) {
    if (this.s.gameOver) return { ok: false, reason: '遊戲已結束' };
    const p = this.plan(tool, x0, y0, x1, y1);
    if (p.reason) return { ok: false, reason: p.reason };
    const g = this.s.grid;
    const undo = { tool, cost: p.cost, cells: [] };
    for (const c of p.cells) {
      const i = c.i;
      undo.cells.push([i, g.road[i], g.zone[i], g.level[i], g.bld[i], g.pipe[i], g.wire[i], g.pop[i]]);
      for (const [k, v] of Object.entries(c.set)) g[k][i] = v;
      this.markDirty(i);
    }
    this.s.money -= p.cost;
    this.undoStack.push(undo);
    if (this.undoStack.length > UNDO_LIMIT) this.undoStack.shift();
    this.infraDirty = true;
    this.updateInfra();
    this.checkMilestones();
    return { ok: true, cost: p.cost, count: p.cells.length };
  }

  undo() {
    const u = this.undoStack.pop();
    if (!u) return { ok: false, reason: '沒有可以復原的步驟' };
    const g = this.s.grid;
    for (let k = u.cells.length - 1; k >= 0; k--) {
      const [i, road, zone, level, bld, pipe, wire, pop] = u.cells[k];
      g.road[i] = road; g.zone[i] = zone; g.level[i] = level; g.bld[i] = bld; g.pipe[i] = pipe; g.wire[i] = wire; g.pop[i] = pop;
      this.markDirty(i);
    }
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
      g.road[i] = 0; g.zone[i] = 0; g.level[i] = 0; g.pop[i] = 0; g.bld[i] = BLD.PORT;
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

  markDirty(i) { this.dirtyCells.add(i); }

  // ---------- 基礎設施（道路連通、水、電、幸福度）----------
  updateInfra() {
    const m = this.map, g = this.s.grid, n = m.n, w = m.w;
    this.connected.fill(0);
    this.comp.fill(-1);
    this.dist.fill(0);
    this.access.fill(0);
    // 掃一次：分區、設施清單
    const zoneList = [];
    const bldList = { port: [], well: [], waterworks: [], coal: [], lighthouse: [], station: [] };
    let roads = 0, bridges = 0, pipes = 0, wires = 0;
    for (let i = 0; i < n; i++) {
      if (g.zone[i]) zoneList.push(i);
      if (g.bld[i]) bldList[BLD_KEY[g.bld[i]]].push(i);
      if (g.road[i] === 1) roads++; else if (g.road[i] === 2) bridges++;
      if (g.pipe[i]) pipes++;
      if (g.wire[i]) wires++;
    }
    this.zoneList = zoneList;
    this.bldList = bldList;
    this.lineCount = { road: roads, bridge: bridges, pipe: pipes, wire: wires };
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
      for (const j of this.neighbors4(i)) if (this.connected[j] && (best < 0 || this.dist[j] < this.dist[best])) best = j;
      if (best >= 0) { this.access[i] = 1; this.comp[i] = this.comp[best]; this.dist[i] = this.dist[best] + 1; }
    }
    this.updateUtility('water', ['well', 'waterworks'], 'pipe', this.waterCov, this.waterOK);
    this.updateUtility('power', ['coal'], 'wire', this.powerCov, this.powerOK);
    this.updateHappiness();
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
    // 單獨覆蓋的設施（水井、或沒接管線的廠）與管線網路
    const seen = new Uint8Array(0);
    void seen;
    const netOf = new Map(); // 設施 cell → 網路
    const visited = this._visited || (this._visited = new Uint8Array(n));
    visited.fill(0);
    const q = this._q || (this._q = new Int32Array(n));
    for (const key of facKeys) {
      const f = FACILITIES[key];
      for (const c of this.bldList[key]) {
        if (netOf.has(c)) continue;
        const group = { cap: 0, use: 0, cells: [] , plants: [], lines: [] };
        if (key === 'well') {
          group.cap = f.capacity; group.plants.push([c, f.coverRadius]);
          groups.push(group);
          continue;
        }
        // 從廠沿管線 BFS，碰到的同種廠都算同一網路
        let h = 0, t = 0;
        q[t++] = c; visited[c] = 1;
        while (h < t) {
          const i = q[h++];
          const b = BLD_KEY[g.bld[i]];
          if (facKeys.includes(b) && b !== 'well') {
            group.cap += FACILITIES[b].capacity; group.plants.push([i, FACILITIES[b].coverRadius]); netOf.set(i, group);
          } else if (g[lineKey][i]) group.lines.push(i);
          const x = i % w;
          for (const j of [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, i - w, i + w]) {
            if (j < 0 || j >= n || visited[j]) continue;
            const bj = BLD_KEY[g.bld[j]];
            if (g[lineKey][j] || (facKeys.includes(bj) && bj !== 'well')) { visited[j] = 1; q[t++] = j; }
          }
        }
        groups.push(group);
      }
    }
    // 覆蓋範圍 → 群組內的分區格
    let total = { cap: 0, use: 0 };
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
      grp.ok = grp.use <= grp.cap;
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
      let ind = 0, shop = false, plant = false;
      const x0 = i % w, y0 = (i / w) | 0;
      for (let y = Math.max(0, y0 - r); y <= Math.min(m.h - 1, y0 + r); y++) for (let x = Math.max(0, x0 - r); x <= Math.min(w - 1, x0 + r); x++) {
        const j = y * w + x;
        if (g.zone[j] === ZONE.I && g.level[j] > 0) ind++;
        else if (g.zone[j] === ZONE.C && g.level[j] > 0) shop = true;
        if (g.bld[j] === BLD.COAL) plant = true;
      }
      v += Math.max(H.industryNearMax, ind * H.industryNear);
      if (shop) v += H.commerceNear;
      if (plant) v += H.plantNear;
      this.happy[i] = clamp(Math.round(v), 0, 100);
    }
  }

  growthOK(i) {
    const g = this.s.grid;
    if (!this.access[i] || !this.waterOK[i]) return false;
    if (this.powerNeeded() && !this.powerOK[i]) return false;
    if (g.zone[i] === ZONE.R && this.happy[i] < GROWTH.happinessMin) return false;
    return true;
  }

  // ---------- 人口、工作、需求 ----------
  computeTotals() {
    const g = this.s.grid;
    let pop = 0, capC = 0, capI = 0;
    for (const i of this.zoneList) {
      const z = g.zone[i];
      if (z === ZONE.R) pop += g.pop[i];
      else if (this.access[i]) { if (z === ZONE.C) capC += this.capAt(i); else capI += this.capAt(i); }
    }
    const workers = pop * ECON.labor;
    const needJobs = Math.max(0, workers - pop * ECON.selfEmployed);
    const jobs = capC + capI;
    const f = jobs > 0 ? Math.min(1, needJobs / jobs) : 0;
    const openJobs = jobs + ECON.baseJobs - needJobs;
    this.totals = { pop, capC, capI, jobs, workers, needJobs, filledC: capC * f, filledI: capI * f, openJobs };
    this.demand = {
      R: clamp(openJobs / Math.max(50, needJobs * 0.25 + 50), -1, 1),
      C: clamp((pop * ECON.shopNeed - capC + 10) / Math.max(20, pop * ECON.shopNeed * 0.5), -1, 1),
      I: clamp((capC * ECON.goodsNeed + ECON.industryBase + pop * 0.05 - capI) / Math.max(30, capI * 0.5 + 30), -1, 1),
    };
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

  monthTick() {
    const s = this.s, g = s.grid;
    if (this.infraDirty) this.updateInfra();
    else { this.updateUtility('water', ['well', 'waterworks'], 'pipe', this.waterCov, this.waterOK); this.updateUtility('power', ['coal'], 'wire', this.powerCov, this.powerOK); this.updateHappiness(); }
    this.computeTotals();
    const era = eraInfo(s.era);
    let needC = this.totals.pop * ECON.shopNeed - this.totals.capC + 10;
    let needI = this.totals.capC * ECON.goodsNeed + ECON.industryBase + this.totals.pop * 0.05 - this.totals.capI;
    const rng = this.rng;
    // 打亂順序，避免總是從北邊先長
    const list = this.zoneList.slice();
    for (let k = list.length - 1; k > 0; k--) { const j = (rng() * (k + 1)) | 0; [list[k], list[j]] = [list[j], list[k]]; }
    let births = 0;
    for (const i of list) {
      if (!this.growthOK(i)) continue;
      const z = g.zone[i], lv = g.level[i];
      if (z === ZONE.R) {
        const cap = this.capAt(i);
        if (lv === 0) {
          if (this.demand.R > -0.5 && rng() < GROWTH.firstBuildChance) { g.level[i] = 1; this.markDirty(i); }
        } else {
          if (lv < era.maxLevel && g.pop[i] >= cap * GROWTH.fullRatio && this.demand.R > 0 && rng() < GROWTH.levelUpChance) { g.level[i] = lv + 1; this.markDirty(i); }
          if (g.pop[i] > 0 && g.pop[i] < cap) {
            const add = g.pop[i] * GROWTH.naturalGrowth;
            const whole = Math.floor(add) + (rng() < add % 1 ? 1 : 0);
            const real = Math.min(whole, cap - g.pop[i]);
            g.pop[i] += real; births += real;
          }
        }
      } else {
        const isC = z === ZONE.C;
        const need = isC ? needC : needI;
        const grow = (to) => {
          const inc = this.capAt(i, to) - this.capAt(i, lv);
          g.level[i] = to; this.markDirty(i);
          if (isC) { needC -= inc; needI += inc * ECON.goodsNeed; } else needI -= inc;
        };
        if (lv === 0) { if (need > -10 && rng() < GROWTH.firstBuildChance) grow(1); } else if (lv < era.maxLevel && need > 0 && rng() < GROWTH.levelUpChance) grow(lv + 1);
      }
    }
    // 重算一次（成長後），再算錢
    this.updateUtility('water', ['well', 'waterworks'], 'pipe', this.waterCov, this.waterOK);
    this.updateUtility('power', ['coal'], 'wire', this.powerCov, this.powerOK);
    const t = this.computeTotals();
    this.economy();
    s.portUnloaded = {};
    s.month++;
    this.checkEra();
    this.checkMilestones();
    void births;
  }

  maintenance() {
    const lc = this.lineCount, era = Math.min(this.s.era, 2);
    let fac = 0;
    for (const [k, list] of Object.entries(this.bldList)) if (FACILITIES[k]) fac += FACILITIES[k].maintenance * list.length;
    return {
      roads: lc.road * ROAD.maintenance + lc.bridge * ROAD.bridgeMaintenance[era],
      facilities: fac,
      lines: lc.pipe * LINES.pipe.maintenance + lc.wire * LINES.wire.maintenance,
      loan: this.s.loan.taken && this.s.loan.monthsLeft > 0 ? FINANCE.loan.monthlyPayment : 0,
    };
  }

  economy() {
    const s = this.s, t = this.totals, tax = ECON.tax;
    const inc = {
      R: t.pop * tax.R, C: t.filledC * tax.C, I: t.filledI * tax.I,
      trade: this.bldList.port.length ? t.filledI * ECON.tradePerIndustryJob : 0,
    };
    const exp = this.maintenance();
    const income = Math.round(inc.R + inc.C + inc.I + inc.trade);
    const expense = Math.round(exp.roads + exp.facilities + exp.lines + exp.loan);
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
    const t = this.totals, tax = ECON.tax;
    const income = Math.round(t.pop * tax.R + t.filledC * tax.C + t.filledI * tax.I + (this.bldList.port.length ? t.filledI * ECON.tradePerIndustryJob : 0));
    const e = this.maintenance();
    const expense = Math.round(e.roads + e.facilities + e.lines + e.loan);
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
  endGame(reason) {
    const s = this.s;
    s.gameOver = {
      reason, month: s.month, pop: this.totals.pop, era: s.era,
      regions: s.owned.map((id) => this.map.counties.get(id).name),
      milestones: Object.keys(s.milestones).length,
    };
    this.events.push({ type: 'gameOver' });
  }

  checkEra() {
    const s = this.s;
    const e = eraInfo(s.era);
    if (s.era >= MAX_PLAYABLE_ERA || !e.popToNext) return;
    if (this.totals.pop >= e.popToNext && this.hasSpecial(e.special)) {
      s.era++;
      this.dirtyAll = true;
      this.events.push({ type: 'era', era: s.era, name: eraInfo(s.era).name });
    }
  }
  eraProgress() {
    const e = eraInfo(this.s.era);
    return {
      era: this.s.era, name: e.name, nextName: ERAS[this.s.era]?.name || null,
      popNeed: e.popToNext, pop: this.totals.pop, special: e.special, specialName: FACILITIES[e.special]?.name || e.special,
      specialBuilt: this.hasSpecial(e.special), locked: this.s.era >= MAX_PLAYABLE_ERA,
    };
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
    if (this.bldList.lighthouse?.length || this.bldList.station?.length) hit('firstSpecial');
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
      const attract = Math.min(1, Math.min(this.vacancy(), this.jobRoom()) / sh.capacity);
      const passengers = Math.max(1, Math.round(sh.capacity * (0.3 + 0.7 * attract)));
      s.ships.push({ id: (s.shipSeq = (s.shipSeq || 0) + 1), port: port.name, era: s.era, t: 0, phase: 'in', passengers, capacity: sh.capacity, travel: sh.travelMonths });
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
    const portRoom = Math.max(0, PORT.unloadPerMonth - used);
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
