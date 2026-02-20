"""
Generate landing page card images in Kohrus style (authentic, handmade, warm palette).
Output: kohrus-web/public/ — hero-card.png, featured-1.png … featured-4.png.
Requires: pip install google-genai Pillow
"""
import os

api_key = (
    os.environ.get("GOOGLE_API_KEY")
    or os.environ.get("GEMINI_API_KEY")
    or "AIzaSyA5Sd-TCLhxPW3N-wKEFTYT_RxpbxTwM78"
)

# Style applied only to card images (see docs/LANDING_IMAGE_STYLE.md)
STYLE = (
    "Authentic handmade linocut or paper collage style. "
    "Warm palette: cream, terracotta, ochre, deep indigo, warm neutrals. "
    "Subtle paper texture, no glossy or tech look. "
    "Music-themed but abstract: instruments, waveforms, vinyl, or notation. "
)

def generate(client, prompt: str, path: str) -> bool:
    from google.genai import types
    response = client.models.generate_content(
        model="gemini-2.5-flash-image",
        contents=[prompt],
        config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"]),
    )
    for candidate in response.candidates or []:
        for part in (candidate.content.parts or []):
            if part.inline_data and getattr(part.inline_data, "data", None):
                with open(path, "wb") as f:
                    f.write(part.inline_data.data)
                return True
    return False

def main():
    from google import genai
    script_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(script_dir, "..", "public")
    os.makedirs(public_dir, exist_ok=True)

    client = genai.Client(api_key=api_key)

    hero_prompt = (
        "One featured music asset artwork for a hero card. "
        + STYLE
        + " Wide horizontal composition, calm and inviting."
    )
    hero_path = os.path.join(public_dir, "hero-card.png")
    print("Generating hero card image...")
    if generate(client, hero_prompt, hero_path):
        print(f"Saved: {hero_path}")
    else:
        print("Hero image generation failed.")

    for i in range(1, 5):
        prompt = (
            f"Music asset artwork variation {i}, for a small card. "
            + STYLE
            + " Same warm handmade look, different abstract music motif."
        )
        path = os.path.join(public_dir, f"featured-{i}.png")
        print(f"Generating featured asset {i}...")
        if generate(client, prompt, path):
            print(f"Saved: {path}")
        else:
            print(f"Featured {i} generation failed.")

    print("Done.")

if __name__ == "__main__":
    main()
