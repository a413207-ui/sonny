// 角色分頁：4 方向角色圖、頭像、兵種、等級、陣營、主角、能力
import { TILE, FACTIONS, STAT_KEYS, ANIM_ACTIONS, ANIM_DIRS, ANIM_FRAME_MIN, ANIM_FRAME_MAX, ANIM_MS_MIN, ANIM_MS_MAX } from '../config.js';
import { genId, byId, findReferences, dirName } from '../model.js';
import { drawThumb, unitFrame } from '../render.js';
import { normalizeAnims, defaultAnims, resolveFrame, actionDef, actionTiming, frameAt } from '../anim.js';
import { blankPixels, encodePixels, decodePixels, flipH } from '../pixels.js';
import { h, numInput, select, confirmDelete } from './dom.js';

const ACTION_HINT = {
  walk: '走路固定 3 格（例如：站立、左腳、右腳）。戰場上移動時依 1-2-1-3 循環；站著時顯示第 1 格。',
  attack: '攻擊時先轉向目標播放，最後一格出手，播完回到走路第 1 格。',
  cast: '施放計策時播放，播完回到走路第 1 格（計策系統下一版做，現在可先畫好預覽）。',
  defeat: '血量歸 0 時播放，停在最後一格後淡出退場。',
};
const STAT_HINT = { 武力: '物理攻擊', 統帥: '防禦', 智力: '計謀（下一版使用）', 血量: '歸 0 退場' };

export default {
  id: 'characters',
  title: '角色',
  render(el, app) {
    const p = app.project;
    const ts = (app.tabState.characters ||= { selId: null, action: 'walk' });
    if (!byId(p.characters, ts.selId)) ts.selId = p.characters[0]?.id || null;
    const c = byId(p.characters, ts.selId);
    el.append(h('h2', {}, '角色'));
    const add = (copy) => {
      const n = copy ? { ...JSON.parse(JSON.stringify(copy)), id: genId('chr'), name: `${copy.name} 複本`, isLeader: false }
        : { id: genId('chr'), name: `新角色 ${p.characters.length + 1}`, faction: 'ally', unitType: p.unitTypes[0]?.id || null, level: 1, isLeader: false, mp: 0, portrait: null,
          sprites: { down: null, up: null, left: null, right: null }, anims: defaultAnims(), flipRight: true, stats: { 武力: 10, 統帥: 8, 智力: 6, 血量: 30 } };
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
        const img = unitFrame(p, x, 'walk', 'down', 0);
        if (img) { const g = cv.getContext('2d'); g.imageSmoothingEnabled = false; g.drawImage(img, 0, 0); }
        return h('div', { class: `item${x.id === ts.selId ? ' sel' : ''}`, onclick: () => { ts.selId = x.id; app.rerender(); } }, cv, h('span', {}, x.name, x.isLeader ? ' ★' : ''));
      })]),
    );
    if (!c) { el.append(h('div', { class: 'split' }, list, h('div', { class: 'card grow' }, '還沒有角色，按「新增」。'))); return; }

    const units = p.sprites.filter((s) => s.category === 'unit');
    const unitOpts = [['', '（無）'], ...units.map((s) => [s.id, s.name])];
    c.anims = normalizeAnims(c.anims);
    const act = ANIM_ACTIONS.some((a) => a.id === ts.action) ? ts.action : (ts.action = 'walk');
    const def = actionDef(act);
    const A = c.anims[act];
    const has = (id) => !!byId(p.sprites, id);
    const paintFrame = (cv, d, k, scale = 1) => {
      const g = cv.getContext('2d');
      g.imageSmoothingEnabled = false;
      g.clearRect(0, 0, cv.width, cv.height);
      const own = d === 'right' && c.flipRight ? A.frames.left[k] : A.frames[d][k];
      const img = unitFrame(p, c, act, d, k);
      if (!img) return;
      g.globalAlpha = own && has(own) ? 1 : 0.35; // 沒畫的格子淡淡顯示退回用的圖
      g.drawImage(img, 0, 0, TILE * scale, TILE * scale);
      g.globalAlpha = 1;
    };
    // 「複製上一格再修改」：建立新素材、填進這一格、直接開到像素編輯器
    const copyPrev = (d, k) => {
      const src = k > 0 ? resolveFrame(c, act, d, k - 1, has) : resolveFrame(c, act, d, 0, has);
      const srcSprite = src && byId(p.sprites, src.id);
      let pixels = blankPixels();
      if (srcSprite) pixels = src.flip ? encodePixels(flipH(decodePixels(srcSprite.pixels))) : srcSprite.pixels;
      const n = { id: genId('spr'), name: `${c.name}-${def.name}-${dirName(d)}${k + 1}`, category: 'unit', palette: srcSprite?.palette || p.palettes[0].id, pixels, defaultTerrain: null };
      p.sprites.push(n);
      A.frames[d][k] = n.id;
      app.tabState.sprites = { ...(app.tabState.sprites || {}), selId: n.id, filter: 'unit', returnTo: { tab: 'characters', label: `回到角色「${c.name}」的${def.name}動作` } };
      app.change();
      app.goTab('sprites');
    };
    const previews = [];
    const dirRow = (d) => {
      const mirrored = d === 'right' && c.flipRight;
      const slots = [];
      for (let k = 0; k < A.count; k++) {
        const cv = h('canvas', { class: 'thumb big checker', width: TILE, height: TILE, title: '淡色 = 這格還沒畫，會用退回的圖' });
        paintFrame(cv, d, k);
        const sel = select(unitOpts, A.frames[d][k] || '', (v) => { A.frames[d][k] = v || null; app.change(); paintFrame(cv, d, k); }, { dataset: { dir: d, frame: k }, disabled: mirrored ? true : null });
        slots.push(h('div', { class: 'anim-slot col' }, h('span', { class: 'muted' }, `第 ${k + 1} 格`), cv, sel,
          h('button', { type: 'button', class: 'small', dataset: { copy: `${d}:${k}` }, disabled: mirrored ? true : null, title: k ? '複製上一格成新素材，直接開到像素編輯器修改' : '複製目前顯示的圖（退回用的圖）成新素材，直接開到像素編輯器修改', onclick: () => copyPrev(d, k) }, k ? '複製上一格再修改' : '複製成新圖再修改')));
      }
      const pv = h('canvas', { class: 'thumb checker anim-preview', width: TILE * 2, height: TILE * 2, dataset: { preview: d }, title: '即時預覽' });
      previews.push({ cv: pv, d });
      return h('div', { class: 'anim-row row', dataset: { animDir: d } },
        h('b', { class: 'anim-dir' }, dirName(d), mirrored ? h('div', { class: 'muted' }, '（左翻轉）') : null),
        slots, h('div', { class: 'col', style: { alignItems: 'center' } }, pv, h('span', { class: 'muted' }, '預覽')));
    };
    const actionBtns = ANIM_ACTIONS.map((a) => h('button', { type: 'button', class: a.id === act ? 'active' : '', dataset: { animAction: a.id }, onclick: () => { ts.action = a.id; app.rerender(); } }, a.name));
    const animBox = h('div', { class: 'col', id: 'anim-editor' },
      h('div', { class: 'row tools' }, actionBtns),
      h('div', { class: 'row' },
        '每方向格數', def.fixedCount ? h('b', {}, `${A.count}（固定，移動時依 1-2-1-3 循環）`)
          : numInput(A.count, (v) => { A.count = v; c.anims = normalizeAnims(c.anims); app.change(); app.rerender(); }, { min: ANIM_FRAME_MIN, max: ANIM_FRAME_MAX, width: '4em' }),
        '每格速度', numInput(A.ms, (v) => { A.ms = v; app.change(); }, { min: ANIM_MS_MIN, max: ANIM_MS_MAX, step: 10, width: '5em' }), '毫秒',
        h('label', {}, h('input', { type: 'checkbox', id: 'flip-right', checked: c.flipRight, onchange: (e) => { c.flipRight = e.target.checked; app.change(); app.rerender(); } }), ' 右 = 用左圖翻轉')),
      h('div', { class: 'muted' }, ACTION_HINT[act]),
      ANIM_DIRS.map(dirRow),
      h('details', { class: 'muted' }, h('summary', {}, '舊版靜止圖（v1 專案留下的，所有動作都沒圖時才會用）'),
        h('div', { class: 'row' }, ANIM_DIRS.map((d) => h('span', {}, dirName(d), ' ', select(unitOpts, c.sprites[d] || '', (v) => { c.sprites[d] = v || null; app.change(); app.rerender(); }, { dataset: { staticDir: d } })))),
      ),
    );
    // 即時預覽：攻擊 / 計策播完停在走路第 1 格一下再重播；倒下停在最後一格一下再重播
    const t0 = performance.now();
    let raf = 0;
    const tick = (now) => {
      if (!animBox.isConnected) return;
      const { count, ms } = actionTiming(c, act);
      const loopMs = act === 'walk' ? 4 * ms : count * ms + 500;
      const k = frameAt(act, (now - t0) % loopMs, count, ms);
      for (const { cv, d } of previews) {
        const g = cv.getContext('2d');
        g.imageSmoothingEnabled = false;
        g.clearRect(0, 0, cv.width, cv.height);
        const img = k < 0 ? unitFrame(p, c, 'walk', d, 0) : unitFrame(p, c, act, d, k);
        if (img) g.drawImage(img, 0, 0, cv.width, cv.height);
        cv.dataset.frame = k;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    this.destroy = () => { cancelAnimationFrame(raf); this.destroy = null; };
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
      h('h3', {}, '角色動作（4 方向 × 走路 / 攻擊 / 施放計策 / 戰敗倒下，素材分類「角色圖」）'),
      animBox,
      h('h3', {}, '頭像（可空）'),
      h('div', { class: 'row' }, pt, select([['', '（無）'], ...p.sprites.filter((s) => s.category === 'portrait').map((s) => [s.id, s.name])], c.portrait || '', (v) => { c.portrait = v || null; app.change(); drawThumb(pt, p, c.portrait); })),
    );
    el.append(h('div', { class: 'split' }, list, form));
  },
};
