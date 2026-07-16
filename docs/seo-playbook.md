# Grace Advisory — SEO Playbook

Goal: make Grace Advisory visible when Australian firms search for AFSL and
AML/CTF compliance help. The good news: this is a **niche, low-competition,
high-intent** space. Nobody searches "AFSL application consultant" casually —
every searcher is a potential client. A modest, consistent effort here
outperforms big-budget SEO in crowded markets.

---

## Where we already stand (done — don't redo)

The site's technical SEO foundation is already strong:

- ✅ Unique title + meta description on all 22 pages, en-AU locale
- ✅ Structured data (JSON-LD): Organization / ProfessionalService / LegalService
  with address, ABN, phone, service areas (`lib/seo.ts`)
- ✅ `sitemap.xml` (22 URLs) and `robots.txt` referencing it
- ✅ Open Graph / Twitter cards with branded OG image
- ✅ Server-rendered pages (Next.js) — fully crawlable, fast
- ✅ 3 blog posts targeting strong long-tail queries (Tranche 2, AFSL
  application guide, AML/CTF reforms 2026)
- ✅ A `google-site-verification` TXT record already exists in DNS — Google
  domain verification is (at least partly) done

What's missing is mostly **off-site**: telling Google the site exists, local
presence, ongoing content, and links from other sites.

---

## Phase 1 — This week (one-off setup, ~2 hours total)

### 1.1 Fix the canonical domain mismatch ⚠️ (only real technical defect)

The site serves at `https://www.graceadvisory.com.au`, but every page's
canonical tag, the sitemap, and the structured data all say
`https://graceadvisory.com.au` (no www) — which redirects back to www.
Google is effectively told "the real page is elsewhere" on every page.

**Fix (one toggle, no code):** Vercel → project → **Settings → Domains** →
set `graceadvisory.com.au` as the **primary** domain, with
`www.graceadvisory.com.au` redirecting to it. After the change,
`curl -I https://graceadvisory.com.au` should return `200` (not a 308) and
`https://www.…` should 308 to the apex.

### 1.2 Google Search Console

This is Google's own dashboard: what queries you rank for, which pages are
indexed, crawl problems. Free, and the single most important SEO tool.

1. <https://search.google.com/search-console> → Add property →
   **Domain** property → `graceadvisory.com.au`.
2. It verifies via the DNS TXT record — one already exists, so this may pass
   instantly (if not, add the new TXT in Cloudflare).
3. **Sitemaps** (left menu) → submit `https://graceadvisory.com.au/sitemap.xml`.
4. Use **URL Inspection** on the homepage and the 2–3 most important service
   pages (`/afsl/application`, `/aml-ctf/program`) → "Request indexing".

Expect impressions data to appear within 1–2 weeks.

### 1.3 Google Business Profile (local SEO — high impact)

Searches like "compliance consultant Brisbane" or "AFSL consultant near me"
are won by the map pack, not by web pages.

1. <https://business.google.com> → create profile for **Grace Advisory**,
   category "Business management consultant" (secondary: "Financial consultant").
2. Address: 52 Petrel Crescent, Worongary QLD 4213 (or service-area business if
   you don't want the address public). Phone: 0468 454 831.
   Website: `https://graceadvisory.com.au`.
3. Verify (postcard/phone/video, whatever Google offers).
4. Fill it completely: hours, services list (mirror the site's service names),
   logo + a few photos, and a description reusing the site's meta description.
5. Ask 2–3 past clients for a Google review — reviews are the #1 local
   ranking factor, and for a professional-services firm even 3–5 reviews
   is transformative.

### 1.4 Bing Webmaster Tools (10 minutes, often forgotten)

<https://www.bing.com/webmasters> → "Import from Google Search Console" (one
click after 1.2). Bing powers ChatGPT/Copilot web answers — increasingly how
compliance officers research vendors.

### 1.5 Analytics (currently none installed)

You can't improve what you can't measure. Easiest path on this stack:
**Vercel Web Analytics** (project → Analytics tab → enable, then
`npm i @vercel/analytics` + one component in `app/layout.tsx` — a 5-minute
code change I can make). Add GA4 later only if you need campaign/ads tracking.

### 1.6 LinkedIn company page

The JSON-LD already claims `linkedin.com/company/grace-advisory` — make sure
that page actually exists, links back to the website, and lists the same
services. For B2B compliance work, LinkedIn will likely drive more qualified
traffic than Google for the first six months.

---

## Phase 2 — First month (authority & citations)

Google trusts sites that other sites mention. For a boutique consultancy the
targets are directories and professional bodies, not "link building" schemes:

- **Business directories:** Yellow Pages AU, TrueLocal, Yelp AU, Hotfrog,
  Brisbane local directories. Keep **name / address / phone identical
  everywhere** (consistency itself is a ranking signal).
- **Professional/industry listings:** any association memberships (e.g.
  compliance or governance institutes), AFSL/fintech vendor directories,
  Financial Standard / Adviser Ratings style directories where applicable.
- **Partner links:** the `/our-partners` page names partners — ask each for a
  reciprocal "our partners" link. These are the most natural links available.
- **University/graduate links:** the Graduate Training page is link-bait for
  university careers pages — tell the relevant faculties it exists.

---

## Phase 3 — Ongoing content engine (the compounding part)

Service pages win "hire someone" searches; blog posts win the *research*
searches that happen weeks earlier. The existing 3 posts target exactly the
right queries — continue at **1–2 posts/month**. Realistic queue, in priority
order (all real questions your clients ask):

1. "How much does an AFSL application cost in 2026?" (cost queries convert best)
2. "How long does it take to get an AFSL? Realistic timeline"
3. "Who needs to register with AUSTRAC? (Tranche 2 checklist)"
4. "What does a Responsible Manager actually do? RG 105 explained"
5. "AML/CTF program: Part A vs Part B, explained simply"
6. "Do accountants/lawyers/real-estate agents need an AML/CTF program?"
   (one post per Tranche 2 profession — each is its own search market)
7. "Common reasons ASIC refuses AFSL applications (and how to avoid them)"
8. "Independent AML/CTF review: what to expect, what it costs"
9. "AFSL vs Corporate Authorised Representative: which do you need?"
10. "Preparing for an AUSTRAC audit: 90-day checklist"

Format rules that matter for ranking:
- Answer the title's question in the first paragraph (that wins the
  AI-overview / featured-snippet slot), then go deep.
- 1,200–2,000 words, real detail — thin content is ignored.
- Every post ends with a CTA linking to the matching service page, and every
  service page links to related posts (internal links move rankings).
- Update the two time-sensitive posts (Tranche 2, 2026 reforms) whenever
  AUSTRAC/ASIC guidance changes — freshness on regulatory content is a
  genuine edge over competitors' stale pages.
- When a post is published, add it to `public/sitemap.xml` (or ask me to
  convert the sitemap to auto-generate — see maintenance below).

---

## Measurement — monthly 15-minute review

In Search Console → Performance:
- **Impressions trending up?** (visibility growing — expect this from month 1–2)
- **Which queries?** Write the next blog post about queries you see but don't
  rank top-5 for yet.
- **Clicks on service pages?** These are pre-qualified leads.
- Pages → Indexing: confirm all 22+ pages stay indexed.

Realistic expectations: meaningful impressions in 4–8 weeks, first-page
rankings for long-tail queries in 3–4 months, steady inbound enquiries from
search in 6–12 months. Niche + consistency wins here; there is no shortcut.

---

## Code maintenance items (I can do these on request)

- Enable Vercel Web Analytics (see 1.5).
- Convert static `public/sitemap.xml` to `app/sitemap.ts` so new blog posts
  and lastmod dates update automatically at build time (current lastmod is
  frozen at 2026-04-30).
- Add `Article` JSON-LD to blog posts and `FAQPage` markup to the pricing FAQ
  (eligibility for rich results).
- Add a Search Console HTML-tag verification via Next metadata if DNS
  verification gives trouble.
