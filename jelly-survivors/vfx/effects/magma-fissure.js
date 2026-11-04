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
// 熔脈地裂 / Molten Vein Fissure
// jelly-survivors：由 tools/build-vfx.mjs 從 00GameDevs 原檔 magma-fissure.js 產生；共用程式在 ../runtime.js。
import { createEffect } from '../runtime.js';

const preset = {
  "id": "magma-fissure",
  "quantity": {
    "min": 1,
    "max": 26,
    "default": 13,
    "label": "岩塊組數",
    "unit": "組",
    "help": "每組裂痕兩側的岩塊一起起落；裂地長度與前進路徑保持固定。"
  },
  "lifecycle": {
    "start": 0.18,
    "end": 0.81
  },
  "name": "熔脈地裂",
  "english": "Molten Vein Fissure",
  "category": "burst",
  "color": "#ff823e",
  "description": "地面一路裂開發亮，石片被頂起再落下，最後只剩零星火光。",
  "tags": "裂地 地面 熔岩 火焰 Fire 熔痕裂地 Magma fissure",
  "maxParticles": 512,
  "kind": 3,
  "variant": 8,
  "duration": 1.8,
  "burst": true,
  "seed": 358293,
  "schools": [
    "fire"
  ],
  "previewTime": 0.65,
  "thumbnailTime": 0.65
};
export const defaultOptions = {
  "speed": 1,
  "detail": 1,
  "color": "#ff823e",
  "size": 1,
  "density": 0.5,
  "quantity": 13
};
export default function createVFX(options = {}) {
  return createEffect(preset, { ...defaultOptions, ...options });
}
