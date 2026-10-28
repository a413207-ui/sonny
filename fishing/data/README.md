# 🐟 釣魚遊戲魚種資料庫

`fish.json` 共 **127 種**（含 8 種天氣限定魚）原創設定的魚（任務中心 `tasks/tmvrn8znr-data`，Issue #40）。

| 稀有度 | 數量 | 基本售價 |
|---|---|---|
| 普通 common | 29 | 12 |
| 少見 uncommon | 27 | 40 |
| 稀有 rare | 20 | 150 |
| 史詩 epic | 15 | 500 |
| 傳說 legendary | 6 | 2000 |

八個區域：港灣 `harbor`（城鎮碼頭）、翠湖 `lake`、溪谷 `river`、珊瑚礁 `reef`、深海 `deep`、冰川海域 `cold`、紅樹林河口 `mangrove`、火山海域 `volcano`；
四個時段（照現實時間）：清晨 `dawn` 5–8 點、白天 `day` 8–17 點、黃昏 `dusk` 17–19 點、夜晚 `night` 19–5 點。
每個區域的每個時段都至少有一種普通魚可釣。

## 欄位
`id`、`name`、`rarity`、`regions[]`、`times[]`、`weightKg[最小,最大]`、`lengthCm[最小,最大]`、
`price`（平均大小的售價，遊戲依實際重量調整）、`shape`（外形，畫圖用）、`palette`（body／belly／fin／accent 配色）、
`desc`（圖鑑說明）、`image`（像素圖檔名，放 `../assets/fish/`）、`weather[]`（選填：只在這些天氣出現，`WEATHER_FISH` 表）。

## 怎麼改
改 `build_fish.py` 裡的 `FISH` 表後執行 `python games/fishing/data/build_fish.py`，它會檢查（≥90 種、id／名稱不重複、
範圍合法、每區每時段都有普通魚）並重新產生 `fish.json`。不要直接手改 `fish.json`。
