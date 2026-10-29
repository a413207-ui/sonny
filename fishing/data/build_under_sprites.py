"""產生地下世界 23 種魚的 SVG 像素圖（assets/fish/<id>.svg，64×32，和其他魚同格式）。

用法：python games/fishing/data/build_under_sprites.py
每種魚 = 基本外形（身體、尾巴、鰭、眼睛、描邊）＋自己的特徵（燈籠、水晶、岩漿裂縫…）。
"""
import json
import math
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "assets", "fish")


def shade(h, k):
    h = h.lstrip("#"); r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    f = (lambda c: round(c + (255 - c) * k)) if k >= 0 else (lambda c: round(c * (1 + k)))
    return "#%02x%02x%02x" % (f(r), f(g), f(b))


class Pix:
    def __init__(self):
        self.g = [[None] * 64 for _ in range(32)]

    def set(self, x, y, c):
        x, y = int(round(x)), int(round(y))
        if 0 <= x < 64 and 0 <= y < 32:
            self.g[y][x] = c

    def rect(self, x, y, w, h, c):
        for yy in range(int(y), int(y + h)):
            for xx in range(int(x), int(x + w)):
                self.set(xx, yy, c)

    def ell(self, cx, cy, rx, ry, c, belly=None):
        for y in range(32):
            for x in range(64):
                if ((x + .5 - cx) / rx) ** 2 + ((y + .5 - cy) / ry) ** 2 <= 1:
                    self.g[y][x] = belly if belly and y + .5 > cy + ry * .3 else c

    def tri(self, pts, c):
        (ax, ay), (bx, by), (cx, cy) = pts
        def side(px, py, x1, y1, x2, y2): return (px - x2) * (y1 - y2) - (x1 - x2) * (py - y2)
        for y in range(32):
            for x in range(64):
                px, py = x + .5, y + .5
                d1, d2, d3 = side(px, py, ax, ay, bx, by), side(px, py, bx, by, cx, cy), side(px, py, cx, cy, ax, ay)
                if not ((d1 < 0 or d2 < 0 or d3 < 0) and (d1 > 0 or d2 > 0 or d3 > 0)):
                    self.g[y][x] = c

    def outline(self, col):
        g = self.g; out = [row[:] for row in g]
        for y in range(32):
            for x in range(64):
                if g[y][x] is None and any(0 <= x + dx < 64 and 0 <= y + dy < 32 and g[y + dy][x + dx] not in (None, col) for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1))):
                    out[y][x] = col
        self.g = out

    def svg(self):
        parts = []
        for y in range(32):
            x = 0
            while x < 64:
                c = self.g[y][x]
                if c is None: x += 1; continue
                x0 = x
                while x < 64 and self.g[y][x] == c: x += 1
                parts.append(f'<rect x="{x0}" y="{y}" width="{x - x0}" height="1" fill="{c}"/>')
        return '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" shape-rendering="crispEdges">' + "".join(parts) + "</svg>"


def eye(p, x, y, glow=None):
    p.rect(x, y, 2, 2, "#ffffff"); p.set(x + 1, y + 1, "#111111")
    if glow: p.set(x - 1, y, glow)


def fishbody(p, f, cx=30, cy=16, rx=15, ry=8, tail=7, fin=True):
    P = f["palette"]
    p.tri([(cx - rx + 3, cy), (cx - rx - tail, cy - ry * .9), (cx - rx - tail, cy + ry * .9)], P["fin"])
    if fin:
        p.tri([(cx - 6, cy - ry + 1), (cx + 4, cy - ry + 1), (cx - 4, cy - ry - 4)], P["fin"])
        p.tri([(cx - 4, cy + ry - 1), (cx + 3, cy + ry - 1), (cx - 3, cy + ry + 3)], P["fin"])
    p.ell(cx, cy, rx, ry, P["body"], P["belly"])
    p.rect(cx - rx + 4, cy - ry + 1, rx * 2 - 9, 1, shade(P["body"], .25))


def eelbody(p, f, x0=5, x1=58, amp=3.0, th=4):
    P = f["palette"]
    for x in range(x0, x1):
        y = 16 + math.sin(x / 6) * amp
        k = th if x < x1 - 4 else th - 1
        for d in range(-k // 2, k // 2 + 1):
            p.set(x, y + d, P["belly"] if d > 0 else P["body"])
    p.tri([(x0 + 1, 16 + math.sin(x0 / 6) * amp), (x0 - 4, 11), (x0 - 4, 21)], P["fin"])


def draw(f):
    p, P, fid = Pix(), f["palette"], f["id"]
    A, B, F = P["accent"], P["body"], P["fin"]
    k = shade(B, -.65)
    if fid == "cave_blind":
        fishbody(p, f, rx=14, ry=6)
        p.rect(36, 13, 2, 2, shade(B, .4)); p.rect(38, 14, 1, 4, A); p.rect(40, 14, 1, 4, A)
    elif fid == "glass_shrimp":
        for i, (x, y) in enumerate([(14, 16), (20, 14), (26, 13), (32, 13), (38, 14), (44, 16)]):
            p.ell(x, y, 4, 4 - (i == 0), B, P["belly"])
        p.tri([(12, 16), (5, 11), (5, 21)], F)
        for x in (22, 28, 34, 40): p.rect(x, 18, 1, 4, F)
        for i in range(12): p.set(47 + i, 12 - i * .5, A); p.set(47 + i, 13 - i * .3, A)
        p.rect(30, 13, 2, 2, A); eye(p, 44, 13)
    elif fid == "rock_loach":
        eelbody(p, f, amp=2, th=4)
        for x in range(10, 54, 5): p.set(x, 15 + math.sin(x / 6) * 2, A)
        eye(p, 54, 14); p.rect(58, 16, 3, 1, F)
    elif fid == "stalac_goby":
        fishbody(p, f, rx=14, ry=6, fin=False)
        for x in range(20, 40, 4): p.tri([(x, 11), (x + 3, 11), (x + 1.5, 4)], A)
        eye(p, 38, 13)
    elif fid == "olm":
        eelbody(p, f, x0=8, x1=54, amp=1.5, th=5)
        for x in (16, 40): p.rect(x, 19, 1, 4, F); p.rect(x - 1, 22, 3, 1, F)
        for i in range(3): p.tri([(48, 13 + i * 2), (52, 10 + i * 3), (51, 14 + i * 2)], A)
        p.rect(53, 15, 2, 1, shade(B, .3))
    elif fid == "lantern_fish":
        fishbody(p, f, rx=14, ry=9)
        for i in range(8): p.set(40 + i * .6, 7 - i * .5, F)
        p.rect(44, 1, 4, 4, A); p.set(45, 2, "#ffffff"); p.set(43, 2, shade(A, -.3)); p.set(48, 2, shade(A, -.3))
        eye(p, 38, 13); p.rect(20, 16, 14, 1, A)
    elif fid == "dark_tetra":
        fishbody(p, f, rx=14, ry=6)
        p.rect(18, 15, 22, 2, A); p.rect(17, 15, 1, 1, shade(A, .5)); eye(p, 38, 13)
    elif fid == "ghost_catfish":
        fishbody(p, f, rx=17, ry=6)
        for x in range(16, 44, 3): p.rect(x, 12, 1, 8, P["fin"])
        p.rect(14, 16, 32, 1, F); eye(p, 42, 14)
        for i in range(8): p.set(47 + i, 18 + i * .4, A); p.set(47 + i, 14 - i * .3, A)
    elif fid == "starlight_eel":
        eelbody(p, f, amp=3, th=5)
        for x in range(9, 54, 4): p.set(x, 15 + math.sin(x / 6) * 3 - (x % 8 == 1), A)
        eye(p, 54, 14)
    elif fid == "under_sturgeon":
        fishbody(p, f, cx=28, rx=19, ry=5, tail=8)
        p.rect(47, 15, 13, 2, F)
        for x in range(14, 44, 5): p.rect(x, 11, 2, 2, A)
        eye(p, 42, 14); p.rect(48, 18, 1, 3, F); p.rect(51, 18, 1, 3, F)
    elif fid == "lake_angler":
        fishbody(p, f, rx=15, ry=10, tail=6)
        p.rect(38, 17, 8, 3, "#0a0a12")
        for x in range(38, 46, 2): p.set(x, 17, "#ffffff"); p.set(x + 1, 19, "#ffffff")
        for i in range(9): p.set(36 + i * .7, 6 - i * .45, F)
        p.rect(42, 0, 4, 3, A); p.set(43, 1, "#ffffff"); eye(p, 37, 11, A)
    elif fid == "mirror_ghost":
        p.tri([(12, 16), (1, 5), (4, 16)], shade(A, .3)); p.tri([(12, 16), (1, 27), (4, 16)], shade(A, .3))
        p.tri([(20, 10), (40, 9), (24, 2)], shade(A, .4)); p.tri([(22, 22), (36, 22), (26, 29)], shade(A, .4))
        fishbody(p, f, cx=32, rx=20, ry=8, tail=4, fin=False)
        for x in range(16, 50, 4): p.set(x, 9, A); p.set(x + 2, 23, A)
        eye(p, 46, 13, A); p.rect(22, 16, 20, 1, shade(A, .5))
    elif fid == "crystal_minnow":
        fishbody(p, f, rx=14, ry=6)
        for i in range(4): p.tri([(18 + i * 6, 16), (21 + i * 6, 11), (24 + i * 6, 16)], shade(B, .35 if i % 2 else -.1))
        p.rect(22, 12, 1, 2, "#ffffff"); eye(p, 38, 13)
    elif fid == "amethyst_fish":
        fishbody(p, f, rx=13, ry=10)
        for i in range(3):
            for j in range(3): p.tri([(20 + i * 6, 9 + j * 6), (23 + i * 6, 6 + j * 6), (26 + i * 6, 9 + j * 6)], shade(A, -.1 * ((i + j) % 2)))
        eye(p, 37, 11)
    elif fid == "prism_ray":
        p.tri([(8, 16), (34, 3), (34, 29)], B); p.tri([(34, 3), (52, 16), (34, 29)], B)
        p.rect(4, 15, 10, 2, F)
        for i, c in enumerate(["#ff6a6a", "#ffd040", "#6aff8a", "#6ac8ff", "#c06aff"]): p.rect(24 + i * 4, 14, 4, 4, c)
        p.rect(30, 8, 2, 2, "#ffffff"); eye(p, 46, 12); eye(p, 46, 18)
    elif fid == "crystal_turtle":
        p.ell(30, 18, 15, 8, B, P["belly"]); p.ell(48, 18, 5, 4, F)
        for x in (18, 40): p.rect(x, 24, 4, 4, F)
        for i, c in enumerate([A, "#ffffff", A, shade(A, -.2), A]):
            p.tri([(19 + i * 5, 12), (22 + i * 5, 3 + (i % 2) * 3), (25 + i * 5, 12)], c)
        eye(p, 49, 16)
    elif fid == "gem_scale":
        fishbody(p, f, rx=14, ry=10)
        gems = ["#ff5a8a", "#ffd040", "#6aff8a", "#6ac8ff", "#c06aff", "#ffffff"]
        for i in range(5):
            for j in range(3): p.rect(19 + i * 4, 10 + j * 4 + (i % 2) * 2, 2, 2, gems[(i + j * 2) % 6])
        eye(p, 37, 11)
    elif fid == "ember_minnow":
        fishbody(p, f, rx=13, ry=5)
        for (x, y) in [(8, 9), (12, 24), (47, 7), (52, 22), (20, 4)]: p.set(x, y, A)
        p.rect(20, 15, 14, 1, A); eye(p, 37, 14)
    elif fid == "lava_eel":
        eelbody(p, f, amp=3, th=5)
        for x in range(9, 54, 3):
            if (x // 3) % 3 != 2: p.set(x, 16 + math.sin(x / 6) * 3, A)
        eye(p, 54, 14, A)
    elif fid == "magma_crab":
        p.ell(32, 18, 13, 7, B, P["belly"])
        for x in (22, 27, 37, 42): p.rect(x, 24, 1, 5, F); p.rect(x - 1, 28, 3, 1, F)
        p.ell(14, 12, 5, 4, B); p.ell(50, 12, 5, 4, B); p.rect(11, 9, 3, 2, A); p.rect(51, 9, 3, 2, A)
        for x in range(24, 40, 4): p.rect(x, 14, 2, 1, A)
        eye(p, 28, 9); eye(p, 35, 9)
    elif fid == "obsidian_fish":
        fishbody(p, f, rx=14, ry=10)
        p.rect(18, 8, 16, 1, "#4a3e48"); p.rect(20, 10, 8, 1, "#6a5e68")
        for i in range(6): p.set(18 + i * 3, 22 - (i % 2), A); p.set(19 + i * 3, 23 - (i % 2), A)
        eye(p, 37, 12, A)
    elif fid == "flame_pike":
        for i in range(5): p.tri([(16 + i * 6, 12), (20 + i * 6, 12), (17 + i * 6, 4 - (i % 2) * 2)], A if i % 2 else "#ff6a2a")
        fishbody(p, f, cx=28, rx=19, ry=5, tail=8, fin=False)
        p.rect(46, 15, 12, 3, B); p.rect(50, 18, 8, 1, "#ffffff"); eye(p, 43, 13, A)
        p.tri([(8, 16), (2, 8), (5, 16)], "#ff6a2a"); p.tri([(8, 16), (2, 24), (5, 16)], A)
    elif fid == "udragon":
        for x in range(6, 52):
            y = 17 + math.sin(x / 7) * 3
            for d in range(-4, 5): p.set(x, y + d, P["belly"] if d > 1 else B)
        for x in range(10, 50, 5): p.tri([(x, 13 + math.sin(x / 7) * 3), (x + 4, 13 + math.sin(x / 7) * 3), (x + 1, 6 + math.sin(x / 7) * 3)], A if (x // 5) % 2 else "#ffd040")
        p.ell(53, 15, 7, 5, B); p.rect(56, 18, 7, 2, "#ffd040")
        p.tri([(50, 11), (54, 11), (47, 2)], "#d8c8a8"); p.tri([(55, 11), (58, 11), (58, 3)], "#d8c8a8")
        for i in range(6): p.set(58 + i * .5, 20 + i * .6, A)
        p.tri([(7, 17), (0, 9), (2, 17)], A); p.tri([(7, 17), (0, 26), (2, 17)], "#ffd040")
        eye(p, 54, 13, A)
    else:
        fishbody(p, f); eye(p, 38, 13)
    p.outline(k)
    return p.svg()


def main():
    data = json.load(open(os.path.join(HERE, "fish.json"), encoding="utf-8"))
    under = [f for f in data if any(r in ("ucave", "ulake", "ucrystal", "ulava") for r in f["regions"])]
    for f in under:
        with open(os.path.join(OUT, f["id"] + ".svg"), "w", encoding="utf-8") as fp:
            fp.write(draw(f))
    print("OK：", len(under), "張地底魚 SVG")


if __name__ == "__main__":
    main()
