import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HexFilled } from "@/components/icons";
import { SectionHead } from "@/components/section";
import { IMG } from "@/lib/imagery";

interface PillarItem { title: string; body: string }
interface PillarProps {
  eyebrow: string;
  title: string;
  lede: string;
  items: PillarItem[];
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
}

const AFSL: PillarProps = {
  eyebrow: "Pillar I",
  title: "AFSL Compliance",
  lede:
    "For organisations providing financial products and services in Australia. From the application itself through to the responsible-manager framework, policies, monitoring and external review.",
  items: [
    { title: "AFSL Application", body: "RM selection, proof documents, ASIC liaison." },
    { title: "Compliance Policies Drafting", body: "Manuals aligned to the nature, size and complexity of your business." },
    { title: "Responsible Manager Nominations", body: "and AFSL variations." },
    { title: "External Compliance Reviews", body: "A regular health check of your framework." },
    { title: "Ongoing Compliance Monitoring", body: "Replace or supplement your in-house function." },
  ],
  href: "/afsl",
  cta: "Explore AFSL services",
  image: IMG.pillar_afsl,
  imageAlt: "Pen and document — the substance of an AFSL application.",
};

const AML: PillarProps = {
  eyebrow: "Pillar II",
  title: "AML/CTF Compliance",
  lede:
    "The Australian AML/CTF regime is risk-based at heart. We translate that principle into programs that work in practice — from AUSTRAC enrolment through to the independent review.",
  items: [
    { title: "AML/CTF Program", body: "Standard, Joint and Special programs, Part A and Part B." },
    { title: "AUSTRAC Registration", body: "For remittance providers and crypto exchanges." },
    { title: "Ongoing Compliance", body: "Risk assessment, training, monitoring, AUSTRAC liaison." },
    { title: "Independent Reviews", body: "Part A and Part B, by an independent reviewer." },
    { title: "Tranche 2 readiness", body: "For the new sectors regulated from 1 July 2026." },
  ],
  href: "/aml-ctf",
  cta: "Explore AML/CTF services",
  image: IMG.pillar_aml,
  imageAlt: "Signing a contract — the formality of compliance, made tractable.",
};

export function Pillars() {
  return (
    <section id="pillars" className="relative py-[clamp(72px,10vw,144px)] bg-warm-mesh">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(800px 500px at 12% 20%, rgba(230,182,55,0.08), transparent 60%)," +
            "radial-gradient(700px 600px at 88% 80%, rgba(30,42,86,0.06), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. II · Service Pillars"
          title={<>Two regulatory regimes.<br />One advisory.</>}
          lede="Whether you are seeking an AFSL, designing an AML/CTF Program, or maintaining ongoing oversight, our work is shaped to fit the way your business actually runs — not the other way around."
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <Pillar {...AFSL} />
          <Pillar {...AML} />
        </div>
      </div>
    </section>
  );
}

function Pillar(p: PillarProps) {
  return (
    <article className="has-spotlight relative bg-[var(--color-ivory-50)] border border-[var(--color-line)]
                        hover:border-[var(--color-gold-300)] transition-[border-color] duration-500 group flex flex-col">
      {/* Image header */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-navy-900)]">
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          sizes="(min-width: 768px) 540px, 100vw"
          className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(.18,.7,.2,1)] group-hover:scale-[1.05]"
        />
        {/* Brand-tinted overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,27,60,0.40) 0%, rgba(30,42,86,0.20) 60%, rgba(230,182,55,0.10) 100%)",
            mixBlendMode: "multiply",
          }}
        />
        {/* Eyebrow chip */}
        <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-[var(--color-ivory-50)]/95 backdrop-blur-sm px-3 py-1.5">
          <span className="w-1.5 h-1.5 bg-[var(--color-gold-500)] rotate-45" aria-hidden />
          <span className="font-sans font-bold text-[0.65rem] tracking-[0.18em] uppercase text-[var(--color-navy-900)]">{p.eyebrow}</span>
        </div>
        {/* Hex glyph overlay */}
        <svg viewBox="0 0 24 24" fill="none" className="absolute bottom-4 right-4 w-9 h-9 text-[var(--color-gold-300)]" aria-hidden>
          <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 8 L17 11 V14 L12 17 L7 14 V11 Z" fill="currentColor" opacity="0.85" />
        </svg>
      </div>

      {/* Body */}
      <div className="p-8 lg:p-10 flex flex-col flex-1">
        <h3 className="font-display font-medium leading-[1.05] tracking-[-0.012em] mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)" }}>{p.title}</h3>
        <p className="text-[var(--color-ink-700)] mb-7 leading-[1.7]">{p.lede}</p>

        <ul className="border-t border-[var(--color-line)] pt-5 mb-7 space-y-3 list-none p-0">
          {p.items.map((it) => (
            <li key={it.title} className="grid grid-cols-[18px_1fr] gap-3.5 items-start">
              <HexFilled className="w-3 h-3 mt-1.5 text-[var(--color-gold-500)] shrink-0" />
              <span className="text-[0.95rem] text-[var(--color-ink-700)] leading-[1.55]">
                <strong className="text-[var(--color-ink-900)] font-bold">{it.title}</strong>
                {" — "}
                {it.body}
              </span>
            </li>
          ))}
        </ul>

        <Link href={p.href} className="btn-ghost mt-auto self-start">
          {p.cta}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
