# Grace Advisory

Next.js 15 + TypeScript + Tailwind v4 marketing site.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run build
```

## Australia + New Zealand — one codebase, two sites

The same code builds both **graceadvisory.com.au** and **graceadvisory.co.nz**.
The design is identical; only the content changes (regulators, services,
pricing currency, articles, logo tagline). One environment variable decides
which site is built:

| Site | `NEXT_PUBLIC_SITE_REGION` |
|---|---|
| graceadvisory.com.au | unset (or `au`) |
| graceadvisory.co.nz | `nz` |

```bash
npm run dev:nz       # NZ site on http://localhost:3001
npm run build:nz     # production build of the NZ site
```

**Where the content lives**

- `lib/region.ts` — the switch (`REGION`, `byRegion({ au, nz })`, site URLs).
- `lib/seo.ts` — contact details, menus, logo, JSON-LD for each region.
  **When the NZ office is set up, update the `NZ_SITE` block** (phone, email,
  address, NZBN).
- `lib/pricing.ts` — retainer tiers, projects and FAQs (AUD vs NZD/GST 15%).
- `lib/routes.ts` — which pages belong to which country, and where AU links
  redirect on the NZ site (e.g. `/afsl` → `/licensing`) and vice versa.
- Shared sections (`components/*`) hold both AU and NZ copy side by side.
- AU-only pages: `app/afsl/*`, `app/aml-ctf/*`, `app/life-insurance`.
  NZ-only pages: `app/licensing/*`, `app/aml-cft/*`. Each calls `onlyIn()`.
- NZ articles: `app/blog/[slug]/posts-nz.tsx`.

**Deploying the NZ site on Vercel**

1. Vercel → Add New → Project → import this same GitHub repository again.
2. Name it e.g. `grace-advisory-nz`. In Environment Variables add
   `NEXT_PUBLIC_SITE_REGION` = `nz` (plus the same mail variables as the AU project).
3. Deploy, then Settings → Domains → add `graceadvisory.co.nz` and
   `www.graceadvisory.co.nz`, and set the DNS records Vercel shows at the .nz registrar.

Both projects redeploy automatically on every push, so a fix made once ships
to both sites. Contact-form messages from the NZ site go to the same inbox,
with `[NZ]` at the start of the subject.

## Contact form — email setup

The contact form (`/contact`) is wired through a server action that sends to
**Raj@graceadvisory.com.au** and **Info@graceadvisory.com.au** (configured in
`lib/seo.ts`).

Without env vars, the action runs in **dry-run mode**: submissions succeed in
the UI but the message is only logged to the server console. To deliver real
mail, configure one of the two paths below as environment variables (locally
in `.env.local`, on Vercel in Project Settings → Environment Variables).

### Path A — Resend (recommended)

1. Sign up at <https://resend.com> (free tier: 100 emails/day, 3,000/month).
2. Verify the `graceadvisory.com.au` domain (add the DNS records Resend shows you).
3. Create an API key.
4. Set env vars:
   - `RESEND_API_KEY` — the API key
   - `MAIL_FROM` — `noreply@graceadvisory.com.au` (must match a verified sender)

### Path B — SMTP (use existing email infrastructure)

If Grace Advisory's mail is on Microsoft 365 / Google Workspace / etc., use SMTP
with a real mailbox. Set:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- Optional `SMTP_SECURE=true` for port 465 (otherwise STARTTLS on 587)
- `MAIL_FROM` — sender address (must match the SMTP_USER mailbox or be a permitted alias)

See `.env.example` for ready-to-paste templates for Microsoft 365 and Google Workspace.

### After changing env vars on Vercel

Trigger a redeploy: Vercel → Project → Deployments → ⋯ → "Redeploy".
Env vars are baked at build time for server actions.

## Project structure

```
app/                # App Router routes
  layout.tsx        # Root layout (fonts, SEO, JSON-LD)
  page.tsx          # Home (composes 9 sections)
  about/, afsl/, aml-ctf/, blog/, contact/, …
  actions/contact.ts  # Server action for the contact form
components/         # Reusable UI components
lib/
  seo.ts            # Site constants, NAV, JSON-LD, recipient list
  imagery.ts        # Stock photo registry (swap with real photography)
  mailer.ts         # Resend / SMTP / dry-run mailer abstraction
public/brand/       # Logo, favicon
design-system/      # Persisted design tokens
content/            # Scraped content from the original site (reference)
_legacy/            # Original HTML scaffold (archived)
```

## Tech

- **Next.js 15** App Router, RSC by default
- **React 19** with `useActionState` / `useFormStatus`
- **Tailwind CSS v4** with CSS-based `@theme` tokens (no JS config)
- **TypeScript** strict mode
- **next/font** for self-hosted EB Garamond + Lato (zero CLS)
- **next/image** with AVIF/WebP delivery
- **Resend** + **Nodemailer** for transactional mail
