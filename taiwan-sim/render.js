// 斜角 2.5D（等角）繪圖。全部用程式畫，沒有外部圖檔。
// 效能：靜態畫面（地形＋建築）畫進快取畫布，只有拖曳/縮放超出範圍或地圖變動時才重畫；
// 縮很小時改畫整張地圖的總覽快取（變動時只重畫變動的區域）。每一幀只另外畫船、移民、預覽。
import { TERRAIN, ERAS } from './config.js';
import { BLD, ZONE } from './sim.js';

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
    if (this.overlay) {
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
    if (g.road[i] || g.bld[i] === BLD.PORT) this.drawRoad(ctx, i, sx, sy, z);
    // 管線、電線
    if (this.overlay === 'water' && g.pipe[i]) this.drawLine(ctx, i, sx, sy, z, 'pipe', '#1f6fe0', 0.16);
    if (g.wire[i] && (this.overlay === 'power' || z >= 0.35)) this.drawLine(ctx, i, sx, sy, z, 'wire', this.overlay === 'power' ? '#e0a000' : 'rgba(40,40,40,0.7)', this.overlay === 'power' ? 0.14 : 0.04, true);
    // 建築
    if (g.bld[i]) this.drawBuilding(ctx, i, sx, sy, z, detail);
    else if (zt && g.level[i]) this.drawZoneBuildings(ctx, i, sx, sy, z, detail);
  }

  drawRoad(ctx, i, sx, sy, z) {
    const g = this.sim.s.grid, m = this.map, w = m.w, x = i % w, y = (i / w) | 0;
    const era = this.sim.s.era;
    const bridge = g.road[i] === 2;
    const col = bridge ? (era >= 2 ? '#a8a49c' : '#8b5a2b') : era >= 2 ? '#a39e95' : '#b8956a';
    const isNode = (j) => g.road[j] || g.bld[j] === BLD.PORT;
    const dirs = [];
    if (x < w - 1 && isNode(i + 1)) dirs.push([TW / 4, TH / 4]);
    if (x > 0 && isNode(i - 1)) dirs.push([-TW / 4, -TH / 4]);
    if (y < m.h - 1 && isNode(i + w)) dirs.push([-TW / 4, TH / 4]);
    if (y > 0 && isNode(i - w)) dirs.push([TW / 4, -TH / 4]);
    ctx.lineCap = 'round';
    const lw = Math.max(1.2, (bridge ? 12 : 10) * z);
    if (bridge && z >= 0.3) {
      ctx.strokeStyle = 'rgba(40,25,10,0.7)';
      ctx.lineWidth = lw + 3 * z;
      ctx.beginPath();
      for (const [dx, dy] of dirs) { ctx.moveTo(sx, sy); ctx.lineTo(sx + dx * z * 2, sy + dy * z * 2); }
      ctx.stroke();
    }
    ctx.strokeStyle = col;
    ctx.lineWidth = lw;
    ctx.beginPath();
    if (!dirs.length) { ctx.moveTo(sx - 0.1, sy); ctx.lineTo(sx + 0.1, sy); }
    for (const [dx, dy] of dirs) { ctx.moveTo(sx, sy); ctx.lineTo(sx + dx * z * 2, sy + dy * z * 2); }
    ctx.stroke();
    if (era >= 2 && !bridge && z >= 0.5) {
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = Math.max(0.5, 1 * z);
      ctx.setLineDash([3 * z, 4 * z]);
      ctx.beginPath();
      for (const [dx, dy] of dirs) { ctx.moveTo(sx, sy); ctx.lineTo(sx + dx * z * 2, sy + dy * z * 2); }
      ctx.stroke();
      ctx.setLineDash([]);
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

  drawZoneBuildings(ctx, i, sx, sy, z, detail) {
    const g = this.sim.s.grid;
    const zt = g.zone[i], lv = g.level[i];
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    if (!detail) {
      // 簡化：一個方塊，高度看等級
      const col = zt === ZONE.R ? ['#e9d8b4', '#b9a57f', '#9a8866'] : zt === ZONE.C ? ['#c7dcf5', '#86a6cc', '#6b88ad'] : ['#e8d48a', '#b39c50', '#94803f'];
      this.box(ctx, sx, sy, z, 0.32, 0.32, 4 + lv * 5, ...col);
      return;
    }
    // 依等級排列小建築
    const slots = lv <= 1 ? [[-0.22, -0.18], [0.2, 0.2]] : lv === 2 ? [[-0.25, -0.25], [0.25, -0.22], [-0.22, 0.25], [0.25, 0.25]]
      : [[-0.26, -0.26], [0.26, -0.26], [-0.26, 0.26], [0.26, 0.26]];
    const modern = lv >= 3;
    const fullness = zt === ZONE.R ? Math.min(1, g.pop[i] / Math.max(1, this.sim.capAt(i))) : 1;
    const shown = zt === ZONE.R ? Math.max(1, Math.ceil(slots.length * Math.max(0.25, fullness))) : slots.length;
    for (let k = 0; k < shown; k++) {
      const [a, b] = slots[k];
      const jx = (hash(i, k) - 0.5) * 0.08, jy = (hash(i, k + 7) - 0.5) * 0.08;
      const cx = sx + (a + jx) * ex[0] + (b + jy) * ey[0];
      const cy = sy + (a + jx) * ex[1] + (b + jy) * ey[1];
      const r = hash(i, k + 3);
      if (zt === ZONE.R) {
        if (!modern) {
          const wall = r < 0.5 ? ['#efe0bf', '#cdb98f', '#b09c74'] : ['#e6d2a8', '#c4ad7f', '#a68f64'];
          this.box(ctx, cx, cy, z, 0.13, 0.1, 7, null, wall[1], wall[2]);
          const roof = r < 0.6 ? ['#b5523b', '#8e3c2a'] : ['#c9a45c', '#a3833f'];
          this.gable(ctx, cx, cy, z, 0.13, 0.1, 7, 6, roof[0], roof[1]);
        } else {
          const floors = lv === 3 ? 2 : 3;
          this.box(ctx, cx, cy, z, 0.16, 0.14, 7 * floors, null, '#b5653e', '#96502f');
          this.gable(ctx, cx, cy, z, 0.16, 0.14, 7 * floors, 5, '#6d6a66', '#57544f');
        }
      } else if (zt === ZONE.C) {
        if (!modern) {
          // 市集攤位：彩色遮棚
          this.box(ctx, cx, cy, z, 0.12, 0.1, 5, null, '#c9b48a', '#a8946c');
          const aw = r < 0.33 ? ['#d84a3a', '#a83426'] : r < 0.66 ? ['#3a7fd8', '#2a5fa8'] : ['#e0b030', '#b08820'];
          this.gable(ctx, cx, cy, z, 0.14, 0.12, 5, 4, aw[0], aw[1]);
        } else {
          const h = lv === 3 ? 16 : 24;
          this.box(ctx, cx, cy, z, 0.17, 0.15, h, '#e8e4dc', '#d6d0c4', '#b4ad9f');
          // 招牌
          const { P } = { P: (u, v, up) => [cx + u * ex[0] + v * ey[0], cy + u * ex[1] + v * ey[1] - up * z] };
          ctx.fillStyle = r < 0.5 ? '#2f6fd0' : '#d04a2f';
          const s1 = P(-0.1, 0.15, h * 0.55), s2 = P(0.1, 0.15, h * 0.55);
          ctx.fillRect(Math.min(s1[0], s2[0]), s1[1] - 3 * z, Math.abs(s2[0] - s1[0]) + 1, 4 * z);
        }
      } else if (zt === ZONE.I) {
        if (!modern) {
          this.box(ctx, cx, cy, z, 0.15, 0.12, 6, null, '#a0784f', '#82603d');
          this.gable(ctx, cx, cy, z, 0.15, 0.12, 6, 4, '#5e5550', '#4a423e');
          if (k === 0) this.box(ctx, cx + 0.08 * ex[0], cy - 0.02 * ey[1], z, 0.025, 0.025, 14, '#555', '#6b5a4a', '#55473a');
        } else {
          this.box(ctx, cx, cy, z, 0.18, 0.16, 12, null, '#9a9890', '#7b7972');
          // 鋸齒屋頂
          for (let s = -1; s <= 1; s++) this.gable(ctx, cx + s * 0.11 * ey[0], cy + s * 0.11 * ey[1], z, 0.18, 0.05, 12, 4, '#6a6f78', '#555a62');
          if (k === 0) this.box(ctx, cx + 0.12 * ex[0], cy, z, 0.03, 0.03, 30, '#7a3a2a', '#a04c35', '#843e2b');
        }
      }
    }
  }

  drawBuilding(ctx, i, sx, sy, z, detail) {
    const b = this.sim.s.grid.bld[i];
    const era = this.sim.s.era;
    if (!detail) {
      const col = { [BLD.PORT]: '#7a5a3a', [BLD.WELL]: '#5a8ad8', [BLD.WATERWORKS]: '#3a6ad8', [BLD.COAL]: '#444', [BLD.LIGHTHOUSE]: '#fff', [BLD.STATION]: '#c84' }[b];
      this.box(ctx, sx, sy, z, 0.3, 0.3, b === BLD.LIGHTHOUSE ? 30 : 10, col, col, col);
      return;
    }
    const ex = [TW / 2 * z, TH / 2 * z], ey = [-TW / 2 * z, TH / 2 * z];
    const at = (u, v) => [sx + u * ex[0] + v * ey[0], sy + u * ex[1] + v * ey[1]];
    if (b === BLD.PORT) {
      // 碼頭 + 倉庫 + （日據時代起）吊車
      this.box(ctx, sx, sy, z, 0.42, 0.42, 2, '#8a6a48', '#6e5238', '#5a4330');
      const [wx, wy] = at(-0.15, -0.1);
      this.box(ctx, wx, wy, z, 0.2, 0.15, 9, null, '#c8b48a', '#a8946a');
      this.gable(ctx, wx, wy, z, 0.2, 0.15, 9, 5, '#7b4a32', '#5e3826');
      if (era >= 2) {
        const [cx, cy] = at(0.2, 0.2);
        this.box(ctx, cx, cy, z, 0.03, 0.03, 26, '#c33', '#d44', '#a22');
        ctx.strokeStyle = '#c33'; ctx.lineWidth = Math.max(1, 2 * z);
        ctx.beginPath(); ctx.moveTo(cx, cy - 26 * z); ctx.lineTo(cx + 18 * z, cy - 20 * z); ctx.stroke();
      }
    } else if (b === BLD.WELL) {
      ctx.fillStyle = '#8a8a8a';
      ctx.beginPath(); ctx.ellipse(sx, sy, 9 * z, 4.5 * z, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#2a5a9a';
      ctx.beginPath(); ctx.ellipse(sx, sy - 1 * z, 6 * z, 3 * z, 0, 0, Math.PI * 2); ctx.fill();
      this.box(ctx, sx - 7 * z, sy, z, 0.015, 0.015, 12, null, '#6b4a2a', '#5a3d22');
      this.box(ctx, sx + 7 * z, sy, z, 0.015, 0.015, 12, null, '#6b4a2a', '#5a3d22');
      this.gable(ctx, sx, sy, z, 0.16, 0.08, 12, 4, '#a0522d', '#7a3e22');
    } else if (b === BLD.WATERWORKS) {
      this.box(ctx, ...at(-0.15, 0.1), z, 0.2, 0.14, 10, '#ddd', '#c8c4bc', '#a8a49c');
      for (const [u, v] of [[0.22, -0.18], [0.22, 0.18]]) {
        const [cx, cy] = at(u, v);
        ctx.fillStyle = '#2a64b8';
        ctx.fillRect(cx - 8 * z, cy - 10 * z, 16 * z, 10 * z);
        ctx.fillStyle = '#4a8ae0';
        ctx.beginPath(); ctx.ellipse(cx, cy - 10 * z, 8 * z, 4 * z, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#1e4a8a';
        ctx.beginPath(); ctx.ellipse(cx, cy, 8 * z, 4 * z, 0, 0, Math.PI); ctx.fill();
      }
    } else if (b === BLD.COAL) {
      this.box(ctx, sx, sy, z, 0.32, 0.25, 16, '#666', '#7a5040', '#5f3e32');
      for (const u of [-0.12, 0.12]) { const [cx, cy] = at(u, -0.12); this.box(ctx, cx, cy - 16 * z, z, 0.04, 0.04, 26, '#333', '#9a5a40', '#7a4632'); }
      ctx.fillStyle = '#222';
      const [px, py] = at(0.3, 0.32);
      ctx.beginPath(); ctx.moveTo(px - 10 * z, py); ctx.lineTo(px, py - 6 * z); ctx.lineTo(px + 10 * z, py); ctx.fill();
    } else if (b === BLD.LIGHTHOUSE) {
      this.box(ctx, sx, sy, z, 0.2, 0.2, 4, '#bbb', '#aaa', '#999');
      // 白色塔身（上窄下寬）
      const h = 44 * z;
      ctx.fillStyle = '#f4f4f0';
      ctx.beginPath(); ctx.moveTo(sx - 7 * z, sy - 3 * z); ctx.lineTo(sx + 7 * z, sy - 3 * z); ctx.lineTo(sx + 4 * z, sy - h); ctx.lineTo(sx - 4 * z, sy - h); ctx.fill();
      ctx.fillStyle = '#d0d0c8';
      ctx.beginPath(); ctx.moveTo(sx, sy - 3 * z); ctx.lineTo(sx + 7 * z, sy - 3 * z); ctx.lineTo(sx + 4 * z, sy - h); ctx.lineTo(sx, sy - h); ctx.fill();
      ctx.fillStyle = '#c33';
      ctx.fillRect(sx - 5 * z, sy - h - 8 * z, 10 * z, 8 * z);
      ctx.fillStyle = '#ffe680';
      ctx.fillRect(sx - 3 * z, sy - h - 7 * z, 6 * z, 5 * z);
    } else if (b === BLD.STATION) {
      this.box(ctx, sx, sy, z, 0.4, 0.22, 14, null, '#c8794a', '#a8603a');
      this.gable(ctx, sx, sy, z, 0.4, 0.22, 14, 7, '#5a5a62', '#46464e');
      const [tx, ty] = at(0, 0.05);
      this.box(ctx, tx, ty, z, 0.08, 0.08, 34, '#5a5a62', '#d08a5a', '#b06c40');
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(tx - 3 * z, ty - 28 * z, 3.5 * z, 0, Math.PI * 2); ctx.fill();
    }
  }

  // ---------- 範圍繪製 ----------
  // 把世界矩形 (wx0,wy0)-(wx1,wy1) 以縮放 z 畫進 ctx（ctx 已平移到該矩形左上 = 0,0）
  drawRegion(ctx, wx0, wy0, wx1, wy1, z, detail) {
    const m = this.map, w = m.w, h = m.h;
    // 等角：x+y = s, x−y = d；s 由 wy、d 由 wx 決定
    const sMin = Math.max(0, Math.floor((wy0 - TH) / (TH / 2)) - 1);
    const sMax = Math.min(w + h - 2, Math.ceil((wy1 + REL_MAX + 90) / (TH / 2)) + 1);
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
      y0 = Math.min(y0, p.y - 80); y1 = Math.max(y1, p.y + TH);
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
      ctx.fillStyle = '#6b4226';
      ctx.beginPath(); ctx.moveTo(-26, -4); ctx.lineTo(26, -6); ctx.lineTo(18, 4); ctx.lineTo(-20, 4); ctx.fill();
      ctx.fillStyle = '#7a4a2a'; ctx.fillRect(-1, -40, 3, 36);
      ctx.fillStyle = '#f2ead6';
      ctx.beginPath(); ctx.moveTo(2, -38); ctx.quadraticCurveTo(22, -24, 2, -8); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-2, -34); ctx.quadraticCurveTo(-20, -20, -2, -8); ctx.fill();
      ctx.fillStyle = '#c33'; ctx.fillRect(1, -46, 8, 5);
    } else {
      ctx.fillStyle = '#2b2b30';
      ctx.beginPath(); ctx.moveTo(-32, -6); ctx.lineTo(32, -8); ctx.lineTo(24, 4); ctx.lineTo(-26, 4); ctx.fill();
      ctx.fillStyle = '#e8e2d4'; ctx.fillRect(-16, -16, 26, 10);
      ctx.fillStyle = '#c4382a'; ctx.fillRect(-4, -30, 8, 15);
      ctx.fillStyle = '#222'; ctx.fillRect(-4, -32, 8, 3);
      // 煙
      for (let k = 0; k < 3; k++) {
        const ph = ((now / 900 + k / 3) % 1);
        ctx.fillStyle = `rgba(90,90,90,${0.5 * (1 - ph)})`;
        ctx.beginPath(); ctx.arc(-ph * 18, -36 - ph * 18, 4 + ph * 6, 0, Math.PI * 2); ctx.fill();
      }
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
