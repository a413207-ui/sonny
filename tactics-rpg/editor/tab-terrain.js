// 地形分頁：地形種類定義
import { genId, findReferences } from '../model.js';
import { h, numInput, confirmDelete } from './dom.js';

export default {
  id: 'terrain',
  title: '地形',
  render(el, app) {
    const p = app.project;
    const pct = (v) => Math.round((Number(v) || 0) * 100);
    const rows = p.terrains.map((t) => h('tr', {},
      h('td', {}, h('input', { type: 'color', value: t.color.slice(0, 7), onchange: (e) => { t.color = e.target.value; app.change(); } })),
      h('td', {}, h('input', { value: t.name, style: { width: '7em' }, onchange: (e) => { t.name = e.target.value.trim() || t.name; app.change(); } })),
      h('td', {}, numInput(t.moveCost, (v) => { t.moveCost = v; app.change(); }, { min: 1, max: 99, width: '4em' })),
      h('td', {}, numInput(pct(t.defBonus), (v) => { t.defBonus = v / 100; app.change(); }, { min: -100, max: 100, width: '4.5em' }), '%'),
      h('td', {}, numInput(pct(t.evaBonus), (v) => { t.evaBonus = v / 100; app.change(); }, { min: -100, max: 100, width: '4.5em' }), '%'),
      h('td', {}, numInput(t.healPerTurn, (v) => { t.healPerTurn = v; app.change(); }, { min: 0, max: 999, width: '4em' })),
      h('td', {}, h('input', { type: 'checkbox', checked: t.impassable, onchange: (e) => { t.impassable = e.target.checked; app.change(); } })),
      h('td', {}, h('button', { type: 'button', class: 'danger', disabled: p.terrains.length <= 1, onclick: () => {
        const refs = findReferences(p, 'terrain', t.id);
        if (!confirmDelete(t.name, refs)) return;
        for (const s of p.sprites) if (s.defaultTerrain === t.id) s.defaultTerrain = null;
        for (const m of p.maps) m.terrain = m.terrain.map((x) => (x === t.id ? null : x));
        for (const u of p.unitTypes) delete u.terrainCost?.[t.id];
        p.terrains.splice(p.terrains.indexOf(t), 1);
        app.change(); app.rerender();
      } }, '刪除')),
    ));
    el.append(
      h('h2', {}, '地形'),
      h('div', { class: 'card' },
        h('table', { class: 'grid', id: 'terrain-table' },
          h('tr', {}, ['顏色', '名稱', '移動消耗', '防禦加成', '閃避加成', '每回合回血', '不可通行', ''].map((t) => h('th', {}, t))),
          rows),
        h('div', { class: 'row' }, h('button', { type: 'button', id: 'terrain-add', onclick: () => {
          p.terrains.push({ id: genId('ter'), name: `新地形 ${p.terrains.length + 1}`, color: '#a0a0a0', moveCost: 1, defBonus: 0, evaBonus: 0, healPerTurn: 0, impassable: false });
          app.change(); app.rerender();
        } }, '新增地形')),
        h('div', { class: 'muted' }, '防禦加成 → 公式裡的 terrainDef（20% = 0.2）；閃避加成 → terrainEva。都是看「被攻擊方」站的格子。回血在該陣營回合開始時生效。兵種可以在「兵種」分頁覆寫移動消耗。顏色用在地圖的「地形檢視」。'),
      ),
    );
  },
};
