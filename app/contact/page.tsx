import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact — AFSL Licence Requirements & Consultants",
  description:
    "Speak to a Grace Advisory specialist about AFSL or AML/CTF compliance. Brisbane-based, serving clients Australia-wide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Speak to a compliance specialist."
        lede="Whether you're applying for an AFSL, designing an AML/CTF Program or maintaining ongoing oversight — we'd be glad to hear from you."
      />
      <ContactSection />
    </main>
  );
}
