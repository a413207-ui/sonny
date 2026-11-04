// 角色動作（純邏輯，不碰 DOM）：資料格式、補齊預設值、缺圖退回規則、目前該播第幾格。
// 動作：walk 走路（固定 3 格，移動時 1-2-1-3 循環）、attack 攻擊、cast 施放計策、defeat 戰敗倒下。
// 角色資料：c.anims[動作] = { count, ms, frames: { down: [素材id|null…], up, left, right } }
//          c.flipRight = true 時「右」一律用「左」的圖左右翻轉。c.sprites 是舊版（v1）靜止圖，保留當退回用。
import { ANIM_ACTIONS, ANIM_DIRS, ANIM_FRAME_MIN, ANIM_FRAME_MAX, ANIM_MS_MIN, ANIM_MS_MAX } from './config.js';

export const WALK_SEQUENCE = [0, 1, 0, 2]; // 走路循環：第 1-2-1-3 格
const ACTION_IDS = ANIM_ACTIONS.map((a) => a.id);
export const actionDef = (id) => ANIM_ACTIONS.find((a) => a.id === id) || ANIM_ACTIONS[0];

export function emptyFrames(n) {
  const f = {};
  for (const d of ANIM_DIRS) f[d] = new Array(n).fill(null);
  return f;
}
export function defaultAnims() {
  const out = {};
  for (const a of ANIM_ACTIONS) out[a.id] = { count: a.count, ms: a.ms, frames: emptyFrames(a.count) };
  return out;
}

// 補齊 / 修正一個角色的 anims（就地修改並回傳）。未知動作與欄位保留。
export function normalizeAnims(anims) {
  const isObj = (o) => o && typeof o === 'object' && !Array.isArray(o);
  const out = isObj(anims) ? anims : {};
  for (const a of ANIM_ACTIONS) {
    const cur = isObj(out[a.id]) ? out[a.id] : {};
    let count = Math.round(Number(cur.count));
    if (a.fixedCount) count = a.count;
    else if (!Number.isFinite(count)) count = a.count;
    count = Math.min(ANIM_FRAME_MAX, Math.max(ANIM_FRAME_MIN, count));
    let ms = Math.round(Number(cur.ms));
    if (!Number.isFinite(ms)) ms = a.ms;
    ms = Math.min(ANIM_MS_MAX, Math.max(ANIM_MS_MIN, ms));
    const frames = isObj(cur.frames) ? cur.frames : {};
    for (const d of ANIM_DIRS) {
      const src = Array.isArray(frames[d]) ? frames[d] : [];
      const list = [];
      for (let k = 0; k < count; k++) list.push(typeof src[k] === 'string' && src[k] ? src[k] : null);
      frames[d] = list;
    }
    cur.count = count; cur.ms = ms; cur.frames = frames;
    out[a.id] = cur;
  }
  return out;
}

// v1 → v2：舊的 4 方向靜止圖當作走路第 1 格；c.sprites 原樣保留（退回用）
export function animsFromV1(sprites) {
  const a = defaultAnims();
  for (const d of ANIM_DIRS) a.walk.frames[d][0] = typeof sprites?.[d] === 'string' && sprites[d] ? sprites[d] : null;
  return a;
}

// 找出某動作 / 方向 / 第 k 格要畫哪張圖。回傳 { id, flip } 或 null（完全沒圖）。
// 退回順序：該動作該格 → 該方向走路第 1 格 → 舊靜止圖 → 其他方向（下、左、上、右）
// has(id) 用來判斷素材是否存在（被刪掉的素材視為沒畫）。
export function resolveFrame(c, action, dir, k, has = () => true) {
  if (!c) return null;
  const A = c.anims || {};
  const S = c.sprites || {};
  const ok = (id) => typeof id === 'string' && id !== '' && has(id);
  const flipR = !!c.flipRight;
  const fromList = (get, d) => {
    if (d === 'right') {
      if (!flipR) { const id = get('right'); if (ok(id)) return { id, flip: false }; }
      const id = get('left');
      return ok(id) ? { id, flip: true } : null;
    }
    const id = get(d);
    return ok(id) ? { id, flip: false } : null;
  };
  const frameOf = (act, i) => (d) => A[act]?.frames?.[d]?.[i];
  return fromList(frameOf(action, k), dir)
    || fromList(frameOf('walk', 0), dir)
    || fromList((d) => S[d], dir)
    || [dir, 'down', 'left', 'up', 'right'].reduce((r, d) => r
      || (ok(A.walk?.frames?.[d]?.[0]) ? { id: A.walk.frames[d][0], flip: false } : null)
      || (ok(S[d]) ? { id: S[d], flip: false } : null), null);
}

export function actionTiming(c, action) {
  const def = actionDef(action);
  const a = c?.anims?.[action];
  const count = def.fixedCount ? def.count : Math.min(ANIM_FRAME_MAX, Math.max(ANIM_FRAME_MIN, Math.round(Number(a?.count)) || def.count));
  const ms = Math.min(ANIM_MS_MAX, Math.max(ANIM_MS_MIN, Math.round(Number(a?.ms)) || def.ms));
  return { count, ms, total: action === 'walk' ? WALK_SEQUENCE.length * ms : count * ms };
}

// 播放到 elapsed 毫秒時是第幾格。走路循環；攻擊 / 計策播完回傳 -1（= 回到走路第 1 格）；倒下停在最後一格。
export function frameAt(action, elapsed, count, ms) {
  const i = Math.max(0, Math.floor(elapsed / Math.max(1, ms)));
  if (action === 'walk') return WALK_SEQUENCE[i % WALK_SEQUENCE.length];
  if (action === 'defeat') return Math.min(i, count - 1);
  return i < count ? i : -1;
}

// 依位移判斷朝向（dx, dy 為目標減自己）
export function dirToward(dx, dy) {
  if (dx === 0 && dy === 0) return null;
  return Math.abs(dx) >= Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
}
export const isAction = (id) => ACTION_IDS.includes(id);
