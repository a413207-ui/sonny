#!/usr/bin/env python3
"""Validate 2026-006 SVG pixel-sprite fallback."""
from pathlib import Path
import json
import sys

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data" / "fish.json"
SPRITES = ROOT / "assets" / "fish"

fish = json.loads(DATA.read_text(encoding="utf-8"))
errors = []

for entry in fish:
    sprite = SPRITES / f"{entry['id']}.svg"
    if not sprite.exists():
        errors.append(f"missing: {sprite.name}")
        continue
    text = sprite.read_text(encoding="utf-8")
    checks = {
        "width=64": 'width="64"' in text,
        "height=32": 'height="32"' in text,
        "viewBox": 'viewBox="0 0 64 32"' in text,
        "crispEdges": 'shape-rendering="crispEdges"' in text,
        "rect pixels": "<rect " in text,
        "no embedded raster": "<image " not in text,
    }
    for label, ok in checks.items():
        if not ok:
            errors.append(f"{sprite.name}: {label}")

contact = SPRITES / "contact-sheet.svg"
if not contact.exists():
    errors.append("missing: contact-sheet.svg")

expected = {f"{entry['id']}.svg" for entry in fish}
actual = {p.name for p in SPRITES.glob("*.svg") if p.name != "contact-sheet.svg"}
missing = expected - actual
extra = actual - expected
if missing:
    errors.append("missing ids: " + ", ".join(sorted(missing)))
if extra:
    errors.append("extra ids: " + ", ".join(sorted(extra)))

if errors:
    print("FAILED:")
    for error in errors:
        print(" -", error)
    sys.exit(1)

print(f"OK: {len(fish)} fish SVG sprites verified; 64x32 crispEdges pixel fallback; contact sheet exists.")
