import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { byRegion } from "@/lib/region";

export const metadata: Metadata = {
  ...byRegion({
    au: {
      title: "Contact — AFSL Licence Requirements & Consultants",
      description:
        "Speak to a Grace Advisory specialist about AFSL or AML/CTF compliance. Brisbane-based, serving clients Australia-wide.",
    },
    nz: {
      title: "Contact — FMA Licensing & AML/CFT Compliance Consultants",
      description:
        "Speak to a Grace Advisory specialist about FMA licensing, FSPR registration or AML/CFT compliance. Serving clients across New Zealand.",
    },
  }),
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Speak to a compliance specialist."
        lede={byRegion({
          au: "AFSL applications, AML/CTF Programs, ongoing oversight — we’d be glad to hear from you.",
          nz: "Licence applications, FSPR registration, AML/CFT programmes, ongoing oversight — we’d be glad to hear from you.",
        })}
      />
      <ContactSection />
    </main>
  );
}
