# 第三方授權
複製第三方程式進來時，把完整授權文字貼在這裡。

## Three.js
- 版本：r170（npm 套件 `three@0.170.0`）
- 來源：https://registry.npmjs.org/three/-/three-0.170.0.tgz （檔案 `build/three.module.min.js`）
- 本 repo 位置：`src/vendor/three.module.min.js`（未修改）。遊戲和 00GameDevs 特效都透過 `index.html` 的 import map（`"three"` → 這個檔案）共用同一份，全站只有一份 Three.js。
- SHA-256：`08fd7545d13d2c7fb65ab691530a802dafefd638596501854f267d0fb13c39e7`
- 授權：MIT
- 授權全文：

```
The MIT License

Copyright © 2010-2024 three.js authors

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
```

## 00GameDevs 特效（00gamedevs.com）
- 授權：MIT（Copyright (c) 2026 00GameDevs (@00vchannel)）；檔案內另附 three.js 的 MIT 授權聲明
- 來源：https://00gamedevs.com （Grok 下載並核對 SHA-256 後，以附件 `vfx-00gamedevs.zip` 提供；本 repo 沒有從網路重新下載）
- 本 repo 位置：`src/vfx/runtime.js`、`src/vfx/effects/*.js`
- 修改（MIT 允許修改；每個檔案開頭的授權文字都原樣保留）：
  - 13 個大檔裡完全相同的約 560 KB 共用程式，由 `tools/build-vfx.mjs` 抽成一份 `src/vfx/runtime.js`；各招剩下的設定放在 `src/vfx/effects/<id>.js`。
  - `runtime.js` 唯一的程式修改：three r170 沒有 `UnsignedInt101111Type` 時，火球發光後製改用 `HalfFloatType` + `RGBAFormat`（搜尋 `jelly-survivors`）。
  - `spell-indicator-circle.js`、`angular-rock.js` 未修改（SHA-256 與原檔相同）。
- 原檔清單與 SHA-256（`tools/build-vfx.mjs` 會先核對這些值才產生檔案）：

| 檔案 | 種類 | 原檔 SHA-256 | 原檔大小 (bytes) |
|---|---|---|---|
| `azure-sweep.js` | effect | `d0c5980c3e6b4f1cc184f9a9326e7ad07441458cb1cf799f5e124ca94b5634e1` | 576561 |
| `shockwave.js` | effect | `02d404d493c2044fd9a004b1b77b292b35fb8b1e6a53597a8986430dc96eec28` | 576440 |
| `shadow-glaive.js` | effect | `ecbbcd027e936ed7e71da1bd22ba51bc4d6b3f8600a8bbdc527ee6d102ed2f35` | 576472 |
| `magma-fissure.js` | effect | `d92cc88fad3448f20da0a8a3b94f47968238ccdeb077ba5fd83e01128ada79b0` | 576715 |
| `prism-guard.js` | effect | `4f722d53117a11fa5629a56cf34c8aa520bbe2a20e7771ff691adf4974072e7c` | 576708 |
| `fireball.js` | effect | `43e7b9d3a7560f73837eebd46ee8a51f659e93a56dc9e77c455406ef5a01c039` | 577270 |
| `ice-shatter.js` | effect | `6550c1a0494e3b0b998dc6c938053ecc4883f2a8358d34acf549bc44be4fa1a0` | 576683 |
| `arcane-missile.js` | effect | `f7c839e23bdf6081f98074b37e91bda560bcfddfc1f6b196169e8c040290aee2` | 576874 |
| `electric-magic-arrow-strike.js` | effect | `e1463c60f690d0d211926dae7526637666e0ce0f1717c907cef0867add875324` | 578370 |
| `spiral-gale.js` | effect | `fe595624ba9adefeccded10d7771798387d15a290184e06c5ada3d07e693b151` | 576461 |
| `frost-lance-rain.js` | effect | `87337caa5481001623133ae375ead2cc4276d3b5608725a3e1310d56e0365b79` | 576974 |
| `spell-indicator-circle.js` | effect | `6dbbb39be166998a4be45662f364bae4d65e5324483cd3389dd2c35f126c6f9f` | 14252 |
| `smoke-puff.js` | effect | `3c420bcce89327c449936f2eca5c11f70068f009112a3b9247089ab602e079d9` | 576401 |
| `revival-bloom.js` | effect | `f2178c1cb992f586ab6c8c09b139d9c9f3ced0c1feae21c98203cb9f7b6dc9fd` | 576725 |
| `angular-rock.js` | object | `ca23198f04e027d65eb5176645db3187b3ae99fd73758b1bbbdaa72fe460140e` | 16823 |

- 授權全文（15 個原檔都是這一段相同的聲明）：

```
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
```

## 佔位技能圖示用的字型（只用來產生圖片，沒有放進 repo）
- `src/assets/icons/*.png` 是用 `tools/make-placeholder-icons.py` 產生的佔位圖，圖上的文字用系統內建的「文泉驛正黑」（WenQuanYi Zen Hei）繪製。
- 字型檔本身沒有放進 repo；文泉驛正黑以 GPLv2（附字型嵌入例外）授權，用它繪製的文字圖片不受 GPL 限制。
- 這些佔位圖之後會被 ChatGPT 畫的正式圖示取代。
