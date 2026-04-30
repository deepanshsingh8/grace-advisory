# Grace Advisory — Brand Reference

## Logo

Place the official logo here as `grace-advisory-logo.png` (or preferably `.svg` if you can export one). The current brand sample I worked from showed:

- **Wordmark:** "GRACE ADVISORY" in a chunky condensed sans-serif, deep navy.
- **Tagline:** "GOVERNANCE | RISK | COMPLIANCE | AUDIT | AFSL" — same navy, thinner sans.
- **Mark:** A goldenrod hexagon framing a stylised letter **G** in deep navy, with the gold hex outline crossing through the inner aperture — a strong, ownable mark.

> **Action:** Drop the original logo file into this folder before the build phase. If you can supply an SVG export I'll use that for crisp scaling; otherwise I'll vectorise the hex mark from the PNG.

## Sampled Brand Palette

| Role | Hex | Notes |
|---|---|---|
| Brand Navy | `#1E2A56` | Wordmark + inner G |
| Navy Deep | `#141B3C` | For dark backgrounds, footer |
| Brand Gold | `#E6B637` | Hexagon outline |
| Gold Deep  | `#C99A1F` | CTA hover |
| Ivory      | `#FBF8F1` | Warm light background — complements gold |

> Hex values are eyeballed from the supplied screenshot. If the brand has formal Pantone/CMYK specs, drop them into this README and I'll align the design system to the canonical values.

## Hexagon Motif

The hex shape is the brand's strongest visual signature — we'll reuse it across the redesign:

- Bullet glyphs in service lists.
- Frames around KPI numbers.
- A subtle outlined hex pattern in hero backgrounds.
- Section divider ornaments.

I'll generate `hex-gold.svg`, `hex-navy.svg`, and `hex-pattern.svg` once the build starts.
