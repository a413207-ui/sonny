// 台灣模擬：啟動、遊戲迴圈、介面。
import {
  TIME, ERAS, ZONES, ROAD, FACILITIES, LINES, FINANCE, MILESTONES, LAND, TERRAIN_NAMES, POWER_REQUIRED_FROM_ERA, SAVE_KEY,
  TRANSPORT, RAIL, ELEVATED, OBSOLETE, REGIONS, REGION_TYPES, VICTORY, ERA_UPGRADES, SPECIAL_EFFECTS, LANDMARK, BUILDING_STYLES, ERA_EVENTS,
} from './config.js';
import { loadMapBrowser } from './map.js';
import { Sim, ZONE_KEY, BLD_KEY, landPrice, eraInfo, styleName, ELEVATABLE } from './sim.js';
import { Renderer } from './render.js';
import { Input } from './input.js';
import { saveToStorage, loadFromStorage, backupBrokenSave, serialize, deserialize } from './save.js';

const $ = (s) => document.querySelector(s);
const params = new URLSearchParams(location.search);
const DEBUG = params.has('debug');

const fmt = (v) => {
  const a = Math.abs(v), sign = v < 0 ? '−' : '';
  if (a >= 100000000) return `${sign}${(a / 100000000).toFixed(2)}億`;
  if (a >= 10000) return `${sign}${(a / 10000).toFixed(a >= 1000000 ? 0 : 1)}萬`;
  return `${sign}${Math.round(a).toLocaleString('zh-TW')}`;
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const TOOLBAR = [
  { id: 'inspect', icon: '👆', label: '查看', key: '1' },
  { id: 'road', icon: '🛤️', label: '路', key: '2' },
  { group: 'transport', icon: '🛣️', label: '交通', key: '0', items: ['rail', 'railstop', 'highway', 'freeway', 'metro'] },
  { id: 'R', icon: '🏠', label: '住', key: '3' },
  { id: 'C', icon: '🏪', label: '商', key: '4' },
  { id: 'I', icon: '🏭', label: '工', key: '5' },
  { group: 'water', icon: '💧', label: '水', key: '6', items: ['well', 'waterpoint', 'waterworks', 'purifier', 'pipe'] },
  { group: 'power', icon: '⚡', label: '電', key: '7', items: ['coal', 'hydro', 'nuclear', 'modernplant', 'wire'] },
  { group: 'special', icon: '🏛️', label: '特殊', key: '8', items: ['lighthouse', 'station', 'dam', 'epz', 'skyscraper'] },
  { id: 'bulldoze', icon: '🧹', label: '拆除', key: '9' },
];

const game = {
  map: null, sim: null, renderer: null, input: null,
  tool: 'inspect', group: null, speedIdx: 1, saveBlocked: null, lastSave: 0, lastSaveOk: null,
  shipToast: null, paused: false, elevated: false,
};
// 某個工具是不是這個時代的主打建築（日據 = 鐵路、經濟起飛 = 高速公路）
const featured = (id) => !!eraInfo(game.sim?.s.era || 1).featured?.includes(id);
const toolInfo = (id) => FACILITIES[id] || LINES[id] || TRANSPORT[id] || (id === 'rail' ? RAIL : null);
const elevOn = (tool) => game.elevated && ELEVATABLE.has(tool) && game.sim.canElevate();

// ---------- 工具說明 ----------
function toolName(id) {
  const era = game.sim?.s.era || 1;
  if (id === 'road') return ROAD.names[era];
  if (TRANSPORT[id]) return TRANSPORT[id].name;
  if (id === 'rail') return RAIL.name;
  if (ZONES[id]) return `${ZONES[id].name}區（${eraInfo(game.sim?.s.era || 1).zoneNames[id]}）`;
  if (FACILITIES[id]) return FACILITIES[id].name;
  if (LINES[id]) return LINES[id].name;
  return { inspect: '查看', bulldoze: '拆除' }[id] || id;
}
function toolDesc(id) {
  const era = game.sim.s.era;
  if (id === 'inspect') return '拖動地圖、點格子看資訊；雙指縮放';
  const elevTxt = elevOn(id) ? `【高架】每格另加 ${fmt(ELEVATED.cost)}、每 ${ELEVATED.pillarEvery} 格一根柱子，底下可以蓋東西 — ` : '';
  if (id === 'road') return `${elevTxt}${ROAD.names[era]} ${ROAD.cost.plain}元/格（丘陵 ${ROAD.cost.hill}、高山 ${ROAD.cost.mountain}、${ROAD.bridgeNames[era]} ${ROAD.bridgeCost[era]}）— 拖曳畫線`;
  if (id === 'rail') return `${featured('rail') ? '★本時代主打 ' : ''}鐵路 ${RAIL.cost.plain}元/格（丘陵 ${RAIL.cost.hill}、隧道 ${RAIL.cost.mountain}、鐵橋 ${RAIL.bridgeCost}）・要連到車站，沿線 ${RAIL.radius} 格稅收 +${Math.round(RAIL.bonus * 100)}% — 拖曳畫線（可穿過道路）`;
  if (ZONES[id]) return `${ZONES[id].name}區 ${ZONES[id].cost}元/格 — 拖曳畫範圍；要接路、有水${game.sim.powerNeeded() ? '、有電' : ''}才會長`;
  if (FACILITIES[id]) {
    const f = FACILITIES[id];
    const need = { river: '・要蓋在河邊', coast: '・要蓋在海邊', road: '・要緊鄰接到港口的路' }[f.needs] || '';
    const capN = game.sim.facCapacity(id);
    const cap = capN ? `・供應 ${capN.toLocaleString()}・範圍 ${f.coverRadius} 格` : id === 'waterpoint' ? `・水管網路的接點（範圍 ${f.coverRadius} 格）` : '';
    const old = game.sim.isObsolete(id) ? `・⚠ 過時（${game.sim.obsoleteEffects(id).join('、')}）` : '';
    return `${f.name} ${fmt(f.cost)}元・維護 ${fmt(game.sim.facMaintenance(id))}/月${cap}${need}${old}`;
  }
  if (TRANSPORT[id]) {
    const t = TRANSPORT[id];
    const c = Math.round(t.cost * game.sim.eff('transportCost'));
    return `${elevTxt}${featured(id) ? '★本時代主打 ' : ''}${t.name} ${fmt(c)}元/格・維護 ${t.maintenance}/月・範圍 ${t.radius} 格內稅收 +${Math.round(t.bonus * 100)}%、長得較快 — ${t.on === 'road' ? '在已有的道路上拖曳升級' : '任何陸地拖曳畫線'}`;
  }
  if (LINES[id]) return `${LINES[id].name} ${LINES[id].cost}元/格・兩側 ${LINES[id].radius} 格有${id === 'pipe' ? '水' : '電'} — 從設施拖曳畫線`;
  if (id === 'bulldoze') return '拆除 — 拖曳畫範圍（不退錢）';
  return '';
}
function toolLocked(id) {
  const era = game.sim.s.era;
  const f = toolInfo(id);
  return f && era < f.era ? `要到${eraInfo(f.era).name}` : null;
}

// ---------- 介面：工具列 ----------
function buildToolbar() {
  const tb = $('#toolbar');
  tb.innerHTML = '';
  for (const t of TOOLBAR) {
    const b = document.createElement('button');
    b.dataset.id = t.id || t.group;
    b.innerHTML = `<span class="ti">${t.icon}</span><span>${t.label}<span class="key"> ${t.key}</span></span>`;
    b.title = `${t.label}（${t.key}）`;
    b.addEventListener('click', () => (t.group ? openGroup(t) : setTool(t.id)));
    if (t.items?.some(featured) || featured(t.id)) { b.classList.add('hot'); b.title += '（★本時代主打）'; }
    tb.appendChild(b);
  }
}
function openGroup(t) {
  const st = $('#subtools');
  if (!st.hidden && game.group === t.group) { st.hidden = true; game.group = null; return; }
  game.group = t.group;
  st.innerHTML = '';
  for (const id of t.items) {
    const b = document.createElement('button');
    const lock = toolLocked(id);
    const f = toolInfo(id);
    let sub = lock || `${fmt(typeof f.cost === 'number' ? f.cost : f.cost.plain)}元${LINES[id] || TRANSPORT[id] || id === 'rail' ? '/格' : ''}`;
    if (!lock && featured(id)) { sub = `★主打・${sub}`; b.classList.add('hot'); }
    if (FACILITIES[id]?.specialOf) {
      if (game.sim.hasSpecial(id)) sub = '已蓋好';
      else if (FACILITIES[id].specialOf < game.sim.s.era) sub = '已過這個時代';
    }
    if (!lock && game.sim.isObsolete(id)) sub += '・過時';
    b.innerHTML = `${esc(f.name)}<small>${esc(sub)}</small>`;
    b.disabled = !!lock;
    b.dataset.id = id;
    if (game.tool === id) b.classList.add('on');
    b.addEventListener('click', () => { setTool(id); st.hidden = true; });
    st.appendChild(b);
  }
  st.hidden = false;
}
function setTool(id) {
  if (toolLocked(id)) { toast(`${toolName(id)}：${toolLocked(id)}才能用`, 'bad'); return; }
  game.tool = id;
  $('#subtools').hidden = true;
  const grp = TOOLBAR.find((t) => t.items?.includes(id));
  for (const b of document.querySelectorAll('#toolbar button')) b.classList.toggle('on', b.dataset.id === (grp ? grp.group : id));
  $('#tool-tip').textContent = id === 'inspect' ? '' : toolDesc(id);
  // 管線/電線工具自動打開覆蓋圖
  if (id === 'pipe' || FACILITIES[id]?.kind === 'water' || id === 'dam') setOverlay('water', true);
  else if (id === 'wire' || FACILITIES[id]?.kind === 'power') setOverlay('power', true);
  closeSheet();
}

function setElevated(on) {
  if (on && !game.sim.canElevate()) { toast(`要到${eraInfo(ELEVATED.era).name}才能蓋高架`, 'bad'); on = false; }
  game.elevated = on;
  $('#elev-btn').classList.toggle('on', on);
  $('#tool-tip').textContent = game.tool === 'inspect' ? (on ? '高架：選「路」或交通裡的公路、高速公路，拖曳就蓋成高架' : '') : toolDesc(game.tool);
  toast(on ? `🌉 高架開啟：路、公路、高速公路都蓋成高架（每 ${ELEVATED.pillarEvery} 格一根柱子，底下可以蓋東西）` : '高架關閉', '', 3000, 'elevToast');
}
function updateElevButton() {
  const b = $('#elev-btn');
  b.hidden = !game.sim.canElevate();
  if (b.hidden && game.elevated) game.elevated = false;
}

function setOverlay(kind, force) {
  const r = game.renderer;
  const next = force ? kind : r.overlay === kind ? null : kind;
  if (r.overlay === next) return;
  r.overlay = next;
  r.invalidateAll();
  $('#ov-water').classList.toggle('on', next === 'water');
  $('#ov-power').classList.toggle('on', next === 'power');
}

// ---------- 提示 ----------
function toast(text, kind = '', ms = 3500, key = null) {
  const box = $('#toasts');
  if (key && game[key]?.isConnected) game[key].remove();
  const d = document.createElement('div');
  d.className = `toast ${kind}`;
  d.textContent = text;
  box.appendChild(d);
  while (box.children.length > (innerWidth < 700 ? 2 : 4)) box.firstChild.remove();
  setTimeout(() => d.remove(), ms);
  if (key) game[key] = d;
}

// ---------- 視窗 ----------
function openModal(html, { closable = true } = {}) {
  const m = $('#modal');
  m.innerHTML = (closable ? '<button class="x" data-close aria-label="關閉">✕</button>' : '') + html;
  $('#modal-wrap').hidden = false;
  m.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', closeModal));
  game.modalClosable = closable;
  return m;
}
function closeModal() { $('#modal-wrap').hidden = true; game.modalClosable = true; }
function closeSheet() { $('#sheet').hidden = true; }

function openMenu() {
  const saveInfo = game.saveBlocked ? '<span class="tag no">自動存檔已停止（存檔讀取失敗）</span>' : game.lastSave ? `上次自動存檔：${new Date(game.lastSave).toLocaleTimeString('zh-TW')}` : '還沒存檔';
  const m = openModal(`<h2>台灣模擬</h2>
    <div class="menu-list">
      <button class="btn alt" data-a="regions">🗺 區域（買地）</button>
      <button class="btn alt" data-a="era">🏛 時代與特殊建築</button>
      <button class="btn alt" data-a="ms">🏆 里程碑</button>
      <button class="btn alt" data-a="money">💰 收支明細</button>
      <button class="btn alt" data-a="help">❓ 怎麼玩</button>
      <button class="btn alt" data-a="sources">📜 地圖資料來源</button>
      <button class="btn alt" data-a="save">💾 立即存檔</button>
      <button class="btn danger" data-a="restart">↺ 重新開始</button>
    </div>
    <p class="small">${saveInfo}<br>存檔只放在這台裝置的瀏覽器（localStorage），不需帳號、不會上傳。</p>`);
  m.querySelectorAll('[data-a]').forEach((b) => b.addEventListener('click', () => {
    const a = b.dataset.a;
    if (a === 'regions') openRegions();
    else if (a === 'era') openEra();
    else if (a === 'ms') openMilestones();
    else if (a === 'money') openMoney();
    else if (a === 'help') openHelp();
    else if (a === 'sources') openSources();
    else if (a === 'save') { doSave(true); closeModal(); }
    else if (a === 'restart') confirmRestart();
  }));
}

function confirmRestart() {
  const m = openModal(`<h2>重新開始？</h2><p>目前的城市會被新局取代${game.saveBlocked ? '（讀取失敗的舊存檔會先另存一份備份）' : ''}。</p>
    <div class="actions"><button class="btn danger" data-ok>重新開始</button><button class="btn alt" data-close>取消</button></div>`);
  m.querySelector('[data-ok]').addEventListener('click', () => { restart(); closeModal(); });
}

function openRegions() {
  const sim = game.sim, s = sim.s;
  const price = sim.nextLandPrice();
  const rows = game.map.meta.counties.slice().sort((a, b) => (s.owned.includes(b.id) - s.owned.includes(a.id)) || a.id - b.id).map((c) => {
    const own = s.owned.includes(c.id);
    const ports = game.map.ports.filter((p) => p.county === c.id).map((p) => p.name).join('、') || '沒有港口';
    const r = sim.regionBuyable(c.name);
    const info = REGIONS[c.name] || {};
    const type = REGION_TYPES[info.type] || REGION_TYPES.west;
    const bm = type.buildMult[s.era] ?? 1;
    const land = c.name === '高雄市' ? '' : `・田賦 ${fmt(sim.landIncomeOf(c.id))}/月`;
    let act;
    if (own) act = '<span class="tag ok">已擁有</span>';
    else if (!LAND.allowOthers) act = '<span class="tag">之後開放</span>';
    else act = `<button class="btn" data-buy="${esc(c.name)}" ${r.ok ? '' : 'disabled'}>買 ${fmt(price)}</button>`;
    return `<tr><td><b>${esc(c.name)}</b> <span class="tag">${esc(type.name)}</span><br><span class="small">${c.cells} 平方公里・${esc(ports)}<br>建造 ×${bm}・稅收 ×${type.taxMult}${land}<br>${esc(info.note || '')}</span></td><td>${act}</td></tr>`;
  }).join('');
  const m = openModal(`<h2>🗺 區域</h2>
    <p>新區域只能用錢買，一次一塊；價格看「第幾塊」：第 n 塊 = ${fmt(LAND.base)} × ${LAND.ratio}<sup>n−1</sup>。<br>
    下一塊（第 ${s.purchases + 1} 塊）：<b>${fmt(price)}</b>，再下一塊 ${fmt(landPrice(s.purchases + 2))}。目前有 ${fmt(s.money)}。</p>
    <p class="small">建議先買臺南市（平原最多、有安平港）。東部與山區前期建造很貴，越後期越便宜；沒有港口的縣市要從隔壁縣市接路過去。買下的縣市原有聚落每月繳田賦。金門、連江不在這張地圖上。</p>
    <table><tr><th>縣市</th><th></th></tr>${rows}</table>`);
  m.querySelectorAll('[data-buy]').forEach((b) => b.addEventListener('click', () => {
    const name = b.dataset.buy;
    const m2 = openModal(`<h2>買下${esc(name)}？</h2><p>花 <b>${fmt(price)}</b>（第 ${s.purchases + 1} 塊）。買了不能退。</p>
      <div class="actions"><button class="btn" data-ok>確定購買</button><button class="btn alt" data-back>取消</button></div>`);
    m2.querySelector('[data-ok]').addEventListener('click', () => buyRegion(name));
    m2.querySelector('[data-back]').addEventListener('click', openRegions);
  }));
}

function buyRegion(name) {
  const r = game.sim.buyRegion(name);
  if (!r.ok) { toast(`不能買：${r.reason}`, 'bad'); return r; }
  game.renderer.onRegionsChanged();
  closeModal();
  const port = game.map.ports.find((p) => p.county === game.map.countyByName.get(name).id);
  const c = game.map.countyByName.get(name);
  game.renderer.centerOnCell(port ? port.x : Math.round(c.cx), port ? port.y : Math.round(c.cy));
  game.renderer.clampCam();
  doSave();
  return r;
}

function specialDesc(k) {
  const sp = FACILITIES[k];
  const need = sp.needs === 'coast' ? '，要蓋在海邊' : sp.needs === 'road' ? '，要緊鄰接到港口的路' : sp.needs === 'river' ? '，要蓋在河邊' : '';
  const eff = SPECIAL_EFFECTS[k] ? `；效果：${SPECIAL_EFFECTS[k].text}` : sp.water ? `；同時供水 ${sp.water.toLocaleString()}` : '';
  return `${fmt(sp.cost)}元${need}${eff}`;
}

function openEra() {
  const sim = game.sim, s = sim.s;
  const ep = sim.eraProgress();
  const rows = ERAS.map((e) => {
    const cur = e.id === s.era;
    const st = e.id < s.era ? '<span class="tag ok">已走過</span>' : cur ? '<span class="tag ok">現在</span>' : '';
    const cond = e.popToNext ? `人口 ${e.popToNext.toLocaleString()} ＋ ${esc(FACILITIES[e.special].name)}` : `完成條件：人口 ${VICTORY.pop.toLocaleString()} ＋ ${esc(FACILITIES[VICTORY.special].name)} ＋ 蓋到台北`;
    const evs = ERA_EVENTS.filter((x) => x.era === e.id).map((x) => esc(x.name)).join('、');
    return `<tr><td><b>${e.id}. ${e.name}</b> ${st}<br><span class="small">${e.years}・${e.ship.name}（載 ${e.ship.capacity} 人）・稅收 ×${e.taxMult}</span></td>
      <td class="small">${e.unlocks.map(esc).join('、')}<br>${e.popToNext ? '升級條件' : ''}${e.popToNext ? '：' : ''}${cond}<br>事件：${evs}</td></tr>`;
  }).join('');
  let now = '';
  if (ep.last) {
    const vp = sim.victoryProgress();
    now = `<p>${s.victory ? '🏁 <b>已完成這局！</b>可以繼續玩。' : '最後一個時代：同時達成下面幾件事就完成這局。'}</p>
      <ul>${vp.items.map((x) => `<li>${esc(x.text)}${x.now != null ? `（現在 ${x.now.toLocaleString()}）` : ''} ${x.done ? '✅' : ''}</li>`).join('')}</ul>
      ${sim.hasSpecial(VICTORY.special) ? '' : `<button class="btn" data-build="${VICTORY.special}">選擇「${esc(FACILITIES[VICTORY.special].name)}」來蓋（${specialDesc(VICTORY.special)}）</button>`}`;
  } else {
    const sp = FACILITIES[ep.special];
    now = `<p>要進入<b>${esc(ep.nextName)}</b>，兩件事都要做到：</p>
      <ul><li>人口 ${ep.pop.toLocaleString()} / ${ep.popNeed.toLocaleString()} ${ep.pop >= ep.popNeed ? '✅' : ''}</li>
      <li>蓋好「${esc(sp.name)}」（${specialDesc(ep.special)}）${ep.specialBuilt ? '✅' : ''}</li></ul>
      ${ep.specialBuilt ? '' : `<button class="btn" data-build="${ep.special}">選擇「${esc(sp.name)}」來蓋</button>`}`;
  }
  // 改建
  const old = sim.rebuildPlan();
  const obs = sim.obsoleteFacilities();
  let rebuild = `<h3>🏗 建築改建（付費）</h3><p class="small">換時代後，舊建築會<b>一直保留原本的樣式</b>，不會自動改建；要付錢改建才會換成新時代樣式（容量 ×${ERA_UPGRADES.capMult[s.era]}）。舊樣式最多只能長到它那個時代的最高等級。空地新蓋的建築直接是這個時代的樣式。</p>`;
  if (old.cells.length) rebuild += `<p>還有 <b>${old.cells.length}</b> 格是舊樣式。<button class="btn" data-rebuild-all ${old.cost > s.money ? 'disabled' : ''}>花 ${fmt(old.cost)} 全部改建</button></p>`;
  else rebuild += '<p class="small">✅ 所有建築都是這個時代的樣式。</p>';
  if (obs.length) {
    const by = {};
    for (const i of obs) { const k = BLD_KEY[s.grid.bld[i]]; (by[k] = by[k] || []).push(i); }
    rebuild += Object.entries(by).map(([k, list]) => {
      const u = sim.facilityUpgrade(list[0]);
      const btn = u?.to ? `<button class="btn" data-upgrade="${k}">逐一改建成${esc(FACILITIES[u.to].name)}（每座 ${fmt(u.cost)}）</button>` : '';
      return `<p>⚠ <b>${esc(FACILITIES[k].name)} ×${list.length}（過時，照常運作但效果變差：${esc(sim.obsoleteEffects(k).join('、'))}）</b><br><span class="small">${esc(OBSOLETE[k].text)}</span> ${btn}</p>`;
    }).join('');
  }
  const act = sim.activeEvents();
  const evHtml = act.length ? `<h3>📰 時代事件</h3><ul>${act.map((e) => `<li><b>${esc(e.name)}</b>：${esc(e.text)}（還有 ${e.monthsLeft} 個月）</li>`).join('')}</ul>` : '';
  const feat = eraInfo(s.era).featured ? `<p>★ <b>本時代主打：${esc(eraInfo(s.era).featuredText)}</b></p>` : '';
  const m = openModal(`<h2>🏛 ${esc(ep.name)}</h2>${feat}${now}${rebuild}${evHtml}<h3>時代一覽</h3><table>${rows}</table>
    ${s.era < POWER_REQUIRED_FROM_ERA ? `<p class="small">提醒：從${eraInfo(POWER_REQUIRED_FROM_ERA).name}開始，區塊要有電才會成長，記得先存錢蓋發電廠。</p>` : ''}
    <h3>樣式表（時代＋等級）</h3>${styleTable()}`);
  m.querySelector('[data-build]')?.addEventListener('click', (e) => { setTool(e.target.dataset.build); closeModal(); });
  m.querySelector('[data-rebuild-all]')?.addEventListener('click', () => {
    const r = sim.rebuildZones();
    if (!r.ok) toast(`不能改建：${r.reason}`, 'bad');
    openEra();
  });
  m.querySelectorAll('[data-upgrade]').forEach((b) => b.addEventListener('click', () => {
    let n = 0, fail = null;
    for (const i of sim.obsoleteFacilities().filter((j) => BLD_KEY[s.grid.bld[j]] === b.dataset.upgrade)) {
      const r = sim.upgradeFacility(i);
      if (r.ok) n++; else { fail = r.reason; break; }
    }
    if (!n && fail) toast(`不能改建：${fail}`, 'bad');
    openEra();
  }));
}

function styleTable() {
  const head = `<tr><th></th>${ERAS.map((e) => `<th>${esc(e.name.replace('時代', ''))}</th>`).join('')}</tr>`;
  const body = ['R', 'C', 'I'].map((z) => `<tr><td>${ZONES[z].name}</td>${ERAS.map((e) => `<td class="small">${BUILDING_STYLES[z][e.id].map(esc).join('→')}</td>`).join('')}</tr>`).join('');
  return `<div class="scroll-x"><table>${head}${body}</table></div>`;
}

function eraModal(e) {
  const sim = game.sim;
  const era = eraInfo(e.era);
  const newTools = [...Object.entries(FACILITIES), ...Object.entries(TRANSPORT), ['rail', RAIL]].filter(([, f]) => f.era === e.era).map(([, f]) => f.name);
  openModal(`<h2>🎉 進入${esc(era.name)}（${era.years}）</h2>
    <ul>
      <li>船：${esc(era.ship.name)}（載 ${era.ship.capacity} 人）；港口每月可卸 ${era.portUnload} 人</li>
      <li>區塊最高可長到第 ${era.maxLevel} 級；稅收 ×${era.taxMult}</li>
      ${era.featured ? `<li>★ <b>本時代主打：${esc(era.featuredText)}</b>（工具列「交通」）</li>` : ''}
      ${e.era === ELEVATED.era ? `<li>🌉 從現在起任何道路都可以蓋成高架（右側「高架」切換）</li>` : ''}
      ${newTools.length ? `<li>新建築：${newTools.map(esc).join('、')}</li>` : ''}
      <li>舊建築 ${e.old} 格會保留原本的樣式；想換成「${esc(era.zoneNames.R)}／${esc(era.zoneNames.C)}／${esc(era.zoneNames.I)}」的樣式要付錢改建（點格子或在「時代」全部改建）。</li>
      ${(e.obsolete || []).map((t) => `<li>⚠ ${esc(t)}（舊設施照常運作，不會被換掉；付錢改建才會變成新版本）</li>`).join('')}
      ${e.era > 1 && FACILITIES[ERAS[e.era - 2].special] ? `<li>上個時代的${esc(FACILITIES[ERAS[e.era - 2].special].name)}留下來當地標，附近幸福度 +${LANDMARK.happiness}。</li>` : ''}
    </ul>
    <div class="actions"><button class="btn" data-close>好</button><button class="btn alt" data-more>看時代詳情</button></div>`);
  $('#modal [data-more]').addEventListener('click', openEra);
  void sim;
}

function victoryModal() {
  const v = game.sim.s.victory;
  if (!v) return;
  const years = Math.floor(v.month / 12);
  const m = openModal(`<h2>🏁 完成！台灣模擬</h2>
    <p>從 ${TIME.startYear} 年的高雄港出發，一路發展到現代。</p>
    <table>
      <tr><td>完成年份</td><td>${TIME.startYear + years} 年（經營 ${years} 年 ${v.month % 12} 個月）</td></tr>
      <tr><td>人口</td><td>${v.pop.toLocaleString()} 人</td></tr>
      <tr><td>擁有縣市</td><td>${v.regions.length} 個：${v.regions.map(esc).join('、')}</td></tr>
      <tr><td>金錢</td><td>${fmt(v.money)}</td></tr>
      <tr><td>里程碑</td><td>${v.milestones} / ${MILESTONES.length}</td></tr>
    </table>
    <div class="actions"><button class="btn" data-close>繼續玩</button><button class="btn alt" data-restart>重新開始</button></div>`);
  m.querySelector('[data-restart]').addEventListener('click', confirmRestart);
}

function openMilestones() {
  const ms = game.sim.s.milestones;
  const li = MILESTONES.map((m) => {
    const done = ms[m.id] !== undefined;
    const when = done ? `<span class="small">（${TIME.startYear + Math.floor(ms[m.id] / 12)}年）</span>` : '';
    return `<li>${done ? '✅' : '⬜'} ${esc(m.name)} ${when}</li>`;
  }).join('');
  openModal(`<h2>🏆 里程碑</h2><ul class="ms">${li}</ul>`);
}

function openMoney() {
  const sim = game.sim, st = sim.s.stats, b = st.breakdown || {};
  const inc = b.income || {}, exp = b.expense || {};
  const f = sim.forecast();
  const loan = sim.s.loan.taken ? `已借（還剩 ${sim.s.loan.monthsLeft} 個月，每月 ${FINANCE.loan.monthlyPayment} 元）` : `還沒借（可借一次 ${fmt(FINANCE.loan.amount)}）`;
  openModal(`<h2>💰 收支</h2>
    <p>目前 <b>${fmt(sim.s.money)}</b> 元。上個月淨收支 <b>${st.net >= 0 ? '+' : ''}${fmt(st.net)}</b>；照現在預估每月 ${f.net >= 0 ? '+' : ''}${fmt(f.net)}。</p>
    <table>
      <tr><th>收入（上月）</th><th></th><th>支出（上月）</th><th></th></tr>
      <tr><td>住宅稅</td><td>${fmt(inc.R || 0)}</td><td>道路與橋維護</td><td>${fmt(exp.roads || 0)}</td></tr>
      <tr><td>商業稅</td><td>${fmt(inc.C || 0)}</td><td>設施維護</td><td>${fmt(exp.facilities || 0)}</td></tr>
      <tr><td>工業稅</td><td>${fmt(inc.I || 0)}</td><td>水管電線維護</td><td>${fmt(exp.lines || 0)}</td></tr>
      <tr><td>港口貿易</td><td>${fmt(inc.trade || 0)}</td><td>交通維護</td><td>${fmt(exp.transport || 0)}</td></tr>
      <tr><td>田賦（買下的縣市）</td><td>${fmt(inc.land || 0)}</td><td>貸款還款</td><td>${fmt(exp.loan || 0)}</td></tr>
    </table>
    <p class="small">稅收 = 基本稅率 × 時代倍率（${eraInfo(sim.s.era).taxMult}）× 縣市倍率 × 交通加成${sim.activeEvents().length ? `；時代事件：${sim.activeEvents().map((e) => esc(e.name)).join('、')}` : ''}。</p>
    <p class="small">建造費一次付清，不算在每月支出。緊急貸款：${loan}。<br>
    預警：赤字時錢撐不到 ${FINANCE.warnRunwayMonths} 個月會黃色預警、撐不到 ${FINANCE.dangerRunwayMonths} 個月紅色危急；連續 ${FINANCE.deficitStreakWarn} 個月赤字會提醒。</p>`);
}

function openHelp() {
  openModal(`<h2>❓ 怎麼玩</h2>
  <ol>
    <li><b>鋪路</b>：選「路」，從高雄港拖曳畫出道路。路要連回港口。過河會自動架橋（比較貴）。</li>
    <li><b>劃區</b>：選「住／商／工」，在路旁拖曳畫範圍。區要緊鄰接到港口的路。</li>
    <li><b>給水</b>：清末蓋「水井」（範圍 ${FACILITIES.well.coverRadius} 格）。日據時代可在河邊蓋自來水廠，用水管送水。</li>
    <li><b>給電</b>：日據時代開始，區塊要有電才會長：蓋燃煤發電廠，用電線送電。</li>
    <li><b>移民</b>：船會定期開進港口。有空房、有工作、有水${game.sim.powerNeeded() ? '有電' : ''}，移民才會下船，沿著道路走到住宅。</li>
    <li><b>需求條</b>：住／商／工往右（綠/藍/黃）代表缺這種區。工業太靠近住宅會降低幸福度。</li>
    <li><b>時代</b>：人口達標＋蓋好時代特殊建築（清末時代是海邊的燈塔）就進入下一個時代，共 5 個時代。</li>
    <li><b>改建</b>：換時代後，舊建築會保留原本的樣式，不會自動改建。點格子或在「時代」付錢改建，才會換成新時代樣式（住得更多、可以再長高）。過時的水井、燃煤電廠照常運作但效果變差（地圖上有 ⚠），付錢改建才會變成新設施。</li>
    <li><b>鐵路</b>：日據時代的主打建築。在「交通」鋪鐵路、在旁邊蓋車站，沿線 ${RAIL.radius} 格稅收 +${Math.round(RAIL.bonus * 100)}%、長得更快（沒連到車站就沒效果）。</li>
    <li><b>交通</b>：民國光復以後可以把路升級成公路；經濟起飛時代的主打是高速公路；現代可以蓋捷運：範圍內稅收變高、長得更快。</li>
    <li><b>高架</b>：經濟起飛以後按右側 🌉 打開，路、公路、高速公路都蓋成高架；每 ${ELEVATED.pillarEvery} 格一根柱子，柱子以外的格子底下可以劃區、蓋設施。</li>
    <li><b>買地</b>：在「區域」花錢買下新縣市，例如臺南市。</li>
    <li><b>完成</b>：在現代達成人口 ${VICTORY.pop.toLocaleString()}、蓋好摩天大樓、蓋到台北，就完成這局（可以繼續玩）。</li>
    <li><b>破產</b>：錢低於 0 時可以借一次緊急貸款；借過之後錢又用完就輸了。</li>
  </ol>
  <h3>操作</h3>
  <p>手機：「查看」工具下單指拖地圖、點格子看資訊；其他工具單指拖曳畫範圍；雙指縮放與移動。放開前拖回起點＝取消。<br>
  電腦：滑鼠拖曳、滾輪縮放、右鍵或中鍵拖地圖；數字鍵 1–9 切工具、Ctrl+Z 復原、空白鍵暫停。</p>`);
}

function openSources() {
  const meta = game.map.meta;
  openModal(`<h2>📜 地圖資料來源</h2>
  <ul>
    <li><b>海岸線、縣市界</b>：Natural Earth（1:10m Admin 1 – States, Provinces），公有領域（Public Domain）。naturalearthdata.com</li>
    <li><b>高度與河流</b>：${meta.heightSource === 'srtm' ? 'SRTM 1 角秒數值地形資料（NASA／USGS，公有領域：SRTM terrain data courtesy of the U.S. Geological Survey），經 Mapzen／AWS Terrain Tiles（Mapzen）取得，平均到每格約 1 公里。河流是用高度推算水流方向與集水面積畫出來的，不是真實河道圖。' : meta.heightSource === 'dem' ? '內政部 20 公尺網格數值地形模型，依「政府資料開放授權條款－第1版」使用。' : '本遊戲原創的近似地形模型（依山脈、盆地、河口位置等一般地理常識手動輸入，不是真實測量資料），程式見 tools/terrain_model.py。之後可換成內政部 20 公尺數值地形模型（政府資料開放授權條款－第1版）。'}</li>
    <li><b>港口位置</b>：依公開的港口地理位置手動標示。</li>
  </ul>
  <p class="small">每格約 ${meta.cellKm} 公里（${meta.w}×${meta.h} 格）。遊戲不載入真實道路與建築，所有美術由程式原創繪製；執行時不連任何外部網站。完整授權文字見專案的 LICENSE-THIRD-PARTY.md。</p>`);
}

function loanModal() {
  const L = FINANCE.loan;
  const m = openModal(`<h2>💸 錢用完了！</h2>
    <p>你的錢已經低於 0。可以借<b>一次</b>緊急貸款：</p>
    <ul><li>借 <b>${fmt(L.amount)}</b> 元</li><li>每月還 ${L.monthlyPayment.toLocaleString()} 元，共 ${L.months} 個月（總共還 ${fmt(L.monthlyPayment * L.months)}）</li>
    <li>借過之後，錢再低於 0 就破產</li></ul>
    <div class="actions"><button class="btn" data-loan>借緊急貸款</button><button class="btn danger" data-no>不借（結束這局）</button></div>`, { closable: false });
  m.querySelector('[data-loan]').addEventListener('click', () => { game.sim.takeLoan(); closeModal(); doSave(); });
  m.querySelector('[data-no]').addEventListener('click', () => { game.sim.declineLoan(); closeModal(); });
}

function gameOverModal() {
  const go = game.sim.s.gameOver;
  const years = Math.floor(go.month / 12);
  const m = openModal(`<h2>📉 破產了</h2>
    <p>${esc(go.reason)}</p>
    <table>
      <tr><td>蓋到哪</td><td>${go.regions.map(esc).join('、')}</td></tr>
      <tr><td>人口</td><td>${go.pop.toLocaleString()} 人</td></tr>
      <tr><td>時代</td><td>${esc(eraInfo(go.era).name)}</td></tr>
      <tr><td>經營</td><td>${years} 年 ${go.month % 12} 個月（${TIME.startYear}–${TIME.startYear + years}年）</td></tr>
      <tr><td>里程碑</td><td>${go.milestones} / ${MILESTONES.length}</td></tr>
    </table>
    <div class="actions"><button class="btn" data-restart>重新開始</button></div>`, { closable: false });
  m.querySelector('[data-restart]').addEventListener('click', () => { restart(); closeModal(); });
}

// ---------- 查看格子 ----------
function inspect(cell) {
  const sim = game.sim, m = game.map, g = sim.s.grid, i = cell.i;
  const t = m.terrain[i];
  const cty = m.counties.get(m.county[i]);
  const own = cty && sim.s.owned.includes(cty.id);
  const rows = [['地形', `${TERRAIN_NAMES[t]}${t ? `・約 ${Math.round(m.heightM[i])} 公尺` : ''}${m.coast[i] ? '・海岸' : ''}`]];
  if (cty) rows.push(['縣市', `${cty.name}${own ? '' : '（未購買）'}`]);
  if (g.road[i]) rows.push(['道路', `${g.road[i] === 2 ? '橋' : '道路'}${sim.connected[i] ? '・已接上港口' : '・沒接上港口'}`]);
  if (g.trans[i]) rows.push(['交通', Object.values(TRANSPORT).find((t) => t.level === g.trans[i])?.name || '']);
  if (g.road[i] && g.elev[i]) rows.push(['高架', sim.pillar[i] ? '有柱子（這格底下不能蓋）' : '底下可以蓋東西']);
  if (g.rail[i]) rows.push(['鐵路', `${g.rail[i] === 2 ? '鐵橋' : '鐵軌'}・${sim.railActive[i] ? '已連到車站' : '還沒連到車站（沒有效果）'}`]);
  if (g.metro[i]) rows.push(['捷運', '捷運線']);
  const key = BLD_KEY[g.bld[i]];
  const actions = [];
  if (g.bld[i]) {
    const f = FACILITIES[key];
    let txt = key === 'port' ? (m.ports.find((p) => p.y * m.w + p.x === i)?.name || '港口') : f.name;
    if (f?.specialOf && f.specialOf < sim.s.era) txt += `（地標：附近幸福度 +${LANDMARK.happiness}）`;
    rows.push(['建築', txt]);
    if (sim.isObsolete(key)) rows.push(['⚠ 過時', `照常運作但效果變差：${sim.obsoleteEffects(key).join('、')}。${OBSOLETE[key].text}`]);
    const up = sim.facilityUpgrade(i);
    if (up && sim.isObsolete(key)) {
      if (up.to) actions.push(`<button class="btn" data-upgrade ${up.reason ? 'disabled' : ''}>改建成${esc(FACILITIES[up.to].name)}（${fmt(up.cost)}）</button>${up.reason ? ` <span class="small">${esc(up.reason)}</span>` : ''}`);
      else actions.push(`<span class="small">${esc(up.reason)}</span>`);
    }
  }
  let why = [];
  if (g.zone[i]) {
    const z = ZONE_KEY[g.zone[i]];
    const st = sim.cellStatus(i);
    const bera = sim.beraAt(i);
    rows.push(['分區', `${ZONES[z].name}・第 ${g.level[i]} 級`]);
    if (g.level[i]) rows.push(['樣式', `${styleName(z, bera, g.level[i])}（${eraInfo(bera).name}樣式${bera < sim.s.era ? '・舊' : ''}）`]);
    if (st.transit) rows.push(['交通加成', `稅收 +${st.transit}%`]);
    if (g.level[i] && bera < sim.s.era) {
      const c = sim.zoneRebuildCost(i);
      actions.push(`<button class="btn" data-rebuild ${c > sim.s.money ? 'disabled' : ''}>改建成${esc(eraInfo(sim.s.era).name)}樣式（${fmt(c)}）</button>`);
    }
    if (z === 'R') rows.push(['人口', `${g.pop[i]} / ${sim.capAt(i)}`], ['幸福度', `${st.happy}`]);
    else rows.push(['工作', `${sim.capAt(i)} 個`]);
    rows.push(['水／電', `${st.water ? '有水' : st.waterCov ? '水量不足' : '沒水'}・${st.power ? '有電' : st.powerCov ? '電力不足' : '沒電'}${sim.powerNeeded() ? '' : '（這個時代還不需要電）'}`]);
    why = st.why;
  }
  if (g.pipe[i] || g.wire[i]) rows.push(['管線', [g.pipe[i] && '水管', g.wire[i] && '電線'].filter(Boolean).join('、')]);
  const sheet = $('#sheet');
  sheet.innerHTML = `<button class="x" aria-label="關閉">✕</button><h3>格子 (${cell.x}, ${cell.y})</h3>
    <div class="kv">${rows.map(([k, v]) => `<span>${esc(k)}</span><span>${esc(v)}</span>`).join('')}</div>
    ${why.length ? `<ul class="why">${why.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>` : ''}
    ${actions.length ? `<p>${actions.join(' ')}</p>` : ''}
    ${cty && !own ? `<p><button class="btn" data-buy>到「區域」購買${esc(cty.name)}（${fmt(sim.nextLandPrice())}）</button></p>` : ''}`;
  sheet.hidden = false;
  sheet.querySelector('.x').addEventListener('click', closeSheet);
  sheet.querySelector('[data-buy]')?.addEventListener('click', () => { closeSheet(); openRegions(); });
  sheet.querySelector('[data-rebuild]')?.addEventListener('click', () => {
    const r = sim.rebuildZones([i]);
    if (!r.ok) toast(`不能改建：${r.reason}`, 'bad'); else inspect(cell);
  });
  sheet.querySelector('[data-upgrade]')?.addEventListener('click', () => {
    const r = sim.upgradeFacility(i);
    if (!r.ok) toast(`不能改建：${r.reason}`, 'bad'); else inspect(cell);
  });
}

// ---------- 建造 ----------
function onPreview(tool, x0, y0, x1, y1) {
  const r = game.renderer;
  if (!tool) { r.preview = null; $('#tool-tip').textContent = game.tool === 'inspect' ? '' : toolDesc(game.tool); return; }
  const p = game.sim.plan(tool, x0, y0, x1, y1, { elev: elevOn(tool) });
  p.allCells = game.sim.cellsFor(tool, x0, y0, x1, y1);
  r.preview = p;
  const n = p.cells.length;
  $('#tool-tip').textContent = p.reason ? `✖ ${p.reason}${p.cost ? `（需要 ${fmt(p.cost)}）` : ''}` : `${toolName(tool)} ${n} 格・${fmt(p.cost)} 元${p.skipped.length ? `（略過：${p.skipped[0]}）` : ''}`;
}
function onBuild(tool, x0, y0, x1, y1) {
  if (game.sim.s.gameOver) return;
  const r = game.sim.build(tool, x0, y0, x1, y1, { elev: elevOn(tool) });
  if (!r.ok) { toast(`不能蓋：${r.reason}`, 'bad', 2500, 'buildToast'); return; }
  if (r.cost) game.renderer.addEffect(game.sim.idx(x1, y1), `−${fmt(r.cost)}`, '#ffd0a0');
  $('#undo-btn').disabled = false;
}
function undo() {
  const r = game.sim.undo();
  if (r.ok) toast(`已復原（退回 ${fmt(r.refund)} 元）`, '', 2000, 'undoToast');
  else toast(r.reason, '', 1500, 'undoToast');
}

// ---------- 事件 ----------
function handleEvents() {
  const sim = game.sim;
  for (const e of sim.events) {
    if (e.type === 'ship') {
      const msg = e.unloaded ? `⛵ ${e.shipName}抵達${e.port}：上岸 ${e.unloaded} / ${e.passengers} 人${e.why ? `（${e.why}）` : ''}` : `⛵ ${e.shipName}抵達${e.port}，沒人下船：${e.why}`;
      toast(msg, e.unloaded ? '' : 'bad', 3000, 'shipToast');
      game.renderer.addWalkers(e);
    } else if (e.type === 'milestone') toast(`🏆 里程碑達成：${e.name}`, 'good', 5000);
    else if (e.type === 'era') {
      toast(`🎉 進入${e.name}！`, 'good', 6000);
      game.renderer.invalidateAll();
      if (e.era === POWER_REQUIRED_FROM_ERA) toast('⚡ 從現在起，區塊要有電才會成長：蓋燃煤發電廠，用電線送電。', '', 9000);
      buildToolbar(); setTool(game.tool); updateElevButton();
      if (eraInfo(e.era).featured) toast(`★ 本時代主打：${eraInfo(e.era).featuredText}（在「交通」）`, 'good', 9000);
      eraModal(e);
    } else if (e.type === 'eraEvent') toast(`📰 ${e.name}：${e.text}`, 'good', 9000);
    else if (e.type === 'victory') victoryModal();
    else if (e.type === 'rebuild') toast(`🏗 改建 ${e.count} 格成${eraInfo(sim.s.era).name}樣式（${fmt(e.cost)}）`, 'good', 3000);
    else if (e.type === 'upgrade') toast(`🏗 ${e.from}改建成${e.to}（${fmt(e.cost)}）`, 'good', 4000);
    else if (e.type === 'autoRebuild') { /* 自動改建（預設關閉） */ } else if (e.type === 'warning') toast(e.level === 'danger' ? `🚨 危急：錢大約 ${Math.max(0, Math.floor(e.runway))} 個月內會用完！` : `⚠ 預警：照目前赤字，錢約 ${Math.floor(e.runway)} 個月後用完`, 'bad', 6000);
    else if (e.type === 'deficit') toast(`⚠ 已連續 ${e.months} 個月赤字，考慮少蓋一點或拆掉沒用的設施`, 'bad', 6000);
    else if (e.type === 'loanOffer') loanModal();
    else if (e.type === 'loanTaken') toast(`已借緊急貸款 ${fmt(FINANCE.loan.amount)}`, '', 4000);
    else if (e.type === 'gameOver') { gameOverModal(); try { localStorage.removeItem(SAVE_KEY); } catch { /* 忽略 */ } }
    else if (e.type === 'region') toast(`🗺 買下${e.name}（${fmt(e.price)}）`, 'good', 5000);
  }
  sim.events.length = 0;
}

// ---------- 介面數字 ----------
function updateHud() {
  const sim = game.sim, s = sim.s;
  $('#money').textContent = fmt(s.money);
  const net = s.month > 0 ? s.stats.net : sim.forecast().net;
  const ne = $('#net');
  ne.textContent = `${net >= 0 ? '+' : ''}${fmt(net)}/月`;
  ne.className = net >= 0 ? 'pos' : 'neg';
  $('#pop').textContent = sim.totals.pop.toLocaleString('zh-TW');
  $('#date').textContent = sim.dateText();
  $('#era-name').textContent = eraInfo(s.era).name;
  for (const k of ['R', 'C', 'I']) {
    const v = sim.demand[k];
    const em = document.querySelector(`.dbar[data-k=${k}] em`);
    em.style.left = v >= 0 ? '50%' : `${50 + v * 50}%`;
    em.style.width = `${Math.abs(v) * 50}%`;
  }
  const u = sim.util;
  $('#util').textContent = `💧${u.water.use}/${u.water.cap}${sim.powerNeeded() || u.power.cap ? `  ⚡${u.power.use}/${u.power.cap}` : ''}`;
  for (const b of document.querySelectorAll('.speed button')) b.classList.toggle('on', Number(b.dataset.speed) === game.speedIdx);
  $('#undo-btn').disabled = !sim.undoStack.length;
  // 預警橫幅
  const bn = $('#banner');
  if (game.saveBlocked) {
    bn.hidden = false;
    bn.className = 'banner danger';
    if (!bn.dataset.broken) {
      bn.dataset.broken = '1';
      bn.innerHTML = `存檔讀取失敗（${esc(game.saveBlocked)}）。原檔保留不覆蓋，自動存檔已停止。<button data-restart>備份並開新局</button>`;
      bn.querySelector('[data-restart]').addEventListener('click', confirmRestart);
    }
  } else if (s.warning === 'warn' || s.warning === 'danger') {
    const f = s.stats.net;
    const runway = f < 0 ? Math.floor(s.money / -f) : 0;
    bn.hidden = false;
    bn.className = `banner ${s.warning}`;
    bn.textContent = s.warning === 'danger' ? `🚨 危急：錢大約 ${runway} 個月內用完（每月 ${fmt(f)}）` : `⚠ 預警：照目前赤字，錢約 ${runway} 個月後用完（每月 ${fmt(f)}）`;
    delete bn.dataset.broken;
  } else { bn.hidden = true; delete bn.dataset.broken; }
}

// ---------- 存檔 ----------
function doSave(manual = false) {
  if (game.saveBlocked || game.sim.s.gameOver) { if (manual) toast('自動存檔已停止：請先處理讀取失敗的存檔', 'bad'); return false; }
  const ok = saveToStorage(game.sim);
  game.lastSave = Date.now();
  game.lastSaveOk = ok;
  if (manual) toast(ok ? '已存檔' : '存檔失敗（瀏覽器不允許 localStorage？）', ok ? 'good' : 'bad', 2000);
  return ok;
}

function restart() {
  if (game.saveBlocked) {
    try { const raw = localStorage.getItem(SAVE_KEY); if (raw) backupBrokenSave(raw); } catch { /* 忽略 */ }
    game.saveBlocked = null;
  }
  try { localStorage.removeItem(SAVE_KEY); } catch { /* 忽略 */ }
  startSim(new Sim(game.map));
  doSave();
  toast('開新局：從高雄港開始！', 'good');
}

function startSim(sim) {
  game.sim = sim;
  if (!game.renderer) {
    game.renderer = new Renderer($('#view'), sim);
  } else {
    game.renderer.sim = sim;
    game.renderer.walkers = [];
    game.renderer.computeColors();
    game.renderer.invalidateAll();
  }
  const r = game.renderer;
  r.resize(innerWidth, innerHeight);
  const port = game.map.ports.find((p) => p.name === '高雄港');
  r.centerOnCell(port.x + 2, port.y - 1, r.isMobile ? 0.8 : 1);
  r.clampCam();
  buildToolbar();
  setTool('inspect');
  game.elevated = false;
  $('#elev-btn').classList.remove('on');
  updateElevButton();
  closeSheet();
  if (sim.s.pendingLoan) loanModal();
  if (sim.s.gameOver) gameOverModal();
}

// ---------- 主迴圈 ----------
let lastT = 0, hudT = 0, saveT = 0;
function loop(now) {
  const dt = Math.min(0.25, (now - (lastT || now)) / 1000);
  lastT = now;
  const sim = game.sim;
  const speed = TIME.speeds[game.speedIdx];
  const modalOpen = !$('#modal-wrap').hidden && !game.modalClosable;
  if (speed > 0 && !modalOpen && !sim.s.gameOver && !sim.s.pendingLoan) sim.advance((dt * speed) / TIME.monthSeconds);
  if (sim.events.length) handleEvents();
  if (sim.dirtyCells.size || sim.dirtyAll) {
    game.renderer.applyDirty([...sim.dirtyCells], sim.dirtyAll);
    sim.dirtyCells.clear();
    sim.dirtyAll = false;
  }
  game.renderer.frame(now, game.input.settling);
  if (now - hudT > 200) { updateHud(); hudT = now; }
  if (now - saveT > TIME.autosaveSeconds * 1000) { saveT = now; doSave(); }
  requestAnimationFrame(loop);
}

// ---------- 啟動 ----------
async function boot() {
  game.map = await loadMapBrowser();
  const loaded = loadFromStorage(game.map);
  let sim;
  if (loaded.sim) sim = loaded.sim;
  else {
    sim = new Sim(game.map);
    if (loaded.error) game.saveBlocked = loaded.error;
  }
  startSim(sim);
  if (params.has('speed')) game.speedIdx = Math.max(0, Math.min(3, Number(params.get('speed')) === 4 ? 3 : Number(params.get('speed'))));
  game.input = new Input($('#view'), game.renderer, {
    getTool: () => game.tool,
    onPreview, onBuild,
    onTap: (cell) => { if (game.tool === 'inspect') inspect(cell); },
    onCamera: () => {},
  });
  // 按鈕
  document.querySelectorAll('.speed button').forEach((b) => b.addEventListener('click', () => { game.speedIdx = Number(b.dataset.speed); updateHud(); }));
  $('#menu-btn').addEventListener('click', openMenu);
  $('#undo-btn').addEventListener('click', undo);
  $('#ov-water').addEventListener('click', () => setOverlay('water'));
  $('#ov-power').addEventListener('click', () => setOverlay('power'));
  $('#regions-btn').addEventListener('click', openRegions);
  $('#era-btn').addEventListener('click', openEra);
  $('#ms-btn').addEventListener('click', openMilestones);
  $('#elev-btn').addEventListener('click', () => setElevated(!game.elevated));
  $('#modal-wrap').addEventListener('click', (e) => { if (e.target.id === 'modal-wrap' && game.modalClosable) closeModal(); });
  addEventListener('resize', () => { game.renderer.resize(innerWidth, innerHeight); game.renderer.clampCam(); });
  addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); undo(); return; }
    if (e.key === 'Escape') { if (game.modalClosable) closeModal(); closeSheet(); $('#subtools').hidden = true; setTool('inspect'); return; }
    if (e.code === 'Space' && e.target === document.body) { e.preventDefault(); game.speedIdx = game.speedIdx ? 0 : 1; updateHud(); return; }
    const t = TOOLBAR.find((x) => x.key === e.key);
    if (t) { if (t.group) openGroup(t); else setTool(t.id); }
    if (e.key === '+' || e.key === '=') { game.renderer.cam.z *= 1.2; game.renderer.clampCam(); game.input.lastZoomAt = performance.now(); }
    if (e.key === '-') { game.renderer.cam.z /= 1.2; game.renderer.clampCam(); game.input.lastZoomAt = performance.now(); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) doSave(); });
  $('#loading').hidden = true;
  if (!loaded.sim && !loaded.error) toast('歡迎！先選「路」從高雄港拖出一條路，再在旁邊劃住宅區、蓋水井。', 'good', 8000);
  if (loaded.error) toast('存檔讀取失敗，原檔已保留；自動存檔已停止。', 'bad', 8000);
  if (loaded.migratedFrom) toast(`已把第 ${loaded.migratedFrom} 版的存檔升級成第 2 版（原檔另存備份）。`, 'good', 8000);
  updateHud();
  requestAnimationFrame(loop);

  if (DEBUG) {
    window.__game = {
      get sim() { return game.sim; }, get renderer() { return game.renderer; }, map: game.map, game,
      advance: (months) => { game.sim.advance(months); handleEvents(); },
      build: (...a) => game.sim.build(...a),
      buyRegion, setTool, undo, doSave, restart, openEra, inspect,
      get loaded() { return loaded; },
      screenOf: (x, y) => game.renderer.cellToScreen(x, y),
      serialize: () => serialize(game.sim),
      roundTrip: () => { const a = JSON.stringify(serialize(game.sim)); const b = JSON.stringify(serialize(deserialize(game.map, JSON.parse(a)))); return a.replace(/"savedAt":\d+/, '') === b.replace(/"savedAt":\d+/, ''); },
      get saveBlocked() { return game.saveBlocked; },
    };
  }
}

boot().catch((e) => {
  $('#loading').textContent = `載入失敗：${e.message}`;
  console.error(e);
});
