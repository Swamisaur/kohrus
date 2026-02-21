"""
Download Unsplash landing images, then run Gemini Nano Banana image-to-image edit
with thematic prompting (authentic, handmade, warm palette). Saves to kohrus-web/public/.
Requires: pip install google-genai Pillow requests
"""
import os
import sys

try:
    import requests
except ImportError:
    requests = None

# Unsplash URLs from codebase (Hero fallback + 4 FeaturedAssets + 3 How It Works)
HERO_URL = "https://images.unsplash.com/photo-1662207188435-1f39465f141a?w=800&q=80"
FEATURED_URLS = [
    "https://images.unsplash.com/photo-1768845431893-8e28ed7bf79e?w=800&q=80",
    "https://images.unsplash.com/photo-1625081822211-7fcd844303d8?w=800&q=80",
    "https://images.unsplash.com/photo-1645523906752-0121f6cdc0da?w=800&q=80",
    "https://images.unsplash.com/photo-1549532313-335d43eb3290?w=800&q=80",
]
HOW_IT_WORKS_URLS = [
    "https://images.unsplash.com/photo-1548094891-c4ba474efd16?w=800&q=80",
    "https://images.unsplash.com/photo-1635950340810-2fb374521a7b?w=800&q=80",
    "https://images.unsplash.com/photo-1634117622592-114e3024ff27?w=800&q=80",
]

# Thematic prompt (from LANDING_IMAGE_STYLE.md): authentic, handmade, warm palette
STYLE_PROMPT = (
    "Transform this image to match an authentic, handmade art style. "
    "Apply a linocut or soft paper-collage look with subtle paper texture; no glossy or digital look. "
    "Use only this warm artisanal color palette: cream and warm paper (#F5F0E8, #EDE6DC), "
    "terracotta and burnt earth (#C17F59, #A65D3A), ochre and warm gold (#C9A227, #D4A84B), "
    "deep indigo (#2C3E5D, #3D4F6B), and warm neutrals (#6B6360, #4A4543). "
    "Keep the same composition and subject; only change the style and colors to this warm, handmade aesthetic. "
    "Result should feel like a music or creative asset card—artful and unique."
)

# CTA banner: text-to-image, wide background for "Ready to invest" section (text overlays on top)
CTA_BANNER_PROMPT = (
    "Wide horizontal banner background image for a website call-to-action section. "
    "Authentic handmade linocut or paper-collage style. Warm artisanal palette: "
    "cream (#F5F0E8), terracotta (#C17F59), ochre (#C9A227), deep indigo (#2C3E5D). "
    "Abstract music theme: subtle waveforms, instruments, or notation shapes. "
    "Soft and muted so that white text can be overlaid on top. No text or words in the image. "
    "Wide 16:9 aspect, calm and inviting. Slightly darker in the center so text will be readable."
)

# Hero background: very subtle texture for hero section (left side of hero)
HERO_BG_PROMPT = (
    "Subtle abstract background texture for a website hero section. "
    "Linocut or paper-collage style, very light and muted. "
    "Warm palette: cream (#F5F0E8), very light terracotta (#E8DED5), soft indigo tint (#E8EBF0). "
    "Abstract shapes: gentle curves, soft notation or waveform hints. No text. No people. "
    "Square or 4:3 aspect. Must be very subtle so dark text can sit on top. Almost like a watermark."
)

# Why Kohrus: 3 small illustrations (fractional, passive income, liquid market)
WHY_1_PROMPT = (
    "Small illustration for 'fractional ownership': a single coin or ticket splitting into several smaller pieces, "
    "handmade linocut style. Warm palette: cream (#F5F0E8), terracotta (#C17F59), ochre (#C9A227), deep indigo (#2C3E5D). "
    "Simple, iconic, no text. Square format."
)
WHY_2_PROMPT = (
    "Small illustration for 'passive income': a plant growing or coins flowing into a jar, "
    "handmade linocut style. Warm palette: cream (#F5F0E8), terracotta (#C17F59), ochre (#C9A227), deep indigo (#2C3E5D). "
    "Simple, positive, no text. Square format."
)
WHY_3_PROMPT = (
    "Small illustration for 'liquid market': two hands exchanging a small certificate or coin, or a flowing river, "
    "handmade linocut style. Warm palette: cream (#F5F0E8), terracotta (#C17F59), ochre (#C9A227), deep indigo (#2C3E5D). "
    "Simple, movement, no text. Square format."
)

# Who it's for: two column illustrations
FOR_INVESTORS_PROMPT = (
    "Illustration for 'investors': person browsing on phone or laptop with a small portfolio chart and music notes in the air. "
    "Handmade linocut or paper-collage style. Warm palette: cream (#F5F0E8), terracotta (#C17F59), ochre (#C9A227), deep indigo (#2C3E5D). "
    "Friendly, aspirational. No text. Landscape 4:3 or 16:9."
)
FOR_ARTISTS_PROMPT = (
    "Illustration for 'artists': musician or microphone with fans or coins flowing toward them. "
    "Handmade linocut or paper-collage style. Warm palette: cream (#F5F0E8), terracotta (#C17F59), ochre (#C9A227), deep indigo (#2C3E5D). "
    "Empowering, creative. No text. Landscape 4:3 or 16:9."
)

# Stronger prompt for How It Works steps: must look clearly illustrated, NOT photographic
HOW_STEP_STYLE_PROMPT = (
    "Convert this photo into an obvious linocut or block-print style illustration. "
    "Do NOT keep it photorealistic. The result must look clearly hand-printed or paper-collage, "
    "with visible texture, simplified shapes, and flat color areas. "
    "Use ONLY this warm artisanal palette: cream (#F5F0E8, #EDE6DC), terracotta (#C17F59, #A65D3A), "
    "ochre/gold (#C9A227, #D4A84B), deep indigo (#2C3E5D, #3D4F6B), warm neutrals (#6B6360, #4A4543). "
    "Replace all original colors with these. Add subtle paper or print texture. "
    "Final image must look like an art print or handmade illustration—not a photograph."
)

api_key = (
    os.environ.get("GOOGLE_API_KEY")
    or os.environ.get("GEMINI_API_KEY")
    or "AIzaSyA5Sd-TCLhxPW3N-wKEFTYT_RxpbxTwM78"
)


def download(url: str, path: str) -> bool:
    if not requests:
        print("Install requests: pip install requests")
        return False
    try:
        r = requests.get(url, timeout=30)
        r.raise_for_status()
        with open(path, "wb") as f:
            f.write(r.content)
        return True
    except Exception as e:
        print(f"Download failed {url}: {e}")
        return False


def edit_image(client, source_path: str, out_path: str, prompt: str) -> bool:
    from google.genai import types
    from google.genai.errors import ClientError
    from PIL import Image
    import time

    if not os.path.isfile(source_path):
        print(f"Missing source: {source_path}")
        return False
    img = Image.open(source_path)
    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")
    elif img.mode == "RGBA":
        img = img.convert("RGB")

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model="gemini-2.5-flash-image",
                contents=[prompt, img],
                config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"]),
            )
            break
        except ClientError as e:
            if getattr(e, "code", None) == 429 and attempt < 2:
                wait = 50
                print(f"  Rate limited (429); waiting {wait}s before retry...")
                time.sleep(wait)
                continue
            raise

    for candidate in response.candidates or []:
        for part in (candidate.content.parts or []):
            if part.inline_data and getattr(part.inline_data, "data", None):
                with open(out_path, "wb") as f:
                    f.write(part.inline_data.data)
                return True
            if getattr(part, "text", None):
                print(f"  Model: {part.text[:200]}...")
    return False


def generate_image(client, prompt: str, out_path: str) -> bool:
    """Text-to-image: generate from prompt only (no source image)."""
    from google.genai import types
    from google.genai.errors import ClientError
    import time

    for attempt in range(3):
        try:
            response = client.models.generate_content(
                model="gemini-2.5-flash-image",
                contents=[prompt],
                config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"]),
            )
            break
        except ClientError as e:
            if getattr(e, "code", None) == 429 and attempt < 2:
                time.sleep(50)
                continue
            raise

    for candidate in response.candidates or []:
        for part in (candidate.content.parts or []):
            if part.inline_data and getattr(part.inline_data, "data", None):
                with open(out_path, "wb") as f:
                    f.write(part.inline_data.data)
                return True
    return False


def main():
    import time
    from google import genai

    only_how_steps = os.environ.get("ONLY_HOW_STEPS", "").strip().lower() in ("1", "true", "yes")
    only_cta_banner = os.environ.get("ONLY_CTA_BANNER", "").strip().lower() in ("1", "true", "yes")
    only_new_sections = os.environ.get("ONLY_NEW_SECTIONS", "").strip().lower() in ("1", "true", "yes")
    only_who = os.environ.get("ONLY_WHO", "").strip().lower() in ("1", "true", "yes")
    script_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(script_dir, "..", "public")
    os.makedirs(public_dir, exist_ok=True)
    cache_dir = os.path.join(script_dir, "..", ".cache-images")
    os.makedirs(cache_dir, exist_ok=True)

    client = genai.Client(api_key=api_key)

    if only_how_steps:
        print("Only generating How It Works step images...")
    if only_cta_banner:
        print("Only generating CTA banner...")
    if only_new_sections:
        print("Only generating new section images (hero-bg, why, for-investors/artists)...")
    if only_who:
        print("Only generating Who it's for images (for-investors, for-artists)...")

    # 1) Hero
    if not only_how_steps and not only_cta_banner and not only_new_sections and not only_who:
        hero_src = os.path.join(cache_dir, "hero-src.jpg")
        if not os.path.isfile(hero_src) and not download(HERO_URL, hero_src):
            print("Skipping hero (download failed).")
        else:
            print("Editing hero card...")
            if edit_image(client, hero_src, os.path.join(public_dir, "hero-card.png"), STYLE_PROMPT):
                print("  Saved public/hero-card.png")
            else:
                print("  Hero edit failed.")
            time.sleep(5)

    # 2) Featured 1–4
    if not only_how_steps and not only_cta_banner and not only_new_sections and not only_who:
        for i, url in enumerate(FEATURED_URLS, start=1):
            src = os.path.join(cache_dir, f"featured-{i}-src.jpg")
            if not os.path.isfile(src) and not download(url, src):
                print(f"  Featured {i}: download failed, skip.")
                continue
            print(f"Editing featured {i}...")
            out = os.path.join(public_dir, f"featured-{i}.png")
            if edit_image(client, src, out, STYLE_PROMPT):
                print(f"  Saved public/featured-{i}.png")
            else:
                print(f"  Featured {i} edit failed.")
            if i < len(FEATURED_URLS):
                time.sleep(5)

    # 3) How It Works steps 1–3
    if not only_cta_banner and not only_who:
        for i, url in enumerate(HOW_IT_WORKS_URLS, start=1):
            src = os.path.join(cache_dir, f"how-step-{i}-src.jpg")
            if not os.path.isfile(src) and not download(url, src):
                print(f"  How step {i}: download failed, skip.")
                continue
            print(f"Editing how-step {i}...")
            out = os.path.join(public_dir, f"how-step-{i}.png")
            if edit_image(client, src, out, HOW_STEP_STYLE_PROMPT):
                print(f"  Saved public/how-step-{i}.png")
            else:
                print(f"  How step {i} edit failed.")
            if i < len(HOW_IT_WORKS_URLS):
                time.sleep(5)

    # 4) CTA banner (text-to-image)
    if (not only_how_steps or only_cta_banner) and not only_new_sections and not only_who:
        print("Generating CTA banner...")
        if generate_image(client, CTA_BANNER_PROMPT, os.path.join(public_dir, "cta-banner.png")):
            print("  Saved public/cta-banner.png")
        else:
            print("  CTA banner generation failed.")

    # 5) New section images (hero-bg, why 1–3, for-investors, for-artists)
    if only_who:
        print("Generating for-investors...")
        if generate_image(client, FOR_INVESTORS_PROMPT, os.path.join(public_dir, "for-investors.png")):
            print("  Saved public/for-investors.png")
        else:
            print("  for-investors failed.")
        time.sleep(5)
        print("Generating for-artists...")
        if generate_image(client, FOR_ARTISTS_PROMPT, os.path.join(public_dir, "for-artists.png")):
            print("  Saved public/for-artists.png")
        else:
            print("  for-artists failed.")
    elif only_new_sections or (not only_how_steps and not only_cta_banner):
        if only_new_sections:
            pass  # run only the block below
        else:
            time.sleep(5)
        print("Generating hero background...")
        if generate_image(client, HERO_BG_PROMPT, os.path.join(public_dir, "hero-bg.png")):
            print("  Saved public/hero-bg.png")
        else:
            print("  Hero bg failed.")
        time.sleep(5)
        for name, prompt in [("why-1", WHY_1_PROMPT), ("why-2", WHY_2_PROMPT), ("why-3", WHY_3_PROMPT)]:
            print(f"Generating {name}...")
            if generate_image(client, prompt, os.path.join(public_dir, f"{name}.png")):
                print(f"  Saved public/{name}.png")
            else:
                print(f"  {name} failed.")
            time.sleep(5)
        print("Generating for-investors...")
        if generate_image(client, FOR_INVESTORS_PROMPT, os.path.join(public_dir, "for-investors.png")):
            print("  Saved public/for-investors.png")
        else:
            print("  for-investors failed.")
        time.sleep(5)
        print("Generating for-artists...")
        if generate_image(client, FOR_ARTISTS_PROMPT, os.path.join(public_dir, "for-artists.png")):
            print("  Saved public/for-artists.png")
        else:
            print("  for-artists failed.")

    print("Done.")


if __name__ == "__main__":
    main()
