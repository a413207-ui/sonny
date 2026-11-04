// 關卡分頁（簡版）：地圖、出擊人數與出擊點、我方 / 敵方配置、勝敗條件
import { genId, byId } from '../model.js';
import { h, numInput, select } from './dom.js';

export default {
  id: 'stages',
  title: '關卡',
  render(el, app) {
    const p = app.project;
    const ts = (app.tabState.stages ||= { selId: null });
    if (!byId(p.stages, ts.selId)) ts.selId = p.stages[0]?.id || null;
    const st = byId(p.stages, ts.selId);
    el.append(h('h2', {}, '關卡'));
    el.append(h('div', { class: 'row' },
      '關卡', select(p.stages.map((s, i) => [s.id, `${i + 1}. ${s.name}`]), ts.selId, (v) => { ts.selId = v; app.rerender(); }, { id: 'stage-select' }),
      h('button', { type: 'button', id: 'stage-add', onclick: () => {
        const s = { id: genId('stg'), name: `第 ${p.stages.length + 1} 關`, map: p.maps[0]?.id || null, deploy: { max: 4, points: [] }, allies: [], enemies: [], guests: [], win: { type: 'rout' }, lose: { type: 'allDefeated', leaderDeath: true }, reinforcements: [] };
        p.stages.push(s); ts.selId = s.id; app.change(); app.rerender();
      } }, '新增關卡'),
      st && h('button', { type: 'button', disabled: p.stages.indexOf(st) === 0, onclick: () => {
        const i = p.stages.indexOf(st);
        [p.stages[i - 1], p.stages[i]] = [p.stages[i], p.stages[i - 1]]; app.change(); app.rerender();
      } }, '往前移'),
      st && h('button', { type: 'button', class: 'danger', onclick: () => {
        if (!window.confirm(`確定要刪除關卡「${st.name}」嗎？`)) return;
        p.stages.splice(p.stages.indexOf(st), 1); app.change(); app.rerender();
      } }, '刪除'),
    ));
    if (!st) { el.append(h('div', { class: 'card' }, '還沒有關卡，按「新增關卡」。')); return; }
    const map = byId(p.maps, st.map);
    const allyChars = p.characters.filter((c) => c.faction !== 'enemy');
    const enemyChars = p.characters.filter((c) => c.faction === 'enemy');
    el.append(
      h('div', { class: 'card' },
        h('div', { class: 'row' }, '名稱', h('input', { value: st.name, onchange: (e) => { st.name = e.target.value.trim() || st.name; app.change(); app.rerender(); } }),
          '地圖', select([['', '（未選）'], ...p.maps.map((m) => [m.id, `${m.name}（${m.w}×${m.h}）`])], st.map || '', (v) => { st.map = v || null; app.change(); app.rerender(); }),
          map && h('button', { type: 'button', id: 'stage-edit-map', onclick: () => app.goTab('maps', { mapId: map.id, stageId: st.id }) }, '在地圖上配置出擊點 / 敵人'),
          h('button', { type: 'button', class: 'primary', onclick: () => app.goTab('play', { stageId: st.id, autostart: true }) }, '▶ 試玩這關')),
        h('div', { class: 'row' }, '勝利條件：', h('b', {}, '敵軍全滅'), '　失敗條件：', h('b', {}, '我方全滅 或 主角陣亡'), h('span', { class: 'muted' }, '（其他條件、增援下一版做）')),
        h('div', { class: 'row' }, '敵方 AI：', h('b', {}, '主動進攻'), h('span', { class: 'muted' }, '（走向最近的敵人並攻擊）')),
      ),
      h('div', { class: 'card' },
        h('h3', {}, '我方出擊'),
        h('div', { class: 'row' }, '出擊人數上限', numInput(st.deploy.max, (v) => { st.deploy.max = v; app.change(); app.rerender(); }, { min: 1, max: 20, width: '4em' }),
          h('span', { class: st.deploy.points.length < Math.min(st.deploy.max, st.allies.length) ? 'error-text' : 'muted' }, `出擊點 ${st.deploy.points.length} 個：${st.deploy.points.map(([x, y], i) => `${i + 1}(${x},${y})`).join(' ') || '尚未設定'}`)),
        h('div', { class: 'muted' }, `依下面順序放到出擊點 1、2、3…；超過上限或沒有出擊點的角色不出場。`),
        h('table', { class: 'grid', id: 'stage-allies' }, h('tr', {}, h('th', {}, '順序'), h('th', {}, '角色'), h('th', {}, '')),
          st.allies.map((cid, i) => h('tr', {}, h('td', {}, String(i + 1)),
            h('td', {}, select(allyChars.map((c) => [c.id, c.name]), cid, (v) => { st.allies[i] = v; app.change(); })),
            h('td', {}, h('button', { type: 'button', onclick: () => { st.allies.splice(i, 1); app.change(); app.rerender(); } }, '移除'))))),
        h('div', { class: 'row' }, allyChars.length
          ? h('button', { type: 'button', onclick: () => { st.allies.push((allyChars.find((c) => !st.allies.includes(c.id)) || allyChars[0]).id); app.change(); app.rerender(); } }, '加入我方角色')
          : h('span', { class: 'muted' }, '先在「角色」分頁建立我方角色')),
      ),
      h('div', { class: 'card' },
        h('h3', {}, '敵方配置'),
        h('table', { class: 'grid', id: 'stage-enemies' }, h('tr', {}, h('th', {}, '角色'), h('th', {}, 'X'), h('th', {}, 'Y'), h('th', {}, '')),
          st.enemies.map((e, i) => h('tr', {},
            h('td', {}, select(enemyChars.map((c) => [c.id, c.name]), e.char, (v) => { e.char = v; app.change(); })),
            h('td', {}, numInput(e.at[0], (v) => { e.at[0] = v; app.change(); }, { min: 0, max: (map?.w || 60) - 1, width: '4em' })),
            h('td', {}, numInput(e.at[1], (v) => { e.at[1] = v; app.change(); }, { min: 0, max: (map?.h || 60) - 1, width: '4em' })),
            h('td', {}, h('button', { type: 'button', onclick: () => { st.enemies.splice(i, 1); app.change(); app.rerender(); } }, '移除'))))),
        h('div', { class: 'muted' }, '也可以到地圖分頁的「關卡配置」直接點地圖放置。'),
      ),
    );
  },
};
