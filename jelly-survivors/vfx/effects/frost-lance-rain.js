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
// 霜矛落陣 / Falling Frost Spear Array
// jelly-survivors：由 tools/build-vfx.mjs 從 00GameDevs 原檔 frost-lance-rain.js 產生；共用程式在 ../runtime.js。
import { createEffect } from '../runtime.js';

const preset = {
  "id": "frost-lance-rain",
  "spread": {
    "min": 0.5,
    "max": 3,
    "default": 1,
    "label": "落點散布範圍",
    "help": "從中心向外拉開冰槍落點；冰槍大小、落下高度與碎裂大小不變。"
  },
  "quantity": {
    "min": 1,
    "max": 18,
    "default": 9,
    "label": "冰槍數量",
    "unit": "支",
    "help": "每次施放落下的冰槍總數。碎裂與霜痕跟隨各支冰槍；可用落點散布範圍拉開間距。"
  },
  "lifecycle": {
    "start": 0.24,
    "end": 1.08
  },
  "name": "霜矛落陣",
  "english": "Falling Frost Spear Array",
  "category": "burst",
  "color": "#a9dfff",
  "description": "冰槍從空中接連落下，碰地後碎成小冰塊，霜痕再慢慢消失。",
  "tags": "冰槍 落冰 冰雨 冰霜 Ice 冰槍驟雨 Frost lance rain",
  "maxParticles": 512,
  "kind": 3,
  "variant": 10,
  "duration": 2.4,
  "burst": true,
  "seed": 413415,
  "schools": [
    "ice"
  ],
  "previewTime": 0.9,
  "thumbnailTime": 0.9
};
export const defaultOptions = {
  "speed": 1,
  "detail": 1,
  "color": "#a9dfff",
  "size": 1,
  "density": 0.5,
  "quantity": 9,
  "spread": 1
};
export default function createVFX(options = {}) {
  return createEffect(preset, { ...defaultOptions, ...options });
}
