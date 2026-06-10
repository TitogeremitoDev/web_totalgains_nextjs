#!/usr/bin/env python3
"""Generate video using Google Veo 3.1 via google-genai SDK."""
import argparse
import os
import sys
import time

from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env.local"))


def generate_video(
    prompt: str,
    output_path: str,
    image_path: str | None = None,
    model: str = "veo-3.1-fast-generate-preview",
    resolution: str = "720p",
    aspect_ratio: str = "9:16",
    api_key: str | None = None,
):
    key = api_key or os.environ.get("GEMINI_API_KEY", "")
    if not key:
        print("GEMINI_API_KEY not set", file=sys.stderr)
        sys.exit(1)

    client = genai.Client(api_key=key)

    config = types.GenerateVideosConfig(
        aspect_ratio=aspect_ratio,
        number_of_videos=1,
        person_generation="allow_all",
        resolution=resolution,
    )

    kwargs = {"model": model, "prompt": prompt, "config": config}

    if image_path:
        with open(image_path, "rb") as f:
            img_bytes = f.read()
        mime = "image/png" if image_path.endswith(".png") else "image/jpeg"
        kwargs["image"] = types.Image(image_bytes=img_bytes, mime_type=mime)

    print(f"Requesting video generation ({model}, {resolution}, {aspect_ratio})...")
    operation = client.models.generate_videos(**kwargs)

    print("Polling for completion...")
    while not operation.done:
        time.sleep(10)
        operation = client.operations.get(operation)
        print("  ...still generating")

    if not operation.response or not operation.response.generated_videos:
        print(f"No video returned: {operation}", file=sys.stderr)
        sys.exit(1)

    video = operation.response.generated_videos[0].video
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)

    with open(output_path, "wb") as f:
        f.write(client.files.download(file=video))

    size = os.path.getsize(output_path)
    print(f"Saved {output_path} ({size} bytes / {size // 1024} KB)")
    return size


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--image", default=None, help="Path to image for image-to-video")
    parser.add_argument("--model", default="veo-3.1-fast-generate-preview")
    parser.add_argument("--resolution", default="720p", choices=["720p", "1080p"])
    parser.add_argument("--aspect-ratio", default="9:16")
    parser.add_argument("--api-key", default=None)
    args = parser.parse_args()

    generate_video(
        prompt=args.prompt,
        output_path=args.output,
        image_path=args.image,
        model=args.model,
        resolution=args.resolution,
        aspect_ratio=args.aspect_ratio,
        api_key=args.api_key,
    )
