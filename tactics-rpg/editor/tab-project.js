// 專案分頁：名稱、說明、全域設定、專案清單、匯出
import { MAP_MIN, MAP_MAX } from '../config.js';
import { listProjects, storageUsage } from '../storage.js';
import { h, numInput } from './dom.js';

export default {
  id: 'project',
  title: '專案',
  render(el, app) {
    const p = app.project;
    const s = p.settings;
    const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
    el.append(
      h('h2', {}, '專案'),
      h('div', { class: 'card' },
        h('div', { class: 'row' }, h('label', {}, '專案名稱 '), h('input', { id: 'proj-name', value: p.meta.name, maxlength: 60, style: { width: '20em' }, oninput: (e) => app.rename(e.target.value || '未命名專案') })),
        h('div', { class: 'row' }, h('label', {}, '說明')),
        h('textarea', { rows: 3, oninput: (e) => { p.meta.description = e.target.value; app.change(); } }, p.meta.description || ''),
        h('div', { class: 'muted' }, `建立：${(p.meta.created || '').slice(0, 10)}　最後修改：${(p.meta.updated || '').replace('T', ' ').slice(0, 19)}`),
      ),
      h('div', { class: 'card' },
        h('h3', {}, '全域設定'),
        h('div', { class: 'row' }, '新地圖預設大小：',
          numInput(s.defaultMapSize[0], (v) => { s.defaultMapSize[0] = v; app.change(); }, { min: MAP_MIN, max: MAP_MAX }), '×',
          numInput(s.defaultMapSize[1], (v) => { s.defaultMapSize[1] = v; app.change(); }, { min: MAP_MIN, max: MAP_MAX }),
          h('span', { class: 'muted' }, `（${MAP_MIN}～${MAP_MAX}）`)),
        h('div', { class: 'row' }, h('label', {}, h('input', { type: 'checkbox', id: 'opt-counter', checked: s.counterAttack !== false, onchange: (e) => { s.counterAttack = e.target.checked; app.change(); } }), ' 被攻擊方可反擊一次')),
        h('div', { class: 'row' }, '亂數種子：', numInput(s.rngSeed, (v) => { s.rngSeed = v; app.change(); }, { min: 0, max: 2147483647, width: '9em' }), h('span', { class: 'muted' }, '同一個種子每次戰鬥結果都一樣，方便測試')),
        h('div', { class: 'muted' }, '傷害公式、命中率公式和相剋倍率在「相剋表」分頁設定。'),
      ),
      h('div', { class: 'card' },
        h('h3', {}, '匯出 / 匯入'),
        h('div', { class: 'row' },
          h('button', { type: 'button', onclick: () => app.exportJson() }, '匯出 JSON 專案檔'),
          h('button', { type: 'button', onclick: () => document.getElementById('import-file').click() }, '匯入 JSON 專案檔'),
          h('button', { type: 'button', class: 'primary', id: 'proj-export-game', onclick: () => app.exportGame() }, '匯出遊戲（單一 HTML）')),
        h('div', { class: 'muted' }, '「匯出遊戲」會產生一個獨立的 .html 檔：內含遊戲程式和整個專案資料，不含編輯器，離線打開就從第一關開始玩，也可以直接放上網站。'),
        h('div', { class: 'muted' }, '匯入的專案會存成一個新專案，不會覆蓋現有資料；壞掉的檔案會被拒絕。'),
      ),
      h('div', { class: 'card' },
        h('h3', {}, '瀏覽器裡的專案'),
        h('div', { class: 'col', id: 'proj-list' }, listProjects().map((x) => h('div', { class: 'row' },
          h('span', {}, x.id === p.meta.id ? '▶ ' : ''), h('b', {}, x.name), h('span', { class: 'muted' }, (x.updated || '').slice(0, 10)),
          x.id === p.meta.id ? h('span', { class: 'muted' }, '（目前）') : h('button', { type: 'button', onclick: () => app.openProject(x.id) }, '開啟')))),
        h('div', { class: 'row' },
          h('button', { type: 'button', onclick: () => app.newProject() }, '新建專案'),
          h('button', { type: 'button', id: 'load-sample', onclick: () => app.loadSample() }, '載入內建範例')),
        h('div', { class: 'muted' }, `localStorage 已用約 ${kb(storageUsage())}（瀏覽器上限通常約 5 MB）。容量不夠時請改用「匯出 JSON」保存。`),
      ),
    );
  },
};
