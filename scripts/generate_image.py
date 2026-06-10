#!/usr/bin/env python3
"""Fallback image generator using Google Gemini API (imagen-3.0-generate-002)."""
import argparse
import base64
import json
import os
import subprocess
import sys
import urllib.request
import urllib.error

def generate_image(api_key: str, prompt: str, output_path: str, width: int, height: int, quality: int = 82):
    # Determine aspect ratio
    ratio = width / height
    if ratio >= 1.7:
        aspect_ratio = "16:9"
    elif ratio >= 1.4:
        aspect_ratio = "3:2"
    elif abs(ratio - 1.0) < 0.05:
        aspect_ratio = "1:1"
    elif ratio <= 0.6:
        aspect_ratio = "9:16"
    else:
        aspect_ratio = "4:3"

    url = f"https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key={api_key}"
    payload = {
        "instances": [{"prompt": prompt}],
        "parameters": {
            "sampleCount": 1,
            "aspectRatio": aspect_ratio,
            "safetySetting": "block_low_and_above",
            "personGeneration": "allow_adult"
        }
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"}, method="POST")

    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            result = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"HTTP {e.code}: {body}", file=sys.stderr)
        sys.exit(1)

    predictions = result.get("predictions", [])
    if not predictions:
        print(f"No predictions returned: {result}", file=sys.stderr)
        sys.exit(1)

    img_b64 = predictions[0].get("bytesBase64Encoded", "")
    if not img_b64:
        print(f"No image data in response: {predictions[0]}", file=sys.stderr)
        sys.exit(1)

    img_bytes = base64.b64decode(img_b64)

    # If output is not WebP, just save the raw PNG directly
    if not output_path.endswith(".webp"):
        with open(output_path, "wb") as f:
            f.write(img_bytes)
        size = os.path.getsize(output_path)
        print(f"Saved {output_path} ({size} bytes / {size//1024} KB)")
        return size

    # Save as temp PNG then convert to WebP with cwebp or ffmpeg
    tmp_png = output_path.replace(".webp", "_tmp.png")
    with open(tmp_png, "wb") as f:
        f.write(img_bytes)

    # Convert to WebP
    converted = False
    # Try cwebp
    try:
        result_conv = subprocess.run(
            ["cwebp", "-q", str(quality), "-resize", str(width), str(height), tmp_png, "-o", output_path],
            capture_output=True, timeout=60
        )
        if result_conv.returncode == 0:
            converted = True
    except (FileNotFoundError, subprocess.TimeoutExpired):
        pass

    if not converted:
        # Try ffmpeg
        try:
            result_conv = subprocess.run(
                ["ffmpeg", "-y", "-i", tmp_png, "-vf", f"scale={width}:{height}:force_original_aspect_ratio=decrease,pad={width}:{height}:(ow-iw)/2:(oh-ih)/2",
                 "-q:v", str(int((100 - quality) / 10)), output_path],
                capture_output=True, timeout=60
            )
            if result_conv.returncode == 0:
                converted = True
        except (FileNotFoundError, subprocess.TimeoutExpired):
            pass

    if not converted:
        # Try Pillow
        try:
            from PIL import Image
            img = Image.open(tmp_png)
            img = img.resize((width, height), Image.LANCZOS)
            img.save(output_path, "WEBP", quality=quality)
            converted = True
        except ImportError:
            pass

    if not converted:
        # Just rename PNG as fallback
        import shutil
        shutil.copy(tmp_png, output_path)
        print(f"WARNING: Could not convert to WebP; saved raw PNG to {output_path}", file=sys.stderr)

    # Cleanup temp
    if os.path.exists(tmp_png):
        os.remove(tmp_png)

    size = os.path.getsize(output_path)
    print(f"Saved {output_path} ({size} bytes / {size//1024} KB)")
    return size


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--width", type=int, default=1344)
    parser.add_argument("--height", type=int, default=768)
    parser.add_argument("--quality", type=int, default=82)
    parser.add_argument("--api-key", default=os.environ.get("GEMINI_API_KEY", ""))
    args = parser.parse_args()

    if not args.api_key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    os.makedirs(os.path.dirname(os.path.abspath(args.output)), exist_ok=True)
    generate_image(args.api_key, args.prompt, args.output, args.width, args.height, args.quality)
