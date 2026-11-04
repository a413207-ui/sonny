// 路上的交通工具、火車、行人：只是畫面效果（不影響模擬），用模擬的車流量決定多寡。
// 只在放大到看得到細節時、畫面範圍內出現；數量上限在 config.js AGENTS。全部程式原創繪製。
import { AGENTS, TRAFFIC } from './config.js';
import { TW, TH } from './render.js';

const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const ELEV_LIFT = 24, ELEV_LIFT_RAIL = 38;
// 各時代的車種（weight 越大越常見）；speed 是相對速度
const VEHICLES = {
  1: [['oxcart', 3, 0.35], ['rickshaw', 2, 0.6]],
  2: [['rickshaw', 3, 0.6], ['bicycle', 3, 0.7], ['oldcar', 1, 1]],
  3: [['bicycle', 3, 0.7], ['scooter', 3, 1], ['oldcar', 2, 1], ['bus', 1, 0.8]],
  4: [['scooter', 4, 1.1], ['car', 4, 1.1], ['bus', 1, 0.85], ['truck', 1, 0.8]],
  5: [['scooter', 4, 1.1], ['car', 5, 1.15], ['bus', 1, 0.9], ['truck', 1, 0.85]],
};
const CAR_COLORS = ['#d84a3a', '#2f6fd0', '#f0f0ea', '#e0b030', '#3a9a5a', '#30343a', '#8a5ac0', '#c8c8c0'];

function pick(list, rnd) {
  const tot = list.reduce((a, b) => a + b[1], 0);
  let r = rnd * tot;
  for (const it of list) { r -= it[1]; if (r <= 0) return it; }
  return list[0];
}

export class Agents {
  constructor(renderer) {
    this.r = renderer;
    this.enabled = true;
    this.cars = []; this.trains = []; this.peds = [];
    this.spawnAcc = 0;
    this.seq = 0;
  }
  get sim() { return this.r.sim; }
  limits() {
    const k = this.r.isMobile ? 'mobile' : 'desktop';
    return { cars: AGENTS.cars[k], trains: AGENTS.trains[k], peds: AGENTS.peds[k] };
  }
  clear() { this.cars.length = 0; this.trains.length = 0; this.peds.length = 0; }
  count() { return { cars: this.cars.length, trains: this.trains.length, peds: this.peds.length }; }

  // ---------- 道路圖 ----------
  // 這格（在某一層）往哪些方向可以走：level 'g' 地面、'd' 高架橋面
  roadNext(i, level) {
    const g = this.sim.s.grid, m = this.sim.map, w = m.w;
    const out = [];
    const x = i % w, y = (i / w) | 0;
    for (const [dx, dy] of DIRS) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= m.h) continue;
      const j = ny * w + nx;
      if (!g.road[j] || !this.sim.connected[j]) continue;
      const deck = !!g.elev[j], ground = g.elev[j] !== 1;
      if (level === 'd') { if (deck) out.push([j, 'd', dx, dy]); else if (g.elev[i] === 1) out.push([j, 'g', dx, dy]); } // 橋面只在純高架格接引道
      else if (ground) out.push([j, 'g', dx, dy]);
      else if (!g.elev[i] || g.elev[i] === 1) out.push([j, 'd', dx, dy]);                                           // 地面接上高架引道
    }
    return out;
  }
  railNext(i) {
    const g = this.sim.s.grid, m = this.sim.map, w = m.w;
    const out = [];
    const x = i % w, y = (i / w) | 0;
    for (const [dx, dy] of DIRS) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= m.h) continue;
      const j = ny * w + nx;
      if (g.rail[j]) out.push([j, dx, dy]);
    }
    return out;
  }
  isStop(i) {
    const g = this.sim.s.grid;
    return this.sim.neighbors4(i).some((j) => g.bld[j] === 15 || g.bld[j] === 6); // 車站、火車站
  }
  // 選下一格：盡量直走、不回頭（死路才回頭）
  choose(opts, dx, dy, rnd) {
    const fwd = opts.filter((o) => !(o[o.length - 2] === -dx && o[o.length - 1] === -dy));
    const list = fwd.length ? fwd : opts;
    const straight = list.find((o) => o[o.length - 2] === dx && o[o.length - 1] === dy);
    if (straight && rnd < 0.7) return straight;
    return list[Math.floor(rnd * list.length) % list.length];
  }

  // ---------- 產生 ----------
  inView(i, margin = 60) {
    const p = this.r.cellWorld(i);
    const s = this.r.worldToScreen(p.x, p.y);
    return s.x > -margin && s.y > -margin && s.x < this.r.vw + margin && s.y < this.r.vh + margin;
  }
  // 每秒掃一次畫面內的道路、鐵路格（取樣），產生時從這裡挑
  scanView(now) {
    if (this._scanT && now - this._scanT < 1000 && this._roads) return;
    this._scanT = now;
    const r = this.r, sim = this.sim, g = sim.s.grid;
    const roads = new Set(), rails = new Set();
    const step = 20;
    for (let y = 70; y < r.vh - 50; y += step) for (let x = 0; x < r.vw; x += step) {
      const i = r.screenToCell(x, y).i;
      if (g.road[i] && sim.connected[i]) roads.add(i);
      if (g.rail[i] && sim.railActive[i]) rails.add(i);
    }
    this._roads = [...roads];
    this._rails = [...rails];
  }
  trySpawn(lim) {
    const sim = this.sim, g = sim.s.grid;
    if (!this._roads) this.scanView(performance.now());
    const era = sim.s.era;
    const rails = this._rails, roads = this._roads;
    const wantTrain = rails.length && this.trains.length < lim.trains && Math.random() < 0.15;
    const i = wantTrain ? rails[Math.floor(Math.random() * rails.length)] : roads.length ? roads[Math.floor(Math.random() * roads.length)] : -1;
    if (i < 0) return;
    if (wantTrain) {
      const opts = this.railNext(i);
      if (opts.length && !this.trains.some((t) => t.path.includes(i))) {
        const o = opts[Math.floor(Math.random() * opts.length)];
        this.trains.push({ id: ++this.seq, path: [i, o[0]], t: 0, dx: o[1], dy: o[2], stop: 0, stopped: -1, era });
      }
      return;
    }
    if (!g.road[i] || !sim.connected[i]) return;
    const cong = sim.cong[i] || 0;
    const share = TRAFFIC.carShare[era] ?? 1;
    // 行人：住宅、商業區旁的路
    if (this.peds.length < lim.peds && Math.random() < 0.5) {
      const nearZone = sim.neighbors4(i).some((j) => (g.zone[j] === 1 || g.zone[j] === 2) && g.level[j]);
      if (nearZone && g.elev[i] !== 1) {
        const opts = this.roadNext(i, 'g');
        if (opts.length) {
          const o = opts[Math.floor(Math.random() * opts.length)];
          this.peds.push({ id: ++this.seq, a: i, b: o[0], t: Math.random(), dx: o[2], dy: o[3], side: Math.random() < 0.5 ? 1 : -1, life: 8 + Math.random() * 10, col: CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)] });
        }
      }
      return;
    }
    if (this.cars.length >= lim.cars) return;
    // 車流越多越常出現車（壅塞的路車多）
    if (Math.random() > Math.min(1, (g.elev[i] ? 0.6 : 0.15) + cong * 0.9) * (0.4 + 0.6 * share)) return; // 高架、高速公路上也常有車
    const level = g.elev[i] === 1 ? 'd' : g.elev[i] === 2 && Math.random() < 0.5 ? 'd' : 'g';
    const opts = this.roadNext(i, level);
    if (!opts.length) return;
    const o = opts[Math.floor(Math.random() * opts.length)];
    const [kind, , speed] = pick(VEHICLES[Math.min(5, Math.max(1, era))], Math.random());
    this.cars.push({ id: ++this.seq, a: i, b: o[0], la: level, lb: o[1], t: 0, dx: o[2], dy: o[3], kind, speed, col: CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)], life: 20 + Math.random() * 20 });
  }

  // ---------- 每一幀 ----------
  update(dt, now = performance.now()) {
    const r = this.r;
    if (!this.enabled || r.cam.z < AGENTS.minZoom || !this.sim) { this.clear(); this._roads = null; return; }
    this.scanView(now);
    dt = Math.min(dt, 0.1);
    const lim = this.limits();
    this.spawnAcc += dt * AGENTS.spawnPerSecond;
    let tries = 0;
    while (this.spawnAcc >= 1 && tries++ < 8) { this.spawnAcc--; this.trySpawn(lim); }
    if (this.spawnAcc > 8) this.spawnAcc = 0;
    const sim = this.sim, g = sim.s.grid;
    // 車：壅塞時變慢
    for (const c of this.cars) {
      c.life -= dt;
      const v = AGENTS.carSpeed * c.speed / (1 + (sim.cong[c.b] || 0));
      c.t += dt * v;
      while (c.t >= 1) {
        c.t -= 1;
        const opts = g.road[c.b] ? this.roadNext(c.b, c.lb) : [];
        if (!opts.length) { c.life = 0; break; }
        const o = this.choose(opts, c.dx, c.dy, Math.random());
        c.a = c.b; c.la = c.lb; c.b = o[0]; c.lb = o[1]; c.dx = o[2]; c.dy = o[3];
      }
    }
    this.cars = this.cars.filter((c) => c.life > 0 && g.road[c.b] && (this.inView(c.a, 120) || this.inView(c.b, 120)));
    // 行人
    for (const p of this.peds) {
      p.life -= dt;
      p.t += dt * AGENTS.pedSpeed;
      while (p.t >= 1) {
        p.t -= 1;
        const opts = this.roadNext(p.b, 'g');
        if (!opts.length) { p.life = 0; break; }
        const o = this.choose(opts, p.dx, p.dy, Math.random());
        p.a = p.b; p.b = o[0]; p.dx = o[2]; p.dy = o[3];
      }
    }
    this.peds = this.peds.filter((p) => p.life > 0 && g.road[p.b] && this.inView(p.a, 60));
    // 火車：在車站停
    for (const tr of this.trains) {
      if (tr.stop > 0) { tr.stop -= dt; continue; }
      tr.t += dt * AGENTS.trainSpeed;
      while (tr.t >= 1) {
        tr.t -= 1;
        const head = tr.path[tr.path.length - 1];
        if (this.isStop(head) && tr.stopped !== head) { tr.stop = AGENTS.trainStopSeconds; tr.stopped = head; tr.t = 0; break; }
        const opts = this.railNext(head);
        if (!opts.length) { tr.dead = true; break; }
        const o = this.choose(opts, tr.dx, tr.dy, Math.random());
        tr.path.push(o[0]); tr.dx = o[1]; tr.dy = o[2];
        if (tr.path.length > AGENTS.trainCars + 3) tr.path.shift();
      }
    }
    this.trains = this.trains.filter((tr) => !tr.dead && g.rail[tr.path[tr.path.length - 1]] && tr.path.some((i) => this.inView(i, 200)));
  }

  // 格子 i 在某層的世界座標（含高架高度）
  pos(i, lift) {
    const p = this.r.cellWorld(i);
    return { x: p.x, y: p.y - lift };
  }
  lerp(a, la, b, lb, t, laneX = 0, laneY = 0) {
    const pa = this.pos(a, la), pb = this.pos(b, lb);
    // 車道偏移（格子座標 → 世界座標）
    const ox = (laneX - laneY) * TW / 2, oy = (laneX + laneY) * TH / 2;
    return this.r.worldToScreen(pa.x + (pb.x - pa.x) * t + ox, pa.y + (pb.y - pa.y) * t + oy);
  }

  draw(ctx, now) {
    if (!this.enabled || this.r.cam.z < AGENTS.minZoom) return;
    const z = this.r.cam.z;
    const g = this.sim.s.grid;
    // 依畫面上的 y 排序，近的後畫
    const items = [];
    for (const c of this.cars) {
      const la = c.la === 'd' ? ELEV_LIFT : 0, lb = c.lb === 'd' ? ELEV_LIFT : 0;
      // 靠右行駛：車道在行進方向的右側
      const s = this.lerp(c.a, la, c.b, lb, c.t, -c.dy * 0.13, c.dx * 0.13);
      items.push([s.y, () => this.drawVehicle(ctx, c, s, z)]);
    }
    for (const p of this.peds) {
      const s = this.lerp(p.a, 0, p.b, 0, p.t, -p.dy * 0.36 * p.side, p.dx * 0.36 * p.side);
      items.push([s.y, () => this.drawPed(ctx, p, s, z, now)]);
    }
    for (const tr of this.trains) {
      const n = tr.path.length;
      const head = n - 2 + tr.t; // 沿路徑的位置
      for (let k = 0; k <= AGENTS.trainCars; k++) {
        const sPos = head - k * 0.85;
        if (sPos < 0) break;
        const seg = Math.floor(sPos), f = sPos - seg;
        const a = tr.path[seg], b = tr.path[Math.min(n - 1, seg + 1)];
        const lift = (i) => (g.relev[i] ? ELEV_LIFT_RAIL : 0);
        const s = this.lerp(a, lift(a), b, lift(b), f);
        const w = this.r.map.w;
        const dx = (b % w) - (a % w), dy = ((b / w) | 0) - ((a / w) | 0);
        items.push([s.y, () => this.drawTrainCar(ctx, tr, k, s, z, dx, dy, now)]);
      }
    }
    items.sort((p, q) => p[0] - q[0]);
    for (const [, f] of items) f();
  }

  // 沿行進方向的等角方塊：len 半長、wid 半寬（格子單位）、h 高（px）
  dirBox(ctx, s, z, dx, dy, len, wid, h, top, left, right) {
    const u = dx ? len : wid, v = dy ? len : wid;
    this.r.box(ctx, s.x, s.y, z, u, v, h, top, left, right);
  }
  // 車頭位置（往行進方向偏移 k 格）
  ahead(s, z, dx, dy, k) {
    return { x: s.x + (dx - dy) * TW / 2 * z * k, y: s.y + (dx + dy) * TH / 2 * z * k };
  }

  drawVehicle(ctx, c, s, z) {
    const { dx, dy } = c;
    const k = c.kind;
    if (k === 'oxcart') {
      // 牛車：木車廂在後、牛在前
      const back = this.ahead(s, z, dx, dy, -0.06);
      this.dirBox(ctx, back, z, dx, dy, 0.09, 0.06, 5, '#a8784a', '#8a5e36', '#70492a');
      const f = this.ahead(s, z, dx, dy, 0.12);
      this.dirBox(ctx, f, z, dx, dy, 0.06, 0.035, 5, '#5a4a3a', '#4a3a2c', '#3a2c20');
    } else if (k === 'rickshaw') {
      this.dirBox(ctx, s, z, dx, dy, 0.07, 0.04, 6, '#2a2a2a', '#7a2a22', '#5a1e18');
      const f = this.ahead(s, z, dx, dy, 0.1);
      this.person(ctx, f, z, '#e8d8b0');
    } else if (k === 'bicycle' || k === 'scooter') {
      this.dirBox(ctx, s, z, dx, dy, 0.06, 0.012, 3, '#333', k === 'scooter' ? c.col : '#555', '#333');
      this.person(ctx, this.ahead(s, z, dx, dy, -0.01), z, k === 'scooter' ? '#f2f2f2' : '#3a6ea8', 3);
    } else if (k === 'bus') {
      this.dirBox(ctx, s, z, dx, dy, 0.17, 0.06, 9, '#f0f0ea', c.id % 2 ? '#2f8a4a' : '#2f6fd0', '#d8d8d0');
      this.windshield(ctx, s, z, dx, dy, 0.17, 7);
    } else if (k === 'truck') {
      const back = this.ahead(s, z, dx, dy, -0.04);
      this.dirBox(ctx, back, z, dx, dy, 0.11, 0.055, 9, '#d8d4c8', '#c4bfb2', '#a8a296');
      const f = this.ahead(s, z, dx, dy, 0.11);
      this.dirBox(ctx, f, z, dx, dy, 0.04, 0.055, 7, c.col, c.col, '#555');
    } else {
      // 汽車（老爺車是黑色）
      const col = k === 'oldcar' ? '#222' : c.col;
      this.dirBox(ctx, s, z, dx, dy, 0.1, 0.05, 4, col, col, '#444');
      const cab = this.ahead(s, z, dx, dy, -0.015);
      this.dirBox(ctx, cab, z, dx, dy, 0.055, 0.045, 7, '#9fc3e2', col, '#555');
      this.windshield(ctx, s, z, dx, dy, 0.06, 6);
    }
  }
  windshield(ctx, s, z, dx, dy, len, h) {
    const f = this.ahead(s, z, dx, dy, len);
    ctx.fillStyle = '#9fc3e2';
    ctx.fillRect(f.x - 2 * z, f.y - h * z, 4 * z, 2.5 * z);
  }
  person(ctx, s, z, shirt, h = 4) {
    ctx.fillStyle = shirt;
    ctx.fillRect(s.x - 1.2 * z, s.y - (h + 3) * z, 2.4 * z, 3.5 * z);
    ctx.fillStyle = '#f0c8a0';
    ctx.beginPath(); ctx.arc(s.x, s.y - (h + 4.5) * z, 1.5 * z, 0, Math.PI * 2); ctx.fill();
  }
  drawPed(ctx, p, s, z, now) {
    // 走路：腳前後擺動，頭朝行進方向偏一點
    const step = Math.sin(now / 120 + p.id) * 1.2 * z;
    const f = this.ahead(s, z, p.dx, p.dy, 0.02);
    ctx.strokeStyle = '#333'; ctx.lineWidth = Math.max(0.6, 0.8 * z);
    ctx.beginPath(); ctx.moveTo(s.x, s.y - 3 * z); ctx.lineTo(s.x - step, s.y); ctx.moveTo(s.x, s.y - 3 * z); ctx.lineTo(s.x + step, s.y); ctx.stroke();
    ctx.fillStyle = p.col;
    ctx.fillRect(s.x - 1.1 * z, s.y - 6.5 * z, 2.2 * z, 3.6 * z);
    ctx.fillStyle = '#f0c8a0';
    ctx.beginPath(); ctx.arc(f.x, f.y - 7.6 * z, 1.4 * z, 0, Math.PI * 2); ctx.fill();
  }
  drawTrainCar(ctx, tr, k, s, z, dx, dy, now) {
    const era = this.sim.s.era;
    if (!dx && !dy) { dx = tr.dx; dy = tr.dy; }
    if (k === 0) {
      if (era <= 3) {
        // 蒸汽火車頭：黑色車身＋煙囪＋白煙
        this.dirBox(ctx, s, z, dx, dy, 0.2, 0.07, 8, '#2a2a2e', '#1e1e22', '#141418');
        const f = this.ahead(s, z, dx, dy, 0.12);
        this.r.box(ctx, f.x, f.y - 8 * z, z, 0.025, 0.025, 6, '#333', '#444', '#222');
        for (let q = 0; q < 3; q++) {
          const ph = ((now / 700 + q / 3) % 1);
          ctx.fillStyle = `rgba(235,235,235,${0.6 * (1 - ph)})`;
          ctx.beginPath(); ctx.arc(f.x - ph * 8 * z, f.y - (16 + ph * 14) * z, (2 + ph * 4) * z, 0, Math.PI * 2); ctx.fill();
        }
      } else if (era === 4) {
        this.dirBox(ctx, s, z, dx, dy, 0.2, 0.07, 9, '#e07a2a', '#d06a1e', '#a85416'); // 柴油機車（橘）
        this.windshield(ctx, s, z, dx, dy, 0.2, 8);
      } else {
        this.dirBox(ctx, s, z, dx, dy, 0.2, 0.07, 9, '#f2f2ee', '#e4e6e8', '#b8bcc0'); // 電聯車（白）
        this.windshield(ctx, s, z, dx, dy, 0.2, 8);
      }
    } else {
      const col = era <= 3 ? ['#6a4a2e', '#5a3e26', '#48311e'] : era === 4 ? ['#c8c4b8', '#2f5fa8', '#244a84'] : ['#f2f2ee', '#d84a3a', '#b03a2e'];
      this.dirBox(ctx, s, z, dx, dy, 0.19, 0.065, 8, ...col);
    }
  }
}
