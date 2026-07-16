# Building a new Grace Advisory website — brief

Read this first. It's the orientation doc for whoever (likely another Claude agent) is going to build a replacement for the current `graceadvisory.com.au` using the content in this folder.

## Who is the client

**Grace Advisory** is an Australian boutique regulatory-compliance consultancy. Their pitch line is:

> *Governance | Risk | Compliance | Audit | AFSL*

They serve financial-services businesses that need:
- an **Australian Financial Services Licence (AFSL)** application or ongoing compliance support, and / or
- **Anti-Money Laundering & Counter-Terrorism Financing (AML/CTF)** compliance, especially with the **2026 Tranche 2** reforms that bring accountants, lawyers, real-estate agents, and crypto / virtual-asset service providers under AUSTRAC supervision for the first time.

They also do credit-licence (ACL) applications, life-insurance distribution compliance, graduate training, and general regulatory advisory.

The business operates from **52 Petrel Crescent, Worongary, QLD 4213**. Phone `0468 454 831`. Email `info@graceadvisory.com.au`. LinkedIn `linkedin.com/company/grace-advisory-au`. Full details: [`contact-info.md`](./contact-info.md).

## Site information architecture

This is the menu as it ships today (cleaned up — see `navigation/menus.md` for the raw structure):

```
Home
About
  ├─ Our Team
  └─ Our Partners
Services
AFSL                                       ← service family overview
  ├─ AFSL Application
  ├─ AFSL Compliance Policies Drafting
  ├─ AFSL Responsible Manager Nominations
  ├─ External AFSL Compliance Reviews
  └─ Ongoing AFSL Compliance Monitoring
AML/CTF                                    ← service family overview
  ├─ AML/CTF Program
  ├─ Ongoing AML/CTF Compliance
  ├─ AUSTRAC Registration
  └─ Independent Review of the AML/CTF Program
Graduate Training
Blog
Contact
```

(There is also a `Life Insurance` page that isn't currently in the nav — worth surfacing.)

The site is small: **20 pages + 3 blog posts**. Don't invent extra pages.

## What's real, what's placeholder

When you read the page files, you'll see content that varies in quality. Calibrate accordingly:

| Content | Status |
|---|---|
| Page headlines, sub-headlines, service descriptions | **Real** — written for Grace Advisory, use verbatim or lightly rewrite |
| SEO titles & meta descriptions (in frontmatter) | **Real** — written by their previous SEO consultant, generally good |
| AFSL service-family pages (overview + 5 sub-pages) | **Real** — substantive copy, the strongest content on the site |
| AML/CTF service-family pages | **Real** — current with 2026 reforms |
| Blog posts (3 of them) | **Real** — long-form articles, well-structured |
| Home page testimonials (Siona Jenila, Nikol Sizona, Lena Tony, "Lorem ipsum…") | **Placeholder** — drop them or replace with real testimonials from the client |
| Home page stats ("5k+ Completed", "15k+ Satisfied Customer", "80+ Experience Team", "15+ Winning Awards") | **Placeholder / fabricated** — the team is small; do NOT carry these forward |
| Contact page social icons (Facebook, YouTube, Instagram) | **Empty** — no real URLs were ever set; only LinkedIn is real |
| "Our Partners" page | Just a strip of two partner-logo JPGs (`2024/09/1.jpg` and `2024/09/2.jpg` in `media/attachments.json`). Confirm logos with client before re-using |
| Typos in body copy ("Knowiedge", "complance", "reguistory", "axpertise", "ahott-tem", "ano biot") | **Source typos** — fix when you copy through |

## Build approach (suggested)

1. **Don't try to recreate the WordPress / Elementor stack.** Pick a modern static or component-based stack — Astro, Next.js + Tailwind, SvelteKit, or whatever the user is most comfortable with. The content here is plain markdown precisely so you're not locked into WordPress.

2. **Brand**: navy `#1A3258` + gold `#FFB718`, sans-serif (Heebo or Inter), logo at `brand/logo.svg`. Full guide in [`brand/brand-guide.md`](./brand/brand-guide.md).

3. **Routes**: use the slugs in each page's frontmatter (`/about/`, `/afsl/`, `/afsl/afsl-application/`, etc.). The current site treats AFSL & AML sub-pages as top-level URLs; you can keep that or nest them under `/afsl/...` — your call, but update internal links accordingly.

4. **Home page** is the only one with a complex section structure. Read `pages/home-2.md` carefully — it has hero, intro, two featured services, why-choose-us trio, full services grid, regulated-sectors grid, contact CTA, stats. Drop the testimonials and the fabricated stats.

5. **Contact form** should post to `info@graceadvisory.com.au`. See `forms/contact-forms.json` for the original CF7 form definitions (Full Name, Phone, Email, Subject, Message + Submit).

6. **SEO**: the SEO titles / descriptions in frontmatter were written for Yoast on the old site. They're decent. Carry them through.

7. **What NOT to recreate**: WooCommerce, RevSlider, the parent `gtbus` theme's marketing pages, the placeholder reviews. The DB has tables for all of these — they're unused noise.

## What's NOT in this folder

- **Actual image files** — only paths/URLs to images on the live `graceadvisory.com.au/wp-content/uploads/…` directory. If you need them you'll need to download them from the live site (or extract from `theme/wp-content/uploads/` if it exists in the backup — check before assuming).
- **The old theme's PHP** — that's in `../theme/`; you don't need it unless you want to look up how some original layout worked.
- **Drafts, revisions, autosaves, attachments** — filtered out. Only the 20 published pages and 3 published posts are here.

## Provenance & freshness

Everything here came from `../db/localhost.sql`, `locgraceweb` database, generated 2026-04-30 from the live site. The latest content modification was 2026-04-29, so this snapshot is current as of late April 2026. Anything the client has changed on the live site since then will be missing.
