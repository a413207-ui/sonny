// 編輯器外殼：分頁、專案列、自動儲存、匯入 / 匯出。
import { AUTOSAVE_MS } from '../config.js';
import { validateProject, createEmptyProject, genId } from '../model.js';
import { createSampleProject } from '../sample.js';
import { listProjects, loadProjectRaw, currentProjectId, saveProject } from '../storage.js';
import { buildGameHtml, loadRuntimeSources } from '../export-game.js';
import { clearSpriteCache } from '../render.js';
import { h, downloadText, safeFileName, toast } from './dom.js';
import projectTab from './tab-project.js';
import spritesTab from './tab-sprites.js';
import terrainTab from './tab-terrain.js';
import mapsTab from './tab-maps.js';
import unitTypesTab from './tab-unittypes.js';
import matchupsTab from './tab-matchups.js';
import charactersTab from './tab-characters.js';
import stagesTab from './tab-stages.js';
import playTab from './tab-play.js';

const TABS = [projectTab, spritesTab, terrainTab, mapsTab, unitTypesTab, matchupsTab, charactersTab, stagesTab, playTab];
const params = new URLSearchParams(location.search);

const app = {
  project: null,
  dirty: false,
  lastSaveOk: true,
  fast: params.get('fast') === '1',
  isMobile: matchMedia('(max-width: 760px), (pointer: coarse)').matches,
  tab: null,
  tabState: {}, // 各分頁記住的選擇（例如目前素材）
  keyHandler: null,
  change() {
    this.dirty = true;
    this.project.meta.updated = new Date().toISOString();
    setStatus('未儲存', 'dirty');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => this.saveNow(), AUTOSAVE_MS);
  },
  saveNow() {
    clearTimeout(saveTimer);
    const r = saveProject(this.project);
    this.lastSaveOk = r.ok;
    if (r.ok) {
      this.dirty = false;
      setStatus('已儲存', 'ok');
    } else if (r.quota) {
      setStatus('容量不足，未儲存', 'error');
      toast('瀏覽器儲存空間（localStorage）不夠，這次沒有存到。請先按「匯出 JSON」把專案存成檔案。', 'error');
    } else {
      setStatus('儲存失敗', 'error');
      toast(`儲存失敗：${r.error}`, 'error');
    }
    return r.ok;
  },
  setProject(p, { save = true } = {}) {
    this.project = p;
    this.tabState = {};
    clearSpriteCache();
    nameEl.textContent = p.meta.name;
    document.title = `${p.meta.name} - 戰棋RPG 編輯器`;
    if (save) this.saveNow();
    this.goTab(this.tab?.id || 'project');
  },
  rename(name) {
    this.project.meta.name = name;
    nameEl.textContent = name;
    document.title = `${name} - 戰棋RPG 編輯器`;
    this.change();
  },
  goTab(id, args) {
    const tab = TABS.find((t) => t.id === id) || TABS[0];
    if (this.tab?.destroy) this.tab.destroy();
    this.keyHandler = null;
    this.tab = tab;
    for (const b of tabsEl.querySelectorAll('button')) b.classList.toggle('active', b.dataset.tab === tab.id);
    panel.innerHTML = '';
    panel.dataset.tab = tab.id;
    tab.render(panel, this, args);
  },
  rerender() { this.goTab(this.tab.id); },
  newProject() {
    const name = window.prompt('新專案名稱', '我的戰棋');
    if (name === null) return;
    if (this.dirty) this.saveNow();
    this.setProject(createEmptyProject(name.trim() || '我的戰棋'));
    toast('已建立新專案');
  },
  loadSample() {
    if (this.dirty) this.saveNow();
    this.setProject(createSampleProject());
    toast('已載入範例專案（另存為新專案，原本的專案不受影響）');
  },
  openProject(id) {
    if (this.dirty) this.saveNow();
    const v = validateProject(loadProjectRaw(id));
    if (!v.ok) return toast(`這個專案讀不出來：${v.errors[0]}`, 'error');
    this.setProject(v.project, { save: false });
    saveProject(v.project);
  },
  exportJson() {
    downloadText(`${safeFileName(this.project.meta.name)}.json`, JSON.stringify(this.project));
  },
  // 匯入：驗證通過才換成新專案（給新的 id，不覆蓋任何現有資料）
  importJsonText(text) {
    let data;
    try { data = JSON.parse(text); } catch { return fail(['不是有效的 JSON 檔']); }
    const v = validateProject(data);
    if (!v.ok) return fail(v.errors);
    if (this.dirty) this.saveNow();
    v.project.meta.id = genId('prj');
    this.setProject(v.project);
    toast(`已匯入「${v.project.meta.name}」`);
    return true;
    function fail(errors) {
      const msg = `匯入失敗，現有專案沒有被改動。\n\n${errors.slice(0, 10).join('\n')}`;
      toast(msg.split('\n')[0] + ' ' + errors[0], 'error');
      window.alert(msg);
      return false;
    }
  },
  async exportGame() {
    const v = validateProject(this.project);
    if (!v.ok) return toast(`專案有錯誤，不能匯出：${v.errors[0]}`, 'error');
    const stage = v.project.stages[0];
    if (!stage || !v.project.maps.some((m) => m.id === stage.map)) return toast('至少要有一個已選好地圖的關卡才能匯出遊戲', 'error');
    try {
      const { sources, css } = await loadRuntimeSources();
      const html = buildGameHtml(v.project, sources, css);
      downloadText(`${safeFileName(v.project.meta.name)}.html`, html, 'text/html');
      toast(`已匯出遊戲 HTML（${Math.round(html.length / 1024)} KB），離線打開就能玩`);
    } catch (e) {
      toast(`匯出失敗：${e.message}`, 'error');
    }
  },
};
window.__app = app; // 方便測試與除錯

let saveTimer = 0;
const nameEl = h('span', { class: 'proj-name', title: '專案名稱（在「專案」分頁修改）' });
const statusEl = h('span', { class: 'save-status' });
function setStatus(text, kind) { statusEl.textContent = text; statusEl.className = `save-status ${kind}`; }
const fileInput = h('input', {
  type: 'file', accept: '.json,application/json', style: { display: 'none' }, id: 'import-file',
  onchange: async (e) => {
    const f = e.target.files[0];
    e.target.value = '';
    if (f) app.importJsonText(await f.text());
  },
});
const btn = (label, onclick, attrs = {}) => h('button', { type: 'button', onclick, ...attrs }, label);
const topbar = h('header', { class: 'topbar' },
  h('span', { class: 'logo' }, '戰棋RPG 編輯器'),
  nameEl, statusEl,
  h('span', { class: 'spacer' }),
  btn('儲存', () => app.saveNow(), { id: 'btn-save', title: 'Ctrl+S' }),
  btn('新建', () => app.newProject(), { id: 'btn-new' }),
  btn('匯入 JSON', () => fileInput.click(), { id: 'btn-import' }),
  btn('匯出 JSON', () => app.exportJson(), { id: 'btn-export' }),
  btn('匯出遊戲', () => app.exportGame(), { id: 'btn-export-game', title: '產生可直接遊玩的單一 HTML 檔' }),
  btn('▶ 試玩', () => app.goTab('play', { autostart: true }), { id: 'btn-play', class: 'primary' }),
  fileInput,
);
const tabsEl = h('nav', { class: 'tabs' }, TABS.map((t) => h('button', { type: 'button', dataset: { tab: t.id }, onclick: () => app.goTab(t.id) }, t.title)));
const panel = h('main', { class: 'panel' });
const root = document.getElementById('app');
root.append(topbar);
if (app.isMobile) root.append(h('div', { class: 'mobile-note' }, '編輯請用電腦，手機可試玩（按右上「▶ 試玩」）。'));
root.append(h('div', { class: 'body' }, tabsEl, panel));

window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
    e.preventDefault();
    app.saveNow();
    return;
  }
  if (app.keyHandler) app.keyHandler(e);
});
window.addEventListener('beforeunload', (e) => {
  if (app.dirty && !app.saveNow()) { e.preventDefault(); e.returnValue = ''; }
});

// 啟動：讀目前專案；沒有或讀不出來就開內建範例（另存新 id，不覆蓋壞掉的資料）
function boot() {
  const id = currentProjectId() || listProjects()[0]?.id;
  const raw = id ? loadProjectRaw(id) : null;
  const v = raw ? validateProject(raw) : null;
  app.tab = null;
  if (v?.ok) app.setProject(v.project, { save: false });
  else {
    if (raw) toast('上次的專案資料讀不出來，已改開範例專案（舊資料仍留在瀏覽器裡）', 'error');
    app.setProject(createSampleProject());
  }
  setStatus('已儲存', 'ok');
  if (app.isMobile || params.get('tab') === 'play') app.goTab('play', { autostart: app.isMobile });
  else if (params.get('tab')) app.goTab(params.get('tab'));
}
boot();
