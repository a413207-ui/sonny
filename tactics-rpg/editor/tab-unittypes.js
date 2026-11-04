// 兵種分頁：移動力、射程、地形適性（移動消耗覆寫）、成長率
import { STAT_KEYS } from '../config.js';
import { genId, findReferences } from '../model.js';
import { h, numInput, confirmDelete } from './dom.js';

export default {
  id: 'unitTypes',
  title: '兵種',
  render(el, app) {
    const p = app.project;
    el.append(h('h2', {}, '兵種'));
    const add = () => {
      p.unitTypes.push({ id: genId('ut'), name: `新兵種 ${p.unitTypes.length + 1}`, move: 4, range: [1, 1], terrainCost: {}, growth: { 武力: 0.5, 統帥: 0.5, 智力: 0.5, 血量: 0.5 } });
      app.change(); app.rerender();
    };
    const table = h('table', { class: 'grid', id: 'unittype-table' },
      h('tr', {}, h('th', {}, '名稱'), h('th', {}, '移動力'), h('th', {}, '射程（最近～最遠）'),
        p.terrains.map((t) => h('th', { title: `預設 ${t.impassable ? '不可通行' : t.moveCost}` }, h('span', { class: 'terrain-chip', style: { background: t.color } }), ` ${t.name}`)),
        STAT_KEYS.map((k) => h('th', {}, `${k}成長`)), h('th', {}, '')),
      p.unitTypes.map((u) => h('tr', {},
        h('td', {}, h('input', { value: u.name, style: { width: '6em' }, onchange: (e) => { u.name = e.target.value.trim() || u.name; app.change(); } })),
        h('td', {}, numInput(u.move, (v) => { u.move = v; app.change(); }, { min: 0, max: 30, width: '4em' })),
        h('td', {},
          numInput(u.range[0], (v) => { u.range[0] = v; if (u.range[1] < v) u.range[1] = v; app.change(); app.rerender(); }, { min: 0, max: 20, width: '3.5em' }), '～',
          numInput(u.range[1], (v) => { u.range[1] = Math.max(v, u.range[0]); app.change(); app.rerender(); }, { min: 0, max: 20, width: '3.5em' })),
        p.terrains.map((t) => h('td', {}, t.impassable ? h('span', { class: 'muted' }, '不可') : h('input', {
          type: 'number', min: 1, max: 99, placeholder: String(t.moveCost), value: u.terrainCost[t.id] ?? '', style: { width: '3.5em' },
          onchange: (e) => {
            const v = Number(e.target.value);
            if (e.target.value === '' || !Number.isFinite(v) || v <= 0) { delete u.terrainCost[t.id]; e.target.value = ''; }
            else u.terrainCost[t.id] = Math.min(99, v);
            app.change();
          },
        }))),
        STAT_KEYS.map((k) => h('td', {}, numInput(Math.round((u.growth?.[k] ?? 0) * 100), (v) => { (u.growth ||= {})[k] = v / 100; app.change(); }, { min: 0, max: 100, width: '4em' }), '%')),
        h('td', {}, h('button', { type: 'button', class: 'danger', onclick: () => {
          if (!confirmDelete(u.name, findReferences(p, 'unitType', u.id))) return;
          for (const c of p.characters) if (c.unitType === u.id) c.unitType = null;
          delete p.matchups[u.id];
          for (const row of Object.values(p.matchups)) if (row) delete row[u.id];
          p.unitTypes.splice(p.unitTypes.indexOf(u), 1);
          app.change(); app.rerender();
        } }, '刪除')),
      )),
    );
    el.append(h('div', { class: 'card', style: { overflow: 'auto' } }, table,
      h('div', { class: 'row' }, h('button', { type: 'button', id: 'unittype-add', onclick: add }, '新增兵種')),
      h('div', { class: 'muted' }, '地形欄：空白 = 用地形本身的移動消耗（灰色數字）；填數字 = 這個兵種走這種地形的消耗。射程 1～1 = 近戰，2～2 = 弓兵（不能打相鄰）。成長率先存起來，升級系統下一版才用。'),
    ));
  },
};
