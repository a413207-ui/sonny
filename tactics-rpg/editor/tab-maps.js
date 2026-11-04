// 地圖分頁：地面層 / 物件層 / 地形覆寫 / 關卡配置（出擊點、敵人）
import { TILE, MAP_MIN, MAP_MAX, UNDO_LIMIT } from '../config.js';
import { byId, createMap, resizeMap, terrainAt, findReferences } from '../model.js';
import { drawMap, drawThumb, unitFrame, clampCam, screenToCell, cellToScreen } from '../render.js';
import { h, select, numInput, toast, confirmDelete } from './dom.js';

const ZOOMS = [0.5, 0.75, 1, 1.5, 2];
const history = new Map(); // 地圖 id → { undo, redo }

export default {
  id: 'maps',
  title: '地圖',
  render(el, app, args) {
    const p = app.project;
    const ts = (app.tabState.maps ||= { mapId: null, layer: 'ground', tool: 'pen', brush: {}, terrainView: false, grid: true, zoom: 1, stageId: null, placeTool: 'deploy', enemyChar: null });
    if (args?.mapId) ts.mapId = args.mapId;
    if (args?.stageId) { ts.stageId = args.stageId; ts.layer = 'stage'; }
    if (!byId(p.maps, ts.mapId)) ts.mapId = p.maps[0]?.id || null;
    const map = byId(p.maps, ts.mapId);
    el.append(h('h2', {}, '地圖'));

    const addMap = () => {
      const [w, hh] = p.settings.defaultMapSize;
      const m = createMap(p, `地圖 ${p.maps.length + 1}`, w, hh);
      p.maps.push(m);
      ts.mapId = m.id;
      app.change(); app.rerender();
    };
    const head = h('div', { class: 'row' },
      '地圖', select(p.maps.map((m) => [m.id, `${m.name}（${m.w}×${m.h}）`]), ts.mapId, (v) => { ts.mapId = v; app.rerender(); }, { id: 'map-select' }),
      h('button', { type: 'button', id: 'map-add', onclick: addMap }, '新增地圖'),
      map && h('button', { type: 'button', onclick: () => { const n = window.prompt('地圖名稱', map.name); if (n && n.trim()) { map.name = n.trim(); app.change(); app.rerender(); } } }, '改名'),
      map && h('button', { type: 'button', class: 'danger', onclick: () => {
        const refs = findReferences(p, 'map', map.id);
        if (!confirmDelete(map.name, refs)) return;
        for (const s of p.stages) if (s.map === map.id) s.map = null;
        p.maps.splice(p.maps.indexOf(map), 1);
        app.change(); app.rerender();
      } }, '刪除'),
    );
    el.append(head);
    if (!map) { el.append(h('div', { class: 'card' }, '還沒有地圖，按「新增地圖」。')); return; }

    let newW = map.w, newH = map.h;
    el.append(h('div', { class: 'row' }, '大小',
      numInput(map.w, (v) => { newW = v; }, { min: MAP_MIN, max: MAP_MAX, width: '4.5em' }), '×',
      numInput(map.h, (v) => { newH = v; }, { min: MAP_MIN, max: MAP_MAX, width: '4.5em' }),
      h('button', { type: 'button', id: 'map-resize', onclick: () => {
        if (newW === map.w && newH === map.h) return;
        if ((newW < map.w || newH < map.h) && !window.confirm('縮小地圖會切掉右邊 / 下面的格子，確定嗎？')) return;
        pushUndo(); resizeMap(map, newW, newH);
        for (const s of p.stages.filter((s) => s.map === map.id)) {
          s.deploy.points = s.deploy.points.filter(([x, y]) => x < newW && y < newH);
          s.enemies = s.enemies.filter((e) => e.at[0] < newW && e.at[1] < newH);
        }
        app.change(); app.rerender();
      } }, '套用大小'),
      h('span', { class: 'muted' }, `上限 ${MAP_MAX}×${MAP_MAX}`)));

    // ---- 圖層 / 工具 ----
    const LAYERS = [['ground', '地面層'], ['objects', '物件層'], ['terrain', '地形覆寫'], ['stage', '關卡配置']];
    const TOOLS = [['pen', '畫筆'], ['fill', '填滿'], ['rect', '矩形'], ['eraser', '橡皮擦']];
    const btnRow = (items, cur, onPick, prefix) => items.map(([id, name]) => h('button', { type: 'button', class: cur === id ? 'active' : '', dataset: { [prefix]: id }, onclick: () => onPick(id) }, name));
    el.append(h('div', { class: 'row' },
      btnRow(LAYERS, ts.layer, (v) => { ts.layer = v; app.rerender(); }, 'layer'),
      h('span', { style: { width: '12px' } }),
      ts.layer !== 'stage' && btnRow(TOOLS, ts.tool, (v) => { ts.tool = v; app.rerender(); }, 'tool'),
      h('label', {}, h('input', { type: 'checkbox', id: 'terrain-view', checked: ts.terrainView || ts.layer === 'terrain', disabled: ts.layer === 'terrain', onchange: (e) => { ts.terrainView = e.target.checked; dirty = true; } }), ' 地形檢視'),
      h('label', {}, h('input', { type: 'checkbox', checked: ts.grid, onchange: (e) => { ts.grid = e.target.checked; dirty = true; } }), ' 格線'),
      h('button', { type: 'button', onclick: () => setZoom(-1) }, '－'), h('button', { type: 'button', onclick: () => setZoom(1) }, '＋'),
      h('button', { type: 'button', onclick: undo, title: 'Ctrl+Z' }, '復原'), h('button', { type: 'button', onclick: redo, title: 'Ctrl+Y' }, '重做'),
    ));

    // 筆刷
    const brushBox = h('div', { class: 'brushes', id: 'map-brushes' });
    const curBrush = () => ts.brush[ts.layer];
    function renderBrushes() {
      brushBox.innerHTML = '';
      if (ts.layer === 'ground' || ts.layer === 'objects') {
        const cat = ts.layer === 'ground' ? 'tile' : 'object';
        const list = p.sprites.filter((s) => s.category === cat);
        if (!list.length) brushBox.append(h('span', { class: 'muted' }, `還沒有「${cat === 'tile' ? '地形圖塊' : '地圖物件'}」分類的素材，先到「素材」分頁畫一張。`));
        if (!list.some((s) => s.id === curBrush())) ts.brush[ts.layer] = list[0]?.id || null;
        for (const s of list) {
          const cv = h('canvas', { width: TILE, height: TILE });
          drawThumb(cv, p, s.id);
          brushBox.append(h('button', { type: 'button', class: s.id === curBrush() ? 'sel' : '', dataset: { brush: s.id }, onclick: () => { ts.brush[ts.layer] = s.id; renderBrushes(); } }, cv, s.name));
        }
      } else if (ts.layer === 'terrain') {
        if (!p.terrains.some((t) => t.id === curBrush())) ts.brush.terrain = p.terrains[0]?.id;
        for (const t of p.terrains) {
          brushBox.append(h('button', { type: 'button', class: t.id === curBrush() ? 'sel' : '', dataset: { brush: t.id }, onclick: () => { ts.brush.terrain = t.id; renderBrushes(); } },
            h('span', { class: 'terrain-chip', style: { background: t.color, width: '32px', height: '32px' } }), t.name));
        }
        brushBox.append(h('span', { class: 'muted' }, '橡皮擦 = 取消覆寫，回到跟著圖塊的預設地形（白框格是覆寫過的）。'));
      } else {
        renderStageTools();
      }
    }
    function renderStageTools() {
      const stages = p.stages.filter((s) => s.map === map.id);
      if (!stages.length) {
        brushBox.append(h('span', { class: 'muted' }, '沒有關卡使用這張地圖。到「關卡」分頁新增關卡並選這張地圖。'));
        return;
      }
      if (!stages.some((s) => s.id === ts.stageId)) ts.stageId = stages[0].id;
      const st = byId(p.stages, ts.stageId);
      const enemies = p.characters.filter((c) => c.faction === 'enemy');
      if (!enemies.some((c) => c.id === ts.enemyChar)) ts.enemyChar = enemies[0]?.id || null;
      brushBox.append(h('div', { class: 'row' },
        '關卡', select(stages.map((s) => [s.id, s.name]), ts.stageId, (v) => { ts.stageId = v; app.rerender(); }),
        btnRow([['deploy', '出擊點'], ['enemy', '敵人']], ts.placeTool, (v) => { ts.placeTool = v; app.rerender(); }, 'place'),
        ts.placeTool === 'enemy' && (enemies.length ? select(enemies.map((c) => [c.id, c.name]), ts.enemyChar, (v) => { ts.enemyChar = v; }, { id: 'enemy-char' }) : h('span', { class: 'muted' }, '先在「角色」分頁建立陣營為敵方的角色')),
        h('span', { class: 'muted' }, `出擊點 ${st.deploy.points.length} 個（出擊上限 ${st.deploy.max}）、敵人 ${st.enemies.length} 名。點同一格可以移除。`)));
    }
    el.append(brushBox);
    renderBrushes();

    // ---- 畫布 ----
    const wrap = h('div', { class: 'map-wrap', id: 'map-wrap' });
    const cv = h('canvas', { id: 'map-canvas' });
    wrap.append(cv);
    const status = h('div', { class: 'muted', id: 'map-status' }, '滑鼠滾輪 / 按住空白鍵或中鍵拖曳 / 觸控雙指拖曳：移動畫面');
    el.append(wrap, status);
    const g = cv.getContext('2d');
    const cam = (app.tabState.mapCam ||= {});
    if (cam.mapId !== map.id) Object.assign(cam, { mapId: map.id, x: 0, y: 0, scale: ts.zoom });
    cam.scale = ts.zoom;
    let vw = 0, vh = 0, dpr = 1, dirty = true, raf = 0, alive = true, rectDrag = null, hoverCell = null, lastTiles = 0;
    function resize() {
      const r = wrap.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      vw = Math.max(1, Math.floor(r.width)); vh = Math.max(1, Math.floor(r.height));
      cv.width = vw * dpr; cv.height = vh * dpr; cv.style.width = `${vw}px`; cv.style.height = `${vh}px`;
      clampCam(map, cam, vw, vh);
      dirty = true;
    }
    function setZoom(d) {
      const i = Math.min(ZOOMS.length - 1, Math.max(0, ZOOMS.indexOf(ts.zoom) + d));
      const cx = cam.x + vw / cam.scale / 2, cy = cam.y + vh / cam.scale / 2;
      ts.zoom = ZOOMS[i]; cam.scale = ts.zoom;
      cam.x = cx - vw / cam.scale / 2; cam.y = cy - vh / cam.scale / 2;
      clampCam(map, cam, vw, vh);
      dirty = true;
    }
    function loop() {
      if (!alive) return;
      raf = requestAnimationFrame(loop);
      if (!dirty) return;
      dirty = false;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.fillStyle = '#333'; g.fillRect(0, 0, vw, vh);
      lastTiles = drawMap(g, p, map, cam, vw, vh, { terrainView: ts.terrainView || ts.layer === 'terrain', grid: ts.grid });
      const tsz = TILE * cam.scale;
      // 關卡配置
      const st = byId(p.stages, ts.stageId);
      const showStage = st && st.map === map.id && ts.layer === 'stage';
      if (showStage) {
        st.deploy.points.forEach(([x, y], i) => {
          const [sx, sy] = cellToScreen(cam, x, y);
          g.fillStyle = 'rgba(74,154,232,.55)'; g.fillRect(sx + 2, sy + 2, tsz - 4, tsz - 4);
          g.fillStyle = '#fff'; g.font = `bold ${Math.max(12, tsz / 3)}px system-ui,sans-serif`;
          g.fillText(String(i + 1), sx + tsz / 2 - 4, sy + tsz / 2 + 5);
        });
        for (const e of st.enemies) {
          const c = byId(p.characters, e.char);
          const [sx, sy] = cellToScreen(cam, e.at[0], e.at[1]);
          g.fillStyle = 'rgba(232,88,74,.45)'; g.fillRect(sx + 2, sy + 2, tsz - 4, tsz - 4);
          const img = c && unitFrame(p, c, 'walk', 'left', 0);
          if (img) g.drawImage(img, sx, sy, tsz, tsz);
        }
      }
      if (rectDrag) {
        const [x0, y0, x1, y1] = rectBounds();
        const [sx, sy] = cellToScreen(cam, x0, y0);
        g.strokeStyle = '#ff0'; g.lineWidth = 2;
        g.strokeRect(sx, sy, (x1 - x0 + 1) * tsz, (y1 - y0 + 1) * tsz);
      } else if (hoverCell) {
        const [sx, sy] = cellToScreen(cam, hoverCell[0], hoverCell[1]);
        g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(sx + 1, sy + 1, tsz - 2, tsz - 2);
      }
    }
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();
    raf = requestAnimationFrame(loop);

    // ---- 編輯 ----
    const layerArr = () => map[ts.layer];
    const paintValue = () => (ts.tool === 'eraser' ? null : curBrush() ?? null);
    function pushUndo() {
      if (!history.has(map.id)) history.set(map.id, { undo: [], redo: [] });
      const hs = history.get(map.id);
      hs.undo.push(snapshot());
      if (hs.undo.length > UNDO_LIMIT) hs.undo.shift();
      hs.redo.length = 0;
    }
    const snapshot = () => ({ w: map.w, h: map.h, ground: map.ground.slice(), objects: map.objects.slice(), terrain: map.terrain.slice() });
    function undo() {
      const hs = history.get(map.id);
      if (!hs?.undo.length) return;
      hs.redo.push(snapshot());
      Object.assign(map, hs.undo.pop());
      app.change(); dirty = true;
    }
    function redo() {
      const hs = history.get(map.id);
      if (!hs?.redo.length) return;
      hs.undo.push(snapshot());
      Object.assign(map, hs.redo.pop());
      app.change(); dirty = true;
    }
    function fillAt(x, y, v) {
      const arr = layerArr();
      const target = arr[y * map.w + x];
      if (target === v) return;
      const stack = [y * map.w + x];
      while (stack.length) {
        const i = stack.pop();
        if (arr[i] !== target) continue;
        arr[i] = v;
        const cx = i % map.w, cy = (i / map.w) | 0;
        if (cx > 0) stack.push(i - 1);
        if (cx < map.w - 1) stack.push(i + 1);
        if (cy > 0) stack.push(i - map.w);
        if (cy < map.h - 1) stack.push(i + map.w);
      }
    }
    function rectBounds() {
      const [a, b] = rectDrag;
      return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[0], b[0]), Math.max(a[1], b[1])];
    }
    function placeStage(x, y) {
      const st = byId(p.stages, ts.stageId);
      if (!st) return;
      const t = terrainAt(p, map, x, y);
      const di = st.deploy.points.findIndex(([px, py]) => px === x && py === y);
      const ei = st.enemies.findIndex((e) => e.at[0] === x && e.at[1] === y);
      if (ts.placeTool === 'deploy') {
        if (di >= 0) st.deploy.points.splice(di, 1);
        else if (ei >= 0) return toast('這格已經有敵人');
        else if (t.impassable) return toast('不可通行的地形不能放出擊點');
        else st.deploy.points.push([x, y]);
      } else {
        if (ei >= 0) st.enemies.splice(ei, 1);
        else if (di >= 0) return toast('這格是出擊點');
        else if (t.impassable) return toast('不可通行的地形不能放敵人');
        else if (!ts.enemyChar) return toast('先選要放的敵人');
        else st.enemies.push({ char: ts.enemyChar, at: [x, y], ai: 'aggressive' });
      }
      app.change(); dirty = true;
      brushBox.innerHTML = ''; renderStageTools();
    }

    let pan = null, painting = false, spaceDown = false;
    const local = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    const cellAt = (e) => {
      const [x, y] = screenToCell(cam, ...local(e));
      return x >= 0 && y >= 0 && x < map.w && y < map.h ? [x, y] : null;
    };
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    // 觸控：單指 = 繪製，雙指 = 移動畫面（原本單指一律移動畫面，導致手機/平板無法換地形）
    const touches = new Set();
    cv.addEventListener('pointerdown', (e) => {
      cv.setPointerCapture(e.pointerId);
      if (e.pointerType === 'touch') {
        touches.add(e.pointerId);
        if (touches.size >= 2) {
          // 第二指落下：取消這一筆繪製，改成移動畫面
          if (painting || rectDrag) { painting = false; rectDrag = null; undo(); history.get(map.id)?.redo.pop(); }
          pan = { at: local(e), x: cam.x, y: cam.y, id: e.pointerId };
          return;
        }
      }
      if (e.button === 1 || spaceDown) {
        pan = { at: local(e), x: cam.x, y: cam.y };
        return;
      }
      const c = cellAt(e);
      if (!c) return;
      if (ts.layer === 'stage') return placeStage(c[0], c[1]);
      pushUndo();
      if (ts.tool === 'fill') { fillAt(c[0], c[1], paintValue()); app.change(); dirty = true; return; }
      if (ts.tool === 'rect') { rectDrag = [c, c]; dirty = true; return; }
      painting = true;
      layerArr()[c[1] * map.w + c[0]] = paintValue();
      dirty = true;
    });
    cv.addEventListener('pointermove', (e) => {
      if (pan) {
        if (pan.id != null && e.pointerId !== pan.id) return;
        const [x, y] = local(e);
        cam.x = pan.x - (x - pan.at[0]) / cam.scale; cam.y = pan.y - (y - pan.at[1]) / cam.scale;
        clampCam(map, cam, vw, vh); dirty = true;
        return;
      }
      const c = cellAt(e);
      if (String(c) !== String(hoverCell)) {
        hoverCell = c; dirty = true;
        if (c) {
          const t = terrainAt(p, map, c[0], c[1]);
          status.textContent = `(${c[0]}, ${c[1]})　地形：${t.name}${map.terrain[c[1] * map.w + c[0]] ? '（覆寫）' : ''}　圖塊：${byId(p.sprites, map.ground[c[1] * map.w + c[0]])?.name || '無'}　物件：${byId(p.sprites, map.objects[c[1] * map.w + c[0]])?.name || '無'}　畫面上繪製 ${lastTiles} 格`;
        }
      }
      if (!c) return;
      if (rectDrag) { rectDrag[1] = c; dirty = true; }
      else if (painting) { layerArr()[c[1] * map.w + c[0]] = paintValue(); dirty = true; }
    });
    const up = (e) => {
      touches.delete(e.pointerId);
      if (pan) { if (!touches.size) pan = null; return; }
      if (rectDrag) {
        const [x0, y0, x1, y1] = rectBounds();
        const v = paintValue();
        for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) layerArr()[y * map.w + x] = v;
        rectDrag = null;
        app.change(); dirty = true;
      }
      if (painting) { painting = false; app.change(); }
    };
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', up);
    cv.addEventListener('pointerleave', () => { hoverCell = null; dirty = true; });
    cv.addEventListener('wheel', (e) => {
      e.preventDefault();
      if (e.ctrlKey) return setZoom(e.deltaY < 0 ? 1 : -1);
      cam.x += (e.shiftKey ? e.deltaY : e.deltaX) / cam.scale;
      cam.y += (e.shiftKey ? 0 : e.deltaY) / cam.scale;
      clampCam(map, cam, vw, vh); dirty = true;
    }, { passive: false });
    const keyup = (e) => { if (e.code === 'Space') spaceDown = false; };
    window.addEventListener('keyup', keyup);
    app.keyHandler = (e) => {
      if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) return;
      const k = e.key.toLowerCase();
      if (e.code === 'Space') { spaceDown = true; e.preventDefault(); }
      else if ((e.ctrlKey || e.metaKey) && k === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      else if ((e.ctrlKey || e.metaKey) && (k === 'y' || (k === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
      else if (k === '+' || k === '=') setZoom(1);
      else if (k === '-') setZoom(-1);
    };
    this.destroy = () => {
      alive = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('keyup', keyup);
      this.destroy = null;
    };
    // 測試用
    app.mapView = { cam, get drawn() { return lastTiles; }, cellToClient: (x, y) => { const r = cv.getBoundingClientRect(); const [sx, sy] = cellToScreen(cam, x, y); return [r.left + sx + (TILE * cam.scale) / 2, r.top + sy + (TILE * cam.scale) / 2]; } };
  },
};
