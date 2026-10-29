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
  // shop：在哪間店買（tailorA＝翠湖森林島「森林服飾店」、tailorB＝溪谷山島「山谷造型屋」，C～F 見下面新地點）；price 0＝一開始就有
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
  // ── 新地點的四間服飾店（2026-10-29）──
  // tailorC＝冰晶島「雪國毛帽店」、tailorD＝火山島「熔岩龐克屋」、tailorE＝紅樹林島「叢林探險屋」、tailorF＝大河平原「河畔和風屋」
  Object.assign(WARDROBE.hat, {
    ushanka: { name: '飛行毛帽', price: 260, shop: 'tailorC', style: 'ushanka', h: '#7a5034', H: '#efe6d6' },
    earmuff: { name: '毛毛耳罩', price: 180, shop: 'tailorC', style: 'earmuff', h: '#c8c8d0', H: '#ff8aa8' },
    beanie_white: { name: '毛線帽（白）', price: 120, shop: 'tailorC', style: 'beanie', h: '#e8eef4', H: '#ffffff' },
    safari: { name: '探險帽', price: 220, shop: 'tailorE', style: 'safari', h: '#c8b080', H: '#e8d4a0' },
    bandana_green: { name: '綠色頭巾', price: 140, shop: 'tailorE', style: 'bandana', h: '#3a8a3a', H: '#6ac06a' },
    bandana_red: { name: '紅色頭巾', price: 140, shop: 'tailorD', style: 'bandana', h: '#c83a2a', H: '#f06a5a' },
    kasa: { name: '斗笠', price: 200, shop: 'tailorF', style: 'kasa', h: '#c8a860', H: '#e8cc88' },
    kid_cap: { name: '小志的紅棒球帽', price: 9999, shop: 'friend', style: 'cap', h: '#d0402a', H: '#f06a4a' },
    old_captain: { name: '老船長帽', price: 9999, shop: 'friend', style: 'captain', h: '#24305a', H: '#3a4a80' },
    helmet: { name: '礦工安全帽', price: 9999, shop: 'mine', style: 'helmet', h: '#e8b020', H: '#ffd040' },   // 地下世界委託獎勵（之後開放）
    headband: { name: '必勝頭帶', price: 120, shop: 'tailorF', style: 'headband', h: '#f4f0e8', H: '#e03a2a' },
  });
  Object.assign(WARDROBE.hair, {
    long_silver: { name: '銀白長髮', price: 220, shop: 'tailorC', style: 'long', d: '#e8eef4', D: '#a8b4c4' },
    mohawk_red: { name: '紅色龐克頭', price: 300, shop: 'tailorD', style: 'mohawk', d: '#e03a2a', D: '#a0201a' },
    spiky_orange: { name: '火焰刺蝟頭', price: 260, shop: 'tailorD', style: 'spiky', d: '#ff8a2a', D: '#c85a14' },
    spiky_black: { name: '刺蝟頭（黑）', price: 200, shop: 'tailorD', style: 'spiky', d: '#2a2a30', D: '#16161a' },
    short_teal: { name: '短髮（藍綠）', price: 160, shop: 'tailorE', style: 'short', d: '#2a9a8a', D: '#1a6a5e' },
    bun_brown: { name: '包包頭（棕）', price: 200, shop: 'tailorE', style: 'bun', d: '#6a4224', D: '#4a2a14' },
    topknot: { name: '武士髻', price: 240, shop: 'tailorF', style: 'topknot', d: '#2a2a30', D: '#16161a' },
    bun_pink: { name: '包包頭（粉）', price: 220, shop: 'tailorF', style: 'bun', d: '#f0a0c0', D: '#c87090' },
  });
  Object.assign(WARDROBE.glasses, {
    artist_glass: { name: '畫家的紅框眼鏡', price: 9999, shop: 'friend', style: 'round', G: '#d03a6a' },
    scholar_glass: { name: '博士的金框眼鏡', price: 9999, shop: 'friend', style: 'round', G: '#d8a020' },
    crystal_glass: { name: '水晶眼鏡', price: 9999, shop: 'mine', style: 'round', G: '#8affff' },   // 地底委託獎勵
    goggles: { name: '雪地護目鏡', price: 240, shop: 'tailorC', style: 'goggles', G: '#ff9a3a' },
    shades_red: { name: '紅色墨鏡', price: 220, shop: 'tailorD', style: 'sunc', G: '#c8202a' },
    shades_green: { name: '叢林墨鏡', price: 180, shop: 'tailorE', style: 'sunc', G: '#2a6a3a' },
  });
  Object.assign(WARDROBE.beard, {
    goatee: { name: '山羊鬍', price: 160, shop: 'tailorD', style: 'goatee' },
    stubble: { name: '鬍渣', price: 100, shop: 'tailorE', style: 'stubble' },
  });
  Object.assign(WARDROBE.top, {
    grandma_knit: { name: '阿嬤的手織毛衣', price: 9999, shop: 'friend', y: '#c86a8a', Y: '#9a4a66', L: '#e898b0', w: '#fff2c8', z: '#fff2c8', pattern: 'dots' },
    postman: { name: '郵差制服', price: 9999, shop: 'friend', y: '#2a7a4a', Y: '#1a5a34', L: '#4a9a6a', w: '#ffd040' },
    miner_suit: { name: '礦工工作服', price: 9999, shop: 'mine', y: '#3a5a8a', Y: '#24406a', L: '#5a7ab0', w: '#ffd040', z: '#ffd040', pattern: 'stripe' },   // 地底委託獎勵
    parka_blue: { name: '羽絨外套（藍）', price: 320, shop: 'tailorC', y: '#3a6ac0', Y: '#244a8a', L: '#6a9ae0', w: '#f4f0e8' },
    sweater_snow: { name: '雪花毛衣', price: 280, shop: 'tailorC', y: '#c03a3a', Y: '#8a2424', L: '#e06a6a', w: '#f4f0e8', z: '#ffffff', pattern: 'dots' },
    leather: { name: '龐克皮衣', price: 360, shop: 'tailorD', y: '#2a2226', Y: '#161214', L: '#4a3a3e', w: '#e03a2a' },
    flame_tee: { name: '火焰T恤', price: 300, shop: 'tailorD', y: '#2a2a30', Y: '#16161a', L: '#44444e', w: '#ffd040', z: '#ff6a2a', pattern: 'flame' },
    vest_explorer: { name: '探險背心', price: 240, shop: 'tailorE', y: '#a8946a', Y: '#7a6a48', L: '#c8b48a', w: '#4a3a20' },
    camo: { name: '迷彩外套', price: 300, shop: 'tailorE', y: '#6a8a4a', Y: '#4a6a2a', L: '#8aa86a', w: '#2a3a1a', z: '#3a4a24', pattern: 'camo' },
    yukata_blue: { name: '藍色浴衣', price: 320, shop: 'tailorF', y: '#3a5a9a', Y: '#24407a', L: '#5a7ac0', w: '#f4f0e8', z: '#f4f0e8', pattern: 'dots' },
    happi: { name: '紅色法被', price: 280, shop: 'tailorF', y: '#c83a2a', Y: '#8a2418', L: '#e86a5a', w: '#ffd040', z: '#f4f0e8', pattern: 'stripe' },
  });
  Object.assign(WARDROBE.pants, {
    snow_pants: { name: '雪褲（白）', price: 180, shop: 'tailorC', b: '#e8eef4', B: '#a8b4c4' },
    skinny_black: { name: '龐克窄管褲', price: 200, shop: 'tailorD', b: '#1e1e24', B: '#0e0e12' },
    cargo: { name: '工作短褲（綠）', price: 160, shop: 'tailorE', b: '#5a6a3a', B: '#3a4a24', style: 'shorts' },
    hakama: { name: '深藍袴', price: 240, shop: 'tailorF', b: '#2a2a4a', B: '#16162e' },
  });
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
    ushanka: ['...kkkkkk...', '..khhhhhhk..', '.kHHHHHHHHk.', 'kHHkkkkkkHHk', 'kHHddddddHHk'],
    earmuff: ['............', '...kkkkkk...', '.kkhkkkkhkk.', 'kHHkddddkHHk', 'kHHddddddHHk'],
    safari: ['....kkkk....', '...khhhhk...', '..khhhhhhk..', 'khhqqqqqqhhk', 'kkkkkkkkkkkk'],
    bandana: ['............', '...kkkkkk...', '..khhHhhhk..', '.khhhhhhhhkk', '.kHHHHHHHHkh'],
    kasa: ['.....kk.....', '...kkhhkk...', '.kkhhHhhhkk.', 'khhhhhhhhhhk', 'kkkkkkkkkkkk'],
    headband: ['............', '............', '...kkkkkk...', '..kddddddk..', '.khhhhHhhhkk'],
    mohawk: ['.....kk.....', '....kddk....', '....kddk....', '..kkkddkkk..', '.ksssddsssk.'],
    spiky: ['............', '..k.k..k.k..', '.kdkdkkdkdk.', '.kddddddddk.', '.kddddddddk.'],
    topknot: ['....kkkk....', '....kddk....', '...kkkkkk...', '..kddddddk..', '.kddddddddk.'],
    bun: ['...kk..kk...', '..kddkkddk..', '...kkkkkk...', '..kddddddk..', '.kddddddddk.'],
    helmet: ['....kkkk....', '..kkhhhhkk..', '.khhHHxhhhk.', 'khhhhhhhhhhk', 'kkkkkkkkkkkk'],
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
    ushanka: ['....kkkkkkkk....', '...khhhhhhhhk...', '..kHHHHHHHHHHk..', '.kHHkkkkkkkkHHk.', '.kHHddddddddHHk.'],
    earmuff: ['................', '....kkkkkkkk....', '..kkhkkkkkkhkk..', '.kHHkddddddkHHk.', '.kHHddddddddHHk.'],
    safari: ['.....kkkkkk.....', '....khhhhhhk....', '...khhhhhhhhk...', 'khhhqqqqqqqqhhhk', 'kkkkkkkkkkkkkkkk'],
    bandana: ['................', '....kkkkkkkk....', '...khhhHhhhhk...', '..khhhhhhhhhhkk.', '..kHHHHHHHHHHkhk'],
    kasa: ['.......kk.......', '.....kkhhkk.....', '...kkhhhHhhhkk..', '.kkhhhhhhhhhhhk.', 'kkkkkkkkkkkkkkkk'],
    headband: ['................', '................', '....kkkkkkkk....', '...kddddddddk...', '..khhhhhHhhhhkk.'],
    mohawk: ['.......kk.......', '......kddk......', '......kddk......', '....kkkddkkk....', '..kssssddssssk..'],
    spiky: ['................', '..k.k.k..k.k.k..', '.kdkdkdkkdkdkdk.', '..kddddddddddk..', '..kddddddddddk..'],
    topknot: ['......kkkk......', '......kddk......', '....kkkkkkkk....', '...kddddddddk...', '..kddddddddddk..'],
    bun: ['...kk......kk...', '..kddk....kddk..', '...kkkkkkkkkk...', '...kddddddddk...', '..kddddddddddk..'],
    helmet: ['.....kkkkkk.....', '...kkhhhhhhkk...', '..khhhHxxHhhhk..', '.khhhhhhhhhhhhk.', 'kkkkkkkkkkkkkkkk'],
  };
  const HAIR_TOP = { mohawk: 1, spiky: 1, topknot: 1, bun: 1 };   // 這些髮型頭頂有自己的形狀
  const hatKey = P => P.hat.style !== 'none' ? P.hat.style : P.hair.style === 'bald' ? 'bald' : HAIR_TOP[P.hair.style] ? P.hair.style : 'hair';
  const unBald = (rows, P) => P.hair.style === 'bald' ? rows.map(r => r.replace(/d/g, 's').replace(/D/g, 'S')) : rows;
  function face12(P) {   // 正面臉 4 列
    let r = ['.kssssssssk.', '.ksesssesSk.', '.ksrsssrsSk.', '..kssssSSk..'];
    if (P.hair.style === 'bangs') r[0] = '.kdddddddsk.';
    if (P.glasses.style === 'round') r[1] = set(r[1], { 2: 'G', 4: 'G', 5: 'G', 6: 'G', 8: 'G' });
    if (P.glasses.style === 'sun') r[1] = '.kqqqkqqqSk.';
    if (P.glasses.style === 'sunc') r[1] = '.kGGGkGGGSk.';
    if (P.glasses.style === 'goggles') r[1] = 'kkGGGGGGGGkk';
    if (P.glasses.style === 'patch') { r[1] = set(r[1], { 6: 'q', 7: 'q', 8: 'q' }); r[0] = set(r[0], { 4: 'q' }); }
    if (P.beard.style === 'mustache') r[2] = set(r[2], range(4, 6, 'M'));
    if (P.beard.style === 'full') { r[2] = '.kMMMMMMMMk.'; r[3] = '..kMMMMMMk..'; }
    if (P.beard.style === 'goatee') r[3] = set(r[3], { 5: 'M', 6: 'M' });
    if (P.beard.style === 'stubble') { r[2] = set(r[2], { 3: 'M', 8: 'M' }); r[3] = set(r[3], { 4: 'M', 6: 'M' }); }
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
    if (P.glasses.style === 'sunc') r[1] = '...kGGGkkGGGk...';
    if (P.glasses.style === 'goggles') r[1] = '..kkGGGGGGGGkk..';
    if (P.glasses.style === 'patch') { r[1] = set(r[1], { 9: 'q', 10: 'q', 11: 'q' }); r[0] = set(r[0], { 6: 'q' }); }
    if (P.beard.style === 'mustache') r[2] = set(r[2], range(6, 9, 'M'));
    if (P.beard.style === 'full') { r[2] = f('MMMMMMMM'); r[3] = '....kMMMMMMk....'; }
    if (P.beard.style === 'goatee') r[3] = set(r[3], { 7: 'M', 8: 'M' });
    if (P.beard.style === 'stubble') { r[2] = set(r[2], { 5: 'M', 10: 'M' }); r[3] = set(r[3], { 6: 'M', 9: 'M' }); }
    if (P.hair.style === 'long') r = r.map((x, i) => i < 3 ? set(x, { 2: 'k', 3: 'd', 12: 'd', 13: 'k' }) : set(x, { 3: 'k', 4: 'd', 11: 'd', 12: 'k' }));
    return r;
  }
  const back16 = P => unBald(['...kddddddddk...', '...kddddddddk...', '...kdddddddDk...', '....kdddddDk....'], P);
  function pattern(rows, P, y0) {   // 衣服花紋：條紋、圓點
    if (P.top.pattern === 'stripe') return rows.map((r, i) => (i + y0) % 2 ? r.replace(/y/g, 'z') : r);
    if (P.top.pattern === 'flame') return rows.map((r, i) => { const k = (i + 1) / rows.length; return r.split('').map((c, x) => c === 'y' && (k > .75 || (k > .5 && (x + i) % 2 === 0)) ? 'z' : c).join(''); });
    if (P.top.pattern === 'camo') return rows.map((r, i) => r.split('').map((c, x) => c === 'y' && (((x >> 1) * 5 + ((i + y0) >> 1) * 3 + ((x >> 1) * ((i + y0) >> 1))) % 4) < 2 ? 'z' : c).join(''));
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
      const R = ROD_LOOK[rod] || ROD_LOOK.bamboo, hx = x + (flip ? -5 : 5), hy = top + 12, len = R.len;
      for (let i = 0; i < len; i++) { g.fillStyle = R.node && i % 4 === 3 ? R.node : i < 3 ? R.grip : R.body; g.fillRect(hx + (flip ? -i : i) * .55 | 0, hy - i | 0, 1, 1); }
      if (R.tip) { g.fillStyle = R.tip; g.fillRect(hx + (flip ? -len : len) * .55 | 0, hy - len | 0, 1, 1); }
      g.fillStyle = R.reel; g.fillRect(hx + (flip ? -1 : 0), hy - 1, 2, 2);     // 捲線器
    };
    if (back) drawRod();
    g.drawImage(img, x - 6, top);
    if (!back) drawRod();
  }
  // 居民（NPC）：用任何外型組出地圖小人，走路動畫跟主角一樣
  const npcFrames = look => buildLook(look).person;
  function drawNPC(g, P, x, y, { back, flip, frame }) {
    const img = P[(back ? 'back' : 'front') + (flip ? 'Flip' : '')][frame || 0];
    g.fillStyle = 'rgba(0,0,0,.22)'; g.fillRect(x - 5, y - 1, 10, 2); g.drawImage(img, x - 6, y - 18);
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
    } else if (b.id === 'restaurant') {   // 柳河食堂：紅白雨遮、冒煙的鍋子招牌、門口的桌椅
      awning('#c8402a', '#fff4e4');
      sign(x0 + .7, (sx, sy) => { px(sx - 4, sy - 3, 9, 4, '#3a3a40'); px(sx - 3, sy - 2, 7, 2, '#6a6a72'); px(sx - 5, sy - 3, 1, 1, '#3a3a40'); px(sx + 5, sy - 3, 1, 1, '#3a3a40'); for (let i = 0; i < 2; i++) { const ph = (t * .8 + i / 2) % 1; px(sx - 2 + i * 3, sy - 5 - ph * 3 | 0, 1, 2, `rgba(255,255,255,${.8 * (1 - ph)})`); } });
      const [cx, cy] = P(xR + .45, yF + .35, 0); px(cx - 5, cy - 7, 11, 2, '#8a5a30'); px(cx - 1, cy - 5, 2, 5, '#6a4224'); px(cx - 7, cy - 4, 2, 4, '#b07a46'); px(cx + 6, cy - 4, 2, 4, '#b07a46'); px(cx - 2, cy - 9, 4, 2, '#f4f0e8'); px(cx - 1, cy - 10, 2, 1, '#e0806a');   // 桌上的一盤魚
      const [ox, oy] = P(x0 + w * .75, y0 + .5, hgt + 6); px(ox - 2, oy - 6, 4, 7, '#2a1e14'); px(ox - 1, oy - 5, 2, 6, '#a8564a'); for (let i = 0; i < 3; i++) { const ph = (t * .5 + i / 3) % 1; g.fillStyle = `rgba(240,240,240,${.6 * (1 - ph)})`; g.fillRect(ox - 1 + Math.sin(ph * 6 + i) * 2 | 0, oy - 8 - ph * 12 | 0, 3, 2); }   // 廚房煙囪
    } else if (b.id === 'museum') {   // 大河博物館：白色石柱、三角山牆、魚的旗幟
      for (let i = 0; i < 4; i++) { const u = x0 + .3 + i * (w - .6) / 3; const [bx, by] = P(u, yF + .05, 0), [tx, ty] = P(u, yF + .05, hgt - 2); px(bx - 2, ty, 4, by - ty, '#f4f0e8'); px(bx - 2, ty, 1, by - ty, '#d8d0c4'); px(bx - 3, ty - 1, 6, 2, '#e8e0d4'); px(bx - 3, by - 2, 6, 2, '#e8e0d4'); }
      const A = P(x0, yF, hgt), B2 = P(xR, yF, hgt), C = P(x0 + w / 2, yF, hgt + 9); quad([A, B2, C], '#e8e0d4'); line(A, C, '#b8b0a4'); line(B2, C, '#b8b0a4');
      const [fx, fy] = P(x0 + w / 2, yF, hgt + 3); px(fx - 4, fy - 2, 6, 3, '#3a7ad0'); px(fx + 2, fy - 3, 2, 5, '#3a7ad0'); px(fx - 3, fy - 1, 1, 1, '#ffffff');   // 山牆上的魚徽章
      for (const u of [x0 - .1, xR + .1]) { const [gx, gy] = P(u, yF + .2, 0); px(gx, gy - 20, 1, 20, '#5a3a1e'); px(gx + 1, gy - 20, 6, 8, '#c8402a'); px(gx + 2, gy - 17, 4, 2, '#ffd040'); }   // 兩邊的旗子
    } else if (/^house/.test(b.id)) {   // 柳河鎮的民房：窗台花箱、晒魚架
      const [fx, fy] = P(x0 + .5, yF, 0); px(fx - 3, fy - 7, 7, 2, '#6a4224'); for (let i = 0; i < 3; i++) px(fx - 2 + i * 2, fy - 8, 1, 1, ['#ff8aa0', '#fff3a0', '#b0c8ff'][(i + b.x) % 3]);
      const [rx, ry] = P(xR + .35, yF + .2, 0); px(rx - 5, ry - 12, 1, 12, '#5a3a1e'); px(rx + 5, ry - 12, 1, 12, '#5a3a1e'); px(rx - 5, ry - 12, 11, 1, '#5a3a1e'); for (let i = 0; i < 3; i++) { px(rx - 3 + i * 3, ry - 11, 1, 4, '#8aa0a8'); px(rx - 4 + i * 3, ry - 8, 3, 1, '#8aa0a8'); }   // 晒魚架
    } else if (b.id === 'tailorC') {   // 雪國毛帽店：藍白雨遮、毛帽招牌、屋頂積雪、門口的雪人
      awning('#3a6ac0', '#f4f8ff');
      sign(x0 + .7, (sx, sy) => { px(sx - 3, sy - 4, 7, 3, '#7a5034'); px(sx - 4, sy - 2, 2, 3, '#efe6d6'); px(sx + 3, sy - 2, 2, 3, '#efe6d6'); px(sx - 2, sy - 5, 5, 1, '#efe6d6'); });
      for (let i = 0; i < 5; i++) { const [sx, sy] = P(x0 + .2 + i * (w - .4) / 4, yF - h / 2, hgt + 8); px(sx - 3, sy - 1, 7, 2, '#ffffff'); }
      const [mx, my] = P(xR + .35, yF + .35, 0); px(mx - 3, my - 6, 7, 6, '#ffffff'); px(mx - 2, my - 10, 5, 4, '#ffffff'); px(mx - 1, my - 9, 1, 1, '#2a1e14'); px(mx + 1, my - 9, 1, 1, '#2a1e14'); px(mx, my - 8, 2, 1, '#ff8a2a'); px(mx - 3, my - 7, 7, 1, '#c83a3a');
    } else if (b.id === 'tailorD') {   // 熔岩龐克屋：黑紅雨遮、閃電招牌、門口的火盆
      awning('#2a2226', '#e03a2a');
      sign(x0 + .7, (sx, sy) => { px(sx, sy - 5, 2, 2, '#ffd040'); px(sx - 1, sy - 3, 2, 1, '#ffd040'); px(sx - 2, sy - 2, 4, 1, '#ffd040'); px(sx - 1, sy - 1, 1, 1, '#ffd040'); });
      const [fx, fy] = P(xR + .35, yF + .35, 0); px(fx - 3, fy - 4, 7, 4, '#2a1e14'); px(fx - 2, fy - 3, 5, 2, '#5a4a48');
      for (let i = 0; i < 3; i++) { const f = Math.sin(t * 9 + i * 2) * 1.5; px(fx - 2 + i * 2, fy - 7 - f, 1, 3 + f, i === 1 ? '#ffd040' : '#ff6a2a'); }
    } else if (b.id === 'tailorE') {   // 叢林探險屋：綠褐雨遮、探險帽招牌、藤蔓、門口的木箱
      awning('#4a6a2a', '#d8c898');
      sign(x0 + .7, (sx, sy) => { px(sx - 4, sy - 2, 9, 1, '#a8946a'); px(sx - 2, sy - 4, 5, 2, '#c8b080'); px(sx - 2, sy - 3, 5, 1, '#4a3a20'); });
      for (let i = 0; i < 6; i++) { const [vx, vy] = P(xR, yF - .3 - i * .25, hgt - 1 - i * 1.6); px(vx - 1, vy, 2, 2, i % 2 ? '#3a8a3a' : '#5ab05a'); }
      const [cx, cy] = P(xR + .35, yF + .35, 0); px(cx - 4, cy - 6, 9, 6, '#2a1e14'); px(cx - 3, cy - 5, 7, 4, '#a8784a'); px(cx - 3, cy - 3, 7, 1, '#6a4224');
    } else if (b.id === 'tailorF') {   // 河畔和風屋：紅色暖簾、燈籠、門口的竹子
      const n = 4, a0 = x0 + .2, a1 = x0 + w * .6;
      for (let i = 0; i < n; i++) { const u0 = a0 + (a1 - a0) * i / n, u1 = a0 + (a1 - a0) * (i + .85) / n; quad([P(u0, yF, hgt - 3), P(u1, yF, hgt - 3), P(u1, yF, hgt - 9), P(u0, yF, hgt - 9)], '#b8302a'); }
      { const [cx, cy] = P((a0 + a1) / 2, yF, hgt - 6); px(cx - 1, cy - 1, 3, 2, '#f4f0e8'); }
      const [lx, ly] = P(xR - .3, yF + .1, hgt - 2); px(lx, ly - 2, 1, 2, '#2a1e14'); px(lx - 2, ly, 5, 6, '#2a1e14'); px(lx - 1, ly + 1, 3, 4, '#ff6a4a'); px(lx - 1, ly + 2, 3, 1, '#ffd040');
      const [bx, by] = P(xR + .35, yF + .35, 0); for (let i = 0; i < 3; i++) { px(bx - 3 + i * 3, by - 14 + i * 2, 1, 14 - i * 2, '#5a9a3a'); px(bx - 3 + i * 3, by - 9 + i, 1, 1, '#3a6a24'); px(bx - 2 + i * 3, by - 13 + i * 2, 2, 1, '#7cc04f'); }
    } else if (b.id === 'gyotaku') {   // 魚拓工坊：深色暖簾、掛在牆上的魚拓、門口的墨缸
      sign(x0 + .7, (sx, sy) => { px(sx - 4, sy - 4, 8, 4, '#f4ecd8'); px(sx - 3, sy - 3, 5, 2, '#1a1612'); px(sx + 2, sy - 4, 1, 4, '#1a1612'); });
      const n = 4, a0 = x0 + .2, a1 = x0 + w * .55;   // 暖簾（門口的布簾）
      for (let i = 0; i < n; i++) { const u0 = a0 + (a1 - a0) * i / n, u1 = a0 + (a1 - a0) * (i + .85) / n; quad([P(u0, yF, hgt - 3), P(u1, yF, hgt - 3), P(u1, yF, hgt - 9), P(u0, yF, hgt - 9)], '#2a3a5a'); }
      { const [cx, cy] = P((a0 + a1) / 2, yF, hgt - 6); px(cx - 1, cy - 1, 3, 2, '#f4ecd8'); }
      const [fx, fy] = P(xR, yF - .9, hgt - 4); px(fx - 4, fy - 6, 7, 9, '#5a3a20'); px(fx - 3, fy - 5, 5, 7, '#f4ecd8'); px(fx - 2, fy - 3, 3, 2, '#1a1612');   // 牆上的魚拓
      const [jx, jy] = P(x0 + w * .78, yF + .4, 0); px(jx - 3, jy - 5, 7, 5, '#2a1e14'); px(jx - 2, jy - 6, 5, 2, '#1a1612');   // 墨缸
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

  // ════════ 釣竿造型（依 RODS 的 id）════════
  // body 竿身、grip 握把、node 竹節／纏線、reel 捲線器、tip 竿尖、w 粗細、len 地圖小人竿長、glow 傳說光芒
  const ROD_LOOK = {
    bamboo: { name: '竹竿', body: '#c8a050', grip: '#8a6a2a', node: '#7a5a20', reel: '#c8b090', w: .8, len: 12 },
    carbon: { name: '碳纖竿', body: '#2a2a32', grip: '#c8a070', node: '#e03a2a', reel: '#c0c4cc', tip: '#e03a2a', w: .8, len: 13, wrap: '#e03a2a' },
    sea: { name: '遠洋海釣竿', body: '#f4f0e8', grip: '#2a3a5a', node: '#2a5aa0', reel: '#ffd040', tip: '#ff6a2a', w: 1.1, len: 13, wrap: '#2a5aa0', bigReel: true },
    legend: { name: '傳說之竿', body: '#ffd040', grip: '#7a2a8a', node: '#fff6b0', reel: '#b06ad0', tip: '#7af0ff', w: 1.1, len: 14, wrap: '#b06ad0', bigReel: true, glow: true },
  };
  // 第三人稱的釣竿：從手 (hx,hy) 彎到竿尖 (tx,ty)，s＝像素倍率
  function drawRod(g, id, hx, hy, tx, ty, s, t = 0) {
    const R = ROD_LOOK[id] || ROD_LOOK.bamboo, cx = hx + (tx - hx) * .5, cy = hy + (ty - hy) * .3;
    const pt = k => [(1 - k) * (1 - k) * hx + 2 * (1 - k) * k * cx + k * k * tx, (1 - k) * (1 - k) * hy + 2 * (1 - k) * k * cy + k * k * ty];
    const seg = (a, b, col, w) => { g.strokeStyle = col; g.lineWidth = w; g.beginPath(); const [x0, y0] = pt(a); g.moveTo(x0, y0); for (let k = a; k <= b + 1e-6; k += .05) { const [x, y] = pt(Math.min(k, b)); g.lineTo(x, y); } g.stroke(); };
    const W = Math.max(1, s * R.w);
    if (R.glow) { g.globalAlpha = .25 + Math.sin(t * 3) * .1; seg(0, 1, '#fff2a0', W * 3.2); g.globalAlpha = 1; }
    seg(0, 1, '#2a1e14', W + 2);                 // 描邊
    seg(0, .55, R.body, W * 1.15); seg(.55, 1, R.body, Math.max(1, W * .8));   // 竿身（前段比較細）
    seg(-.05, .14, R.grip, W * 1.7);             // 握把
    if (R.node) for (let k = .25; k < .95; k += R.wrap ? .17 : .12) { const [x, y] = pt(k); g.fillStyle = R.node; g.fillRect(x - W * .9, y - W * .5, W * 1.8, Math.max(1, W)); }   // 竹節／導線環
    if (R.tip) { const [x, y] = pt(1); g.fillStyle = R.tip; g.fillRect(x - W, y - W, W * 2, W * 2); }
    const [rx, ry] = pt(.12), rr = W * (R.bigReel ? 2.4 : 1.8);   // 捲線器
    g.fillStyle = '#2a1e14'; g.fillRect(rx - rr - 1, ry, rr * 2 + 2, rr * 1.6 + 1);
    g.fillStyle = R.reel; g.fillRect(rx - rr, ry + 1, rr * 2, rr * 1.6 - 1);
    g.fillStyle = 'rgba(255,255,255,.5)'; g.fillRect(rx - rr + 1, ry + 1, Math.max(1, rr * .5), Math.max(1, rr * .5));
    if (R.glow) { g.fillStyle = '#fff6b0'; for (let i = 0; i < 3; i++) { const k = ((t * .4 + i / 3) % 1), [x, y] = pt(.2 + k * .8); if (Math.sin(t * 9 + i * 2) > 0) { g.fillRect(x - W, y, W * 3, Math.max(1, W * .6)); g.fillRect(x, y - W, Math.max(1, W * .6), W * 3); } } }
    return pt(1);
  }
  // 商店用的小圖示：斜放一支竿
  function drawRodIcon(cvs, id) {
    const g = cvs.getContext('2d'); g.clearRect(0, 0, cvs.width, cvs.height);
    drawRod(g, id, cvs.width * .15, cvs.height * .88, cvs.width * .9, cvs.height * .1, Math.max(1.5, cvs.height / 22), 1);
  }

  return { npcFrames, drawNPC, ROD_LOOK, drawRod, drawRodIcon, PAL, sprite, flipped, shade: shadeHex, drawPerson, drawThirdPerson, drawTrophy, drawBobber, drawBoat, decorateBuilding, WARDROBE, SLOT_NAME, DEFAULT_LOOK, setLook, previewFront };
})();
