# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Grace Advisory
**Generated:** 2026-04-30 13:07:15
**Category:** Consulting Firm

---

## Global Rules

### Color Palette — Brand-Anchored

Sampled from the Grace Advisory logo (deep indigo-navy "G" wordmark + warm goldenrod hexagon frame). Logo art lives at `brand/grace-advisory-logo.png` (drop the file there before building).

| Role | Hex | Tailwind Token | Usage |
|------|-----|----------------|-------|
| **Brand Navy (Primary)** | `#1E2A56` | `navy-700` | Wordmark color, headings, primary buttons, footer bg, hero base |
| Navy Deep | `#141B3C` | `navy-900` | Footer background, dark hero overlay, body text on light bg |
| Navy Soft | `#2E3A6B` | `navy-600` | Secondary surfaces, hover states on dark bg |
| **Brand Gold (CTA/Accent)** | `#E6B637` | `gold-500` | Hexagon frame, CTAs, accent rules, badge backgrounds, key icons |
| Gold Deep | `#C99A1F` | `gold-600` | CTA hover, deep accent (icons on light bg) |
| Gold Soft | `#F4D27A` | `gold-300` | Subtle highlights, gradient stops, hover wash |
| Ivory (Background) | `#FBF8F1` | `ivory-50` | Section backgrounds — warmer than pure slate, complements gold |
| Cloud (Surface) | `#F4F1E8` | `ivory-100` | Cards, alt-section bg |
| Charcoal (Body Text) | `#1A1F33` | `ink-900` | Body copy on light backgrounds |
| Slate (Muted Text) | `#4A5170` | `ink-600` | Secondary text, captions, labels |
| Hairline (Borders) | `#E5E0CF` | `line-200` | Dividers, input borders, subtle frames |

**Color Notes:** Brand-true navy + goldenrod sampled from logo. Warmer and richer than generic slate/yellow-600. The ivory background (vs pure slate-50) is intentional — it gives the gold room to breathe and reads "royal" rather than "tech-startup."

**Gradients permitted:**
- `bg-gradient-to-b from-navy-900 via-navy-700 to-navy-900` (hero)
- `bg-gradient-to-r from-gold-500 to-gold-300` (accent rules, hexagon glows)
- Subtle radial gold-300/10 wash behind hero copy

**Forbidden:** Purple/pink gradients, neon, slate-only palette (loses the brand warmth).

### Typography

- **Display / Headings:** **EB Garamond** (400, 500, 600, 700) — refined serif for H1–H3; carries the "royal/authoritative" register without feeling stuffy.
- **Body / UI:** **Lato** (300, 400, 700) — clean humanist sans, very legible at small sizes.
- **Eyebrow / Wordmark accents:** Use Lato 700 in **uppercase + tracking-[0.2em]** — mirrors the logo wordmark's chunky condensed feel without licensing a custom face. (If we later license Oswald or a similar condensed sans for hero display, the system can absorb it as a third family.)

**Google Fonts CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');
```

**Tailwind config:**
```js
fontFamily: {
  serif: ['"EB Garamond"', 'serif'],
  sans:  ['Lato', 'system-ui', 'sans-serif'],
}
```

**Type scale (mobile → desktop):**

| Token | Mobile | Desktop | Use |
|-------|--------|---------|-----|
| display | 40 / 1.05 | 72 / 1.0  | Hero H1 (serif, 500) |
| h1      | 32 / 1.1  | 56 / 1.05 | Page H1 (serif, 500) |
| h2      | 26 / 1.15 | 40 / 1.1  | Section heading (serif, 500) |
| h3      | 22 / 1.2  | 28 / 1.2  | Sub-heading (serif, 600) |
| eyebrow | 12 / 1.4  | 13 / 1.4  | UPPER, tracking-[0.2em], gold-500 |
| body-lg | 18 / 1.6  | 19 / 1.65 | Lead paragraphs |
| body    | 16 / 1.65 | 16 / 1.7  | Default copy |
| body-sm | 14 / 1.55 | 14 / 1.55 | Captions, labels |

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary — gold, filled. Use for "Book a consultation" everywhere. */
.btn-primary {
  background: #E6B637;       /* gold-500 */
  color: #141B3C;            /* navy-900 — gold needs dark text for contrast */
  padding: 14px 28px;
  border-radius: 6px;        /* slightly tighter radius reads more "professional" than 12px */
  font-family: Lato, sans-serif;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: background 200ms ease, transform 200ms ease, box-shadow 200ms ease;
  cursor: pointer;
}
.btn-primary:hover { background: #C99A1F; box-shadow: 0 6px 18px rgba(230, 182, 55, 0.35); }
.btn-primary:focus-visible { outline: 2px solid #1E2A56; outline-offset: 3px; }

/* Secondary — navy outline on light bg */
.btn-secondary {
  background: transparent;
  color: #1E2A56;            /* navy-700 */
  border: 1.5px solid #1E2A56;
  padding: 12.5px 26.5px;
  border-radius: 6px;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: all 200ms ease;
  cursor: pointer;
}
.btn-secondary:hover { background: #1E2A56; color: #FBF8F1; }

/* Ghost — for tertiary links (e.g. "Read more →") */
.btn-ghost {
  color: #1E2A56;
  font-weight: 600;
  border-bottom: 1.5px solid transparent;
  transition: border-color 200ms ease;
}
.btn-ghost:hover { border-color: #E6B637; }
```

### Cards

```css
/* Service / sector card — light surface */
.card {
  background: #FBF8F1;                   /* ivory-50 */
  border: 1px solid #E5E0CF;             /* line-200 hairline */
  border-top: 3px solid #E6B637;         /* gold accent rule on top */
  border-radius: 4px;                    /* tight, formal radius */
  padding: 28px;
  box-shadow: 0 1px 2px rgba(20, 27, 60, 0.04);
  transition: box-shadow 220ms ease, border-color 220ms ease;
  cursor: pointer;
}
.card:hover {
  box-shadow: 0 14px 32px -12px rgba(20, 27, 60, 0.18);
  border-color: #C99A1F;
}

/* Pillar card — used for AFSL vs AML twin pillars on home */
.card-pillar {
  background: linear-gradient(180deg, #FBF8F1 0%, #F4F1E8 100%);
  border: 1px solid #E5E0CF;
  padding: 40px;
  border-radius: 4px;
  position: relative;
}
.card-pillar::before {                    /* hexagon corner mark */
  content: ""; position: absolute; top: -1px; right: -1px;
  width: 56px; height: 56px;
  background: url("/brand/hex-gold.svg") no-repeat center / contain;
  opacity: 0.9;
}
```

### Inputs

```css
.input {
  padding: 14px 16px;
  background: #FBF8F1;
  border: 1px solid #E5E0CF;
  border-radius: 4px;
  font-family: Lato, sans-serif;
  font-size: 16px;
  color: #1A1F33;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}
.input:focus {
  border-color: #1E2A56;
  outline: none;
  box-shadow: 0 0 0 3px rgba(230, 182, 55, 0.25);  /* gold focus ring */
}
.input::placeholder { color: #4A5170; opacity: 0.7; }
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Trust & Authority — Modern Royal Professional

**Voice:** Confident, precise, regulator-aware. Short sentences. Avoid jargon-soup; explain in plain English then add the regulatory term. Never breathless or salesy.

**Keywords:** Certificates/badges displayed, expert credentials, regulatory references (RG 105, AUSTRAC, AML/CTF Act), sector chips, sober metrics.

**Best For:** Financial services, legal services, enterprise compliance.

**Key Effects:**
- Hexagon mark (lifted from logo) used as a recurring motif: bullet glyphs, badge frames, divider ornaments, section anchors.
- Slow gold underline draw on hover for primary nav.
- Metric counter "tick-up" on scroll into view (respect `prefers-reduced-motion`).
- Soft gold glow behind hero headline.
- Card lift on hover via shadow only (no scale — avoids layout shift).

### Hexagon Motif (Brand Signature)

Lift directly from the logo. Use as:
- Bullet glyphs in service lists (small filled gold hex, 8px).
- Frames around small KPI numbers and certifications.
- A subtle outlined hex pattern (5–8% opacity, navy on ivory) as a hero background texture.
- Section dividers: a single centred hex with a hairline rule extending each side.

SVG snippet (24×24 viewBox, regular hex):
```svg
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
```

### Page Pattern

**Pattern Name:** Trust & Authority — extended for a multi-service consultancy

**Default section order (Home):**
1. Hero with brand-anchored navy gradient + gold glow + primary CTA "Book a consultation"
2. Trust strip (regulators referenced: ASIC · AUSTRAC · AFCA · FATF) — sober logo/word row, no fake client logos
3. Twin pillars: AFSL Compliance | AML/CTF Compliance — two large cards, each links to parent service page
4. Six-service grid ("What We Do to Service Your Best") with hex bullet
5. Sectors served (six chips with the existing site's sector copy) — Phase 1 & 2 reporting entities
6. Process / Why Grace (3 pillars: Deep Expertise · End-to-End · Boutique Trust)
7. Latest insights (3 blog cards)
8. Final CTA band (navy, gold CTA): "Speak to a compliance specialist"
9. Footer (navy-900, gold accent rule, hex motif)

**Section order (service pages):** Page hero → Overview paragraph → Sub-sections (deep dive lists) → Adjacent services → CTA band.

**CTA hierarchy:**
- Primary CTA: filled gold button with navy text — "Book a consultation"
- Secondary CTA: navy outline / ghost button — "Read our approach"
- Phone link visible in header on desktop, sticky bottom-bar on mobile.

---

## Anti-Patterns (Do NOT Use)

- ❌ Generic content
- ❌ No credentials
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
