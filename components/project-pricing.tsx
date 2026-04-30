import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { SectionHead } from "@/components/section";
import { PROJECTS, type Project } from "@/lib/pricing";

/**
 * One-off project engagements — fixed-fee work that sits outside the
 * monthly retainers. Editorial table layout with hex bullet, name, range
 * and timeline.
 */
export function ProjectPricing() {
  return (
    <section id="projects" className="relative py-[clamp(72px,10vw,144px)] bg-[var(--color-ivory-50)] scroll-mt-24">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 500px at 100% 20%, rgba(244,210,122,0.12), transparent 60%)," +
            "radial-gradient(700px 500px at 0% 80%, rgba(30,42,86,0.05), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. II · Project Engagements"
          title={<>Fixed-fee project work.</>}
          lede="One-off engagements quoted on scope, not the hour. Ranges cover most clients; exact figures confirmed after a 30-minute scoping call."
        />

        <div className="reveal border-t border-[var(--color-line)]">
          {PROJECTS.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project: p }: { project: Project }) {
  return (
    <Link
      href={p.href}
      className="has-spotlight relative grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3 md:gap-10 items-start md:items-center
                 px-5 py-7 md:py-9 border-b border-[var(--color-line)] bg-[var(--color-ivory-50)]
                 hover:bg-[var(--color-ivory-100)] transition-[background-color] duration-500 group"
    >
      {/* Left — name + description */}
      <div className="flex items-start gap-4 min-w-0">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden
             className="w-5 h-5 mt-1 shrink-0 text-[var(--color-gold-500)] transition-transform duration-500 group-hover:rotate-[6deg]">
          <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M12 8 L17 11 V14 L12 17 L7 14 V11 Z" fill="currentColor" opacity="0.85"/>
        </svg>
        <div className="min-w-0">
          <h3 className="font-display font-medium leading-[1.15] tracking-[-0.005em] text-[var(--color-navy-900)]"
              style={{ fontSize: "clamp(1.2rem, 1.7vw, 1.45rem)" }}>{p.name}</h3>
          <p className="mt-1 text-[var(--color-ink-700)] text-[0.95rem] leading-[1.55] m-0">{p.description}</p>
          <div className="mt-3 inline-flex items-center gap-2 md:hidden font-sans font-bold text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-ink-600)]">
            <span className="w-1 h-1 bg-[var(--color-gold-500)] rotate-45" aria-hidden />
            {p.timeline}
          </div>
        </div>
      </div>

      {/* Middle — fee range */}
      <div className="md:text-right md:min-w-[200px]">
        <div className="font-display italic text-[0.78rem] text-[var(--color-ink-400)] hidden md:block">range</div>
        <div className="mt-0.5 font-display font-medium tracking-[-0.005em] text-[var(--color-navy-900)] tabular-nums"
             style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)" }}>
          ${p.from.toLocaleString("en-AU")}{p.to ? ` – $${p.to.toLocaleString("en-AU")}` : "+"}
        </div>
      </div>

      {/* Right — timeline + arrow (desktop) */}
      <div className="hidden md:flex items-center gap-5 md:min-w-[200px] justify-end">
        <div className="text-right">
          <div className="font-display italic text-[0.78rem] text-[var(--color-ink-400)]">typical timeline</div>
          <div className="mt-0.5 font-sans font-bold text-[0.78rem] tracking-[0.14em] uppercase text-[var(--color-navy-700)]">{p.timeline}</div>
        </div>
        <ArrowRight className="w-4 h-4 text-[var(--color-gold-600)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>
    </Link>
  );
}
