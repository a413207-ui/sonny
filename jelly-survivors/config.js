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
    maxEnemies: isTouch ? 150 : 300, // 同時在場上限（含精英與王）
    despawnDistance: 48, // 離玩家太遠的怪會被搬回出怪圈
    // 出怪權重：[開始的階數, 怪物 id, 權重, 一次出幾隻(min,max), 陣型]
    spawnTable: [
      { from: 0, type: 'slime', weight: 10, group: [3, 6], formation: 'cluster' },
      { from: 1, type: 'caterpillar', weight: 3, group: [3, 5], formation: 'line' },
      { from: 4, type: 'caterpillar', weight: 3, group: [4, 7], formation: 'cluster' },
    ],
  },

  // ---------- 精英怪（G-CORE-02）----------
  elite: {
    type: 'bigCaterpillar',
    firstAt: 60, // 1:00 出第一隻
    interval: 75, // 之後每 75 秒一隻（1:00、2:15、3:30…）
    lastAt: 470, // 王出現後不再出精英
    warning: '精英怪「大綠毛蟲」出現了！',
  },

  // ---------- 王（G-CORE-02）----------
  boss: {
    type: 'slimeKing',
    spawnAt: 480, // 8:00 出現；打倒王或撐到 10:00 都算過關
    spawnRateMult: 0.6, // 王在場時，一般怪出怪量 ×0.6
    warning: '果凍史萊姆王來了！',
    charge: {
      interval: 6.5, // 每 6.5 秒衝撞一次
      windup: 0.9, // 衝撞前停下來蓄力（地上出現紅色警示）
      speed: 17,
      duration: 0.75,
    },
    split: {
      interval: 9, // 每 9 秒分裂出小史萊姆
      count: 6,
      hpMult: 2.5, // 小史萊姆血量 ×2.5（相對一般史萊姆）
    },
    enrageHpFrac: 0.5, // 血量低於一半時：立刻分裂一大波，之後衝撞間隔 ×0.7
    enrageSplitCount: 12,
    enrageChargeMult: 0.7,
  },

  // ---------- 怪物 ----------
  // render：'slime'（Q 彈球）或 'caterpillar'（一串小球）；scale = 外觀放大倍率
  // gem：掉一顆寶石的機率表；drops.gems：固定掉的寶石；gold：掉金幣機率與數量
  enemies: {
    slime: {
      name: '果凍史萊姆',
      render: 'slime',
      hp: 10,
      speed: 2.3,
      damage: 7,
      radius: 0.6,
      mass: 1,
      color: 0x5fe3ff,
      opacity: 0.72,
      gem: { small: 0.92, medium: 0.08, large: 0 },
      gold: { chance: 0.04, amount: 1 },
    },
    caterpillar: {
      name: '綠毛蟲',
      render: 'caterpillar',
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
      gold: { chance: 0.1, amount: 1 },
    },
    bigCaterpillar: {
      name: '大綠毛蟲',
      render: 'caterpillar',
      elite: true,
      hp: 240, // 會再乘上當下難度階的血量倍率
      speed: 2.4,
      damage: 16,
      radius: 1.1,
      scale: 2.4, // 外觀是一般毛蟲的 2.4 倍
      mass: 8,
      color: 0x2f9e3a,
      headColor: 0xe0a020,
      noDespawn: true,
      drops: { gems: ['large', 'large', 'medium', 'medium', 'medium'] },
      gold: { chance: 1, amount: 12 },
      potionChance: 0.25, // 25% 掉遺忘藥水
    },
    slimeKing: {
      name: '果凍史萊姆王',
      render: 'slime',
      boss: true,
      hp: 5000, // 固定血量，不隨難度階成長
      speed: 2.1,
      damage: 28,
      radius: 2.4,
      scale: 1,
      mass: 60, // 幾乎不會被擊退
      color: 0xb07cff,
      opacity: 0.8,
      noDespawn: true,
      drops: { gems: [] },
      gold: { chance: 1, amount: 80 }, // 打倒時直接入帳
    },
  },
  enemyFlashTime: 0.1,
  knockback: 5,

  // ---------- 金幣 / 道具掉落 ----------
  pickups: {
    max: 160, // 地上金幣 + 藥水的物件池上限，滿了直接入帳
    coinColor: 0xffd23f,
    potionColor: 0xff6ad5,
    collectRadius: 0.7,
  },
  potion: {
    name: '遺忘藥水',
    desc: '丟掉一個已擁有的主動招式，空出技能欄',
    max: 9, // 身上最多帶幾瓶
  },

  // ---------- 轉職（G-CORE-02）----------
  job: {
    level: 10, // 升到 Lv10 時暫停、選擇職業
    potionsOnChange: 1, // 轉職時送 1 瓶遺忘藥水
    // bonus：轉職後的永久小加成（會顯示在左側被動數值）
    classes: {
      blade: {
        name: '果凍劍士',
        color: '#ff8a5c',
        desc: '近身纏鬥，旋轉刀刃與地裂衝擊。最大血量 +30。',
        skills: ['whirl', 'quake', 'guard'],
        bonus: { bonusHp: 30 },
      },
      mage: {
        name: '星屑術士',
        color: '#9c7bff',
        desc: '召喚流星、冰霜與追蹤魔彈，範圍壓制。攻擊範圍 +10%。',
        skills: ['meteor', 'frost', 'arcane'],
        bonus: { area: 0.1 },
      },
      ranger: {
        name: '疾風射手',
        color: '#4fcf8a',
        desc: '扇形散射、追風羽毛與箭雨，邊跑邊打。移動速度 +10%。',
        skills: ['volley', 'feather', 'rain'],
        bonus: { speed: 0.1 },
      },
    },
  },

  // ---------- 招式 ----------
  // 每一級的數值；index 0 = Lv1。job 留空 = 初心者招式（所有人都能拿）。
  // type：slash 揮砍 / projectile 子彈 / orbit 環繞 / aura 周身爆發 / strike 指定地點落下
  // icon：正式圖示路徑（128×128 PNG 透明背景），換圖只要覆蓋同名檔案。
  // abbr / color：圖示載入失敗時的文字佔位。
  skills: {
    slash: {
      name: '普通揮砍',
      type: 'slash',
      icon: 'assets/icons/slash.png',
      abbr: '斬',
      color: '#f0c860',
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
      type: 'projectile',
      icon: 'assets/icons/rock.png',
      abbr: '石',
      color: '#a89a86',
      desc: ['朝隨機敵人丟石頭', '多丟 1 顆', '傷害 +6', '多丟 1 顆、可貫穿 1 隻', '冷卻 -20%'],
      target: 'random',
      shape: 'rock',
      meshColor: 0x9a9184,
      damage: [10, 10, 16, 16, 16],
      count: [1, 2, 2, 3, 3],
      pierce: [0, 0, 0, 1, 1],
      cooldown: [1.5, 1.5, 1.5, 1.5, 1.2],
      speed: 15,
      lifetime: 1.6,
      radius: 0.3,
      targetRange: 16,
    },

    // ----- 果凍劍士 -----
    whirl: {
      name: '旋風刃',
      job: 'blade',
      type: 'orbit',
      icon: 'assets/icons/whirl.png',
      abbr: '旋',
      color: '#ff8a5c',
      desc: ['兩把刀刃繞著身體旋轉', '傷害 +4', '多 1 把刀刃', '傷害 +4、半徑變大', '多 1 把刀刃、轉更快'],
      meshColor: 0xffb070,
      count: [2, 2, 3, 3, 4],
      damage: [10, 14, 14, 18, 18],
      orbitRadius: [2.2, 2.2, 2.4, 2.8, 2.8],
      spin: [3.2, 3.2, 3.4, 3.4, 4.2], // 每秒轉幾弧度
      bladeRadius: 0.6,
      hitInterval: 0.35, // 每把刀每 0.35 秒結算一次傷害
    },
    quake: {
      name: '裂地波',
      job: 'blade',
      type: 'projectile',
      icon: 'assets/icons/quake.png',
      abbr: '裂',
      color: '#d0703c',
      desc: ['朝最近的敵人劈出貫穿的衝擊波', '傷害 +8', '一次 2 道', '傷害 +8、冷卻 -10%', '一次 3 道'],
      target: 'nearest',
      shape: 'wave',
      meshColor: 0xffe0a0,
      damage: [20, 28, 28, 36, 36],
      count: [1, 1, 2, 2, 3],
      spread: 25, // 多道時的扇形角度
      pierce: [99, 99, 99, 99, 99],
      cooldown: [2.2, 2.2, 2.2, 2.0, 2.0],
      speed: 11,
      lifetime: 1.0,
      radius: 0.9,
      targetRange: 14,
    },
    guard: {
      name: '震盾',
      job: 'blade',
      type: 'aura',
      icon: 'assets/icons/guard.png',
      abbr: '盾',
      color: '#e8b040',
      desc: ['以盾牌震開身邊的敵人', '傷害 +5、範圍變大', '冷卻 -10%', '傷害 +5、範圍變大', '傷害 +8、冷卻 -10%'],
      meshColor: 0xffe08a,
      damage: [15, 20, 20, 25, 33],
      radius: [3.0, 3.4, 3.4, 3.8, 3.8],
      cooldown: [3.0, 3.0, 2.7, 2.7, 2.4],
      knockback: 3, // 擊退倍率
      slow: [0, 0, 0, 0, 0],
    },

    // ----- 星屑術士 -----
    meteor: {
      name: '流星墜',
      job: 'mage',
      type: 'strike',
      icon: 'assets/icons/meteor.png',
      abbr: '星',
      color: '#9c7bff',
      desc: ['流星砸向敵人所在位置', '多 1 顆', '傷害 +10', '多 1 顆、範圍變大', '多 1 顆、傷害 +10'],
      meshColor: 0xc0a0ff,
      count: [1, 2, 2, 3, 4],
      damage: [30, 30, 40, 40, 50],
      radius: [1.8, 1.8, 1.8, 2.2, 2.2],
      delay: 0.6, // 地上預警圈出現後幾秒落下
      cooldown: [2.6, 2.6, 2.6, 2.4, 2.2],
      targetRange: 16,
    },
    frost: {
      name: '霜晶爆',
      job: 'mage',
      type: 'aura',
      icon: 'assets/icons/frost.png',
      abbr: '霜',
      color: '#6fd0ff',
      desc: ['身邊爆出冰霜，傷害並減速', '減速更久', '範圍變大', '傷害 +4、冷卻 -10%', '傷害 +6、減速更久'],
      meshColor: 0xaee8ff,
      damage: [8, 8, 8, 12, 18],
      radius: [3.6, 3.6, 4.2, 4.2, 4.2],
      cooldown: [3.5, 3.5, 3.5, 3.15, 3.15],
      knockback: 0.5,
      slow: [1.5, 2.2, 2.2, 2.2, 3.0], // 減速秒數（減速時移速 ×0.5）
    },
    arcane: {
      name: '奧術飛彈',
      job: 'mage',
      type: 'projectile',
      icon: 'assets/icons/arcane.png',
      abbr: '奧',
      color: '#c05cff',
      desc: ['發射會追蹤敵人的魔彈', '傷害 +3', '多 1 發', '傷害 +3、冷卻 -10%', '多 1 發'],
      target: 'nearest',
      shape: 'orb',
      meshColor: 0xd08cff,
      damage: [9, 12, 12, 15, 15],
      count: [2, 2, 3, 3, 4],
      spread: 50,
      homing: 6, // 轉向速度（越大越會追）
      pierce: [0, 0, 0, 0, 0],
      cooldown: [1.4, 1.4, 1.4, 1.26, 1.26],
      speed: 10,
      lifetime: 2.2,
      radius: 0.3,
      targetRange: 16,
    },

    // ----- 疾風射手 -----
    volley: {
      name: '散射箭',
      job: 'ranger',
      type: 'projectile',
      icon: 'assets/icons/volley.png',
      abbr: '散',
      color: '#4fcf8a',
      desc: ['朝最近的敵人扇形射出 3 箭', '傷害 +3', '多 1 箭、可貫穿 1 隻', '多 1 箭', '傷害 +5、冷卻 -15%'],
      target: 'nearest',
      shape: 'arrow',
      meshColor: 0xf4f0d8,
      damage: [8, 11, 11, 11, 16],
      count: [3, 3, 4, 5, 5],
      spread: 30,
      pierce: [0, 0, 1, 1, 1],
      cooldown: [1.3, 1.3, 1.3, 1.3, 1.1],
      speed: 20,
      lifetime: 1.0,
      radius: 0.3,
      targetRange: 16,
    },
    feather: {
      name: '追風羽',
      job: 'ranger',
      type: 'projectile',
      icon: 'assets/icons/feather.png',
      abbr: '羽',
      color: '#8be0c0',
      desc: ['射出會轉彎追擊、可貫穿的羽毛', '多 1 根', '傷害 +4、多貫穿 1 隻', '多 1 根', '傷害 +4、多貫穿 1 隻'],
      target: 'random',
      shape: 'arrow',
      meshColor: 0x9ff0d0,
      damage: [14, 14, 18, 18, 22],
      count: [1, 2, 2, 3, 3],
      spread: 60,
      homing: 8,
      pierce: [1, 1, 2, 2, 3],
      cooldown: [1.6, 1.6, 1.6, 1.6, 1.6],
      speed: 14,
      lifetime: 2.0,
      radius: 0.35,
      targetRange: 18,
    },
    rain: {
      name: '箭雨',
      job: 'ranger',
      type: 'strike',
      icon: 'assets/icons/rain.png',
      abbr: '雨',
      color: '#3fae6a',
      desc: ['在敵人頭上落下一陣箭雨', '多 1 處', '傷害 +4', '多 1 處、範圍變大', '多 1 處、傷害 +6'],
      meshColor: 0xd8ffd0,
      count: [3, 4, 4, 5, 6],
      damage: [12, 12, 16, 16, 22],
      radius: [1.2, 1.2, 1.2, 1.5, 1.5],
      delay: 0.35,
      cooldown: [2.4, 2.4, 2.4, 2.4, 2.4],
      targetRange: 15,
    },
  },
  maxProjectiles: 120, // 每個子彈招式的物件池上限

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

  // ---------- 局外升級 / 存檔（G-CORE-02）----------
  save: {
    key: 'jellySurvivors.save', // localStorage 的 key
    version: 1, // 存檔格式版本；格式改了就 +1 並在 save.js 寫轉換
  },
  // 每項：per = 每級加成；cost = 每一級的價格（長度 = 最高等級）
  meta: {
    might: { name: '攻擊', icon: '💪', desc: '傷害 +5%', per: 0.05, cost: [40, 80, 140, 220, 320] },
    vitality: { name: '血量', icon: '❤️', desc: '最大血量 +10', per: 10, cost: [30, 60, 110, 180, 270] },
    swift: { name: '移速', icon: '👟', desc: '移動速度 +3%', per: 0.03, cost: [40, 80, 140, 220, 320] },
    magnet: { name: '吸取範圍', icon: '🧲', desc: '吸取範圍 +10%', per: 0.1, cost: [25, 50, 90, 150, 230] },
    greed: { name: '金幣加成', icon: '🪙', desc: '撿到的金幣 +10%', per: 0.1, cost: [50, 100, 170, 260, 380] },
  },

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
