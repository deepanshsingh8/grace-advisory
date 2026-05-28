# Grace Advisory — content bundle

This folder is a clean, structured extraction of the **Grace Advisory** website (https://graceadvisory.com.au) from a WordPress backup found in `../db/localhost.sql` (database `locgraceweb`, table prefix `wph9_`).

**Use this folder** as the source of truth when rebuilding the site. It contains every page of copy, the navigation tree, contact details, the brand guide, the media catalog, and the SEO metadata that was on the live site as of **2026-04-29** (the most recent timestamp in the dump).

Read [`BRIEF.md`](./BRIEF.md) first — it's the orientation document for whoever (or whatever) is building the new site.

## Folder layout

```
grace-advisory-content/
├── README.md                  ← you are here
├── BRIEF.md                   ← start here: site overview, IA, what's real vs placeholder
├── contact-info.md            ← canonical address / phone / email / socials
│
├── brand/
│   ├── brand-guide.md         ← colors, fonts, tagline, logo usage
│   └── logo.svg               ← master logo (from the theme)
│
├── pages/                     ← all 20 published WordPress pages, as markdown
│   ├── home-2.md              ← the home page (slug is "home-2" because it replaced an older "home")
│   ├── about.md
│   ├── contact.md
│   ├── service.md             ← the top-level "Services" overview page
│   ├── our-team.md
│   ├── our-partners.md        ← mostly a partner-logo strip; little body copy
│   ├── graduate-training.md
│   ├── life-insurance.md
│   ├── blog.md                ← the blog index landing
│   ├── afsl/                  ← grouped by service family (logical, not WP-parent)
│   │   ├── afsl.md            ← AFSL overview page
│   │   ├── afsl-application.md
│   │   ├── afsl-compliance-policies-drafting.md
│   │   ├── afsl-responsible-manager-nominations.md
│   │   ├── external-afsl-compliance-reviews.md
│   │   └── ongoing-afsl-compliance-monitoring.md
│   └── aml-ctf/
│       ├── aml-ctf.md         ← AML/CTF overview
│       ├── aml-ctf-program.md
│       ├── ongoing-aml-ctf-compliance.md
│       ├── austrac-registration.md
│       └── independent-review-of-the-aml-ctf-program.md
│
├── blog/                      ← the 3 published blog posts (long-form articles)
│   ├── aml-ctf-reforms-2026-australian-business-guide.md
│   ├── australian-financial-services-licence-afsl-application-guide.md
│   └── tranche-2-aml-ctf-reforms-australia-2026.md
│
├── navigation/
│   ├── menus.md               ← readable view of the WP menus (use this for site nav IA)
│   └── menus.json             ← raw menu tree with object IDs & resolved URLs
│
├── elementor-templates/       ← reusable templates (header, footer, kit) extracted from Elementor library
│
├── site-settings/
│   ├── site-identity.json     ← siteurl, blogname, blogdescription, home-page-id, permalinks, etc.
│   └── theme-options-raw.json ← raw gtbus_theme_options (PHP-serialized strings — see notes below)
│
├── media/
│   ├── attachments.json       ← every media item (filename, full URL, alt text, caption, mime, date)
│   └── brand-candidates.json  ← subset filtered to likely logo / hero / brand assets
│
├── forms/
│   └── contact-forms.json     ← Contact Form 7 form markup + mail templates
│
└── users/
    └── users.json             ← WP user accounts (admin/editor) — names, emails, bios
```

## Page-file format

Each `pages/*.md` and `blog/*.md` file starts with YAML frontmatter:

```yaml
---
id: 808
title: "Home"
slug: home-2
post_type: page
status: publish
date: 2024-01-31 04:32:35
modified: 2026-03-07 07:24:21
seo_title: "AFSL Compliance & AML Compliance Consulting | Australia"
seo_description: "AFSL compliance services and AML compliance consulting…"
focus_keyword: "afsl compliance"
original_url: https://graceadvisory.com.au/home-2/
group: afsl       # only set on service-family pages
---
```

…then two sections:

1. **`## Content blocks (extracted from Elementor)`** — the structured copy block-by-block. Headings are `###`, subtitles are `_italic_`, buttons are `[Button: text]`, list items are `- `. This is the cleanest version of the copy.
2. **`## Raw post_content (HTML stripped, for reference)`** — the original `post_content` field after a basic HTML strip. Use as a fallback when something looks off in the Elementor extraction.

## Known quirks

- The home page slug is `home-2` (not `home`) because an older "home" page exists in the DB. The site has it configured as the static front page (see `site-settings/site-identity.json` → `page_on_front`).
- Testimonials and stats on the home page are **placeholder** ("Lorem ipsum…", "5k+", "Siona Jenila", "Nikol Sizona", etc.). Treat them as needing real content from the client.
- Several pages contain visible **typos** in the source ("Knowiedge", "complance", "reguistory", "ahott-tem", "axpertise") — quote them through review unless told otherwise.
- The `theme-options-raw.json` values are PHP-serialized strings (you'll see strings like `a:28:{s:16:"preloader_enable";…}`). Parse with a php-serialize library or just grep for what you need. The key brand values are already extracted into `brand/brand-guide.md`.
- `admin_email` in `site-identity.json` is `info@best-web-host.in` — that's the previous webhost's address, not Grace Advisory. The real client email is `info@graceadvisory.com.au` (see `contact-info.md`).
- The custom theme is called `graceadvisory`; it's a child of (or fork of) a commercial theme called `gtbus`. That's why some leftover defaults (e.g. the `gtbus` string in footer copyright, the unused `theme-color-2`/`theme-color-3`) still appear in the DB.

## Provenance

- Source dump: `../db/localhost.sql` (~361 MB phpMyAdmin export, generated 2026-04-30)
- Canonical database within the dump: `locgraceweb` (also confirmed by `theme/wp-config.php`)
- Other Grace databases in the same dump (`GraceWeb`, `NewGraceWeb`) are older snapshots — `locgraceweb` was preferred because it has the most recent content (latest modified date `2026-04-29`) and is what the live `wp-config.php` points to.
