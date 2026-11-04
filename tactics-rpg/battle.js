// 戰鬥規則（純邏輯，不碰 DOM）：陣營輪流回合、移動、攻擊、反擊、命中/閃避、地形回血、勝敗、AI 主動進攻。
import { byId, terrainAt, gradeOf, gradeMult } from './model.js';
import { evalFormula } from './formula.js';
import { dirToward } from './anim.js';

export const PHASES = ['ally', 'enemy', 'guest'];
export const PHASE_NAMES = { ally: '我方', enemy: '敵方', guest: '友軍' };
export const sideOf = (faction) => (faction === 'enemy' ? 'enemy' : 'ally');
export const isFoe = (a, b) => sideOf(a.faction) !== sideOf(b.faction);

// 可重現的種子亂數
export function mulberry32(seed) {
  let a = seed >>> 0;
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return next;
}

function makeUnit(project, charId, faction, x, y, uid) {
  const c = byId(project.characters, charId);
  if (!c) return null;
  const ut = byId(project.unitTypes, c.unitType) || { id: '', name: '無兵種', move: 4, range: [1, 1], terrainCost: {} };
  const hp = Math.max(1, Math.round(c.stats['血量']) || 1);
  return {
    uid, charId, name: c.name, faction: faction || c.faction, x, y, hp, maxHp: hp,
    stats: { str: c.stats['武力'] || 0, lead: c.stats['統帥'] || 0, int: c.stats['智力'] || 0, hp, lv: c.level || 1 },
    typeId: ut.id, typeName: ut.name, move: Math.max(0, Number(ut.move) || 0),
    range: [Math.max(0, Number(ut.range?.[0]) || 1), Math.max(0, Number(ut.range?.[1]) || 1)],
    terrainCost: ut.terrainCost || {},
    isLeader: !!c.isLeader, sprites: c.sprites || {}, anims: c.anims || null, flipRight: !!c.flipRight, portrait: c.portrait || null,
    dir: faction === 'enemy' ? 'left' : 'right', acted: false, alive: true, origin: null,
  };
}

export function createBattle(project, stageId, opts = {}) {
  const stage = byId(project.stages, stageId) || project.stages[0];
  if (!stage) throw new Error('專案沒有關卡');
  const map = byId(project.maps, stage.map);
  if (!map) throw new Error(`關卡「${stage.name}」沒有選地圖`);
  const seed = Number.isFinite(opts.seed) ? opts.seed : Number(project.settings.rngSeed) || 1;
  const st = {
    project, stage, map, w: map.w, h: map.h, seed, rng: mulberry32(seed),
    terrain: [], units: [], turn: 1, phase: 'ally', result: null, resultReason: '', log: [],
    counterAttack: project.settings.counterAttack !== false,
  };
  for (let y = 0; y < map.h; y++) for (let x = 0; x < map.w; x++) st.terrain.push(terrainAt(project, map, x, y));
  let uid = 1;
  const free = (x, y) => x >= 0 && y >= 0 && x < map.w && y < map.h && !st.terrain[y * map.w + x].impassable && !unitAt(st, x, y);
  const place = (charId, faction, x, y) => {
    if (!free(x, y)) return;
    const u = makeUnit(project, charId, faction, x, y, uid++);
    if (u) st.units.push(u);
  };
  const pts = stage.deploy?.points || [];
  const max = Math.min(Number(stage.deploy?.max) || pts.length, pts.length);
  stage.allies.slice(0, max).forEach((cid, i) => place(cid, 'ally', pts[i][0], pts[i][1]));
  for (const e of stage.enemies) if (Array.isArray(e.at)) place(e.char, 'enemy', e.at[0], e.at[1]);
  for (const g of stage.guests || []) if (Array.isArray(g.at)) place(g.char, 'guest', g.at[0], g.at[1]);
  addLog(st, `第 ${st.turn} 回合 ${PHASE_NAMES.ally}行動`);
  checkResult(st);
  return st;
}

export const unitAt = (st, x, y) => st.units.find((u) => u.alive && u.x === x && u.y === y) || null;
export const alive = (st, faction) => st.units.filter((u) => u.alive && (!faction || u.faction === faction));
export const terrainOf = (st, x, y) => st.terrain[y * st.w + x];
const dist = (ax, ay, bx, by) => Math.abs(ax - bx) + Math.abs(ay - by);
function addLog(st, text) {
  st.log.push({ turn: st.turn, text });
  if (st.log.length > 300) st.log.shift();
}

export function moveCostFor(st, unit, i) {
  const t = st.terrain[i];
  if (t.impassable) return Infinity;
  const o = Number(unit.terrainCost[t.id]);
  const c = o > 0 ? o : Number(t.moveCost);
  return Math.max(1, Number.isFinite(c) ? c : 1);
}

// 小型二元堆積（Dijkstra 用）
class Heap {
  constructor() { this.a = []; }
  push(k, v) {
    const a = this.a; a.push([k, v]);
    let i = a.length - 1;
    while (i > 0) { const p = (i - 1) >> 1; if (a[p][0] <= a[i][0]) break; [a[p], a[i]] = [a[i], a[p]]; i = p; }
  }
  pop() {
    const a = this.a, top = a[0], last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < a.length && a[l][0] < a[m][0]) m = l;
        if (r < a.length && a[r][0] < a[m][0]) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]]; i = m;
      }
    }
    return top;
  }
  get size() { return this.a.length; }
}
function neighbors(st, i) {
  const x = i % st.w, y = (i / st.w) | 0, out = [];
  if (x > 0) out.push(i - 1);
  if (x < st.w - 1) out.push(i + 1);
  if (y > 0) out.push(i - st.w);
  if (y < st.h - 1) out.push(i + st.w);
  return out;
}

// 可移動範圍：Map<格子索引, {cost, prev}>；stops = 可以停下的格子（沒有其他單位）
export function reachable(st, unit) {
  const start = unit.y * st.w + unit.x;
  const nodes = new Map([[start, { cost: 0, prev: -1 }]]);
  const foeAt = new Set(), friendAt = new Set();
  for (const u of st.units) if (u.alive && u !== unit) (isFoe(u, unit) ? foeAt : friendAt).add(u.y * st.w + u.x);
  const heap = new Heap();
  heap.push(0, start);
  while (heap.size) {
    const [c, i] = heap.pop();
    if (c > nodes.get(i).cost) continue;
    for (const n of neighbors(st, i)) {
      if (foeAt.has(n)) continue; // 敵方佔據格不可進入
      const nc = c + moveCostFor(st, unit, n);
      if (nc > unit.move) continue;
      const old = nodes.get(n);
      if (!old || nc < old.cost) { nodes.set(n, { cost: nc, prev: i }); heap.push(nc, n); }
    }
  }
  const stops = new Set([...nodes.keys()].filter((i) => !friendAt.has(i)));
  return { nodes, stops };
}

export function pathTo(st, reach, x, y) {
  const path = [];
  let i = y * st.w + x;
  if (!reach.nodes.has(i)) return null;
  while (i !== -1) { path.unshift([i % st.w, (i / st.w) | 0]); i = reach.nodes.get(i).prev; }
  return path;
}

export const canHit = (unit, fx, fy, tx, ty) => { const d = dist(fx, fy, tx, ty); return d >= unit.range[0] && d <= unit.range[1]; };
export function targetsFrom(st, unit, x, y) {
  return st.units.filter((u) => u.alive && isFoe(u, unit) && canHit(unit, x, y, u.x, u.y));
}
// 攻擊範圍（從某些格子出發可以打到的格子），畫面標示用
export function attackCells(st, unit, fromCells) {
  const out = new Set();
  const r = unit.range[1];
  for (const i of fromCells) {
    const fx = i % st.w, fy = (i / st.w) | 0;
    for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
      const x = fx + dx, y = fy + dy;
      if (x < 0 || y < 0 || x >= st.w || y >= st.h) continue;
      if (canHit(unit, fx, fy, x, y)) out.add(y * st.w + x);
    }
  }
  return out;
}

// ---- 傷害管線：相剋倍率 → 傷害公式；命中率公式 ----
export function strikeInfo(st, a, aPos, d, dPos, rand = 0.5) {
  const p = st.project;
  const grade = gradeOf(p, a.typeId, d.typeId);
  const mult = gradeMult(p, grade);
  const t = terrainOf(st, dPos[0], dPos[1]);
  const ctx = {
    atk: { ...a.stats, hp: a.hp },
    def: { ...d.stats, hp: d.hp },
    matchup: mult, terrainDef: Number(t.defBonus) || 0, terrainEva: Number(t.evaBonus) || 0, skillPower: 0, rand,
  };
  const damage = Math.max(0, Math.round(evalFormula(p.settings.damageFormula, ctx, 1)));
  const hit = Math.min(100, Math.max(0, evalFormula(p.settings.hitFormula, ctx, 100)));
  return { grade, mult, damage, hit, terrain: t };
}

// 攻擊預覽（含反擊預覽）
export function forecast(st, a, d, from = [a.x, a.y]) {
  const atk = strikeInfo(st, a, from, d, [d.x, d.y]);
  let counter = null;
  if (st.counterAttack && canHit(d, d.x, d.y, from[0], from[1])) counter = strikeInfo(st, d, [d.x, d.y], a, from);
  return { atk, counter };
}

export function faceToward(u, tx, ty) {
  const d = dirToward(tx - u.x, ty - u.y);
  if (d) u.dir = d;
}
// 路徑最後一步的方向（沒移動回傳 null）
export function lastStepDir(path) {
  if (!path || path.length < 2) return null;
  const [x0, y0] = path[path.length - 2], [x1, y1] = path[path.length - 1];
  return dirToward(x1 - x0, y1 - y0);
}

// 移動：走完後面向最後一步的方向
export function moveUnit(st, unit, x, y, reach = reachable(st, unit)) {
  if (!reach.stops.has(y * st.w + x)) return null;
  const path = pathTo(st, reach, x, y);
  unit.origin = { x: unit.x, y: unit.y, dir: unit.dir };
  unit.dir = lastStepDir(path) || unit.dir;
  unit.x = x; unit.y = y;
  return path;
}

export function cancelMove(st, unit) {
  if (!unit.origin || unit.acted) return;
  Object.assign(unit, { x: unit.origin.x, y: unit.origin.y, dir: unit.origin.dir });
  unit.origin = null;
}

export function waitUnit(st, unit) {
  unit.acted = true;
  unit.origin = null;
  checkResult(st);
}

function strike(st, a, d, isCounter) {
  const info = strikeInfo(st, a, [a.x, a.y], d, [d.x, d.y], st.rng());
  const roll = st.rng() * 100;
  const hit = roll < info.hit;
  const before = d.hp;
  if (hit) d.hp = Math.max(0, d.hp - info.damage);
  const ev = { type: 'strike', attacker: a, defender: d, hit, damage: hit ? info.damage : 0, hitChance: info.hit, grade: info.grade, mult: info.mult, before, after: d.hp, counter: isCounter };
  const tag = isCounter ? '反擊' : '攻擊';
  const base = `${a.name} ${tag} ${d.name}：相剋 ${info.grade}×${info.mult}、命中 ${Math.round(info.hit)}%`;
  addLog(st, hit ? `${base} → 傷害 ${info.damage}（HP ${before}→${d.hp}）` : `${base} → 閃避！`);
  const events = [ev];
  if (d.hp <= 0) {
    d.alive = false;
    addLog(st, `${d.name} 退場`);
    events.push({ type: 'defeat', unit: d });
  }
  return events;
}

// 攻擊（含一次反擊）。回傳事件清單給畫面播動畫。攻擊者先轉向目標；會反擊時反擊者轉向攻擊者。
export function attack(st, a, d) {
  if (!a.alive || !d.alive || !isFoe(a, d) || !canHit(a, a.x, a.y, d.x, d.y)) return [];
  faceToward(a, d.x, d.y);
  const events = strike(st, a, d, false);
  if (d.alive && st.counterAttack && canHit(d, d.x, d.y, a.x, a.y)) {
    faceToward(d, a.x, a.y);
    events.push(...strike(st, d, a, true));
  }
  a.acted = true;
  a.origin = null;
  checkResult(st);
  return events;
}

export function checkResult(st) {
  if (st.result) return st.result;
  const allies = alive(st, 'ally');
  const leaderDown = st.units.some((u) => u.faction === 'ally' && u.isLeader && !u.alive);
  if (st.stage.lose?.leaderDeath !== false && leaderDown) { st.result = 'lose'; st.resultReason = '主角陣亡'; }
  else if (!allies.length) { st.result = 'lose'; st.resultReason = '我方全滅'; }
  else if (!alive(st, 'enemy').length) { st.result = 'win'; st.resultReason = '敵軍全滅'; }
  if (st.result) addLog(st, st.result === 'win' ? `勝利！（${st.resultReason}）` : `失敗…（${st.resultReason}）`);
  return st.result;
}

// 結束目前陣營，換下一個有單位的陣營；回傳回合開始事件（地形回血）
export function endPhase(st) {
  if (st.result) return [];
  for (const u of alive(st, st.phase)) { u.acted = false; u.origin = null; }
  let idx = PHASES.indexOf(st.phase);
  for (let k = 0; k < PHASES.length; k++) {
    idx++;
    if (idx >= PHASES.length) { idx = 0; st.turn++; }
    if (alive(st, PHASES[idx]).length) break;
  }
  st.phase = PHASES[idx];
  addLog(st, `第 ${st.turn} 回合 ${PHASE_NAMES[st.phase]}行動`);
  const events = [];
  for (const u of alive(st, st.phase)) {
    u.acted = false;
    const heal = Number(terrainOf(st, u.x, u.y).healPerTurn) || 0;
    if (heal > 0 && u.hp < u.maxHp) {
      const before = u.hp;
      u.hp = Math.min(u.maxHp, u.hp + Math.round(heal));
      addLog(st, `${u.name} 在${terrainOf(st, u.x, u.y).name}回復 ${u.hp - before} HP`);
      events.push({ type: 'heal', unit: u, amount: u.hp - before });
    }
  }
  return events;
}

// ---- AI：主動進攻 ----
// 從所有「可以攻擊到敵人的格子」反向算距離，讓單位往最近的敵人走
function approachField(st, unit) {
  const n = st.w * st.h;
  const field = new Float64Array(n).fill(Infinity);
  const foeAt = new Set(st.units.filter((u) => u.alive && isFoe(u, unit)).map((u) => u.y * st.w + u.x));
  const heap = new Heap();
  for (const i of attackCells(st, unit, foeAt)) {
    if (foeAt.has(i) || st.terrain[i].impassable) continue;
    field[i] = 0;
    heap.push(0, i);
  }
  while (heap.size) {
    const [c, i] = heap.pop();
    if (c > field[i]) continue;
    const step = moveCostFor(st, unit, i);
    for (const nb of neighbors(st, i)) {
      if (foeAt.has(nb) || st.terrain[nb].impassable) continue;
      const nc = c + step;
      if (nc < field[nb]) { field[nb] = nc; heap.push(nc, nb); }
    }
  }
  return field;
}

export function planAI(st, unit) {
  const reach = reachable(st, unit);
  let best = null;
  for (const i of reach.stops) {
    const x = i % st.w, y = (i / st.w) | 0;
    for (const t of targetsFrom(st, unit, x, y)) {
      const f = forecast(st, unit, t, [x, y]);
      const exp = (f.atk.hit / 100) * f.atk.damage;
      const kill = f.atk.damage >= t.hp;
      const counterExp = f.counter && !kill ? (f.counter.hit / 100) * f.counter.damage : 0;
      const score = (kill ? 1000 : 0) + (t.isLeader ? 30 : 0) + exp * 10 - counterExp * 6
        + (Number(terrainOf(st, x, y).defBonus) || 0) * 20 - reach.nodes.get(i).cost * 0.1 - t.hp * 0.5;
      if (!best || score > best.score) best = { score, move: [x, y], target: t };
    }
  }
  if (best) return { move: best.move, target: best.target };
  // 打不到：往最近的敵人走
  const field = approachField(st, unit);
  let bestStop = null;
  for (const i of reach.stops) {
    const v = field[i];
    const cost = reach.nodes.get(i).cost;
    const score = (Number.isFinite(v) ? v : 1e6 + nearestFoeDist(st, unit, i)) * 100 + cost;
    if (!bestStop || score < bestStop.score) bestStop = { score, i };
  }
  const i = bestStop ? bestStop.i : unit.y * st.w + unit.x;
  return { move: [i % st.w, (i / st.w) | 0], target: null };
}
function nearestFoeDist(st, unit, i) {
  const x = i % st.w, y = (i / st.w) | 0;
  let m = 1e5;
  for (const u of st.units) if (u.alive && isFoe(u, unit)) m = Math.min(m, dist(x, y, u.x, u.y));
  return m;
}

// AI 行動順序：離敵人近的先動
export function aiOrder(st, faction) {
  return alive(st, faction).filter((u) => !u.acted)
    .sort((a, b) => nearestFoeDist(st, a, a.y * st.w + a.x) - nearestFoeDist(st, b, b.y * st.w + b.x) || a.uid - b.uid);
}

// 立即執行一個單位的 AI（沒有動畫；測試與快速模式用）
export function runAIUnit(st, unit) {
  const plan = planAI(st, unit);
  const path = moveUnit(st, unit, plan.move[0], plan.move[1]) || [[unit.x, unit.y]];
  const events = plan.target ? attack(st, unit, plan.target) : [];
  if (!unit.acted) waitUnit(st, unit);
  return { path, events };
}
