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

  // ════════ 地圖視角的主角（12×19，腳底在最下面一列）════════
  const HEAD_FRONT = [
    '....kkkk....',
    '..kkHHHHkk..',
    '.khhHHhhhhk.',
    'khhhhhhhhhhk',
    '.kkkkkkkkkk.',
    '.kssssssssk.',
    '.ksesssesSk.',
    '.ksrsssrsSk.',
    '..kssssSSk..',
  ];
  const HEAD_BACK = [
    '....kkkk....',
    '..kkHHHHkk..',
    '.khhHHhhhhk.',
    'khhhhhhhhhhk',
    '.kkkkkkkkkk.',
    '.kddddddddk.',
    '.kddddddddk.',
    '.kdddddddDk.',
    '..kddddDDk..',
  ];
  const BODY_FRONT = [
    '.kyyykkyyyk.',
    'kLyyyyyyyyYk',
    'kLyyywyyyyYk',
    'ksyyyyyyyYSk',
    '.kyyywyyyYk.',
    '.kYYYYYYYYk.',
  ];
  const BODY_BACK = [
    '.kyyyyyyyyk.',
    'kLyyyyyyyyYk',
    'kLyyyykyyyYk',
    'ksyyyykyyYSk',
    '.kyyyykyyYk.',
    '.kYYYYYYYYk.',
  ];
  const LEGS = [
    ['..kbbkkbbk..', '..kbbk.kbbk.', '..kBBk.kBBk.', '..kkkk.kkkk.'],   // 站立
    ['..kbbkkbbk..', '.kbbk...kbbk', '.kBBk...kBBk', '.kkkk...kkkk'],   // 跨步
    ['..kbbkkbbk..', '...kbbbbk...', '...kBBBBk...', '...kkkkkk...'],   // 併腳
  ];
  const person = {};
  for (const dir of ['front', 'back']) {
    const head = dir === 'front' ? HEAD_FRONT : HEAD_BACK, body = dir === 'front' ? BODY_FRONT : BODY_BACK;
    person[dir] = LEGS.map(l => sprite([...head, ...body, ...l]));
    person[dir + 'Flip'] = person[dir].map(flipped);
    person[dir + 'Sit'] = sprite([...head, ...body]);
    person[dir + 'SitFlip'] = flipped(person[dir + 'Sit']);
  }

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

  // ════════ 第三人稱背影（16×30 單位，依姿勢換手臂）════════
  const THIRD_BASE = [
    '....kkkkkkkk....',
    '...kHHHHHHHHk...',
    '..khhHHHHHHhhk..',
    '.khhhhhhhhhhhhk.',
    'kkkkkkkkkkkkkkkk',
    '...kddddddddk...',
    '...kddddddddk...',
    '...kdddddddDk...',
    '....kdddddDk....',
    '..kkLyyyyyyYkk..',
    '.kLLyyyyyyyyYYk.',
    'kLLyyyyyyyyyyYYk',
    'kLyyyyykyyyyyyYk',
    'kLyyyyykyyyyyyYk',
    'kLyyyyykyyyyyyYk',
    'kLyyyyykyyyyyyYk',
    'kLyyyyykyyyyyYYk',
    'kyyyyyykyyyyyYYk',
    'kYyyyyykyyyyyYYk',
    'kYYYYYYYYYYYYYYk',
    '.kbbbbbbbbbbbbk.',
    '.kbbbbbkkbbbbbk.',
    '.kbbbbk..kbbbbk.',
    '.kbbbbk..kbbbbk.',
    '.kBBBBk..kBBBBk.',
    '.kkkkkk..kkkkkk.',
  ];
  // 手臂：[x,y,w,h,色] 疊在 base 上（單位座標），hand＝握竿的手相對 sprite 左上的位置
  const ARMS = {
    idle: { parts: [[13, 10, 3, 8, 'Y'], [14, 11, 1, 6, 'y'], [13, 17, 3, 2, 's']], hand: [14.5, 18] },
    cast: { parts: [[13, 2, 3, 9, 'Y'], [14, 3, 1, 7, 'y'], [13, 1, 3, 2, 's']], hand: [14.5, 1.5] },
    pull: { parts: [[12, 7, 4, 4, 'Y'], [0, 7, 4, 4, 'L'], [13, 6, 3, 2, 's'], [0, 6, 3, 2, 's']], hand: [14.5, 6.5] },
  };
  const third = {};
  for (const [pose, def] of Object.entries(ARMS)) {
    const c = sprite(THIRD_BASE), g = c.getContext('2d');
    for (const [x, y, w, h, col] of def.parts) {
      g.fillStyle = PAL.k; g.fillRect(x, y, w, h);
      g.fillStyle = PAL[col]; g.fillRect(x + (w > 2 ? 1 : 0), y + (h > 2 ? 1 : 0), Math.max(1, w - (w > 2 ? 2 : 0)), Math.max(1, h - (h > 2 ? 2 : 0)));
    }
    third[pose] = { img: c, hand: def.hand };
  }
  // 畫背影：bx,by＝腳底中心（螢幕像素），s＝放大倍率；回傳手的位置
  function drawThirdPerson(g, bx, by, s, pose) {
    const p = third[pose] || third.idle, w = 16 * s, h = 26 * s;
    const left = bx - 8 * s, top = by - 30 * s;
    g.drawImage(p.img, left, top, w, h);
    return [left + p.hand[0] * s, top + p.hand[1] * s];
  }

  // ════════ 釣到魚：正面雙手把魚捧高（24×34 單位）════════
  const TROPHY = (() => {
    const W = 16, face = (mid) => '...k' + mid + 'k...';
    const base = THIRD_BASE.map((r, i) => {
      if (i === 5) return face('ssssssss');
      if (i === 6) return face('sesssses');
      if (i === 7) return face('srssssrs');
      if (i === 8) return '....ksssSSSk....';
      if (i >= 12 && i <= 18 && r[7] === 'k') return r.slice(0, 7) + (i === 13 || i === 16 ? 'w' : 'y') + r.slice(8);
      return r;
    });
    base.forEach(r => { if (r.length !== W) throw new Error('trophy row ' + r); });
    const body = sprite(base), c = document.createElement('canvas'); c.width = 24; c.height = 34;
    const g = c.getContext('2d'); g.drawImage(body, 4, 4);
    // 兩隻手從肩膀舉到頭頂上方
    for (const x of [1, 19]) {
      g.fillStyle = PAL.k; g.fillRect(x, 3, 4, 13);
      g.fillStyle = x === 1 ? PAL.L : PAL.Y; g.fillRect(x + 1, 4, 2, 11);
      g.fillStyle = PAL.k; g.fillRect(x, 0, 4, 4);
      g.fillStyle = PAL.s; g.fillRect(x + 1, 1, 2, 2);
    }
    // 開心的嘴巴
    g.fillStyle = PAL.k; g.fillRect(10, 12, 4, 1); g.fillStyle = '#c84a3a'; g.fillRect(11, 13, 2, 1);
    return c;
  })();
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
    } else if (b.id === 'board') {
      awning('#9a5ab0', '#f6eefa');
      sign(x0 + .7, (sx, sy) => { px(sx - 4, sy - 3, 4, 4, '#3a78c0'); px(sx, sy - 3, 4, 4, '#d0403a'); px(sx - 1, sy - 3, 1, 4, '#2a1e14'); });
      // 旗子
      const [qx, qy] = P(xR - .1, y0 + .1, hgt + 4); px(qx, qy - 12, 1, 12, '#3a3a40'); px(qx + 1, qy - 12 + Math.round(Math.sin(t * 5)), 5, 3, '#ffd040');
    }
  }

  return { PAL, sprite, flipped, shade: shadeHex, drawPerson, drawThirdPerson, drawTrophy, drawBobber, drawBoat, decorateBuilding };
})();
