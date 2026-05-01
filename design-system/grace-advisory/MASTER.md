# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Grace Advisory
**Updated:** 2026-05-01
**Category:** Consulting Firm
**Voice:** Trust & Authority — Modern Royal Professional

---

## Global Rules

### Color Palette — Refreshed (deeper navy · richer gold · cooler ivory)

The palette was rebalanced May 2026 to reduce reliance on cream and push gold + deep navy as the dominant brand signals. Cream surfaces were reading "dull" against a navy/gold logo; the new tokens cool the page surface and let gold sing.

| Role | Hex | Tailwind Token | Usage |
|------|-----|----------------|-------|
| **Brand Navy (Primary)** | `#182148` | `navy-700` | Wordmark colour, headings on dark, primary buttons text, footer/banner gradient mid-stop |
| Navy Deep | `#0B1230` | `navy-900` | Banner gradient base, body text on light bg |
| Navy Black | `#060920` | `navy-950` | Hero gradient deep stop |
| Navy Soft | `#2A3460` | `navy-500` | Secondary surfaces, hover states on dark bg |
| **Brand Gold (CTA/Accent)** | `#D29A1A` | `gold-500` | Hexagon frame, CTAs, accent rules, badge backgrounds, key icons |
| Gold Deep | `#B58013` | `gold-600` | CTA hover, accent on light bg |
| Gold Bright | `#E8B947` | `gold-300` | Inline highlight in headlines, hex glyph fills, gradient stops |
| Gold Pale | `#F1CB6B` | `gold-200` | On-dark eyebrows, soft highlights |
| Ivory (Background) | `#FAFAF6` | `ivory-50` | Default page background — cooler, lighter than the old cream |
| Cloud (Surface) | `#F3F2EC` | `ivory-100` | Alt-section bg, cards on warm surfaces |
| Charcoal (Body Text) | `#0F1430` | `ink-900` | Body copy on light backgrounds |
| Slate (Muted Text) | `#404663` | `ink-600` | Secondary text, captions, labels |
| Hairline (Borders) | `#E1DDCF` | `line-200` | Dividers, input borders |

**Atmosphere classes (use on sections):**
- `.bg-warm-mesh` — light, gold-washed page surface for editorial sections
- `.bg-cream-mesh` — alternate light surface for tonal variation
- `.bg-ink-mesh` — full navy section base
- `.bg-navy-banner` — the canonical Hero / PageHero / CTABand background (deepest navy + strong gold sweep top-right + bottom gold rule)

**Forbidden:** Purple/pink gradients, neon, mid-tone navy (#1E2A56 — the old shade). The new navy is closer to `#0B1230 → #182148`.

### Typography

- **Display / Headings:** **EB Garamond** (400, 500, 600, 700) — UPRIGHT ONLY. Reserved for H1, H2, H3, page-hero titles, blockquotes.
- **Body / UI / leads / captions / numerals:** **Lato** (300, 400, 700, 900). Anything that is not a heading is Lato.
- **Eyebrows / labels / metadata:** Lato 700 in **uppercase + tracking-[0.18em–0.22em]**, in `gold-700` on light or `gold-300/200` on dark.

**❌ NO ITALIC ANYWHERE.** Italic was used previously as a "voice" device on leads, footnotes, sector cards, FAQ answers, etc. — it read as decorative blog/editorial and weakened the authority signal. All emphasis now uses:
- `text-[var(--color-gold-300)]` — colour highlight inside a heading
- `<strong>` — semantic emphasis in body copy
- Eyebrows (uppercase Lato bold) — for metadata
- Serif weight 600 — for sub-headings inside cards

**Type scale (mobile → desktop):**

| Token | Mobile | Desktop | Use |
|-------|--------|---------|-----|
| display | 38 / 1.04 | 76 / 1.04 | Hero H1 (serif, 500) |
| h1      | 35 / 1.06 | 60 / 1.06 | Page H1 (serif, 500) |
| h2      | 30 / 1.06 | 48 / 1.06 | Section H2 (serif, 500) |
| h3      | 22 / 1.2  | 26 / 1.2  | Sub-heading (serif, 600) |
| eyebrow | 12 / 1.4  | 13 / 1.4  | UPPER, tracking-[0.18em], gold-700 (light) / gold-200 (dark) |
| body-lg | 16 / 1.65 | 19 / 1.65 | Lead paragraphs |
| body    | 16 / 1.65 | 16 / 1.7  | Default copy (Lato 400) |
| body-sm | 14 / 1.55 | 14 / 1.55 | Captions, labels |

### Spacing — Tightened (May 2026)

The previous tokens used `clamp(72px, 10vw, 144px)` for every section, leaving visible "marketing splash" gaps between content. The new scale is denser without feeling cramped — appropriate for a content-rich consultancy site.

| Token / utility | Value | Usage |
|-----------------|-------|-------|
| `.section-pad-sm` | `clamp(40px, 5vw, 72px)` | Tight band sections (trust strips, marquees) |
| `.section-pad`    | `clamp(56px, 6.5vw, 96px)` | **Default** for content sections |
| `.section-pad-lg` | `clamp(72px, 8vw, 112px)` | Reserved for the longest editorial sections |
| Hero paddingBlock | `clamp(72px, 9vw, 116px) / clamp(60px, 7vw, 88px)` | Top / bottom |
| PageHero paddingBlock | `clamp(72px, 8.5vw, 112px) / clamp(40px, 5vw, 64px)` | Top / bottom |
| CTABand paddingBlock | `clamp(56px, 7vw, 96px)` | |
| SectionHead margin-bottom | `mb-9 md:mb-14` | (was `mb-12 md:mb-20`) |
| Card padding | `p-7 lg:p-8` for service cards, `p-8 lg:p-10` for pillar/tier cards | |

### Banners

All three banner components share the **`.bg-navy-banner`** class for consistency:

- **Hero (`components/hero.tsx`)** — full hero: deep navy gradient `#060920 → #111939 → #0B1230`, top-right gold radial sweep at 0.34 opacity, paper grain overlay at 25% opacity, parallax hex pattern in gold @ 0.16 opacity, **bottom gold rule** at 0.85 opacity for visual anchor.
- **PageHero (`components/page-hero.tsx`)** — compact version of Hero for inner pages. Same banner background. Heading + sans-serif lede + optional split image with gold corner triangle.
- **CTABand (`components/cta-band.tsx`)** — the footer-band navy banner. Same gradient + hex pattern, same gold rule. Strong gold sweep top-right.

Each banner uses `.banner-rule-top` + a manually placed bottom rule (~2px gold gradient) so the section is bookended by gold and feels intentional.

### Eyebrows + Roman numerals

The Roman numeral / "No. X" prefix on every section title was dropped from CTABand and de-emphasised across the site. The `.roman` utility was redefined from "italic serif" to **uppercase bold Lato in gold-700** so it reads as a label, not a decoration.

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.08)` | Cards, buttons |
| `--shadow-lg` | `0 14px 28px -10px rgba(11,18,48,0.18)` | Hover-lifted cards |
| `--shadow-xl` | `0 24px 60px -20px rgba(11,18,48,0.30)` | Featured / hero panels |

---

## Component Specs

### Buttons (unchanged in shape, refreshed in colour)

```css
.btn-primary {
  background: #D29A1A;       /* gold-500 */
  color: #0B1230;            /* navy-900 — gold needs deep text */
  padding: 14px 26px;
  border-radius: 2px;        /* tight, formal */
  font-family: Lato;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.btn-primary:hover { background: #B58013; box-shadow: 0 12px 32px -10px rgba(210,154,26,0.55); }

.btn-outline {
  background: transparent;
  color: #182148;
  border: 1.5px solid #182148;
}
.btn-outline:hover { background: #182148; color: #FAFAF6; }
```

### Cards

```css
.card {
  background: #FAFAF6;
  border: 1px solid #E1DDCF;
  border-top: 3px solid #D29A1A; /* gold accent rule */
  padding: 28px;
  border-radius: 4px;
}
.card:hover {
  box-shadow: 0 14px 32px -12px rgba(11,18,48,0.18);
  border-color: #B58013;
}
```

---

## Style Guidelines

**Style:** Trust & Authority — Modern Royal Professional

**Voice:** Confident, precise, regulator-aware. Short sentences. Avoid jargon-soup; explain in plain English then add the regulatory term. Never breathless or salesy.

**Best For:** Financial services, legal services, enterprise compliance.

**Key Effects:**
- Hexagon mark (lifted from logo) used as recurring motif: bullet glyphs, badge frames, divider ornaments, section anchors.
- Slow gold underline draw on hover for primary nav.
- Gold rule across the bottom of every dark banner.
- Card lift on hover via shadow only (no scale — avoids layout shift).

### Page Pattern

**Default section order (Home):**
1. **Hero** — `.bg-navy-banner` with strong gold sweep + credentials grid
2. **Marquee** — practice areas in uppercase Lato, gold hex separator
3. **Trust strip** — regulator references (ASIC · AUSTRAC · AFCA · FATF)
4. **Twin pillars** — AFSL / AML/CTF cards
5. **Service grid** — six-card grid with hex bullets
6. **Sectors served** — six chips
7. **Approach** — three principles + framed image + pull quote
8. **Process** — five-step horizontal timeline
9. **Insights** — three blog cards
10. **CTA Band** — `.bg-navy-banner` final call to action
11. **Footer** — navy-900 with gold rule top + gold-300 column headings

---

## Anti-Patterns (Do NOT Use)

- ❌ **Italic anywhere** (was the dominant anti-pattern; ALL italics removed May 2026)
- ❌ **Cream-heavy backgrounds** (we now alternate cooler ivory + navy banners)
- ❌ Generic content / no credentials / AI purple-pink gradients
- ❌ Emojis as icons — Use SVG icons (Heroicons, Lucide)
- ❌ Missing cursor:pointer on clickable elements
- ❌ Layout-shifting hovers (avoid scale transforms)
- ❌ Low contrast text (4.5:1 minimum)
- ❌ Instant state changes (always use 150–300ms transitions)
- ❌ Invisible focus states
- ❌ Section padding above `clamp(56px, 7vw, 96px)` unless content explicitly needs the breathing room

---

## Pre-Delivery Checklist

- [ ] No italic classes anywhere (`font-display italic`, `italic`, `style="font-style: italic"`)
- [ ] Headings use upright EB Garamond, body uses Lato
- [ ] All section paddings ≤ `clamp(56px, 7vw, 96px)` unless justified
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] Banners (Hero/PageHero/CTABand) all use `.bg-navy-banner`
- [ ] Eyebrows are uppercase Lato 700 (gold-700 on light, gold-300 on dark)
