// 匯出遊戲的進入點：讀取內嵌的專案 JSON、驗證、直接進入第一關。
// 編輯器匯出時會把這個檔和相依模組一起內嵌進單一 HTML。
import { validateProject } from './model.js';
import { mountBattle } from './battle-view.js';

export function bootGame() {
  const root = document.getElementById('game');
  const showError = (msg) => {
    root.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'boot-error';
    box.textContent = msg;
    root.appendChild(box);
  };
  let data;
  try {
    data = JSON.parse(document.getElementById('project-data').textContent);
  } catch {
    return showError('遊戲資料損毀，無法讀取。');
  }
  const v = validateProject(data);
  if (!v.ok) return showError(`遊戲資料驗證失敗：${v.errors.join('；')}`);
  if (!v.project.stages.length) return showError('這個遊戲還沒有關卡。');
  const fast = /[?&]fast=1/.test(location.search);
  window.__game = mountBattle(root, v.project, v.project.stages[0].id, { fast });
}
