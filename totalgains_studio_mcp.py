#!/usr/bin/env python3
"""TotalGains Studio MCP Server — exposes image/video/music generation + reel mixing."""
import os
import subprocess
import sys
from pathlib import Path

from mcp.server.fastmcp import FastMCP

REPO_DIR = Path("/home/german/Escritorio/APKFITNESS/TotalGains_NextJS")
SCRIPTS = REPO_DIR / "scripts"
OUT_DIR = REPO_DIR / "out"
REMOTION_DIR = REPO_DIR / "remotion"

mcp = FastMCP("totalgains-studio")


def _run(cmd: list[str], timeout: int = 600, cwd: Path | None = None) -> str:
    """Run a subprocess and return combined stdout+stderr."""
    env = {**os.environ}
    from dotenv import dotenv_values
    env.update(dotenv_values(REPO_DIR / ".env.local"))

    result = subprocess.run(
        cmd, capture_output=True, text=True, timeout=timeout, env=env, cwd=str(cwd or REPO_DIR)
    )
    output = (result.stdout or "") + "\n" + (result.stderr or "")
    if result.returncode != 0:
        return f"ERROR (exit {result.returncode}):\n{output.strip()}"
    return output.strip()


@mcp.tool()
def generate_image(prompt: str, output: str = "out/image.png", width: int = 1080, height: int = 1080, quality: int = 82) -> str:
    """Generate an image with Imagen 4. Output is saved relative to repo root."""
    out_path = str(REPO_DIR / output)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    return _run([
        sys.executable, str(SCRIPTS / "generate_image.py"),
        "--prompt", prompt,
        "--output", out_path,
        "--width", str(width),
        "--height", str(height),
        "--quality", str(quality),
    ])


@mcp.tool()
def generate_video(
    prompt: str,
    output: str = "out/video.mp4",
    model: str = "veo-3.1-fast-generate-preview",
    resolution: str = "720p",
    aspect_ratio: str = "9:16",
    image: str | None = None,
) -> str:
    """Generate a video with Veo 3.1. Use image param for image-to-video."""
    out_path = str(REPO_DIR / output)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    cmd = [
        sys.executable, str(SCRIPTS / "generate_video.py"),
        "--prompt", prompt,
        "--output", out_path,
        "--model", model,
        "--resolution", resolution,
        "--aspect-ratio", aspect_ratio,
    ]
    if image:
        cmd.extend(["--image", str(REPO_DIR / image)])
    return _run(cmd, timeout=600)


@mcp.tool()
def generate_music(prompt: str = "", phonk: bool = True, output: str = "out/music.mp3", model: str = "lyria-3-clip-preview") -> str:
    """Generate music with Lyria 3. Set phonk=True for the phonk preset."""
    out_path = str(REPO_DIR / output)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    cmd = [
        sys.executable, str(SCRIPTS / "generate_music.py"),
        "--output", out_path,
        "--model", model,
    ]
    if phonk:
        cmd.append("--phonk")
    elif prompt:
        cmd.extend(["--prompt", prompt])
    else:
        return "ERROR: provide prompt or set phonk=True"
    return _run(cmd, timeout=300)


@mcp.tool()
def render_reel(props_json: str, output_filename: str = "reel_final.mp4") -> str:
    """Render a Reel with the ReelTotalGains Remotion template.
    props_json: JSON string with {hook, subtext, cta, clips[], music, clipFrames?}.
    Clips and music are filenames in remotion/public/. Applies brand specs:
    hook y<400, CTA box #3b5bdb y=1600-1750, watermark, standard closing."""
    import json as _json
    import tempfile
    props = _json.loads(props_json)
    output = str(OUT_DIR / output_filename)
    os.makedirs(os.path.dirname(output), exist_ok=True)
    props_file = os.path.join(tempfile.gettempdir(), "remotion_props.json")
    with open(props_file, "w") as f:
        _json.dump(props, f)
    result = _run([
        "npx", "remotion", "render", "ReelTotalGains", output,
        f"--props={props_file}",
    ], timeout=1200, cwd=REMOTION_DIR)
    if os.path.exists(output):
        size = os.path.getsize(output)
        result += f"\nReel renderizado: {output} ({size // 1024} KB)"
    return result


@mcp.tool()
def mix_reel(video: str = "out/video.mp4", audio: str = "out/music.mp3", output: str = "out/reel.mp4") -> str:
    """Mix video + audio into a final reel with ffmpeg (H.264 baseline + AAC). Legacy — prefer render_reel."""
    v = str(REPO_DIR / video)
    a = str(REPO_DIR / audio)
    o = str(REPO_DIR / output)
    os.makedirs(os.path.dirname(o), exist_ok=True)
    return _run([
        "ffmpeg", "-y", "-i", v, "-i", a,
        "-map", "0:v", "-map", "1:a",
        "-c:v", "libx264", "-profile:v", "baseline", "-level", "3.1",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-crf", "23",
        "-c:a", "aac", "-b:a", "192k", "-shortest",
        o,
    ], timeout=120)


@mcp.tool()
def list_outputs() -> str:
    """List all generated files in the out/ directory."""
    out = OUT_DIR
    if not out.exists():
        return "out/ directory does not exist yet."
    files = sorted(out.rglob("*"))
    if not files:
        return "out/ is empty."
    lines = []
    for f in files:
        if f.is_file():
            size = f.stat().st_size
            lines.append(f"  {f.relative_to(REPO_DIR)}  ({size // 1024} KB)")
    return "\n".join(lines) if lines else "out/ is empty."


if __name__ == "__main__":
    mcp.run()
