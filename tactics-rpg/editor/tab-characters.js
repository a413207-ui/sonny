// 角色分頁：4 方向角色圖、頭像、兵種、等級、陣營、主角、能力
import { TILE, FACTIONS, STAT_KEYS } from '../config.js';
import { genId, byId, findReferences, dirName } from '../model.js';
import { drawThumb, unitSprite } from '../render.js';
import { h, numInput, select, confirmDelete } from './dom.js';

const STAT_HINT = { 武力: '物理攻擊', 統帥: '防禦', 智力: '計謀（下一版使用）', 血量: '歸 0 退場' };

export default {
  id: 'characters',
  title: '角色',
  render(el, app) {
    const p = app.project;
    const ts = (app.tabState.characters ||= { selId: null });
    if (!byId(p.characters, ts.selId)) ts.selId = p.characters[0]?.id || null;
    const c = byId(p.characters, ts.selId);
    el.append(h('h2', {}, '角色'));
    const add = (copy) => {
      const n = copy ? { ...JSON.parse(JSON.stringify(copy)), id: genId('chr'), name: `${copy.name} 複本`, isLeader: false }
        : { id: genId('chr'), name: `新角色 ${p.characters.length + 1}`, faction: 'ally', unitType: p.unitTypes[0]?.id || null, level: 1, isLeader: false, mp: 0, portrait: null,
          sprites: { down: null, up: null, left: null, right: null }, flipRight: true, stats: { 武力: 10, 統帥: 8, 智力: 6, 血量: 30 } };
      p.characters.push(n);
      ts.selId = n.id;
      app.change(); app.rerender();
    };
    const list = h('div', { class: 'list', id: 'char-list' },
      h('div', { class: 'row' },
        h('button', { type: 'button', id: 'char-add', onclick: () => add() }, '新增'),
        h('button', { type: 'button', disabled: !c, onclick: () => add(c) }, '複製'),
        h('button', { type: 'button', class: 'danger', disabled: !c, onclick: () => {
          if (!confirmDelete(c.name, findReferences(p, 'character', c.id))) return;
          for (const s of p.stages) { s.allies = s.allies.filter((x) => x !== c.id); s.enemies = s.enemies.filter((e) => e.char !== c.id); }
          p.characters.splice(p.characters.indexOf(c), 1);
          app.change(); app.rerender();
        } }, '刪除')),
      FACTIONS.map((f) => [h('div', { class: 'muted' }, f.name), p.characters.filter((x) => x.faction === f.id).map((x) => {
        const cv = h('canvas', { width: TILE, height: TILE });
        const img = unitSprite(p, x.sprites, x.flipRight, 'down');
        if (img) { const g = cv.getContext('2d'); g.imageSmoothingEnabled = false; g.drawImage(img, 0, 0); }
        return h('div', { class: `item${x.id === ts.selId ? ' sel' : ''}`, onclick: () => { ts.selId = x.id; app.rerender(); } }, cv, h('span', {}, x.name, x.isLeader ? ' ★' : ''));
      })]),
    );
    if (!c) { el.append(h('div', { class: 'split' }, list, h('div', { class: 'card grow' }, '還沒有角色，按「新增」。'))); return; }

    const units = p.sprites.filter((s) => s.category === 'unit');
    const unitOpts = [['', '（無）'], ...units.map((s) => [s.id, s.name])];
    const dirBox = (d) => {
      const cv = h('canvas', { class: 'thumb big checker', width: TILE, height: TILE });
      const paint = () => {
        const g = cv.getContext('2d');
        g.imageSmoothingEnabled = false;
        g.clearRect(0, 0, TILE, TILE);
        const img = d === 'right' && c.flipRight ? unitSprite(p, c.sprites, true, 'right') : c.sprites[d] && unitSprite(p, { [d]: c.sprites[d] }, false, d);
        if (img) g.drawImage(img, 0, 0);
      };
      paint();
      const sel = select(unitOpts, c.sprites[d] || '', (v) => { c.sprites[d] = v || null; app.change(); paint(); }, { dataset: { dir: d }, disabled: d === 'right' && c.flipRight ? true : null });
      return h('div', { class: 'col', style: { alignItems: 'center' } }, h('b', {}, dirName(d)), cv, sel,
        d === 'right' && h('label', {}, h('input', { type: 'checkbox', id: 'flip-right', checked: c.flipRight, onchange: (e) => { c.flipRight = e.target.checked; app.change(); app.rerender(); } }), ' 用左圖翻轉'));
    };
    const pt = h('canvas', { class: 'thumb big checker', width: TILE, height: TILE });
    drawThumb(pt, p, c.portrait);
    const form = h('div', { class: 'card grow' },
      h('div', { class: 'row' }, '名稱', h('input', { id: 'char-name', value: c.name, style: { width: '10em' }, onchange: (e) => { c.name = e.target.value.trim() || c.name; app.change(); app.rerender(); } }),
        '陣營', select(FACTIONS.map((f) => [f.id, f.name]), c.faction, (v) => { c.faction = v; app.change(); app.rerender(); }, { id: 'char-faction' }),
        '兵種', select([['', '（無）'], ...p.unitTypes.map((u) => [u.id, u.name])], c.unitType || '', (v) => { c.unitType = v || null; app.change(); }),
        '等級', numInput(c.level, (v) => { c.level = v; app.change(); }, { min: 1, max: 99, width: '4em' }),
        h('label', {}, h('input', { type: 'checkbox', checked: c.isLeader, onchange: (e) => { c.isLeader = e.target.checked; app.change(); app.rerender(); } }), ' 主角（陣亡即失敗）')),
      h('h3', {}, '能力'),
      h('div', { class: 'row' }, STAT_KEYS.map((k) => h('span', { title: STAT_HINT[k] }, `${k} `, numInput(c.stats[k], (v) => { c.stats[k] = v; app.change(); }, { min: k === '血量' ? 1 : 0, max: 9999, width: '5em' }))),
        h('span', {}, 'MP ', numInput(c.mp || 0, (v) => { c.mp = v; app.change(); }, { min: 0, max: 9999, width: '5em' }))),
      h('div', { class: 'muted' }, '武力 = 攻擊、統帥 = 防禦、智力 = 計謀（先存，下一版用）、血量歸 0 退場。MP 先存欄位，計謀下一版做。'),
      h('h3', {}, '角色圖（4 方向，素材分類「角色圖」）'),
      h('div', { class: 'row', style: { alignItems: 'flex-start', gap: '16px' } }, ['down', 'up', 'left', 'right'].map(dirBox)),
      h('div', { class: 'muted' }, '戰場上會依移動 / 攻擊方向切換。'),
      h('h3', {}, '頭像（可空）'),
      h('div', { class: 'row' }, pt, select([['', '（無）'], ...p.sprites.filter((s) => s.category === 'portrait').map((s) => [s.id, s.name])], c.portrait || '', (v) => { c.portrait = v || null; app.change(); drawThumb(pt, p, c.portrait); })),
    );
    el.append(h('div', { class: 'split' }, list, form));
  },
};
