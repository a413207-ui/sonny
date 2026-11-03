// 操作：鍵盤（WASD / 方向鍵、Esc、1–3）+ 觸控虛擬搖桿（畫面任一處按住拖曳）。
import { CONFIG } from './config.js';

const KEY_DIRS = {
  KeyW: [0, -1], ArrowUp: [0, -1],
  KeyS: [0, 1], ArrowDown: [0, 1],
  KeyA: [-1, 0], ArrowLeft: [-1, 0],
  KeyD: [1, 0], ArrowRight: [1, 0],
};

export class Input {
  constructor(surface, joystickEl) {
    this.keys = new Set();
    this.move = { x: 0, y: 0 }; // 螢幕方向，長度 0..1；y 往下為正
    this.handlers = { pause: null, choose: null };
    this.pointerId = null;
    this.origin = { x: 0, y: 0 };
    this.stick = { x: 0, y: 0 };
    this.joystickEl = joystickEl;
    this.knobEl = joystickEl.querySelector('.knob');

    window.addEventListener('keydown', (e) => {
      if (KEY_DIRS[e.code]) {
        this.keys.add(e.code);
        e.preventDefault();
      }
      if (e.repeat) return;
      if (e.code === 'Escape' || e.code === 'KeyP') this.handlers.pause?.();
      const n = { Digit1: 0, Digit2: 1, Digit3: 2, Numpad1: 0, Numpad2: 1, Numpad3: 2 }[e.code];
      if (n !== undefined) this.handlers.choose?.(n);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.release();
    });

    surface.addEventListener('pointerdown', (e) => {
      if (this.pointerId !== null) return;
      this.pointerId = e.pointerId;
      this.origin.x = e.clientX;
      this.origin.y = e.clientY;
      this.stick.x = this.stick.y = 0;
      surface.setPointerCapture?.(e.pointerId);
      this.showJoystick(true);
      this.updateKnob();
    });
    surface.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.pointerId) return;
      const r = CONFIG.input.joystickRadius;
      let dx = e.clientX - this.origin.x;
      let dy = e.clientY - this.origin.y;
      const len = Math.hypot(dx, dy);
      if (len > r) {
        dx = (dx / len) * r;
        dy = (dy / len) * r;
      }
      this.stick.x = dx;
      this.stick.y = dy;
      this.updateKnob();
    });
    const end = (e) => {
      if (e.pointerId === this.pointerId) this.release();
    };
    surface.addEventListener('pointerup', end);
    surface.addEventListener('pointercancel', end);
  }

  release() {
    this.pointerId = null;
    this.stick.x = this.stick.y = 0;
    this.showJoystick(false);
  }

  showJoystick(on) {
    this.joystickEl.style.display = on ? 'block' : 'none';
    if (on) {
      this.joystickEl.style.left = `${this.origin.x}px`;
      this.joystickEl.style.top = `${this.origin.y}px`;
    }
  }

  updateKnob() {
    this.knobEl.style.transform = `translate(${this.stick.x}px, ${this.stick.y}px)`;
  }

  // 每一幀呼叫，回傳正規化的移動向量
  update() {
    let x = 0;
    let y = 0;
    for (const k of this.keys) {
      x += KEY_DIRS[k][0];
      y += KEY_DIRS[k][1];
    }
    if (x || y) {
      const l = Math.hypot(x, y);
      this.move.x = x / l;
      this.move.y = y / l;
      return this.move;
    }
    const len = Math.hypot(this.stick.x, this.stick.y);
    if (len > CONFIG.input.joystickDeadZone) {
      const m = Math.min(1, len / CONFIG.input.joystickRadius);
      this.move.x = (this.stick.x / len) * m;
      this.move.y = (this.stick.y / len) * m;
    } else {
      this.move.x = this.move.y = 0;
    }
    return this.move;
  }
}
