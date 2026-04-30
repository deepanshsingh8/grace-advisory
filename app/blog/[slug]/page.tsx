import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/cta-band";
import { PageBody } from "@/components/page-body";
import { PageHero } from "@/components/page-hero";

/**
 * Static blog posts. We render the three articles from the original site
 * with their full body. Easy to extend later by moving this map into
 * MDX / a CMS.
 */
const POSTS = {
  "tranche-2-aml-ctf-reforms-australia-2026": {
    title: "Tranche 2 Compliance Explained: What Has Changed Under AUSTRAC Reform?",
    metaTitle: "Tranche 2 AML/CTF Reforms Australia 2026 — Compliance Guide",
    metaDescription:
      "From 1 July 2026, around 90,000 newly regulated firms come under AML/CTF supervision. What changed and what to do before the deadline.",
    eyebrow: "AML/CTF Reforms · 30 Apr 2026",
    body: (
      <>
        <p>
          One of Australia&rsquo;s biggest regulatory changes in decades is about to begin. The
          Anti-Money Laundering and Counter-Terrorism Financing (AML/CTF) Amendment Act has been
          updated. Thousands of Australian companies will have to comply starting on 1 July 2026.
          AML regulations did not previously apply to these companies.
        </p>
        <h2>What are the AML/CTF reforms and why now?</h2>
        <p>
          Australia has had an AML/CTF system in existence since 2006. However, for nearly twenty
          years the framework was never applied to certain high-risk professional and service
          sectors. These industries are the &ldquo;Tranche 2&rdquo; enterprises — lawyers,
          accountants, real-estate professionals, trust providers, and dealers in precious metals
          and stones. The Financial Action Task Force (FATF) consistently criticised their exclusion.
        </p>
        <h2>Who is captured?</h2>
        <ul>
          <li>Legal professionals (lawyers, conveyancers, notaries)</li>
          <li>Accountants and accounting firms</li>
          <li>Real estate agents (significant funds in property sales, purchases, rentals)</li>
          <li>Dealers in precious metals and gemstones</li>
          <li>Trust and company service providers</li>
        </ul>
        <p>According to AUSTRAC, the Tranche 2 amendments will subject almost 90,000 new companies to AML supervision.</p>
        <h2>What changes?</h2>
        <ul>
          <li><strong>Expanded definition of virtual assets</strong> — &ldquo;digital currency&rdquo; superseded by the broader &ldquo;virtual assets.&rdquo;</li>
          <li><strong>Updated CDD obligations</strong> — modernised, risk-based.</li>
          <li><strong>New reporting and value-transfer rules</strong> — IVTS phased in (some entities to 2029).</li>
          <li><strong>Repeal of the Financial Transaction Reports Act 1988</strong>.</li>
          <li><strong>Stronger governance obligations</strong> for senior management and boards.</li>
        </ul>
        <h2>Key dates</h2>
        <ul>
          <li><strong>31 March 2026</strong> — AUSTRAC enrolment opens for new entities.</li>
          <li><strong>30 May 2026</strong> — Compliance Officer notification deadline.</li>
          <li><strong>1 July 2026</strong> — AML/CTF compliance obligations commence.</li>
          <li><strong>29 July 2026</strong> — Enrolment deadline for new entities.</li>
          <li><strong>30 March 2029</strong> — Updated CDD for existing reporting entities.</li>
        </ul>
        <h2>How Grace Advisory can help</h2>
        <ul>
          <li>AML/CTF Program Development</li>
          <li>AUSTRAC Registration Assistance</li>
          <li>Ongoing AML/CTF Compliance Support</li>
          <li>Independent Review of AML/CTF Programs</li>
          <li>AML/CTF Training</li>
        </ul>
      </>
    ),
  },
  "australian-financial-services-licence-afsl-application-guide": {
    title: "Complete Guide to Applying for an AFSL in Australia (Step-by-Step)",
    metaTitle: "AFSL Application in Australia — Step-by-Step Guide",
    metaDescription:
      "Eight steps to obtain an Australian Financial Services Licence — including realistic timelines (4–8 months) and ASIC fee ranges.",
    eyebrow: "AFSL · 30 Apr 2026",
    body: (
      <>
        <h2>What is an AFSL?</h2>
        <p>
          An AFSL permits businesses to conduct financial product advice, financial product
          dealing, portfolio management and other financial services in Australia.
        </p>
        <h2>Eight-step application process</h2>
        <ol>
          <li><strong>Identify services</strong> — define which financial services your business will provide.</li>
          <li><strong>Check requirements</strong> — organisational competence, financial capacity, risk management.</li>
          <li><strong>Appoint Responsible Managers</strong>.</li>
          <li><strong>Establish compliance systems</strong> — policies, procedures, training.</li>
          <li><strong>Prepare documentation</strong> — business descriptions, financials, policies, RM credentials.</li>
          <li><strong>Submit application</strong> through ASIC&rsquo;s eLicensing portal.</li>
          <li><strong>Respond to queries</strong> from ASIC promptly.</li>
          <li><strong>Implementation</strong> — deploy compliance systems after approval.</li>
        </ol>
        <h2>Ongoing requirements</h2>
        <ul>
          <li>Regular reporting and record-keeping</li>
          <li>Staff training and competency updates</li>
          <li>Risk management and internal audits</li>
          <li>Client disclosure and transparency</li>
        </ul>
        <h2>FAQs</h2>
        <p><strong>Timeline:</strong> ASIC targets 120 days; typically 4–8 months total.</p>
        <p><strong>Cost:</strong> ASIC fees range $3,721–$7,537; total costs often $10,000–$60,000+.</p>
      </>
    ),
  },
  "aml-ctf-reforms-2026-australian-business-guide": {
    title: "AML/CTF Reforms 2026: A Complete Guide for Australian Businesses",
    metaTitle: "AML/CTF Reforms 2026 — Complete Australian Business Guide",
    metaDescription:
      "Practical guide to the modernised AML/CTF regime — what's in scope, what your program must include, and immediate actions to take.",
    eyebrow: "AML/CTF Reforms · 30 Apr 2026",
    body: (
      <>
        <h2>Understanding the reforms</h2>
        <p>
          Australia is implementing significant AML/CTF regulatory updates. Led by AUSTRAC,
          these reforms aim to strengthen financial-crime prevention and align with international
          standards.
        </p>
        <h2>Tranche 2 expansion (effective 1 July 2026)</h2>
        <ul>
          <li>Lawyers and legal service providers</li>
          <li>Accountants and tax practitioners</li>
          <li>Real estate professionals</li>
          <li>Trust and company service providers</li>
          <li>Dealers in precious metals and stones</li>
        </ul>
        <h2>Core compliance requirements</h2>
        <p>Customer due diligence, risk assessments, transaction monitoring, staff training.</p>
        <h2>Immediate actions</h2>
        <ul>
          <li>Confirm regulatory status</li>
          <li>Conduct risk assessments</li>
          <li>Appoint compliance officers</li>
          <li>Review client onboarding procedures</li>
        </ul>
      </>
    ),
  },
} as const;

type Slug = keyof typeof POSTS;

export function generateStaticParams() {
  return (Object.keys(POSTS) as Slug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug as Slug];
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.metaDescription, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug as Slug];
  if (!post) notFound();

  return (
    <main>
      <PageHero eyebrow={post.eyebrow} title={post.title} />
      <PageBody>{post.body}</PageBody>
      <CTABand />
    </main>
  );
}
