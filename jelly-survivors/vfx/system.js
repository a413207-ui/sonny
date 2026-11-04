// 特效系統：按需載入 00GameDevs 特效、物件池、品質設定、預熱（prewarm）。
// - 每個「綁定」（binding，例如 slash、death）一個物件池；池子在載入時一次建好，戰鬥中只 reset() 重用，不 new。
// - 特效模組用 import() 按需載入：共用程式 runtime.js 只有一份，第一次載入後瀏覽器會快取。
// - 品質：high / mid / low，存在 localStorage（只存這一個字串，沒有個資）。
import * as THREE from 'three';

export const QUALITY_KEY = 'jellySurvivors.vfxQuality';

// density：乘在特效預設 density（0.5）上；detail：直接給特效；cap：池子大小用第幾欄（[高, 中, 低]）
// glow：火球的發光後製（整個畫面多畫兩次 + 模糊，最吃效能，只有高品質開）
// halo：特效裡的光暈圖層（*-halo、lifecycle-contact-glow）；低品質關掉 = 簡化版發光，少畫幾層半透明
export const QUALITY = {
  high: { label: '高', density: 2, detail: 1, cap: 0, glow: true, halo: true },
  mid: { label: '中', density: 1, detail: 0.6, cap: 1, glow: false, halo: true },
  low: { label: '低', density: 0.25, detail: 0.25, cap: 2, glow: false, halo: false },
};
const HALO_LAYER = /(-halo|contact-glow)$/;

function readQuality(mobile) {
  try {
    const v = localStorage.getItem(QUALITY_KEY);
    if (v && QUALITY[v]) return v;
  } catch {
    // 無痕模式等情況讀不到，用預設值
  }
  return mobile ? 'low' : 'high';
}

const _zero = new THREE.Vector3();
const _hit = new THREE.Vector3();

export class VfxSystem {
  constructor(world, bindings, { mobile = false } = {}) {
    this.world = world;
    this.bindings = bindings;
    this.modules = new Map(); // 特效 id → Promise<module>
    this.pools = new Map(); // binding key → { binding, items: [] }
    this.active = [];
    this.quality = readQuality(mobile);
    this.played = {}; // binding key → 播放次數（測試、除錯用）
    this.missed = {}; // 池子滿了沒播的次數
    this.loadedSets = new Set();
  }

  get q() {
    return QUALITY[this.quality];
  }

  get activeCount() {
    return this.active.length;
  }

  // 載入特效模組（同一個只載一次）
  load(fxId) {
    if (!this.modules.has(fxId)) this.modules.set(fxId, import(`./effects/${fxId}.js`));
    return this.modules.get(fxId);
  }

  // 這個品質下某個綁定的池子大小
  capOf(key) {
    return this.bindings[key].cap[this.q.cap];
  }

  optionsOf(key) {
    const b = this.bindings[key];
    const q = this.q;
    const o = { ...(b.opts || {}) };
    if (!b.fixed) {
      o.density = Math.min(1, Math.max(0.125, (b.opts?.density ?? 0.5) * q.density));
      o.detail = Math.max(0.25, (b.opts?.detail ?? 1) * q.detail);
    }
    return o;
  }

  // 準備一組綁定：載入模組 → 建池子 → 預熱。可以重複呼叫（只補不足的部分）。
  async prepare(keys) {
    const ids = [...new Set(keys.map((k) => this.bindings[k].fx))];
    const mods = await Promise.all(ids.map((id) => this.load(id)));
    const byId = Object.fromEntries(ids.map((id, i) => [id, mods[i]]));
    const fresh = [];
    for (const key of keys) {
      const b = this.bindings[key];
      let pool = this.pools.get(key);
      if (!pool) {
        pool = { key, binding: b, items: [] };
        this.pools.set(key, pool);
      }
      const want = this.capOf(key);
      const opts = this.optionsOf(key);
      while (pool.items.length < want) {
        const fx = byId[b.fx].default(opts);
        fx.group.visible = false;
        fx.group.matrixAutoUpdate = true;
        this.applyHalo(fx);
        this.world.scene.add(fx.group);
        const item = { key, fx, busy: false, t: 0, maxLife: 6, tick: null, data: {}, scale: 1 };
        // 發光後製固定用第一顆火球的管線來畫（它會替場上所有火球加光暈），避免每顆火球各建一套 render target
        if (fx.render && !this.glowFx) this.glowFx = fx;
        pool.items.push(item);
        fresh.push(item);
      }
    }
    if (fresh.length) this.prewarm(fresh);
  }

  // 光暈圖層開關：改 material.visible（特效自己每幀會改 mesh.visible，所以不能用那個）
  applyHalo(fx) {
    const on = this.q.halo;
    fx.group.traverse((o) => {
      if (!o.isMesh || !HALO_LAYER.test(o.name)) return;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) m.visible = on;
    });
  }

  // 預熱：先把 shader 編譯好、把頂點資料送進 GPU，戰鬥中第一次播放才不會卡一下。
  // 只呼叫 renderer.compile 不夠：很多驅動（含手機 Safari 的 ANGLE/Metal、SwiftShader）
  // 要到第一次真的畫出來、而且是畫在畫面本身的格式上才會建好管線，所以這裡把每個特效
  // 跑過幾個階段（出現 → 進行中 → 命中／收尾），每個階段都直接畫到畫布上一次。
  // 這時一定是在標題、轉職或暫停畫面（有半透明遮罩蓋著），下一幀就會被正常畫面蓋掉。
  prewarm(items) {
    const { renderer, scene, camera, camTarget } = this.world;
    const prev = renderer.getRenderTarget();
    const saved = [];
    for (const it of items) {
      it.fx.group.position.set(camTarget.x, 0.5, camTarget.z);
      it.fx.group.visible = true;
      it.fx.group.traverse((o) => {
        saved.push(o, o.visible);
        o.visible = true;
      });
    }
    try {
      renderer.setRenderTarget(null);
      scene.updateMatrixWorld(true);
      renderer.compile(scene, camera);
      renderer.render(scene, camera); // 全部子物件強制顯示畫一次
      for (let i = 0; i < saved.length; i += 2) saved[i].visible = saved[i + 1];
      // 依時間推進，每個階段畫一次（各特效自己決定哪些部分在這個階段顯示）
      let t = 0;
      for (const at of [0.06, 0.3, 0.7, 1.3]) {
        for (const it of items) it.fx.update(at - t);
        t = at;
        renderer.render(scene, camera);
      }
      // 命中與收尾（1.3 秒後：雷矢的 1.2 秒蓄力也已經結束，命中爆炸才會真的出現）
      for (const it of items) {
        _hit.set(camTarget.x + 1, 0.5, camTarget.z);
        if (it.fx.hit) it.fx.hit(_hit);
        it.fx.stop?.();
      }
      for (const dt of [0.05, 0.35]) {
        for (const it of items) it.fx.update(dt);
        renderer.render(scene, camera);
      }
      if (this.q.glow && this.glowFx) this.prewarmGlow();
    } finally {
      renderer.setRenderTarget(prev);
      for (const it of items) {
        it.fx.reset?.();
        it.fx.group.visible = false;
      }
    }
  }

  // 火球發光後製會把其他物件暫時換成黑色材質；黑色材質碰到 InstancedMesh（有／沒有 instanceColor）
  // 會編出不同的 shader，這裡先放兩個暫時的 InstancedMesh 一起畫一次，戰鬥中就不會再編譯。
  prewarmGlow() {
    const { renderer, scene, camera, camTarget } = this.world;
    const geo = new THREE.PlaneGeometry(0.1, 0.1);
    const mat = new THREE.MeshBasicMaterial();
    const temps = [false, true].map((colored) => {
      const im = new THREE.InstancedMesh(geo, mat, 1);
      im.setMatrixAt(0, new THREE.Matrix4().makeTranslation(camTarget.x, 0.5, camTarget.z));
      if (colored) im.setColorAt(0, new THREE.Color(1, 1, 1));
      im.frustumCulled = false;
      scene.add(im);
      return im;
    });
    try {
      this.glowFx.render(renderer, scene, camera);
    } finally {
      for (const im of temps) {
        scene.remove(im);
        im.dispose();
      }
      geo.dispose();
      mat.dispose();
    }
  }

  // 從池子拿一個來播；池子滿了回傳 null（呼叫的人改用原本的簡單特效）
  play(key) {
    const pool = this.pools.get(key);
    if (!pool) return null;
    const cap = this.capOf(key);
    for (let i = 0; i < pool.items.length && i < cap; i++) {
      const it = pool.items[i];
      if (it.busy) continue;
      it.busy = true;
      it.t = 0;
      it.maxLife = pool.binding.maxLife ?? 6;
      it.tick = null;
      it.fx.reset?.();
      it.fx.group.visible = true;
      it.fx.group.position.copy(_zero);
      it.fx.group.quaternion.identity();
      it.fx.group.scale.setScalar(1);
      this.active.push(it);
      this.played[key] = (this.played[key] || 0) + 1;
      return it;
    }
    this.missed[key] = (this.missed[key] || 0) + 1;
    return null;
  }

  release(it) {
    if (!it.busy) return;
    it.busy = false;
    it.tick = null;
    it.fx.group.visible = false;
    const k = this.active.indexOf(it);
    if (k >= 0) {
      this.active[k] = this.active[this.active.length - 1];
      this.active.pop();
    }
  }

  // 收掉所有正在播的（重新開始一局時）
  clear() {
    for (let i = this.active.length - 1; i >= 0; i--) this.release(this.active[i]);
  }

  // 每幀：dt = 遊戲時間（暫停時 0，特效也跟著停）
  update(dt) {
    if (dt <= 0) return;
    for (let i = this.active.length - 1; i >= 0; i--) {
      const it = this.active[i];
      it.t += dt;
      if (it.tick) it.tick(it, dt);
      if (!it.busy) continue; // tick 裡可能已經 release
      it.fx.update(dt);
      if (it.fx.finished || it.t > it.maxLife) this.release(it);
    }
  }

  // 換品質：調整每個特效的 density / detail，池子不夠大就補（只在暫停畫面呼叫，不會在戰鬥中 new）
  async setQuality(q) {
    if (!QUALITY[q]) return;
    this.quality = q;
    try {
      localStorage.setItem(QUALITY_KEY, q);
    } catch {
      // 存不了就只在這次有效
    }
    for (const [key, pool] of this.pools) {
      const o = this.optionsOf(key);
      for (const it of pool.items) {
        if (!pool.binding.fixed) it.fx.setOptions?.({ density: o.density, detail: o.detail });
        this.applyHalo(it.fx);
      }
    }
    await this.prepare([...this.pools.keys()]);
    // 光暈圖層可能剛打開：閒置的特效全部重新預熱一次（正在播的不能動，renderer.compile 也會幫它們編好 shader）
    const idle = [];
    for (const pool of this.pools.values()) for (const it of pool.items) if (!it.busy) idle.push(it);
    if (idle.length) this.prewarm(idle);
    if (this.q.glow && this.glowFx) this.prewarmGlow();
  }

  // 有火球在畫面上、而且是高品質時，用火球的發光後製畫整個畫面；否則回傳 false 讓 World 正常畫
  render() {
    if (!this.q.glow || !this.glowFx) return false;
    for (let i = 0; i < this.active.length; i++) {
      if (this.active[i].fx.render) {
        const { renderer, scene, camera } = this.world;
        this.glowFx.render(renderer, scene, camera);
        return true;
      }
    }
    return false;
  }
}
