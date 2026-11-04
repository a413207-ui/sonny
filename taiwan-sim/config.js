// 台灣模擬：所有可調數值都在這裡（Sonny 可以直接改）。
// 金額單位：元。時間單位：月（遊戲內）。

export const SAVE_KEY = 'taiwanSim.save';
// v2：第二版（時代 3–5、建築隨時代演進、縣市平衡）。v1 存檔讀進來會自動遷移（save.js migrate），
// 遷移前的原檔另存一份在 `${SAVE_KEY}.v1-backup`，不會被覆蓋。
export const SAVE_VERSION = 4;   // v4：第四版（通勤、居民與公司名稱）；舊存檔自動遷移，原檔另存在 `${SAVE_KEY}.v{舊版本}-backup`
// （v3：第三版，城市服務、稅率、預算）   // v3：第三版（城市服務、稅率、預算）；v2 存檔自動遷移，原檔另存在 `${SAVE_KEY}.v2-backup`

// ---- 時間 ----
export const TIME = {
  monthSeconds: 3,          // ×1 速度下，遊戲一個月 = 幾秒
  speeds: [0, 1, 2, 4],     // 暫停 / ×1 / ×2 / ×4
  startYear: 1860,          // 開局年份（只是顯示用）
  autosaveSeconds: 10,      // 自動存檔間隔（真實秒）
};

// ---- 開局 ----
export const START = {
  money: 100000,
  region: '高雄市',
  port: '高雄港',
};

// ---- 買地：第 n 塊 = base × ratio^(n−1)（Sonny 已確認，不改） ----
export const LAND = {
  base: 500000,
  ratio: 1.5,
  allowOthers: true,
};

// ---- 時代 ----
// popToNext：進入下一時代需要的人口；special：本時代的「時代特殊建築」（蓋好它 + 人口達標 → 進入下一時代）
// maxLevel：本時代區塊最多能長到幾級；ship：本時代的船；taxMult：本時代的稅收倍率（物價與所得成長，收入面的平衡）
// portUnload：本時代每個港口每月最多卸下幾人（船變大、碼頭跟著現代化）
export const ERAS = [
  {
    id: 1, name: '清末時代', years: '1860–1895', maxLevel: 2, popToNext: 2500, taxMult: 1, portUnload: 120,
    ship: { name: '帆船', capacity: 40, intervalMonths: 2, travelMonths: 1 },
    special: 'lighthouse',
    unlocks: ['土路', '木橋', '土角厝（住）', '市集（商）', '小作坊（工）', '水井', '燈塔（特殊）'],
    zoneNames: { R: '土角厝', C: '市集', I: '小作坊' },
  },
  {
    id: 2, name: '日據時代', years: '1895–1945', maxLevel: 4, popToNext: 20000, taxMult: 1.25, portUnload: 250,
    featured: ['rail', 'railstop'], featuredText: '鋪設鐵路、蓋車站：沿線區塊稅收與成長加成',
    ship: { name: '蒸汽船', capacity: 150, intervalMonths: 1.5, travelMonths: 0.8 },
    special: 'station',
    unlocks: ['鐵路（主打）', '車站', '石板路', '石橋', '磚造街屋（住）', '商行（商）', '製糖工廠（工）', '燃煤發電廠', '電線', '自來水廠', '水管', '火車站（特殊）'],
    zoneNames: { R: '磚造街屋', C: '商行', I: '製糖工廠' },
  },
  {
    id: 3, name: '民國光復時代', years: '1945–1970', maxLevel: 5, popToNext: 60000, taxMult: 1.7, portUnload: 600,
    ship: { name: '貨輪', capacity: 400, intervalMonths: 1, travelMonths: 0.6 },
    special: 'dam',
    unlocks: ['柏油路', '公路', '水泥橋', '公寓（住）', '百貨（商）', '加工區（工）', '水力發電廠', '自來水接點', '水庫（特殊）'],
    zoneNames: { R: '公寓', C: '百貨', I: '加工區' },
  },
  {
    id: 4, name: '經濟起飛時代', years: '1970–1990', maxLevel: 6, popToNext: 150000, taxMult: 2.4, portUnload: 1200,
    featured: ['freeway'], featuredText: '把路升級成高速公路：範圍 3 格稅收 +20%、長得更快；所有道路也可以蓋成高架',
    ship: { name: '貨櫃輪', capacity: 800, intervalMonths: 1, travelMonths: 0.5 },
    special: 'epz',
    unlocks: ['高速公路（主打）', '高架（任何道路）', '高樓住宅（住）', '商場（商）', '加工出口區（工）', '核能／火力電廠', '加工出口區管理處（特殊）'],
    zoneNames: { R: '高樓住宅', C: '商場', I: '加工出口區' },
  },
  {
    id: 5, name: '現代', years: '1990–', maxLevel: 6, popToNext: null, taxMult: 3.3, portUnload: 2000,
    ship: { name: '大型貨櫃輪', capacity: 1500, intervalMonths: 1, travelMonths: 0.5 },
    special: 'skyscraper',
    unlocks: ['捷運', '玻璃帷幕住宅（住）', '商辦大樓（商）', '科技園區（工）', '新型電廠', '淨水廠', '摩天大樓（特殊）'],
    zoneNames: { R: '玻璃帷幕住宅', C: '商辦大樓', I: '科技園區' },
  },
];
// 可以玩到第幾個時代（第二版：全部 5 個）
export const MAX_PLAYABLE_ERA = 5;
// 從第幾個時代開始，區塊需要電才會成長（清末還沒有電）
export const POWER_REQUIRED_FROM_ERA = 2;

// ---- 完成條件（破關；交給 Claude 決定）----
// 在「現代」同時達成：人口、蓋好摩天大樓、里程碑「蓋到台北」→ 跳結算畫面，可以繼續玩。
export const VICTORY = {
  era: 5,
  pop: 300000,
  special: 'skyscraper',
  milestone: 'taipei',
};

// ---- 地形 ----
export const TERRAIN = { SEA: 0, PLAIN: 1, HILL: 2, MOUNTAIN: 3, RIVER: 4 };
export const TERRAIN_NAMES = ['海', '平原', '丘陵', '高山', '河流'];
// 丘陵上的區塊容量倍率（密度較低）
export const HILL_DENSITY = 0.5;

// ---- 道路 ----
// 橋的造價/維護依「蓋的當下」的時代；維護費依目前時代
export const ROAD = {
  cost: { plain: 300, hill: 700, mountain: 3000 },   // 高山 = 山路/隧道
  bridgeCost: { 1: 2500, 2: 1500, 3: 2500, 4: 4000, 5: 6000 },
  maintenance: 4,                                     // 每格每月
  bridgeMaintenance: { 1: 40, 2: 20, 3: 25, 4: 35, 5: 45 },
  names: { 1: '土路', 2: '石板路', 3: '柏油路', 4: '柏油路', 5: '柏油路' },
  bridgeNames: { 1: '木橋', 2: '石橋', 3: '水泥橋', 4: '鋼筋混凝土橋', 5: '斜張橋' },
};

// ---- 交通（時代 3 以後；簡化版：只做「加速通勤 → 範圍內的區塊稅收、成長變好」）----
// on：'road' = 要蓋在已有的道路上（把路升級）；'land' = 地下，任何陸地都能蓋
// bonus：範圍內區塊的交通加成（稅收 ×(1+bonus)、成長機率 ×(1+2×bonus)、住宅幸福度 +bonus×30）
// 同一格被多種交通涵蓋時取最大的加成。level：存在格子上的值（數字大的蓋在數字小的上面）
export const TRANSPORT = {
  highway: { name: '公路', era: 3, level: 1, on: 'road', cost: 1200, maintenance: 8, radius: 2, bonus: 0.1 },
  freeway: { name: '高速公路', era: 4, level: 2, on: 'road', cost: 3500, maintenance: 20, radius: 3, bonus: 0.2 },
  metro: { name: '捷運', era: 5, on: 'land', cost: 12000, maintenance: 60, radius: 3, bonus: 0.35 },
};

// ---- 鐵路（日據時代的主打建築；之後的時代繼續可用）----
// 像道路一樣一格一格鋪（可以穿過道路＝平交道，不能壓在分區或建築上）。
// 鐵路要連到「車站」（或火車站）才有效果：同一條連通的鐵路上有車站，沿線 radius 格內的區塊得到交通加成 bonus
// （稅收 ×(1+bonus)、成長較快、住宅幸福度加分，和 TRANSPORT 一樣取最大值）。
export const RAIL = {
  name: '鐵路', era: 2,
  cost: { plain: 600, hill: 1400, mountain: 6000 },   // 高山 = 鐵路隧道
  bridgeCost: 4000,                                   // 鐵橋
  maintenance: 5, bridgeMaintenance: 30,
  radius: 3, bonus: 0.15,
};

// ---- 高架（任何道路種類和鐵路都可以蓋成高架）----
// 工具列「高架」切換打開時，鋪路、公路、高速公路、鐵路都蓋成高架。高架一路接過去不用先降回地面：
// 碰到地面道路就從上面跨過（地面道路保留，兩層交叉）；高架鐵路比高架道路高一層，兩者可以交叉。高架底下的格子可以蓋其他東西（劃區、蓋設施），
// 但柱子所在的格子不行（柱子可以立在地面道路的中央分隔島，所以可以沿著既有的路蓋高架）。柱子規則：每一段連續的高架（上下左右相連），從端點（編號最小的端點）起算，
// 第 1、8、15…格（每 pillarEvery 格）有一根柱子。高架只能從兩端或旁邊的地面道路上下，旁邊的區塊不能從高架進出。
// 高架鐵路一樣要整條連到車站才有效果，和地面鐵路相接的地方是引道。
// 費用 = 該格原本的道路／鐵路造價（過河不用另外架橋）+ cost（每格）；維護費 = 原本的 + maintenance（每格每月）。
export const ELEVATED = { era: 4, cost: 2500, maintenance: 12, pillarEvery: 7 };

// ---- 分區 ----
// 每級的容量：住宅 = 可住人數；商業/工業 = 工作數
export const ZONES = {
  R: { name: '住宅', cost: 100, cap: [0, 40, 100, 260, 520, 1200, 3000] },
  C: { name: '商業', cost: 150, cap: [0, 15, 40, 110, 230, 500, 1200] },
  I: { name: '工業', cost: 200, cap: [0, 25, 60, 160, 320, 600, 1000] },
};
export const GROWTH = {
  levelUpChance: 0.35,        // 條件都滿足時，每月升一級的機率
  firstBuildChance: 0.6,      // 空地第一次蓋起來的機率
  fullRatio: 0.75,            // 住宅住滿多少才會往上長
  naturalGrowth: 0.004,       // 住宅每月自然增加（出生）比例
  happinessMin: 40,           // 幸福度低於這個就停止成長
};
export const HAPPINESS = {
  base: 60, water: 10, power: 10, commerceNear: 6,
  industryNear: -12, industryNearMax: -48, radius: 2,
  // 電廠太近的扣分在 FACILITIES[x].nearPenalty（燃煤電廠過時後加倍，見 OBSOLETE）
};

// ---- 建築隨時代演進（Sonny 2026-11-04 改決定：舊建築不自動改建，付錢才升級，保留舊建築）----
// 每個區塊記得自己是「哪個時代的樣式」。換時代後：
// 1. 舊樣式的建築永久維持原樣（外觀、容量都不變），直到玩家付錢「改建」。區塊在原本的樣式裡長高也不會換樣式；
//    只有空地第一次蓋起來時，才會直接蓋成目前時代的樣式。
// 2. 舊樣式最多只能長到「它那個時代」的最高等級，要付錢改建後才能再長高。
// 3. 容量依樣式時代乘上 capMult（新樣式住得比較多、工作比較多）。
// 4. 付錢改建（單格或「全部改建」）：每格 (base + perLevel × 等級) × 目前時代 taxMult × 縣市建造倍率，立刻改建。
// autoRebuild / rebuildChance：舊的「每月自動改建」機制，預設關閉（Sonny 決定不要）；要打開才會用到 rebuildChance。
export const ERA_UPGRADES = {
  capMult: { 1: 1, 2: 1.1, 3: 1.25, 4: 1.45, 5: 1.7 },
  autoRebuild: false,
  rebuildChance: 0,
  rebuildCost: { base: 200, perLevel: 250 },
};

// 「時代＋等級」的樣式表（名稱；畫法在 render.js 依同一張表的時代分支）
export const BUILDING_STYLES = {
  R: {
    1: ['土角厝', '紅瓦三合院'],
    2: ['竹管厝', '磚造平房', '磚造街屋', '洋樓街屋'],
    3: ['水泥平房', '透天厝', '四層公寓', '五層公寓', '五層公寓群'],
    4: ['透天厝', '公寓', '電梯大樓', '十二層大樓', '高樓住宅', '高樓社區'],
    5: ['透天厝', '電梯公寓', '電梯大樓', '玻璃帷幕大樓', '玻璃帷幕高樓', '豪宅塔樓'],
  },
  C: {
    1: ['路邊攤', '市集'],
    2: ['雜貨店', '商行', '亭仔腳商店街', '百貨商行'],
    3: ['柑仔店', '商店街', '市場大樓', '百貨公司', '大百貨公司'],
    4: ['便利商店', '商店街', '商場', '購物中心', '大型商場', '百貨商圈'],
    5: ['便利商店', '連鎖商店', '商辦大樓', '玻璃帷幕商辦', '金融大樓', '商辦塔樓'],
  },
  I: {
    1: ['小作坊', '碾米廠'],
    2: ['手工作坊', '製糖工廠', '大製糖工廠', '製糖會社'],
    3: ['小工廠', '加工廠', '加工區廠房', '大加工區', '加工區群'],
    4: ['工廠', '加工廠', '加工出口區廠房', '大型廠房', '加工出口區'],
    5: ['工作室', '科技廠房', '科技園區', '晶圓廠', '科技園區群', '科學園區'],
  },
};

// ---- 人口與需求 ----
export const ECON = {
  labor: 0.6,            // 人口中有多少是勞動力
  selfEmployed: 0.2,     // 不需要商工工作的人口比例（農民等），加上 baseJobs
  baseJobs: 60,
  shopNeed: 0.25,        // 每人需要多少商業工作（顧客 → 商業需求）
  goodsNeed: 0.6,        // 每個商業工作需要多少工業工作（貨物）
  industryBase: 30,      // 港口貿易帶來的基本工業需求
  tax: { R: 2.6, C: 4.2, I: 3.6 },   // 每月：每人 / 每個有人做的工作（再乘時代 taxMult、縣市 taxMult、交通加成）
  tradePerIndustryJob: 2,          // 港口貿易：每個工業工作每月
};

// ---- 港口與移民 ----
export const PORT = {
  unloadPerMonth: 120,   // 舊欄位（第一版）；第二版改看 ERAS[].portUnload
};

// ---- 水電設施 ----
// coverRadius：設施本身覆蓋半徑；lineRadius：管線/電線兩側覆蓋半徑；capacity：可供應量（住宅 1 人 = 1，工作 1 個 = 0.5）
// needs：river 河邊、coast 海邊、road 緊鄰接港口的路、rail 緊鄰鐵路；nearPenalty：附近（HAPPINESS.radius 格內）住宅的幸福度扣分
// specialOf：第幾個時代的時代特殊建築；water：特殊建築同時供水（水庫）
export const FACILITIES = {
  well: { name: '水井', kind: 'water', era: 1, cost: 4000, maintenance: 60, capacity: 300, coverRadius: 3, needs: null },
  waterworks: { name: '自來水廠', kind: 'water', era: 2, cost: 30000, maintenance: 450, capacity: 5000, coverRadius: 2, needs: 'river' },
  waterpoint: { name: '自來水接點', kind: 'water', era: 3, cost: 3000, maintenance: 15, capacity: 0, coverRadius: 3, needs: null },
  purifier: { name: '淨水廠', kind: 'water', era: 5, cost: 600000, maintenance: 3500, capacity: 60000, coverRadius: 3, needs: 'river' },
  coal: { name: '燃煤發電廠', kind: 'power', era: 2, cost: 45000, maintenance: 700, capacity: 6000, coverRadius: 2, needs: null, nearPenalty: -15 },
  hydro: { name: '水力發電廠', kind: 'power', era: 3, cost: 220000, maintenance: 1600, capacity: 20000, coverRadius: 2, needs: 'river', nearPenalty: 0 },
  nuclear: { name: '核能／火力電廠', kind: 'power', era: 4, cost: 900000, maintenance: 6000, capacity: 80000, coverRadius: 2, needs: null, nearPenalty: -20 },
  modernplant: { name: '新型電廠', kind: 'power', era: 5, cost: 1600000, maintenance: 8000, capacity: 140000, coverRadius: 3, needs: null, nearPenalty: -4 },
  lighthouse: { name: '燈塔', kind: 'special', era: 1, cost: 120000, maintenance: 200, needs: 'coast', specialOf: 1 },
  station: { name: '火車站', kind: 'special', era: 2, cost: 600000, maintenance: 1500, needs: 'road', specialOf: 2 },
  railstop: { name: '車站', kind: 'rail', era: 2, cost: 12000, maintenance: 120, needs: 'rail' },
  dam: { name: '水庫', kind: 'special', era: 3, cost: 2500000, maintenance: 6000, needs: 'river', specialOf: 3, water: 30000, coverRadius: 3 },
  epz: { name: '加工出口區管理處', kind: 'special', era: 4, cost: 6000000, maintenance: 12000, needs: 'road', specialOf: 4 },
  skyscraper: { name: '摩天大樓', kind: 'special', era: 5, cost: 15000000, maintenance: 25000, needs: 'road', specialOf: 5 },
};
// 特殊建築蓋好後的持續效果（收入面）
export const SPECIAL_EFFECTS = {
  epz: { trade: 1.5, text: '港口貿易 ×1.5' },
  skyscraper: { taxC: 1.2, text: '商業稅 ×1.2' },
};
export const LINES = {
  pipe: { name: '水管', era: 2, cost: 80, maintenance: 1, radius: 2 },
  wire: { name: '電線', era: 2, cost: 100, maintenance: 1, radius: 2 },
};

// ---- 舊設施過時與改建 ----
// 舊設施不會被強制失效或自動換掉：一直照常運作，玩家付錢「改建」才會換成新版本。
// 但時代變了效果會變差（介面上的設施清單、點設施的資訊、地圖上的 ⚠ 都會標示）。不想要變差，把下面的倍率改成 1 即可。
// fromEra 起過時：capacityMult 容量倍率、maintenanceMult 維護費倍率、nearPenaltyMult 附近幸福度扣分倍率。
// upgradeTo：可以「改建」成哪個設施（依序選第一個已解鎖的），費用 = 新設施造價 × FACILITY_REBUILD.costRatio，不用拆掉重蓋。
export const OBSOLETE = {
  well: { fromEra: 3, capacityMult: 0.5, upgradeTo: ['waterpoint'], text: '民國光復後水井容量減半，可改建成自來水接點（接上水管網路）' },
  coal: { fromEra: 4, nearPenaltyMult: 2, maintenanceMult: 1.6, upgradeTo: ['modernplant', 'nuclear'], text: '經濟起飛後燃煤電廠汙染變嚴重（附近幸福度扣分加倍、維護費 ×1.6），可改建成新型電廠' },
  waterworks: { fromEra: 5, capacityMult: 0.8, upgradeTo: ['purifier'], text: '現代的舊自來水廠容量剩 8 成，可改建成淨水廠' },
};
export const FACILITY_REBUILD = { costRatio: 0.6 };
// 已經過了時代的特殊建築保留當地標：半徑內住宅幸福度加分
export const LANDMARK = { happiness: 8, radius: 6 };

// ---- 時代事件（每個時代 1–2 個；atMonth = 進入該時代後第幾個月發生）----
// effect：持續 months 個月的倍率：immigration 船上移民、portCap 港口卸貨上限、taxR/taxC/taxI 稅、trade 港口貿易、
//         maintPower 電廠維護費、transportCost 交通建設造價；grant：一次性補助（元）
export const ERA_EVENTS = [
  { id: 'treatyPorts', era: 1, atMonth: 18, name: '開港通商', text: '打狗、安平開港，洋行進駐：港口貿易 ×1.5（3 年）', effect: { trade: 1.5 }, months: 36 },
  { id: 'railway', era: 2, atMonth: 12, name: '縱貫鐵路通車', text: '南北交通變快，移民變多：船上移民 ×1.5（3 年）', effect: { immigration: 1.5 }, months: 36 },
  { id: 'sugar', era: 2, atMonth: 48, name: '糖業興盛', text: '新式製糖會社成立：工業稅 ×1.3（4 年）', effect: { taxI: 1.3 }, months: 48 },
  { id: 'postwarWave', era: 3, atMonth: 2, name: '光復後移民潮', text: '大批移民渡海來台：船上移民 ×2、港口卸貨上限 ×2（3 年）', effect: { immigration: 2, portCap: 2 }, months: 36 },
  { id: 'usAid', era: 3, atMonth: 24, name: '美援', text: '美援物資與貸款到位：一次補助 80 萬', grant: 800000 },
  { id: 'tenProjects', era: 4, atMonth: 6, name: '十大建設', text: '十大建設：中山高速公路動工！公路、高速公路造價半價（4 年），並補助 200 萬', effect: { transportCost: 0.5 }, months: 48, grant: 2000000 },
  { id: 'oilCrisis', era: 4, atMonth: 30, name: '石油危機', text: '油價暴漲：電廠維護費 ×1.6、工業稅 ×0.8（2 年）', effect: { maintPower: 1.6, taxI: 0.8 }, months: 24 },
  { id: 'techBoom', era: 5, atMonth: 12, name: '科技業興起', text: '半導體與電子業起飛：工業稅 ×1.5（5 年）', effect: { taxI: 1.5 }, months: 60 },
  { id: 'asianCrisis', era: 5, atMonth: 48, name: '亞洲金融風暴', text: '鄰國貨幣大貶：商業稅 ×0.85（1.5 年）', effect: { taxC: 0.85 }, months: 18 },
];

// ---- 縣市平衡 ----
// 每個縣市屬於一種類型：buildMult 建造費倍率（依時代，東部與山區越後期越好蓋）、taxMult 稅收倍率、
// landIncome 買下後原有聚落每月繳的田賦（每格平原/丘陵，乘時代 taxMult；開局的高雄不算）。
// 買地價格公式不變（Sonny 定的），這裡只調建造與收入面。
export const REGION_TYPES = {
  west: { name: '西部平原', buildMult: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }, taxMult: 1, text: '平原多、好開發' },
  metro: { name: '北部都會', buildMult: { 1: 1.2, 2: 1.2, 3: 1.15, 4: 1.1, 5: 1.1 }, taxMult: 1.3, text: '地小人稠：稅收高、建造較貴' },
  city: { name: '小城市', buildMult: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }, taxMult: 1.2, text: '面積小，稅收較高' },
  mountain: { name: '山區', buildMult: { 1: 1.6, 2: 1.5, 3: 1.35, 4: 1.2, 5: 1.1 }, taxMult: 0.9, text: '高山多、平地少；越後期越好開發' },
  east: { name: '東部', buildMult: { 1: 1.8, 2: 1.6, 3: 1.4, 4: 1.15, 5: 1 }, taxMult: 0.95, text: '中央山脈阻隔：前期建造很貴，經濟起飛（北迴鐵路）後才便宜' },
  island: { name: '離島', buildMult: { 1: 1.4, 2: 1.3, 3: 1.2, 4: 1.1, 5: 1.1 }, taxMult: 1.15, text: '要船運建材；觀光讓稅收較高' },
};
export const REGION_INCOME = { perPlain: 3, perHill: 1 };
// 縣市 → 類型與建議（note 會顯示在「區域」視窗）
export const REGIONS = {
  高雄市: { type: 'west', note: '起點：高雄港' },
  臺南市: { type: 'west', note: '建議第一塊：平原最多，有安平港' },
  屏東縣: { type: 'west', note: '平原大、有東港；東邊是山' },
  嘉義縣: { type: 'west', note: '有布袋港，平原多' },
  嘉義市: { type: 'city', note: '很小、沒港口：要從嘉義縣或臺南接路過來' },
  雲林縣: { type: 'west', note: '平原多、沒港口：要從嘉義縣或彰化縣接路' },
  彰化縣: { type: 'west', note: '平原多、沒港口：要從臺中市接路' },
  臺中市: { type: 'west', note: '有台中港，東半部是山' },
  南投縣: { type: 'mountain', note: '台灣唯一不靠海的縣：全是山，適合蓋水庫與水力電廠' },
  苗栗縣: { type: 'west', note: '丘陵多，有外埔漁港' },
  新竹縣: { type: 'west', note: '沒港口：要從新竹市接路' },
  新竹市: { type: 'city', note: '小而平，有新竹漁港' },
  桃園市: { type: 'metro', note: '有竹圍漁港，往台北的跳板' },
  新北市: { type: 'metro', note: '有台北港：蓋到台北最快的路線' },
  臺北市: { type: 'metro', note: '沒港口：要從新北市或基隆市接路（蓋到台北！）' },
  基隆市: { type: 'city', note: '有基隆港，很小' },
  宜蘭縣: { type: 'east', note: '有蘇澳港；平原少' },
  花蓮縣: { type: 'east', note: '有花蓮港；中央山脈很難穿越' },
  臺東縣: { type: 'east', note: '有富岡港；最晚才好開發' },
  澎湖縣: { type: 'island', note: '離島，有馬公港；沒辦法鋪路連回本島' },
};

// =====================================================================
// ---- 第三版（T-TW-03）：城市服務系統 ----
// =====================================================================

// ---- 稅收：可調稅率（住宅／商業／工業分開，單位 %）----
// 收入 = 原本的稅收公式 × (稅率 / default)。稅率高於 default 每 1 個百分點：該類需求 −demandPerPoint、成長機率 −growthPerPoint；
// 住宅稅另外讓願意下船的移民 −immigrationPerPoint。低於 default 則反過來（加成最多到 maxBonus）。
export const TAX = {
  default: 9, min: 0, max: 20, step: 1,
  demandPerPoint: 0.1,
  growthPerPoint: 0.08,
  immigrationPerPoint: 0.08,
  maxBonus: 0.3,
};

// ---- 預算（%）：教育、治安、醫療、道路維護 ----
// 服務效果 × (預算 / 100) 的平方根（加碼的效果遞減）；該類設施維護費 × (預算 / 100)。
// 道路維護預算影響道路容量：容量 × (0.7 + 0.3 × 預算/100)。
export const BUDGET = {
  default: 100, min: 0, max: 150, step: 10,
  keys: { edu: '教育', police: '治安', health: '醫療', roads: '道路維護' },
};

// ---- 服務建築（配合時代開放）----
// svc：edu 教育、police 治安、health 醫療；strength：服務強度（0–100，範圍內取最大值）；radius：服務半徑
export const SERVICE_BUILDINGS = {
  shufang: { name: '書房', svc: 'edu', era: 1, cost: 6000, maintenance: 60, radius: 4, strength: 30 },
  gongxue: { name: '公學校', svc: 'edu', era: 2, cost: 40000, maintenance: 400, radius: 6, strength: 55 },
  middle: { name: '中學', svc: 'edu', era: 3, cost: 150000, maintenance: 1500, radius: 7, strength: 75 },
  university: { name: '大學', svc: 'edu', era: 4, cost: 900000, maintenance: 6000, radius: 11, strength: 100 },
  baojia: { name: '保甲局', svc: 'police', era: 1, cost: 4000, maintenance: 50, radius: 4, strength: 35 },
  paichu: { name: '派出所', svc: 'police', era: 2, cost: 25000, maintenance: 300, radius: 5, strength: 60 },
  policehq: { name: '警察局', svc: 'police', era: 3, cost: 150000, maintenance: 1500, radius: 9, strength: 100 },
  herbal: { name: '漢藥舖', svc: 'health', era: 1, cost: 5000, maintenance: 50, radius: 4, strength: 30 },
  hospital: { name: '醫院', svc: 'health', era: 2, cost: 50000, maintenance: 600, radius: 6, strength: 60 },
  medcenter: { name: '醫學中心', svc: 'health', era: 4, cost: 800000, maintenance: 5000, radius: 11, strength: 100 },
};

// 服務建築也是設施（要緊鄰接到港口的路），維護費再乘該類預算
for (const [k, v] of Object.entries(SERVICE_BUILDINGS)) FACILITIES[k] = { kind: 'service', needs: 'road', ...v };

// ---- 教育：教育程度（0–100）影響商業/工業能長到幾級、土地價值 ----
// levelReq：商業與工業要長到這一級，所在格子的教育程度至少要多少
export const EDUCATION = { levelReq: { 3: 15, 4: 35, 5: 55, 6: 75 } };

// ---- 犯罪（0–100）----
// 犯罪 = base + 密度(等級/6)×density + 失業率×unemployment − 教育×education − 警力×police
// 超過 growthBlock 的住宅停止成長（商業/工業不擋，才不會因為失業→犯罪→沒工作而卡死）；住宅幸福度 −犯罪×happiness
export const CRIME = { base: 8, density: 60, unemployment: 40, education: 0.15, police: 0.7, growthBlock: 60, happiness: 0.15 };

// ---- 污染（0–100）與健康（0–100）----
// 污染：工業區每級 perLevel（範圍 radius，越遠越少；科技園區樣式 ×techMult）、電廠和港口見 sources
export const POLLUTION = {
  industry: { perLevel: 7, radius: 3, techMult: 0.3 },
  sources: { coal: [55, 4], nuclear: [25, 3], hydro: [0, 0], modernplant: [8, 2], port: [15, 2] },   // [強度, 半徑]
  happiness: 0.2,      // 住宅幸福度 −污染×0.2
};
// 健康 = base + 醫療×care + 有水 water − 污染×pollution；自然增加率 × (0.5 + 健康/100)；住宅健康低於 growthBlock 停止成長
export const HEALTH = { base: 45, care: 0.5, water: 10, pollution: 0.6, growthBlock: 20 };

// ---- 交通：每格道路的車流量與壅塞 ----
// （第四版起車流改用通勤計算，見 COMMUTE；perPop/perJob/decay 只在沒有通勤資料時備用）
// 每個區塊每月產生的車流：住宅 人口×perPop、商工 工作×perJob，再乘時代的汽車普及率 carShare；
// 有鐵路（連到車站）或捷運的範圍，車流 ×(1 − transitShare)。
// 車流進入旁邊的道路，沿著往港口的方向累積（每格衰減 decay；優先走容量大的路）。
// 容量：一般道路依時代 road、橋 bridge；公路、高速公路依 trans；高架橋面另外 +elevated（兩層分流）。
// 壅塞 = 車流 / 容量：< 0.6 綠、< 1 黃、≥ 1 紅。區塊門口的路壅塞 ≥ 1 時成長機率 ×jamGrowth、住宅幸福度 −jamHappiness。
export const TRAFFIC = {
  perPop: 0.4, perJob: 0.4,
  carShare: { 1: 0.15, 2: 0.3, 3: 0.55, 4: 0.85, 5: 1 },
  transitShare: 0.35,
  decay: 0.9,
  capacity: { road: { 1: 250, 2: 350, 3: 450, 4: 550, 5: 600 }, bridge: 300, trans: { 1: 1400, 2: 3000 }, elevated: 1500 },
  green: 0.6, yellow: 1,
  jamGrowth: 0.6, jamHappiness: 8,
};

// ---- 土地價值（0–100）：影響稅收（×(0.7 + 0.6 × 地價/100)）；住宅第 5 級以上要 highLevelMin ----
export const LAND_VALUE = { base: 50, education: 0.15, health: 0.1, crime: 0.3, pollution: 0.4, transit: 0.4, jam: 10, landmark: 1, highLevelMin: 48 };

// ---- 路上的行人和交通工具（只是畫面效果，不影響模擬）----
// 數量上限（手機用 mobile）；只在放大到看得到細節時、畫面範圍內出現。
export const AGENTS = {
  cars: { desktop: 160, mobile: 60 },
  trains: { desktop: 6, mobile: 3 },
  peds: { desktop: 120, mobile: 45 },
  minZoom: 0.45,
  spawnPerSecond: 40,     // 每秒最多新增幾個
  carSpeed: 2.2,          // 格/秒（不塞車時）；壅塞時 ÷ (1 + 壅塞)
  trainSpeed: 4, trainStopSeconds: 2.5, trainCars: 4,
  pedSpeed: 0.35,
};

// =====================================================================
// ---- 第四版（T-TW-04）：通勤交通、居民與公司 ----
// =====================================================================

// ---- 通勤：住家 ↔ 工作地 ----
// 每棟住宅的上班人口 = 人口 × workerShare，配對到商業/工業的工作（找最快到的、還有職缺的那棟），
// 沿著道路網（道路、公路、高速公路、高架）找最快的路線；住家和公司都在鐵路（連到車站）或捷運範圍內的人，
// 有 railShare 改搭火車/捷運（不佔道路）。路線很短（≤ walkCells 格）就走路。
// 交通車流 = 每條路上開車/騎車通勤的人數 × 時代的汽車普及率（TRAFFIC.carShare），壅塞 = 車流 / 道路容量（TRAFFIC.capacity）。
// 每格行車時間（分鐘）：minutesPerCell × 道路倍率（公路、高速公路、高架較快），塞車時 × (1 + congWeight × (壅塞 − 0.6))。
// 通勤超過 longMinutes 分鐘：住宅幸福度 −longHappiness、成長 ×longGrowth；超過 maxMinutes 分鐘就不去（算失業）。
// 每 recomputeMonths 個月重新配對一次（蓋了東西也會在下個月重算）。rounds：配對回合數；nearestJobs：每輪每棟住宅可以依序試幾家最近的公司（越多越接近最佳，越慢）。
export const COMMUTE = {
  workerShare: 0.4,
  railShare: 0.5,
  walkCells: 2,
  minutesPerCell: { walk: 12, road: 2, rail: 1 },
  roadSpeed: { road: 1, bridge: 1.2, highway: 0.7, freeway: 0.45, elevated: 0.6 },
  railWaitMinutes: 8,
  congWeight: 1.5,
  longMinutes: 50, longHappiness: 10, longGrowth: 0.7,
  maxMinutes: 120,
  recomputeMonths: 3,
  rounds: 16,
  nearestJobs: 8,   // 每個道路節點記住最近的幾家公司（一輪裡額滿就換下一家）
};

// ---- 居民與公司資料（全部虛構，程式產生，存進存檔）----
// residentsShown：每棟住宅保存幾位代表住戶（實際人口可能很多，面板會寫「共 N 人，以下是代表住戶」）
// 教育程度（依時代可能出現的程度，越後面越高）
export const RESIDENTS = {
  residentsShown: 8,
  eduLevels: ['沒上過學', '私塾', '公學校', '國民學校', '國中', '高中職', '大學', '研究所'],
  eduByEra: { 1: [0, 1], 2: [0, 1, 2], 3: [0, 2, 3, 4, 5], 4: [3, 4, 5, 6], 5: [4, 5, 6, 7] },
};

// ---- 路上的交通工具對應通勤（AGENTS 之外的設定）----
// 一天在畫面上是 daySeconds 真實秒；早上 7–9 點往公司、傍晚 17–19 點回家是尖峰（peakMult 倍的車），晚上很少車。
// 每台車／每個行人代表 peoplePerAgent 個通勤的人（只影響「某條通勤路線出現車的機會」，總數仍受 AGENTS 上限）。
export const COMMUTE_VIEW = { daySeconds: 36, peakMult: 3, nightMult: 0.25, peoplePerAgent: 20 };

// ---- 破產、預警、緊急貸款 ----
export const FINANCE = {
  warnRunwayMonths: 6,     // 赤字下，錢撐不到 6 個月 → 黃色預警
  dangerRunwayMonths: 2,   // 撐不到 2 個月 → 紅色危急
  deficitStreakWarn: 3,    // 連續 3 個月赤字 → 跳提醒
  loan: { amount: 150000, monthlyPayment: 3000, months: 60 },   // 借 15 萬，每月還 3000 元，還 60 個月（共 18 萬）
};

// 里程碑（設計稿列的 8 個）
export const MILESTONES = [
  { id: 'firstRoad', name: '第一條路接上高雄港' },
  { id: 'firstShip', name: '第一艘帆船上岸' },
  { id: 'firstBridge', name: '第一座橋' },
  { id: 'firstRegion', name: '買下第一個新縣市' },
  { id: 'firstSpecial', name: '蓋好第一棟時代特殊建築' },
  { id: 'era2', name: '進入日據時代' },
  { id: 'taipei', name: '蓋到台北' },
  { id: 'modern', name: '進入現代' },
];

export const UNDO_LIMIT = 30;
