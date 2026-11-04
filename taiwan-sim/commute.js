// 台灣模擬：通勤（第四版）——每棟住宅的上班人口配對到商業/工業的工作，沿道路網找最快路線，算出車流與壅塞。
// 純邏輯（瀏覽器和 Node 共用）。數值在 config.js COMMUTE、TRAFFIC。
import { COMMUTE, TRAFFIC } from './config.js';
import { roadCapacity } from './services.js';

// ---- 最小堆（Dijkstra 用）----
class Heap {
  constructor() { this.k = []; this.v = []; }
  get size() { return this.k.length; }
  push(key, val) {
    const k = this.k, v = this.v;
    let i = k.length;
    k.push(key); v.push(val);
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (k[p] <= key) break;
      k[i] = k[p]; v[i] = v[p]; i = p;
    }
    k[i] = key; v[i] = val;
  }
  pop() {
    const k = this.k, v = this.v;
    const top = v[0];
    const lk = k.pop(), lv = v.pop();
    if (k.length) {
      let i = 0;
      const n = k.length;
      for (;;) {
        const l = 2 * i + 1, r = l + 1;
        let m = i, mk = lk;
        if (l < n && k[l] < mk) { m = l; mk = k[l]; }
        if (r < n && k[r] < mk) { m = r; mk = k[r]; }
        if (m === i) break;
        k[i] = k[m]; v[i] = v[m]; i = m;
      }
      k[i] = lk; v[i] = lv;
    }
    return top;
  }
}

// 每格道路的行車時間（分鐘），含上次算出的壅塞
export function roadMinutes(sim, i) {
  const g = sim.s.grid, S = COMMUTE.roadSpeed;
  let f = g.road[i] === 2 ? S.bridge : S.road;
  if (g.trans[i] === 1) f = Math.min(f, S.highway);
  if (g.trans[i] === 2) f = Math.min(f, S.freeway);
  if (g.elev[i]) f = Math.min(f, S.elevated);
  const c = sim.cong ? sim.cong[i] : 0;
  return COMMUTE.minutesPerCell.road * f * (1 + COMMUTE.congWeight * Math.max(0, c - TRAFFIC.green));
}

export function allocCommute(sim) {
  const n = sim.map.n;
  sim.commuteMin = new Uint16Array(n);   // 住宅：平均通勤分鐘
  sim.workers = new Uint32Array(n);      // 住宅：上班人口
  sim.employed = new Uint32Array(n);     // 住宅：有工作的人；商工：員工數
  sim.commute = { groups: [], byHome: new Map(), byJob: new Map(), stats: {} };
  sim.commuteDirty = true;
  sim.commuteAge = 0;
}

// 配對與路線（每 recomputeMonths 個月一次，或蓋了東西之後）
export function computeCommute(sim) {
  const m = sim.map, g = sim.s.grid, n = m.n;
  sim.commuteDirty = false;
  sim.commuteAge = 0;
  const groups = [];
  sim.commuteMin.fill(0); sim.workers.fill(0); sim.employed.fill(0);
  // 需求（住宅的上班人口）與供給（工作）
  const homes = [], jobsAt = new Map(); // 道路節點 → [[工作格, 剩餘職缺], ...]
  const remainW = new Map(), remainJ = new Map();
  for (const i of sim.zoneList) {
    const a = sim.accessRoad[i];
    if (a < 0 || !g.level[i]) continue;
    if (g.zone[i] === 1) {
      const w = Math.floor(g.pop[i] * COMMUTE.workerShare);
      if (w > 0) { homes.push(i); remainW.set(i, w); sim.workers[i] = w; }
    } else {
      const c = sim.capAt(i);
      if (c > 0) { remainJ.set(i, c); if (!jobsAt.has(a)) jobsAt.set(a, []); jobsAt.get(a).push(i); }
    }
  }
  const cost = sim._ccost || (sim._ccost = new Float32Array(n));
  // 道路網的節點：接到港口的道路（港口本身也算，旁邊的區塊可能從港口進出）
  const isNode = (i) => (g.road[i] || g.bld[i] === 1) && sim.connected[i];
  const roads = [];
  for (let i = 0; i < n; i++) if (isNode(i)) { roads.push(i); cost[i] = g.road[i] ? roadMinutes(sim, i) : COMMUTE.minutesPerCell.road; }
  const maxMin = COMMUTE.maxMinutes;
  // 多起點、每個道路節點記住最近的 K 家「還有職缺的公司門口」（K 最近起點 Dijkstra）。
  // 住宅從最近的開始拿職缺，額滿就換下一家；一輪下來還沒配完的，下一輪（拿掉額滿的公司）再找。
  const K = COMMUTE.nearestJobs;
  const lsrc = new Int32Array(n * K).fill(-1), ldist = new Float32Array(n * K), lpar = new Int32Array(n * K);
  const lcount = new Uint8Array(n);
  for (let round = 0; round < COMMUTE.rounds; round++) {
    lcount.fill(0);
    const heap = new Heap();
    let any = false;
    // 堆裡放 [節點, 起點, 父標籤]：用三個陣列記，堆只放編號
    const qn = [], qs = [], qp = [];
    const push = (d, node, s, p) => { qn.push(node); qs.push(s); qp.push(p); heap.push(d, qn.length - 1); };
    for (const [node, list] of jobsAt) {
      if (!list.some((j) => remainJ.get(j) > 0)) continue;
      push(0, node, node, -1); any = true;
    }
    if (!any) break;
    while (heap.size) {
      const d = heap.k[0];
      const e = heap.pop();
      const node = qn[e], s = qs[e];
      if (d > maxMin) continue;
      const c = lcount[node];
      if (c >= K) continue;
      let dup = false;
      for (let q = 0; q < c; q++) if (lsrc[node * K + q] === s) { dup = true; break; }
      if (dup) continue;
      const ref = node * K + c;
      lsrc[ref] = s; ldist[ref] = d; lpar[ref] = qp[e]; lcount[node] = c + 1;
      for (const j of sim.neighbors4(node)) {
        if (!isNode(j) || lcount[j] >= K) continue;
        push(d + cost[j], j, s, ref);
      }
    }
    // 住宅照離最近公司的遠近排序，近的先配
    const todo = homes.filter((h) => remainW.get(h) > 0 && lcount[sim.accessRoad[h]] > 0);
    if (!todo.length) break;
    todo.sort((a, b) => ldist[sim.accessRoad[a] * K] - ldist[sim.accessRoad[b] * K]);
    let progress = false;
    for (const h of todo) {
      const a = sim.accessRoad[h];
      let w = remainW.get(h);
      for (let q = 0; q < lcount[a] && w > 0; q++) {
        const ref = a * K + q;
        const list = jobsAt.get(lsrc[ref]);
        if (!list) continue;
        let path = null;
        for (const j of list) {
          if (w <= 0) break;
          const r = remainJ.get(j);
          if (r <= 0) continue;
          const k = Math.min(w, r);
          w -= k; remainJ.set(j, r - k); progress = true;
          // 路線：住家門口 → 公司門口（沿標籤的父節點）
          if (!path) { path = []; for (let c = ref; c >= 0; c = lpar[c]) path.push((c / K) | 0); }
          groups.push({ home: h, job: j, count: k, path, roadMin: ldist[ref] });
        }
      }
      remainW.set(h, w);
    }
    if (!progress) break;
  }
  // 交通方式：很近走路；兩頭都在鐵路/捷運範圍 → 一部分搭火車；其他開車騎車
  const out = [];
  for (const gr of groups) {
    const hops = gr.path.length - 1;
    if (hops <= COMMUTE.walkCells) { out.push({ ...gr, mode: 'walk', minutes: Math.round(5 + hops * COMMUTE.minutesPerCell.walk) }); continue; }
    if (sim.transitCov[gr.home] && sim.transitCov[gr.job]) {
      const k = Math.round(gr.count * COMMUTE.railShare);
      if (k > 0) out.push({ ...gr, count: k, mode: 'rail', minutes: Math.round(COMMUTE.railWaitMinutes + hops * COMMUTE.minutesPerCell.rail) });
      if (gr.count - k > 0) out.push({ ...gr, count: gr.count - k, mode: 'road', minutes: Math.round(3 + gr.roadMin) });
      continue;
    }
    out.push({ ...gr, mode: 'road', minutes: Math.round(3 + gr.roadMin) });
  }
  // 索引、統計
  const byHome = new Map(), byJob = new Map();
  let workers = 0, employed = 0, minSum = 0, modeCount = { walk: 0, road: 0, rail: 0 };
  for (const i of homes) workers += sim.workers[i];
  const minAcc = new Map();
  for (const gr of out) {
    if (!byHome.has(gr.home)) byHome.set(gr.home, []);
    byHome.get(gr.home).push(gr);
    if (!byJob.has(gr.job)) byJob.set(gr.job, []);
    byJob.get(gr.job).push(gr);
    sim.employed[gr.home] += gr.count;
    sim.employed[gr.job] += gr.count;
    employed += gr.count;
    minSum += gr.minutes * gr.count;
    modeCount[gr.mode] += gr.count;
    minAcc.set(gr.home, (minAcc.get(gr.home) || 0) + gr.minutes * gr.count);
  }
  for (const [h, s] of minAcc) sim.commuteMin[h] = Math.min(65535, Math.round(s / Math.max(1, sim.employed[h])));
  sim.commute = {
    groups: out, byHome, byJob,
    stats: { workers, employed, unemployment: workers ? 1 - employed / workers : 0, avgMinutes: employed ? minSum / employed : 0, modes: modeCount, groups: out.length },
  };
  computeFlow(sim);
}

// 車流：開車騎車的通勤人數沿路線累加（來回都算在同一格），再乘時代汽車普及率；壅塞 = 車流 / 容量
export function computeFlow(sim) {
  const g = sim.s.grid, n = sim.map.n;
  const flow = sim.flow, cong = sim.cong;
  flow.fill(0); cong.fill(0);
  const share = TRAFFIC.carShare[sim.s.era] ?? 1;
  for (const gr of sim.commute.groups) {
    if (gr.mode !== 'road') continue;
    const v = gr.count * share;
    for (const c of gr.path) flow[c] += v;
  }
  let jammed = 0, roads = 0, busiest = 0;
  for (let i = 0; i < n; i++) {
    if (!g.road[i] || !sim.connected[i]) continue;
    roads++;
    const cap = roadCapacity(sim, i);
    cong[i] = cap > 0 ? flow[i] / cap : 0;
    if (cong[i] >= TRAFFIC.yellow) jammed++;
    if (cong[i] > busiest) busiest = cong[i];
  }
  sim.commute.stats.jammedRoads = jammed;
  sim.commute.stats.roads = roads;
  sim.commute.stats.busiest = busiest;
}
