import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Graduate Training Program",
  description:
    "Industry-specific training, hands-on experience, career development and networking for recent graduates entering compliance and financial services.",
  alternates: { canonical: "/graduate-training" },
};

export default function GradPage() {
  return (
    <main>
      <PageHero
        eyebrow="Graduate Training"
        title="Kickstart your career with practical experience."
        lede="Landing your first opportunity in the market after graduation can be challenging — especially without the right experience. Our program is built to bridge that gap."
      />
      <PageBody>
        <h2>What we offer</h2>
        <ul>
          <li><strong>Industry-specific training</strong> — market trends and best practices.</li>
          <li><strong>Hands-on experience</strong> — real-world scenarios.</li>
          <li><strong>Career development</strong> — focused on job-search strategy.</li>
          <li><strong>Networking opportunities</strong> — connections with industry professionals.</li>
        </ul>
      </PageBody>
      <CTABand />
    </main>
  );
}
