// 台灣模擬：住宅、公司、公共建築的名字與虛構住戶（第四版）。全部程式隨機產生（不是真實的人或公司），
// 用存檔裡的種子產生，所以重新讀檔後名字不會變。
import { RESIDENTS, TIME } from './config.js';

// 可重現的亂數（種子 → 0..1）
export function seeded(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const hash3 = (a, b, c) => {
  let h = (Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263) + Math.imul(c | 0, 2246822519)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return (h ^ (h >>> 16)) >>> 0;
};
const pick = (rnd, arr) => arr[Math.floor(rnd() * arr.length) % arr.length];
const chars = (s) => [...s];

const SURNAMES = chars('陳林黃張李王吳劉蔡楊許鄭謝郭洪曾邱廖賴周徐蘇葉莊呂江何蕭羅高潘簡朱鍾彭游詹胡施沈余趙盧梁顏柯孫魏翁戴范宋方鄧杜傅侯曹薛丁卓阮馬董溫唐藍石蔣古紀姚連馮歐程湯田康姜白汪鄒尤巫黎涂龔嚴韓袁金童陸夏柳邵錢伍倪');
// 名字用字依出生年代（男、女）
const GIVEN = [
  [1900, chars('金水火土木添旺福財來德清榮春天坤發'), chars('罔招秀玉金月春桃蘭麗珠梅雀枝')],
  [1945, chars('正義雄清文明輝茂昌坤榮忠信德進'), chars('秀美玉麗月雲英珠嬌蓮碧素香')],
  [1970, chars('志明建國文宏俊偉忠勝正雄家義傑'), chars('淑美惠芬玲珍麗華慧娟雅秀鳳如')],
  [1990, chars('家豪宗翰建宏冠宇志偉俊傑彥廷'), chars('怡君雅婷佳慧欣靜宜筱涵詩穎')],
  [9999, chars('承恩宥廷品睿柏翔宇軒子晨冠皓'), chars('品妍子晴語彤芯瑜宥安詠恩苡禾')],
];
export function personName(rnd, birthYear, female) {
  const pool = (GIVEN.find((x) => birthYear < x[0]) || GIVEN[GIVEN.length - 1])[female ? 2 : 1];
  const a = pick(rnd, pool);
  let b = pick(rnd, pool);
  for (let k = 0; b === a && k < 5; k++) b = pick(rnd, pool);
  return pick(rnd, SURNAMES) + a + b;
}

// 吉祥字（地名、店名用）
const WORDS = chars('福安和平華昌榮德勝新美樂富永泰興隆祥瑞春嘉康明豐盛仁聚寶鑫順欣鴻宏合綠青松竹');
// 避開常見的真實企業／品牌名稱（隨機組合碰到就重抽）
const BANNED = ['新光', '義美', '統一', '國泰', '富邦', '長榮', '大同', '遠東', '華碩', '宏碁', '台塑', '台積', '鴻海', '聯發', '中鋼', '奇美', '光泉', '味全', '華南', '永豐', '泰山', '新東陽', '全家', '萊爾富', '康和', '和泰', '台新', '永和豆漿'];
function word2(rnd) {
  const a = pick(rnd, WORDS);
  let b = pick(rnd, WORDS);
  for (let k = 0; b === a && k < 5; k++) b = pick(rnd, WORDS);
  return a + b;
}
function clean(rnd, make) {
  for (let k = 0; k < 20; k++) {
    const s = make();
    if (!BANNED.some((b) => s.includes(b))) return s;
  }
  return make() + '號';
}

const HOUSE = {
  1: ['{姓}家厝', '{詞}庄', '{詞}厝', '{姓}家三合院'],
  2: ['{詞}町長屋', '{詞}街屋', '{詞}宿舍', '{詞}洋樓'],
  3: ['{詞}新村', '{詞}公寓', '{詞}眷舍', '{詞}透天'],
  4: ['{詞}大廈', '{詞}華廈', '{詞}社區', '{詞}國宅'],
  5: ['{詞}花園', '{詞}天廈', '{詞}雅苑', '{詞}晶華', '{詞}帝寶'],
};
// 產業：[名稱尾巴, 產業類別]
const SHOPS = {
  1: [['布莊', '布匹'], ['米舖', '米糧'], ['雜貨店', '雜貨'], ['茶行', '茶葉'], ['藥材行', '中藥材'], ['打鐵店', '鐵器']],
  2: [['商行', '貿易'], ['吳服店', '服飾'], ['書局', '書籍文具'], ['菓子店', '糕餅'], ['寫真館', '照相'], ['時計店', '鐘錶']],
  3: [['百貨行', '百貨'], ['西藥房', '藥品'], ['電器行', '家電'], ['冰果室', '餐飲'], ['照相館', '照相'], ['鐘錶行', '鐘錶']],
  4: [['百貨公司', '百貨'], ['超級市場', '零售'], ['銀樓', '金飾'], ['大飯店', '餐飲旅館'], ['電器百貨', '家電'], ['書局', '書籍文具']],
  5: [['便利商店', '零售'], ['咖啡館', '餐飲'], ['購物中心', '百貨'], ['證券', '金融'], ['飲料店', '餐飲'], ['電子商場', '3C 零售']],
};
const FACTORIES = {
  1: [['碾米廠', '碾米'], ['製茶場', '製茶'], ['糖廍', '製糖'], ['磚窯', '建材'], ['木作坊', '木工']],
  2: [['製糖所', '製糖'], ['樟腦工場', '樟腦'], ['鳳梨罐詰工場', '罐頭食品'], ['製材所', '木材'], ['紡織工場', '紡織']],
  3: [['紡織廠', '紡織'], ['塑膠廠', '塑膠'], ['加工廠', '加工出口'], ['食品廠', '食品'], ['合板廠', '木材']],
  4: [['電子廠', '電子'], ['成衣廠', '成衣'], ['鋼鐵廠', '鋼鐵'], ['玩具廠', '玩具'], ['製鞋廠', '製鞋']],
  5: [['半導體廠', '半導體'], ['光電廠', '光電'], ['生技', '生物科技'], ['精密機械廠', '精密機械'], ['資訊', '資訊軟體']],
};

// 依種類產生名字：kind 'R' 'C' 'I' 或 'B'（公共建築等，facName 是設施名稱）
export function buildingName(seed, kind, era, facName = '') {
  const rnd = seeded(seed);
  const e = Math.min(5, Math.max(1, era));
  if (kind === 'R') return clean(rnd, () => pick(rnd, HOUSE[e]).replace('{姓}', pick(rnd, SURNAMES)).replace('{詞}', word2(rnd)));
  if (kind === 'C' || kind === 'I') {
    const [tail, ind] = pick(rnd, (kind === 'C' ? SHOPS : FACTORIES)[e]);
    return { name: clean(rnd, () => word2(rnd) + tail), industry: ind };
  }
  return clean(rnd, () => word2(rnd) + facName);
}

// 產生一位虛構住戶：[名字, 出生年, 教育程度編號, 女性?]
export function makeResident(seed, k, era, year, eduCover) {
  const rnd = seeded(hash3(seed, k, 7));
  const age = 18 + Math.floor(rnd() * 50);
  const birth = year - age;
  const female = rnd() < 0.5;
  const levels = RESIDENTS.eduByEra[Math.min(5, Math.max(1, era))];
  // 附近教育越好，越可能是比較高的程度
  const t = Math.min(0.999, rnd() * 0.7 + (eduCover / 100) * 0.5);
  const edu = levels[Math.min(levels.length - 1, Math.floor(t * levels.length))];
  return [personName(rnd, birth, female), birth, edu, female ? 1 : 0];
}
export const yearOf = (month) => TIME.startYear + Math.floor(month / 12);
