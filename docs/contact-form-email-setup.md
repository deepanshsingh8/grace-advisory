# Contact Form — Email Setup (Resend + Vercel)

The contact form code is **already complete**: the form on `/contact` validates input,
formats a branded email, and delivers it to `Raj@graceadvisory.com.au` and
`Info@graceadvisory.com.au` (recipients are set in `lib/seo.ts` → `CONTACT_RECIPIENTS`).

**Until email credentials are configured, it runs in "dry-run" mode** — the visitor
sees a success message, but no email is sent (the payload is only logged on the
server). Follow the steps below once to enable real delivery. Total time: ~15 minutes.

---

## Step 1 — Create a Resend account

1. Go to <https://resend.com> and sign up (the free tier — 3,000 emails/month,
   100/day — is far more than a contact form needs).
2. Use an email address the business controls (e.g. info@graceadvisory.com.au).

## Step 2 — Verify the domain

1. In Resend: **Domains → Add Domain** → enter `graceadvisory.com.au`.
   Choose region closest to Australia if offered.
2. Resend shows 3–4 DNS records (MX + TXT for SPF on a `send.` subdomain, plus a
   DKIM TXT record).
3. Add each record in **Cloudflare** (the domain's DNS host):
   dash.cloudflare.com → graceadvisory.com.au → **DNS → Records → Add record**.
   - Copy name/type/value exactly as Resend shows them.
   - Set **Proxy status to "DNS only"** (grey cloud) for these records.
   - These records live on a subdomain (`send.graceadvisory.com.au`), so they do
     **not** interfere with the existing Microsoft 365 mail (MX/SPF on the root
     domain stay untouched).
4. Back in Resend, click **Verify**. Usually completes within a few minutes.

## Step 3 — Create an API key

Resend → **API Keys → Create API Key**.
- Name: `grace-advisory-website`
- Permission: **Sending access** only.
- Copy the key (`re_...`) — it is shown only once.

## Step 4 — Add environment variables in Vercel

Vercel → the grace-advisory project → **Settings → Environment Variables**:

| Name | Value | Environments |
|---|---|---|
| `RESEND_API_KEY` | `re_...` (from Step 3) | Production (and Preview if you want test sends) |
| `MAIL_FROM` | `Grace Advisory <info@graceadvisory.com.au>` | Production |

Then **redeploy** (Deployments → ⋯ on the latest → Redeploy) — env vars only take
effect on a new deployment.

## Step 5 — Test end-to-end

1. Visit <https://www.graceadvisory.com.au/contact> and submit a real test message.
2. Confirm it arrives in both inboxes (check junk folders the first time — then
   mark "not junk" so Microsoft 365 learns).
3. Hit **Reply** on the received email and confirm the reply is addressed to the
   test submitter (Reply-To is wired to the form's email field).
4. Resend dashboard → **Emails** shows the delivery log if anything is off.

---

## Notes

- **Changing recipients:** edit `CONTACT_RECIPIENTS` in `lib/seo.ts` and redeploy.
- **Spam protection:** the form has a honeypot field that silently swallows bot
  submissions. If spam ever becomes a problem, add Cloudflare Turnstile (free).
- **Local development:** copy `.env.example` → `.env.local` and paste the same
  `RESEND_API_KEY` to send real emails from `npm run dev`; leave it unset to
  stay in dry-run mode (payload logged to console).
- **Fallback:** the mailer also supports plain SMTP (e.g. the Microsoft 365
  mailbox) via `SMTP_*` env vars if Resend is ever discontinued — see
  `lib/mailer.ts` header comment.
