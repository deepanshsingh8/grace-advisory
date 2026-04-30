import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/seo";
import { FacebookIcon, LinkedInIcon, YouTubeIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-navy-900)] text-[rgba(251,248,241,0.78)] overflow-hidden"
            style={{ paddingBlock: "80px 36px", borderTop: "1px solid rgba(230,182,55,0.18)" }}>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 400px at 100% 0%, rgba(230,182,55,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12">
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
            <p className="mt-6 max-w-[340px] font-display italic text-[rgba(251,248,241,0.70)] text-[0.95rem] m-0">
              Committed, through our words and actions, to ethical conduct and always
              putting clients&rsquo; interest first.
            </p>
          </div>

          <FootCol heading="AFSL" items={NAV.AFSL} />
          <FootCol heading="AML/CTF" items={NAV.AML} />

          <div>
            <h4 className="font-sans font-bold text-[0.72rem] tracking-[0.22em] uppercase text-[var(--color-gold-200)] mb-4">Contact</h4>
            <p className="font-display m-0 mb-3">
              <a href={`tel:${SITE.phoneTel}`}
                 className="not-italic font-sans font-bold text-[var(--color-ivory-50)] tracking-[0.04em] hover:text-[var(--color-gold-200)] transition-colors">
                {SITE.phone}
              </a>
            </p>
            <p className="font-display italic m-0 mb-3">
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-gold-200)] transition-colors">{SITE.email}</a>
            </p>
            <p className="font-display italic mt-4 m-0">{SITE.address.line1}<br/>{SITE.address.line2}</p>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-[rgba(255,255,255,0.1)] flex flex-wrap justify-between gap-4 font-sans text-[0.78rem] tracking-[0.06em] text-[rgba(251,248,241,0.55)]">
          <span>© {new Date().getFullYear()} Grace Advisory · ABN {SITE.abn}</span>
          <div className="flex gap-3" aria-label="Social links">
            <SocialLink href="#" label="LinkedIn"><LinkedInIcon className="w-3.5 h-3.5"/></SocialLink>
            <SocialLink href="#" label="Facebook"><FacebookIcon className="w-3.5 h-3.5"/></SocialLink>
            <SocialLink href="#" label="YouTube"><YouTubeIcon className="w-3.5 h-3.5"/></SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ heading, items }: { heading: string; items: readonly { label: string; href: string }[] }) {
  return (
    <nav aria-labelledby={`foot-${heading}`}>
      <h4 id={`foot-${heading}`} className="font-sans font-bold text-[0.72rem] tracking-[0.22em] uppercase text-[var(--color-gold-200)] mb-4">{heading}</h4>
      <ul className="list-none p-0 m-0 space-y-2.5">
        {items.map((it) => (
          <li key={it.href}>
            <Link href={it.href} className="font-display italic text-[rgba(251,248,241,0.78)] text-[1rem] hover:text-[var(--color-gold-200)] transition-colors">
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
       className="w-8 h-8 inline-flex items-center justify-center border border-[rgba(255,255,255,0.15)] text-[rgba(251,248,241,0.7)] hover:border-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] hover:bg-[var(--color-gold-500)] transition-colors">
      {children}
    </a>
  );
}
