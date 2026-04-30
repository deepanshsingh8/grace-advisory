import Link from "next/link";
import { ArrowRight, HexBadge, HexCheck, HexCircle, HexDoc, HexLines, HexShield } from "@/components/icons";
import { SectionHead } from "@/components/section";
import { ComponentType, SVGProps } from "react";

interface Service {
  num: string;
  title: string;
  body: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
}

const SERVICES: Service[] = [
  { num: "01.", title: "AFSL Application", body: "Assistance in obtaining an Australian Financial Services Licence — proof documents, RM selection, ASIC liaison.", href: "/afsl/application", Icon: HexCheck },
  { num: "02.", title: "Credit Licence Applications", body: "End-to-end support to obtain an Australian Credit Licence, including responsible-lending obligations.", href: "/services", Icon: HexLines },
  { num: "03.", title: "Compliance Services", body: "Ongoing compliance monitoring to ensure your business meets its regulatory obligations as it grows.", href: "/afsl/ongoing-monitoring", Icon: HexCircle },
  { num: "04.", title: "AML/CTF", body: "Programs, ongoing compliance, AUSTRAC registration and independent reviews — Part A and Part B.", href: "/aml-ctf", Icon: HexShield },
  { num: "05.", title: "Legal Services", body: "General corporate and commercial legal services that complement your compliance framework.", href: "/services", Icon: HexDoc },
  { num: "06.", title: "AUSTRAC Registration", body: "For remittance providers and crypto exchanges — registration, program development and AUSTRAC liaison.", href: "/aml-ctf/austrac-registration", Icon: HexBadge },
];

export function ServiceGrid() {
  return (
    <section id="services" className="relative py-[clamp(72px,10vw,144px)] bg-[var(--color-ivory-50)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 500px at 100% 0%, rgba(244,210,122,0.12), transparent 60%)," +
            "radial-gradient(700px 600px at 0% 100%, rgba(30,42,86,0.04), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          eyebrow="No. III · Engagements"
          title={<>What we do<br/>to serve you best.</>}
          lede="A practical menu of engagements. Each tailored, each grounded in the regulatory text — and each delivered with your commercial interests in mind."
        />

        <div className="reveal reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-line)]">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="has-spotlight relative bg-[var(--color-ivory-50)] hover:bg-[var(--color-ivory-100)] transition-colors duration-500 border-r border-b border-[var(--color-line)] p-9"
            >
              <div className="font-display italic text-[0.82rem] text-[var(--color-ink-400)] mb-4">{s.num}</div>
              <s.Icon className="w-11 h-11 text-[var(--color-gold-500)] mb-6" />
              <h3 className="font-display font-semibold leading-[1.2] mb-2.5"
                  style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.5rem)" }}>
                {s.title}
              </h3>
              <p className="text-[0.95rem] leading-[1.6] text-[var(--color-ink-700)] m-0 mb-6">{s.body}</p>
              <Link href={s.href} className="btn-ghost">
                Read more
                <ArrowRight className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
