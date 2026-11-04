// 斜角 2.5D（等角）繪圖。全部用程式畫，沒有外部圖檔。
// 效能：靜態畫面（地形＋建築）畫進快取畫布，只有拖曳/縮放超出範圍或地圖變動時才重畫；
// 縮很小時改畫整張地圖的總覽快取（變動時只重畫變動的區域）。每一幀只另外畫船、移民、預覽。
import { TERRAIN, ERAS, FACILITIES, TRAFFIC } from './config.js';
import { BLD, BLD_KEY, ZONE } from './sim.js';
import { LAYERS, layerValue } from './services.js';
import { Agents } from './agents.js';

export const TW = 64;
export const TH = 32;
const REL_MAX = 46; // 最高峰在 zoom=1 時抬高幾 px

const hash = (i, k = 0) => {
  let h = (i * 374761393 + k * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};
const rgb = (r, g, b) => `rgb(${r | 0},${g | 0},${b | 0})`;
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const shade = (c, f) => [Math.min(255, c[0] * f), Math.min(255, c[1] * f), Math.min(255, c[2] * f)];

const SEA_DEEP = '#1f5d8c';
const SEA_SHALLOW = [70, 140, 190];
const ZONE_TINT = { 1: [96, 186, 92], 2: [80, 140, 220], 3: [228, 190, 60] };
// 簡化版（縮小、detail = false）的區塊顏色：[頂, 左, 右]，依分區與樣式時代
const SIMPLE_STYLE = {
  1: { 1: ['#c0563e', '#c9a77a', '#a8875c'], 2: ['#5a5752', '#b5653e', '#96502f'], 3: ['#d6cfbf', '#ddd6c6', '#bfb7a6'], 4: ['#efd9c7', '#e6c9b2', '#c6a68e'], 5: ['#a9d0ec', '#7fb2d9', '#5a8fbf'] },
  2: { 1: ['#d84a3a', '#c9b48a', '#a8946c'], 2: ['#e8e4dc', '#d6d0c4', '#b4ad9f'], 3: ['#d8d2c4', '#cfc6b4', '#aea592'], 4: ['#e46a4a', '#e8e2d6', '#c4bcae'], 5: ['#9fc3e2', '#6f9ccc', '#4f78a6'] },
  3: { 1: ['#5e5550', '#a0784f', '#82603d'], 2: ['#6a6f78', '#9a9890', '#7b7972'], 3: ['#c8c6be', '#b4b1a8', '#96938a'], 4: ['#4a7ab8', '#d8d8d4', '#b2b2ac'], 5: ['#2f4a6a', '#f2f2ee', '#d2d2cc'] },
};
const ELEV_LIFT = 24; // 高架道路離地高度（zoom = 1 時 px）
const ELEV_LIFT_RAIL = 38; // 高架鐵路比高架道路高一層，交叉時從上面過
const SIMPLE_BLD = {
  railstop: ['#c86a3a', 8],
  shufang: ['#e6d6b4', 8], gongxue: ['#e8e0cc', 10], middle: ['#ece6d8', 20], university: ['#c0704a', 22],
  baojia: ['#d8b98a', 7], paichu: ['#2f5fb0', 12], policehq: ['#2f5fb0', 24], herbal: ['#2f8a4a', 8], hospital: ['#f6f6f2', 16], medcenter: ['#f4f6f8', 40],
  port: ['#7a5a3a', 10], well: ['#5a8ad8', 10], waterworks: ['#3a6ad8', 10], waterpoint: ['#6a9ae0', 6], purifier: ['#3f9ad8', 10],
  coal: ['#444', 14], hydro: ['#8aa0b8', 12], nuclear: ['#d8d8d4', 26], modernplant: ['#eef0f2', 14],
  lighthouse: ['#fff', 30], station: ['#c84', 14], dam: ['#c8c4b8', 14], epz: ['#e8e2d2', 24], skyscraper: ['#8fc0e0', 110],
};


export class Renderer {
  constructor(canvas, sim) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.sim = sim;
    this.map = sim.map;
    this.overlay = null; // 'water' | 'power' | null
    this.cam = { x: 0, y: 0, z: 1 };
    this.dpr = Math.min(2, globalThis.devicePixelRatio || 1);
    this.vw = 0; this.vh = 0;
    this.preview = null;
    this.hover = -1;
    this.walkers = [];
    this.agents = new Agents(this);   // 路上的車、火車、行人（畫面效果）
    this.effects = [];
    this.isMobile = Math.min(globalThis.innerWidth || 1000, globalThis.innerHeight || 1000) < 700;
    this.overviewZ = this.isMobile ? 0.125 : 0.25;
    this.viewCache = null;
    this.stats = { tilesDrawn: 0, cacheRenders: 0, lastCacheMs: 0 };
    this.prepare();
  }

  // ---------- 預先計算 ----------
  prepare() {
    const m = this.map, n = m.n;
    this.rel = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      if (m.terrain[i] === TERRAIN.SEA) continue;
      const h = m.heightM[i];
      this.rel[i] = REL_MAX * Math.pow(Math.min(h, 4000) / 4000, 0.62);
    }
    // 淺海（離陸地 2 格內）
    this.shallow = new Uint8Array(n);
    for (let y = 0; y < m.h; y++) for (let x = 0; x < m.w; x++) {
      const i = y * m.w + x;
      if (m.terrain[i] !== TERRAIN.SEA) continue;
      outer: for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
        const xx = x + dx, yy = y + dy;
        if (xx < 0 || yy < 0 || xx >= m.w || yy >= m.h) continue;
        if (m.terrain[yy * m.w + xx] !== TERRAIN.SEA) { this.shallow[i] = 1; break outer; }
      }
    }
    this.computeColors();
    // 世界座標範圍
    this.ox = m.h * TW / 2;
    this.worldW = (m.w + m.h) * TW / 2;
    this.worldH = (m.w + m.h) * TH / 2 + TH;
  }

  computeColors() {
    const m = this.map, n = m.n, sim = this.sim;
    this.cTop = new Array(n);
    this.cL = new Array(n);
    this.cR = new Array(n);
    const owned = new Set(sim.s.owned);
    for (let i = 0; i < n; i++) {
      const t = m.terrain[i];
      if (t === TERRAIN.SEA) {
        if (this.shallow[i]) this.cTop[i] = rgb(...shade(SEA_SHALLOW, 0.92 + hash(i) * 0.1));
        continue;
      }
      const h = m.heightM[i];
      const v = hash(i) * 0.08 - 0.04;
      let c;
      if (t === TERRAIN.RIVER) c = [74, 150, 214];
      else if (t === TERRAIN.PLAIN) c = m.coast[i] ? [214, 200, 140] : mix([142, 196, 100], [128, 178, 92], hash(i, 1));
      else if (t === TERRAIN.HILL) c = mix([142, 178, 92], [120, 140, 78], Math.min(1, (h - 100) / 900));
      else if (h > 3200) c = mix([150, 140, 130], [235, 235, 240], Math.min(1, (h - 3200) / 600));
      else c = mix([92, 120, 70], [128, 110, 90], Math.min(1, (h - 1000) / 2200));
      // 坡度明暗（光從左上）
      const x = i % m.w, y = (i / m.w) | 0;
      const rl = x > 0 ? this.rel[i - 1] : 0, ru = y > 0 ? this.rel[i - m.w] : 0;
      const slope = (this.rel[i] - (rl + ru) / 2) / 12;
      c = shade(c, 1 + v + Math.max(-0.25, Math.min(0.25, slope * 0.25)));
      if (!owned.has(m.county[i])) c = mix(c, [150, 150, 150], 0.45);
      this.cTop[i] = rgb(...c);
      this.cL[i] = rgb(...shade(c, 0.72));
      this.cR[i] = rgb(...shade(c, 0.58));
    }
  }

  onRegionsChanged() {
    this.computeColors();
    this.invalidateAll();
  }

  // ---------- 座標 ----------
  resize(w, h) {
    this.vw = w; this.vh = h;
    this.canvas.width = Math.round(w * this.dpr);
    this.canvas.height = Math.round(h * this.dpr);
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.viewCache = null;
  }
  cellWorld(i) {
    const w = this.map.w, x = i % w, y = (i / w) | 0;
    return { x: (x - y) * TW / 2, y: (x + y) * TH / 2 + TH / 2 - this.rel[i] };
  }
  worldToScreen(wx, wy) {
    const c = this.cam;
    return { x: (wx - c.x) * c.z + this.vw / 2, y: (wy - c.y) * c.z + this.vh / 2 };
  }
  cellToScreen(x, y) {
    const p = this.cellWorld(y * this.map.w + x);
    return this.worldToScreen(p.x, p.y);
  }
  screenToWorld(sx, sy) {
    const c = this.cam;
    return { x: (sx - this.vw / 2) / c.z + c.x, y: (sy - this.vh / 2) / c.z + c.y };
  }
  screenToCell(sx, sy) {
    const m = this.map;
    const p = this.screenToWorld(sx, sy);
    const a = p.x / (TW / 2), b = (p.y - TH / 2) / (TH / 2);
    const fx = Math.round((a + b) / 2), fy = Math.round((b - a) / 2);
    let best = null;
    for (let k = -1; k <= 4; k++) for (let d = -1; d <= 1; d++) {
      const x = fx + k + (d > 0 ? 1 : 0), y = fy + k + (d < 0 ? 1 : 0);
      if (x < 0 || y < 0 || x >= m.w || y >= m.h) continue;
      const i = y * m.w + x;
      const cw = this.cellWorld(i);
      if (Math.abs(p.x - cw.x) / (TW / 2) + Math.abs(p.y - cw.y) / (TH / 2) <= 1.02) {
        if (!best || x + y > best.x + best.y) best = { x, y, i };
      }
    }
    if (!best) {
      const x = Math.max(0, Math.min(m.w - 1, fx)), y = Math.max(0, Math.min(m.h - 1, fy));
      best = { x, y, i: y * m.w + x };
    }
    return best;
  }
  centerOnCell(x, y, z = this.cam.z) {
    const p = this.cellWorld(y * this.map.w + x);
    this.cam.x = p.x; this.cam.y = p.y; this.cam.z = z;
  }
  clampCam() {
    const c = this.cam;
    c.z = Math.max(this.minZoom(), Math.min(2.5, c.z));
    c.x = Math.max(-this.ox, Math.min(this.worldW - this.ox, c.x));
    c.y = Math.max(0, Math.min(this.worldH, c.y));
  }
  minZoom() { return Math.min(this.vw / this.worldW, this.vh / this.worldH) * 0.9; }
  detailZoom() {
    // 視野內大約要畫的格數不超過預算才用細緻畫法
    const budget = this.isMobile ? 9000 : 16000;
    return Math.max(0.3, Math.sqrt((this.vw * this.vh * 2.25) / (budget * TW * TH / 2)));
  }

  invalidateAll() {
    this.viewCache = null;
    this.overview = null;
  }

  // ---------- 單格繪製 ----------
  // (sx, sy)：格子頂面中心（畫布座標），z：縮放
  drawCell(ctx, i, sx, sy, z, detail) {
    const m = this.map, sim = this.sim, g = sim.s.grid;
    const t = m.terrain[i];
    const hw = TW / 2 * z, hh = TH / 2 * z;
    if (t === TERRAIN.SEA) {
      if (!this.shallow[i]) return;
      ctx.fillStyle = this.cTop[i];
      ctx.beginPath();
      ctx.moveTo(sx, sy - hh); ctx.lineTo(sx + hw, sy); ctx.lineTo(sx, sy + hh); ctx.lineTo(sx - hw, sy);
      ctx.fill();
      return;
    }
    const w = m.w, x = i % w, y = (i / w) | 0;
    const r = this.rel[i];
    // 側面（往前方鄰格的落差）
    const rR = x < w - 1 ? this.rel[i + 1] : 0;
    const rL = y < m.h - 1 ? this.rel[i + w] : 0;
    const dL = (r - rL) * z, dR = (r - rR) * z;
    const pad = z < 0.3 ? 0.6 : 0.3; // 縫隙補償
    if (dL > 0.2) {
      ctx.fillStyle = this.cL[i];
      ctx.beginPath();
      ctx.moveTo(sx - hw - pad, sy); ctx.lineTo(sx, sy + hh + pad); ctx.lineTo(sx, sy + hh + dL + pad); ctx.lineTo(sx - hw - pad, sy + dL + pad);
      ctx.fill();
    }
    if (dR > 0.2) {
      ctx.fillStyle = this.cR[i];
      ctx.beginPath();
      ctx.moveTo(sx + hw + pad, sy); ctx.lineTo(sx, sy + hh + pad); ctx.lineTo(sx, sy + hh + dR + pad); ctx.lineTo(sx + hw + pad, sy + dR + pad);
      ctx.fill();
    }
    // 頂面
    let top = this.cTop[i];
    const zt = g.zone[i];
    ctx.fillStyle = top;
    ctx.beginPath();
    ctx.moveTo(sx, sy - hh - pad); ctx.lineTo(sx + hw + pad, sy); ctx.lineTo(sx, sy + hh + pad); ctx.lineTo(sx - hw - pad, sy);
    ctx.fill();
    if (zt) {
      const c = ZONE_TINT[zt];
      ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${g.level[i] ? 0.35 : 0.55})`;
      ctx.fill();
    }
    // 疊加圖層（水/電覆蓋）
    if (this.overlay && LAYERS[this.overlay]) {
      // 城市資訊圖層：交通（綠黃紅）、教育/警力/健康/地價（越高越綠）、犯罪/污染（越高越紅）
      const v = layerValue(sim, this.overlay, i);
      let col = null;
      if (this.overlay === 'traffic') {
        if (v != null) col = v >= TRAFFIC.yellow ? 'rgba(230,40,40,0.75)' : v >= TRAFFIC.green ? 'rgba(250,200,30,0.75)' : 'rgba(40,190,80,0.7)';
      } else if (v != null) {
        const bad = this.overlay === 'crime' || this.overlay === 'pollution';
        const k = Math.max(0, Math.min(1, v / 100));
        col = bad ? `rgba(${200 + 55 * k | 0},${150 - 130 * k | 0},40,${0.25 + 0.5 * k})` : `rgba(${200 - 170 * k | 0},${120 + 90 * k | 0},${200 - 120 * k | 0},${0.25 + 0.45 * k})`;
      }
      ctx.fillStyle = 'rgba(20,20,30,0.25)'; ctx.fill(); // 打開圖層時其他地方變暗
      if (col) { ctx.fillStyle = col; ctx.fill(); }
    } else if (this.overlay) {
      const cov = this.overlay === 'water' ? sim.waterCov[i] : sim.powerCov[i];
      const ok = this.overlay === 'water' ? sim.waterOK[i] : sim.powerOK[i];
      let col = null;
      if (cov && ok) col = this.overlay === 'water' ? 'rgba(40,140,255,0.45)' : 'rgba(255,210,40,0.5)';
      else if (cov) col = 'rgba(255,140,0,0.55)';
      else if (zt) col = 'rgba(230,40,40,0.55)';
      if (col) { ctx.fillStyle = col; ctx.fill(); }
    }
    // 縣市界
    if (z >= 0.2) {
      const cty = m.county[i];
      ctx.strokeStyle = 'rgba(40,30,30,0.55)';
      ctx.lineWidth = Math.max(1, 1.5 * z);
      if (x < w - 1 && m.county[i + 1] && m.county[i + 1] !== cty) { ctx.beginPath(); ctx.moveTo(sx + hw, sy); ctx.lineTo(sx, sy + hh); ctx.stroke(); }
      if (y < m.h - 1 && m.county[i + w] && m.county[i + w] !== cty) { ctx.beginPath(); ctx.moveTo(sx - hw, sy); ctx.lineTo(sx, sy + hh); ctx.stroke(); }
    }
    // 道路
    const elevRoad = g.road[i] && g.elev[i];
    if ((g.road[i] && g.elev[i] !== 1) || g.bld[i] === BLD.PORT) this.drawRoad(ctx, i, sx, sy, z, false);
    if (g.rail[i] && !g.relev[i]) this.drawRail(ctx, i, sx, sy, z);
    // 管線、電線
    if (this.overlay === 'water' && g.pipe[i]) this.drawLine(ctx, i, sx, sy, z, 'pipe', '#1f6fe0', 0.16);
    if (g.wire[i] && (this.overlay === 'power' || z >= 0.35)) this.drawLine(ctx, i, sx, sy, z, 'wire', this.overlay === 'power' ? '#e0a000' : 'rgba(40,40,40,0.7)', this.overlay === 'power' ? 0.14 : 0.04, true);
    // 建築
    if (g.metro[i] && z >= 0.2) this.drawMetro(ctx, i, sx, sy, z);
    if (g.bld[i]) this.drawBuilding(ctx, i, sx, sy, z, detail);
    else if (zt && g.level[i]) this.drawZoneBuildings(ctx, i, sx, sy, z, detail);
    // 高架在建築上面（底下的格子可以蓋東西）
    if (elevRoad) this.drawRoad(ctx, i, sx, sy, z, true);
    if (g.rail[i] && g.relev[i]) this.drawRail(ctx, i, sx, sy, z);
  }

  // deck = true：畫高架橋面；false：畫地面道路（高架底下的地面道路也是）
  drawRoad(ctx, i, sx, sy, z, deck = false) {
    const g = this.sim.s.grid, m = this.map, w = m.w, x = i % w, y = (i / w) | 0;
    const era = this.sim.s.era;
    const bridge = g.road[i] === 2;
    const tr = g.trans[i];
    // 顏色：土路 → 石板路 → 柏油路；公路/高速公路/高架道路更寬
    const col = bridge ? (era >= 3 ? '#b4b2aa' : era >= 2 ? '#a8a49c' : '#8b5a2b') : tr ? '#4a4d52' : era >= 3 ? '#5c5f64' : era >= 2 ? '#a39e95' : '#b8956a';
    // 地面道路只連到有地面道路的鄰格（或接引道的高架）；橋面連到所有道路鄰格（地面的那端是引道）
    const isNode = deck ? (j) => (g.road[j] && g.elev[j]) || (g.elev[i] === 1 && (g.road[j] || g.bld[j] === BLD.PORT))
      : (j) => g.bld[j] === BLD.PORT || (g.road[j] && (g.elev[j] !== 1 || !g.elev[i]));
    const dirs = [];
    if (x < w - 1 && isNode(i + 1)) dirs.push([TW / 4, TH / 4, i + 1]);
    if (x > 0 && isNode(i - 1)) dirs.push([-TW / 4, -TH / 4, i - 1]);
    if (y < m.h - 1 && isNode(i + w)) dirs.push([-TW / 4, TH / 4, i + w]);
    if (y > 0 && isNode(i - w)) dirs.push([TW / 4, -TH / 4, i - w]);
    ctx.lineCap = 'round';
    const lw = Math.max(1.2, (bridge ? 12 : tr === 1 ? 12 : tr >= 2 ? 15 : 10) * z);
    const el = deck;
    const lift = el ? ELEV_LIFT * z : 0; // 高架抬高
    const stroke = (color, width, dash = null, up = lift) => {
      ctx.strokeStyle = color; ctx.lineWidth = width;
      if (dash) ctx.setLineDash(dash);
      ctx.beginPath();
      if (!dirs.length) { ctx.moveTo(sx - 0.1, sy - up); ctx.lineTo(sx + 0.1, sy - up); }
      for (const [dx, dy, j] of dirs) { const up2 = el && !g.elev[j] ? 0 : up; ctx.moveTo(sx, sy - up); ctx.lineTo(sx + dx * z * 2, sy + dy * z * 2 - up2); }
      ctx.stroke();
      if (dash) ctx.setLineDash([]);
    };
    if (bridge && z >= 0.3) stroke('rgba(40,25,10,0.7)', lw + 3 * z, null, 0);
    if (el) {
      // 高架：柱子（每 N 格一根，看得到）→ 和地面道路相接的地方畫引道 → 橋面側邊
      if (this.sim.pillar[i]) {
        const pw = Math.max(1.5, 5 * z);
        ctx.fillStyle = '#b8b6ae'; ctx.fillRect(sx - pw, sy - lift, pw, lift);
        ctx.fillStyle = '#8e8c84'; ctx.fillRect(sx, sy - lift, pw, lift);
        ctx.fillStyle = '#cfcdc4'; ctx.fillRect(sx - pw * 1.8, sy - lift - 2 * z, pw * 3.6, 3 * z);
      }
      ctx.lineCap = 'butt';
      for (const [dx, dy, j] of dirs) {
        if (g.elev[j]) continue;
        ctx.strokeStyle = '#9a9890'; ctx.lineWidth = lw;
        ctx.beginPath(); ctx.moveTo(sx, sy - lift); ctx.lineTo(sx + dx * z * 2, sy + dy * z * 2); ctx.stroke();
      }
      ctx.lineCap = 'round';
      stroke('#8a8880', lw + 3 * z, null, lift - 3 * z);
    }
    if (tr === 2 && z >= 0.3) stroke('#3f8a4a', lw + 3 * z); // 高速公路：綠色路肩
    stroke(col, lw);
    if (bridge && era >= 5 && z >= 0.5) {
      // 斜張橋：橋塔
      ctx.strokeStyle = '#e8e8e8'; ctx.lineWidth = Math.max(1, 2 * z);
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx, sy - 18 * z); ctx.moveTo(sx, sy - 18 * z); ctx.lineTo(sx - 10 * z, sy - 4 * z); ctx.moveTo(sx, sy - 18 * z); ctx.lineTo(sx + 10 * z, sy - 4 * z); ctx.stroke();
    }
    if (era >= 2 && !bridge && z >= 0.5) {
      if (tr) stroke(tr === 1 ? '#f0c040' : '#ffffff', Math.max(0.6, 1.2 * z), tr === 1 ? null : [4 * z, 4 * z]);
      else stroke(era >= 3 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.35)', Math.max(0.5, 1 * z), [3 * z, 4 * z]);
    }
  }

  // 鐵路：枕木＋兩條鐵軌（原創畫法）；鐵橋多畫一層鋼樑
  // 城市服務建築（第三版）：教育、治安、醫療，依時代開放；全部原創畫法
  drawService(ctx, key, sx, sy, z, at) {
    const flag = (u, v, col, h = 30) => {
      const [fx, fy] = at(u, v);
      ctx.strokeStyle = '#ddd'; ctx.lineWidth = Math.max(1, 1.2 * z);
      ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx, fy - h * z); ctx.stroke();
      ctx.fillStyle = col; ctx.fillRect(fx, fy - h * z, 9 * z, 5 * z);
    };
    const sign = (u, v, h, col, w = 8) => {
      const [px, py] = at(u, v);
      ctx.fillStyle = col; ctx.fillRect(px - w / 2 * z, py - h * z, w * z, 4 * z);
    };
    const cross = (cx, cy, s) => {
      ctx.fillStyle = '#fff'; ctx.fillRect(cx - s * 1.4 * z, cy - s * 1.4 * z, s * 2.8 * z, s * 2.8 * z);
      ctx.fillStyle = '#d83a3a';
      ctx.fillRect(cx - s * 0.4 * z, cy - s * 1.2 * z, s * 0.8 * z, s * 2.4 * z);
      ctx.fillRect(cx - s * 1.2 * z, cy - s * 0.4 * z, s * 2.4 * z, s * 0.8 * z);
    };
    if (key === 'shufang') {
      // 書房：小三合院式平房、紅瓦、門口匾額
      this.box(ctx, sx, sy, z, 0.26, 0.16, 8, null, '#e6d6b4', '#c8b48e');
      this.gable(ctx, sx, sy, z, 0.26, 0.16, 8, 6, '#b5523b', '#8e3c2a');
      sign(0, 0.17, 6, '#2a2a2a', 10);
    } else if (key === 'gongxue') {
      // 公學校：長條木造校舍、黑瓦、操場＋旗桿
      const [px, py] = at(0.15, 0.2);
      ctx.fillStyle = '#c8a878'; ctx.beginPath(); ctx.ellipse(px, py, 12 * z, 6 * z, 0, 0, Math.PI * 2); ctx.fill();
      this.box(ctx, ...at(-0.12, -0.08), z, 0.3, 0.12, 10, null, '#e8e0cc', '#c8bea6');
      this.gable(ctx, ...at(-0.12, -0.08), z, 0.3, 0.12, 10, 6, '#4a4a52', '#3a3a42');
      this.floorLines(ctx, ...at(-0.12, -0.08), z, 0.3, 0.12, 10, 1, 'rgba(0,0,0,0)', 6);
      flag(0.35, 0.3, '#f4f4f4');
    } else if (key === 'middle') {
      // 中學：三層水泥校舍＋大鐘
      this.box(ctx, sx, sy, z, 0.32, 0.16, 20, '#e2ddd0', '#ece6d8', '#c8c0ae');
      this.floorLines(ctx, sx, sy, z, 0.32, 0.16, 20, 3, 'rgba(70,90,120,0.5)', 6);
      const [cx, cy] = at(0, 0.17);
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(cx, cy - 23 * z, 3.5 * z, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#333'; ctx.lineWidth = Math.max(0.6, 0.8 * z);
      ctx.beginPath(); ctx.moveTo(cx, cy - 23 * z); ctx.lineTo(cx, cy - 25.5 * z); ctx.moveTo(cx, cy - 23 * z); ctx.lineTo(cx + 2 * z, cy - 23 * z); ctx.stroke();
      flag(0.38, 0.32, '#d33', 26);
    } else if (key === 'university') {
      // 大學：紅磚主樓＋圓頂＋草坪
      const [gx, gy] = at(0.2, 0.22);
      ctx.fillStyle = '#6ab04c'; ctx.beginPath(); ctx.ellipse(gx, gy, 14 * z, 7 * z, 0, 0, Math.PI * 2); ctx.fill();
      this.box(ctx, ...at(-0.1, -0.1), z, 0.3, 0.18, 22, '#b06040', '#c0704a', '#9a5236');
      this.floorLines(ctx, ...at(-0.1, -0.1), z, 0.3, 0.18, 22, 3, 'rgba(255,240,220,0.5)', 7);
      const [dx, dy] = at(-0.1, -0.1);
      ctx.fillStyle = '#3f8a7a';
      ctx.beginPath(); ctx.arc(dx, dy - 22 * z - 4 * z, 8 * z, Math.PI, 0); ctx.fill();
      this.box(ctx, dx, dy - 22 * z, z, 0.08, 0.08, 4, '#e8e0cc', '#d8ceb6', '#b8ae96');
    } else if (key === 'baojia') {
      // 保甲局：小土角屋＋燈籠
      this.box(ctx, sx, sy, z, 0.18, 0.14, 7, null, '#d8b98a', '#b8956a');
      this.gable(ctx, sx, sy, z, 0.18, 0.14, 7, 5, '#8a5a3a', '#6e462e');
      const [lx, ly] = at(0.2, 0.15);
      ctx.fillStyle = '#e83a2a'; ctx.beginPath(); ctx.ellipse(lx, ly - 9 * z, 2.5 * z, 3.2 * z, 0, 0, Math.PI * 2); ctx.fill();
    } else if (key === 'paichu') {
      // 派出所：白色小樓＋藍色招牌＋紅燈
      this.box(ctx, sx, sy, z, 0.2, 0.16, 12, '#e8e8e4', '#f2f2ee', '#cfcfca');
      sign(0, 0.17, 10, '#2f5fb0', 12);
      const [lx, ly] = at(0, 0);
      ctx.fillStyle = '#ff3030'; ctx.beginPath(); ctx.arc(lx, ly - 14 * z, 1.8 * z, 0, Math.PI * 2); ctx.fill();
    } else if (key === 'policehq') {
      // 警察局：大樓＋藍色腰帶＋警車
      this.box(ctx, ...at(-0.08, -0.06), z, 0.28, 0.18, 24, '#e2e4e8', '#eceef2', '#c4c8ce');
      this.floorLines(ctx, ...at(-0.08, -0.06), z, 0.28, 0.18, 24, 4, 'rgba(60,70,90,0.35)', 6);
      const [bx, by] = at(-0.08, 0.13);
      ctx.fillStyle = '#2f5fb0'; ctx.fillRect(bx - 14 * z, by - 12 * z, 28 * z, 3 * z);
      const [cx, cy] = at(0.32, 0.3);
      this.box(ctx, cx, cy, z, 0.09, 0.05, 5, '#f4f4f4', '#2f5fb0', '#244a8a');
      ctx.fillStyle = '#ff3030'; ctx.fillRect(cx - 1.5 * z, cy - 7 * z, 3 * z, 2 * z);
    } else if (key === 'herbal') {
      // 漢藥舖：店面＋綠色招牌
      this.box(ctx, sx, sy, z, 0.18, 0.14, 8, null, '#e8dcc0', '#c8bca0');
      this.gable(ctx, sx, sy, z, 0.18, 0.14, 8, 5, '#5a5a52', '#46463e');
      sign(0, 0.15, 7, '#2f8a4a', 10);
    } else if (key === 'hospital') {
      // 醫院：白色兩層樓＋紅十字
      this.box(ctx, sx, sy, z, 0.28, 0.18, 16, '#f2f2ee', '#f6f6f2', '#d4d4ce');
      this.floorLines(ctx, sx, sy, z, 0.28, 0.18, 16, 2, 'rgba(80,120,160,0.45)', 6);
      const [cx, cy] = at(0, 0.19);
      cross(cx, cy - 18 * z, 2.5);
    } else if (key === 'medcenter') {
      // 醫學中心：白色高樓＋紅十字＋頂樓停機坪
      this.box(ctx, ...at(-0.05, -0.05), z, 0.26, 0.2, 40, '#e8ecf0', '#f4f6f8', '#cdd2d8');
      this.floorLines(ctx, ...at(-0.05, -0.05), z, 0.26, 0.2, 40, 8, 'rgba(80,130,180,0.4)', 5);
      const [hx, hy] = at(-0.05, -0.05);
      ctx.fillStyle = '#3a8a4a'; ctx.beginPath(); ctx.ellipse(hx, hy - 40 * z, 7 * z, 3.5 * z, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(5, 5 * z)}px system-ui, sans-serif`; ctx.textAlign = 'center';
      ctx.fillText('H', hx, hy - 38.5 * z);
      const [cx, cy] = at(-0.05, 0.16);
      cross(cx, cy - 34 * z, 2.5);
    }
  }

  drawRail(ctx, i, sx, sy, z) {
    const g = this.sim.s.grid, m = this.map, w = m.w, x = i % w, y = (i / w) | 0;
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    const el = !!g.relev[i];
    const lift = el ? ELEV_LIFT_RAIL * z : 0;
    // 每個方向：沿線向量 a（半格）、垂直向量 p（格子單位）、正負號、鄰格那端的高度（高架接地面＝引道）
    const segs = [];
    const add = (j, a, p, sg) => segs.push([a, p, sg, el && !g.relev[j] ? 0 : lift]);
    if (x < w - 1 && g.rail[i + 1]) add(i + 1, ex, ey, 1);
    if (x > 0 && g.rail[i - 1]) add(i - 1, ex, ey, -1);
    if (y < m.h - 1 && g.rail[i + w]) add(i + w, ey, ex, 1);
    if (y > 0 && g.rail[i - w]) add(i - w, ey, ex, -1);
    if (!segs.length) segs.push([ex, ey, 1, lift], [ex, ey, -1, lift]);
    // 沿線 t（0 = 格子中心、0.5 = 格子邊）的位置與高度
    const pt = (a, sg, endUp, t, off = [0, 0]) => {
      const up = lift + (endUp - lift) * (t / 0.5);
      return [sx + a[0] * t * sg + off[0], sy + a[1] * t * sg + off[1] - up];
    };
    const line = (color, width, cap = 'butt') => {
      ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineCap = cap;
      ctx.beginPath();
      for (const [a, , sg, e] of segs) { ctx.moveTo(...pt(a, sg, e, 0)); ctx.lineTo(...pt(a, sg, e, 0.5)); }
      ctx.stroke();
    };
    const active = this.sim.railActive[i];
    if (el) {
      // 高架鐵路：柱子（每 N 格一根）＋混凝土橋身
      if (this.sim.railPillar[i]) {
        const pw = Math.max(1.5, 5 * z);
        ctx.fillStyle = '#b8b6ae'; ctx.fillRect(sx - pw, sy - lift, pw, lift);
        ctx.fillStyle = '#8e8c84'; ctx.fillRect(sx, sy - lift, pw, lift);
        ctx.fillStyle = '#cfcdc4'; ctx.fillRect(sx - pw * 1.8, sy - lift - 2 * z, pw * 3.6, 3 * z);
      }
      line('#8a8880', Math.max(2, 13 * z));
    } else if (g.rail[i] === 2 && z >= 0.3) line('#5a5048', Math.max(2, 14 * z));
    if (z < 0.3) { line(active ? '#5a4030' : '#6a6058', Math.max(1, 3 * z), 'round'); return; }
    // 道碴
    line('#9a9286', 9 * z);
    // 枕木
    ctx.strokeStyle = '#6b4a2e'; ctx.lineWidth = Math.max(1, 2 * z);
    ctx.beginPath();
    for (const [a, p, sg, e] of segs) for (const t of [0.08, 0.25, 0.42]) {
      ctx.moveTo(...pt(a, sg, e, t, [-p[0] * 0.13, -p[1] * 0.13])); ctx.lineTo(...pt(a, sg, e, t, [p[0] * 0.13, p[1] * 0.13]));
    }
    ctx.stroke();
    // 鐵軌
    ctx.strokeStyle = active ? '#3a3c40' : '#6e6c68'; ctx.lineWidth = Math.max(0.8, 1.3 * z);
    ctx.beginPath();
    for (const [a, p, sg, e] of segs) for (const o of [-0.08, 0.08]) {
      ctx.moveTo(...pt(a, sg, e, 0, [p[0] * o, p[1] * o])); ctx.lineTo(...pt(a, sg, e, 0.5, [p[0] * o, p[1] * o]));
    }
    ctx.stroke();
    ctx.lineCap = 'round';
  }

  // 捷運：地面上畫一條彩色線，每隔幾格一個站
  drawMetro(ctx, i, sx, sy, z) {
    const g = this.sim.s.grid, m = this.map, w = m.w, x = i % w, y = (i / w) | 0;
    ctx.strokeStyle = '#d0342c';
    ctx.lineWidth = Math.max(1, 3 * z);
    ctx.lineCap = 'round';
    ctx.beginPath();
    let any = false;
    const seg = (dx, dy) => { ctx.moveTo(sx, sy); ctx.lineTo(sx + dx * z * 2, sy + dy * z * 2); any = true; };
    if (x < w - 1 && g.metro[i + 1]) seg(TW / 4, TH / 4);
    if (x > 0 && g.metro[i - 1]) seg(-TW / 4, -TH / 4);
    if (y < m.h - 1 && g.metro[i + w]) seg(-TW / 4, TH / 4);
    if (y > 0 && g.metro[i - w]) seg(TW / 4, -TH / 4);
    if (!any) { ctx.moveTo(sx - 1, sy); ctx.lineTo(sx + 1, sy); }
    ctx.stroke();
    if ((x + y) % 4 === 0 && z >= 0.35) {
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = '#d0342c';
      ctx.lineWidth = Math.max(1, 1.5 * z);
      ctx.beginPath(); ctx.ellipse(sx, sy, 5 * z, 2.6 * z, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
  }

  drawLine(ctx, i, sx, sy, z, key, color, width, poles = false) {
    const g = this.sim.s.grid, m = this.map, w = m.w, x = i % w, y = (i / w) | 0;
    const arr = g[key];
    const lift = poles ? 10 * z : 0;
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1, TW * width * z);
    ctx.lineCap = 'round';
    ctx.beginPath();
    let any = false;
    const seg = (dx, dy) => { ctx.moveTo(sx, sy - lift); ctx.lineTo(sx + dx * z * 2, sy + dy * z * 2 - lift); any = true; };
    if (x < w - 1 && arr[i + 1]) seg(TW / 4, TH / 4);
    if (x > 0 && arr[i - 1]) seg(-TW / 4, -TH / 4);
    if (y < m.h - 1 && arr[i + w]) seg(-TW / 4, TH / 4);
    if (y > 0 && arr[i - w]) seg(TW / 4, -TH / 4);
    if (!any) { ctx.moveTo(sx - 1, sy - lift); ctx.lineTo(sx + 1, sy - lift); }
    ctx.stroke();
    if (poles && z >= 0.5) {
      ctx.strokeStyle = '#5a4030';
      ctx.lineWidth = Math.max(1, 1.5 * z);
      ctx.beginPath(); ctx.moveTo(sx + 4 * z, sy + 2 * z); ctx.lineTo(sx + 4 * z, sy - lift - 2 * z); ctx.stroke();
    }
  }

  // 等角方塊：中心 (cx,cy) 地面，u/v 半寬（格的比例），h 高度（px，zoom=1）
  box(ctx, cx, cy, z, u, v, h, top, left, right) {
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    const P = (a, b, up = 0) => [cx + a * ex[0] + b * ey[0], cy + a * ex[1] + b * ey[1] - up];
    const H = h * z;
    const A = P(-u, v), B = P(u, v), C = P(u, -v);
    ctx.fillStyle = left;
    ctx.beginPath(); ctx.moveTo(...A); ctx.lineTo(...B); ctx.lineTo(B[0], B[1] - H); ctx.lineTo(A[0], A[1] - H); ctx.fill();
    ctx.fillStyle = right;
    ctx.beginPath(); ctx.moveTo(...B); ctx.lineTo(...C); ctx.lineTo(C[0], C[1] - H); ctx.lineTo(B[0], B[1] - H); ctx.fill();
    if (top) {
      const D = P(-u, -v);
      ctx.fillStyle = top;
      ctx.beginPath(); ctx.moveTo(A[0], A[1] - H); ctx.lineTo(B[0], B[1] - H); ctx.lineTo(C[0], C[1] - H); ctx.lineTo(D[0], D[1] - H); ctx.fill();
    }
    return { P, H };
  }
  // 人字屋頂（屋脊沿 x 方向）
  gable(ctx, cx, cy, z, u, v, h, rh, front, side) {
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    const P = (a, b, up) => [cx + a * ex[0] + b * ey[0], cy + a * ex[1] + b * ey[1] - up * z];
    const e = 0.04;
    const A = P(-u - e, v + e, h), B = P(u + e, v + e, h), R1 = P(-u - e, 0, h + rh), R2 = P(u + e, 0, h + rh), C = P(u + e, -v - e, h);
    ctx.fillStyle = side;
    ctx.beginPath(); ctx.moveTo(...B); ctx.lineTo(...C); ctx.lineTo(...R2); ctx.fill();
    ctx.fillStyle = front;
    ctx.beginPath(); ctx.moveTo(...A); ctx.lineTo(...B); ctx.lineTo(...R2); ctx.lineTo(...R1); ctx.fill();
  }

  // 樓層線（畫在方塊的兩個側面上）
  floorLines(ctx, cx, cy, z, u, v, h, floors, color, cols = 0) {
    if (z < 0.45 || floors < 2) return;
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    const P = (a, b, up) => [cx + a * ex[0] + b * ey[0], cy + a * ex[1] + b * ey[1] - up * z];
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(0.5, 0.8 * z);
    ctx.beginPath();
    for (let f = 1; f < floors; f++) {
      const y = (h * f) / floors;
      const A = P(-u, v, y), B = P(u, v, y), C = P(u, -v, y);
      ctx.moveTo(...A); ctx.lineTo(...B); ctx.lineTo(...C);
    }
    for (let k = 1; k < cols; k++) {
      const a = -u + (2 * u * k) / cols, b = v - (2 * v * k) / cols;
      const p0 = P(a, v, 0), p1 = P(a, v, h);
      ctx.moveTo(...p0); ctx.lineTo(...p1);
      const q0 = P(u, b, 0), q1 = P(u, b, h);
      ctx.moveTo(...q0); ctx.lineTo(...q1);
    }
    ctx.stroke();
  }

  // 區塊建築：依「樣式時代（bera）＋等級」畫，對照 config.js 的 BUILDING_STYLES
  drawZoneBuildings(ctx, i, sx, sy, z, detail) {
    const sim = this.sim, g = sim.s.grid;
    const zt = g.zone[i], lv = g.level[i];
    const era = Math.min(5, sim.beraAt(i));
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    if (!detail) {
      // 簡化：一個方塊，顏色看時代、高度看等級與時代
      const pal = SIMPLE_STYLE[zt][era];
      const hMul = [0, 1, 1.2, 1.8, 2.6, 3.4][era];
      this.box(ctx, sx, sy, z, 0.32, 0.32, 4 + lv * 5 * hMul, ...pal);
      return;
    }
    // 依等級與時代決定棟數（越現代、越高級，棟數越少但越高）
    let slots;
    if (era >= 4 && lv >= 5) slots = [[0, 0]];
    else if (era >= 3 && lv >= 3) slots = [[-0.22, -0.2], [0.22, 0.22]];
    else if (lv <= 1) slots = [[-0.22, -0.18], [0.2, 0.2]];
    else if (lv === 2) slots = [[-0.25, -0.25], [0.25, -0.22], [-0.22, 0.25], [0.25, 0.25]];
    else slots = [[-0.26, -0.26], [0.26, -0.26], [-0.26, 0.26], [0.26, 0.26]];
    const fullness = zt === ZONE.R ? Math.min(1, g.pop[i] / Math.max(1, sim.capAt(i))) : 1;
    const shown = zt === ZONE.R ? Math.max(1, Math.ceil(slots.length * Math.max(0.25, fullness))) : slots.length;
    for (let k = 0; k < shown; k++) {
      const [a, b] = slots[k];
      const jx = (hash(i, k) - 0.5) * 0.08, jy = (hash(i, k + 7) - 0.5) * 0.08;
      const cx = sx + (a + jx) * ex[0] + (b + jy) * ey[0];
      const cy = sy + (a + jx) * ex[1] + (b + jy) * ey[1];
      const r = hash(i, k + 3);
      const one = slots.length === 1;
      if (zt === ZONE.R) this.drawHouse(ctx, cx, cy, z, era, lv, r, k, one);
      else if (zt === ZONE.C) this.drawShop(ctx, cx, cy, z, era, lv, r, k, one, ex, ey);
      else this.drawFactory(ctx, cx, cy, z, era, lv, r, k, one, ex, ey);
    }
  }

  drawHouse(ctx, cx, cy, z, era, lv, r, k, one) {
    if (era === 1) {
      // 土角厝：土黃牆、紅瓦（等級 1 有些是茅草頂）
      const wall = r < 0.5 ? ['#d8b98a', '#b8956a'] : ['#cfae7c', '#a98a5e'];
      this.box(ctx, cx, cy, z, 0.13, 0.1, 7, null, ...wall);
      const roof = lv >= 2 || r < 0.55 ? ['#b5523b', '#8e3c2a'] : ['#c9a45c', '#a3833f'];
      this.gable(ctx, cx, cy, z, 0.13, 0.1, 7, 6, ...roof);
    } else if (era === 2) {
      // 磚造街屋：紅磚牆、黑瓦，高等級兩三層
      const floors = lv <= 2 ? 1 : lv === 3 ? 2 : 3;
      this.box(ctx, cx, cy, z, 0.16, 0.14, 7 * floors, null, '#b5653e', '#96502f');
      this.floorLines(ctx, cx, cy, z, 0.16, 0.14, 7 * floors, floors, 'rgba(240,220,190,0.55)');
      this.gable(ctx, cx, cy, z, 0.16, 0.14, 7 * floors, 5, '#55524e', '#45423f');
    } else if (era === 3) {
      // 公寓：水泥牆、平頂、頂樓水塔
      const floors = lv <= 1 ? 1 : lv === 2 ? 2 : lv + 1;
      const h = 6.5 * floors;
      const wall = r < 0.5 ? ['#ddd6c6', '#e2dccd', '#bfb7a6'] : ['#e8dfc2', '#e6dbbd', '#c4b897'];
      this.box(ctx, cx, cy, z, 0.17, 0.15, h, wall[0], wall[1], wall[2]);
      this.floorLines(ctx, cx, cy, z, 0.17, 0.15, h, floors, 'rgba(90,90,100,0.45)');
      if (floors >= 3) this.box(ctx, cx, cy - h * z, z, 0.04, 0.04, 5, '#5a8ac0', '#4a78ac', '#3a6290');
    } else if (era === 4) {
      // 大樓：磁磚外牆、高樓
      const floors = lv <= 2 ? lv * 3 : lv === 3 ? 8 : lv === 4 ? 11 : lv === 5 ? 15 : 18;
      const h = 4.6 * floors;
      const u = one ? 0.24 : 0.17;
      const tile = r < 0.5 ? ['#efd9c7', '#e6c9b2', '#c6a68e'] : ['#e9e2cf', '#ddd3bb', '#b9ae95'];
      this.box(ctx, cx, cy, z, u, u * 0.9, h, tile[0], tile[1], tile[2]);
      this.floorLines(ctx, cx, cy, z, u, u * 0.9, h, floors, 'rgba(120,90,70,0.4)');
      if (lv >= 4) this.box(ctx, cx, cy - h * z, z, 0.06, 0.05, 6, '#c9c4b8', '#b8b2a4', '#9a9486');
    } else {
      // 玻璃帷幕：藍綠色玻璃、直線分割
      const floors = lv <= 2 ? lv * 3 : lv === 3 ? 10 : lv === 4 ? 16 : lv === 5 ? 22 : 30;
      const h = 4 * floors;
      const u = one ? 0.22 : 0.16;
      const gl = r < 0.5 ? ['#a9d0ec', '#7fb2d9', '#5a8fbf'] : ['#b5e0d8', '#86c4b8', '#5e9e94'];
      this.box(ctx, cx, cy, z, u, u, h, gl[0], gl[1], gl[2]);
      this.floorLines(ctx, cx, cy, z, u, u, h, Math.ceil(floors / 3), 'rgba(255,255,255,0.35)', 4);
      if (lv >= 5) this.box(ctx, cx, cy - h * z, z, 0.015, 0.015, 14, '#ddd', '#ccc', '#aaa');
    }
  }

  drawShop(ctx, cx, cy, z, era, lv, r, k, one, ex, ey) {
    const P = (u, v, up) => [cx + u * ex[0] + v * ey[0], cy + u * ex[1] + v * ey[1] - up * z];
    const sign = (h, col, w = 0.1) => {
      const s1 = P(-w, 0.16, h), s2 = P(w, 0.16, h);
      ctx.fillStyle = col;
      ctx.fillRect(Math.min(s1[0], s2[0]), s1[1] - 3 * z, Math.abs(s2[0] - s1[0]) + 1, 4 * z);
    };
    const signCol = r < 0.33 ? '#d84a3a' : r < 0.66 ? '#2f6fd0' : '#e0a020';
    if (era === 1) {
      // 市集攤位：彩色遮棚
      this.box(ctx, cx, cy, z, 0.12, 0.1, 5, null, '#c9b48a', '#a8946c');
      const aw = r < 0.33 ? ['#d84a3a', '#a83426'] : r < 0.66 ? ['#3a7fd8', '#2a5fa8'] : ['#e0b030', '#b08820'];
      this.gable(ctx, cx, cy, z, 0.14, 0.12, 5, 4, aw[0], aw[1]);
    } else if (era === 2) {
      // 商行：亭仔腳街屋＋招牌
      const h = lv <= 2 ? 10 : lv === 3 ? 16 : 22;
      this.box(ctx, cx, cy, z, 0.17, 0.15, h, '#e8e4dc', '#d6d0c4', '#b4ad9f');
      this.floorLines(ctx, cx, cy, z, 0.17, 0.15, h, Math.round(h / 7), 'rgba(120,100,80,0.5)');
      sign(h * 0.55, signCol);
    } else if (era === 3) {
      // 百貨：方正水泥樓、整排招牌
      const h = lv <= 2 ? 12 : 8 + lv * 6;
      this.box(ctx, cx, cy, z, 0.18, 0.16, h, '#d8d2c4', '#cfc6b4', '#aea592');
      this.floorLines(ctx, cx, cy, z, 0.18, 0.16, h, Math.max(2, Math.round(h / 6.5)), 'rgba(60,60,70,0.35)');
      sign(h * 0.8, signCol, 0.14);
      sign(h * 0.45, r < 0.5 ? '#e0a020' : '#d84a3a', 0.12);
    } else if (era === 4) {
      // 商場：寬大低樓＋彩色屋頂（高等級加一棟塔）
      const u = one ? 0.36 : 0.2;
      const h = lv <= 2 ? 12 : 14 + lv * 3;
      this.box(ctx, cx, cy, z, u, u * 0.85, h, r < 0.5 ? '#e46a4a' : '#4a8ae4', '#e8e2d6', '#c4bcae');
      this.floorLines(ctx, cx, cy, z, u, u * 0.85, h, 3, 'rgba(90,80,70,0.35)');
      sign(h * 0.7, signCol, u * 0.7);
      if (lv >= 5) this.box(ctx, cx, cy - h * z, z, 0.12, 0.1, 30, '#ddd8cc', '#d0c9bb', '#ada595');
    } else {
      // 商辦大樓：玻璃帷幕＋頂樓招牌
      const floors = lv <= 2 ? 4 : lv * 5;
      const h = 4 * floors;
      const u = one ? 0.24 : 0.17;
      this.box(ctx, cx, cy, z, u, u, h, '#9fc3e2', '#6f9ccc', '#4f78a6');
      this.floorLines(ctx, cx, cy, z, u, u, h, Math.ceil(floors / 2), 'rgba(255,255,255,0.4)', 3);
      sign(h - 3, signCol, u * 0.8);
    }
  }

  drawFactory(ctx, cx, cy, z, era, lv, r, k, one, ex, ey) {
    if (era === 1) {
      // 小作坊：木造＋小煙囪
      this.box(ctx, cx, cy, z, 0.15, 0.12, 6, null, '#a0784f', '#82603d');
      this.gable(ctx, cx, cy, z, 0.15, 0.12, 6, 4, '#5e5550', '#4a423e');
      if (k === 0) this.box(ctx, cx + 0.08 * ex[0], cy - 0.02 * ey[1], z, 0.025, 0.025, 14, '#555', '#6b5a4a', '#55473a');
    } else if (era === 2) {
      // 製糖工廠：鋸齒屋頂＋高煙囪
      this.box(ctx, cx, cy, z, 0.18, 0.16, 12, null, '#9a9890', '#7b7972');
      for (let s = -1; s <= 1; s++) this.gable(ctx, cx + s * 0.11 * ey[0], cy + s * 0.11 * ey[1], z, 0.18, 0.05, 12, 4, '#6a6f78', '#555a62');
      if (k === 0) this.box(ctx, cx + 0.12 * ex[0], cy, z, 0.03, 0.03, 30 + lv * 3, '#7a3a2a', '#a04c35', '#843e2b');
    } else if (era === 3) {
      // 加工廠：水泥廠房、平頂、水塔
      const h = 10 + lv * 2;
      this.box(ctx, cx, cy, z, 0.19, 0.16, h, '#c8c6be', '#b4b1a8', '#96938a');
      this.floorLines(ctx, cx, cy, z, 0.19, 0.16, h, 2, 'rgba(60,60,60,0.35)');
      if (k === 0) {
        const [tx, ty] = [cx - 0.1 * ex[0], cy - 0.1 * ex[1]];
        this.box(ctx, tx, ty - h * z, z, 0.04, 0.04, 8, '#7aa0c8', '#6a8cb0', '#56789a');
        this.box(ctx, cx + 0.12 * ex[0], cy, z, 0.025, 0.025, 26, '#666', '#8a8a8a', '#707070');
      }
    } else if (era === 4) {
      // 加工出口區：大型鐵皮廠房（藍屋頂）
      const u = one ? 0.36 : 0.2;
      const h = 9 + lv * 2;
      this.box(ctx, cx, cy, z, u, u * 0.8, h, '#4a7ab8', '#d8d8d4', '#b2b2ac');
      this.floorLines(ctx, cx, cy, z, u, u * 0.8, h, 2, 'rgba(70,90,120,0.4)', 4);
      if (k === 0 && lv >= 4) this.box(ctx, cx + 0.2 * ex[0], cy, z, 0.03, 0.03, 34, '#bbb', '#d0d0d0', '#a8a8a8');
    } else {
      // 科技園區：白色低樓＋玻璃帶＋屋頂太陽能板，沒有煙囪
      const u = one ? 0.34 : 0.2;
      const h = 10 + lv * 3;
      this.box(ctx, cx, cy, z, u, u * 0.8, h, '#2f4a6a', '#f2f2ee', '#d2d2cc');
      const ex2 = [TW / 2 * z, TH / 2 * z], ey2 = [-TW / 2 * z, TH / 2 * z];
      const P = (a, b, up) => [cx + a * ex2[0] + b * ey2[0], cy + a * ex2[1] + b * ey2[1] - up * z];
      ctx.fillStyle = 'rgba(90,150,210,0.85)';
      const A = P(-u, u * 0.8, h * 0.6), B = P(u, u * 0.8, h * 0.6), B2 = P(u, u * 0.8, h * 0.4), A2 = P(-u, u * 0.8, h * 0.4);
      ctx.beginPath(); ctx.moveTo(...A); ctx.lineTo(...B); ctx.lineTo(...B2); ctx.lineTo(...A2); ctx.fill();
    }
  }

  drawBuilding(ctx, i, sx, sy, z, detail) {
    const b = this.sim.s.grid.bld[i];
    const era = this.sim.s.era;
    const key = BLD_KEY[b];
    if (!detail) {
      const [col, h] = SIMPLE_BLD[key] || ['#888', 10];
      this.box(ctx, sx, sy, z, 0.3, 0.3, h, this.sim.isObsolete(key) ? '#ffb020' : col, col, col); // 過時設施：橘色頂
      return;
    }
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    const at = (u, v) => [sx + u * ex[0] + v * ey[0], sy + u * ex[1] + v * ey[1]];
    const tank = (cx, cy, r, h, top, side, dark) => {
      ctx.fillStyle = side;
      ctx.fillRect(cx - r * z, cy - h * z, 2 * r * z, h * z);
      ctx.fillStyle = top;
      ctx.beginPath(); ctx.ellipse(cx, cy - h * z, r * z, r * 0.5 * z, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = dark;
      ctx.beginPath(); ctx.ellipse(cx, cy, r * z, r * 0.5 * z, 0, 0, Math.PI); ctx.fill();
    };
    const smoke = (x, y, n, dark) => {
      for (let k = 0; k < n; k++) {
        ctx.fillStyle = dark ? `rgba(40,40,40,${0.55 - k * 0.12})` : `rgba(220,220,220,${0.6 - k * 0.14})`;
        ctx.beginPath(); ctx.arc(x + k * 5 * z, y - k * 7 * z, (4 + k * 2.5) * z, 0, Math.PI * 2); ctx.fill();
      }
    };
    if (key === 'port') {
      // 碼頭 + 倉庫；日據起吊車；光復起貨櫃；經濟起飛起門式起重機
      this.box(ctx, sx, sy, z, 0.42, 0.42, 2, era >= 3 ? '#8a8a86' : '#8a6a48', era >= 3 ? '#6e6e6a' : '#6e5238', era >= 3 ? '#5a5a56' : '#5a4330');
      const [wx, wy] = at(-0.15, -0.1);
      if (era >= 3) {
        const cols = ['#c44', '#36a', '#ca3', '#3a6'];
        for (let k = 0; k < 4; k++) { const [cx, cy] = at(-0.25 + (k % 2) * 0.16, -0.2 + ((k / 2) | 0) * 0.14); this.box(ctx, cx, cy, z, 0.07, 0.05, 5 + (k % 2) * 5, cols[k], cols[k], cols[(k + 1) % 4]); }
      } else {
        this.box(ctx, wx, wy, z, 0.2, 0.15, 9, null, '#c8b48a', '#a8946a');
        this.gable(ctx, wx, wy, z, 0.2, 0.15, 9, 5, '#7b4a32', '#5e3826');
      }
      if (era >= 4) {
        const [cx, cy] = at(0.22, 0.15);
        ctx.strokeStyle = '#2f6fd0'; ctx.lineWidth = Math.max(1, 2.5 * z);
        ctx.beginPath(); ctx.moveTo(cx - 8 * z, cy); ctx.lineTo(cx - 8 * z, cy - 34 * z); ctx.moveTo(cx + 8 * z, cy + 2 * z); ctx.lineTo(cx + 8 * z, cy - 32 * z);
        ctx.moveTo(cx - 14 * z, cy - 34 * z); ctx.lineTo(cx + 24 * z, cy - 31 * z); ctx.stroke();
      } else if (era >= 2) {
        const [cx, cy] = at(0.2, 0.2);
        this.box(ctx, cx, cy, z, 0.03, 0.03, 26, '#c33', '#d44', '#a22');
        ctx.strokeStyle = '#c33'; ctx.lineWidth = Math.max(1, 2 * z);
        ctx.beginPath(); ctx.moveTo(cx, cy - 26 * z); ctx.lineTo(cx + 18 * z, cy - 20 * z); ctx.stroke();
      }
    } else if (key === 'well') {
      const dry = this.sim.isObsolete('well');
      ctx.fillStyle = '#8a8a8a';
      ctx.beginPath(); ctx.ellipse(sx, sy, 9 * z, 4.5 * z, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = dry ? '#6a7a8a' : '#2a5a9a';
      ctx.beginPath(); ctx.ellipse(sx, sy - 1 * z, 6 * z, 3 * z, 0, 0, Math.PI * 2); ctx.fill();
      this.box(ctx, sx - 7 * z, sy, z, 0.015, 0.015, 12, null, '#6b4a2a', '#5a3d22');
      this.box(ctx, sx + 7 * z, sy, z, 0.015, 0.015, 12, null, '#6b4a2a', '#5a3d22');
      this.gable(ctx, sx, sy, z, 0.16, 0.08, 12, 4, '#a0522d', '#7a3e22');
    } else if (FACILITIES[key]?.kind === 'service') {
      this.drawService(ctx, key, sx, sy, z, at);
    } else if (key === 'railstop') {
      // 車站：月台＋雨棚＋站名牌
      this.box(ctx, sx, sy, z, 0.36, 0.16, 3, '#c8c2b4', '#aaa496', '#8e887a');
      this.box(ctx, ...at(-0.05, 0.02), z, 0.18, 0.1, 9, null, '#e8dcc4', '#c8bca4');
      this.gable(ctx, ...at(-0.05, 0.02), z, 0.2, 0.12, 9, 5, '#a64a32', '#843a26');
      const [px, py] = at(0.26, 0.1);
      ctx.fillStyle = '#fff'; ctx.fillRect(px - 5 * z, py - 16 * z, 10 * z, 5 * z);
      ctx.fillStyle = '#2f6fd0'; ctx.fillRect(px - 0.6 * z, py - 11 * z, 1.2 * z, 11 * z);
    } else if (key === 'waterpoint') {
      // 自來水接點：小機房＋藍色管線
      this.box(ctx, sx, sy, z, 0.14, 0.12, 7, '#d8dce0', '#c4c8cc', '#a4a8ac');
      tank(...at(0.18, 0.12), 5, 9, '#4a8ae0', '#2a64b8', '#1e4a8a');
    } else if (key === 'waterworks') {
      this.box(ctx, ...at(-0.15, 0.1), z, 0.2, 0.14, 10, '#ddd', '#c8c4bc', '#a8a49c');
      for (const [u, v] of [[0.22, -0.18], [0.22, 0.18]]) tank(...at(u, v), 8, 10, '#4a8ae0', '#2a64b8', '#1e4a8a');
    } else if (key === 'purifier') {
      // 淨水廠：圓形沉澱池＋現代機房
      for (const [u, v] of [[-0.2, -0.18], [-0.2, 0.2], [0.18, -0.18]]) {
        const [cx, cy] = at(u, v);
        ctx.fillStyle = '#c8ccd0'; ctx.beginPath(); ctx.ellipse(cx, cy, 11 * z, 5.5 * z, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#3f9ad8'; ctx.beginPath(); ctx.ellipse(cx, cy - 1 * z, 9 * z, 4.5 * z, 0, 0, Math.PI * 2); ctx.fill();
      }
      this.box(ctx, ...at(0.2, 0.2), z, 0.14, 0.12, 14, '#f0f2f4', '#dfe3e6', '#bcc2c8');
    } else if (key === 'coal') {
      const old = this.sim.isObsolete('coal');
      this.box(ctx, sx, sy, z, 0.32, 0.25, 16, '#666', '#7a5040', '#5f3e32');
      for (const u of [-0.12, 0.12]) { const [cx, cy] = at(u, -0.12); this.box(ctx, cx, cy - 16 * z, z, 0.04, 0.04, 26, '#333', '#9a5a40', '#7a4632'); }
      ctx.fillStyle = '#222';
      const [px, py] = at(0.3, 0.32);
      ctx.beginPath(); ctx.moveTo(px - 10 * z, py); ctx.lineTo(px, py - 6 * z); ctx.lineTo(px + 10 * z, py); ctx.fill();
      if (old) { const [cx, cy] = at(-0.12, -0.12); smoke(cx, cy - 46 * z, 4, true); }
    } else if (key === 'hydro') {
      // 水力發電廠：河邊機房＋藍色引水管
      this.box(ctx, sx, sy, z, 0.28, 0.2, 14, '#c8c2b4', '#b6ae9c', '#948c7a');
      ctx.strokeStyle = '#3f7fd0'; ctx.lineWidth = Math.max(1, 4 * z);
      const [a0, b0] = at(-0.4, -0.3), [a1, b1] = at(-0.1, -0.05);
      ctx.beginPath(); ctx.moveTo(a0, b0 - 22 * z); ctx.lineTo(a1, b1 - 6 * z); ctx.stroke();
      this.box(ctx, ...at(0.1, 0.18), z, 0.03, 0.03, 20, '#999', '#bbb', '#888');
    } else if (key === 'nuclear') {
      // 核能／火力電廠：雙曲線冷卻塔＋機房
      this.box(ctx, ...at(0.18, 0.15), z, 0.18, 0.14, 14, '#e4e4e0', '#d0d0cc', '#aeaeaa');
      for (const u of [-0.2, 0.05]) {
        const [cx, cy] = at(u, -0.18);
        const h = 34 * z;
        ctx.fillStyle = '#d8d8d4';
        ctx.beginPath(); ctx.moveTo(cx - 11 * z, cy); ctx.quadraticCurveTo(cx - 5 * z, cy - h * 0.6, cx - 7 * z, cy - h);
        ctx.lineTo(cx + 7 * z, cy - h); ctx.quadraticCurveTo(cx + 5 * z, cy - h * 0.6, cx + 11 * z, cy); ctx.fill();
        ctx.fillStyle = '#b8b8b4'; ctx.beginPath(); ctx.ellipse(cx, cy - h, 7 * z, 3 * z, 0, 0, Math.PI * 2); ctx.fill();
        smoke(cx, cy - h - 4 * z, 3, false);
      }
    } else if (key === 'modernplant') {
      // 新型電廠：白色機房＋細煙囪＋太陽能板
      this.box(ctx, sx, sy, z, 0.3, 0.22, 12, '#f4f4f0', '#e2e4e6', '#c2c6ca');
      this.box(ctx, ...at(0.2, -0.15), z, 0.025, 0.025, 34, '#e8e8e8', '#d4d4d4', '#b0b0b0');
      ctx.fillStyle = '#2f4a7a';
      for (const v of [-0.12, 0.08]) { const [cx, cy] = at(-0.08, v); ctx.fillRect(cx - 8 * z, cy - 15 * z, 14 * z, 3 * z); }
    } else if (key === 'lighthouse') {
      this.box(ctx, sx, sy, z, 0.2, 0.2, 4, '#bbb', '#aaa', '#999');
      const h = 44 * z;
      ctx.fillStyle = '#f4f4f0';
      ctx.beginPath(); ctx.moveTo(sx - 7 * z, sy - 3 * z); ctx.lineTo(sx + 7 * z, sy - 3 * z); ctx.lineTo(sx + 4 * z, sy - h); ctx.lineTo(sx - 4 * z, sy - h); ctx.fill();
      ctx.fillStyle = '#d0d0c8';
      ctx.beginPath(); ctx.moveTo(sx, sy - 3 * z); ctx.lineTo(sx + 7 * z, sy - 3 * z); ctx.lineTo(sx + 4 * z, sy - h); ctx.lineTo(sx, sy - h); ctx.fill();
      ctx.fillStyle = '#c33';
      ctx.fillRect(sx - 5 * z, sy - h - 8 * z, 10 * z, 8 * z);
      ctx.fillStyle = '#ffe680';
      ctx.fillRect(sx - 3 * z, sy - h - 7 * z, 6 * z, 5 * z);
    } else if (key === 'station') {
      this.box(ctx, sx, sy, z, 0.4, 0.22, 14, null, '#c8794a', '#a8603a');
      this.gable(ctx, sx, sy, z, 0.4, 0.22, 14, 7, '#5a5a62', '#46464e');
      const [tx, ty] = at(0, 0.05);
      this.box(ctx, tx, ty, z, 0.08, 0.08, 34, '#5a5a62', '#d08a5a', '#b06c40');
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(tx - 3 * z, ty - 28 * z, 3.5 * z, 0, Math.PI * 2); ctx.fill();
    } else if (key === 'dam') {
      // 水庫：弧形混凝土壩＋後方藍色水面
      const [bx, by] = at(-0.15, -0.15);
      ctx.fillStyle = '#3f8fd8';
      ctx.beginPath(); ctx.ellipse(bx, by - 2 * z, 26 * z, 12 * z, 0, 0, Math.PI * 2); ctx.fill();
      const [d0x, d0y] = at(-0.45, 0.3), [d1x, d1y] = at(0.35, -0.45);
      ctx.fillStyle = '#c8c4b8';
      ctx.beginPath(); ctx.moveTo(d0x, d0y); ctx.quadraticCurveTo(sx + 6 * z, sy + 6 * z, d1x, d1y); ctx.lineTo(d1x, d1y - 16 * z);
      ctx.quadraticCurveTo(sx + 6 * z, sy - 10 * z, d0x, d0y - 16 * z); ctx.fill();
      ctx.fillStyle = '#e8e4d8';
      ctx.beginPath(); ctx.moveTo(d0x, d0y - 16 * z); ctx.quadraticCurveTo(sx + 6 * z, sy - 10 * z, d1x, d1y - 16 * z); ctx.lineTo(d1x, d1y - 19 * z); ctx.quadraticCurveTo(sx + 6 * z, sy - 13 * z, d0x, d0y - 19 * z); ctx.fill();
      ctx.fillStyle = 'rgba(220,240,255,0.8)';
      ctx.fillRect(sx - 2 * z, sy - 12 * z, 4 * z, 14 * z);
    } else if (key === 'epz') {
      // 加工出口區管理處：辦公樓＋旗桿＋大門
      this.box(ctx, ...at(-0.05, -0.05), z, 0.26, 0.18, 26, '#e8e2d2', '#d8cfba', '#b4ab96');
      this.floorLines(ctx, ...at(-0.05, -0.05), z, 0.26, 0.18, 26, 5, 'rgba(80,90,110,0.5)', 5);
      const [fx, fy] = at(0.32, 0.3);
      ctx.strokeStyle = '#ddd'; ctx.lineWidth = Math.max(1, 1.5 * z);
      ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx, fy - 40 * z); ctx.stroke();
      ctx.fillStyle = '#d33'; ctx.fillRect(fx, fy - 40 * z, 12 * z, 7 * z);
    } else if (key === 'skyscraper') {
      // 摩天大樓：分段收窄的玻璃塔＋尖頂（原創造型）
      let h = 0, u = 0.3;
      const segs = [[0.3, 40], [0.25, 36], [0.21, 32], [0.17, 28], [0.13, 22]];
      for (const [uu, hh] of segs) {
        u = uu;
        this.box(ctx, sx, sy - h * z, z, u, u, hh, '#b8dcef', '#6fa8d0', '#4a80ad');
        this.floorLines(ctx, sx, sy - h * z, z, u, u, hh, 4, 'rgba(255,255,255,0.4)', 3);
        h += hh;
      }
      this.box(ctx, sx, sy - h * z, z, 0.02, 0.02, 30, '#eee', '#ddd', '#bbb');
      ctx.fillStyle = '#ff5050';
      ctx.beginPath(); ctx.arc(sx, sy - (h + 30) * z, 2 * z, 0, Math.PI * 2); ctx.fill();
    }
    // 過時設施：⚠ 標記（照常運作但效果變差）
    if (this.sim.isObsolete(key) && z >= 0.35) {
      ctx.font = `bold ${Math.max(9, Math.round(14 * z))}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(0,0,0,0.6)';
      ctx.strokeText('⚠', sx + 14 * z, sy - 22 * z);
      ctx.fillStyle = '#ffb020';
      ctx.fillText('⚠', sx + 14 * z, sy - 22 * z);
    }
    // 已過了時代的特殊建築：地標標記
    const f = FACILITIES[key];
    if (f?.specialOf && f.specialOf < era && z >= 0.5) {
      ctx.fillStyle = '#ffd34a';
      ctx.font = `${Math.round(11 * z)}px system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('★', sx + 16 * z, sy - 6 * z);
    }
  }

  // ---------- 範圍繪製 ----------
  // 把世界矩形 (wx0,wy0)-(wx1,wy1) 以縮放 z 畫進 ctx（ctx 已平移到該矩形左上 = 0,0）
  drawRegion(ctx, wx0, wy0, wx1, wy1, z, detail) {
    const m = this.map, w = m.w, h = m.h;
    // 等角：x+y = s, x−y = d；s 由 wy、d 由 wx 決定
    const sMin = Math.max(0, Math.floor((wy0 - TH) / (TH / 2)) - 1);
    const sMax = Math.min(w + h - 2, Math.ceil((wy1 + REL_MAX + 240) / (TH / 2)) + 1);
    const dMin = Math.floor(wx0 / (TW / 2)) - 2, dMax = Math.ceil(wx1 / (TW / 2)) + 2;
    let count = 0;
    for (let s = sMin; s <= sMax; s++) {
      const xa = Math.max(0, s - (h - 1), Math.ceil((s + dMin) / 2));
      const xb = Math.min(w - 1, s, Math.floor((s + dMax) / 2));
      for (let x = xa; x <= xb; x++) {
        const y = s - x;
        const i = y * w + x;
        const sx = ((x - y) * TW / 2 - wx0) * z;
        const sy = ((x + y) * TH / 2 + TH / 2 - this.rel[i] - wy0) * z;
        this.drawCell(ctx, i, sx, sy, z, detail);
        count++;
      }
    }
    return count;
  }

  buildOverview() {
    const t0 = performance.now();
    const z = this.overviewZ;
    const W = Math.ceil(this.worldW * z), H = Math.ceil(this.worldH * z);
    const cv = this.overview || makeCanvas(W, H);
    const ctx = cv.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = SEA_DEEP;
    ctx.fillRect(0, 0, W, H);
    this.drawRegion(ctx, -this.ox, 0, this.worldW - this.ox, this.worldH, z, false);
    this.overview = cv;
    this.stats.overviewMs = performance.now() - t0;
  }

  // 只重畫變動的格子附近
  patchOverview(cells) {
    if (!this.overview || !cells.length) return;
    const z = this.overviewZ, m = this.map;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const i of cells) {
      const p = this.cellWorld(i);
      x0 = Math.min(x0, p.x - TW); x1 = Math.max(x1, p.x + TW);
      y0 = Math.min(y0, p.y - 140); y1 = Math.max(y1, p.y + TH);
    }
    void m;
    const ctx = this.overview.getContext('2d');
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.beginPath();
    ctx.rect((x0 + this.ox) * z, y0 * z, (x1 - x0) * z, (y1 - y0) * z);
    ctx.clip();
    ctx.fillStyle = SEA_DEEP;
    ctx.fillRect((x0 + this.ox) * z, y0 * z, (x1 - x0) * z, (y1 - y0) * z);
    ctx.translate((x0 + this.ox) * z, y0 * z);
    this.drawRegion(ctx, x0, y0, x1, y1, z, false);
    ctx.restore();
  }

  buildViewCache() {
    const t0 = performance.now();
    const c = this.cam, z = c.z;
    const mw = this.vw * 1.5, mh = this.vh * 1.5;
    const pw = Math.ceil(mw * this.dpr), ph = Math.ceil(mh * this.dpr);
    let vc = this.viewCache?.canvas;
    if (!vc || vc.width !== pw || vc.height !== ph) vc = makeCanvas(pw, ph);
    const ctx = vc.getContext('2d');
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, pw, ph);
    ctx.scale(this.dpr, this.dpr);
    const wx0 = c.x - mw / 2 / z, wy0 = c.y - mh / 2 / z;
    const n = this.drawRegion(ctx, wx0, wy0, wx0 + mw / z, wy0 + mh / z, z, true);
    this.viewCache = { canvas: vc, z, wx0, wy0, wx1: wx0 + mw / z, wy1: wy0 + mh / z, era: this.sim.s.era };
    this.stats.tilesDrawn = n;
    this.stats.cacheRenders++;
    this.stats.lastCacheMs = performance.now() - t0;
  }

  // 地圖有變動：總覽補畫，細節快取作廢（下一幀重畫）
  applyDirty(cells, all) {
    if (all) { this.overview = null; this.viewCache = null; return; }
    if (cells.length) { this.patchOverview(cells); this.viewCache = null; }
  }

  // ---------- 每一幀 ----------
  frame(now, settling) {
    const ctx = this.ctx, c = this.cam;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.fillStyle = SEA_DEEP;
    ctx.fillRect(0, 0, this.vw, this.vh);
    if (!this.overview) this.buildOverview();
    const useDetail = c.z >= this.detailZoom();
    const vc = this.viewCache;
    const viewX0 = c.x - this.vw / 2 / c.z, viewY0 = c.y - this.vh / 2 / c.z;
    const viewX1 = c.x + this.vw / 2 / c.z, viewY1 = c.y + this.vh / 2 / c.z;
    let drewCache = false;
    if (useDetail) {
      const inside = vc && viewX0 >= vc.wx0 && viewY0 >= vc.wy0 && viewX1 <= vc.wx1 && viewY1 <= vc.wy1;
      const sameZ = vc && Math.abs(vc.z - c.z) < 1e-6;
      // 縮放手勢進行中（settling）先拉伸舊快取，手放開後才重畫
      if (!vc || (!settling && (!inside || !sameZ))) this.buildViewCache();
      const v = this.viewCache;
      if (v) {
        const p = this.worldToScreen(v.wx0, v.wy0);
        ctx.imageSmoothingEnabled = true;
        // 快取還沒蓋住整個畫面時（縮放中），先墊總覽
        if (!(viewX0 >= v.wx0 && viewY0 >= v.wy0 && viewX1 <= v.wx1 && viewY1 <= v.wy1)) this.drawOverview(ctx);
        ctx.drawImage(v.canvas, p.x, p.y, (v.wx1 - v.wx0) * c.z, (v.wy1 - v.wy0) * c.z);
        drewCache = true;
      }
    }
    if (!drewCache) this.drawOverview(ctx);
    this.drawDynamic(ctx, now);
  }

  drawOverview(ctx) {
    const c = this.cam, z = this.overviewZ;
    const p = this.worldToScreen(-this.ox, 0);
    ctx.imageSmoothingEnabled = c.z < z * 1.5;
    ctx.drawImage(this.overview, p.x, p.y, this.overview.width / z * c.z, this.overview.height / z * c.z);
  }

  // ---------- 動態：船、移民、預覽、標籤 ----------
  drawDynamic(ctx, now) {
    const c = this.cam, z = c.z, sim = this.sim, m = this.map;
    // 縣市名稱
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const owned = new Set(sim.s.owned);
    const fs = Math.max(10, Math.min(18, 14 * Math.sqrt(z * 2)));
    ctx.font = `bold ${fs}px system-ui, sans-serif`;
    for (const cty of m.meta.counties) {
      const x = Math.round(cty.cx), y = Math.round(cty.cy);
      const p = this.cellToScreen(x, y);
      if (p.x < -80 || p.y < -40 || p.x > this.vw + 80 || p.y > this.vh + 40) continue;
      const own = owned.has(cty.id);
      const label = own ? cty.name : `🔒 ${cty.name}`;
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.55)';
      ctx.strokeText(label, p.x, p.y);
      ctx.fillStyle = own ? '#fff' : '#ddd';
      ctx.fillText(label, p.x, p.y);
    }
    // 港口標籤
    ctx.font = `${Math.max(10, fs - 3)}px system-ui, sans-serif`;
    for (const port of sim.ownedPorts()) {
      const p = this.cellToScreen(port.x, port.y);
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      const tw = ctx.measureText(`⚓${port.name}`).width + 8;
      ctx.fillRect(p.x - tw / 2, p.y + 6, tw, fs);
      ctx.fillStyle = '#fff';
      ctx.fillText(`⚓${port.name}`, p.x, p.y + 6 + fs / 2);
    }
    // 船
    for (const ship of sim.s.ships) this.drawShip(ctx, ship, now);
    // 移民
    this.drawWalkers(ctx, now);
    // 路上的車、火車、行人
    const dt = (now - (this._agentT || now)) / 1000;
    this._agentT = now;
    this.agents.update(dt, now);
    this.agents.draw(ctx, now);
    // 煙
    this.drawEffects(ctx, now);
    // 預覽
    if (this.preview) this.drawPreview(ctx);
    else if (this.hover >= 0) {
      const p = this.cellWorld(this.hover);
      const s = this.worldToScreen(p.x, p.y);
      this.diamond(ctx, s.x, s.y, z, 'rgba(255,255,255,0.18)', 'rgba(255,255,255,0.8)');
    }
  }

  diamond(ctx, sx, sy, z, fill, stroke) {
    const hw = TW / 2 * z, hh = TH / 2 * z;
    ctx.beginPath();
    ctx.moveTo(sx, sy - hh); ctx.lineTo(sx + hw, sy); ctx.lineTo(sx, sy + hh); ctx.lineTo(sx - hw, sy); ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
  }

  drawPreview(ctx) {
    const pv = this.preview, z = this.cam.z;
    const ok = !pv.reason;
    const fill = ok ? 'rgba(80,220,120,0.35)' : 'rgba(240,60,60,0.35)';
    const stroke = ok ? 'rgba(160,255,190,0.9)' : 'rgba(255,140,140,0.9)';
    const cells = pv.allCells || [];
    const valid = new Set(pv.cells.map((c) => c.i));
    for (const i of cells) {
      const p = this.cellWorld(i);
      const s = this.worldToScreen(p.x, p.y);
      if (s.x < -60 || s.y < -60 || s.x > this.vw + 60 || s.y > this.vh + 60) continue;
      this.diamond(ctx, s.x, s.y, z, valid.has(i) ? fill : 'rgba(120,120,120,0.25)', valid.has(i) ? stroke : null);
    }
  }

  // 船的航線：從外海直線開到港口旁的海格
  shipRoute(portName) {
    this._routes = this._routes || new Map();
    if (this._routes.has(portName)) return this._routes.get(portName);
    const m = this.map;
    const port = m.ports.find((p) => p.name === portName);
    let vx = 0, vy = 0, dock = null;
    for (let dy = -6; dy <= 6; dy++) for (let dx = -6; dx <= 6; dx++) {
      const x = port.x + dx, y = port.y + dy;
      if (x < 0 || y < 0 || x >= m.w || y >= m.h) continue;
      if (m.terrain[y * m.w + x] === TERRAIN.SEA) {
        const d = Math.hypot(dx, dy) || 1;
        vx += dx / d; vy += dy / d;
        if (!dock || Math.abs(dx) + Math.abs(dy) < dock.d) dock = { x, y, d: Math.abs(dx) + Math.abs(dy) };
      }
    }
    const L = Math.hypot(vx, vy) || 1;
    const route = { from: { x: port.x + (vx / L) * 40, y: port.y + (vy / L) * 40 }, to: dock || { x: port.x, y: port.y } };
    this._routes.set(portName, route);
    return route;
  }

  drawShip(ctx, ship, now) {
    const r = this.shipRoute(ship.port);
    let t = ship.phase === 'in' ? ship.t : ship.phase === 'dock' ? 1 : 1 - ship.t;
    t = Math.min(1, Math.max(0, t));
    const e = 1 - (1 - t) * (1 - t);
    const gx = r.from.x + (r.to.x - r.from.x) * e, gy = r.from.y + (r.to.y - r.from.y) * e;
    const wx = (gx - gy) * TW / 2, wy = (gx + gy) * TH / 2 + TH / 2;
    const s = this.worldToScreen(wx, wy);
    if (s.x < -80 || s.y < -80 || s.x > this.vw + 80 || s.y > this.vh + 80) return;
    const z = Math.max(0.35, this.cam.z);
    const bob = Math.sin(now / 400 + ship.id) * 1.5 * z;
    const dir = (r.to.x - r.from.x) - (r.to.y - r.from.y) >= 0 ? 1 : -1; // 往右或往左
    const flip = ship.phase === 'out' ? -dir : dir;
    ctx.save();
    ctx.translate(s.x, s.y + bob);
    ctx.scale(flip * z, z);
    // 船身
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.beginPath(); ctx.ellipse(-2, 4, 30, 5, 0, 0, Math.PI * 2); ctx.fill();
    if (ship.era <= 1) {
      // 帆船
      ctx.fillStyle = '#6b4226';
      ctx.beginPath(); ctx.moveTo(-26, -4); ctx.lineTo(26, -6); ctx.lineTo(18, 4); ctx.lineTo(-20, 4); ctx.fill();
      ctx.fillStyle = '#7a4a2a'; ctx.fillRect(-1, -40, 3, 36);
      ctx.fillStyle = '#f2ead6';
      ctx.beginPath(); ctx.moveTo(2, -38); ctx.quadraticCurveTo(22, -24, 2, -8); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-2, -34); ctx.quadraticCurveTo(-20, -20, -2, -8); ctx.fill();
      ctx.fillStyle = '#c33'; ctx.fillRect(1, -46, 8, 5);
    } else if (ship.era === 2) {
      // 蒸汽船
      ctx.fillStyle = '#2b2b30';
      ctx.beginPath(); ctx.moveTo(-32, -6); ctx.lineTo(32, -8); ctx.lineTo(24, 4); ctx.lineTo(-26, 4); ctx.fill();
      ctx.fillStyle = '#e8e2d4'; ctx.fillRect(-16, -16, 26, 10);
      ctx.fillStyle = '#c4382a'; ctx.fillRect(-4, -30, 8, 15);
      ctx.fillStyle = '#222'; ctx.fillRect(-4, -32, 8, 3);
      for (let k = 0; k < 3; k++) {
        const ph = ((now / 900 + k / 3) % 1);
        ctx.fillStyle = `rgba(90,90,90,${0.5 * (1 - ph)})`;
        ctx.beginPath(); ctx.arc(-ph * 18, -36 - ph * 18, 4 + ph * 6, 0, Math.PI * 2); ctx.fill();
      }
    } else if (ship.era === 3) {
      // 貨輪：紅色船底、黑色船身、船尾白色駕駛艙、吊桿
      ctx.fillStyle = '#9a2a22';
      ctx.beginPath(); ctx.moveTo(-36, 0); ctx.lineTo(38, -1); ctx.lineTo(30, 5); ctx.lineTo(-30, 5); ctx.fill();
      ctx.fillStyle = '#26282c';
      ctx.beginPath(); ctx.moveTo(-38, -8); ctx.lineTo(40, -10); ctx.lineTo(38, 0); ctx.lineTo(-36, 0); ctx.fill();
      ctx.fillStyle = '#f0ece4'; ctx.fillRect(-32, -22, 14, 13);
      ctx.fillStyle = '#d8a040'; ctx.fillRect(-28, -30, 6, 8);
      ctx.strokeStyle = '#d8a040'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(4, -10); ctx.lineTo(4, -30); ctx.lineTo(18, -14); ctx.moveTo(24, -10); ctx.lineTo(24, -26); ctx.stroke();
    } else {
      // 貨櫃輪（現代更長）：彩色貨櫃
      const L = ship.era >= 5 ? 1.25 : 1;
      ctx.save(); ctx.scale(L, 1);
      ctx.fillStyle = '#a02a24';
      ctx.beginPath(); ctx.moveTo(-40, 0); ctx.lineTo(42, -1); ctx.lineTo(34, 6); ctx.lineTo(-34, 6); ctx.fill();
      ctx.fillStyle = ship.era >= 5 ? '#1f3f6a' : '#2c3036';
      ctx.beginPath(); ctx.moveTo(-42, -8); ctx.lineTo(44, -10); ctx.lineTo(42, 0); ctx.lineTo(-40, 0); ctx.fill();
      const cols = ['#d04a3a', '#2f6fd0', '#e0a020', '#3a9a5a', '#8a5ac0'];
      for (let r = 0; r < 2; r++) for (let c = 0; c < 8; c++) { ctx.fillStyle = cols[(c * 3 + r * 2 + ship.id) % cols.length]; ctx.fillRect(-26 + c * 8, -16 - r * 6, 7.5, 5.5); }
      ctx.fillStyle = '#f2f2ee'; ctx.fillRect(-38, -26, 10, 18);
      ctx.restore();
    }
    ctx.restore();
    if (ship.phase === 'dock' && ship.unloaded != null) {
      ctx.font = 'bold 13px system-ui, sans-serif';
      ctx.fillStyle = '#fff';
      ctx.strokeStyle = 'rgba(0,0,0,0.6)';
      ctx.lineWidth = 3;
      const txt = `+${ship.unloaded} 人`;
      ctx.strokeText(txt, s.x, s.y - 52 * z);
      ctx.fillText(txt, s.x, s.y - 52 * z);
    }
  }

  // 移民沿著道路從港口走到住宅
  addWalkers(evt) {
    const sim = this.sim, m = this.map, g = sim.s.grid, w = m.w;
    const port = m.ports.find((p) => p.name === evt.port);
    if (!port || !evt.placed?.length) return;
    const start = port.y * w + port.x;
    // BFS 沿路（父節點）
    const prev = new Map([[start, -1]]);
    const q = [start];
    const targets = new Map(evt.placed.slice(0, 10).map(([i, k]) => [i, k]));
    const goalsLeft = new Set(targets.keys());
    while (q.length && goalsLeft.size) {
      const i = q.shift();
      for (const j of sim.neighbors4(i)) {
        if (prev.has(j)) continue;
        if (goalsLeft.has(j)) { prev.set(j, i); goalsLeft.delete(j); continue; }
        if (!(g.road[j] || g.bld[j] === BLD.PORT)) continue;
        prev.set(j, i);
        q.push(j);
      }
    }
    const t0 = performance.now();
    let k = 0;
    for (const [ti, cnt] of targets) {
      if (!prev.has(ti)) continue;
      const path = [];
      for (let c = ti; c !== -1; c = prev.get(c)) path.push(c);
      path.reverse();
      if (this.walkers.length > 60) break;
      this.walkers.push({ path, t0: t0 + k * 250, speed: 6, count: Math.min(4, Math.ceil(cnt / 10)) });
      k++;
    }
  }

  drawWalkers(ctx, now) {
    const z = this.cam.z;
    this.walkers = this.walkers.filter((wk) => (now - wk.t0) / 1000 * wk.speed < wk.path.length + 1);
    for (const wk of this.walkers) {
      const prog = (now - wk.t0) / 1000 * wk.speed;
      if (prog < 0) continue;
      for (let p = 0; p < wk.count; p++) {
        const f = Math.max(0, prog - p * 0.35);
        const k = Math.min(wk.path.length - 1, Math.floor(f));
        const k2 = Math.min(wk.path.length - 1, k + 1);
        const a = this.cellWorld(wk.path[k]), b = this.cellWorld(wk.path[k2]);
        const tt = f - Math.floor(f);
        const s = this.worldToScreen(a.x + (b.x - a.x) * tt, a.y + (b.y - a.y) * tt);
        const r = Math.max(1.5, 3.2 * z);
        ctx.fillStyle = ['#ffd27a', '#ff9d6a', '#fff2c0', '#ffc0d0'][p % 4];
        ctx.beginPath(); ctx.arc(s.x + (p - 1) * r, s.y - r * 2, r, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#4a3a2a';
        ctx.fillRect(s.x + (p - 1) * r - r * 0.6, s.y - r, r * 1.2, r * 1.6);
      }
    }
  }

  addEffect(i, text, color = '#fff') {
    this.effects.push({ i, text, color, t0: performance.now() });
  }
  drawEffects(ctx, now) {
    this.effects = this.effects.filter((e) => now - e.t0 < 1500);
    ctx.font = 'bold 14px system-ui, sans-serif';
    ctx.textAlign = 'center';
    for (const e of this.effects) {
      const p = this.cellWorld(e.i);
      const s = this.worldToScreen(p.x, p.y);
      const k = (now - e.t0) / 1500;
      ctx.globalAlpha = 1 - k;
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.6)';
      ctx.strokeText(e.text, s.x, s.y - 20 - k * 30);
      ctx.fillStyle = e.color;
      ctx.fillText(e.text, s.x, s.y - 20 - k * 30);
      ctx.globalAlpha = 1;
    }
  }
}

function makeCanvas(w, h) {
  if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(w, h);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

export { ERAS };
