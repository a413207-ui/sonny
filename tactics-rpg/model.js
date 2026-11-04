// 專案資料模型：建立、驗證（含版本遷移）、查找與引用檢查。不碰 DOM。
import {
  PROJECT_FORMAT, PROJECT_VERSION, TILE, DEFAULT_MAP_SIZE, MAP_MIN, MAP_MAX, GRADES,
  DEFAULT_GRADE_MULT, DEFAULT_DAMAGE_FORMULA, DEFAULT_HIT_FORMULA, MAX_PALETTE, SPRITE_CATEGORIES, FACTIONS, STAT_KEYS, ANIM_ACTIONS,
} from './config.js';
import { DEFAULT_COLORS, decodePixels, isValidColor } from './pixels.js';
import { checkFormula } from './formula.js';
import { normalizeAnims, animsFromV1 } from './anim.js';

let idCounter = 0;
export function genId(prefix) {
  idCounter = (idCounter + 1) % 1296;
  return `${prefix}_${Date.now().toString(36)}${idCounter.toString(36).padStart(2, '0')}${Math.floor(Math.random() * 1296).toString(36)}`;
}

export const BUILTIN_TERRAINS = [
  { id: 'ter_plain', name: '平地', color: '#9ccf6a', moveCost: 1, defBonus: 0, evaBonus: 0, healPerTurn: 0, impassable: false },
  { id: 'ter_forest', name: '森林', color: '#3e7a2a', moveCost: 2, defBonus: 0.2, evaBonus: 0.2, healPerTurn: 0, impassable: false },
  { id: 'ter_mountain', name: '山', color: '#8a6a4a', moveCost: 3, defBonus: 0.3, evaBonus: 0.3, healPerTurn: 0, impassable: false },
  { id: 'ter_river', name: '河', color: '#4a9ae8', moveCost: 4, defBonus: 0, evaBonus: 0, healPerTurn: 0, impassable: false },
  { id: 'ter_fort', name: '城寨', color: '#c08a10', moveCost: 1, defBonus: 0.25, evaBonus: 0.1, healPerTurn: 5, impassable: false },
  { id: 'ter_wall', name: '牆', color: '#3a3a4a', moveCost: 1, defBonus: 0, evaBonus: 0, healPerTurn: 0, impassable: true },
];

export function defaultSettings() {
  return {
    tileSize: TILE,
    defaultMapSize: [...DEFAULT_MAP_SIZE],
    gradeMultipliers: { ...DEFAULT_GRADE_MULT },
    damageFormula: DEFAULT_DAMAGE_FORMULA,
    hitFormula: DEFAULT_HIT_FORMULA,
    stratagemFormula: null,
    counterAttack: true,
    rngSeed: 12345,
  };
}

export function createEmptyProject(name = '新專案') {
  const now = new Date().toISOString();
  return {
    format: PROJECT_FORMAT,
    version: PROJECT_VERSION,
    meta: { id: genId('prj'), name, description: '', created: now, updated: now },
    settings: defaultSettings(),
    palettes: [{ id: 'pal_default', colors: [...DEFAULT_COLORS] }],
    sprites: [],
    terrains: BUILTIN_TERRAINS.map((t) => ({ ...t })),
    unitTypes: [],
    matchups: {},
    characters: [],
    maps: [],
    stages: [],
    items: [],
    skills: [],
    cutscenes: [],
    flow: { start: null, nodes: [] },
  };
}

export function createMap(project, name, w, h) {
  const n = w * h;
  const tile = project.sprites.find((s) => s.category === 'tile');
  return { id: genId('map'), name, w, h, ground: new Array(n).fill(tile ? tile.id : null), objects: new Array(n).fill(null), terrain: new Array(n).fill(null) };
}

export function resizeMap(map, w, h) {
  const n = w * h;
  const ground = new Array(n).fill(null), objects = new Array(n).fill(null), terrain = new Array(n).fill(null);
  const fill = map.ground[0] ?? null;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (x < map.w && y < map.h) {
        const j = y * map.w + x;
        ground[i] = map.ground[j];
        objects[i] = map.objects[j];
        terrain[i] = map.terrain[j];
      } else ground[i] = fill;
    }
  }
  Object.assign(map, { w, h, ground, objects, terrain });
}

// ---- 查找 ----
export const byId = (list, id) => (id ? list.find((x) => x.id === id) || null : null);
export const paletteOf = (project, sprite) => byId(project.palettes, sprite?.palette) || project.palettes[0];

// 某格的地形：個別覆寫 > 物件預設地形 > 地面圖塊預設地形 > 第一種地形
export function terrainIdAt(project, map, x, y) {
  const i = y * map.w + x;
  if (map.terrain[i]) return map.terrain[i];
  const obj = byId(project.sprites, map.objects[i]);
  if (obj?.defaultTerrain) return obj.defaultTerrain;
  const g = byId(project.sprites, map.ground[i]);
  if (g?.defaultTerrain) return g.defaultTerrain;
  return project.terrains[0]?.id || null;
}
export const terrainAt = (project, map, x, y) => byId(project.terrains, terrainIdAt(project, map, x, y)) || FALLBACK_TERRAIN;
export const FALLBACK_TERRAIN = { id: '', name: '（無）', color: '#888888', moveCost: 1, defBonus: 0, evaBonus: 0, healPerTurn: 0, impassable: false };

export function gradeOf(project, atkType, defType) {
  const g = project.matchups?.[atkType]?.[defType];
  return GRADES.includes(g) ? g : 'B'; // 空白視為 B
}
export function gradeMult(project, grade) {
  const v = Number(project.settings.gradeMultipliers?.[grade]);
  return Number.isFinite(v) ? v : DEFAULT_GRADE_MULT[grade] ?? 1;
}

// ---- 引用檢查（刪除前警告用）----
export function findReferences(project, kind, id) {
  const refs = [];
  const nameOf = (x) => `「${x.name}」`;
  if (kind === 'sprite') {
    for (const c of project.characters) {
      for (const d of ['down', 'up', 'left', 'right']) if (c.sprites?.[d] === id) refs.push(`角色${nameOf(c)}的${dirName(d)}靜止圖`);
      for (const [act, a] of Object.entries(c.anims || {})) {
        let n = 0;
        for (const list of Object.values(a?.frames || {})) if (Array.isArray(list)) n += list.filter((x) => x === id).length;
        if (n) refs.push(`角色${nameOf(c)}的${actionName(act)}動作 ${n} 格`);
      }
      if (c.portrait === id) refs.push(`角色${nameOf(c)}的頭像`);
    }
    for (const m of project.maps) {
      const g = m.ground.filter((s) => s === id).length;
      const o = m.objects.filter((s) => s === id).length;
      if (g) refs.push(`地圖${nameOf(m)}地面層 ${g} 格`);
      if (o) refs.push(`地圖${nameOf(m)}物件層 ${o} 格`);
    }
  } else if (kind === 'terrain') {
    for (const s of project.sprites) if (s.defaultTerrain === id) refs.push(`素材${nameOf(s)}的預設地形`);
    for (const m of project.maps) {
      const n = m.terrain.filter((t) => t === id).length;
      if (n) refs.push(`地圖${nameOf(m)}地形覆寫 ${n} 格`);
    }
    for (const u of project.unitTypes) if (u.terrainCost && id in u.terrainCost) refs.push(`兵種${nameOf(u)}的地形適性`);
  } else if (kind === 'unitType') {
    for (const c of project.characters) if (c.unitType === id) refs.push(`角色${nameOf(c)}`);
    for (const [a, row] of Object.entries(project.matchups)) if (a === id || (row && id in row)) { refs.push('相剋表'); break; }
  } else if (kind === 'character') {
    for (const s of project.stages) {
      if (s.allies.includes(id)) refs.push(`關卡${nameOf(s)}的我方`);
      const n = s.enemies.filter((e) => e.char === id).length;
      if (n) refs.push(`關卡${nameOf(s)}的敵方 ${n} 名`);
    }
  } else if (kind === 'map') {
    for (const s of project.stages) if (s.map === id) refs.push(`關卡${nameOf(s)}`);
  }
  return refs;
}
export const dirName = (d) => ({ down: '下', up: '上', left: '左', right: '右' })[d];
export const actionName = (a) => ANIM_ACTIONS.find((x) => x.id === a)?.name || a;

// 刪除素材時把角色的引用清掉（靜止圖、動作格；動作格保留位置改成空白）
export function removeSpriteFromCharacters(project, id) {
  for (const c of project.characters) {
    for (const d of ['down', 'up', 'left', 'right']) if (c.sprites?.[d] === id) c.sprites[d] = null;
    if (c.portrait === id) c.portrait = null;
    for (const a of Object.values(c.anims || {})) {
      for (const list of Object.values(a?.frames || {})) if (Array.isArray(list)) list.forEach((x, i) => { if (x === id) list[i] = null; });
    }
  }
}

// ---- 驗證與遷移 ----
// 回傳 { ok, errors, project }；ok 時 project 為補齊預設值後的新物件（未知欄位保留）
export function validateProject(input) {
  const errors = [];
  const err = (m) => { if (errors.length < 30) errors.push(m); };
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { ok: false, errors: ['檔案內容不是專案物件'] };
  if (input.format !== PROJECT_FORMAT) return { ok: false, errors: [`不是戰棋專案檔（format 應為 ${PROJECT_FORMAT}）`] };
  const ver = input.version;
  if (!Number.isInteger(ver) || ver < 1) return { ok: false, errors: ['版本號碼不正確'] };
  if (ver > PROJECT_VERSION) return { ok: false, errors: [`專案版本 ${ver} 比編輯器新（支援到 ${PROJECT_VERSION}），請更新編輯器`] };

  let p;
  try {
    p = JSON.parse(JSON.stringify(input));
  } catch {
    return { ok: false, errors: ['專案資料無法複製'] };
  }
  p = migrate(p);

  const isObj = (o) => o && typeof o === 'object' && !Array.isArray(o);
  const arr = (k) => {
    if (p[k] === undefined) p[k] = [];
    if (!Array.isArray(p[k])) { err(`${k} 應該是陣列`); p[k] = []; }
    return p[k];
  };
  if (!isObj(p.meta)) p.meta = {};
  if (typeof p.meta.name !== 'string' || !p.meta.name.trim()) p.meta.name = '未命名專案';
  if (typeof p.meta.id !== 'string') p.meta.id = genId('prj');
  if (typeof p.meta.description !== 'string') p.meta.description = '';
  p.settings = { ...defaultSettings(), ...(isObj(p.settings) ? p.settings : {}) };
  const s = p.settings;
  s.gradeMultipliers = { ...DEFAULT_GRADE_MULT, ...(isObj(s.gradeMultipliers) ? s.gradeMultipliers : {}) };
  for (const g of GRADES) if (!Number.isFinite(Number(s.gradeMultipliers[g]))) err(`相剋倍率 ${g} 不是數字`);
  for (const k of ['damageFormula', 'hitFormula']) {
    const e = checkFormula(s[k]);
    if (e) err(`${k === 'damageFormula' ? '傷害' : '命中率'}公式錯誤：${e}`);
  }
  if (!Array.isArray(s.defaultMapSize) || s.defaultMapSize.length !== 2) s.defaultMapSize = [...DEFAULT_MAP_SIZE];

  const ids = new Set();
  const uniq = (kind, o, i) => {
    if (!isObj(o)) { err(`${kind} 第 ${i + 1} 筆不是物件`); return false; }
    if (typeof o.id !== 'string' || !o.id) { err(`${kind} 第 ${i + 1} 筆缺少 id`); return false; }
    if (ids.has(o.id)) { err(`重複的 id：${o.id}`); return false; }
    ids.add(o.id);
    if (typeof o.name !== 'string') o.name = o.id;
    return true;
  };

  arr('palettes').forEach((pal, i) => {
    if (!isObj(pal) || typeof pal.id !== 'string') return err(`調色盤第 ${i + 1} 筆格式錯誤`);
    if (!Array.isArray(pal.colors) || pal.colors.length < 1 || pal.colors.length > MAX_PALETTE || !pal.colors.every(isValidColor)) err(`調色盤 ${pal.id} 的顏色格式錯誤`);
  });
  if (!p.palettes.length) p.palettes.push({ id: 'pal_default', colors: [...DEFAULT_COLORS] });
  const catIds = SPRITE_CATEGORIES.map((c) => c.id);
  arr('sprites').forEach((sp, i) => {
    if (!uniq('素材', sp, i)) return;
    if (!catIds.includes(sp.category)) err(`素材「${sp.name}」分類不正確`);
    if (!decodePixels(sp.pixels)) err(`素材「${sp.name}」像素資料損毀`);
    if (sp.palette && !p.palettes.some((x) => x.id === sp.palette)) err(`素材「${sp.name}」引用不存在的調色盤`);
  });
  arr('terrains').forEach((t, i) => {
    if (!uniq('地形', t, i)) return;
    for (const k of ['moveCost', 'defBonus', 'evaBonus', 'healPerTurn']) {
      t[k] = Number(t[k] ?? 0);
      if (!Number.isFinite(t[k])) err(`地形「${t.name}」的 ${k} 不是數字`);
    }
    t.impassable = !!t.impassable;
    if (!isValidColor(t.color)) t.color = '#888888';
  });
  arr('unitTypes').forEach((u, i) => {
    if (!uniq('兵種', u, i)) return;
    u.move = Number(u.move);
    if (!Number.isFinite(u.move) || u.move < 0) err(`兵種「${u.name}」移動力不正確`);
    if (!Array.isArray(u.range) || u.range.length !== 2 || !u.range.every(Number.isFinite) || u.range[0] > u.range[1]) err(`兵種「${u.name}」射程不正確`);
    if (!isObj(u.terrainCost)) u.terrainCost = {};
    if (!isObj(u.growth)) u.growth = {};
  });
  if (!isObj(p.matchups)) { err('相剋表格式錯誤'); p.matchups = {}; }
  const factionIds = FACTIONS.map((f) => f.id);
  arr('characters').forEach((c, i) => {
    if (!uniq('角色', c, i)) return;
    if (!isObj(c.stats)) c.stats = {};
    for (const k of STAT_KEYS) {
      c.stats[k] = Number(c.stats[k] ?? 0);
      if (!Number.isFinite(c.stats[k])) err(`角色「${c.name}」的${k}不是數字`);
    }
    if (!isObj(c.sprites)) c.sprites = { down: null, up: null, left: null, right: null };
    c.anims = normalizeAnims(c.anims);
    if (!factionIds.includes(c.faction)) c.faction = 'ally';
    c.level = Number.isFinite(Number(c.level)) ? Number(c.level) : 1;
    c.mp = Number.isFinite(Number(c.mp)) ? Number(c.mp) : 0;
    c.isLeader = !!c.isLeader;
    c.flipRight = !!c.flipRight;
  });
  arr('maps').forEach((m, i) => {
    if (!uniq('地圖', m, i)) return;
    if (!Number.isInteger(m.w) || !Number.isInteger(m.h) || m.w < MAP_MIN || m.h < MAP_MIN || m.w > MAP_MAX || m.h > MAP_MAX) return err(`地圖「${m.name}」大小不正確（${MAP_MIN}～${MAP_MAX}）`);
    const n = m.w * m.h;
    for (const k of ['ground', 'objects', 'terrain']) {
      if (m[k] === undefined) m[k] = new Array(n).fill(null);
      if (!Array.isArray(m[k]) || m[k].length !== n) err(`地圖「${m.name}」的 ${k} 長度不對`);
    }
  });
  arr('stages').forEach((st, i) => {
    if (!uniq('關卡', st, i)) return;
    if (!isObj(st.deploy)) st.deploy = { max: 4, points: [] };
    if (!Array.isArray(st.deploy.points)) st.deploy.points = [];
    if (!Array.isArray(st.allies)) st.allies = [];
    if (!Array.isArray(st.enemies)) st.enemies = [];
    if (!Array.isArray(st.guests)) st.guests = [];
    if (!Array.isArray(st.reinforcements)) st.reinforcements = [];
    if (!isObj(st.win)) st.win = { type: 'rout' };
    if (!isObj(st.lose)) st.lose = { type: 'allDefeated', leaderDeath: true };
  });
  for (const k of ['items', 'skills', 'cutscenes']) arr(k);
  if (!isObj(p.flow)) p.flow = { start: null, nodes: [] };

  return errors.length ? { ok: false, errors } : { ok: true, errors: [], project: p };
}

// 版本遷移：逐版升級（只改複本，不動原始資料）
export function migrate(p) {
  if (p.version === 1) {
    // v1 → v2：角色多了動作（anims）。舊的 4 方向靜止圖放進走路第 1 格，c.sprites 保留當退回用。
    for (const c of Array.isArray(p.characters) ? p.characters : []) {
      if (c && typeof c === 'object' && !Array.isArray(c) && !c.anims) c.anims = animsFromV1(c.sprites);
    }
    p.version = 2;
  }
  return p;
}
