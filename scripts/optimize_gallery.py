import os
import json
from concurrent.futures import ProcessPoolExecutor
from PIL import Image

SRC_DIR = "/home/fahim/SA(PACKAGING)/public/products/Foil lead_no_bg"
THUMB_DIR = "/home/fahim/SA(PACKAGING)/public/products/gallery/thumb"
FULL_DIR = "/home/fahim/SA(PACKAGING)/public/products/gallery/full"
DATA_OUT = "/home/fahim/SA(PACKAGING)/src/data/galleryData.ts"

os.makedirs(THUMB_DIR, exist_ok=True)
os.makedirs(FULL_DIR, exist_ok=True)

def process_image(filename):
    if not filename.lower().endswith(".png"):
        return None
    
    src_path = os.path.join(SRC_DIR, filename)
    base_name = os.path.splitext(filename)[0]
    thumb_path = os.path.join(THUMB_DIR, f"{base_name}.webp")
    full_path = os.path.join(FULL_DIR, f"{base_name}.webp")
    
    try:
        with Image.open(src_path) as img:
            # Convert to RGBA if not already
            if img.mode != "RGBA":
                img = img.convert("RGBA")
            
            bbox = img.getbbox()
            if bbox:
                cropped = img.crop(bbox)
            else:
                cropped = img
            
            w, h = cropped.size
            # Add uniform 4% padding around the cropped product
            pad = int(max(w, h) * 0.04)
            padded = Image.new("RGBA", (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
            padded.paste(cropped, (pad, pad))
            
            pw, ph = padded.size
            
            # Generate Full size (max 1200px)
            full_img = padded.copy()
            full_img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
            full_img.save(full_path, "WEBP", quality=85, method=4)
            
            # Generate Thumb size (max 540px)
            thumb_img = padded.copy()
            thumb_img.thumbnail((540, 540), Image.Resampling.LANCZOS)
            thumb_img.save(thumb_path, "WEBP", quality=80, method=4)
            
            thumb_size_bytes = os.path.getsize(thumb_path)
            full_size_bytes = os.path.getsize(full_path)
            
            return {
                "id": base_name,
                "filename": filename,
                "thumbUrl": f"/products/gallery/thumb/{base_name}.webp",
                "fullUrl": f"/products/gallery/full/{base_name}.webp",
                "aspectRatio": round(pw / ph, 3),
                "thumbBytes": thumb_size_bytes,
                "fullBytes": full_size_bytes
            }
    except Exception as e:
        print(f"Error processing {filename}: {e}")
        return None

def main():
    files = sorted([f for f in os.listdir(SRC_DIR) if f.lower().endswith(".png")])
    print(f"Processing {len(files)} images with 8 workers...")
    
    with ProcessPoolExecutor(max_workers=8) as executor:
        results = list(executor.map(process_image, files))
        
    valid_items = [r for r in results if r is not None]
    print(f"Successfully processed: {len(valid_items)} images.")
    
    total_thumb_mb = sum(r["thumbBytes"] for r in valid_items) / (1024 * 1024)
    total_full_mb = sum(r["fullBytes"] for r in valid_items) / (1024 * 1024)
    print(f"Total Thumbnails Size: {total_thumb_mb:.2f} MB (Average: {total_thumb_mb/len(valid_items)*1024:.1f} KB/image)")
    print(f"Total Full Size: {total_full_mb:.2f} MB (Average: {total_full_mb/len(valid_items)*1024:.1f} KB/image)")

if __name__ == "__main__":
    main()
