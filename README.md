# Grace Advisory

Next.js 15 + TypeScript + Tailwind v4 marketing site.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run build
```

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
