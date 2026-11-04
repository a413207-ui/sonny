// 操作：手機單指拖動地圖（查看工具）或畫範圍（建造工具）、雙指縮放；電腦滑鼠拖曳、滾輪縮放、右鍵/中鍵拖地圖。
export class Input {
  constructor(canvas, renderer, handlers) {
    this.cv = canvas;
    this.r = renderer;
    this.h = handlers; // { getTool, onBuild(tool,x0,y0,x1,y1), onPreview(tool,x0,y0,x1,y1)|null, onTap(cell), onCamera() }
    this.ptrs = new Map();
    this.mode = null;
    this.lastZoomAt = 0;
    this.spaceDown = false;
    canvas.addEventListener('pointerdown', (e) => this.down(e));
    canvas.addEventListener('pointermove', (e) => this.move(e));
    canvas.addEventListener('pointerup', (e) => this.up(e));
    canvas.addEventListener('pointercancel', (e) => this.cancel(e));
    canvas.addEventListener('pointerleave', () => { if (!this.ptrs.size) { this.r.hover = -1; } });
    canvas.addEventListener('wheel', (e) => this.wheel(e), { passive: false });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('keydown', (e) => { if (e.code === 'Space' && e.target === document.body) this.spaceDown = true; });
    addEventListener('keyup', (e) => { if (e.code === 'Space') this.spaceDown = false; });
  }

  get settling() { return performance.now() - this.lastZoomAt < 220 || this.mode === 'pinch'; }

  pos(e) {
    const b = this.cv.getBoundingClientRect();
    return { x: e.clientX - b.left, y: e.clientY - b.top };
  }

  down(e) {
    this.cv.setPointerCapture?.(e.pointerId);
    const p = this.pos(e);
    this.ptrs.set(e.pointerId, p);
    if (this.ptrs.size === 2) {
      // 第二根手指：取消建造，進入雙指縮放
      if (this.mode === 'build') this.h.onPreview(null);
      const [a, b] = [...this.ptrs.values()];
      const c = this.r.cam;
      this.mode = 'pinch';
      this.pinch = { d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: c.z, mid0: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }, world: this.r.screenToWorld((a.x + b.x) / 2, (a.y + b.y) / 2) };
      return;
    }
    if (this.ptrs.size > 2) return;
    const tool = this.h.getTool();
    const panBtn = e.pointerType === 'mouse' && (e.button === 1 || e.button === 2);
    this.start = p;
    this.moved = 0;
    if (tool === 'inspect' || panBtn || this.spaceDown) {
      this.mode = 'pan';
    } else {
      this.mode = 'build';
      const c = this.r.screenToCell(p.x, p.y);
      this.b0 = c; this.b1 = c; this.awayFromStart = false;
      this.h.onPreview(tool, c.x, c.y, c.x, c.y);
    }
  }

  move(e) {
    const p = this.pos(e);
    if (!this.ptrs.has(e.pointerId)) {
      if (e.pointerType === 'mouse') this.r.hover = this.r.screenToCell(p.x, p.y).i;
      return;
    }
    const prev = this.ptrs.get(e.pointerId);
    this.ptrs.set(e.pointerId, p);
    if (this.mode === 'pinch' && this.ptrs.size >= 2) {
      const [a, b] = [...this.ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const c = this.r.cam;
      c.z = this.pinch.z0 * d / this.pinch.d0;
      this.r.clampCam();
      // 讓手指中間的世界點跟著手指
      c.x = this.pinch.world.x - (mid.x - this.r.vw / 2) / c.z;
      c.y = this.pinch.world.y - (mid.y - this.r.vh / 2) / c.z;
      this.r.clampCam();
      this.lastZoomAt = performance.now();
      this.h.onCamera();
      return;
    }
    if (this.mode === 'pan') {
      const c = this.r.cam;
      c.x -= (p.x - prev.x) / c.z;
      c.y -= (p.y - prev.y) / c.z;
      this.r.clampCam();
      this.moved += Math.abs(p.x - prev.x) + Math.abs(p.y - prev.y);
      this.h.onCamera();
    } else if (this.mode === 'build') {
      const c = this.r.screenToCell(p.x, p.y);
      if (c.i !== this.b1.i) {
        this.b1 = c;
        if (c.i !== this.b0.i) this.awayFromStart = true;
        this.h.onPreview(this.h.getTool(), this.b0.x, this.b0.y, c.x, c.y);
      }
      this.r.hover = c.i;
    }
  }

  up(e) {
    if (!this.ptrs.has(e.pointerId)) return;
    const p = this.pos(e);
    this.ptrs.delete(e.pointerId);
    if (this.mode === 'pinch') {
      if (this.ptrs.size === 0) this.mode = null;
      else this.mode = 'pinch-end'; // 剩一根手指：不做任何事，等全部放開
      this.lastZoomAt = performance.now();
      return;
    }
    if (this.mode === 'pinch-end') { if (!this.ptrs.size) this.mode = null; return; }
    if (this.mode === 'pan') {
      if (this.moved < 8) this.h.onTap(this.r.screenToCell(p.x, p.y));
    } else if (this.mode === 'build') {
      const tool = this.h.getTool();
      this.h.onPreview(null);
      // 拖回起點再放開 = 取消
      if (!(this.awayFromStart && this.b1.i === this.b0.i)) this.h.onBuild(tool, this.b0.x, this.b0.y, this.b1.x, this.b1.y);
      else this.h.onCancel?.();
    }
    this.mode = null;
  }

  cancel(e) {
    this.ptrs.delete(e.pointerId);
    if (this.mode === 'build') this.h.onPreview(null);
    if (!this.ptrs.size) this.mode = null;
  }

  wheel(e) {
    e.preventDefault();
    const p = this.pos(e);
    const c = this.r.cam;
    const before = this.r.screenToWorld(p.x, p.y);
    c.z *= Math.exp(-e.deltaY * 0.0015);
    this.r.clampCam();
    const after = this.r.screenToWorld(p.x, p.y);
    c.x += before.x - after.x;
    c.y += before.y - after.y;
    this.r.clampCam();
    this.lastZoomAt = performance.now();
    this.h.onCamera();
  }
}
