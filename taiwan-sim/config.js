// 台灣模擬：所有可調數值都在這裡（Sonny 可以直接改）。
// 金額單位：元。時間單位：月（遊戲內）。

export const SAVE_KEY = 'taiwanSim.save';
export const SAVE_VERSION = 1;

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

// ---- 買地：第 n 塊 = base × ratio^(n−1)（Sonny 已確認） ----
export const LAND = {
  base: 500000,
  ratio: 1.5,
  // 第一版建議開放購買的縣市；其餘縣市也能買，但數值沒有細調（介面上標「未細調」）
  mvpRegions: ['臺南市'],
  allowOthers: true,
};

// ---- 時代（交給 Claude 決定的部分）----
// popToNext：進入下一時代需要的人口；special：本時代的「時代特殊建築」（蓋好它 + 人口達標 → 進入下一時代）
// maxLevel：本時代區塊最多能長到幾級；ship：本時代的船
export const ERAS = [
  {
    id: 1, name: '清末時代', years: '1860–1895', maxLevel: 2, popToNext: 2500,
    ship: { name: '帆船', capacity: 40, intervalMonths: 2, travelMonths: 1 },
    special: 'lighthouse',
    unlocks: ['土路', '木橋', '農舍（住）', '市集（商）', '小作坊（工）', '水井', '燈塔（特殊）'],
    zoneNames: { R: '農舍', C: '市集', I: '小作坊' },
  },
  {
    id: 2, name: '日據時代', years: '1895–1945', maxLevel: 4, popToNext: 20000,
    ship: { name: '蒸汽船', capacity: 150, intervalMonths: 1.5, travelMonths: 0.8 },
    special: 'station',
    unlocks: ['石板路', '石橋', '磚造街屋（住）', '商行（商）', '製糖工廠（工）', '燃煤發電廠', '電線', '自來水廠', '水管', '火車站（特殊）'],
    zoneNames: { R: '磚造街屋', C: '商行', I: '製糖工廠' },
  },
  {
    id: 3, name: '民國光復時代', years: '1945–1970', maxLevel: 5, popToNext: 80000, locked: true,
    ship: { name: '貨輪', capacity: 400, intervalMonths: 1, travelMonths: 0.6 },
    special: 'dam',
    unlocks: ['柏油路', '公路', '公寓（住）', '百貨（商）', '加工廠（工）', '水力發電廠', '水庫（特殊）'],
    zoneNames: { R: '公寓', C: '百貨', I: '加工廠' },
  },
  {
    id: 4, name: '經濟起飛時代', years: '1970–1990', maxLevel: 6, popToNext: 250000, locked: true,
    ship: { name: '貨櫃輪', capacity: 800, intervalMonths: 1, travelMonths: 0.5 },
    special: 'epz',
    unlocks: ['高速公路', '大樓住宅（住）', '商場（商）', '加工出口區（工）', '核能／火力電廠', '加工出口區管理處（特殊）'],
    zoneNames: { R: '大樓住宅', C: '商場', I: '加工出口區' },
  },
  {
    id: 5, name: '現代', years: '1990–', maxLevel: 6, popToNext: null, locked: true,
    ship: { name: '大型貨櫃輪', capacity: 1500, intervalMonths: 1, travelMonths: 0.5 },
    special: 'skyscraper',
    unlocks: ['高架道路', '捷運', '商辦大樓（商）', '科技園區（工）', '新型電廠', '淨水廠', '摩天大樓（特殊）'],
    zoneNames: { R: '高樓住宅', C: '商辦大樓', I: '科技園區' },
  },
];
// 第一版只開放到第幾個時代（之後的時代先列表，不能升級）
export const MAX_PLAYABLE_ERA = 2;
// 從第幾個時代開始，區塊需要電才會成長（清末還沒有電）
export const POWER_REQUIRED_FROM_ERA = 2;

// ---- 地形 ----
export const TERRAIN = { SEA: 0, PLAIN: 1, HILL: 2, MOUNTAIN: 3, RIVER: 4 };
export const TERRAIN_NAMES = ['海', '平原', '丘陵', '高山', '河流'];
// 丘陵上的區塊容量倍率（密度較低）
export const HILL_DENSITY = 0.5;

// ---- 道路 ----
export const ROAD = {
  cost: { plain: 300, hill: 700, mountain: 3000 },   // 高山 = 山路/隧道
  bridgeCost: { 1: 2500, 2: 1500 },                  // 木橋 / 石橋（依時代）
  maintenance: 4,                                     // 每格每月
  bridgeMaintenance: { 1: 40, 2: 20 },
  names: { 1: '土路', 2: '石板路' },
  bridgeNames: { 1: '木橋', 2: '石橋' },
};

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
  industryNear: -12, industryNearMax: -48, plantNear: -15, radius: 2,
};

// ---- 人口與需求 ----
export const ECON = {
  labor: 0.6,            // 人口中有多少是勞動力
  selfEmployed: 0.2,     // 不需要商工工作的人口比例（農民等），加上 baseJobs
  baseJobs: 60,
  shopNeed: 0.25,        // 每人需要多少商業工作（顧客 → 商業需求）
  goodsNeed: 0.6,        // 每個商業工作需要多少工業工作（貨物）
  industryBase: 30,      // 港口貿易帶來的基本工業需求
  tax: { R: 2.6, C: 4.2, I: 3.6 },   // 每月：每人 / 每個有人做的工作
  tradePerIndustryJob: 2,          // 港口貿易：每個工業工作每月
};

// ---- 港口與移民 ----
export const PORT = {
  unloadPerMonth: 120,   // 每個港口每月最多卸下幾人（之後可升級）
};

// ---- 水電設施 ----
// coverRadius：設施本身覆蓋半徑；lineRadius：管線/電線兩側覆蓋半徑；capacity：可供應量（住宅 1 人 = 1，工作 1 個 = 0.5）
export const FACILITIES = {
  well: { name: '水井', kind: 'water', era: 1, cost: 4000, maintenance: 60, capacity: 300, coverRadius: 3, needs: null },
  waterworks: { name: '自來水廠', kind: 'water', era: 2, cost: 30000, maintenance: 450, capacity: 5000, coverRadius: 2, needs: 'river' },
  coal: { name: '燃煤發電廠', kind: 'power', era: 2, cost: 45000, maintenance: 700, capacity: 6000, coverRadius: 2, needs: null },
  lighthouse: { name: '燈塔', kind: 'special', era: 1, cost: 120000, maintenance: 200, needs: 'coast', specialOf: 1 },
  station: { name: '火車站', kind: 'special', era: 2, cost: 600000, maintenance: 1500, needs: 'road', specialOf: 2 },
};
export const LINES = {
  pipe: { name: '水管', era: 2, cost: 80, maintenance: 1, radius: 2 },
  wire: { name: '電線', era: 2, cost: 100, maintenance: 1, radius: 2 },
};

// ---- 破產、預警、緊急貸款（交給 Claude 決定的部分）----
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
