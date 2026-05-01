import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/seo";
import { FacebookIcon, LinkedInIcon, YouTubeIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-navy-900)] text-[rgba(241,203,107,0.85)] overflow-hidden"
            style={{ paddingBlock: "64px 28px", borderTop: "2px solid rgba(232,185,71,0.32)" }}>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 100% 0%, rgba(210,154,26,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" aria-label="Grace Advisory home" className="inline-flex">
              <Image
                src="/brand/grace_advisory_logo.png"
                alt="Grace Advisory"
                width={586}
                height={206}
                className="h-12 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="mt-5 max-w-[340px] font-sans text-[rgba(251,248,241,0.78)] text-[0.95rem] leading-[1.6] m-0">
              Ethical conduct, clients&rsquo; interests first — in our words and actions.
            </p>
          </div>

          <FootCol heading="AFSL" items={NAV.AFSL} />
          <FootCol heading="AML/CTF" items={NAV.AML} />
          <FootCol heading="Engage" items={NAV.ENGAGE} />

          <div>
            <h4 className="font-sans font-bold text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-gold-300)] mb-4">Contact</h4>
            <p className="m-0 mb-2.5">
              <a href={`tel:${SITE.phoneTel}`}
                 className="font-sans font-bold text-[var(--color-ivory-50)] tracking-[0.04em] hover:text-[var(--color-gold-300)] transition-colors">
                {SITE.phone}
              </a>
            </p>
            <p className="font-sans m-0 mb-2.5 text-[var(--color-ivory-50)]/85 text-[0.95rem]">
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-gold-300)] transition-colors">{SITE.email}</a>
            </p>
            <p className="font-sans mt-3 m-0 text-[var(--color-ivory-50)]/75 text-[0.92rem] leading-[1.55]">{SITE.address.line1}<br/>{SITE.address.line2}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[rgba(232,185,71,0.18)] flex flex-wrap justify-between gap-4 font-sans text-[0.78rem] tracking-[0.06em] text-[rgba(251,248,241,0.6)]">
          <span>© {new Date().getFullYear()} Grace Advisory · ABN {SITE.abn}</span>
          <div className="flex gap-3" aria-label="Social links">
            <SocialLink href="https://www.linkedin.com/company/grace-advisory" label="LinkedIn"><LinkedInIcon className="w-3.5 h-3.5"/></SocialLink>
            <SocialLink href="https://www.facebook.com/graceadvisory" label="Facebook"><FacebookIcon className="w-3.5 h-3.5"/></SocialLink>
            <SocialLink href="https://www.youtube.com/@graceadvisory" label="YouTube"><YouTubeIcon className="w-3.5 h-3.5"/></SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ heading, items }: { heading: string; items: readonly { label: string; href: string }[] }) {
  return (
    <nav aria-labelledby={`foot-${heading}`}>
      <h4 id={`foot-${heading}`} className="font-sans font-bold text-[0.7rem] tracking-[0.22em] uppercase text-[var(--color-gold-300)] mb-4">{heading}</h4>
      <ul className="list-none p-0 m-0 space-y-2.5">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="font-sans text-[rgba(251,248,241,0.85)] text-[0.95rem] hover:text-[var(--color-gold-300)] transition-colors">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label}
       className="w-8 h-8 inline-flex items-center justify-center border border-[rgba(232,185,71,0.25)] text-[rgba(251,248,241,0.8)] hover:border-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] hover:bg-[var(--color-gold-500)] transition-colors">
      {children}
    </a>
  );
}
