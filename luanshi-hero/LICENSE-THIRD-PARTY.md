# 第三方授權

《亂世小英雄》用到的第三方程式與素材。新增任何第三方東西時，把來源、版本、授權和授權全文寫在這裡。

## 程式

### Phaser 3（遊戲引擎，會打包進 `dist/`）
- 版本：3.90.0（npm 套件 `phaser@3.90.0`，鎖在 `package-lock.json`）
- 來源：https://registry.npmjs.org/phaser/-/phaser-3.90.0.tgz
- 用法：由 Vite 從 `node_modules/phaser/dist/phaser.esm.js` 打包進 `dist/assets/phaser-*.js`，**不從 CDN 載入**，也未修改原始碼。
- `phaser.esm.js` SHA-256：`cc80f609ce97458052dcb026d9625cf45bbec062c8d596342adaf82894a4d4da`
- 授權：MIT
- 授權全文：

```
The MIT License (MIT)

Copyright (c) 2024 Richard Davey, Phaser Studio Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### Vite（打包工具，只在開發／build 時使用）
- 版本：7.3.7（npm 套件 `vite@7.3.7`，devDependency）
- 來源：https://registry.npmjs.org/vite/-/vite-7.3.7.tgz
- 用法：build 工具。輸出檔裡只有 Vite 產生的一小段模組預載（modulepreload）輔助程式。
- 授權：MIT
- 授權全文（Vite 本體；Vite 自己打包的相依套件授權不會出現在我們的輸出檔裡）：

```
MIT License

Copyright (c) 2019-present, VoidZero Inc. and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 字型
- 不內嵌字型，使用玩家裝置的系統字型（Noto Sans TC／PingFang TC／Microsoft JhengHei）。

## 美術
- 正式美術由 GPT（ChatGPT）依本專案的設定製作，原創，不是第三方素材：
  - `assets/chars/char_xiaobing_portrait.webp`、`char_liubei_portrait.webp`、`char_guanyu_portrait.webp`、`char_zhangfei_portrait.webp`（1024×1536，透明背景；2026-11-05 由 Sonny 提供，收到的格式是 WebP）
  - `ch1-art.zip`（2026-11-08 由 Sonny 提供，GPT 製作，原創）：主角表情頭像 `char_<id>_face_<表情>`（512×512）、NPC 立繪 `npc_chief／merchant／innkeeper／yellow_turban_portrait`（1024×1024）、敵人立繪 `enemy_zhangjiao／cheng_yuanzhi／bandit_boss_portrait` 與張角表情。
    由 `tools/art/clean_portraits.py` 清理去背（去淡邊、連通元件去碎點）後轉 WebP；每個檔案的來源 SHA-256、清理紀錄、輸出檔在 `assets/art-manifest.json`。原始 PNG 沒有改動、沒有放進 repo。
    包內的 4 張主角全身立繪和已定稿的 WebP 是同一張圖，保留定稿版不覆蓋。
- 遊戲畫面的像素美術（行走圖、戰鬥角色、敵人、NPC、圖塊、地圖物件、戰鬥背景、標題背景、章節插圖替代畫面、道具圖示）由 Claude 用程式產生（`tools/pixel/`、`npm run pixel`），原創，不是第三方素材（2026-11-06 起，見 `docs/art-direction.md`）。
- 沒有使用任何第三方圖片。

## 音樂、音效
- 目前還沒有。之後只用免費、CC0 或相容授權的素材（Sonny 2026-11-05 決定），每個檔案都要在這裡寫：檔名、作者、來源網址、授權、是否修改過。
- 不使用需要付費的素材。
