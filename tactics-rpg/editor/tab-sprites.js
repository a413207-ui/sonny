// 素材分頁：48×48 像素編輯器
import { TILE, SPRITE_CATEGORIES, UNDO_LIMIT, MAX_PALETTE } from '../config.js';
import { decodePixels, encodePixels, blankPixels, toRGBA, floodFill, flipH, flipV, addColor, PIXEL_COUNT } from '../pixels.js';
import { genId, byId, paletteOf, findReferences } from '../model.js';
import { drawThumb, clearSpriteCache } from '../render.js';
import { h, select, toast, downloadBlob, safeFileName, confirmDelete } from './dom.js';

const history = new Map(); // 素材 id → { undo: [], redo: [] }（本次開啟期間有效）
const TOOLS = [
  ['pencil', '鉛筆', 'B'],
  ['eraser', '橡皮擦', 'E'],
  ['fill', '油漆桶', 'G'],
  ['picker', '滴管', 'I'],
];

export default {
  id: 'sprites',
  title: '素材',
  render(el, app) {
    const p = app.project;
    const ts = (app.tabState.sprites ||= { selId: null, filter: 'all', color: 1, tool: 'pencil', zoom: 10, grid: true });
    if (!byId(p.sprites, ts.selId)) ts.selId = (p.sprites.find((s) => ts.filter === 'all' || s.category === ts.filter) || p.sprites[0])?.id || null;
    const sprite = () => byId(p.sprites, ts.selId);
    let pixels = sprite() ? decodePixels(sprite().pixels) : null;
    const hist = () => {
      if (!history.has(ts.selId)) history.set(ts.selId, { undo: [], redo: [] });
      return history.get(ts.selId);
    };

    // ---- 左：素材清單 ----
    const listEl = h('div', { class: 'col', id: 'sprite-list' });
    function renderList() {
      listEl.innerHTML = '';
      for (const s of p.sprites) {
        if (ts.filter !== 'all' && s.category !== ts.filter) continue;
        const cv = h('canvas', { width: TILE, height: TILE });
        drawThumb(cv, p, s.id);
        listEl.append(h('div', { class: `item${s.id === ts.selId ? ' sel' : ''}`, dataset: { id: s.id }, onclick: () => { ts.selId = s.id; app.rerender(); } }, cv, h('span', {}, s.name)));
      }
      if (!listEl.children.length) listEl.append(h('div', { class: 'muted' }, '這個分類還沒有素材'));
    }
    function addSprite(copyFrom) {
      const cat = copyFrom?.category || (ts.filter === 'all' ? 'tile' : ts.filter);
      const s = copyFrom
        ? { ...JSON.parse(JSON.stringify(copyFrom)), id: genId('spr'), name: `${copyFrom.name} 複本` }
        : { id: genId('spr'), name: `新素材 ${p.sprites.length + 1}`, category: cat, palette: p.palettes[0].id, pixels: blankPixels(), defaultTerrain: cat === 'tile' ? p.terrains[0]?.id || null : null };
      p.sprites.push(s);
      ts.selId = s.id;
      app.change();
      app.rerender();
    }
    const left = h('div', { class: 'list' },
      h('div', { class: 'row' }, select([['all', '全部分類'], ...SPRITE_CATEGORIES.map((c) => [c.id, c.name])], ts.filter, (v) => { ts.filter = v; app.rerender(); }, { id: 'sprite-filter' })),
      h('div', { class: 'row' },
        h('button', { type: 'button', id: 'sprite-add', onclick: () => addSprite() }, '新增'),
        h('button', { type: 'button', id: 'sprite-copy', disabled: !sprite(), onclick: () => addSprite(sprite()) }, '複製'),
        h('button', { type: 'button', disabled: !sprite(), onclick: () => {
          const n = window.prompt('素材名稱', sprite().name);
          if (n && n.trim()) { sprite().name = n.trim(); app.change(); app.rerender(); }
        } }, '改名'),
        h('button', { type: 'button', class: 'danger', id: 'sprite-del', disabled: !sprite(), onclick: () => {
          const s = sprite();
          const refs = findReferences(p, 'sprite', s.id);
          if (!confirmDelete(s.name, refs)) return;
          for (const c of p.characters) {
            for (const d of ['down', 'up', 'left', 'right']) if (c.sprites?.[d] === s.id) c.sprites[d] = null;
            if (c.portrait === s.id) c.portrait = null;
          }
          for (const m of p.maps) for (const k of ['ground', 'objects']) m[k] = m[k].map((x) => (x === s.id ? null : x));
          p.sprites.splice(p.sprites.indexOf(s), 1);
          history.delete(s.id);
          ts.selId = null;
          app.change();
          app.rerender();
        } }, '刪除')),
      listEl,
    );
    renderList();
    el.append(h('h2', {}, '素材（48×48 像素編輯器）'));
    if (!sprite()) {
      el.append(h('div', { class: 'split' }, left, h('div', { class: 'card grow' }, '還沒有素材，按「新增」開始畫。')));
      return;
    }
    const pal = () => paletteOf(p, sprite());

    // ---- 中：畫布 ----
    const cv = h('canvas', { id: 'pix-canvas', class: 'pix checker' });
    const g = cv.getContext('2d');
    const base = document.createElement('canvas');
    base.width = TILE; base.height = TILE;
    function draw() {
      const z = ts.zoom;
      if (cv.width !== TILE * z) { cv.width = TILE * z; cv.height = TILE * z; }
      base.getContext('2d').putImageData(new ImageData(toRGBA(pixels, pal().colors), TILE, TILE), 0, 0);
      g.imageSmoothingEnabled = false;
      g.clearRect(0, 0, cv.width, cv.height);
      g.drawImage(base, 0, 0, cv.width, cv.height);
      if (ts.grid && z >= 4) {
        g.strokeStyle = 'rgba(0,0,0,.18)';
        g.lineWidth = 1;
        g.beginPath();
        for (let i = 0; i <= TILE; i++) {
          g.moveTo(i * z + 0.5, 0); g.lineTo(i * z + 0.5, cv.height);
          g.moveTo(0, i * z + 0.5); g.lineTo(cv.width, i * z + 0.5);
        }
        g.stroke();
        g.strokeStyle = 'rgba(0,0,0,.4)';
        g.beginPath();
        for (let i = 0; i <= TILE; i += 12) {
          g.moveTo(i * z + 0.5, 0); g.lineTo(i * z + 0.5, cv.height);
          g.moveTo(0, i * z + 0.5); g.lineTo(cv.width, i * z + 0.5);
        }
        g.stroke();
      }
      for (const pv of previews) drawThumb(pv, p, ts.selId);
    }
    function commit() {
      const s = sprite();
      const enc = encodePixels(pixels);
      if (enc === s.pixels) return false;
      s.pixels = enc;
      clearSpriteCache();
      app.change();
      draw();
      const item = listEl.querySelector(`[data-id="${s.id}"] canvas`);
      if (item) drawThumb(item, p, s.id);
      return true;
    }
    function pushUndo(snapshot) {
      const hs = hist();
      hs.undo.push(snapshot);
      if (hs.undo.length > UNDO_LIMIT) hs.undo.shift();
      hs.redo.length = 0;
      updateUndoBtns();
    }
    function undo() {
      const hs = hist();
      if (!hs.undo.length) return;
      hs.redo.push(pixels.slice());
      pixels = hs.undo.pop();
      commit(); updateUndoBtns();
    }
    function redo() {
      const hs = hist();
      if (!hs.redo.length) return;
      hs.undo.push(pixels.slice());
      pixels = hs.redo.pop();
      commit(); updateUndoBtns();
    }
    function transform(fn) {
      pushUndo(pixels.slice());
      pixels = fn(pixels);
      commit();
    }
    const cellOf = (e) => {
      const r = cv.getBoundingClientRect();
      const x = Math.floor(((e.clientX - r.left) / r.width) * TILE), y = Math.floor(((e.clientY - r.top) / r.height) * TILE);
      return x >= 0 && y >= 0 && x < TILE && y < TILE ? [x, y] : null;
    };
    let stroke = null;
    const paintAt = (x, y, v) => { pixels[y * TILE + x] = v; };
    function line(x0, y0, x1, y1, v) {
      const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
      for (let k = 0; k <= n; k++) paintAt(Math.round(x0 + ((x1 - x0) * k) / (n || 1)), Math.round(y0 + ((y1 - y0) * k) / (n || 1)), v);
    }
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    cv.addEventListener('pointerdown', (e) => {
      const c = cellOf(e);
      if (!c) return;
      e.preventDefault();
      const tool = e.button === 2 ? 'eraser' : ts.tool;
      if (tool === 'picker') {
        ts.color = pixels[c[1] * TILE + c[0]];
        renderPalette();
        return;
      }
      const snap = pixels.slice();
      if (tool === 'fill') {
        if (floodFill(pixels, c[0], c[1], ts.color)) { pushUndo(snap); commit(); }
        return;
      }
      cv.setPointerCapture(e.pointerId);
      stroke = { snap, last: c, v: tool === 'eraser' ? 0 : ts.color };
      paintAt(c[0], c[1], stroke.v);
      draw();
    });
    cv.addEventListener('pointermove', (e) => {
      if (!stroke) return;
      const c = cellOf(e);
      if (!c) return;
      line(stroke.last[0], stroke.last[1], c[0], c[1], stroke.v);
      stroke.last = c;
      draw();
    });
    const endStroke = () => {
      if (!stroke) return;
      const snap = stroke.snap;
      stroke = null;
      if (snap.some((v, i) => v !== pixels[i])) { pushUndo(snap); commit(); }
    };
    cv.addEventListener('pointerup', endStroke);
    cv.addEventListener('pointercancel', endStroke);

    const toolBtns = TOOLS.map(([id, name, key]) => h('button', { type: 'button', dataset: { tool: id }, class: ts.tool === id ? 'active' : '', title: `快捷鍵 ${key}`, onclick: () => setTool(id) }, `${name} ${key}`));
    function setTool(id) {
      ts.tool = id;
      for (const b of toolBtns) b.classList.toggle('active', b.dataset.tool === id);
    }
    const undoBtn = h('button', { type: 'button', id: 'pix-undo', title: 'Ctrl+Z', onclick: undo }, '復原');
    const redoBtn = h('button', { type: 'button', id: 'pix-redo', title: 'Ctrl+Y', onclick: redo }, '重做');
    function updateUndoBtns() { undoBtn.disabled = !hist().undo.length; redoBtn.disabled = !hist().redo.length; }
    const zoomLabel = h('span', {}, `${ts.zoom}×`);
    const setZoom = (z) => { ts.zoom = Math.min(16, Math.max(4, z)); zoomRange.value = ts.zoom; zoomLabel.textContent = `${ts.zoom}×`; draw(); };
    const zoomRange = h('input', { type: 'range', min: 4, max: 16, value: ts.zoom, oninput: (e) => setZoom(Number(e.target.value)) });
    const center = h('div', { class: 'col' },
      h('div', { class: 'row tools' }, toolBtns,
        h('button', { type: 'button', onclick: () => transform((x) => flipH(x)) }, '左右翻轉'),
        h('button', { type: 'button', onclick: () => transform((x) => flipV(x)) }, '上下翻轉'),
        h('button', { type: 'button', onclick: () => transform(() => new Uint8Array(PIXEL_COUNT)) }, '清空'),
        undoBtn, redoBtn),
      h('div', { class: 'row' }, '縮放', zoomRange, zoomLabel,
        h('label', {}, h('input', { type: 'checkbox', checked: ts.grid, onchange: (e) => { ts.grid = e.target.checked; draw(); } }), ' 格線'),
        h('button', { type: 'button', id: 'pix-png', onclick: exportPng }, '匯出 PNG'),
        h('span', { class: 'muted' }, '左鍵畫、右鍵擦')),
      h('div', { style: { overflow: 'auto', maxWidth: '100%' } }, cv),
    );
    function exportPng() {
      const c = document.createElement('canvas');
      c.width = TILE; c.height = TILE;
      c.getContext('2d').putImageData(new ImageData(toRGBA(pixels, pal().colors), TILE, TILE), 0, 0);
      c.toBlob((b) => b && downloadBlob(`${safeFileName(sprite().name)}.png`, b), 'image/png');
    }

    // ---- 右：屬性與調色盤 ----
    const previews = [h('canvas', { class: 'thumb checker', width: TILE, height: TILE }), h('canvas', { class: 'thumb big checker', width: TILE, height: TILE })];
    const palEl = h('div', { class: 'palette', id: 'palette' });
    const colorInput = h('input', { type: 'color', value: '#ff8800' });
    function renderPalette() {
      palEl.innerHTML = '';
      pal().colors.forEach((c, i) => {
        palEl.append(h('button', {
          type: 'button', class: `swatch${i === ts.color ? ' sel' : ''}${i === 0 ? ' checker' : ''}`, dataset: { idx: i }, title: i === 0 ? '透明' : c,
          style: i === 0 ? {} : { background: c }, onclick: () => { ts.color = i; renderPalette(); if (ts.tool === 'eraser' || ts.tool === 'picker') setTool('pencil'); },
        }));
      });
      if (ts.color > 0) colorInput.value = pal().colors[ts.color].slice(0, 7);
    }
    const s = sprite();
    const terrOpts = [['', '（無）'], ...p.terrains.map((t) => [t.id, t.name])];
    const right = h('div', { class: 'col', style: { width: '250px' } },
      h('div', { class: 'row' }, '名稱', h('input', { value: s.name, style: { width: '10em' }, onchange: (e) => { s.name = e.target.value.trim() || s.name; app.change(); renderList(); } })),
      h('div', { class: 'row' }, '分類', select(SPRITE_CATEGORIES.map((c) => [c.id, c.name]), s.category, (v) => { s.category = v; app.change(); app.rerender(); })),
      (s.category === 'tile' || s.category === 'object') && h('div', { class: 'row' }, '預設地形', select(terrOpts, s.defaultTerrain || '', (v) => { s.defaultTerrain = v || null; app.change(); })),
      h('div', { class: 'row' }, '預覽', previews),
      h('h3', {}, '調色盤'),
      palEl,
      h('div', { class: 'row' }, colorInput,
        h('button', { type: 'button', onclick: () => {
          const idx = addColor(pal(), colorInput.value);
          if (idx < 0) return toast(`調色盤最多 ${MAX_PALETTE} 色`, 'error');
          ts.color = idx; app.change(); renderPalette();
        } }, '加入新顏色'),
        h('button', { type: 'button', title: '把目前選的顏色改成左邊的色票（所有用到這個顏色的素材都會跟著變）', onclick: () => {
          if (ts.color === 0) return toast('透明色不能修改');
          pal().colors[ts.color] = colorInput.value.toLowerCase();
          clearSpriteCache(); app.change(); renderPalette(); draw(); renderList();
        } }, '修改此色')),
      h('div', { class: 'muted' }, '第一格（格子底）是透明色。'),
    );

    el.append(h('div', { class: 'split' }, left, h('div', { class: 'card grow' }, center), h('div', { class: 'card' }, right)));
    renderPalette();
    updateUndoBtns();
    draw();
    app.keyHandler = (e) => {
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) return;
      const k = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && k === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      else if ((e.ctrlKey || e.metaKey) && (k === 'y' || (k === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
      else if (e.ctrlKey || e.metaKey || e.altKey) return;
      else if (k === 'b') setTool('pencil');
      else if (k === 'e') setTool('eraser');
      else if (k === 'g') setTool('fill');
      else if (k === 'i') setTool('picker');
      else if (k === '+' || k === '=') setZoom(ts.zoom + 1);
      else if (k === '-') setZoom(ts.zoom - 1);
    };
  },
};
