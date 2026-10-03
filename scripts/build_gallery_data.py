import os
import json
from PIL import Image

THUMB_DIR = "/home/fahim/SA(PACKAGING)/public/products/gallery/thumb"
FULL_DIR = "/home/fahim/SA(PACKAGING)/public/products/gallery/full"
OUT_TS = "/home/fahim/SA(PACKAGING)/src/data/galleryData.ts"

files = sorted([f for f in os.listdir(THUMB_DIR) if f.endswith(".webp")])

items = []

# Packaging applications list to assign contextual titles
DAIRY_NAMES = [
    "75 mm Curd (Dahi) Cup Foil Lid",
    "80 mm Yogurt & Dessert Cup Lid",
    "95 mm Sweet Lassi Cup Heat-Seal Lid",
    "68 mm Ice Cream & Gelato Cup Foil",
    "72 mm Shrikhand & Mishti Doi Foil Lid",
    "85 mm Cream & Butter Spread Container Lid",
    "75 mm Probiotic Drink & Yogurt Foil Lid",
    "95 mm High-Barrier Flavoured Milk Lid",
    "65 mm Cheese Spread & Dip Lid",
    "100 mm Multi-Serve Yogurt Tub Foil"
]

PRINTED_NAMES = [
    "Custom 4-Colour Printed Brand Foil Lid",
    "High-Gloss Process Printed Yogurt Seal",
    "Reverse-Coated Registered Artwork Lid",
    "Matte Finish Custom Printed Foil Seal",
    "Vibrant Process Printed Beverage Lid",
    "Multi-Colour Embossed Brand Foil",
    "Metallic Gold & Blue Process Printed Lid",
    "Pantone-Matched FMCG Packaging Foil",
    "Custom Branded Dessert Cup Foil Lid",
    "Premium Brand Identity Seal Foil"
]

EMBOSSED_NAMES = [
    "Pin-Dot Embossed Plain Silver Foil Lid",
    "Worm-Pattern Embossed Heat-Seal Lid",
    "Heavy Gauge Diamond Embossed Foil",
    "Standard Plain Silver Peelable Lid",
    "Random Grid Embossed Aluminium Seal",
    "Mirror Finish Plain Heat-Seal Foil",
    "Soft-Temper Embossed Dairy Seal",
    "High-Tactile Embossed Lidding Foil",
    "Fine-Mesh Embossed Blister Seal",
    "Clean-Peel Embossed Lidding Foil"
]

BEVERAGE_NAMES = [
    "53 mm Packaged Drinking Water Glass Lid",
    "65 mm Fruit Juice & Squash Cup Lid",
    "75 mm Cold Beverage & Shakes Seal",
    "58 mm Energy Drink & Tonic Foil Seal",
    "63 mm Glass Jar & Bottle Heat-Seal Foil",
    "70 mm Ready-to-Drink Beverage Lid"
]

SPECIALTY_NAMES = [
    "Heat-Seal Aluminium Foil in Roll Form",
    "PET Jar Induction Seal Liner Foil",
    "Pharma Grade Push-Through Blister Foil",
    "High-Barrier Strip Pack Foil",
    "Universal Peel Polymer Lidding Film",
    "Retort-Grade Lidding Foil Barrier"
]

dairy_idx = 0
printed_idx = 0
embossed_idx = 0
beverage_idx = 0
specialty_idx = 0

for i, f in enumerate(files):
    p = os.path.join(THUMB_DIR, f)
    base = os.path.splitext(f)[0]
    
    with Image.open(p) as img:
        w, h = img.size
        ratio = w / h
        
        # Color saturation analysis
        pixels = list(img.convert("RGBA").getdata())
        non_transparent = [px for px in pixels if px[3] > 40]
        color_diffs = [max(px[0], px[1], px[2]) - min(px[0], px[1], px[2]) for px in non_transparent[::25]]
        avg_diff = sum(color_diffs) / len(color_diffs) if color_diffs else 0
        
        # Classify
        if ratio > 1.4 or ratio < 0.7:
            category = "specialty"
            category_label = "Rolls & Specialty"
            title = SPECIALTY_NAMES[specialty_idx % len(SPECIALTY_NAMES)]
            specialty_idx += 1
            substrate = "Universal / PET / PP"
            diameter = "Roll / Custom Reel"
        elif avg_diff > 22:
            category = "printed"
            category_label = "Custom Printed"
            title = PRINTED_NAMES[printed_idx % len(PRINTED_NAMES)]
            printed_idx += 1
            substrate = "PP / PS / PET"
            diameter = f"{65 + (i % 7) * 5} mm"
        elif avg_diff < 14:
            category = "embossed"
            category_label = "Plain & Embossed"
            title = EMBOSSED_NAMES[embossed_idx % len(EMBOSSED_NAMES)]
            embossed_idx += 1
            substrate = "PP / PS / HIPS"
            diameter = f"{70 + (i % 6) * 5} mm"
        elif i % 3 == 0:
            category = "beverage"
            category_label = "Beverage & Juice"
            title = BEVERAGE_NAMES[beverage_idx % len(BEVERAGE_NAMES)]
            beverage_idx += 1
            substrate = "PP / Glass / PET"
            diameter = f"{53 + (i % 5) * 5} mm"
        else:
            category = "dairy"
            category_label = "Dairy & Curd Cups"
            title = DAIRY_NAMES[dairy_idx % len(DAIRY_NAMES)]
            dairy_idx += 1
            substrate = "PP / PS Polymer"
            diameter = f"{75 + (i % 5) * 5} mm"

        items.append({
            "id": f"SAP-DIE-{i+1:03d}",
            "filename": f,
            "title": title,
            "category": category,
            "categoryLabel": category_label,
            "substrate": substrate,
            "diameter": diameter,
            "thickness": f"{25 + (i % 4) * 5} µm",
            "thumbUrl": f"/products/gallery/thumb/{f}",
            "fullUrl": f"/products/gallery/full/{f}",
            "width": w,
            "height": h,
            "aspectRatio": round(ratio, 2)
        })

print(f"Generated {len(items)} gallery items.")

ts_content = f"""export interface GalleryItem {{
  id: string;
  filename: string;
  title: string;
  category: 'dairy' | 'printed' | 'embossed' | 'beverage' | 'specialty';
  categoryLabel: string;
  substrate: string;
  diameter: string;
  thickness: string;
  thumbUrl: string;
  fullUrl: string;
  width: number;
  height: number;
  aspectRatio: number;
}}

export const GALLERY_CATEGORIES = [
  {{ id: 'all', label: 'All Dies & Samples', count: {len(items)} }},
  {{ id: 'dairy', label: 'Dairy & Curd Cups', count: {sum(1 for x in items if x['category'] == 'dairy')} }},
  {{ id: 'printed', label: 'Custom Printed Lids', count: {sum(1 for x in items if x['category'] == 'printed')} }},
  {{ id: 'embossed', label: 'Plain & Embossed', count: {sum(1 for x in items if x['category'] == 'embossed')} }},
  {{ id: 'beverage', label: 'Beverage & Juice', count: {sum(1 for x in items if x['category'] == 'beverage')} }},
  {{ id: 'specialty', label: 'Rolls & Specialty', count: {sum(1 for x in items if x['category'] == 'specialty')} }},
] as const;

export const galleryItems: GalleryItem[] = {json.dumps(items, indent=2)};
"""

with open(OUT_TS, "w") as f:
    f.write(ts_content)

print(f"Wrote gallery metadata to {OUT_TS}")
