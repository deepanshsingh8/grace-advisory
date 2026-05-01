import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SectionHead } from "@/components/section";
import { IMG } from "@/lib/imagery";

interface Post {
  cat: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  cover: string;
  coverAlt: string;
}

const POSTS: Post[] = [
  {
    cat: "AML/CTF Reforms", date: "30 Apr 2026",
    title: "Tranche 2 Compliance Explained: What Has Changed Under AUSTRAC Reform?",
    excerpt: "From 1 July 2026, ~90,000 newly regulated firms — lawyers, accountants, real estate, trust providers, dealers — come under AML/CTF. What changed, and what to do.",
    href: "/blog/tranche-2-aml-ctf-reforms-australia-2026",
    cover: IMG.insight_tranche2,
    coverAlt: "Architectural facade — a metaphor for new structural compliance obligations.",
  },
  {
    cat: "AFSL", date: "30 Apr 2026",
    title: "Complete Guide to Applying for an AFSL in Australia (Step-by-Step)",
    excerpt: "Eight steps from scoping services to deploying compliance — with realistic timelines (4–8 months) and ASIC fees.",
    href: "/blog/australian-financial-services-licence-afsl-application-guide",
    cover: IMG.insight_afsl,
    coverAlt: "Hands signing a contract — the AFSL application process.",
  },
  {
    cat: "AML/CTF Reforms", date: "30 Apr 2026",
    title: "AML/CTF Reforms 2026: A Complete Guide for Australian Businesses",
    excerpt: "A practical guide — what's in scope, what your program needs, and the actions to take now.",
    href: "/blog/aml-ctf-reforms-2026-australian-business-guide",
    cover: IMG.insight_reforms,
    coverAlt: "Modern office building — institutional landscape under reform.",
  },
];

export function Insights() {
  return (
    <section id="insights" className="relative py-[clamp(56px,7vw,96px)] bg-[var(--color-ivory-50)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 400px at 0% 30%, rgba(244,210,122,0.10), transparent 60%)," +
            "radial-gradient(800px 500px at 100% 70%, rgba(30,42,86,0.05), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. IX · From the Practice"
          title={<>Notes on the regulation<br/>that shapes your business.</>}
          lede="Plain-English commentary on the rules you actually have to follow."
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {POSTS.map((p) => (
            <Link
              href={p.href}
              key={p.title}
              className="has-spotlight group relative bg-[var(--color-ivory-50)] border border-[var(--color-line)]
                         hover:border-[var(--color-gold-300)] transition-[border-color] duration-500
                         flex flex-col"
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-navy-900)]">
                <Image
                  src={p.cover}
                  alt={p.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.18,.7,.2,1)] group-hover:scale-[1.04]"
                />
                {/* Brand-tinted overlay so photos cohere with the navy/gold palette */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(20,27,60,0.20) 0%, rgba(20,27,60,0.45) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />
                {/* Top-left category chip */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[var(--color-ivory-50)]/95 backdrop-blur-sm px-3 py-1.5">
                  <span className="w-1.5 h-1.5 bg-[var(--color-gold-500)] rotate-45" aria-hidden />
                  <span className="font-sans font-bold text-[0.65rem] tracking-[0.18em] uppercase text-[var(--color-navy-900)]">{p.cat}</span>
                </div>
                {/* Bottom-right hex glyph */}
                <svg viewBox="0 0 24 24" fill="none" className="absolute bottom-3 right-3 w-7 h-7 text-[var(--color-gold-300)] opacity-90"
                     aria-hidden>
                  <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.4"/>
                </svg>
              </div>

              {/* Body */}
              <div className="p-7 lg:p-8 flex flex-col gap-4 flex-1">
                <div className="font-sans font-bold text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-ink-600)]">{p.date}</div>
                <h3 className="font-display font-medium leading-[1.2] tracking-[-0.005em] m-0"
                    style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)" }}>
                  {p.title}
                </h3>
                <p className="text-[var(--color-ink-700)] text-[0.95rem] leading-[1.6] m-0 flex-1">{p.excerpt}</p>
                <span className="btn-ghost mt-2 self-start">
                  Read article
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
