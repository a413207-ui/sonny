/*!
00GameDevs exported assets — original code only
This license applies only to original code delivered by the VFX, Shader and Object copy/download functions. Website UI code, branding, avatars and promotional images are not licensed by this notice. Third-party code retains its own copyright and license.

The MIT License

Copyright (c) 2026 00GameDevs (@00vchannel)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Third-party dependency: Three.js (including its addons).
Keep the notices supplied with each dependency when distributing your game.
The notice below does not replace any additional notices in imported modules.

The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// 生機光綻 / Vitality Blossom
// jelly-survivors：由 tools/build-vfx.mjs 從 00GameDevs 原檔 revival-bloom.js 產生；共用程式在 ../runtime.js。
import { createEffect } from '../runtime.js';

const preset = {
  "id": "revival-bloom",
  "quantity": {
    "min": 1,
    "max": 28,
    "default": 14,
    "label": "光瓣數量",
    "unit": "片",
    "help": "上下兩層光瓣的總數，調整後保持環形分布與向上綻放。"
  },
  "lifecycle": {
    "start": 0.22,
    "end": 0.99
  },
  "name": "生機光綻",
  "english": "Vitality Blossom",
  "category": "burst",
  "color": "#ff8fbd",
  "description": "柔光從低處聚起，再像花朵往上綻放，適合復活或補血。",
  "tags": "復活 復甦 治療 生命 自然 Nature 聖光 Light 生命回綻 Revival bloom",
  "maxParticles": 512,
  "kind": 3,
  "variant": 9,
  "duration": 2.2,
  "burst": true,
  "seed": 404228,
  "schools": [
    "nature",
    "light"
  ],
  "previewTime": 1,
  "thumbnailTime": 1
};
export const defaultOptions = {
  "speed": 1,
  "detail": 1,
  "color": "#ff8fbd",
  "size": 1,
  "density": 0.5,
  "quantity": 14
};
export default function createVFX(options = {}) {
  return createEffect(preset, { ...defaultOptions, ...options });
}
