// ════════════════ 背景音樂（原創曲，程式即時合成，不用音檔）════════════════
// 用法：BGM.start(getAudioContext)、BGM.stop()、BGM.onTrack = name => {...}、BGM.chooser = cur => 下一首的索引、BGM.play(i)
// 想加新歌：在 TRACKS 加一首。旋律每小節 8 個八分音符：音名（C5、F#4、Bb4）、「-」延長、「.」休止。
// 和弦可寫 C、Am、G7、Fmaj7、Dm7、Csus4。moods＝適合的場合（遊戲依時段、天氣、海域自動挑歌）。
// lead 樂器：flute 長笛、bell 鐘琴、pluck 撥弦、steel 鋼鼓、musicbox 音樂盒、marimba 木琴、koto 古箏、ocarina 陶笛、piano 鋼琴
(function () {
  'use strict';
  const TRACKS = [
    {
      name: '港口的午後', moods: ['day', 'harbor'], bpm: 84, swing: .14, lead: 'flute', perc: true,
      chords: ['C', 'Am', 'F', 'G', 'C', 'Em', 'F', 'G'],
      melody: [
        'E5 - G5 - E5 D5 C5 -', 'A4 - C5 - E5 - . .', 'F5 - E5 D5 C5 - A4 -', 'G4 - B4 D5 G5 - - -',
        'E5 - G5 - C6 - B5 A5', 'G5 - E5 - B4 - . .', 'A4 C5 F5 - E5 - D5 C5', 'D5 - - - C5 - - -',
      ],
    },
    {
      name: '海風輕輕吹', moods: ['day', 'sea'], bpm: 76, swing: 0, lead: 'flute', perc: false,
      chords: ['F', 'Dm', 'Bb', 'C', 'F', 'Am', 'Bb', 'C'],
      melody: [
        'A4 - C5 - F5 - - -', 'D5 - F5 E5 D5 - A4 -', 'Bb4 - D5 - F5 - D5 -', 'C5 - - - G4 - - -',
        'A4 - C5 - F5 - A5 -', 'G5 - E5 - C5 - E5 -', 'F5 - D5 - Bb4 - D5 C5', 'C5 - - - - - . .',
      ],
    },
    {
      name: '夜釣的星空', moods: ['night', 'sea'], bpm: 66, swing: 0, lead: 'bell', perc: false,
      chords: ['Am', 'F', 'C', 'G', 'Am', 'F', 'G', 'Am'],
      melody: [
        'E5 - - - A5 - G5 E5', 'F5 - - - C5 - - -', 'E5 - G5 - C6 - - -', 'B5 - G5 - D5 - - -',
        'E5 - - - A4 - C5 E5', 'D5 - C5 - A4 - - -', 'B4 - D5 - G5 - E5 D5', 'E5 - - - - - . .',
      ],
    },
    {
      name: '溪谷晨光', moods: ['dawn', 'river'], bpm: 92, swing: .1, lead: 'pluck', perc: true,
      chords: ['G', 'D', 'Em', 'C', 'G', 'D', 'C', 'D'],
      melody: [
        'B4 D5 G5 - B5 - A5 G5', 'F#5 - A5 - D5 - - -', 'E5 G5 B5 - G5 - E5 -', 'C5 - E5 - G5 - - -',
        'D5 - G5 - B5 A5 G5 -', 'A5 - F#5 - D5 - E5 F#5', 'G5 - E5 - C5 - E5 -', 'D5 - - - - - . .',
      ],
    },
    // ── 2026-10-29 新增九首 ──
    {
      name: '珊瑚礁的泡泡', moods: ['day', 'reef'], bpm: 100, swing: .12, lead: 'steel', perc: true,
      chords: ['D', 'Bm', 'G', 'A', 'D', 'Bm', 'Em', 'D'],
      melody: [
        'F#5 - A5 - F#5 E5 D5 -', 'D5 - F#5 - B5 - A5 -', 'G5 - B5 - D6 - B5 G5', 'A5 - - - E5 - . .',
        'F#5 A5 F#5 - D5 - E5 F#5', 'B4 - D5 - F#5 - E5 D5', 'E5 - G5 - B5 - A5 G5', 'A5 - - - D5 - - -',
      ],
    },
    {
      name: '雪原的小木屋', moods: ['cold', 'night'], bpm: 72, swing: 0, lead: 'musicbox', perc: false,
      chords: ['Em', 'C', 'G', 'D', 'Em', 'C', 'D', 'Em'],
      melody: [
        'B5 - G5 - E5 - G5 -', 'E5 - G5 - C6 - B5 -', 'D6 - B5 - G5 - B5 -', 'A5 - F#5 - D5 - - -',
        'B5 - G5 - E5 - B4 -', 'C5 - E5 - G5 - E5 -', 'F#5 - A5 - D6 - C6 -', 'B5 - - - - - . .',
      ],
    },
    {
      name: '火山的心跳', moods: ['volcano'], bpm: 96, swing: 0, lead: 'marimba', perc: true,
      chords: ['Dm', 'Bb', 'C', 'Am', 'Dm', 'Bb', 'A', 'Dm'],
      melody: [
        'D5 . D5 F5 A5 - G5 F5', 'D5 - . . D5 F5 G5 -', 'E5 . E5 G5 C6 - Bb5 A5', 'G5 - . . E5 - C5 -',
        'D5 . D5 F5 A5 - C6 A5', 'Bb5 - A5 G5 F5 - D5 -', 'E5 - G5 - C#5 - E5 -', 'D5 - - - . . . .',
      ],
    },
    {
      name: '大河悠悠', moods: ['river', 'day'], bpm: 70, swing: 0, lead: 'koto', perc: false,
      chords: ['G', 'Em', 'C', 'D', 'G', 'Em', 'C', 'G'],
      melody: [
        'D5 - E5 - G5 - - -', 'A5 - G5 - E5 - D5 -', 'E5 - G5 A5 B5 - A5 G5', 'A5 - - - - - . .',
        'B5 - A5 - G5 - E5 -', 'D5 - E5 - G5 - A5 -', 'B5 - A5 G5 E5 - D5 E5', 'G5 - - - - - . .',
      ],
    },
    {
      name: '暴風雨前夕', moods: ['storm'], bpm: 88, swing: 0, lead: 'pluck', perc: true,
      chords: ['Am', 'F', 'Dm', 'E', 'Am', 'F', 'E', 'Am'],
      melody: [
        'A4 - C5 - E5 - D5 C5', 'F4 - A4 - C5 - - -', 'D5 - F5 - A5 - G5 F5', 'E5 - - - G#4 - B4 -',
        'A4 - C5 - E5 - A5 -', 'F5 - E5 - C5 - A4 -', 'D5 - C5 - B4 - G#4 -', 'A4 - - - - - . .',
      ],
    },
    {
      name: '黃昏回港', moods: ['dusk', 'harbor'], bpm: 76, swing: .08, lead: 'ocarina', perc: false,
      chords: ['Bb', 'Gm', 'Eb', 'F', 'Bb', 'Gm', 'F', 'Bb'],
      melody: [
        'F5 - D5 - Bb4 - D5 -', 'G5 - - - D5 - Bb4 -', 'Eb5 - G5 - Bb5 - G5 -', 'F5 - - - C5 - . .',
        'D5 - F5 - Bb5 - A5 -', 'G5 - D5 - Bb4 - G4 -', 'C5 - Eb5 - G5 - F5 Eb5', 'D5 - - - - - . .',
      ],
    },
    {
      name: '金鱗島的慶典', moods: ['festival', 'day'], bpm: 112, swing: .1, lead: 'marimba', perc: true,
      chords: ['C', 'F', 'G', 'C', 'Am', 'Dm', 'G7', 'C'],
      melody: [
        'C5 E5 G5 E5 C6 - G5 -', 'A5 - F5 - C5 - F5 A5', 'G5 - B5 - D6 - B5 G5', 'C6 - G5 - E5 - . .',
        'A5 - C6 - A5 - E5 -', 'F5 - A5 - D5 - F5 -', 'G5 - F5 - E5 - D5 -', 'C5 - E5 G5 C6 - - -',
      ],
    },
    {
      name: '紅樹林的午睡', moods: ['mangrove', 'day'], bpm: 66, swing: .12, lead: 'piano', perc: false,
      chords: ['Fmaj7', 'Em7', 'Dm7', 'Cmaj7', 'Fmaj7', 'Em7', 'Dm7', 'G7'],
      melody: [
        'A5 - - - G5 - E5 -', 'G5 - - - D5 - B4 -', 'F5 - A5 - C6 - A5 -', 'G5 - - - E5 - . .',
        'A5 - C6 - E6 - C6 -', 'B5 - G5 - E5 - D5 -', 'F5 - E5 - D5 - C5 -', 'D5 - - - - - . .',
      ],
    },
    {
      name: '深海的月光', moods: ['night', 'deep'], bpm: 60, swing: 0, lead: 'bell', perc: false,
      chords: ['Cm', 'Ab', 'Eb', 'Bb', 'Cm', 'Ab', 'G', 'Cm'],
      melody: [
        'G5 - - - Eb5 - C5 -', 'C5 - Eb5 - Ab5 - G5 -', 'G5 - - - Bb5 - Eb5 -', 'D5 - - - F5 - Bb4 -',
        'C5 - Eb5 - G5 - C6 -', 'Ab5 - G5 - F5 - Eb5 -', 'D5 - F5 - G5 - - -', 'C5 - - - - - . .',
      ],
    },
  ];
  const LOOPS = 2;   // 每首播兩遍再換下一首

  const SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const midi = n => { const m = /^([A-G])([#b]?)(\d)$/.exec(n); return 12 * (+m[3] + 1) + SEMI[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0); };
  const freq = m => 440 * Math.pow(2, (m - 69) / 12);
  const CHORD = { '': [0, 4, 7], m: [0, 3, 7], '7': [0, 4, 7, 10], maj7: [0, 4, 7, 11], m7: [0, 3, 7, 10], sus4: [0, 5, 7] };
  function chordNotes(name) {
    const m = /^([A-G][#b]?)(maj7|m7|sus4|m|7)?$/.exec(name), root = midi(m[1] + '3');
    return { root, tones: CHORD[m[2] || ''].map(i => root + i) };
  }
  // 把旋律字串轉成 [{ step, len, midi }]
  function parse(tr) {
    const notes = [], toks = tr.melody.join(' ').trim().split(/\s+/);
    toks.forEach((tk, i) => {
      if (tk === '-') { if (notes.length && notes[notes.length - 1].open) notes[notes.length - 1].len++; return; }
      if (notes.length) notes[notes.length - 1].open = false;
      if (tk === '.') return;
      notes.push({ step: i, len: 1, midi: midi(tk), open: true });
    });
    tr.notes = notes; tr.steps = toks.length;
  }
  TRACKS.forEach(parse);

  let ctx = null, out = null, timer = 0, ti = 0, loop = 0, step = 0, nextT = 0, noiseBuf = null, playing = false;
  const BGM = { tracks: TRACKS, onTrack: null, volume: .7 };

  function build(a) {
    out = a.createGain(); out.gain.value = 0;
    const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600;
    // 簡單回音，讓聲音更柔
    const dl = a.createDelay(1), fb = a.createGain(), wet = a.createGain();
    dl.delayTime.value = .32; fb.gain.value = .32; wet.gain.value = .28;
    out.connect(lp); lp.connect(a.destination); lp.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(wet); wet.connect(a.destination);
    noiseBuf = a.createBuffer(1, a.sampleRate * .2, a.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  function env(g, t, a, peak, dec) { g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + dec); }
  function voice(type, f, t, a, peak, dec) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = f; env(g, t, a, peak, dec);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + a + dec + .05);
  }
  function lead(kind, m, t, dur) {
    const f = freq(m);
    if (kind === 'bell') { voice('sine', f, t, .005, .16, dur * 2.2 + .6); voice('sine', f * 2, t, .005, .05, .5); }
    else if (kind === 'pluck') { voice('triangle', f, t, .005, .14, Math.min(.9, dur + .25)); voice('sine', f * 2, t, .005, .03, .25); }
    else if (kind === 'steel') { voice('sine', f, t, .004, .13, dur + .35); voice('sine', f * 2.01, t, .004, .05, .3); voice('sine', f * 3.98, t, .004, .02, .15); }   // 鋼鼓
    else if (kind === 'musicbox') { voice('sine', f * 2, t, .002, .1, .9); voice('sine', f * 4, t, .002, .025, .35); }   // 音樂盒（高八度、叮叮的）
    else if (kind === 'marimba') { voice('sine', f, t, .003, .17, .35); voice('sine', f * 4, t, .002, .04, .08); }    // 木琴
    else if (kind === 'koto') { voice('triangle', f, t, .003, .13, Math.min(1.4, dur + .6)); voice('sawtooth', f, t, .003, .015, .25); }   // 古箏
    else if (kind === 'ocarina') { voice('sine', f, t, .07, .13, dur + .12); voice('triangle', f * 2, t, .08, .015, dur + .1); }   // 陶笛
    else if (kind === 'piano') { voice('triangle', f, t, .004, .12, dur * 1.6 + .5); voice('sine', f * 2, t, .004, .04, .6); voice('sine', f / 2, t, .004, .03, dur + .4); }
    else { voice('triangle', f, t, .05, .11, dur + .15); voice('sine', f / 2, t, .08, .035, dur + .2); }
  }
  function shaker(t, v) {
    const s = ctx.createBufferSource(), hp = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; hp.type = 'highpass'; hp.frequency.value = 6000; env(g, t, .004, v, .06);
    s.connect(hp); hp.connect(g); g.connect(out); s.start(t); s.stop(t + .1);
  }
  function schedule() {
    if (!playing || !ctx) return;
    if (ctx.state !== 'running') { nextT = ctx.currentTime + .1; return; }
    if (nextT < ctx.currentTime) nextT = ctx.currentTime + .05;
    while (nextT < ctx.currentTime + .5) {
      const tr = TRACKS[ti], e8 = 60 / tr.bpm / 2;
      const t = nextT + (step % 2 ? tr.swing * e8 : 0), bar = Math.floor(step / 8), inBar = step % 8;
      if (step === 0 && loop === 0 && BGM.onTrack && !BGM._announced) BGM.onTrack(tr.name);
      BGM._announced = false;
      const ch = chordNotes(tr.chords[bar % tr.chords.length]);
      if (inBar === 0) for (const m of ch.tones) voice('sine', freq(m + 12), t, .35, .022, e8 * 8);   // 和弦鋪底
      if (inBar === 0 || inBar === 4) voice('sine', freq(ch.root - 12), t, .02, .11, e8 * 3.5);       // 低音
      if (inBar === 6) voice('sine', freq(ch.root - 12 + 7), t, .02, .06, e8 * 1.5);
      if (tr.perc && inBar % 2 === 1) shaker(t, inBar === 3 || inBar === 7 ? .035 : .02);
      for (const n of tr.notes) if (n.step === step) lead(tr.lead, n.midi, t, n.len * e8);
      nextT += e8; step++;
      if (step >= tr.steps) { step = 0; if (++loop >= LOOPS) { loop = 0; ti = BGM.chooser ? BGM.chooser(ti) : (ti + 1) % TRACKS.length; nextT += e8 * 4; } }   // 換歌前留一小段空白
    }
  }
  BGM.start = function (getCtx) {
    const a = getCtx(); if (!a) return;
    if (ctx !== a) { ctx = a; build(a); nextT = 0; step = 0; loop = 0; playing = false; }   // 換了新的聲音環境（例如 iPhone 把舊的關掉）就重新淡入
    if (playing) return;
    playing = true; nextT = ctx.currentTime + .15;
    out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setValueAtTime(.0001, ctx.currentTime); out.gain.exponentialRampToValueAtTime(BGM.volume, ctx.currentTime + 1.5);
    clearInterval(timer); timer = setInterval(schedule, 100); schedule();
  };
  BGM.stop = function () {
    if (!playing) return; playing = false; clearInterval(timer);
    if (ctx && out) { out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setValueAtTime(Math.max(.0001, out.gain.value), ctx.currentTime); out.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + .6); }
  };
  // 播音效時把音樂先壓小聲，secs 秒後慢慢回來
  BGM.duck = function (secs) {
    if (!playing || !ctx || !out) return; const n = ctx.currentTime;
    out.gain.cancelScheduledValues(n); out.gain.setValueAtTime(Math.max(.0001, out.gain.value), n);
    out.gain.exponentialRampToValueAtTime(.06, n + .08); out.gain.setValueAtTime(.06, n + secs); out.gain.exponentialRampToValueAtTime(BGM.volume, n + secs + 1.2);
  };
  BGM.next = function () { ti = (ti + 1) % TRACKS.length; step = 0; loop = 0; if (ctx) nextT = ctx.currentTime + .2; };
  // 馬上換到第 i 首（先淡出再從頭播）
  BGM.play = function (i) {
    ti = ((i % TRACKS.length) + TRACKS.length) % TRACKS.length; step = 0; loop = 0;
    if (!ctx || !playing) return;
    const n = ctx.currentTime; out.gain.cancelScheduledValues(n); out.gain.setValueAtTime(Math.max(.0001, out.gain.value), n);
    out.gain.exponentialRampToValueAtTime(.0001, n + .5); out.gain.exponentialRampToValueAtTime(BGM.volume, n + 1.8);
    nextT = n + .6; if (BGM.onTrack) BGM.onTrack(TRACKS[ti].name); BGM._announced = true;
  };
  BGM.index = () => ti;
  BGM.current = () => TRACKS[ti].name;
  BGM.isPlaying = () => playing;
  BGM._tick = schedule;
  window.__musicGain = () => out ? +out.gain.value.toFixed(3) : null;   // 測試用   // 測試用：離線試聽時手動排程
  window.BGM = BGM;
})();
