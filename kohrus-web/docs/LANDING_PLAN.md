# Kohrus Landing Page — Plan to “Slap and Sell”

Goal: First 3 seconds = clear value; first scroll = proof + desire; CTAs = no friction. Every section has a clear visual and a reason to keep scrolling or act.

---

## 1. Hero

- **Headline:** “The Stock Market for Music” (keep) — add one line under: “Own a piece of the songs you love. Earn from streams. Trade like a pro.”
- **Subtext:** Short, scannable: “From ₹50. Monthly royalty dividends. Liquid secondary market.”
- **CTAs:** Primary = Start Investing | Secondary = I’m an Artist | Tertiary = Tryout (keep).
- **Stats:** 2,500+ Investors • 150+ Artists • ₹12Cr+ Deployed — add subtle “Live” or “Growing” (e.g. small dot).
- **Visual:** Hero card (live deal) already has `hero-card.png`. Optional: very subtle `hero-bg.png` (texture or abstract shape) behind hero text so the left side isn’t flat.
- **Image:** `hero-card.png` ✓ | Optional: `hero-bg.png`.

---

## 2. Social Proof Strip

- **Current:** Text-only strip (Trusted by… 2,500+ …).
- **Upgrade:** Same stats, add “Verified artists • UPI & secure payments” for trust. Optional: small “As featured in” logos or one strip illustration (`social-proof-strip.png`) — can be a warm, abstract “crowd of investors/artists” linocut style.
- **Image:** Optional `social-proof-strip.png` (wide, short) or keep text-only and add trust line.

---

## 3. How It Works

- **Current:** 3 steps with step images, title, description.
- **Upgrade:** Add visual connector (line or dots) between steps; eyebrow “HOW IT WORKS”; slightly stronger step titles; keep same 3 step images.
- **Images:** `how-step-1.png`, `how-step-2.png`, `how-step-3.png` ✓.

---

## 4. Featured Assets

- **Current:** 4 cards, gradient overlays, price/change.
- **Upgrade:** Section eyebrow “FEATURED ASSETS”; subtitle “Live from the market”; “View All” CTA. Optional: thin “ticker” bar above or below (“Monsoon Nights +12% · Urban Pulse +8% …”) for motion. Keep card images.
- **Images:** `featured-1.png` … `featured-4.png` ✓.

---

## 5. Why Kohrus (NEW)

- **Purpose:** Answer “Why should I care?” in 3 bullets.
- **Content:**  
  1. **Fractional ownership** — “Start with ₹50. Own a slice of real royalty streams, not a lock-in.”  
  2. **Passive income** — “Earn monthly dividends as songs get streamed. Set it and forget it.”  
  3. **Liquid market** — “Trade your shares 24/7. No lock-in; exit when you want.”
- **Visual:** 3 cards or 3 columns; each with a small illustration or icon. Same warm palette.
- **Images:** `why-1.png` (fractional), `why-2.png` (passive), `why-3.png` (liquid) — small, square or 4:3, linocut style.

---

## 6. Who It’s For (NEW)

- **Purpose:** Split audience (investors vs artists) so both see themselves.
- **Layout:** Two columns (or two cards): “For Investors” | “For Artists.”
- **Investors:** “Discover songs, invest from ₹50, earn royalties, trade anytime.” Bullets: Browse verified artists • Invest via UPI • Monthly dividends • Secondary market.
- **Artists:** “Raise capital from your fans. Keep ownership. Get funded.” Bullets: List your music • Set your terms • Get funded by fans • Retain rights.
- **Visual:** One illustration per column (conceptual: wallet/portfolio vs microphone/vinyl).
- **Images:** `for-investors.png`, `for-artists.png` (medium, same style).

---

## 7. Testimonials (NEW)

- **Purpose:** Human proof without overdoing it.
- **Content:** 2 quotes (1 investor, 1 artist). Short, specific. Name + role (e.g. “Ravi, Investor” / “Priya, Indie Artist”).
- **Visual:** Avatar = initial in a circle (or small generated portrait later). Card style with subtle border or bg.
- **Images:** Optional later: `testimonial-1.png`, `testimonial-2.png` (avatar style). For v1, initials only.

---

## 8. CTA Banner

- **Current:** “Ready to invest in the music you love?” + Create Free Account / Learn More; `cta-banner.png` with overlay.
- **Upgrade:** Add one line under headline: “Join 2,500+ investors. Start with ₹50.” Ensure overlay keeps text readable; buttons stand out.
- **Image:** `cta-banner.png` ✓.

---

## 9. Footer

- **Current:** 4 columns (kohrus, Platform, Company, Legal).
- **Upgrade:** Same structure; add one line under tagline: “Invest in music. Earn from streams.” Optional: “Get updates” email placeholder (no backend required for now). Ensure link hovers work on dark bg.

---

## Image Checklist (script + public/)

| Asset | Purpose | Status |
|-------|--------|--------|
| hero-card.png | Hero live-deal card | ✓ |
| hero-bg.png | Optional hero background texture | Add to script |
| featured-1..4.png | Featured asset cards | ✓ |
| how-step-1..3.png | How It Works steps | ✓ |
| why-1.png | Why: Fractional | Add to script |
| why-2.png | Why: Passive income | Add to script |
| why-3.png | Why: Liquid market | Add to script |
| for-investors.png | Who: Investors column | Add to script |
| for-artists.png | Who: Artists column | Add to script |
| cta-banner.png | Bottom CTA background | ✓ |
| social-proof-strip.png | Optional strip visual | Optional |

---

## Copy and Micro-details

- **Eyebrows:** Small caps, primary color, letter-spacing. E.g. “HOW IT WORKS”, “FEATURED ASSETS”, “WHY KOHRUS”, “WHO IT’S FOR”.
- **Headings:** One clear H1 (hero); H2 per section; consistent size scale (e.g. 2xl–4xl).
- **Body:** Short paragraphs; max 2 lines for card descriptions.
- **Trust:** “Verified artists • Secure payments • Transparent terms” in strip or above CTA.
- **Nav:** Add “How it works” anchor to nav if not present.

---

## Implementation Order

1. **Page structure + copy:** Add Why Kohrus, Who It’s For, Testimonials; refine hero/social proof/CTA/footer copy.
2. **CSS:** Section spacing, step connector, card hovers, testimonial cards.
3. **Script:** Add prompts and generation for hero-bg, why-1/2/3, for-investors, for-artists.
4. **Run script** for new images; wire into page.
5. **Final pass:** Typography, contrast, mobile spacing, nav link.
