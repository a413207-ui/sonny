// 《果凍大陸：轉職倖存者》—— 所有可調數值集中在這裡。
// 單位：距離 = 世界單位（約等於角色身高的一半），時間 = 秒。
// 企劃沒寫的數值都是 G-CORE-01 的預設值，之後可以直接改這個檔案調手感。

const isTouch =
  typeof window !== 'undefined' &&
  (window.matchMedia?.('(pointer: coarse)').matches || 'ontouchstart' in window);

export const CONFIG = {
  isMobile: isTouch,

  // ---------- 畫面 / 鏡頭 ----------
  render: {
    maxPixelRatio: isTouch ? 1.5 : 2,
    antialias: !isTouch,
  },
  camera: {
    fov: 45,
    // 鏡頭從角色後上方往下看；tilt 越大越接近正俯視（1 = 正上方）
    tilt: 0.82,
    // 畫面較短的那一邊，至少要看到多少世界單位
    minViewSpan: 26,
    // 直式手機時，額外再拉遠的程度（0 = 不補償，1 = 完全照短邊算）
    portraitCompensation: 0.55,
    followLerp: 10, // 越大跟得越緊
  },

  // ---------- 地圖 ----------
  map: {
    size: 120, // 正方形邊長，約 3×3 個橫式畫面
    wallHeight: 1.2,
    wallThickness: 1.0,
    groundColor: 0x8fd16a,
    groundColor2: 0x84c862,
    wallColor: 0xb98a55,
  },

  // ---------- 玩家 ----------
  player: {
    maxHp: 100,
    speed: 5.4,
    radius: 0.5,
    invulnTime: 0.5, // 被打之後的無敵時間
    hpRegen: 0, // 每秒回血（之後被動用）
    pickupRadius: 2.2, // 經驗寶石吸取範圍
    color: 0xffd28a,
  },

  // ---------- 經驗 / 升級 ----------
  xp: {
    firstLevel: 6, // 升到 Lv2 所需經驗
    growth: 1.12, // 每一級比上一級多 12%
    gemMagnetSpeed: 14, // 寶石被吸過來的最高速度
    gemCollectRadius: 0.6,
    maxGems: 400, // 寶石物件池上限，超過時合併到既有寶石
    gems: {
      small: { value: 1, color: 0x4fb4ff, scale: 0.36 }, // 小藍
      medium: { value: 5, color: 0x45d36b, scale: 0.46 }, // 中綠
      large: { value: 20, color: 0xb05cff, scale: 0.6 }, // 大紫
    },
  },
  slots: { skills: 6, passives: 6, maxLevel: 5 },

  // ---------- 關卡 / 出怪 ----------
  stage: {
    id: 'jelly-plains',
    name: '果凍平原',
    duration: 600, // 撐到 10:00 過關
    tierInterval: 30, // 每 30 秒提高一次難度
    spawnRateBase: 1.3, // 每秒出怪數（第 0 階）
    spawnRateGrowth: 1.16, // 每一階出怪量 ×1.16
    hpGrowth: 1.1, // 每一階怪物血量 ×1.1
    damageGrowth: 1.04, // 每一階接觸傷害 ×1.04
    speedGrowth: 1.02, // 每一階怪物移動速度 ×1.02
    maxEnemies: isTouch ? 150 : 300, // 同時在場上限
    despawnDistance: 48, // 離玩家太遠的怪會被搬回出怪圈
    // 出怪權重：[開始的階數, 怪物 id, 權重, 一次出幾隻(min,max), 陣型]
    spawnTable: [
      { from: 0, type: 'slime', weight: 10, group: [3, 6], formation: 'cluster' },
      { from: 1, type: 'caterpillar', weight: 3, group: [3, 5], formation: 'line' },
      { from: 4, type: 'caterpillar', weight: 3, group: [4, 7], formation: 'cluster' },
    ],
  },

  // ---------- 怪物 ----------
  enemies: {
    slime: {
      name: '果凍史萊姆',
      hp: 10,
      speed: 2.3,
      damage: 7,
      radius: 0.6,
      mass: 1,
      color: 0x5fe3ff,
      opacity: 0.72,
      gem: { small: 0.92, medium: 0.08, large: 0 },
    },
    caterpillar: {
      name: '綠毛蟲',
      hp: 26,
      speed: 2.7,
      damage: 10,
      radius: 0.5,
      mass: 2,
      color: 0x5cc23a,
      headColor: 0x3f9a25,
      segments: 5, // 一隻毛蟲由 5 顆小球組成
      segmentSpacing: 0.42,
      segmentRadius: 0.36,
      gem: { small: 0.55, medium: 0.4, large: 0.05 },
    },
  },
  enemyFlashTime: 0.1,
  knockback: 5,

  // ---------- 招式（初心者）----------
  // 每一級的數值；index 0 = Lv1
  skills: {
    slash: {
      name: '普通揮砍',
      icon: '⚔️',
      desc: ['自動朝最近的敵人揮一刀', '傷害 +5', '範圍 +15%', '冷卻 -15%', '前後同時揮砍'],
      damage: [12, 17, 17, 17, 17],
      range: [2.8, 2.8, 3.2, 3.2, 3.2],
      arc: [130, 130, 140, 140, 150], // 角度
      cooldown: [1.0, 1.0, 1.0, 0.85, 0.85],
      doubleSided: [false, false, false, false, true],
      seekRange: 9, // 只追這個距離內的敵人；沒有就朝面向揮
    },
    rock: {
      name: '丟石頭',
      icon: '🪨',
      desc: ['朝隨機敵人丟石頭', '多丟 1 顆', '傷害 +6', '多丟 1 顆、可貫穿 1 隻', '冷卻 -20%'],
      damage: [10, 10, 16, 16, 16],
      count: [1, 2, 2, 3, 3],
      pierce: [0, 0, 0, 1, 1],
      cooldown: [1.5, 1.5, 1.5, 1.5, 1.2],
      speed: 15,
      lifetime: 1.6,
      radius: 0.3,
      targetRange: 16,
    },
  },
  maxProjectiles: 120,

  // ---------- 通用被動 ----------
  passives: {
    might: { name: '攻擊', icon: '💪', desc: '傷害 +15%', perLevel: 0.15 },
    haste: { name: '攻速', icon: '⏱️', desc: '冷卻 -8%', perLevel: 0.08 },
    swift: { name: '移速', icon: '👟', desc: '移動速度 +8%', perLevel: 0.08 },
    area: { name: '範圍', icon: '⭕', desc: '攻擊範圍 +10%', perLevel: 0.1 },
    vitality: { name: '血量', icon: '❤️', desc: '最大血量 +20，並回復 20', perLevel: 20 },
    magnet: { name: '吸取範圍', icon: '🧲', desc: '吸取範圍 +30%', perLevel: 0.3 },
  },
  // 所有東西都滿級時的保底卡
  fallbackCard: { id: 'snack', name: '果凍點心', icon: '🍮', desc: '回復 30 血量', heal: 30 },

  // ---------- 操作 ----------
  input: {
    joystickRadius: 60, // px
    joystickDeadZone: 8, // px
  },

  // 每一級所需經驗（Lv1→2 為 index 0）
  xpForLevel(level) {
    return Math.round(this.xp.firstLevel * Math.pow(this.xp.growth, level - 1));
  },
};
