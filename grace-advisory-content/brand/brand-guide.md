# Grace Advisory — brand guide

Extracted from the WordPress theme files and the `gtbus_theme_options` customizer record in the DB. Use this as the visual language for the new site.

## Logo

- Master file: [`logo.svg`](./logo.svg) (5.3 KB) — copied from `theme/wp-content/themes/graceadvisory/assets/img/logo.svg`
- The live site also serves a raster logo: `https://graceadvisory.com.au/wp-content/uploads/2024/09/logo.jpg` (886 × 247 jpg) — referenced by customizer key `gtbus_logo`
- Recommendation: use the SVG version going forward; rasterize from it for social cards only

## Colour palette

| Role | Hex | Notes |
|---|---|---|
| Primary navy | `#1A3258` | Headings, primary text, nav background. Appears throughout `style.css` |
| Header dark navy | `#1B305B` | Header top bar variant |
| Brand gold / accent | `#FFB718` | Buttons, hovers, CTAs, icon accents. Also set as `theme-color-1` in customizer (`#ffb718`) |
| Gradient gold (deep → bright) | `#B17900` → `#FEB617` | Used for gradient icon backgrounds & text gradients (style.css L16–20) |
| Form / surface off-white | `#FBF9F4` | Contact form container background |
| Body text | `#000000` | Default body type colour seen across Elementor pages |

Two other colors (`theme-color-2 = #4c52e0`, `theme-color-3 = #FA3AD0`) appear in the customizer but are unmodified defaults from the gtbus theme — not actually Grace Advisory brand colours. Ignore them.

## Typography

- **Heebo** — primary body & heading font (set as `body-typography` and `heading-gl-typo` in customizer)
- **Inter** — used in Elementor page settings as the page body font
- **Urbanist**, **Kanit**, **Fraunces** — additional Google Fonts loaded by `functions.php` for occasional headings / display use

The DB shows Heebo + Inter doing most of the heavy lifting. Heebo for body, sans-serif headings. Use Inter as a near-equivalent if Heebo is unavailable.

## Tagline / positioning

- **Brand name**: Grace Advisory
- **Tagline**: `Governance | Risk | Compliance | Audit | AFSL`
- **One-liner**: *AFSL and AML/CTF Compliance Consulting*
- **Long positioning statement** (verbatim from home page):
  > We pride ourselves in providing our clients with tailored regulatory compliance solutions that help solve problems while bearing your commercial interests in mind.
  >
  > We are committed, through our words and actions, to ethical conduct and always putting clients' interest first. We aim to foster long-lasting client relationships and partnerships on the basis of mutual respect and trust.

## Footer copyright

Current value stored in customizer: `© 2024 gtbus - Grace Advisory. All rights reserved.`
Suggest updating to: `© [year] Grace Advisory. All rights reserved.` (the "gtbus" string is a leftover from the parent theme name).
