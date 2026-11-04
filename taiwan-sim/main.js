// 台灣模擬：啟動、遊戲迴圈、介面。
import {
  TIME, ERAS, ZONES, ROAD, FACILITIES, LINES, FINANCE, MILESTONES, LAND, TERRAIN_NAMES, MAX_PLAYABLE_ERA, POWER_REQUIRED_FROM_ERA, SAVE_KEY,
} from './config.js';
import { loadMapBrowser } from './map.js';
import { Sim, ZONE_KEY, BLD_KEY, landPrice, eraInfo } from './sim.js';
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
  { id: 'R', icon: '🏠', label: '住', key: '3' },
  { id: 'C', icon: '🏪', label: '商', key: '4' },
  { id: 'I', icon: '🏭', label: '工', key: '5' },
  { group: 'water', icon: '💧', label: '水', key: '6', items: ['well', 'waterworks', 'pipe'] },
  { group: 'power', icon: '⚡', label: '電', key: '7', items: ['coal', 'wire'] },
  { group: 'special', icon: '🏛️', label: '特殊', key: '8', items: ['lighthouse', 'station'] },
  { id: 'bulldoze', icon: '🧹', label: '拆除', key: '9' },
];

const game = {
  map: null, sim: null, renderer: null, input: null,
  tool: 'inspect', group: null, speedIdx: 1, saveBlocked: null, lastSave: 0, lastSaveOk: null,
  shipToast: null, paused: false,
};

// ---------- 工具說明 ----------
function toolName(id) {
  const era = Math.min(game.sim?.s.era || 1, 2);
  if (id === 'road') return ROAD.names[era];
  if (ZONES[id]) return `${ZONES[id].name}區（${eraInfo(game.sim?.s.era || 1).zoneNames[id]}）`;
  if (FACILITIES[id]) return FACILITIES[id].name;
  if (LINES[id]) return LINES[id].name;
  return { inspect: '查看', bulldoze: '拆除' }[id] || id;
}
function toolDesc(id) {
  const era = Math.min(game.sim.s.era, 2);
  if (id === 'inspect') return '拖動地圖、點格子看資訊；雙指縮放';
  if (id === 'road') return `${ROAD.names[era]} ${ROAD.cost.plain}元/格（丘陵 ${ROAD.cost.hill}、高山 ${ROAD.cost.mountain}、${ROAD.bridgeNames[era]} ${ROAD.bridgeCost[era]}）— 拖曳畫線`;
  if (ZONES[id]) return `${ZONES[id].name}區 ${ZONES[id].cost}元/格 — 拖曳畫範圍；要接路、有水${game.sim.powerNeeded() ? '、有電' : ''}才會長`;
  if (FACILITIES[id]) {
    const f = FACILITIES[id];
    const need = { river: '・要蓋在河邊', coast: '・要蓋在海邊', road: '・要緊鄰接到港口的路' }[f.needs] || '';
    const cap = f.capacity ? `・供應 ${f.capacity}・範圍 ${f.coverRadius} 格` : '';
    return `${f.name} ${fmt(f.cost)}元・維護 ${f.maintenance}/月${cap}${need}`;
  }
  if (LINES[id]) return `${LINES[id].name} ${LINES[id].cost}元/格・兩側 ${LINES[id].radius} 格有${id === 'pipe' ? '水' : '電'} — 從設施拖曳畫線`;
  if (id === 'bulldoze') return '拆除 — 拖曳畫範圍（不退錢）';
  return '';
}
function toolLocked(id) {
  const era = game.sim.s.era;
  const f = FACILITIES[id] || LINES[id];
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
    const f = FACILITIES[id] || LINES[id];
    let sub = lock || `${fmt(f.cost)}元${LINES[id] ? '/格' : ''}`;
    if (FACILITIES[id]?.specialOf) {
      if (game.sim.hasSpecial(id)) sub = '已蓋好';
      else if (FACILITIES[id].specialOf < game.sim.s.era) sub = '已過這個時代';
    }
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
  if (id === 'pipe' || id === 'well' || id === 'waterworks') setOverlay('water', true);
  else if (id === 'wire' || id === 'coal') setOverlay('power', true);
  closeSheet();
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
    const ports = game.map.ports.filter((p) => p.county === c.id).map((p) => p.name).join('、') || '—';
    const mvp = LAND.mvpRegions.includes(c.name);
    const r = sim.regionBuyable(c.name);
    let act;
    if (own) act = '<span class="tag ok">已擁有</span>';
    else if (!LAND.allowOthers && !mvp) act = '<span class="tag">之後開放</span>';
    else act = `<button class="btn" data-buy="${esc(c.name)}" ${r.ok ? '' : 'disabled'}>買 ${fmt(price)}</button>${mvp ? '' : ' <span class="tag">未細調</span>'}`;
    return `<tr><td><b>${esc(c.name)}</b><br><span class="small">${c.cells} 平方公里</span></td><td>${esc(ports)}</td><td>${act}</td></tr>`;
  }).join('');
  const m = openModal(`<h2>🗺 區域</h2>
    <p>新區域只能用錢買，一次一塊；價格看「第幾塊」：第 n 塊 = ${fmt(LAND.base)} × ${LAND.ratio}<sup>n−1</sup>。<br>
    下一塊（第 ${s.purchases + 1} 塊）：<b>${fmt(price)}</b>，再下一塊 ${fmt(landPrice(s.purchases + 2))}。目前有 ${fmt(s.money)}。</p>
    <p class="small">第一版建議先買臺南市（有安平港）。金門、連江不在這張地圖上，之後開放。</p>
    <table><tr><th>縣市</th><th>港口</th><th></th></tr>${rows}</table>`);
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

function openEra() {
  const ep = game.sim.eraProgress();
  const rows = ERAS.map((e) => {
    const cur = e.id === game.sim.s.era;
    const st = e.id < game.sim.s.era ? '<span class="tag ok">已走過</span>' : cur ? '<span class="tag ok">現在</span>' : e.id > MAX_PLAYABLE_ERA ? '<span class="tag">之後開放</span>' : '';
    return `<tr><td><b>${e.id}. ${e.name}</b> ${st}<br><span class="small">${e.years}・${e.ship.name}（載 ${e.ship.capacity} 人）</span></td>
      <td class="small">${e.unlocks.map(esc).join('、')}<br>升級條件：${e.popToNext ? `人口 ${e.popToNext.toLocaleString()} ＋ ${esc(FACILITIES[e.special]?.name || specialName(e.special))}` : `蓋好${esc(specialName(e.special))}`}</td></tr>`;
  }).join('');
  const sp = FACILITIES[ep.special];
  let now = '';
  if (ep.locked) now = `<p>第一版只開放到${eraInfo(MAX_PLAYABLE_ERA).name}，下一個時代之後開放。</p>`;
  else {
    now = `<p>要進入<b>${esc(ep.nextName)}</b>，兩件事都要做到：</p>
      <ul><li>人口 ${ep.pop.toLocaleString()} / ${ep.popNeed.toLocaleString()} ${ep.pop >= ep.popNeed ? '✅' : ''}</li>
      <li>蓋好「${esc(sp.name)}」（${fmt(sp.cost)}元${sp.needs === 'coast' ? '，要蓋在海邊' : sp.needs === 'road' ? '，要緊鄰接到港口的路' : ''}）${ep.specialBuilt ? '✅' : ''}</li></ul>
      ${ep.specialBuilt ? '' : `<button class="btn" data-build="${ep.special}">選擇「${esc(sp.name)}」來蓋</button>`}`;
  }
  const m = openModal(`<h2>🏛 ${esc(ep.name)}</h2>${now}<h3>時代一覽</h3><table>${rows}</table>
    ${game.sim.s.era < POWER_REQUIRED_FROM_ERA ? `<p class="small">提醒：從${eraInfo(POWER_REQUIRED_FROM_ERA).name}開始，區塊要有電才會成長，記得先存錢蓋發電廠。</p>` : ''}`);
  m.querySelector('[data-build]')?.addEventListener('click', (e) => { setTool(e.target.dataset.build); closeModal(); });
}
function specialName(k) { return { dam: '水庫', epz: '加工出口區管理處', skyscraper: '摩天大樓' }[k] || k; }

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
      <tr><td>港口貿易</td><td>${fmt(inc.trade || 0)}</td><td>貸款還款</td><td>${fmt(exp.loan || 0)}</td></tr>
    </table>
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
    <li><b>時代</b>：人口達標＋蓋好時代特殊建築（清末時代是海邊的燈塔）就進入下一個時代。</li>
    <li><b>買地</b>：在「區域」花錢買下新縣市，例如臺南市。</li>
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
  if (g.bld[i]) rows.push(['建築', BLD_KEY[g.bld[i]] === 'port' ? (m.ports.find((p) => p.y * m.w + p.x === i)?.name || '港口') : FACILITIES[BLD_KEY[g.bld[i]]].name]);
  let why = [];
  if (g.zone[i]) {
    const z = ZONE_KEY[g.zone[i]];
    const st = sim.cellStatus(i);
    rows.push(['分區', `${ZONES[z].name}・第 ${g.level[i]} 級`]);
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
    ${cty && !own ? `<p><button class="btn" data-buy>到「區域」購買${esc(cty.name)}（${fmt(sim.nextLandPrice())}）</button></p>` : ''}`;
  sheet.hidden = false;
  sheet.querySelector('.x').addEventListener('click', closeSheet);
  sheet.querySelector('[data-buy]')?.addEventListener('click', () => { closeSheet(); openRegions(); });
}

// ---------- 建造 ----------
function onPreview(tool, x0, y0, x1, y1) {
  const r = game.renderer;
  if (!tool) { r.preview = null; $('#tool-tip').textContent = game.tool === 'inspect' ? '' : toolDesc(game.tool); return; }
  const p = game.sim.plan(tool, x0, y0, x1, y1);
  p.allCells = game.sim.cellsFor(tool, x0, y0, x1, y1);
  r.preview = p;
  const n = p.cells.length;
  $('#tool-tip').textContent = p.reason ? `✖ ${p.reason}${p.cost ? `（需要 ${fmt(p.cost)}）` : ''}` : `${toolName(tool)} ${n} 格・${fmt(p.cost)} 元${p.skipped.length ? `（略過：${p.skipped[0]}）` : ''}`;
}
function onBuild(tool, x0, y0, x1, y1) {
  if (game.sim.s.gameOver) return;
  const r = game.sim.build(tool, x0, y0, x1, y1);
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
      if (e.era >= POWER_REQUIRED_FROM_ERA) toast('⚡ 從現在起，區塊要有電才會成長：蓋燃煤發電廠，用電線送電。', '', 9000);
      buildToolbar(); setTool(game.tool);
    } else if (e.type === 'warning') toast(e.level === 'danger' ? `🚨 危急：錢大約 ${Math.max(0, Math.floor(e.runway))} 個月內會用完！` : `⚠ 預警：照目前赤字，錢約 ${Math.floor(e.runway)} 個月後用完`, 'bad', 6000);
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
  updateHud();
  requestAnimationFrame(loop);

  if (DEBUG) {
    window.__game = {
      get sim() { return game.sim; }, get renderer() { return game.renderer; }, map: game.map, game,
      advance: (months) => { game.sim.advance(months); handleEvents(); },
      build: (...a) => game.sim.build(...a),
      buyRegion, setTool, undo, doSave, restart,
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
