"""產生 games/fishing/data/fish.json（釣魚遊戲魚種資料庫）。

用法：python games/fishing/data/build_fish.py
改魚種請改下面的 FISH 表，再重新執行；不要直接手改 fish.json。

欄位說明（每行一種魚）：
  id, 名稱, 稀有度, 區域, 時段, 重量kg範圍, 長度cm範圍, 外形, 主色, 點綴色, 圖鑑說明
稀有度：C 普通 / U 少見 / R 稀有 / E 史詩 / L 傳說
區域：harbor 港灣 / lake 翠湖 / river 溪谷 / reef 珊瑚礁 / deep 深海
時段：dawn 清晨(5-8) / day 白天(8-17) / dusk 黃昏(17-19) / night 夜晚(19-5) / any 任何時間
外形（給畫圖與暫用圖）：slim 細長 / round 圓胖 / flat 側扁 / long 長吻大型 / eel 鰻形 /
  shark 鯊形 / ray 魟形 / squid 頭足 / crab 甲殼 / turtle 龜 / seahorse 海馬 / myth 奇幻
"""
import json
import os

RARITY = {"C": "common", "U": "uncommon", "R": "rare", "E": "epic", "L": "legendary"}
BASE_PRICE = {"C": 12, "U": 40, "R": 150, "E": 500, "L": 2000}

FISH = [
    # ── 港灣 harbor（城鎮碼頭邊）──
    ("sardine", "沙丁魚", "C", "harbor", "any", (0.05, 0.2), (12, 22), "slim", "#6f8fb0", "#c9d8e6", "成群結隊在港邊閃閃發亮。"),
    ("anchovy", "鯷魚", "C", "harbor", "any", (0.02, 0.06), (8, 14), "slim", "#7e9cb3", "#dfe9f0", "小小一條，是大魚最愛的點心。"),
    ("mackerel", "鯖魚", "C", "harbor", "day", (0.3, 1.0), (25, 40), "slim", "#3f7d6e", "#1d3a4a", "背上有藍綠色波浪紋。"),
    ("horse_mackerel", "竹筴魚", "C", "harbor", "dawn,day", (0.15, 0.5), (18, 32), "slim", "#8aa0a8", "#e8d27a", "側線上有一排硬鱗。"),
    ("filefish", "剝皮魚", "C", "harbor", "day", (0.2, 0.8), (18, 30), "flat", "#9a8e74", "#5b5040", "皮又硬又粗，要剝皮才能吃。"),
    ("mullet", "烏魚", "C", "harbor", "dawn,dusk", (0.8, 3.0), (35, 60), "slim", "#5d6a75", "#c4ccd2", "冬天回游，魚卵是珍貴的烏魚子。"),
    ("squid", "小卷", "C", "harbor", "night", (0.05, 0.3), (10, 25), "squid", "#e7c4b4", "#b0574a", "夜裡被燈光吸引過來。"),
    ("black_seabream", "黑鯛", "U", "harbor", "dawn,dusk", (0.5, 3.0), (25, 50), "flat", "#3c4148", "#9aa2aa", "聰明又警覺，是釣客的好對手。"),
    ("sea_bass", "鱸魚", "U", "harbor", "dusk,night", (1.0, 6.0), (40, 80), "slim", "#8b9aa6", "#2f3d48", "愛在潮流交會處埋伏小魚。"),
    ("flathead", "牛尾魚", "U", "harbor", "day", (0.5, 2.5), (30, 60), "flat", "#9b8360", "#4d3b26", "扁扁的頭，喜歡躲在沙底。"),
    ("puffer", "河豚", "U", "harbor", "day", (0.3, 1.5), (15, 35), "round", "#c9b16b", "#3e3a2a", "一緊張就鼓成一顆球。"),
    ("conger", "星鰻", "U", "harbor", "night", (0.5, 4.0), (50, 120), "eel", "#6e5a43", "#e9dcc2", "身上有一排白色小星點。"),
    ("blue_crab", "藍蟹", "U", "harbor", "night", (0.2, 0.8), (12, 22), "crab", "#3b6fb0", "#e46b4a", "螯是漂亮的寶藍色。"),
    ("red_seabream", "真鯛", "R", "harbor", "dawn", (1.0, 8.0), (35, 90), "flat", "#e0707a", "#5fb7e0", "粉紅身體點綴藍色亮點，喜慶的魚。"),
    ("yellowtail", "青甘", "R", "harbor", "dawn,day", (3.0, 15.0), (60, 110), "slim", "#5a7fa0", "#f2d14b", "一條黃色縱帶，力氣很大。"),
    ("octopus", "章魚", "R", "harbor", "night", (1.0, 10.0), (40, 120), "squid", "#b4553e", "#f0c3a8", "八隻腳會緊緊吸住石頭。"),
    ("lighthouse_angler", "燈塔鮟鱇", "E", "harbor", "night", (5.0, 25.0), (50, 100), "round", "#5b4b3e", "#ffe27a", "頭頂的小燈和燈塔一起閃。"),
    ("golden_mullet", "黃金烏魚", "E", "harbor", "dusk", (2.0, 6.0), (50, 75), "slim", "#d9a93a", "#fff1b0", "夕陽下全身金光閃閃。"),
    ("tide_king", "潮汐神鯛", "L", "harbor", "dawn", (20.0, 60.0), (100, 160), "myth", "#f07f6a", "#7fe0ff", "傳說每天第一道潮水由牠帶來。"),
    # ── 翠湖 lake ──
    ("crucian", "鯽魚", "C", "lake", "any", (0.1, 0.6), (10, 25), "round", "#9f9570", "#e8e0c0", "湖裡最常見的老朋友。"),
    ("carp", "鯉魚", "C", "lake", "day", (1.0, 8.0), (30, 80), "round", "#a98a4a", "#e7d39a", "嘴邊有兩對鬍鬚。"),
    ("tilapia", "吳郭魚", "C", "lake", "day", (0.3, 1.5), (15, 35), "flat", "#6d7b6e", "#c1c9b0", "什麼都吃，到處都有。"),
    ("bluegill", "藍鰓太陽魚", "C", "lake", "day", (0.1, 0.5), (10, 22), "flat", "#5f7d4f", "#2e5aa8", "鰓蓋上有一塊深藍色。"),
    ("goby", "蝦虎魚", "C", "lake", "day", (0.01, 0.05), (4, 10), "slim", "#9b8a6c", "#5a4b36", "用腹鰭吸在石頭上。"),
    ("loach", "泥鰍", "C", "lake", "night", (0.02, 0.1), (10, 20), "eel", "#7a6a48", "#3d331f", "滑溜溜，抓都抓不住。"),
    ("yellow_catfish", "黃顙魚", "C", "lake", "night", (0.1, 0.5), (15, 30), "slim", "#c2a03e", "#4a3b1a", "被抓時會發出咕咕聲。"),
    ("grass_carp", "草魚", "U", "lake", "day", (2.0, 15.0), (50, 110), "slim", "#7f8a5a", "#d6d8b0", "吃水草長得又快又大。"),
    ("bighead", "大頭鰱", "U", "lake", "dawn", (3.0, 20.0), (60, 120), "round", "#7d8c94", "#cfd6da", "頭大得不成比例。"),
    ("catfish", "鯰魚", "U", "lake", "night", (1.0, 12.0), (40, 110), "slim", "#4f4a3c", "#a39c84", "長鬍鬚可以在黑暗中找食物。"),
    ("snakehead", "雷魚", "U", "lake", "dusk", (1.0, 6.0), (40, 90), "eel", "#4e5a3b", "#2a2f1c", "兇猛的掠食者，會到水面換氣。"),
    ("largemouth_bass", "大口黑鱸", "U", "lake", "dawn,dusk", (0.8, 5.0), (30, 65), "slim", "#5e7a3a", "#28351a", "嘴巴大到能吞下青蛙。"),
    ("koi", "錦鯉", "R", "lake", "day", (2.0, 10.0), (40, 90), "round", "#f4f0e6", "#e0502e", "紅白花紋，像一幅畫。"),
    ("softshell_turtle", "鱉", "R", "lake", "night", (1.0, 6.0), (25, 50), "turtle", "#6c7a4a", "#d9c99a", "殼是軟的，脖子很長。"),
    ("mandarin_fish", "鱖魚", "R", "lake", "dusk", (0.8, 4.0), (30, 55), "flat", "#b59a52", "#3d2f16", "身上有虎斑，詩裡的桃花鱖魚。"),
    ("paddlefish", "白鱘", "E", "lake", "dawn", (20.0, 80.0), (150, 300), "long", "#b4c0c8", "#5a6870", "長長的吻像一把船槳。"),
    ("golden_koi", "黃金錦鯉", "E", "lake", "day", (5.0, 15.0), (60, 100), "round", "#f2c440", "#fff3c2", "據說看到牠一整年都好運。"),
    ("moon_carp", "月影鯉", "E", "lake", "night", (4.0, 12.0), (50, 90), "round", "#c7d3f0", "#7a6fd0", "只在月光灑落的湖面出現。"),
    ("lake_dragon", "湖之龍魚", "L", "lake", "night", (40.0, 120.0), (180, 320), "myth", "#3fa48a", "#ffd25a", "守護翠湖的古老龍魚。"),
    # ── 溪谷 river ──
    ("zacco", "溪哥", "C", "river", "day,dusk", (0.03, 0.15), (10, 18), "slim", "#8fa3b0", "#e86a5a", "繁殖期身上會出現彩色條紋。"),
    ("kuhua", "苦花", "C", "river", "dawn,day", (0.1, 0.5), (15, 30), "slim", "#6b7d7a", "#c9d2c8", "用嘴刮石頭上的藻類吃。"),
    ("minnow", "馬口魚", "C", "river", "day", (0.05, 0.3), (12, 25), "slim", "#7f99a8", "#4a6ec0", "嘴角向上彎像在笑。"),
    ("river_goby", "川蝦虎", "C", "river", "day", (0.01, 0.04), (4, 9), "slim", "#8d7a5c", "#d78a4a", "在急流石縫裡跳來跳去。"),
    ("round_barbel", "圓吻鯝", "C", "river", "dusk,night", (0.1, 0.6), (15, 30), "slim", "#7c8a8e", "#d7dde0", "清澈溪水裡的常客。"),
    ("river_shrimp", "溪蝦", "C", "river", "night", (0.005, 0.02), (4, 10), "crab", "#a7b8a0", "#5d6e55", "透明身體，晚上才出來活動。"),
    ("eel", "白鰻", "U", "river", "night", (0.3, 3.0), (40, 120), "eel", "#4e5a4a", "#d9ddcc", "從大海游回溪裡長大。"),
    ("ayu", "香魚", "U", "river", "day", (0.05, 0.3), (15, 30), "slim", "#8a9a82", "#f0d060", "聞起來有淡淡的西瓜香。"),
    ("rainbow_trout", "虹鱒", "U", "river", "dawn,day", (0.5, 4.0), (30, 70), "slim", "#7d8e6a", "#e5768a", "側身有一條彩虹色帶。"),
    ("brown_trout", "褐鱒", "U", "river", "dusk", (0.5, 5.0), (30, 75), "slim", "#9a7a4a", "#c0402e", "身上有紅色與黑色斑點。"),
    ("river_crab", "毛蟹", "U", "river", "night", (0.1, 0.4), (6, 12), "crab", "#6a5a3a", "#3a3020", "螯上長著一團毛。"),
    ("river_perch", "河鱸", "U", "river", "dusk", (0.3, 2.0), (20, 45), "slim", "#8a9a4a", "#2f3a1a", "背鰭像一排小刺。"),
    ("mountain_salmon", "山櫻鮭", "R", "river", "dawn", (0.3, 1.5), (20, 40), "slim", "#7e8a96", "#f2a0b0", "春天櫻花開時才現身的山溪鮭魚。"),
    ("char", "紅點鮭", "R", "river", "dawn", (0.5, 3.0), (25, 55), "slim", "#5a6b5a", "#f07a4a", "冰冷山泉裡的寶石。"),
    ("arowana", "銀龍魚", "R", "river", "day", (2.0, 6.0), (60, 100), "long", "#cfd8dc", "#8fa4b0", "大片銀鱗，會跳出水面捕蟲。"),
    ("golden_mahseer", "金鱗魮", "E", "river", "dusk", (10.0, 40.0), (80, 150), "slim", "#d9a840", "#7a5a20", "被稱為「河中老虎」的金色大魚。"),
    ("sturgeon", "鱘龍魚", "E", "river", "dawn", (20.0, 100.0), (120, 280), "long", "#6e7c84", "#c8d0d4", "背上有一排骨板，像恐龍。"),
    ("pirarucu", "巨骨舌魚", "E", "river", "day", (50.0, 150.0), (180, 300), "long", "#5e6a4a", "#c84a3a", "世界上最大的淡水魚之一。"),
    ("waterfall_koi", "登龍瀑布鯉", "L", "river", "dawn", (10.0, 30.0), (90, 140), "myth", "#ff8a3a", "#ffe6a0", "躍過瀑布就會化成龍。"),
    # ── 珊瑚礁 reef ──
    ("clownfish", "小丑魚", "C", "reef", "day", (0.05, 0.25), (6, 11), "round", "#f07a2a", "#ffffff", "住在海葵裡的橘白小丑。"),
    ("damselfish", "雀鯛", "C", "reef", "day,dusk", (0.03, 0.15), (5, 12), "flat", "#3a6ad0", "#f2d040", "會兇巴巴地守護自己的地盤。"),
    ("triggerfish", "炮彈魚", "C", "reef", "day,dusk", (0.3, 2.0), (20, 45), "flat", "#5a6a8a", "#f0c040", "背鰭能像扳機一樣卡住。"),
    ("goatfish", "秋姑魚", "C", "reef", "dawn,night", (0.1, 0.6), (15, 30), "slim", "#e8a050", "#ffffff", "用下巴的鬍鬚翻沙找食物。"),
    ("butterflyfish", "蝴蝶魚", "C", "reef", "day", (0.05, 0.3), (10, 20), "flat", "#f2e070", "#2a2a2a", "尾巴附近有假眼睛騙敵人。"),
    ("surgeonfish", "藍倒吊", "U", "reef", "day", (0.2, 1.0), (15, 30), "flat", "#2a6ad8", "#f2d040", "尾柄上藏著一把小刀。"),
    ("parrotfish", "鸚哥魚", "U", "reef", "day", (1.0, 6.0), (30, 70), "round", "#3ac0a0", "#e070c0", "牙齒像鳥嘴，會啃珊瑚。"),
    ("angelfish", "皇后神仙魚", "U", "reef", "dawn", (0.3, 1.5), (20, 45), "flat", "#3a8ad0", "#f2d030", "頭上有一頂藍色小皇冠。"),
    ("boxfish", "角箱魨", "U", "reef", "day", (0.1, 0.6), (10, 30), "round", "#f2d040", "#2a2a2a", "身體是方方的盒子。"),
    ("grouper", "石斑魚", "U", "reef", "dusk", (1.0, 10.0), (35, 90), "round", "#8a6a4a", "#d0a070", "躲在礁洞裡等獵物經過。"),
    ("cuttlefish", "花枝", "U", "reef", "night", (0.3, 2.5), (20, 45), "squid", "#c8a080", "#6a4a3a", "會瞬間變換身上的顏色。"),
    ("lionfish", "獅子魚", "R", "reef", "night", (0.3, 1.2), (20, 38), "round", "#d0503a", "#f6e6d6", "華麗的鰭條帶有毒刺。"),
    ("moray", "裸胸鯙", "R", "reef", "night", (2.0, 15.0), (80, 200), "eel", "#a08a3a", "#3a3010", "從石縫探頭，嘴巴一開一合。"),
    ("lobster", "龍蝦", "R", "reef", "night", (0.5, 4.0), (25, 60), "crab", "#c04a3a", "#3a6aa0", "長長的觸鬚會發出摩擦聲。"),
    ("coral_trout", "東星斑", "R", "reef", "dawn", (1.0, 6.0), (40, 80), "slim", "#e0403a", "#60c0f0", "紅色身體佈滿藍色小星點。"),
    ("seahorse", "海馬", "R", "reef", "day", (0.01, 0.05), (8, 20), "seahorse", "#f0b040", "#a06020", "由爸爸負責懷孕生寶寶。"),
    ("humphead_wrasse", "蘇眉魚", "E", "reef", "day", (20.0, 80.0), (100, 200), "round", "#3a9a8a", "#a0e0d0", "額頭隆起，眼睛後有兩條眉紋。"),
    ("rainbow_reef", "七彩珊瑚魚", "E", "reef", "dawn", (1.0, 4.0), (30, 50), "flat", "#e05ad0", "#5af0e0", "身上的顏色會隨光線變化。"),
    ("coral_queen", "珊瑚女王", "L", "reef", "day", (15.0, 40.0), (90, 150), "myth", "#ff6aa0", "#ffe070", "整片珊瑚礁都因牠而盛開。"),
    # ── 深海 deep ──
    ("lanternfish", "燈籠魚", "C", "deep", "night", (0.01, 0.05), (5, 12), "slim", "#3a4a6a", "#7af0ff", "身上一排發光點像小燈籠。"),
    ("hairtail", "白帶魚", "C", "deep", "dusk,night", (0.5, 3.0), (60, 150), "eel", "#d8dee4", "#9aa8b4", "像一條銀色緞帶在水中游。"),
    ("saury", "秋刀魚", "C", "deep", "night", (0.1, 0.25), (25, 35), "slim", "#4a6a9a", "#e0e8f0", "身形像一把刀，秋天最肥。"),
    ("skipjack", "正鰹", "C", "deep", "dawn,day,dusk", (2.0, 8.0), (40, 80), "slim", "#3a5a8a", "#d0d8e0", "肚子上有四條黑色縱紋。"),
    ("cod", "鱈魚", "U", "deep", "any", (2.0, 15.0), (50, 110), "slim", "#8a8060", "#e0d8c0", "冷水裡的大塊頭，肉質雪白。"),
    ("albacore", "長鰭鮪", "U", "deep", "day", (5.0, 30.0), (60, 120), "slim", "#3a4a7a", "#c0c8e0", "胸鰭特別長，像一對翅膀。"),
    ("mahi_mahi", "鬼頭刀", "U", "deep", "day", (3.0, 20.0), (60, 140), "slim", "#3ab060", "#f0d030", "釣上來時顏色會閃爍變化。"),
    ("stingray", "赤魟", "U", "deep", "dusk", (5.0, 40.0), (60, 150), "ray", "#9a6a4a", "#e0c0a0", "尾巴上有一根毒刺，要小心。"),
    ("yellowfin_tuna", "黃鰭鮪", "R", "deep", "dawn", (20.0, 120.0), (100, 200), "slim", "#2a3a6a", "#f2d030", "鰭是亮黃色的，游得飛快。"),
    ("swordfish", "劍旗魚", "R", "deep", "dusk", (50.0, 250.0), (150, 350), "long", "#4a5a7a", "#a0b0c8", "長長的上顎像一把劍。"),
    ("sailfish", "雨傘旗魚", "R", "deep", "day", (30.0, 90.0), (180, 300), "long", "#2a4a8a", "#6ab0f0", "張開背鰭像一把藍色大傘。"),
    ("hammerhead", "雙髻鯊", "R", "deep", "dusk", (50.0, 200.0), (200, 400), "shark", "#7a8a96", "#d0d8de", "頭像一把鐵鎚，視野特別廣。"),
    ("deep_angler", "深海鮟鱇", "R", "deep", "night", (2.0, 20.0), (30, 100), "round", "#3a2e2a", "#9af0ff", "用頭上發光的釣竿釣別的魚。"),
    ("ghost_shark", "銀鮫", "R", "deep", "night", (1.0, 5.0), (50, 120), "shark", "#b8c0cc", "#6a5a8a", "大眼睛在黑暗中閃著綠光。"),
    ("bluefin_tuna", "黑鮪魚", "E", "deep", "dawn", (100.0, 450.0), (180, 300), "slim", "#1e2a4a", "#c0c8d8", "海洋中的超級跑車。"),
    ("sunfish", "翻車魚", "E", "deep", "day", (200.0, 1000.0), (150, 300), "round", "#a8b4bc", "#e0e6ea", "喜歡躺在海面曬太陽。"),
    ("oarfish", "皇帶魚", "E", "deep", "night", (20.0, 200.0), (300, 800), "eel", "#d8dde4", "#e04a4a", "紅色背鰭像皇冠，傳說中的海蛇。"),
    ("giant_squid", "大王魷", "E", "deep", "night", (100.0, 300.0), (500, 1200), "squid", "#c04a3a", "#f0b0a0", "擁有世界上最大的眼睛。"),
    ("manta", "鬼蝠魟", "E", "deep", "day", (300.0, 1500.0), (300, 700), "ray", "#2a2e3a", "#f0f0f0", "優雅地在海中飛翔。"),
    ("coelacanth", "腔棘魚", "L", "deep", "night", (30.0, 90.0), (120, 200), "myth", "#3a5a8a", "#e0e8f0", "從恐龍時代活到現在的活化石。"),
    ("abyss_king", "深淵海王", "L", "deep", "night", (500.0, 2000.0), (800, 2000), "myth", "#2a1e4a", "#c070ff", "傳說中沉睡在最深處的海之王。"),
    # ── 冰川海域 cold（地圖最北邊，冰晶島一帶）──
    ("polar_cod", "北極鱈", "C", "cold", "any", (0.1, 0.6), (15, 35), "slim", "#8a96a0", "#e0e8ee", "在冰層下面成群游動。"),
    ("capelin", "毛鱗魚", "C", "cold", "dawn,day", (0.02, 0.06), (10, 20), "slim", "#6a8aa0", "#d8e8f0", "肚子裡常常滿滿都是魚卵。"),
    ("icefish", "冰魚", "U", "cold", "day,dusk", (0.1, 0.5), (20, 40), "slim", "#d8eef8", "#9ad0f0", "血液是透明的，全身幾乎看得穿。"),
    ("king_crab", "帝王蟹", "U", "cold", "night,dawn", (1.0, 8.0), (30, 80), "crab", "#c0503a", "#f0c0a0", "腳張開比一個小孩還寬。"),
    ("arctic_char", "北極紅點鮭", "R", "cold", "dawn,day", (1.0, 6.0), (40, 80), "slim", "#4a6a7a", "#ff8a6a", "冰冷海水裡的紅色寶石。"),
    ("greenland_shark", "格陵蘭睡鯊", "E", "cold", "night", (200.0, 900.0), (300, 600), "shark", "#5a5a64", "#b0b8c0", "慢吞吞地游，據說可以活四百年。"),
    ("aurora_king", "極光魚王", "L", "cold", "night", (50.0, 200.0), (180, 320), "myth", "#3ad0b0", "#c08aff", "只在極光出現的夜裡浮上冰縫。"),
    # ── 紅樹林河口 mangrove（地圖最西邊，紅樹林島一帶）──
    ("mudskipper", "彈塗魚", "C", "mangrove", "any", (0.01, 0.05), (8, 15), "slim", "#7a6a4a", "#5ab0e0", "會用胸鰭在泥灘上跳來跳去。"),
    ("milkfish", "虱目魚", "C", "mangrove", "day,dusk", (0.3, 1.5), (30, 60), "slim", "#9aa8b0", "#e8eef0", "南部人早餐最愛的魚。"),
    ("fiddler_crab", "招潮蟹", "C", "mangrove", "dawn,night", (0.01, 0.05), (2, 5), "crab", "#e0b040", "#c04a2a", "一隻大螯揮呀揮，像在招潮水。"),
    ("scat", "金錢魚", "U", "mangrove", "dawn,day", (0.2, 1.0), (15, 30), "flat", "#a8a060", "#3a3a2a", "圓圓的身上滿是像錢幣的斑點。"),
    ("barramundi", "尖吻鱸", "U", "mangrove", "dusk,night", (2.0, 15.0), (50, 120), "slim", "#9aa090", "#4a5040", "在紅樹林根間埋伏的大鱸魚。"),
    ("archerfish", "射水魚", "R", "mangrove", "day", (0.1, 0.4), (15, 30), "flat", "#e0e0b0", "#2a2a2a", "會噴水把樹葉上的蟲打下來吃。"),
    ("sawfish", "鋸鰩", "E", "mangrove", "dusk", (100.0, 500.0), (300, 600), "long", "#8a7a5a", "#d8c8a0", "長長的吻上兩排鋸齒。"),
    ("mangrove_lord", "紅樹林之主", "L", "mangrove", "night", (80.0, 300.0), (250, 450), "myth", "#3a6a3a", "#e0c060", "樹根間游過的巨大身影，河口的守護神。"),
    # ── 火山海域 volcano（地圖最東邊，火山島一帶）──
    ("ember_goby", "餘燼蝦虎", "C", "volcano", "any", (0.02, 0.08), (6, 12), "slim", "#5a4a4a", "#ff8a4a", "身上的橘點像快熄滅的火星。"),
    ("rosy_seabass", "紅喉", "C", "volcano", "night,dawn", (0.2, 1.0), (20, 40), "slim", "#e06a6a", "#3a2020", "喉嚨內側是黑色的，油脂豐富。"),
    ("red_snapper", "赤鰭笛鯛", "U", "volcano", "day,dusk", (1.0, 6.0), (35, 70), "flat", "#d04a3a", "#ffb08a", "火紅的鰭在暗色海水裡特別顯眼。"),
    ("sulfur_eel", "硫磺鰻", "U", "volcano", "night", (0.5, 4.0), (60, 140), "eel", "#c8b040", "#4a4020", "住在溫泉噴口旁，身上有硫磺味。"),
    ("flamefish", "火焰魚", "R", "volcano", "dusk", (0.3, 1.5), (20, 40), "round", "#ff5a2a", "#ffd040", "游動時鱗片像火苗一樣閃動。"),
    ("obsidian_grouper", "黑曜石斑", "E", "volcano", "night,dawn", (20.0, 120.0), (80, 200), "round", "#1e1a24", "#9a6aff", "鱗片像黑曜石一樣又黑又亮。"),
    ("lava_phoenix", "熔岩鳳凰魚", "L", "volcano", "dawn", (30.0, 100.0), (150, 260), "myth", "#ff6a2a", "#fff070", "傳說從海底熔岩裡誕生的火鳥之魚。"),
    # ── 隱藏地點（要在迷霧裡找到才釣得到）──
    # 沉船 wreck（西南深海）
    ("wreck_goby", "船艙蝦虎", "C", "wreck", "any", (0.02, 0.08), (6, 12), "slim", "#6a5a4a", "#c8a070", "把破掉的船艙當成自己的家。"),
    ("rust_crab", "鏽甲蟹", "C", "wreck", "any", (0.2, 1.0), (10, 25), "crab", "#a0582a", "#5a3a20", "殼上長滿像鐵鏽一樣的斑。"),
    ("anchor_grouper", "錨紋石斑", "U", "wreck", "dusk,night,dawn", (3.0, 20.0), (40, 100), "round", "#5a5a4a", "#d0c080", "身上的花紋像一支船錨。"),
    ("coin_snapper", "金幣笛鯛", "R", "wreck", "day,dusk", (1.0, 6.0), (30, 60), "flat", "#e0b040", "#fff0a0", "老是在沉船的寶箱旁邊打轉。"),
    ("ghost_lanternfish", "幽靈燈籠魚", "E", "wreck", "night", (0.5, 3.0), (20, 40), "round", "#a0c8d8", "#e0fff8", "半透明的身體會發出淡淡的綠光。"),
    ("wreck_captain", "沉船船長", "L", "wreck", "night", (200.0, 600.0), (250, 400), "myth", "#3a3a4a", "#e0c060", "據說是那艘沉船的船長化身成的巨魚。"),
    # 海蝕洞 cave（西北岩礁，只有清晨退潮才進得去）
    ("cave_blindfish", "盲眼洞魚", "C", "cave", "dawn", (0.02, 0.1), (6, 14), "slim", "#e8d8d0", "#ffb0b0", "一輩子住在黑暗裡，眼睛退化了。"),
    ("echo_shrimp", "回音槍蝦", "U", "cave", "dawn", (0.01, 0.05), (4, 9), "crab", "#e06a4a", "#ffd0b0", "大螯一夾會「啪」一聲在洞裡迴盪。"),
    ("crystal_eel", "水晶鰻", "R", "cave", "dawn", (0.3, 2.0), (40, 90), "eel", "#a0e0f0", "#ffffff", "身體像水晶一樣閃閃發亮。"),
    ("cave_dragonet", "洞穴龍鰧", "E", "cave", "dawn", (0.5, 3.0), (20, 45), "flat", "#6a4a9a", "#f0a0ff", "只有退潮時的海蝕洞裡才見得到。"),
    # 無人島潟湖 lagoon（東南外海）
    ("lagoon_damsel", "潟湖雀鯛", "C", "lagoon", "any", (0.03, 0.12), (5, 10), "flat", "#4ac0e0", "#ffe060", "清澈潟湖裡成群游動的小魚。"),
    ("bonefish", "北梭魚", "C", "lagoon", "dawn,day,dusk", (0.5, 4.0), (30, 70), "slim", "#c8d0d8", "#8a98a8", "在淺灘上跑得飛快，又叫「灰色幽靈」。"),
    ("coconut_crab", "椰子蟹", "U", "lagoon", "night,dawn", (1.0, 4.0), (25, 40), "crab", "#6a3a8a", "#e08a4a", "力氣大到能夾開椰子。"),
    ("palm_trevally", "椰影浪人鰺", "R", "lagoon", "day,dusk", (5.0, 40.0), (60, 130), "slim", "#7a8a9a", "#ffd070", "潟湖的霸主，咬餌又快又狠。"),
    ("rainbow_wrasse", "彩虹隆頭魚", "E", "lagoon", "day", (2.0, 8.0), (40, 80), "round", "#3ad08a", "#ff5ad0", "全身七種顏色，像潟湖裡的彩虹。"),
    ("castaway_king", "漂流魚王", "L", "lagoon", "dusk", (80.0, 300.0), (200, 360), "myth", "#3a8ad0", "#fff0b0", "傳說它載著迷路的船員漂到這座島。"),
    # 冰封秘境 frozen（北方冰層深處，要破冰船頭才到得了）
    ("frost_smelt", "霜晶胡瓜魚", "C", "frozen", "any", (0.02, 0.1), (10, 20), "slim", "#c8e8f8", "#ffffff", "身上結著一層細細的霜。"),
    ("ice_ghost", "冰窟幽靈魚", "U", "frozen", "any", (0.2, 1.5), (20, 45), "slim", "#e8f4ff", "#8ac8ff", "在冰縫下面像鬼魂一樣飄過。"),
    ("glacier_halibut", "冰川比目魚", "R", "frozen", "day,night", (5.0, 60.0), (60, 150), "flat", "#7a90a8", "#e0f0ff", "趴在冰下的海床，一動也不動。"),
    ("frost_leviathan", "冰封巨鯨魚", "L", "frozen", "any", (800.0, 3000.0), (800, 1600), "myth", "#3a6aa0", "#c0f0ff", "被封在冰下千年的巨獸，終於醒來了。"),
    # ── 大河（地圖左邊的大河平原，可以開船進去）──
    # 下游 bigriver
    ("silver_bleak", "銀飄魚", "C", "bigriver", "any", (0.02, 0.1), (10, 18), "slim", "#b8c4cc", "#e8f0f4", "成群在水面附近閃著銀光。"),
    ("stone_moroko", "麥穗魚", "C", "bigriver", "dawn,day,dusk", (0.01, 0.05), (6, 11), "slim", "#9a8a6a", "#5a4a30", "小小的身體上有一排像麥穗的黑點。"),
    ("tall_crucian", "高身鯽", "C", "bigriver", "any", (0.2, 1.0), (15, 30), "round", "#a89a6a", "#e0d8b0", "身體比一般鯽魚高，上鉤後很會拉。"),
    ("longnose_catfish", "長吻鮠", "U", "bigriver", "dusk,night", (1.0, 6.0), (40, 80), "slim", "#c8a8a0", "#6a5a50", "長長的吻，夜裡在河底找蝦吃。"),
    ("yellowtail_dace", "黃尾鯝", "U", "bigriver", "day", (0.3, 1.5), (20, 40), "slim", "#9aa8b0", "#f0c040", "尾鰭是漂亮的金黃色。"),
    ("river_giant_catfish", "河川巨鯰", "R", "bigriver", "night", (10.0, 60.0), (100, 200), "slim", "#4a4a3a", "#a0a080", "大河深潭的主人，一口能吞下鴨子。"),
    ("river_tiger", "大河虎魚", "E", "bigriver", "day,dusk", (5.0, 30.0), (60, 120), "slim", "#d8a040", "#2a2a2a", "身上有老虎條紋的兇猛掠食者。"),
    ("great_river_mother", "大河之母", "L", "bigriver", "night", (100.0, 400.0), (250, 400), "myth", "#3a6a5a", "#f0e0a0", "傳說整條大河的魚都是牠的孩子。"),
    # 上游 upriver（越往裡面開，水越清、越涼）
    ("clear_dace", "清溪小鱲", "C", "upriver", "any", (0.01, 0.06), (6, 12), "slim", "#8ab0c0", "#ff8a6a", "在清澈的上游溪水裡游得飛快。"),
    ("mountain_loach", "山澗鰍", "C", "upriver", "any", (0.01, 0.05), (8, 15), "eel", "#8a7a5a", "#4a3a20", "吸附在石頭上，一點也不怕急流。"),
    ("mist_trout", "霧谷鱒", "U", "upriver", "dawn,day", (0.3, 2.0), (25, 50), "slim", "#7a8a7a", "#e0a0a0", "清晨起霧的時候最容易上鉤。"),
    ("fall_goby", "瀑布鰕虎", "U", "upriver", "day,dusk", (0.01, 0.05), (5, 10), "slim", "#6a7a8a", "#ffd040", "會用嘴巴吸著岩壁爬上瀑布。"),
    ("cloud_salmon", "雲霧櫻鱒", "R", "upriver", "dawn", (1.0, 4.0), (35, 60), "slim", "#9a8aa0", "#ff9ab0", "只在高山雲霧裡出現的鱒魚。"),
    ("jade_carp", "青玉山鯉", "E", "upriver", "day", (3.0, 12.0), (50, 90), "round", "#4aa08a", "#c0f0d0", "鱗片像青玉一樣透亮。"),
    ("source_trout", "源流神鱒", "L", "upriver", "dawn", (15.0, 50.0), (100, 160), "myth", "#5a8aa8", "#fff0c0", "住在大河源頭的神祕大鱒魚。"),
]

# 只在某些時段才進得去的地點（不用每個時段都有普通魚）
REGION_ONLY_TIMES = {"cave": ["dawn"]}

# 天氣限定魚：只有在指定天氣才會上鉤（最後一欄＝天氣，逗號分隔）
# 天氣：sunny 晴天、cloudy 多雲、rain 下雨、storm 暴雨、waves 大浪、typhoon 颱風
# ── 🕳️ 地下世界（2026-10-29）：四區，任何時間都能釣，比地上同稀有度的魚更難拉 ──
UNDER_FISH = [
    # 入口洞穴的水潭 ucave
    ("cave_blind", "盲眼洞穴魚", "C", "ucave", "any", (0.02, 0.1), (6, 12), "slim", "#e8d0c8", "#ff9aa0", "沒有眼睛，靠身體兩側感覺水流。"),
    ("glass_shrimp", "透明蝦", "C", "ucave", "any", (0.005, 0.03), (3, 7), "slim", "#d0f0ec", "#ff7a7a", "身體透明得看得到小小的心臟在跳。"),
    ("rock_loach", "岩縫泥鰍", "C", "ucave", "any", (0.02, 0.12), (8, 18), "eel", "#8a7a6a", "#3a2e24", "整天鑽在岩石縫裡，很難拉出來。"),
    ("stalac_goby", "鐘乳蝦虎", "U", "ucave", "any", (0.05, 0.3), (8, 16), "slim", "#a8a0a4", "#f4f0ff", "背鰭尖尖的，像倒掛的鐘乳石。"),
    ("olm", "洞螈", "R", "ucave", "any", (0.1, 0.5), (20, 35), "eel", "#f0cfc6", "#ff8aa0", "粉紅色的洞穴精靈，聽說能十年不吃東西。"),
    # 地底湖 ulake
    ("lantern_fish", "螢光燈籠魚", "C", "ulake", "any", (0.05, 0.4), (8, 18), "round", "#1e3050", "#6ae0ff", "頭上的小燈籠在黑水裡一閃一閃。"),
    ("dark_tetra", "黑水燈魚", "C", "ulake", "any", (0.01, 0.06), (4, 9), "slim", "#202838", "#5affd0", "成群游過時像一條發光的河。"),
    ("ghost_catfish", "幽靈鯰", "U", "ulake", "any", (0.3, 2.0), (20, 45), "slim", "#c8d0e0", "#8a9ab0", "身體透明，只看得到一根根骨頭。"),
    ("starlight_eel", "星光鰻", "U", "ulake", "any", (0.5, 3.0), (50, 120), "eel", "#14243a", "#a0f0ff", "身上的光點像地底的星空。"),
    ("under_sturgeon", "地底鱘", "R", "ulake", "any", (5.0, 30.0), (80, 180), "long", "#3a4a5a", "#9ad0ff", "活了上百年的老鱘，在湖底慢慢巡游。"),
    ("lake_angler", "湖底鮟鱇", "E", "ulake", "any", (5.0, 25.0), (40, 90), "round", "#1a1a2a", "#6affff", "用頭上的光把小魚騙到嘴邊。"),
    ("mirror_ghost", "鏡湖幽靈魚", "L", "ulake", "any", (20.0, 80.0), (120, 240), "myth", "#d8e4ff", "#7ac8ff", "只有提燈照到水面的那一瞬間才看得見牠。"),
    # 水晶洞的水晶池 ucrystal
    ("crystal_minnow", "水晶小魚", "C", "ucrystal", "any", (0.01, 0.08), (5, 11), "slim", "#c8b0ff", "#ffffff", "鱗片像碎水晶，一游就叮叮作響。"),
    ("amethyst_fish", "紫晶魚", "U", "ucrystal", "any", (0.3, 1.5), (15, 32), "flat", "#8a5ad0", "#e0c0ff", "全身是透亮的紫水晶色。"),
    ("prism_ray", "稜鏡魟", "R", "ucrystal", "any", (2.0, 12.0), (40, 90), "ray", "#a0e0ff", "#ff9ae8", "提燈一照，就把光折成一道彩虹。"),
    ("crystal_turtle", "晶甲龜", "R", "ucrystal", "any", (3.0, 15.0), (30, 60), "turtle", "#6a5aa0", "#b0f0ff", "背上長滿了發光的水晶。"),
    ("gem_scale", "寶石鱗魚", "E", "ucrystal", "any", (3.0, 12.0), (40, 80), "flat", "#3ad0a0", "#ff5a8a", "每一片鱗都是不同顏色的寶石。"),
    # 熔岩河 ulava（要耐熱釣線）
    ("ember_minnow", "餘燼小魚", "C", "ulava", "any", (0.02, 0.15), (5, 12), "slim", "#ff7a2a", "#ffe060", "在岩漿裡游泳的小火花。"),
    ("lava_eel", "熔岩鰻", "U", "ulava", "any", (1.0, 6.0), (60, 150), "eel", "#5a1a10", "#ff8a2a", "身上的裂縫透出岩漿的紅光。"),
    ("magma_crab", "岩漿蟹", "U", "ulava", "any", (0.5, 3.0), (15, 30), "crab", "#c8401a", "#ffd040", "殼燒得通紅，夾子比鐵還硬。"),
    ("obsidian_fish", "黑曜石魚", "R", "ulava", "any", (2.0, 10.0), (30, 70), "flat", "#1a1218", "#ff5a2a", "全身像黑曜石一樣又黑又亮。"),
    ("flame_pike", "炎鱗狼魚", "E", "ulava", "any", (8.0, 40.0), (100, 200), "long", "#a02a10", "#ffd040", "張口就噴出熱氣，是熔岩河的霸主。"),
    ("udragon", "地底龍魚", "L", "ulava", "any", (200.0, 800.0), (400, 900), "myth", "#3a1a3a", "#ff6a2a", "住在熔岩河最深處的古龍，只在龍穴冒泡時現身。"),
]

# ── 🌋 火山山頂的火口湖（2026-10-30）：爬上火山才釣得到 ──
CRATER_FISH = [
    ("crater_tetra", "火口燈魚", "C", "crater", "any", (0.01, 0.06), (4, 9), "slim", "#3ac8b0", "#ffe060", "在溫溫的湖水裡成群發光。"),
    ("sulfur_loach", "硫磺泥鰍", "C", "crater", "any", (0.03, 0.15), (10, 20), "eel", "#c8b040", "#6a5a20", "身上有淡淡的硫磺味。"),
    ("steam_carp", "蒸氣鯉", "U", "crater", "any", (1.0, 6.0), (30, 70), "round", "#e8e0d8", "#ff8a6a", "游過的地方會冒出一縷白煙。"),
    ("ash_catfish", "火山灰鯰", "U", "crater", "any", (1.0, 8.0), (40, 90), "slim", "#5a5a60", "#a8a8b0", "全身像蓋了一層火山灰。"),
    ("jade_trout", "翡翠鱒", "R", "crater", "any", (2.0, 8.0), (40, 75), "slim", "#2aa880", "#c0ffe0", "跟火口湖的湖水一樣是翡翠色。"),
    ("ember_koi", "炭火錦鯉", "R", "crater", "any", (3.0, 10.0), (50, 90), "round", "#2a2226", "#ff6a2a", "黑色的鱗片下透出炭火一樣的紅光。"),
    ("cloud_eel", "雲端鰻", "E", "crater", "any", (5.0, 20.0), (120, 260), "eel", "#e8f0ff", "#8ac8ff", "住在雲層上的湖，傳說會游上天空。"),
    ("crater_lord", "火口湖之主", "L", "crater", "any", (80.0, 300.0), (250, 500), "myth", "#1a6a5a", "#ffd040", "守護火山山頂的巨魚，火山噴發就是牠在打呵欠。"),
]

WEATHER_FISH = [
    ("kelp_drifter", "漂流藻魚", "C", "harbor,reef", "any", (0.05, 0.2), (6, 14), "flat", "#8a8a3a", "#d8d870", "躲在漂流海藻下面，跟著浪一起漂來。", "rain,storm,waves,typhoon"),
    ("rain_ayu", "雨香魚", "U", "river", "any", (0.1, 0.4), (15, 30), "slim", "#7a9aa8", "#a0e0ff", "下雨溪水變涼時成群出現。", "rain,storm,typhoon"),
    ("wave_rider", "浪尖飛魚", "U", "harbor,deep", "dawn,day,dusk", (0.2, 0.8), (20, 40), "slim", "#3a7ad0", "#c0f0ff", "大浪時會從浪頭飛過船邊。", "waves,typhoon"),
    ("rain_carp", "雨紋鯉", "R", "lake", "any", (2.0, 8.0), (40, 80), "round", "#6a8a9a", "#d0e8f0", "鱗片上有雨滴般的花紋，只在雨天浮上來。", "rain,storm"),
    ("whirl_bream", "漩渦鯛", "R", "harbor,reef", "any", (2.0, 10.0), (40, 80), "flat", "#4a6aa0", "#e0f0ff", "被颱風漩渦捲到岸邊的稀客。", "typhoon"),
    ("thunder_eel", "雷光鰻", "E", "harbor,deep", "any", (2.0, 15.0), (80, 200), "eel", "#2a2a5a", "#fff070", "身上閃著雷光，暴風雨越大越活躍。", "storm,typhoon"),
    ("storm_marlin", "颱風旗魚", "E", "deep", "any", (60.0, 300.0), (200, 420), "long", "#3a3a6a", "#ffd040", "只在颱風天的巨浪裡現身的旗魚。", "typhoon"),
    ("typhoon_dragon", "颱風海龍", "L", "deep", "any", (300.0, 1200.0), (500, 1200), "myth", "#1e3a5a", "#9af0ff", "傳說颱風就是牠在海底翻身捲起來的。", "typhoon"),
]
WEATHERS = ["sunny", "cloudy", "rain", "storm", "waves", "typhoon"]

REGIONS = ["harbor", "lake", "river", "reef", "deep", "cold", "mangrove", "volcano", "wreck", "cave", "lagoon", "frozen", "bigriver", "upriver", "ucave", "ulake", "ucrystal", "ulava", "crater"]
TIMES = ["dawn", "day", "dusk", "night"]


def shade(hex_color, k):
    h = hex_color.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    if k >= 0:
        r, g, b = (round(c + (255 - c) * k) for c in (r, g, b))
    else:
        r, g, b = (round(c * (1 + k)) for c in (r, g, b))
    return "#%02x%02x%02x" % (r, g, b)


def build():
    out = []
    for row in FISH + WEATHER_FISH + UNDER_FISH + CRATER_FISH:
        (fid, name, rar, region, times, w, l, shape, body, accent, desc) = row[:11]
        f = {
            "id": fid,
            "name": name,
            "rarity": RARITY[rar],
            "regions": region.split(","),
            "times": ["dawn", "day", "dusk", "night"] if times == "any" else times.split(","),
            "weightKg": list(w),
            "lengthCm": list(l),
            "price": BASE_PRICE[rar],
            "shape": shape,
            "palette": {"body": body, "belly": shade(body, 0.55), "fin": shade(body, -0.35), "accent": accent},
            "desc": desc,
            "image": f"{fid}.png",
        }
        if len(row) > 11:
            f["weather"] = row[11].split(",")
        out.append(f)
    return out


def check(data):
    ids = [f["id"] for f in data]
    assert len(data) >= 90, f"只有 {len(data)} 種魚，需要至少 90 種"
    assert len(ids) == len(set(ids)), "id 重複"
    names = [f["name"] for f in data]
    assert len(names) == len(set(names)), "名稱重複"
    order = ["common", "uncommon", "rare", "epic", "legendary"]
    for f in data:
        assert f["weightKg"][0] < f["weightKg"][1] and f["lengthCm"][0] < f["lengthCm"][1], f["id"]
        assert all(r in REGIONS for r in f["regions"]) and all(t in TIMES for t in f["times"]), f["id"]
        assert all(w in WEATHERS for w in f.get("weather", [])), f["id"]
    for r in REGIONS:
        for t in REGION_ONLY_TIMES.get(r, TIMES):
            assert any(r in f["regions"] and t in f["times"] and f["rarity"] == "common" and "weather" not in f for f in data), \
                f"{r}/{t} 沒有普通魚可釣"
    prices = [BASE_PRICE[k] for k in "CUREL"]
    assert prices == sorted(prices)
    counts = {k: sum(f["rarity"] == k for f in data) for k in order}
    return counts


if __name__ == "__main__":
    data = build()
    counts = check(data)
    here = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(here, "fish.json"), "w", encoding="utf-8") as fp:
        fp.write("[\n" + ",\n".join(json.dumps(f, ensure_ascii=False) for f in data) + "\n]\n")
    # 同一份資料也輸出成 fish.js，讓遊戲直接雙擊開檔（file://）時也讀得到
    with open(os.path.join(here, "fish.js"), "w", encoding="utf-8") as fp:
        fp.write("// 由 build_fish.py 產生，請勿手改\nwindow.FISH_DATA = [\n"
                 + ",\n".join(json.dumps(f, ensure_ascii=False) for f in data) + "\n];\n")
    print(f"OK：{len(data)} 種魚", counts)
    for r in REGIONS:
        print(" ", r, sum(r in f["regions"] for f in data), "種；各時段：",
              {t: sum(r in f["regions"] and t in f["times"] for f in data) for t in TIMES})
