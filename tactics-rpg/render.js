// 畫面繪製工具（編輯器與匯出遊戲共用）：素材轉 canvas（含快取）、只畫可見範圍的地圖。
import { TILE } from './config.js';
import { decodePixels, toRGBA, flipH } from './pixels.js';
import { byId, paletteOf, terrainAt } from './model.js';

const cache = new Map(); // key: sprite id → { key, canvas }

export function spriteCanvas(project, spriteId, flip = false) {
  const sp = byId(project.sprites, spriteId);
  if (!sp) return null;
  const pal = paletteOf(project, sp);
  const key = `${sp.pixels}|${pal.colors.join(',')}|${flip ? 1 : 0}`;
  const ck = `${spriteId}|${flip ? 1 : 0}`;
  const hit = cache.get(ck);
  if (hit && hit.key === key) return hit.canvas;
  let px = decodePixels(sp.pixels);
  if (!px) return null;
  if (flip) px = flipH(px);
  const cv = document.createElement('canvas');
  cv.width = TILE; cv.height = TILE;
  cv.getContext('2d').putImageData(new ImageData(toRGBA(px, pal.colors), TILE, TILE), 0, 0);
  cache.set(ck, { key, canvas: cv });
  return cv;
}
export const clearSpriteCache = () => cache.clear();

// 角色依方向取圖：右可設為左的翻轉；缺圖時退回下 → 任何一張
export function unitSprite(project, sprites, flipRight, dir) {
  const s = sprites || {};
  if (dir === 'right' && (flipRight || !s.right) && s.left) return spriteCanvas(project, s.left, true);
  return spriteCanvas(project, s[dir], false) || spriteCanvas(project, s.down) || spriteCanvas(project, s.left) || spriteCanvas(project, s.up) || spriteCanvas(project, s.right);
}

// 畫一張縮圖到 canvas 元素
export function drawThumb(cv, project, spriteId, flip = false) {
  const g = cv.getContext('2d');
  g.imageSmoothingEnabled = false;
  g.clearRect(0, 0, cv.width, cv.height);
  const s = spriteCanvas(project, spriteId, flip);
  if (s) g.drawImage(s, 0, 0, cv.width, cv.height);
}

// 可見範圍：cam = { x, y, scale }（x,y 為世界座標像素，左上角）
export function visibleRange(map, cam, vw, vh) {
  const ts = TILE * cam.scale;
  return {
    x0: Math.max(0, Math.floor(cam.x / TILE)),
    y0: Math.max(0, Math.floor(cam.y / TILE)),
    x1: Math.min(map.w - 1, Math.floor((cam.x + vw / cam.scale) / TILE)),
    y1: Math.min(map.h - 1, Math.floor((cam.y + vh / cam.scale) / TILE)),
    ts,
  };
}

// 畫地面層 + 物件層（只畫可見格），opts.terrainView 時改畫地形色塊
export function drawMap(g, project, map, cam, vw, vh, opts = {}) {
  g.imageSmoothingEnabled = false;
  const r = visibleRange(map, cam, vw, vh);
  const ts = r.ts;
  let drawn = 0;
  for (let y = r.y0; y <= r.y1; y++) {
    for (let x = r.x0; x <= r.x1; x++) {
      const i = y * map.w + x;
      const sx = Math.round((x * TILE - cam.x) * cam.scale), sy = Math.round((y * TILE - cam.y) * cam.scale);
      const sz = Math.round(((x + 1) * TILE - cam.x) * cam.scale) - sx;
      const g0 = spriteCanvas(project, map.ground[i]);
      if (g0) g.drawImage(g0, sx, sy, sz, sz);
      else { g.fillStyle = '#222'; g.fillRect(sx, sy, sz, sz); }
      const o = map.objects[i] && spriteCanvas(project, map.objects[i]);
      if (o) g.drawImage(o, sx, sy, sz, sz);
      if (opts.terrainView) {
        const t = terrainAt(project, map, x, y);
        g.globalAlpha = 0.55;
        g.fillStyle = t.color;
        g.fillRect(sx, sy, sz, sz);
        g.globalAlpha = 1;
        if (map.terrain[i]) { g.strokeStyle = '#fff'; g.lineWidth = 2; g.strokeRect(sx + 3, sy + 3, sz - 6, sz - 6); }
        if (sz >= 30) {
          g.fillStyle = '#000';
          g.font = `${Math.max(10, Math.floor(sz / 4))}px system-ui, sans-serif`;
          g.fillText(t.name.slice(0, 2), sx + 3, sy + sz / 3);
        }
      }
      drawn++;
    }
  }
  if (opts.grid) {
    g.strokeStyle = 'rgba(0,0,0,.25)';
    g.lineWidth = 1;
    g.beginPath();
    for (let x = r.x0; x <= r.x1 + 1; x++) { const sx = Math.round((x * TILE - cam.x) * cam.scale) + 0.5; g.moveTo(sx, 0); g.lineTo(sx, vh); }
    for (let y = r.y0; y <= r.y1 + 1; y++) { const sy = Math.round((y * TILE - cam.y) * cam.scale) + 0.5; g.moveTo(0, sy); g.lineTo(vw, sy); }
    g.stroke();
  }
  return drawn;
}

// 把相機限制在地圖範圍內（地圖比畫面小時置中）
export function clampCam(map, cam, vw, vh) {
  const ww = map.w * TILE, wh = map.h * TILE;
  const vwW = vw / cam.scale, vhW = vh / cam.scale;
  cam.x = ww <= vwW ? (ww - vwW) / 2 : Math.min(Math.max(cam.x, 0), ww - vwW);
  cam.y = wh <= vhW ? (wh - vhW) / 2 : Math.min(Math.max(cam.y, 0), wh - vhW);
}

export const screenToCell = (cam, sx, sy) => [Math.floor(sx / cam.scale / TILE + cam.x / TILE), Math.floor(sy / cam.scale / TILE + cam.y / TILE)];
export const cellToScreen = (cam, x, y) => [(x * TILE - cam.x) * cam.scale, (y * TILE - cam.y) * cam.scale];
