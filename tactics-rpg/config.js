// 全域設定與預設值（所有可調的數字都放這裡）
export const TILE = 48; // 素材 / 圖塊尺寸（固定 48×48）
export const MAP_MIN = 4;
export const MAP_MAX = 60; // 地圖寬高上限（Sonny 2026-11-04 決定）
export const DEFAULT_MAP_SIZE = [16, 12];
export const FORMULA_MAX_LEN = 300;
export const UNDO_LIMIT = 100; // 像素 / 地圖編輯復原步數
export const AUTOSAVE_MS = 2000;
export const MAX_PALETTE = 64; // 調色盤上限（含透明）
export const STORAGE_PREFIX = 'tacticsRpg.';
export const PROJECT_FORMAT = 'tactics-rpg-project';
export const PROJECT_VERSION = 1;

export const GRADES = ['X', 'S', 'A', 'B', 'C', 'D'];
// 預設值，可在「相剋表」分頁修改
export const DEFAULT_GRADE_MULT = { X: 2.0, S: 1.5, A: 1.2, B: 1.0, C: 0.8, D: 0.5 };
// 預設佔位公式，請 Sonny 自行修改
export const DEFAULT_DAMAGE_FORMULA = 'max(1, floor((atk.武力 * 1.5 - def.統帥) * matchup * (1 - terrainDef)))';
export const DEFAULT_HIT_FORMULA = 'clamp(90 - terrainEva * 100, 5, 100)';

export const SPRITE_CATEGORIES = [
  { id: 'tile', name: '地形圖塊' },
  { id: 'object', name: '地圖物件' },
  { id: 'unit', name: '角色圖' },
  { id: 'portrait', name: '頭像' },
  { id: 'item', name: '道具' },
  { id: 'treasure', name: '寶物' },
];

export const FACTIONS = [
  { id: 'ally', name: '我方' },
  { id: 'enemy', name: '敵方' },
  { id: 'guest', name: '友軍' },
];

export const STAT_KEYS = ['武力', '統帥', '智力', '血量'];

// 試玩畫面
export const BATTLE_ZOOMS = [0.5, 0.75, 1, 1.5, 2];
export const MOVE_STEP_MS = 90; // 每走一格的動畫時間
export const AI_PAUSE_MS = 250;
