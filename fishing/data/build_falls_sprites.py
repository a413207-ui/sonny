"""產生大瀑布山區 20 種魚的 SVG 像素圖（assets/fish/<id>.svg，64×32，和其他魚同格式）。

用法：python fishing/data/build_falls_sprites.py
外形工具（Pix、fishbody、eelbody、eye）和地底魚共用 build_under_sprites.py。
"""
import json
import math
import os

from build_under_sprites import HERE, OUT, Pix, eye, fishbody, shade

REGS = ("fbeach", "fstream", "fpool", "flake")


def draw(f):
    p, P, fid = Pix(), f["palette"], f["id"]
    A, B, F = P["accent"], P["body"], P["fin"]
    if fid == "coco_damsel":
        fishbody(p, f, rx=11, ry=8, tail=6)
        p.rect(24, 9, 2, 14, A); p.rect(31, 9, 2, 14, A); eye(p, 35, 13)
    elif fid == "sand_whiting":
        fishbody(p, f, rx=17, ry=5, tail=6)
        for x in range(18, 44, 4): p.set(x, 17, shade(B, -.25))
        eye(p, 42, 14)
    elif fid == "surf_parrot":
        fishbody(p, f, rx=15, ry=9)
        for i, (x, y) in enumerate([(20, 12), (26, 16), (32, 12), (22, 19)]): p.rect(x, y, 3, 2, A)
        p.rect(44, 15, 3, 3, "#f0f0e0"); p.set(44, 16, shade(B, -.5)); eye(p, 38, 12)
    elif fid == "beach_ray":
        p.tri([(32, 6), (10, 18), (54, 18)], B); p.tri([(32, 26), (10, 18), (54, 18)], P["belly"])
        p.ell(32, 16, 12, 6, B)
        for x in (24, 30, 36, 40): p.set(x, 13, A); p.set(x - 2, 17, A)
        for i in range(10): p.set(10 - i, 18 + i * .4, F)
        eye(p, 38, 12)
    elif fid == "sunset_sail":
        fishbody(p, f, cx=30, rx=19, ry=6, tail=7, fin=False)
        for x in range(16, 40, 2): p.rect(x, 3 + abs(x - 26) // 3, 2, 8 - abs(x - 26) // 3, A if x % 4 else shade(A, -.2))
        for i in range(10): p.set(49 + i, 15 + i * .1, F)
        eye(p, 44, 13)
    elif fid == "stone_carp":
        fishbody(p, f, rx=15, ry=6)
        for x in range(18, 42, 3): p.set(x, 15, shade(B, -.3)); p.set(x + 1, 18, A)
        eye(p, 40, 13)
    elif fid == "falls_minnow":
        fishbody(p, f, rx=14, ry=5)
        p.rect(18, 15, 20, 1, A); p.rect(18, 17, 20, 1, "#5a8aff"); eye(p, 38, 13)
    elif fid == "moss_goby":
        fishbody(p, f, rx=15, ry=5, fin=False)
        p.tri([(22, 12), (34, 12), (28, 6)], F)
        for x in range(18, 42, 5): p.rect(x, 14, 2, 2, A)
        p.ell(42, 15, 4, 4, B); eye(p, 42, 12)
    elif fid == "sakura_trout":
        fishbody(p, f, rx=16, ry=6)
        for i, (x, y) in enumerate([(19, 13), (24, 16), (29, 12), (33, 17), (37, 13), (22, 19)]):
            p.set(x, y, A); p.set(x + 1, y, A); p.set(x, y + 1, A); p.set(x + 1, y - 1, shade(A, .4))
        eye(p, 41, 13)
    elif fid == "rapid_pike":
        fishbody(p, f, cx=31, rx=20, ry=5, tail=6)
        for x in range(14, 46, 4): p.rect(x, 14, 2, 1, A)
        p.rect(47, 17, 5, 1, shade(B, -.5)); eye(p, 46, 13)
    elif fid == "mist_minnow":
        fishbody(p, f, rx=12, ry=5)
        for (x, y) in ((22, 14), (27, 17), (31, 13), (35, 16)): p.set(x, y, "#ffffff")
        eye(p, 36, 13, A)
    elif fid == "pool_catfish":
        fishbody(p, f, rx=17, ry=6)
        for i in range(8): p.set(46 + i, 18 + i * .5, F); p.set(46 + i, 14 - i * .4, F)
        for x in range(16, 42, 4): p.set(x, 13, A)
        eye(p, 42, 14)
    elif fid == "rainbow_trout2":
        fishbody(p, f, rx=16, ry=6)
        for x in range(16, 44):
            c = ["#ff8a8a", "#ffd070", "#a0e080", "#80c0ff", "#c890ff"][(x // 6) % 5]
            p.set(x, 16, c)
        for x in range(18, 42, 4): p.set(x, 13, shade(B, -.35))
        eye(p, 41, 13)
    elif fid == "gate_carp":
        fishbody(p, f, rx=15, ry=9)
        for r in range(3):
            for x in range(20 + r * 2, 40, 5): p.rect(x, 11 + r * 3, 3, 2, shade(B, .3 if r % 2 else -.15))
        for i in range(5): p.set(46 + i, 17 + i, A); p.set(46 + i, 18 + i, A)
        eye(p, 38, 12)
    elif fid == "falls_dragon":
        fishbody(p, f, cx=32, rx=20, ry=10, tail=6, fin=False)
        for x in range(16, 46, 5): p.tri([(x, 7), (x + 4, 7), (x + 2, 1)], A)
        for r in range(3):
            for x in range(18 + r * 3, 46, 6): p.rect(x, 12 + r * 3, 3, 2, shade(B, .3))
        for i in range(9): p.set(50 + i, 20 + i * .7, A); p.set(50 + i, 21 + i * .7, A)
        p.tri([(50, 9), (53, 9), (56, 2)], "#f0e0c0")
        eye(p, 47, 12, A)
    elif fid == "cloud_smelt":
        fishbody(p, f, rx=13, ry=5)
        p.rect(18, 15, 20, 1, A); p.rect(24, 12, 6, 1, "#ffffff"); eye(p, 37, 13)
    elif fid == "alpine_trout":
        fishbody(p, f, rx=16, ry=6)
        for x in range(17, 43, 3): p.set(x, 13 + (x % 2), shade(B, -.35))
        p.rect(18, 17, 22, 1, A); eye(p, 41, 13)
    elif fid == "star_char":
        fishbody(p, f, rx=16, ry=7)
        for (x, y) in ((19, 12), (24, 15), (28, 11), (32, 16), (36, 12), (22, 19), (30, 19)):
            p.set(x, y, A); p.set(x, y - 1, shade(A, .5))
        p.rect(18, 21, 22, 1, "#ff7a5a"); eye(p, 41, 13)
    elif fid == "mirror_carp":
        fishbody(p, f, rx=15, ry=9)
        for (x, y) in ((22, 11), (28, 10), (34, 11), (25, 15), (31, 15), (28, 19)):
            p.rect(x, y, 4, 3, shade(B, .5)); p.set(x, y, "#ffffff")
        eye(p, 38, 12)
    elif fid == "sky_lord":
        fishbody(p, f, cx=32, rx=20, ry=10, tail=6, fin=False)
        for x in range(14, 48, 6): p.rect(x, 4 + (x % 3), 5, 2, "#ffffff"); p.rect(x + 1, 3 + (x % 3), 3, 1, "#ffffff")
        p.rect(20, 18, 26, 2, A); eye(p, 47, 12, A)
    else:
        fishbody(p, f); eye(p, 38, 13)
    p.outline(shade(B, -.65))
    return p.svg()


def main():
    data = json.load(open(os.path.join(HERE, "fish.json"), encoding="utf-8"))
    falls = [f for f in data if any(r in REGS for r in f["regions"])]
    for f in falls:
        with open(os.path.join(OUT, f["id"] + ".svg"), "w", encoding="utf-8") as fp:
            fp.write(draw(f))
    print("OK：", len(falls), "張大瀑布山區魚 SVG")


if __name__ == "__main__":
    main()
