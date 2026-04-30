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
        lede="AFSL applications, AML/CTF Programs, ongoing oversight — we&rsquo;d be glad to hear from you."
      />
      <ContactSection />
    </main>
  );
}
