// 🎨 美術部（staff-3）：釣魚遊戲像素美術（Issue #43）
// 全部用程式畫（像素字元圖 → canvas），不用外部素材。index.html 的繪圖函式會呼叫這裡。
window.ART = (() => {
  // ── 調色盤 ──
  const PAL = {
    k: '#2a1e14',                  // 描邊
    h: '#2a7a5a', H: '#3fa078',    // 帽子
    d: '#5a3a1e', D: '#3e2612',    // 頭髮
    s: '#f6d0a8', S: '#d8a882', r: '#f0a090', e: '#2a1e14',  // 皮膚、臉頰、眼睛
    y: '#e8a040', Y: '#c07a28', L: '#f6c468', w: '#fff2c8',  // 黃色雨衣
    b: '#3a4a7a', B: '#24305a',    // 褲子、靴子
  };

  // 字元圖 → canvas
  function sprite(rows, pal = PAL) {
    const h = rows.length, w = rows[0].length;
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d');
    rows.forEach((row, y) => {
      if (row.length !== w) throw new Error('sprite row width mismatch: ' + row);
      for (let x = 0; x < w; x++) { const ch = row[x]; if (ch === '.' || !pal[ch]) continue; g.fillStyle = pal[ch]; g.fillRect(x, y, 1, 1); }
    });
    return c;
  }
  function flipped(c) {
    const f = document.createElement('canvas'); f.width = c.width; f.height = c.height;
    const g = f.getContext('2d'); g.translate(c.width, 0); g.scale(-1, 1); g.drawImage(c, 0, 0); return f;
  }

  // ════════ 外型與換裝（帽子、髮型、眼鏡、鬍子、衣服、褲子）════════
  // shop：在哪間店買（tailorA＝翠湖森林島「森林服飾店」、tailorB＝溪谷山島「山谷造型屋」）；price 0＝一開始就有
  const WARDROBE = {
    hat: {
      fisher_green: { name: '漁夫帽（綠）', price: 0, style: 'fisher', h: '#2a7a5a', H: '#3fa078' },
      none: { name: '不戴帽子', price: 0, style: 'none' },
      fisher_red: { name: '漁夫帽（紅）', price: 60, shop: 'tailorA', style: 'fisher', h: '#b8403a', H: '#e06a5a' },
      cap_blue: { name: '棒球帽（藍）', price: 80, shop: 'tailorA', style: 'cap', h: '#2a5aa0', H: '#4a80d0' },
      beanie_pink: { name: '毛線帽（粉）', price: 90, shop: 'tailorA', style: 'beanie', h: '#e07a9a', H: '#ffb0c8' },
      straw: { name: '草帽', price: 120, shop: 'tailorA', style: 'straw', h: '#d8b060', H: '#f0d488' },
      captain: { name: '船長帽', price: 400, shop: 'tailorA', style: 'captain', h: '#f4f0e8', H: '#ffffff' },
      pirate: { name: '海盜帽', price: 9999, shop: 'treasure', style: 'pirate', h: '#2a2a30', H: '#44444e' },   // 寶藏限定：挖寶才拿得到
    },
    hair: {
      short_brown: { name: '短髮（棕）', price: 0, style: 'short', d: '#5a3a1e', D: '#3e2612' },
      short_black: { name: '短髮（黑）', price: 50, shop: 'tailorB', style: 'short', d: '#2a2a30', D: '#16161a' },
      gray: { name: '灰白短髮', price: 100, shop: 'tailorB', style: 'short', d: '#c8c8cc', D: '#909098' },
      bangs_blonde: { name: '瀏海（金）', price: 120, shop: 'tailorB', style: 'bangs', d: '#e8c060', D: '#b8902a' },
      long_brown: { name: '長髮（棕）', price: 150, shop: 'tailorB', style: 'long', d: '#6a4224', D: '#4a2a14' },
      long_red: { name: '長髮（紅）', price: 180, shop: 'tailorB', style: 'long', d: '#c04a2a', D: '#8a2a14' },
      bald: { name: '光頭', price: 60, shop: 'tailorB', style: 'bald', d: '#5a3a1e', D: '#3e2612' },
    },
    glasses: {
      none: { name: '不戴眼鏡', price: 0, style: 'none' },
      round: { name: '圓框眼鏡', price: 80, shop: 'tailorA', style: 'round', G: '#3a2a20' },
      sun: { name: '墨鏡', price: 150, shop: 'tailorA', style: 'sun' },
      party: { name: '粉紅派對眼鏡', price: 200, shop: 'tailorA', style: 'round', G: '#ff5aa8' },
      patch: { name: '海盜眼罩', price: 9999, shop: 'treasure', style: 'patch' },
    },
    beard: {
      none: { name: '沒有鬍子', price: 0, style: 'none' },
      mustache: { name: '八字鬍', price: 80, shop: 'tailorA', style: 'mustache' },
      full: { name: '落腮鬍', price: 150, shop: 'tailorA', style: 'full' },
      white: { name: '白鬍子', price: 300, shop: 'tailorA', style: 'full', M: '#f0f0f0' },
      blackbeard: { name: '黑鬍子船長', price: 9999, shop: 'treasure', style: 'full', M: '#1e1a1a' },
    },
    top: {
      raincoat_yellow: { name: '黃色雨衣', price: 0, y: '#e8a040', Y: '#c07a28', L: '#f6c468', w: '#fff2c8' },
      raincoat_red: { name: '紅色雨衣', price: 120, shop: 'tailorB', y: '#d04a3a', Y: '#a02a20', L: '#f07a6a', w: '#fff2c8' },
      hoodie_green: { name: '綠色帽T', price: 150, shop: 'tailorB', y: '#4a9a5a', Y: '#2a6a3a', L: '#7cc08a', w: '#f4f0e8' },
      sailor: { name: '水手條紋衫', price: 200, shop: 'tailorB', y: '#f4f0e8', Y: '#c8c4bc', L: '#ffffff', w: '#2a5aa0', z: '#2a5aa0', pattern: 'stripe' },
      black_jacket: { name: '黑色夾克', price: 220, shop: 'tailorB', y: '#3a3a44', Y: '#24242c', L: '#5a5a66', w: '#d8b060' },
      hawaii: { name: '夏威夷花襯衫', price: 260, shop: 'tailorB', y: '#3ab0c0', Y: '#2a8090', L: '#6ad0e0', w: '#fff2c8', z: '#ff8aa0', pattern: 'dots' },
      pirate_coat: { name: '海盜船長外套', price: 9999, shop: 'treasure', y: '#a8302a', Y: '#7a1e1a', L: '#d05a4a', w: '#ffd040' },
    },
    pants: {
      jeans: { name: '牛仔褲', price: 0, b: '#3a4a7a', B: '#24305a' },
      khaki: { name: '卡其褲', price: 80, shop: 'tailorB', b: '#b8a070', B: '#8a7448' },
      black: { name: '黑色長褲', price: 80, shop: 'tailorB', b: '#2a2a30', B: '#16161a' },
      shorts_red: { name: '紅色短褲', price: 100, shop: 'tailorB', b: '#c04a3a', B: '#8a2a20', style: 'shorts' },
    },
  };
  const SLOT_NAME = { hat: '帽子', hair: '髮型', glasses: '眼鏡', beard: '鬍子', top: '衣服', pants: '褲子' };
  const DEFAULT_LOOK = { hat: 'fisher_green', hair: 'short_brown', glasses: 'none', beard: 'none', top: 'raincoat_yellow', pants: 'jeans' };

  const set = (str, map) => str.split('').map((c, i) => map[i] !== undefined ? map[i] : c).join('');
  const range = (a, b, ch) => { const m = {}; for (let i = a; i <= b; i++) m[i] = ch; return m; };
  // 帽子形狀（前後共用）：12 寬給地圖小人、16 寬給第三人稱與正面
  const HAT12 = {
    fisher: ['....kkkk....', '..kkHHHHkk..', '.khhHHhhhhk.', 'khhhhhhhhhhk', '.kkkkkkkkkk.'],
    cap: ['............', '...kkkkkk...', '..kHHHHHHk..', '.khhhhhhhhk.', '.kkkkkkkkkkk'],
    beanie: ['.....kk.....', '...kkHHkk...', '..khhhhhhk..', '.khhhhhhhhk.', '.kHHHHHHHHk.'],
    straw: ['............', '....kkkk....', '...kHhhhk...', 'kkhhhhhhhhkk', 'kkkkkkkkkkkk'],
    captain: ['....kkkk....', '..kkhhhhkk..', '.khhhHHhhhk.', '.kkkkkkkkkk.', '.kqqqqqqqqk.'],
    hair: ['............', '............', '...kkkkkk...', '..kddddddk..', '.kddddddddk.'],
    bald: ['............', '............', '...kkkkkk...', '..kssssssk..', '.kssssssssk.'],
    pirate: ['............', '.kk......kk.', 'khhkkkkkkhhk', 'khhhhxxhhhhk', '.kkkkkkkkkk.'],
  };
  const HAT16 = {
    fisher: ['....kkkkkkkk....', '...kHHHHHHHHk...', '..khhHHHHHHhhk..', '.khhhhhhhhhhhhk.', 'kkkkkkkkkkkkkkkk'],
    cap: ['................', '....kkkkkkkk....', '...kHHHHHHHHk...', '..khhhhhhhhhhk..', '..kkkkkkkkkkkkkk'],
    beanie: ['.......kk.......', '.....kkHHkk.....', '...khhhhhhhhk...', '..khhhhhhhhhhk..', '..kHHHHHHHHHHk..'],
    straw: ['................', '.....kkkkkk.....', '....kHhhhhhk....', 'kkkhhhhhhhhhhkkk', 'kkkkkkkkkkkkkkkk'],
    captain: ['.....kkkkkk.....', '...kkhhhhhhkk...', '..khhhhHHhhhhk..', '..kkkkkkkkkkkk..', '..kqqqqqqqqqqk..'],
    hair: ['................', '................', '....kkkkkkkk....', '...kddddddddk...', '..kddddddddddk..'],
    bald: ['................', '................', '....kkkkkkkk....', '...kssssssssk...', '..kssssssssssk..'],
    pirate: ['................', '.kk..........kk.', 'khhkkkkkkkkkkhhk', 'khhhhhhxxhhhhhhk', '.kkkkkkkkkkkkkk.'],
  };
  const hatKey = P => P.hat.style !== 'none' ? P.hat.style : P.hair.style === 'bald' ? 'bald' : 'hair';
  const unBald = (rows, P) => P.hair.style === 'bald' ? rows.map(r => r.replace(/d/g, 's').replace(/D/g, 'S')) : rows;
  function face12(P) {   // 正面臉 4 列
    let r = ['.kssssssssk.', '.ksesssesSk.', '.ksrsssrsSk.', '..kssssSSk..'];
    if (P.hair.style === 'bangs') r[0] = '.kdddddddsk.';
    if (P.glasses.style === 'round') r[1] = set(r[1], { 2: 'G', 4: 'G', 5: 'G', 6: 'G', 8: 'G' });
    if (P.glasses.style === 'sun') r[1] = '.kqqqkqqqSk.';
    if (P.glasses.style === 'patch') { r[1] = set(r[1], { 6: 'q', 7: 'q', 8: 'q' }); r[0] = set(r[0], { 4: 'q' }); }
    if (P.beard.style === 'mustache') r[2] = set(r[2], range(4, 6, 'M'));
    if (P.beard.style === 'full') { r[2] = '.kMMMMMMMMk.'; r[3] = '..kMMMMMMk..'; }
    if (P.hair.style === 'long') r = r.map((x, i) => i < 3 ? 'kd' + x.slice(2, 10) + 'dk' : '.kd' + x.slice(3, 9) + 'dk.');
    return r;
  }
  const back12 = P => unBald(['.kddddddddk.', '.kddddddddk.', '.kdddddddDk.', '..kddddDDk..'], P);
  function face16(P) {
    const f = m => '...k' + m + 'k...';
    let r = ['...kssssssssk...', f('sesssses'), f('srssssrs'), '....ksssSSSk....'];
    if (P.hair.style === 'bangs') r[0] = '...kdddddddsk...';
    if (P.glasses.style === 'round') r[1] = '...kGeGGGGeGk...';
    if (P.glasses.style === 'sun') r[1] = '...kqqqkkqqqk...';
    if (P.glasses.style === 'patch') { r[1] = set(r[1], { 9: 'q', 10: 'q', 11: 'q' }); r[0] = set(r[0], { 6: 'q' }); }
    if (P.beard.style === 'mustache') r[2] = set(r[2], range(6, 9, 'M'));
    if (P.beard.style === 'full') { r[2] = f('MMMMMMMM'); r[3] = '....kMMMMMMk....'; }
    if (P.hair.style === 'long') r = r.map((x, i) => i < 3 ? set(x, { 2: 'k', 3: 'd', 12: 'd', 13: 'k' }) : set(x, { 3: 'k', 4: 'd', 11: 'd', 12: 'k' }));
    return r;
  }
  const back16 = P => unBald(['...kddddddddk...', '...kddddddddk...', '...kdddddddDk...', '....kdddddDk....'], P);
  function pattern(rows, P, y0) {   // 衣服花紋：條紋、圓點
    if (P.top.pattern === 'stripe') return rows.map((r, i) => (i + y0) % 2 ? r.replace(/y/g, 'z') : r);
    if (P.top.pattern === 'dots') return rows.map((r, i) => r.split('').map((c, x) => c === 'y' && (x + (i + y0) * 2) % 4 === 0 ? 'z' : c).join(''));
    return rows;
  }
  const BODY12 = {
    front: ['.kyyykkyyyk.', 'kLyyyyyyyyYk', 'kLyyywyyyyYk', 'ksyyyyyyyYSk', '.kyyywyyyYk.', '.kYYYYYYYYk.'],
    back: ['.kyyyyyyyyk.', 'kLyyyyyyyyYk', 'kLyyyykyyyYk', 'ksyyyykyyYSk', '.kyyyykyyYk.', '.kYYYYYYYYk.'],
  };
  function body12(dir, P) {
    let r = pattern(BODY12[dir], P, 0);
    if (dir === 'back' && P.hair.style === 'long') r = r.map((x, i) => i < 3 ? x.slice(0, 2) + 'dddddddd' + x.slice(10) : x);
    return r;
  }
  const LEGS12 = [
    ['..kbbkkbbk..', '..kbbk.kbbk.', '..kBBk.kBBk.', '..kkkk.kkkk.'],   // 站立
    ['..kbbkkbbk..', '.kbbk...kbbk', '.kBBk...kBBk', '.kkkk...kkkk'],   // 跨步
    ['..kbbkkbbk..', '...kbbbbk...', '...kBBBBk...', '...kkkkkk...'],   // 併腳
  ];
  const legs12 = P => LEGS12.map(l => P.pants.style === 'shorts' ? l.map((r, i) => i === 1 ? r.replace(/b/g, 's') : r) : l);
  const BODY16 = [
    '..kkLyyyyyyYkk..', '.kLLyyyyyyyyYYk.', 'kLLyyyyyyyyyyYYk', 'kLyyyyykyyyyyyYk', 'kLyyyyykyyyyyyYk', 'kLyyyyykyyyyyyYk',
    'kLyyyyykyyyyyyYk', 'kLyyyyykyyyyyYYk', 'kyyyyyykyyyyyYYk', 'kYyyyyykyyyyyYYk', 'kYYYYYYYYYYYYYYk',
  ];
  function body16(dir, P) {
    let r = BODY16;
    if (dir === 'front') r = r.map((x, i) => x[7] === 'k' && i >= 3 ? x.slice(0, 7) + (i === 4 || i === 7 ? 'w' : 'y') + x.slice(8) : x);
    r = pattern(r, P, 1);
    if (dir === 'back' && P.hair.style === 'long') r = r.map((x, i) => i < 4 ? x.slice(0, 4) + 'dddddddd' + x.slice(12) : x);
    return r;
  }
  const LEGS16 = ['.kbbbbbbbbbbbbk.', '.kbbbbbkkbbbbbk.', '.kbbbbk..kbbbbk.', '.kbbbbk..kbbbbk.', '.kBBBBk..kBBBBk.', '.kkkkkk..kkkkkk.'];
  const legs16 = P => P.pants.style === 'shorts' ? LEGS16.map((r, i) => i === 2 || i === 3 ? r.replace(/b/g, 's') : r) : LEGS16;
  function lookParts(look) { const P = {}; for (const k in WARDROBE) P[k] = WARDROBE[k][(look || {})[k]] || WARDROBE[k][DEFAULT_LOOK[k]]; return P; }
  function palFor(P) {
    return { ...PAL, h: P.hat.h || PAL.h, H: P.hat.H || PAL.H, d: P.hair.d, D: P.hair.D, y: P.top.y, Y: P.top.Y, L: P.top.L, w: P.top.w,
      z: P.top.z || P.top.y, b: P.pants.b, B: P.pants.B, G: P.glasses.G || '#3a2a20', q: '#1e2230', M: P.beard.M || P.hair.d, x: '#f4f0e8' };
  }
  // 手臂：[x,y,w,h,色] 疊在第三人稱背影上（單位座標），hand＝握竿的手相對 sprite 左上的位置
  const ARMS = {
    idle: { parts: [[13, 10, 3, 8, 'Y'], [14, 11, 1, 6, 'y'], [13, 17, 3, 2, 's']], hand: [14.5, 18] },
    cast: { parts: [[13, 2, 3, 9, 'Y'], [14, 3, 1, 7, 'y'], [13, 1, 3, 2, 's']], hand: [14.5, 1.5] },
    pull: { parts: [[12, 7, 4, 4, 'Y'], [0, 7, 4, 4, 'L'], [13, 6, 3, 2, 's'], [0, 6, 3, 2, 's']], hand: [14.5, 6.5] },
  };
  // 依外型組出所有角度的圖：地圖小人（前後、走路三格、坐船）、第三人稱背影、正面站姿、正面捧魚
  function buildLook(look) {
    const P = lookParts(look), pal = palFor(P), hk = hatKey(P), out = { person: {}, third: {} };
    for (const dir of ['front', 'back']) {
      const head = [...HAT12[hk], ...(dir === 'front' ? face12(P) : back12(P))], body = body12(dir, P);
      out.person[dir] = legs12(P).map(l => sprite([...head, ...body, ...l], pal));
      out.person[dir + 'Flip'] = out.person[dir].map(flipped);
      out.person[dir + 'Sit'] = sprite([...head, ...body], pal);
      out.person[dir + 'SitFlip'] = flipped(out.person[dir + 'Sit']);
    }
    const backRows = [...HAT16[hk], ...back16(P), ...body16('back', P), ...legs16(P)];
    for (const [pose, def] of Object.entries(ARMS)) {
      const c = sprite(backRows, pal), g = c.getContext('2d');
      for (const [x, y, w, h, col] of def.parts) {
        g.fillStyle = pal.k; g.fillRect(x, y, w, h);
        g.fillStyle = pal[col]; g.fillRect(x + (w > 2 ? 1 : 0), y + (h > 2 ? 1 : 0), Math.max(1, w - (w > 2 ? 2 : 0)), Math.max(1, h - (h > 2 ? 2 : 0)));
      }
      out.third[pose] = { img: c, hand: def.hand };
    }
    out.front = sprite([...HAT16[hk], ...face16(P), ...body16('front', P), ...legs16(P)], pal);
    // 正面捧魚：兩隻手從肩膀舉到頭頂上方＋開心的嘴巴
    const c = document.createElement('canvas'); c.width = 24; c.height = 34;
    const g = c.getContext('2d'); g.drawImage(out.front, 4, 4);
    for (const x of [1, 19]) {
      g.fillStyle = pal.k; g.fillRect(x, 3, 4, 13);
      g.fillStyle = x === 1 ? pal.L : pal.Y; g.fillRect(x + 1, 4, 2, 11);
      g.fillStyle = pal.k; g.fillRect(x, 0, 4, 4);
      g.fillStyle = pal.s; g.fillRect(x + 1, 1, 2, 2);
    }
    g.fillStyle = pal.k; g.fillRect(10, 12, 4, 1); g.fillStyle = '#c84a3a'; g.fillRect(11, 13, 2, 1);
    out.trophy = c;
    return out;
  }
  let LOOK = buildLook(DEFAULT_LOOK), person = LOOK.person, third = LOOK.third, TROPHY = LOOK.trophy;
  function setLook(look) { LOOK = buildLook(look); person = LOOK.person; third = LOOK.third; TROPHY = LOOK.trophy; }
  // 換裝畫面的預覽：回傳 16×26 的正面站姿（look 不給就用目前的）
  const previewFront = look => look ? buildLook(look).front : LOOK.front;

  // 畫主角：x,y＝腳底中心；dir front/back；flip 面向左；frame 0..2；sitting 坐船
  function drawPerson(g, x, y, { back, flip, frame, sitting, rod }) {
    const key = (back ? 'back' : 'front') + (sitting ? 'Sit' : '') + (flip ? 'Flip' : '');
    const img = sitting ? person[key] : person[key][frame];
    const top = y - (sitting ? 14 : 18);
    if (!sitting) { g.fillStyle = 'rgba(0,0,0,.22)'; g.fillRect(x - 5, y - 1, 10, 2); }
    // 釣竿在身體後面（背面時）或前面
    const drawRod = () => {
      if (!rod) return;
      const hx = x + (flip ? -5 : 5), hy = top + 12;
      g.fillStyle = '#6a4224';
      for (let i = 0; i < 12; i++) g.fillRect(hx + (flip ? -i : i) * .55 | 0, hy - i | 0, 1, 1);
      g.fillStyle = '#c8b090'; g.fillRect(hx + (flip ? -1 : 0), hy - 1, 2, 2);     // 捲線器
    };
    if (back) drawRod();
    g.drawImage(img, x - 6, top);
    if (!back) drawRod();
  }
  // 畫背影：bx,by＝腳底中心（螢幕像素），s＝放大倍率；回傳手的位置
  function drawThirdPerson(g, bx, by, s, pose) {
    const p = third[pose] || third.idle, w = 16 * s, h = 26 * s;
    const left = bx - 8 * s, top = by - 30 * s;
    g.drawImage(p.img, left, top, w, h);
    return [left + p.hand[0] * s, top + p.hand[1] * s];
  }

  // 畫捧魚：cx＝中心，by＝腳底（螢幕像素），s＝倍率，fishImg＝64×32 魚圖，lift 0..1 舉起的進度，glow＝稀有度顏色
  function drawTrophy(g, cx, by, s, fishImg, t, lift, glow) {
    const e = 1 - Math.pow(1 - Math.min(1, lift), 3);
    const top = by - 34 * s + Math.round((1 - e) * 10 * s), left = Math.round(cx - 12 * s);
    const fw = 26 * s, fh = 13 * s, fx = Math.round(cx - fw / 2), fy = Math.round(top + 3 * s - fh + Math.sin(t * 9) * s * .4);
    if (glow) {   // 魚後面的光圈
      const r = fw * (.75 + Math.sin(t * 3) * .05), gr = g.createRadialGradient(cx, fy + fh / 2, 0, cx, fy + fh / 2, r);
      gr.addColorStop(0, glow + 'cc'); gr.addColorStop(1, glow + '00'); g.fillStyle = gr; g.fillRect(cx - r, fy + fh / 2 - r, r * 2, r * 2);
    }
    g.drawImage(TROPHY, left, top, 24 * s, 34 * s);
    if (fishImg) g.drawImage(fishImg, fx, fy, fw, fh);
    // 閃光
    g.fillStyle = '#fff6b0';
    for (let i = 0; i < 8; i++) {
      const a = i * .785 + t * 1.5, rr = fw * (.55 + (i % 2) * .15), on = Math.sin(t * 7 + i * 1.7) > .2;
      if (!on || e < .6) continue;
      const sx = Math.round(cx + Math.cos(a) * rr), sy = Math.round(fy + fh / 2 + Math.sin(a) * rr * .6), u = Math.max(1, s >> 1);
      g.fillRect(sx - u, sy, u * 3, u); g.fillRect(sx, sy - u, u, u * 3);
    }
  }

  // ════════ 浮標（7×12）════════
  const BOBBER = sprite([
    '...k...',
    '...Y...',
    '...Y...',
    '..kkk..',
    '.kRRRk.',
    'kRrRRRk',
    'kRRRRRk',
    'kkkkkkk',
    'kWwWWWk',
    '.kWWWk.',
    '..kWk..',
    '...k...',
  ], { k: '#3a2a20', Y: '#ffd040', R: '#e8402e', r: '#ffa08a', W: '#f4f0e8', w: '#ffffff' });
  function drawBobber(g, x, y, sink) {
    // y＝水面線；sink＝沉入的像素數（下半部被水蓋住）
    const top = y - 9 + Math.round(sink), vis = Math.max(0, Math.min(12, y + 1 - top));
    if (vis > 0) g.drawImage(BOBBER, 0, 0, 7, vis, x - 3, top, 7, vis);
  }

  // ════════ 船（依等級換外觀；R(u,v)＝船身座標轉螢幕）════════
  const BOAT_LOOK = [
    { hull: '#6a3e1e', deck: '#b07a46', trim: '#8a5a30', len: 1 },          // 小木船
    { hull: '#f0ece0', deck: '#c89a62', trim: '#d0403a', len: 1.1, motor: true },   // 馬達小艇
    { hull: '#2a5aa0', deck: '#f4f0e8', trim: '#ffffff', len: 1.3, motor: true, shield: true },   // 遠洋快艇
  ];
  function drawBoat(g, x, y, ang, lv, t, moving) {
    const L = BOAT_LOOK[lv] || BOAT_LOOK[0], k = L.len, ca = Math.cos(ang), sa = Math.sin(ang);
    const R = (u, v) => [x + u * ca - v * sa * .6, y + u * sa * .5 + v * ca * .6];
    const poly = (pts, c) => { g.fillStyle = c; g.beginPath(); g.moveTo(...R(...pts[0])); for (const q of pts.slice(1)) g.lineTo(...R(...q)); g.closePath(); g.fill(); };
    const S = pts => pts.map(([u, v]) => [u * k, v]);
    // 水波與尾跡
    g.fillStyle = 'rgba(255,255,255,.4)'; g.fillRect(x - 11 * k | 0, y + 4, 22 * k | 0, 1);
    if (moving) { g.fillStyle = 'rgba(255,255,255,.55)'; for (let i = 1; i < 5; i++) { const [wx, wy] = R(-12 * k - i * 4, (i % 2 ? 1 : -1) * i); g.fillRect(wx | 0, wy | 0, 3, 1); } }
    poly(S([[-12, -7], [8, -7], [15, 0], [8, 7], [-12, 7]]), '#2a1e14');      // 描邊
    poly(S([[-11, -6], [8, -6], [14, 0], [8, 6], [-11, 6]]), L.hull);
    poly(S([[-10, -4], [7, -4], [11, 0], [7, 4], [-10, 4]]), L.deck);
    poly(S([[-11, -6], [8, -6], [9, -5], [-11, -5]]), shadeHex(L.hull, .25));  // 船緣亮邊
    poly(S([[-4, -4], [-2, -4], [-2, 4], [-4, 4]]), L.trim);                  // 座板／條紋
    if (lv === 0) { poly([[-1, 5], [1, 5], [-3, 12], [-5, 12]], '#8a5a30'); poly([[-1, -5], [1, -5], [-3, -12], [-5, -12]], '#8a5a30'); }   // 船槳
    if (L.motor) { poly(S([[-15, -2], [-11, -2], [-11, 2], [-15, 2]]), '#3a3a40'); poly(S([[-14, -1], [-12, -1], [-12, 1], [-14, 1]]), '#8a8a94'); if (moving) { const [mx, my] = R(-16 * k, 0); g.fillStyle = 'rgba(255,255,255,.7)'; g.fillRect(mx - 1 | 0, my + Math.sin(t * 20) | 0, 2, 2); } }
    if (L.shield) { poly(S([[3, -5], [5, -5], [5, 5], [3, 5]]), '#9ad0f0'); poly(S([[3, -5], [4, -5], [4, 5], [3, 5]]), '#e0f4ff'); }
    // 小旗
    const [fx, fy] = R(10 * k, 0); g.fillStyle = '#3a3a40'; g.fillRect(fx | 0, fy - 9 | 0, 1, 9); g.fillStyle = lv === 2 ? '#ffd040' : '#d0403a'; g.fillRect((fx | 0) + 1, (fy - 9 + Math.round(Math.sin(t * 6) * .5)) | 0, 4, 3);
  }

  // ════════ 建築裝飾（index.html 的 isoBox 畫好牆和屋頂後呼叫）════════
  function shadeHex(hex, k) { const n = parseInt(hex.slice(1), 16); const f = v => Math.max(0, Math.min(255, Math.round(v + (k > 0 ? (255 - v) * k : v * k)))); return `rgb(${f(n >> 16)},${f(n >> 8 & 255)},${f(n & 255)})`; }
  function decorateBuilding(g, b, P, night, t) {
    const line = (a, c, col, w = 1) => { g.strokeStyle = col; g.lineWidth = w; g.beginPath(); g.moveTo(a[0] + .5, a[1] + .5); g.lineTo(c[0] + .5, c[1] + .5); g.stroke(); };
    const quad = (pts, col) => { g.fillStyle = col; g.beginPath(); g.moveTo(...pts[0]); for (const q of pts.slice(1)) g.lineTo(...q); g.closePath(); g.fill(); };
    const { x: x0, y: y0, w, h, hgt } = b, yF = y0 + h, xR = x0 + w;
    // 牆面木板紋與牆角描邊
    for (let z = 3; z < hgt; z += 3) { line(P(x0, yF, z), P(xR, yF, z), 'rgba(90,60,30,.18)'); line(P(xR, yF, z), P(xR, y0, z), 'rgba(60,40,20,.2)'); }
    line(P(x0, yF, 0), P(x0, yF, hgt), 'rgba(42,30,20,.55)'); line(P(xR, yF, 0), P(xR, yF, hgt), 'rgba(42,30,20,.55)'); line(P(xR, y0, 0), P(xR, y0, hgt), 'rgba(42,30,20,.55)');
    line(P(x0, yF, 0), P(xR, yF, 0), 'rgba(42,30,20,.6)'); line(P(xR, yF, 0), P(xR, y0, 0), 'rgba(42,30,20,.6)');
    // 屋頂瓦片線（前坡）
    for (let i = 1; i < 4; i++) { const k = i / 4; line(P(x0 + .5 * k, yF - h / 2 * k, hgt + 8 * k), P(xR - .5 * k, yF - h / 2 * k, hgt + 8 * k), 'rgba(0,0,0,.18)'); }
    // 雨遮（條紋）
    const awning = (c1, c2) => {
      const n = 6, a0 = x0 + .15, a1 = xR - .15, zt = hgt - 3, zb = hgt - 7;
      for (let i = 0; i < n; i++) {
        const u0 = a0 + (a1 - a0) * i / n, u1 = a0 + (a1 - a0) * (i + 1) / n;
        quad([P(u0, yF, zt), P(u1, yF, zt), P(u1, yF + .45, zb), P(u0, yF + .45, zb)], i % 2 ? c2 : c1);
      }
      for (let i = 0; i < n; i++) { const u = a0 + (a1 - a0) * (i + .5) / n; const [sx, sy] = P(u, yF + .45, zb); g.fillStyle = i % 2 ? c2 : c1; g.fillRect(sx - 1 | 0, sy | 0, 3, 1); }
    };
    const sign = (u, draw) => {   // 掛在牆上的小招牌
      const [sx, sy] = P(u, yF, hgt + 1); g.fillStyle = '#2a1e14'; g.fillRect(sx - 6, sy - 6, 13, 8); g.fillStyle = '#e8c88a'; g.fillRect(sx - 5, sy - 5, 11, 6); draw(sx, sy);
    };
    const px = (x, y, ww, hh, c) => { g.fillStyle = c; g.fillRect(x | 0, y | 0, ww, hh); };
    if (b.id === 'shop') {
      awning('#d0403a', '#fff2e0');
      sign(x0 + .7, (sx, sy) => { for (let i = 0; i < 8; i++) px(sx - 4 + i, sy - 1 - (i >> 1), 1, 1, '#6a4224'); px(sx + 3, sy - 4, 1, 4, '#f4f0e8'); px(sx + 2, sy, 3, 1, '#d0403a'); });
      // 靠牆的釣竿
      const [rx, ry] = P(xR - .25, yF + .15, 0); for (let i = 0; i < 3; i++) { g.fillStyle = ['#6a4224', '#3a5a8a', '#2a7a5a'][i]; for (let z = 0; z < 16; z++) g.fillRect(rx - 2 + i * 2 + (z >> 3), ry - z, 1, 1); }
    } else if (b.id === 'market') {
      awning('#3a78c0', '#f4f6ff');
      sign(x0 + .7, (sx, sy) => { px(sx - 3, sy - 3, 6, 3, '#4a8ad0'); px(sx + 3, sy - 4, 2, 5, '#4a8ad0'); px(sx - 2, sy - 3, 1, 1, '#fff'); });
      // 魚箱
      for (let i = 0; i < 2; i++) { const [cx, cy] = P(x0 + .3 + i * .9, yF + .55, 0); px(cx - 4, cy - 4, 9, 5, '#2a1e14'); px(cx - 3, cy - 3, 7, 3, '#b07a46'); px(cx - 2, cy - 4, 5, 1, '#d8f0ff'); px(cx - 1 + i, cy - 5, 3, 1, i ? '#e0806a' : '#8ab0c8'); }
    } else if (b.id === 'home') {
      // 煙囪與炊煙
      const [cx, cy] = P(x0 + .6, y0 + .6, hgt + 6); px(cx - 2, cy - 7, 5, 8, '#2a1e14'); px(cx - 1, cy - 6, 3, 7, '#a8564a'); px(cx - 2, cy - 8, 5, 2, '#5a3a2a');
      for (let i = 0; i < 3; i++) { const ph = (t * .5 + i / 3) % 1; g.fillStyle = `rgba(240,240,240,${.6 * (1 - ph)})`; g.fillRect(cx - 1 + Math.sin(ph * 6 + i) * 2 | 0, cy - 10 - ph * 14 | 0, 3, 2); }
      // 花箱
      const [fx, fy] = P(x0 + .5, yF, 0); px(fx - 3, fy - 7, 7, 2, '#6a4224'); for (let i = 0; i < 3; i++) px(fx - 2 + i * 2, fy - 8, 1, 1, ['#ff8aa0', '#fff3a0', '#ff8aa0'][i]);
      // 信箱
      const [mx, my] = P(xR + .25, yF + .35, 0); px(mx, my - 8, 1, 8, '#5a3a1e'); px(mx - 2, my - 11, 5, 3, '#3a78c0'); px(mx + 2, my - 12, 1, 2, '#d0403a');
    } else if (b.id === 'tailorA') {   // 森林服飾店：綠白雨遮、帽子招牌、門口的帽架
      awning('#3a8a4a', '#f4f6e8');
      sign(x0 + .7, (sx, sy) => { px(sx - 3, sy - 2, 7, 1, '#6a4224'); px(sx - 2, sy - 4, 5, 2, '#b8403a'); px(sx - 1, sy - 5, 3, 1, '#b8403a'); });
      const [hx, hy] = P(xR + .3, yF + .3, 0); px(hx, hy - 12, 1, 12, '#5a3a1e'); px(hx - 3, hy - 14, 7, 2, '#d8b060'); px(hx - 2, hy - 16, 5, 2, '#d8b060');
    } else if (b.id === 'tailorB') {   // 山谷造型屋：粉白雨遮、衣架招牌、門口的假人
      awning('#c85a8a', '#fff0f6');
      sign(x0 + .7, (sx, sy) => { px(sx, sy - 5, 1, 2, '#3a3a40'); px(sx - 4, sy - 3, 9, 1, '#3a3a40'); px(sx - 4, sy - 2, 1, 1, '#3a3a40'); px(sx + 4, sy - 2, 1, 1, '#3a3a40'); });
      const [mx, my] = P(xR + .3, yF + .3, 0); px(mx, my - 4, 1, 4, '#5a3a1e'); px(mx - 3, my - 12, 7, 8, '#3ab0c0'); px(mx - 1, my - 15, 3, 3, '#e8d8c0'); px(mx - 2, my - 9, 1, 1, '#ff8aa0'); px(mx + 1, my - 7, 1, 1, '#ff8aa0');
    } else if (b.id === 'aquarium') {   // 水族館：藍色雨遮、魚招牌、正面大玻璃（裡面有魚游）
      awning('#2a78b0', '#e8f6ff');
      sign(x0 + 1.5, (sx, sy) => { px(sx - 3, sy - 4, 5, 3, '#3a9ad8'); px(sx + 2, sy - 5, 2, 5, '#3a9ad8'); px(sx - 2, sy - 3, 1, 1, '#fff'); });
      for (let i = 0; i < 2; i++) {
        const [gx, gy] = P(x0 + .35 + i * 1.3, yF, 3), ww = 14;
        px(gx - 1, gy - 10, ww + 2, 9, '#1a2a3a'); px(gx, gy - 9, ww, 7, '#5ac8f0'); px(gx, gy - 9, ww, 2, '#8ae0ff');
        const fx = gx + 2 + ((t * 6 + i * 7) % (ww - 4)) | 0; px(fx, gy - 6, 3, 2, i ? '#ffb070' : '#ff7a8a'); px(fx - 1, gy - 6, 1, 2, i ? '#e0904a' : '#d05a6a');
      }
    } else if (b.id === 'guild') {   // 釣魚協會：金色雨遮、獎盃招牌、兩支旗子、門口的大魚看板
      awning('#c8902a', '#fff6d0');
      sign(x0 + 1.5, (sx, sy) => { px(sx - 2, sy - 5, 5, 3, '#ffd040'); px(sx - 1, sy - 2, 3, 1, '#ffd040'); px(sx - 2, sy - 1, 5, 1, '#8a5a20'); px(sx - 3, sy - 5, 1, 2, '#ffd040'); px(sx + 3, sy - 5, 1, 2, '#ffd040'); });
      for (const fx of [x0 + .2, xR - .2]) { const [qx, qy] = P(fx, y0 + .2, hgt + 6); px(qx, qy - 14, 1, 14, '#3a3a40'); px(qx + 1, qy - 14 + Math.round(Math.sin(t * 5 + fx)), 6, 4, fx < xR - 1 ? '#d0403a' : '#3a78c0'); }
      const [bx, by] = P(xR + .35, yF + .3, 0); px(bx, by - 6, 1, 6, '#5a3a1e'); px(bx - 6, by - 13, 13, 7, '#2a1e14'); px(bx - 5, by - 12, 11, 5, '#f4ecd8'); px(bx - 3, by - 10, 5, 2, '#3a78c0'); px(bx + 2, by - 11, 2, 4, '#3a78c0');
    } else if (b.id === 'board') {
      awning('#9a5ab0', '#f6eefa');
      sign(x0 + .7, (sx, sy) => { px(sx - 4, sy - 3, 4, 4, '#3a78c0'); px(sx, sy - 3, 4, 4, '#d0403a'); px(sx - 1, sy - 3, 1, 4, '#2a1e14'); });
      // 旗子
      const [qx, qy] = P(xR - .1, y0 + .1, hgt + 4); px(qx, qy - 12, 1, 12, '#3a3a40'); px(qx + 1, qy - 12 + Math.round(Math.sin(t * 5)), 5, 3, '#ffd040');
    }
  }

  return { PAL, sprite, flipped, shade: shadeHex, drawPerson, drawThirdPerson, drawTrophy, drawBobber, drawBoat, decorateBuilding, WARDROBE, SLOT_NAME, DEFAULT_LOOK, setLook, previewFront };
})();
