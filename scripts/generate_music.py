#!/usr/bin/env python3
"""Generate music using Google Lyria 3 via REST API."""
import argparse
import base64
import json
import os
import sys
import urllib.request
import urllib.error

from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env.local"))

PHONK_PRESET = (
    "Instrumental phonk beat, 140 BPM, distorted 808 bass, "
    "aggressive hi-hat swing with triplet rolls, dark Memphis-style melody, "
    "heavy drop on beat 1, no vocals, no lyrics, loopable, "
    "cowbell accents, vinyl crackle texture, gym workout energy"
)


def generate_music(
    prompt: str,
    output_path: str,
    model: str = "lyria-3-clip-preview",
    api_key: str | None = None,
):
    key = api_key or os.environ.get("GEMINI_API_KEY", "")
    if not key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    url = (
        f"https://generativelanguage.googleapis.com/v1beta/"
        f"models/{model}:generateContent?key={key}"
    )
    payload = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["audio"]},
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url, data=data, headers={"Content-Type": "application/json"}, method="POST"
    )

    print(f"Requesting music generation ({model})...")
    try:
        with urllib.request.urlopen(req, timeout=300) as resp:
            result = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8")
        print(f"HTTP {e.code}: {body}", file=sys.stderr)
        sys.exit(1)

    audio_bytes = extract_audio(result)
    if not audio_bytes:
        print("Could not extract audio. Full response structure:", file=sys.stderr)
        print(json.dumps(result, indent=2, default=str)[:3000], file=sys.stderr)
        sys.exit(1)

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "wb") as f:
        f.write(audio_bytes)

    size = os.path.getsize(output_path)
    print(f"Saved {output_path} ({size} bytes / {size // 1024} KB)")
    return size


def extract_audio(result: dict) -> bytes | None:
    """Walk the response JSON to find base64-encoded audio data."""
    candidates = result.get("candidates", [])
    for candidate in candidates:
        content = candidate.get("content", {})
        parts = content.get("parts", [])
        for part in parts:
            inline = part.get("inlineData") or part.get("inline_data")
            if inline:
                b64 = inline.get("data", "")
                if b64:
                    return base64.b64decode(b64)
    return None


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt", default=None, help="Music description prompt")
    parser.add_argument("--phonk", action="store_true", help="Use phonk preset prompt")
    parser.add_argument("--output", required=True)
    parser.add_argument("--model", default="lyria-3-clip-preview")
    parser.add_argument("--api-key", default=None)
    args = parser.parse_args()

    if args.phonk:
        prompt = PHONK_PRESET
    elif args.prompt:
        prompt = args.prompt
    else:
        print("Provide --prompt or --phonk", file=sys.stderr)
        sys.exit(1)

    generate_music(prompt=prompt, output_path=args.output, model=args.model, api_key=args.api_key)
