// 內建範例專案：所有圖都是程式畫的原創像素圖（調色盤索引），一開就能試玩。
import { TILE } from './config.js';
import { encodePixels } from './pixels.js';
import { createEmptyProject } from './model.js';
import { defaultAnims } from './anim.js';

// 調色盤索引（對應 DEFAULT_COLORS）
const C = {
  K: 1, DG: 2, G: 3, LG: 4, W: 5, WW: 6, DB: 7, BR: 8, TAN: 9, SK: 10, LSK: 11,
  DGR: 12, GR: 13, LGR: 14, PGR: 15, NV: 16, BL: 17, LBL: 18, PBL: 19,
  DR: 20, R: 21, LR: 22, PK: 23, DGO: 24, GO: 25, PY: 26, DP: 27, P: 28, LP: 29, TE: 30, AQ: 31,
};

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
const canvas = () => new Uint8Array(TILE * TILE);
function rect(px, x, y, w, h, c) {
  for (let j = Math.max(0, y); j < Math.min(TILE, y + h); j++) for (let i = Math.max(0, x); i < Math.min(TILE, x + w); i++) px[j * TILE + i] = c;
}
function disc(px, cx, cy, r, c) {
  for (let j = Math.floor(cy - r); j <= cy + r; j++) for (let i = Math.floor(cx - r); i <= cx + r; i++) {
    if (i < 0 || j < 0 || i >= TILE || j >= TILE) continue;
    if ((i - cx) ** 2 + (j - cy) ** 2 <= r * r) px[j * TILE + i] = c;
  }
}
const dot = (px, x, y, c) => { if (x >= 0 && y >= 0 && x < TILE && y < TILE) px[y * TILE + x] = c; };
function line(px, x0, y0, x1, y1, c) {
  const n = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0), 1);
  for (let k = 0; k <= n; k++) dot(px, Math.round(x0 + ((x1 - x0) * k) / n), Math.round(y0 + ((y1 - y0) * k) / n), c);
}
function speckle(px, seed, base, spots) {
  const r = rng(seed);
  px.fill(base);
  for (const [c, n] of spots) for (let k = 0; k < n; k++) dot(px, (r() * TILE) | 0, (r() * TILE) | 0, c);
}

// ---- 地形圖塊 ----
function grass(seed = 1) {
  const px = canvas();
  speckle(px, seed, C.LGR, [[C.GR, 60], [C.PGR, 30]]);
  return px;
}
function road() {
  const px = canvas();
  speckle(px, 7, C.TAN, [[C.SK, 70], [C.BR, 25]]);
  return px;
}
function tree(px, cx, cy) {
  rect(px, cx - 2, cy + 4, 4, 9, C.DB);
  disc(px, cx, cy, 9, C.DGR);
  disc(px, cx - 2, cy - 2, 6, C.GR);
  dot(px, cx - 4, cy - 4, C.LGR); dot(px, cx - 3, cy - 5, C.LGR);
}
function forest() {
  const px = grass(3);
  tree(px, 14, 15); tree(px, 34, 22); tree(px, 16, 34);
  return px;
}
function mountain() {
  const px = grass(5);
  for (let y = 6; y < 44; y++) {
    const half = Math.round(((y - 6) / 38) * 22);
    for (let x = 24 - half; x <= 24 + half; x++) dot(px, x, y, x < 24 ? C.BR : C.DB);
  }
  for (let y = 6; y < 16; y++) {
    const half = Math.round(((y - 6) / 38) * 22);
    for (let x = 24 - half; x <= 24 + half; x++) dot(px, x, y, C.W);
  }
  return px;
}
function river() {
  const px = canvas();
  speckle(px, 9, C.BL, [[C.LBL, 20]]);
  for (let y = 6; y < TILE; y += 12) for (let x = 0; x < TILE; x++) {
    const yy = y + Math.round(Math.sin((x / TILE) * Math.PI * 4) * 2);
    dot(px, x, yy, C.LBL);
    if (x % 6 < 2) dot(px, x, yy - 1, C.PBL);
  }
  return px;
}
function fort() {
  const px = road();
  rect(px, 4, 10, 40, 34, C.G);
  rect(px, 4, 10, 40, 3, C.LG);
  for (let x = 4; x < 44; x += 8) rect(px, x, 6, 5, 5, C.G);
  rect(px, 18, 26, 12, 18, C.K);
  rect(px, 22, 0, 2, 12, C.DB);
  rect(px, 24, 1, 10, 6, C.R);
  return px;
}
function wall() {
  const px = canvas();
  px.fill(C.G);
  for (let y = 0; y < TILE; y += 8) {
    rect(px, 0, y, TILE, 1, C.DG);
    const off = (y / 8) % 2 ? 6 : 0;
    for (let x = off; x < TILE; x += 12) rect(px, x, y, 1, 8, C.DG);
    rect(px, 0, y + 1, TILE, 1, C.LG);
  }
  return px;
}
// ---- 地圖物件 ----
function house() {
  const px = canvas();
  rect(px, 8, 22, 32, 20, C.SK);
  for (let y = 6; y < 24; y++) {
    const half = Math.round(((y - 6) / 18) * 20);
    for (let x = 24 - half; x <= 24 + half; x++) dot(px, x, y, y % 4 === 0 ? C.DR : C.R);
  }
  rect(px, 20, 30, 8, 12, C.DB);
  rect(px, 11, 27, 6, 6, C.LBL);
  rect(px, 31, 27, 6, 6, C.LBL);
  return px;
}

// ---- 角色圖（4 方向：down / up / left；right 用左翻轉）----
const TEAM = {
  ally: { body: C.BL, dark: C.NV, hat: C.DB },
  enemy: { body: C.R, dark: C.DR, hat: C.K },
};
// pose：step 走路（0 站立、1 左腳、2 右腳）、atk 攻擊（1 舉起、2 出手、3 收回）、cast 施放計策（1～3）
function figure(kind, team, dir, pose = {}) {
  const step = pose.step || 0, atk = pose.atk || 0, cast = pose.cast || 0;
  const px = canvas();
  const t = TEAM[team];
  const mounted = kind === 'cav';
  const oy = mounted ? -6 : 0; // 騎兵人物往上
  // 馬
  if (mounted) {
    if (dir === 'left') {
      rect(px, 10, 28, 28, 10, C.BR);
      rect(px, 4, 22, 9, 8, C.BR);
      dot(px, 6, 24, C.K);
      rect(px, 34, 26, 6, 3, C.DB);
      const legs = [[11, 16, 30, 35], [8, 18, 27, 37], [13, 14, 32, 33]][step];
      for (const x of legs) rect(px, x, 37, 3, 8, C.DB);
    } else {
      rect(px, 17, 26, 14, 14, C.BR);
      [18, 28].forEach((x, i) => rect(px, x, 39 - (step === i + 1 ? 2 : 0), 3, 6, C.DB));
      if (dir === 'down') { rect(px, 20, 34, 8, 11, C.BR); dot(px, 21, 37, C.K); dot(px, 26, 37, C.K); rect(px, 22, 43, 4, 2, C.DB); }
      else rect(px, 22, 38, 4, 7, C.DB);
    }
  }
  // 腿
  if (!mounted) {
    if (dir === 'left' && step) {
      // 側面跨步：前腳往左、後腳往右（後腳顏色深一點）
      const [front, back] = step === 1 ? [14, 29] : [29, 14];
      rect(px, back, 37, 5, 8, C.K); rect(px, back - 1, 44, 6, 2, C.K);
      rect(px, front, 37, 5, 8, t.dark); rect(px, front - 1, 44, 6, 2, C.K);
    } else {
      // 正面 / 背面：抬起一隻腳（短 2 格）
      const lift = (i) => (step === i + 1 ? 2 : 0);
      rect(px, 18, 37, 5, 8 - lift(0), t.dark);
      rect(px, 25, 37, 5, 8 - lift(1), t.dark);
      rect(px, 17, 44 - lift(0), 6, 2, C.K);
      rect(px, 25, 44 - lift(1), 6, 2, C.K);
    }
  }
  // 身體
  rect(px, 16, 22 + oy, 16, 16, t.body);
  rect(px, 16, 34 + oy, 16, 2, C.DB); // 腰帶
  if (cast) {
    // 施放計策：雙手舉高
    const up = cast === 1 ? 6 : 11;
    rect(px, 12, 23 + oy - up, 4, 11, t.body);
    rect(px, 32, 23 + oy - up, 4, 11, t.body);
    rect(px, 12, 21 + oy - up, 4, 3, C.SK);
    rect(px, 32, 21 + oy - up, 4, 3, C.SK);
  } else {
    rect(px, 12, 23 + oy, 4, 11, t.body); // 手臂
    rect(px, 32, 23 + oy, 4, 11, t.body);
    rect(px, 12, 33 + oy, 4, 3, C.SK);
    rect(px, 32, 33 + oy, 4, 3, C.SK);
  }
  // 頭
  disc(px, 23.5, 13 + oy, 8, C.SK);
  if (dir === 'up') disc(px, 23.5, 13 + oy, 8, t.hat);
  else {
    // 頭盔 / 頭巾
    for (let y = 4 + oy; y < 10 + oy; y++) for (let x = 15; x < 33; x++) if ((x - 23.5) ** 2 + (y - 13 - oy) ** 2 <= 64) dot(px, x, y, t.hat);
    if (dir === 'down') {
      rect(px, 20, 13 + oy, 2, 3, C.K);
      rect(px, 26, 13 + oy, 2, 3, C.K);
      rect(px, 22, 18 + oy, 4, 1, C.DR);
    } else {
      // 左側面：後腦勺是頭髮、眼睛在左
      for (let y = 4 + oy; y < 22 + oy; y++) for (let x = 25; x < 33; x++) if ((x - 23.5) ** 2 + (y - 13 - oy) ** 2 <= 64) dot(px, x, y, t.hat);
      rect(px, 18, 13 + oy, 2, 3, C.K);
    }
  }
  // 武器（攻擊時：1 舉起、2 往面向方向出手、3 收回一半）
  const fwd = { left: [-1, 0], down: [0, 1], up: [0, -1] }[dir];
  const [ax, ay] = atk === 1 ? [0, -6] : atk === 2 ? [fwd[0] * 6, fwd[1] * 6 + (dir === 'left' ? 2 : 0)] : atk === 3 ? [fwd[0] * 3, fwd[1] * 3] : [0, 0];
  if (kind === 'inf') {
    const x = (dir === 'left' ? 10 : 37) + ax, y0 = 14 + oy + ay;
    rect(px, x, y0, 2, 20, C.LG);
    rect(px, x - 2, y0 + 18, 6, 2, C.GO);
    rect(px, x, y0 + 20, 2, 4, C.DB);
    if (atk) rect(px, x - 1, y0 + 20, 4, 3, C.SK); // 握劍的手
    if (atk === 2) for (let k = 0; k < 3; k++) dot(px, x + (dir === 'left' ? -2 - k : 3 + k), y0 + 2 + k * 5, C.W); // 揮劍光
  } else if (kind === 'cav') {
    const x = (dir === 'left' ? 9 : 37) + ax;
    line(px, x, 8 + oy + ay, x, 40 + ay, C.BR);
    rect(px, x - 1, 7 + oy + ay, 3, 5, C.WW);
    if (atk) rect(px, x - 1, 28 + oy + ay, 3, 3, C.SK);
  } else {
    // 弓：1 拉弓、2 放箭（箭飛出去）、3 收弓
    const x = dir === 'left' ? 9 : 37;
    for (let y = 16; y <= 38; y++) {
      const bend = Math.round(Math.sin(((y - 16) / 22) * Math.PI) * 4);
      dot(px, dir === 'left' ? x - bend : x + bend, y + oy, C.BR);
    }
    const pull = atk === 1 ? (dir === 'left' ? 5 : -5) : 0;
    line(px, x, 16 + oy, x + pull, 27 + oy, C.W);
    line(px, x + pull, 27 + oy, x, 38 + oy, C.W);
    if (atk === 1) line(px, x + pull, 27 + oy, x + pull + (dir === 'left' ? -9 : 9), 27 + oy, C.LG);
    if (atk === 2) {
      if (dir === 'left') line(px, 0, 27 + oy, 6, 27 + oy, C.LG);
      else if (dir === 'down') line(px, x, 38, x, 47, C.LG);
      else line(px, x, 0, x, 10, C.LG);
    }
    if (dir !== 'up') rect(px, 30, 20 + oy, 3, 12, C.DB); // 箭袋
  }
  // 計策的光點
  if (cast >= 2) {
    const r = rng(cast * 13);
    for (let k = 0; k < (cast === 2 ? 6 : 14); k++) {
      const a = r() * Math.PI * 2, d = 6 + r() * (cast === 2 ? 6 : 12);
      dot(px, Math.round(24 + Math.cos(a) * d), Math.round(6 + oy + Math.sin(a) * d * 0.5), k % 2 ? C.PY : C.LP);
    }
  }
  return px;
}

// 戰敗倒下：1 跪下（往下沉）、2 倒在地上（轉 90°）
function shifted(src, dx, dy) {
  const px = canvas();
  for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) {
    const sx = x - dx, sy = y - dy;
    if (sx >= 0 && sy >= 0 && sx < TILE && sy < TILE) px[y * TILE + x] = src[sy * TILE + sx];
  }
  return px;
}
function knocked(kind, team, k) {
  const stand = figure(kind, team, 'down');
  if (k === 1) {
    const px = shifted(stand, 0, 6);
    for (let i = 46 * TILE; i < TILE * TILE; i++) px[i] = 0;
    return px;
  }
  const rot = canvas();
  for (let y = 0; y < TILE; y++) for (let x = 0; x < TILE; x++) rot[x * TILE + (TILE - 1 - y)] = stand[y * TILE + x];
  return shifted(rot, 0, 10);
}

function portrait(team, boss) {
  const px = canvas();
  const t = TEAM[team];
  px.fill(boss ? C.DGO : C.PBL);
  rect(px, 6, 34, 36, 14, t.body);
  disc(px, 24, 22, 14, C.SK);
  for (let y = 6; y < 18; y++) for (let x = 8; x < 41; x++) if ((x - 24) ** 2 + (y - 22) ** 2 <= 196) dot(px, x, y, t.hat);
  rect(px, 17, 21, 4, 4, C.K);
  rect(px, 28, 21, 4, 4, C.K);
  if (boss) { rect(px, 15, 18, 7, 2, C.K); rect(px, 27, 18, 7, 2, C.K); rect(px, 18, 31, 13, 3, C.DB); }
  else rect(px, 21, 30, 7, 2, C.DR);
  return px;
}

// 範例角色的動作：4 方向走路 3 格 + 攻擊 3 格 + 倒下 2 格（右 = 左翻轉，所以右邊留空）
function sampleAnims(team, kind, withCast) {
  const a = defaultAnims();
  const id = (dir, suf) => `spr_${team}_${kind}_${dir}${suf}`;
  for (const dir of ['down', 'up', 'left']) {
    a.walk.frames[dir] = [id(dir, ''), id(dir, '_w2'), id(dir, '_w3')];
    a.attack.frames[dir] = [id(dir, '_a1'), id(dir, '_a2'), id(dir, '_a3')];
    a.defeat.frames[dir] = [`spr_${team}_${kind}_ko1`, `spr_${team}_${kind}_ko2`];
    if (withCast) a.cast.frames[dir] = [1, 2, 3].map((k) => `spr_ally_inf_${dir}_c${k}`);
  }
  return a;
}

export function createSampleProject() {
  const p = createEmptyProject('範例：山賊討伐');
  p.meta.description = '內建範例專案。3 名我方對 4 名山賊，打倒全部敵人就勝利。';
  const pal = 'pal_default';
  const sp = (id, name, category, px, defaultTerrain = null) => {
    p.sprites.push({ id, name, category, palette: pal, pixels: encodePixels(px), defaultTerrain });
    return id;
  };
  sp('spr_grass', '草地', 'tile', grass(1), 'ter_plain');
  sp('spr_road', '道路', 'tile', road(), 'ter_plain');
  sp('spr_forest', '森林', 'tile', forest(), 'ter_forest');
  sp('spr_mountain', '山', 'tile', mountain(), 'ter_mountain');
  sp('spr_river', '河', 'tile', river(), 'ter_river');
  sp('spr_fort', '城寨', 'tile', fort(), 'ter_fort');
  sp('spr_wall', '石牆', 'tile', wall(), 'ter_wall');
  sp('spr_house', '民房', 'object', house(), null);
  const kinds = { inf: '步兵', cav: '騎兵', arc: '弓兵' };
  const teams = { ally: '我方', enemy: '敵方' };
  const DIR3 = { down: '下', up: '上', left: '左' };
  for (const team of Object.keys(teams)) for (const kind of Object.keys(kinds)) {
    const base = `${teams[team]}${kinds[kind]}`;
    for (const dir of Object.keys(DIR3)) {
      sp(`spr_${team}_${kind}_${dir}`, `${base}-${DIR3[dir]}`, 'unit', figure(kind, team, dir));
      for (const k of [2, 3]) sp(`spr_${team}_${kind}_${dir}_w${k}`, `${base}-走${DIR3[dir]}${k}`, 'unit', figure(kind, team, dir, { step: k - 1 }));
      for (const k of [1, 2, 3]) sp(`spr_${team}_${kind}_${dir}_a${k}`, `${base}-攻${DIR3[dir]}${k}`, 'unit', figure(kind, team, dir, { atk: k }));
    }
    for (const k of [1, 2]) sp(`spr_${team}_${kind}_ko${k}`, `${base}-倒下${k}`, 'unit', knocked(kind, team, k));
  }
  // 主角另外畫施放計策 3 格（計策系統下一版做，可在角色分頁預覽）
  for (const dir of Object.keys(DIR3)) for (const k of [1, 2, 3]) sp(`spr_ally_inf_${dir}_c${k}`, `我方步兵-計${DIR3[dir]}${k}`, 'unit', figure('inf', 'ally', dir, { cast: k }));
  sp('spr_pt_hero', '頭像-阿誠', 'portrait', portrait('ally', false));
  sp('spr_pt_boss', '頭像-山賊頭目', 'portrait', portrait('enemy', true));

  p.unitTypes = [
    { id: 'ut_inf', name: '步兵', move: 4, range: [1, 1], terrainCost: {}, growth: { 武力: 0.5, 統帥: 0.5, 智力: 0.3, 血量: 0.7 } },
    { id: 'ut_cav', name: '騎兵', move: 6, range: [1, 1], terrainCost: { ter_forest: 3, ter_mountain: 5, ter_river: 6 }, growth: { 武力: 0.6, 統帥: 0.4, 智力: 0.2, 血量: 0.8 } },
    { id: 'ut_arc', name: '弓兵', move: 4, range: [2, 2], terrainCost: {}, growth: { 武力: 0.5, 統帥: 0.3, 智力: 0.4, 血量: 0.5 } },
  ];
  // 騎兵剋步兵、步兵剋弓兵、弓兵剋騎兵
  p.matchups = {
    ut_cav: { ut_inf: 'A', ut_arc: 'B' },
    ut_inf: { ut_arc: 'A', ut_cav: 'C' },
    ut_arc: { ut_cav: 'S', ut_inf: 'C' },
  };
  const chr = (id, name, faction, unitType, kind, stats, extra = {}) => {
    const team = faction === 'ally' ? 'ally' : 'enemy';
    p.characters.push({
      id, name, faction, unitType, level: extra.level || 1, isLeader: !!extra.isLeader, mp: 0, portrait: extra.portrait || null,
      sprites: { down: `spr_${team}_${kind}_down`, up: `spr_${team}_${kind}_up`, left: `spr_${team}_${kind}_left`, right: null },
      anims: sampleAnims(team, kind, !!extra.cast),
      flipRight: true,
      stats,
    });
  };
  chr('chr_hero', '阿誠', 'ally', 'ut_inf', 'inf', { 武力: 13, 統帥: 9, 智力: 7, 血量: 38 }, { isLeader: true, portrait: 'spr_pt_hero', level: 3, cast: true });
  chr('chr_tiger', '小虎', 'ally', 'ut_cav', 'cav', { 武力: 14, 統帥: 7, 智力: 4, 血量: 34 }, { level: 2 });
  chr('chr_bell', '小鈴', 'ally', 'ut_arc', 'arc', { 武力: 12, 統帥: 5, 智力: 9, 血量: 28 }, { level: 2 });
  chr('chr_bandit', '山賊', 'enemy', 'ut_inf', 'inf', { 武力: 10, 統帥: 5, 智力: 2, 血量: 24 });
  chr('chr_bandit_cav', '山賊騎兵', 'enemy', 'ut_cav', 'cav', { 武力: 10, 統帥: 4, 智力: 2, 血量: 24 });
  chr('chr_bandit_arc', '山賊弓手', 'enemy', 'ut_arc', 'arc', { 武力: 9, 統帥: 3, 智力: 3, 血量: 20 });
  chr('chr_boss', '山賊頭目', 'enemy', 'ut_inf', 'inf', { 武力: 12, 統帥: 7, 智力: 4, 血量: 34 }, { portrait: 'spr_pt_boss', level: 4 });

  const rows = [
    'gggffgggwgggmmmg',
    'ggggfgggwggggmmg',
    'ghgggggfwfgggggg',
    'gggggggfwggffgWW',
    'ggggggggwgggfggF',
    'grrrrrrrrrrrrrrF',
    'ggggggggwgggggWW',
    'ggfggggfwggmgggg',
    'gffgggggwggmmggg',
    'ggfgghggwgggmggg',
    'gggggggfwfgggggg',
    'ggggggggwggggggg',
  ];
  const tileOf = { g: 'spr_grass', r: 'spr_road', f: 'spr_forest', m: 'spr_mountain', w: 'spr_river', F: 'spr_fort', W: 'spr_wall', h: 'spr_grass' };
  const w = 16, h = 12;
  const map = { id: 'map_01', name: '山賊的據點', w, h, ground: [], objects: [], terrain: [] };
  rows.forEach((row) => {
    if (row.length !== w) throw new Error('sample map row length');
    for (const ch of row) {
      map.ground.push(tileOf[ch]);
      map.objects.push(ch === 'h' ? 'spr_house' : null);
      map.terrain.push(null);
    }
  });
  p.maps.push(map);
  p.stages.push({
    id: 'stg_01', name: '第一章 山賊討伐', map: 'map_01',
    deploy: { max: 3, points: [[1, 4], [1, 6], [2, 5], [0, 5]] },
    allies: ['chr_hero', 'chr_tiger', 'chr_bell'],
    enemies: [
      { char: 'chr_bandit', at: [11, 4], ai: 'aggressive' },
      { char: 'chr_bandit_cav', at: [12, 7], ai: 'aggressive' },
      { char: 'chr_bandit_arc', at: [13, 3], ai: 'aggressive' },
      { char: 'chr_boss', at: [15, 5], ai: 'aggressive' },
    ],
    guests: [],
    win: { type: 'rout' },
    lose: { type: 'allDefeated', leaderDeath: true },
    reinforcements: [],
  });
  return p;
}

