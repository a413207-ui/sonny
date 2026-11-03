# 第三方授權
複製第三方程式進來時，把完整授權文字貼在這裡。

## Three.js
- 版本：r170（npm 套件 `three@0.170.0`）
- 來源：https://registry.npmjs.org/three/-/three-0.170.0.tgz （檔案 `build/three.module.min.js`）
- 本 repo 位置：`src/vendor/three.module.min.js`（未修改）
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

## 00gamedevs.com 特效
- 授權：MIT（必須保留原本的版權文字）
- 授權全文：（使用時補上）

## 佔位技能圖示用的字型（只用來產生圖片，沒有放進 repo）
- `src/assets/icons/*.png` 是用 `tools/make-placeholder-icons.py` 產生的佔位圖，圖上的文字用系統內建的「文泉驛正黑」（WenQuanYi Zen Hei）繪製。
- 字型檔本身沒有放進 repo；文泉驛正黑以 GPLv2（附字型嵌入例外）授權，用它繪製的文字圖片不受 GPL 限制。
- 這些佔位圖之後會被 ChatGPT 畫的正式圖示取代。
