// 試玩戰鬥畫面（編輯器「試玩」分頁與匯出遊戲共用）：canvas 繪製、點擊操作、動畫、AI 回合、戰鬥紀錄。
import { TILE, BATTLE_ZOOMS, MOVE_STEP_MS, AI_PAUSE_MS, ANIM_SPEEDS, DEATH_FADE_MS, STORAGE_PREFIX } from './config.js';
import { drawMap, unitFrame, spriteCanvas, clampCam, screenToCell, cellToScreen, visibleRange } from './render.js';
import { byId } from './model.js';
import { actionTiming, frameAt, resolveFrame, dirToward } from './anim.js';
import * as B from './battle.js';

// 試玩設定「動畫速度」：存在 localStorage（只記這一個數字），讀不到就用 ×1
const SPEED_KEY = `${STORAGE_PREFIX}animSpeed`;
function loadSpeed() {
  try { const v = Number(localStorage.getItem(SPEED_KEY)); return ANIM_SPEEDS.includes(v) && localStorage.getItem(SPEED_KEY) !== null ? v : 1; } catch { return 1; }
}
function saveSpeed(v) {
  try { localStorage.setItem(SPEED_KEY, String(v)); } catch { /* 忽略 */ }
}
const speedLabel = (v) => (v ? `動畫 ×${v}` : '動畫 跳過');

const FACTION_COLOR = { ally: '#4a9ae8', enemy: '#e8584a', guest: '#68b040' };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function mountBattle(root, project, stageId, opts = {}) {
  const fast = !!opts.fast; // ?fast=1（測試用）= 一律跳過動畫
  let speed = fast ? 0 : loadSpeed(); // 1、2 或 0（跳過）
  const skip = () => fast || speed === 0;
  const ms = (v) => (skip() ? 0 : v / speed);
  root.innerHTML = `
  <div class="bv">
    <div class="bv-top">
      <strong class="bv-title"></strong>
      <span class="bv-turn"></span>
      <span class="bv-phase"></span>
      <span class="bv-spacer"></span>
      <button type="button" data-act="auto" title="讓電腦替我方所有還沒行動的角色行動">全軍委任</button>
      <button type="button" data-act="end">結束回合</button>
      <button type="button" data-act="zoom" title="縮放"></button>
      <button type="button" data-act="speed" title="動畫速度：×1 → ×2 → 跳過"></button>
      ${opts.onExit ? '<button type="button" data-act="exit">離開試玩</button>' : ''}
    </div>
    <div class="bv-main">
      <div class="bv-stage">
        <canvas class="bv-canvas"></canvas>
        <div class="bv-menu hidden"></div>
        <div class="bv-hint"></div>
      </div>
      <div class="bv-side">
        <div class="bv-info"></div>
        <div class="bv-forecast hidden"></div>
        <details class="bv-logwrap" open><summary>戰鬥紀錄</summary><ol class="bv-log"></ol></details>
      </div>
    </div>
    <div class="bv-result hidden"><div class="bv-result-box"><h2></h2><p></p><div class="bv-result-btns"></div></div></div>
  </div>`;
  const $ = (s) => root.querySelector(s);
  const cv = $('.bv-canvas'), stageEl = $('.bv-stage'), menu = $('.bv-menu'), hint = $('.bv-hint');
  const g = cv.getContext('2d');

  let st;
  let ui;
  const cam = { x: 0, y: 0, scale: 1 };
  let vw = 0, vh = 0, dpr = 1;
  let raf = 0, destroyed = false;
  let floats = [];
  const disp = new Map(); // uid → { x, y, anim }；anim = { action, t0 } 播放中的動作（null = 走路第 1 格站著）

  function start() {
    st = B.createBattle(project, stageId, { seed: opts.seed });
    ui = { mode: 'idle', sel: null, reach: null, atkCells: null, targets: [], target: null, inspect: null, hover: null, busy: false };
    disp.clear();
    for (const u of st.units) disp.set(u.uid, { x: u.x, y: u.y, anim: null });
    floats = [];
    $('.bv-title').textContent = st.stage.name;
    $('.bv-result').classList.add('hidden');
    fitZoom();
    centerOn(B.alive(st, 'ally')[0] || st.units[0]);
    refresh();
    if (st.result) showResult();
  }

  // ---- 相機 ----
  function resize() {
    const r = stageEl.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1;
    vw = Math.max(1, Math.floor(r.width));
    vh = Math.max(1, Math.floor(r.height));
    cv.width = vw * dpr; cv.height = vh * dpr;
    cv.style.width = vw + 'px'; cv.style.height = vh + 'px';
    if (st) clampCam(st.map, cam, vw, vh);
  }
  function fitZoom() {
    resize();
    let best = BATTLE_ZOOMS[0];
    for (const z of BATTLE_ZOOMS) if (st.w * TILE * z <= vw && st.h * TILE * z <= vh) best = z;
    cam.scale = Math.min(1, Math.max(best, 0.75));
    updateZoomBtn();
    clampCam(st.map, cam, vw, vh);
  }
  function updateZoomBtn() { $('[data-act="zoom"]').textContent = `縮放 ${cam.scale}×`; }
  function updateSpeedBtn() {
    const b = $('[data-act="speed"]');
    b.textContent = speedLabel(fast ? 0 : speed);
    b.disabled = fast;
  }
  function centerOn(u) {
    if (!u) return;
    cam.x = (u.x + 0.5) * TILE - vw / cam.scale / 2;
    cam.y = (u.y + 0.5) * TILE - vh / cam.scale / 2;
    clampCam(st.map, cam, vw, vh);
  }
  function ensureVisible(x, y) {
    const [sx, sy] = cellToScreen(cam, x, y);
    const ts = TILE * cam.scale;
    if (sx < ts || sy < ts || sx > vw - 2 * ts || sy > vh - 2 * ts) centerOn({ x, y });
  }

  // ---- 繪製 ----
  function frame(now) {
    if (destroyed) return;
    raf = requestAnimationFrame(frame);
    draw(now);
  }
  function fillCells(cells, color) {
    if (!cells) return;
    const ts = TILE * cam.scale;
    g.fillStyle = color;
    for (const i of cells) {
      const [sx, sy] = cellToScreen(cam, i % st.w, (i / st.w) | 0);
      g.fillRect(sx + 1, sy + 1, ts - 2, ts - 2);
    }
  }
  function draw(now) {
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.fillStyle = '#111';
    g.fillRect(0, 0, vw, vh);
    drawMap(g, project, st.map, cam, vw, vh, { grid: true });
    const ts = TILE * cam.scale;
    if (ui.mode === 'selected' || ui.inspect) fillCells(ui.reach?.stops, 'rgba(74,154,232,.38)');
    if (ui.atkCells) fillCells(ui.atkCells, 'rgba(232,88,74,.28)');
    if (ui.hover && !ui.busy) {
      const [sx, sy] = cellToScreen(cam, ui.hover[0], ui.hover[1]);
      g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(sx + 1, sy + 1, ts - 2, ts - 2);
    }
    const r = visibleRange(st.map, cam, vw, vh);
    for (const u of st.units) {
      if (!u.alive && !u.dying) continue;
      const d = disp.get(u.uid);
      if (d.x < r.x0 - 1 || d.x > r.x1 + 1 || d.y < r.y0 - 1 || d.y > r.y1 + 1) continue;
      const [sx, sy] = cellToScreen(cam, d.x, d.y);
      g.globalAlpha = u.fading ? Math.max(0, 1 - ((now - u.fading) * (speed || 1)) / DEATH_FADE_MS) : 1;
      g.fillStyle = FACTION_COLOR[u.faction];
      g.beginPath();
      g.ellipse(sx + ts / 2, sy + ts * 0.86, ts * 0.36, ts * 0.12, 0, 0, Math.PI * 2);
      g.fill();
      const fr = currentFrame(u, now);
      const img = unitFrame(project, u, fr.action, u.dir, fr.k);
      if (img) g.drawImage(img, Math.round(sx), Math.round(sy), Math.round(ts), Math.round(ts));
      else { g.fillStyle = FACTION_COLOR[u.faction]; g.fillRect(sx + ts * 0.2, sy + ts * 0.2, ts * 0.6, ts * 0.6); }
      if (u.acted && st.phase === u.faction) { g.fillStyle = 'rgba(0,0,0,.45)'; g.fillRect(sx, sy, ts, ts); }
      // HP 條
      const hpW = ts * 0.8;
      g.fillStyle = '#000';
      g.fillRect(sx + ts * 0.1, sy + ts - 5, hpW, 4);
      g.fillStyle = u.hp / u.maxHp > 0.5 ? '#68b040' : u.hp / u.maxHp > 0.25 ? '#f0c830' : '#e8584a';
      g.fillRect(sx + ts * 0.1, sy + ts - 5, hpW * (u.hp / u.maxHp), 4);
      if (u.isLeader) { g.fillStyle = '#f0c830'; g.font = `bold ${Math.max(10, ts / 4)}px system-ui,sans-serif`; g.fillText('★', sx + 2, sy + ts / 4 + 2); }
      g.globalAlpha = 1;
      if (ui.sel === u || ui.inspect === u) { g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(sx + 1, sy + 1, ts - 2, ts - 2); }
      if (ui.targets.includes(u)) { g.strokeStyle = '#ff3030'; g.lineWidth = 3; g.strokeRect(sx + 2, sy + 2, ts - 4, ts - 4); }
    }
    // 飄字
    floats = floats.filter((f) => now - f.t0 < f.dur);
    for (const f of floats) {
      const k = (now - f.t0) / f.dur;
      const [sx, sy] = cellToScreen(cam, f.x, f.y);
      g.globalAlpha = 1 - k * k;
      g.font = `bold ${Math.max(14, ts / 2.6)}px system-ui,sans-serif`;
      g.textAlign = 'center';
      g.lineWidth = 4;
      g.strokeStyle = '#000';
      g.strokeText(f.text, sx + ts / 2, sy + ts * 0.3 - k * ts * 0.5);
      g.fillStyle = f.color;
      g.fillText(f.text, sx + ts / 2, sy + ts * 0.3 - k * ts * 0.5);
      g.textAlign = 'left';
      g.globalAlpha = 1;
    }
  }
  const float = (x, y, text, color) => floats.push({ x, y, text, color, t0: performance.now(), dur: skip() ? 300 : 900 / Math.max(1, speed) });
  const sleep = (t) => new Promise((res) => setTimeout(res, ms(t)));

  // ---- 角色動作 ----
  // 目前該畫哪個動作的第幾格：攻擊 / 計策播完回到走路第 1 格；倒下停在最後一格
  function currentFrame(u, now) {
    const a = disp.get(u.uid)?.anim;
    if (skip()) return u.dying ? { action: 'defeat', k: actionTiming(u, 'defeat').count - 1 } : { action: 'walk', k: 0 };
    if (!a) return { action: 'walk', k: 0 };
    const { count, ms: fms } = actionTiming(u, a.action);
    const k = frameAt(a.action, (now - a.t0) * speed, count, fms);
    return k < 0 ? { action: 'walk', k: 0 } : { action: a.action, k };
  }
  function setAnim(u, action) {
    const d = disp.get(u.uid);
    d.anim = action ? { action, t0: performance.now() } : null;
  }
  // 播一次動作（攻擊 / 計策 / 倒下），回傳播完的 Promise；hitAt(總時間) 可在中途觸發（例如顯示傷害）
  async function playAction(u, action, onHit) {
    const { count, ms: fms } = actionTiming(u, action);
    setAnim(u, action);
    const hitAt = Math.max(0, count - 1) * fms; // 最後一格出手
    await sleep(hitAt);
    onHit?.();
    await sleep(fms);
    if (action !== 'defeat') setAnim(u, null);
  }

  async function animateMove(u, path) {
    const d = disp.get(u.uid);
    const endDir = B.lastStepDir(path) || u.dir;
    if (!path || path.length < 2 || skip()) { d.x = u.x; d.y = u.y; u.dir = endDir; return; }
    setAnim(u, 'walk');
    const stepMs = MOVE_STEP_MS / speed;
    for (let k = 1; k < path.length; k++) {
      const [x0, y0] = path[k - 1], [x1, y1] = path[k];
      u.dir = dirToward(x1 - x0, y1 - y0) || u.dir;
      const t0 = performance.now();
      await new Promise((res) => {
        const step = () => {
          if (destroyed) return res();
          const t = Math.min(1, (performance.now() - t0) / stepMs);
          d.x = x0 + (x1 - x0) * t; d.y = y0 + (y1 - y0) * t;
          if (t < 1) requestAnimationFrame(step); else res();
        };
        step();
      });
    }
    setAnim(u, null);
    u.dir = endDir; // 面向最後一步的方向
    d.x = u.x; d.y = u.y;
  }
  async function playEvents(events) {
    // 會倒下的單位在動畫播完前都要畫出來
    for (const ev of events) if (ev.type === 'defeat') ev.unit.dying = true;
    for (const ev of events) {
      if (ev.type === 'strike') {
        const a = ev.attacker, d = ev.defender;
        a.dir = dirToward(d.x - a.x, d.y - a.y) || a.dir; // 出手前轉向目標（反擊者轉向攻擊者）
        await playAction(a, 'attack', () => {
          if (ev.hit) float(d.x, d.y, `-${ev.damage}`, ev.counter ? '#ffd080' : '#ffffff');
          else float(d.x, d.y, '閃避！', '#a0d8ff');
          refresh();
        });
        await sleep(300);
      } else if (ev.type === 'defeat') {
        const u = ev.unit;
        await playAction(u, 'defeat');
        u.fading = performance.now();
        await sleep(DEATH_FADE_MS);
        u.fading = 0;
        u.dying = false;
        setAnim(u, null);
      } else if (ev.type === 'heal') {
        float(ev.unit.x, ev.unit.y, `+${ev.amount}`, '#a8e070');
      }
    }
    refresh();
  }

  // ---- 介面文字 ----
  function unitInfo(u) {
    const t = B.terrainOf(st, u.x, u.y);
    const pt = u.portrait && spriteCanvas(project, u.portrait);
    return `
      <div class="bv-unit">
        ${pt ? '<canvas class="bv-portrait" width="48" height="48"></canvas>' : ''}
        <div><b>${esc(u.name)}</b>${u.isLeader ? ' ★主角' : ''}<br><span class="bv-tag" style="background:${FACTION_COLOR[u.faction]}">${B.PHASE_NAMES[u.faction]}</span> ${esc(u.typeName)} Lv${u.stats.lv}</div>
      </div>
      <div class="bv-stats">HP <b>${u.hp}</b> / ${u.maxHp}　武力 ${u.stats.str}　統帥 ${u.stats.lead}　智力 ${u.stats.int}<br>
      移動 ${u.move}　射程 ${u.range[0]}～${u.range[1]}</div>
      <div class="bv-terrain">地形：${esc(t.name)}　防禦 +${Math.round(t.defBonus * 100)}%　閃避 +${Math.round(t.evaBonus * 100)}%${t.healPerTurn ? `　回血 ${t.healPerTurn}` : ''}</div>`;
  }
  function refresh() {
    $('.bv-turn').textContent = `第 ${st.turn} 回合`;
    const ph = $('.bv-phase');
    ph.textContent = `${B.PHASE_NAMES[st.phase]}行動`;
    ph.style.background = FACTION_COLOR[st.phase];
    const playerTurn = st.phase === 'ally' && !ui.busy && !st.result;
    for (const b of root.querySelectorAll('[data-act="auto"],[data-act="end"]')) b.disabled = !playerTurn;
    const shown = ui.sel || ui.inspect;
    const info = $('.bv-info');
    if (shown) {
      info.innerHTML = unitInfo(shown);
      const pc = info.querySelector('.bv-portrait');
      if (pc) { const c2 = pc.getContext('2d'); c2.imageSmoothingEnabled = false; c2.drawImage(spriteCanvas(project, shown.portrait), 0, 0); }
    } else if (ui.hover) {
      const t = B.terrainOf(st, ui.hover[0], ui.hover[1]);
      info.innerHTML = `<div class="bv-terrain">(${ui.hover[0]}, ${ui.hover[1]}) ${esc(t.name)}　移動消耗 ${t.impassable ? '不可通行' : t.moveCost}　防禦 +${Math.round(t.defBonus * 100)}%　閃避 +${Math.round(t.evaBonus * 100)}%${t.healPerTurn ? `　回血 ${t.healPerTurn}` : ''}</div>`;
    } else info.innerHTML = '<div class="bv-muted">點選角色查看能力</div>';
    const fc = $('.bv-forecast');
    if (ui.mode === 'confirm' && ui.target) {
      const f = B.forecast(st, ui.sel, ui.target);
      fc.classList.remove('hidden');
      fc.innerHTML = `<b>攻擊預覽</b><br>${esc(ui.sel.name)} → ${esc(ui.target.name)}：相剋 ${f.atk.grade}×${f.atk.mult}　傷害 <b>${f.atk.damage}</b>　命中率 <b>${Math.round(f.atk.hit)}%</b>（HP ${ui.target.hp}→${Math.max(0, ui.target.hp - f.atk.damage)}）`
        + (f.counter ? `<br>反擊：${esc(ui.target.name)} → ${esc(ui.sel.name)}：相剋 ${f.counter.grade}×${f.counter.mult}　傷害 ${f.counter.damage}　命中率 ${Math.round(f.counter.hit)}%` : '<br>對方無法反擊');
    } else fc.classList.add('hidden');
    const log = $('.bv-log');
    log.innerHTML = st.log.slice(-60).map((l) => `<li>${esc(l.text)}</li>`).join('');
    log.scrollTop = log.scrollHeight;
    hint.textContent = st.result ? '' : ui.busy ? `${B.PHASE_NAMES[st.phase]}行動中…`
      : ui.mode === 'selected' ? '點藍色格子移動（點自己 = 原地）' : ui.mode === 'moved' ? (ui.targets.length ? '點紅框敵人攻擊，或選「待機」' : '沒有可攻擊的敵人，選「待機」')
        : ui.mode === 'confirm' ? '確認攻擊？' : '點選我方角色';
    renderMenu();
  }
  function renderMenu() {
    const items = [];
    if (ui.mode === 'moved') {
      items.push(['wait', '待機']);
      items.push(['cancel', '取消移動']);
    } else if (ui.mode === 'confirm') {
      items.push(['confirm', '確定攻擊']);
      items.push(['back', '返回']);
    } else if (ui.mode === 'selected') items.push(['deselect', '取消']);
    menu.classList.toggle('hidden', !items.length);
    menu.innerHTML = items.map(([a, t]) => `<button type="button" data-act="${a}">${t}</button>`).join('');
  }

  // ---- 操作流程 ----
  function clearSel() {
    Object.assign(ui, { mode: 'idle', sel: null, reach: null, atkCells: null, targets: [], target: null, inspect: null });
  }
  function selectUnit(u) {
    clearSel();
    if (u.faction === 'ally' && st.phase === 'ally' && !u.acted) {
      ui.sel = u;
      ui.mode = 'selected';
      ui.reach = B.reachable(st, u);
      ui.atkCells = B.attackCells(st, u, ui.reach.stops);
      ui.targets = [];
    } else {
      ui.inspect = u;
      ui.reach = B.reachable(st, u);
      ui.atkCells = null;
    }
    refresh();
  }
  async function moveSelected(x, y) {
    const u = ui.sel;
    const path = B.moveUnit(st, u, x, y, ui.reach);
    if (!path) return;
    ui.busy = true; ui.mode = 'moving'; ui.atkCells = null;
    refresh();
    await animateMove(u, path);
    ui.busy = false;
    afterMove();
  }
  function afterMove() {
    const u = ui.sel;
    ui.mode = 'moved';
    ui.targets = B.targetsFrom(st, u, u.x, u.y);
    ui.atkCells = B.attackCells(st, u, [u.y * st.w + u.x]);
    ui.target = null;
    refresh();
  }
  async function doAttack() {
    const a = ui.sel, d = ui.target;
    ui.busy = true;
    clearSel();
    refresh();
    const events = B.attack(st, a, d);
    await playEvents(events);
    ui.busy = false;
    await afterAction();
  }
  async function afterAction() {
    refresh();
    if (st.result) return showResult();
    if (!B.alive(st, 'ally').some((u) => !u.acted)) await endTurn();
  }
  async function endTurn() {
    if (ui.busy || st.result) return;
    clearSel();
    ui.busy = true;
    refresh();
    await playEvents(B.endPhase(st));
    while (!st.result && st.phase !== 'ally' && !destroyed) {
      await runAIPhase(st.phase);
      if (st.result) break;
      await playEvents(B.endPhase(st));
    }
    ui.busy = false;
    refresh();
    if (st.result) showResult();
    else centerOn(B.alive(st, 'ally').find((u) => u.isLeader) || B.alive(st, 'ally')[0]);
  }
  async function runAIPhase(faction) {
    for (let guard = 0; guard < 500 && !st.result && !destroyed; guard++) {
      const u = B.aiOrder(st, faction)[0];
      if (!u) break;
      const plan = B.planAI(st, u);
      ensureVisible(u.x, u.y);
      const path = B.moveUnit(st, u, plan.move[0], plan.move[1]);
      await animateMove(u, path);
      ensureVisible(u.x, u.y);
      if (plan.target) {
        ui.inspect = u;
        refresh();
        await sleep(AI_PAUSE_MS);
        await playEvents(B.attack(st, u, plan.target));
        ui.inspect = null;
      }
      if (!u.acted) B.waitUnit(st, u);
      refresh();
      await sleep(AI_PAUSE_MS / 2);
    }
  }
  async function autoAllies() {
    if (ui.busy || st.result || st.phase !== 'ally') return;
    clearSel();
    ui.busy = true;
    refresh();
    await runAIPhase('ally');
    ui.busy = false;
    refresh();
    if (st.result) return showResult();
    await endTurn();
  }
  function showResult() {
    const box = $('.bv-result');
    box.classList.remove('hidden');
    box.querySelector('h2').textContent = st.result === 'win' ? '勝利！' : '失敗…';
    box.querySelector('h2').className = st.result;
    box.querySelector('p').textContent = `${st.resultReason}（第 ${st.turn} 回合）`;
    const idx = project.stages.indexOf(st.stage);
    const next = st.result === 'win' ? project.stages[idx + 1] : null;
    box.querySelector('.bv-result-btns').innerHTML = `<button type="button" data-act="restart">再玩一次</button>`
      + (next ? `<button type="button" data-act="next">下一關：${esc(next.name)}</button>` : '')
      + (opts.onExit ? '<button type="button" data-act="exit">離開試玩</button>' : '');
    refresh();
  }

  async function onCell(x, y) {
    if (ui.busy || st.result || x < 0 || y < 0 || x >= st.w || y >= st.h) return;
    const u = B.unitAt(st, x, y);
    const i = y * st.w + x;
    if (ui.mode === 'selected') {
      if (ui.reach.stops.has(i) && (!u || u === ui.sel)) return moveSelected(x, y);
      if (u && u !== ui.sel) return selectUnit(u);
      clearSel(); return refresh();
    }
    if (ui.mode === 'moved' || ui.mode === 'confirm') {
      if (u && ui.targets.includes(u)) {
        if (ui.mode === 'confirm' && ui.target === u) return doAttack();
        ui.mode = 'confirm'; ui.target = u;
        return refresh();
      }
      return; // 移動後要選待機 / 取消
    }
    if (u) return selectUnit(u);
    clearSel();
    refresh();
  }

  async function onMenu(act) {
    if (act === 'wait' && ui.sel) { const u = ui.sel; clearSel(); B.waitUnit(st, u); await afterAction(); }
    else if (act === 'cancel' && ui.sel) { const u = ui.sel; B.cancelMove(st, u); const d = disp.get(u.uid); d.x = u.x; d.y = u.y; selectUnit(u); }
    else if (act === 'confirm') await doAttack();
    else if (act === 'back') { ui.mode = 'moved'; ui.target = null; refresh(); }
    else if (act === 'deselect') { clearSel(); refresh(); }
    else if (act === 'end') await endTurn();
    else if (act === 'auto') await autoAllies();
    else if (act === 'zoom') {
      const cx = cam.x + vw / cam.scale / 2, cy = cam.y + vh / cam.scale / 2;
      cam.scale = BATTLE_ZOOMS[(BATTLE_ZOOMS.indexOf(cam.scale) + 1) % BATTLE_ZOOMS.length];
      cam.x = cx - vw / cam.scale / 2; cam.y = cy - vh / cam.scale / 2;
      clampCam(st.map, cam, vw, vh);
      updateZoomBtn();
    } else if (act === 'speed') {
      speed = ANIM_SPEEDS[(ANIM_SPEEDS.indexOf(speed) + 1) % ANIM_SPEEDS.length];
      saveSpeed(speed);
      updateSpeedBtn();
    } else if (act === 'restart') start();
    else if (act === 'next') {
      const idx = project.stages.indexOf(st.stage);
      stageId = project.stages[idx + 1]?.id;
      start();
    } else if (act === 'exit') opts.onExit?.();
  }

  // ---- 輸入 ----
  let drag = null;
  const local = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const onDown = (e) => {
    const [x, y] = local(e);
    drag = { x, y, cx: cam.x, cy: cam.y, moved: false, id: e.pointerId };
  };
  const onMove = (e) => {
    const [x, y] = local(e);
    if (drag && drag.id === e.pointerId) {
      if (Math.abs(x - drag.x) + Math.abs(y - drag.y) > 8) drag.moved = true;
      if (drag.moved) {
        cam.x = drag.cx - (x - drag.x) / cam.scale;
        cam.y = drag.cy - (y - drag.y) / cam.scale;
        clampCam(st.map, cam, vw, vh);
      }
    }
    if (e.pointerType === 'mouse') {
      const c = screenToCell(cam, x, y);
      const inside = c[0] >= 0 && c[1] >= 0 && c[0] < st.w && c[1] < st.h;
      const prev = ui.hover;
      ui.hover = inside ? c : null;
      if (!ui.sel && !ui.inspect && String(prev) !== String(ui.hover)) refresh();
    }
  };
  const onUp = (e) => {
    if (!drag || drag.id !== e.pointerId) return;
    const wasDrag = drag.moved;
    drag = null;
    if (wasDrag) return;
    const [x, y] = local(e);
    const [cx, cy] = screenToCell(cam, x, y);
    onCell(cx, cy);
  };
  const onLeave = () => { ui.hover = null; };
  const onClick = (e) => {
    const b = e.target.closest('button[data-act]');
    if (b && !b.disabled) onMenu(b.dataset.act);
  };
  const onKey = (e) => {
    if (e.key === 'Escape') {
      if (ui.mode === 'confirm') onMenu('back');
      else if (ui.mode === 'moved') onMenu('cancel');
      else if (ui.mode === 'selected' || ui.inspect) onMenu('deselect');
    }
  };
  cv.addEventListener('pointerdown', onDown);
  cv.addEventListener('pointermove', onMove);
  cv.addEventListener('pointerup', onUp);
  cv.addEventListener('pointerleave', onLeave);
  cv.addEventListener('contextmenu', (e) => e.preventDefault());
  root.addEventListener('click', onClick);
  window.addEventListener('keydown', onKey);
  const ro = new ResizeObserver(() => resize());
  ro.observe(stageEl);

  start();
  updateSpeedBtn();
  raf = requestAnimationFrame(frame);

  return {
    get state() { return st; },
    get mode() { return ui.mode; },
    get busy() { return ui.busy; },
    get reachStops() { return ui.reach ? [...ui.reach.stops].map((i) => [i % st.w, (i / st.w) | 0]) : []; },
    get targets() { return ui.targets.map((u) => [u.x, u.y]); },
    // 測試用：某格中心在畫面上的座標
    cellToClient(x, y) {
      const r = cv.getBoundingClientRect();
      const [sx, sy] = cellToScreen(cam, x, y);
      return [r.left + sx + (TILE * cam.scale) / 2, r.top + sy + (TILE * cam.scale) / 2];
    },
    centerOn: (x, y) => centerOn({ x, y }),
    get speed() { return fast ? 0 : speed; },
    // 測試用：某單位目前的朝向與畫面上的動作格
    animOf(uid) {
      const u = st.units.find((x) => x.uid === uid);
      if (!u) return null;
      const fr = currentFrame(u, performance.now());
      const f = resolveFrame(u, fr.action, u.dir, fr.k, (id) => !!byId(project.sprites, id));
      return { dir: u.dir, action: fr.action, k: fr.k, sprite: f?.id || null, flip: !!f?.flip, alive: u.alive, dying: !!u.dying };
    },
    // 播放某單位的動作（計策系統完成前，用來預覽「施放計策」；測試也會用）
    playAction: async (uid, action) => { const u = st.units.find((x) => x.uid === uid); if (!u) return; await playAction(u, action); setAnim(u, null); },
    destroy() {
      destroyed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('keydown', onKey);
      root.innerHTML = '';
    },
  };
}
