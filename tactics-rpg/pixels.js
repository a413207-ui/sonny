// 像素資料：48×48 調色盤索引，存成 RLE 壓縮字串（不存 base64 PNG）。
// 格式：連續相同索引記成「次數 + 索引字元」，次數為 1 時省略。索引 0 = 透明。
import { TILE, MAX_PALETTE } from './config.js';

export const PIXEL_COUNT = TILE * TILE;
// 64 個索引字元（不含數字、引號、< > \，放進 JSON / HTML 都安全）
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&*+-.:;=';
const ALPHA_INDEX = new Map([...ALPHA].map((c, i) => [c, i]));

// 預設 32 色調色盤（第 0 個為透明）。原創配色。
export const DEFAULT_COLORS = [
  '#00000000',
  '#101018', '#3a3a4a', '#6e6e82', '#a8a8b8', '#e8e8f0', '#ffffff',
  '#4a2a1a', '#7a4a2a', '#b07a48', '#e0b080', '#ffe0c0',
  '#2a4a1a', '#3e7a2a', '#68b040', '#a8e070',
  '#1a2a5a', '#2a5ab0', '#4a9ae8', '#a0d8ff',
  '#5a1a1a', '#b02a2a', '#e8584a', '#ffa090',
  '#c08a10', '#f0c830', '#fff080',
  '#4a2a6a', '#8a4ac0', '#d080e0',
  '#2a6a6a', '#50b0a0',
];

export function encodePixels(arr) {
  let out = '';
  let i = 0;
  while (i < arr.length) {
    const v = arr[i];
    let n = 1;
    while (i + n < arr.length && arr[i + n] === v) n++;
    out += (n > 1 ? n : '') + ALPHA[v];
    i += n;
  }
  return out;
}

// 解碼；格式錯誤回傳 null
export function decodePixels(str, count = PIXEL_COUNT) {
  if (typeof str !== 'string') return null;
  const out = new Uint8Array(count);
  let pos = 0;
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c >= '0' && c <= '9') {
      n = n * 10 + (c.charCodeAt(0) - 48);
      if (n > count) return null;
      continue;
    }
    const idx = ALPHA_INDEX.get(c);
    if (idx === undefined) return null;
    const run = n || 1;
    if (pos + run > count) return null;
    out.fill(idx, pos, pos + run);
    pos += run;
    n = 0;
  }
  if (n !== 0 || pos !== count) return null;
  return out;
}

export const blankPixels = () => encodePixels(new Uint8Array(PIXEL_COUNT));

export function isValidColor(c) {
  return typeof c === 'string' && /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(c);
}

export function addColor(palette, hex) {
  const c = hex.toLowerCase();
  const found = palette.colors.findIndex((x) => x.toLowerCase() === c);
  if (found > 0) return found;
  if (palette.colors.length >= MAX_PALETTE) return -1;
  palette.colors.push(c);
  return palette.colors.length - 1;
}

// 轉成 RGBA（給 ImageData 用）
export function toRGBA(pixels, colors) {
  const rgba = new Uint8ClampedArray(pixels.length * 4);
  const lut = colors.map((c) => {
    if (!isValidColor(c)) return [0, 0, 0, 0];
    const r = parseInt(c.slice(1, 3), 16), g = parseInt(c.slice(3, 5), 16), b = parseInt(c.slice(5, 7), 16);
    const a = c.length === 9 ? parseInt(c.slice(7, 9), 16) : 255;
    return [r, g, b, a];
  });
  for (let i = 0; i < pixels.length; i++) {
    const v = pixels[i];
    if (v === 0) continue; // 透明
    const q = lut[v] || [0, 0, 0, 0];
    rgba.set(q, i * 4);
  }
  return rgba;
}

// 4 方向油漆桶
export function floodFill(pixels, x, y, value, w = TILE, h = TILE) {
  const target = pixels[y * w + x];
  if (target === value) return false;
  const stack = [y * w + x];
  while (stack.length) {
    const i = stack.pop();
    if (pixels[i] !== target) continue;
    pixels[i] = value;
    const px = i % w, py = (i / w) | 0;
    if (px > 0) stack.push(i - 1);
    if (px < w - 1) stack.push(i + 1);
    if (py > 0) stack.push(i - w);
    if (py < h - 1) stack.push(i + w);
  }
  return true;
}

export function flipH(pixels, w = TILE, h = TILE) {
  const out = new Uint8Array(pixels.length);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) out[y * w + x] = pixels[y * w + (w - 1 - x)];
  return out;
}

export function flipV(pixels, w = TILE, h = TILE) {
  const out = new Uint8Array(pixels.length);
  for (let y = 0; y < h; y++) out.set(pixels.subarray((h - 1 - y) * w, (h - y) * w), y * w);
  return out;
}
