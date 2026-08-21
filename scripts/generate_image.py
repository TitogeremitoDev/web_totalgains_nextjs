#!/usr/bin/env python3
"""Generador de imágenes editoriales con la Google Gemini API.

Actualizado el 21-ago-2026: los modelos `imagen-*:predict` dejaron de estar
disponibles con nuestra key ("is not found for API version v1beta"). Los
modelos de imagen actuales van por `generateContent` y devuelven la imagen
como `inlineData` en base64. Se puede listar lo disponible con:

    curl -s "https://generativelanguage.googleapis.com/v1beta/models?key=$GEMINI_API_KEY"

Recordatorio de las normas al escribir el prompt (ver
docs/seo/image-prompts-registry.md): nunca códigos hex, nunca la palabra
"TotalGains" si la imagen incluye una pantalla, y evitar manos frontales.
"""
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

    model = os.environ.get("GEMINI_IMAGE_MODEL", "gemini-3-pro-image")
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {
            "responseModalities": ["IMAGE"],
            "imageConfig": {"aspectRatio": aspect_ratio},
        },
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"}, method="POST")

    try:
        with urllib.request.urlopen(req, timeout=180) as resp:
            result = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"HTTP {e.code}: {body}", file=sys.stderr)
        sys.exit(1)

    # La imagen viaja como inlineData dentro de la primera candidate.
    img_b64 = ""
    for cand in result.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            blob = part.get("inlineData") or part.get("inline_data")
            if blob and blob.get("data"):
                img_b64 = blob["data"]
                break
        if img_b64:
            break

    if not img_b64:
        print(f"No image data in response: {json.dumps(result)[:600]}", file=sys.stderr)
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
