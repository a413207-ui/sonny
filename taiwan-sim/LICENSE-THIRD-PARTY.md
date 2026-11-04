# 第三方授權與資料來源

沒有使用任何第三方程式、函式庫、字型或圖片。所有美術由程式（`src/render.js`）原創繪製。
遊戲內「選單 → 地圖資料來源」也有同樣的標示。

## Natural Earth（海岸線、縣市界）
- 資料：Natural Earth 1:10m Cultural Vectors「Admin 1 – States, Provinces」（版本見下載包的 VERSION.txt，本次為 5.1.1）
- 來源：https://www.naturalearthdata.com/ （下載：https://naciscdn.org/naturalearth/10m/cultural/ne_10m_admin_1_states_provinces.zip）
- 用途：`tools/build-grid.py` 轉成 `src/data/taiwan-grid.json` 的陸地/海、所屬縣市。原始檔沒有放進 repo。
- 授權：公有領域（Public Domain）。官方說明：
  > All versions of Natural Earth raster + vector map data found on this website are in the public domain. You may use the maps in any manner, including modifying the content and design, electronic dissemination, and offset printing. The primary authors, Tom Patterson and Nathaniel Vaughn Kelso, and all other contributors renounce all financial claim to the maps and invites you to use them for personal, educational, and commercial purposes. No permission is needed to use Natural Earth. Crediting the authors is unnecessary.

  雖然不需要標示，仍在遊戲內註明：Made with Natural Earth. Free vector and raster map data @ naturalearthdata.com.

## 高度（SRTM）
- 資料：SRTM 1 角秒（約 30 公尺）數值地形，NASA Shuttle Radar Topography Mission／U.S. Geological Survey。
- 取得：Mapzen Terrain Tiles（AWS Open Data，`https://s3.amazonaws.com/elevation-tiles-prod/skadi/`）的 .hgt.gz 圖磚。原始檔沒有放進 repo，只放平均到每格約 1 公里的結果。
- 授權：SRTM 為美國政府作品，公有領域。Terrain Tiles 要求的標示：
  > SRTM terrain data courtesy of the U.S. Geological Survey.
  > Mapzen（Terrain Tiles 託管服務）
- 河流：沒有使用任何河道圖資，是 `tools/build-grid.py` 用上面的高度計算水流方向與集水面積推算出來的。

## 港口位置、備用地形模型
- 港口座標與 `tools/terrain_model.py` 的近似地形模型（沒有高度資料時才用）都是本專案依一般地理常識手動輸入，不是從任何地圖描繪或複製。
- 之後若改用「內政部 20 公尺網格數值地形模型資料」（政府資料開放平台資料集 35430），依「政府資料開放授權條款－第1版」使用，須在此與遊戲內標示：
  > 本遊戲使用內政部「20公尺網格數值地形模型資料」，依政府資料開放授權條款－第1版（https://data.gov.tw/license）提供。
