import Link from "next/link";

/**
 * Australian Credit Licence articles — served on graceadvisory.com.au only.
 * Same shape as the other posts in page.tsx. Merged into AU_POSTS there.
 *
 * Editorial rules: general information only; no promise of ASIC approval
 * or timeframes; obligations depend on the business model. Review before
 * publication.
 */
export const AU_CREDIT_POSTS = {
  "how-to-apply-for-an-australian-credit-licence": {
    title: "How to Apply for an Australian Credit Licence (ACL): A Practical Guide",
    metaTitle: "How to Apply for an Australian Credit Licence (ACL) — Step-by-Step Guide",
    metaDescription:
      "Who needs an Australian Credit Licence, which authorisations to choose, what ASIC expects in the application, and what happens after the licence is granted.",
    eyebrow: "Credit Licensing · 20 Nov 2026",
    body: (
      <>
        <p>
          If your business provides consumer credit, arranges it for others, or offers consumer
          leases, it will generally need an Australian Credit Licence (ACL) issued by ASIC under
          the National Consumer Credit Protection Act 2009 (the National Credit Act). This guide
          walks through the application from first scoping to the obligations that start on the
          day the licence is granted.
        </p>

        <h2>1. Confirm you need a licence</h2>
        <p>
          The National Credit Act requires a licence to engage in &ldquo;credit activities&rdquo;.
          Broadly, these include:
        </p>
        <ul>
          <li>Providing consumer credit as a lender (a credit provider)</li>
          <li>Providing credit assistance — suggesting or helping a consumer apply for a particular credit contract, as mortgage and finance brokers do</li>
          <li>Acting as an intermediary between consumers and credit providers</li>
          <li>Offering consumer leases</li>
          <li>Certain debt management services, and buy now pay later products brought into the regime by recent reforms</li>
        </ul>
        <p>
          Not every business that touches credit needs its own licence. Some operate as a credit
          representative of another licensee, and some rely on specific exemptions. Lending that is
          predominantly for business purposes also generally sits outside the consumer credit
          regime. Getting this question right first saves time and cost later.
        </p>

        <h2>2. Choose your authorisations</h2>
        <p>
          Your licence will authorise particular credit activities — for example as a credit
          provider, a credit service provider (credit assistance and intermediary activities), or
          a lessor. Choose authorisations that match your current business model and realistic
          plans. Every authorisation needs Responsible Managers and compliance arrangements to
          support it, so applying for more than you need adds work without adding value.
        </p>

        <h2>3. Appoint suitable Responsible Managers</h2>
        <p>
          ASIC assesses your organisational competence largely through your Responsible Managers —
          the people directly responsible for significant day-to-day decisions about your credit
          activities. ASIC&rsquo;s Regulatory Guide 206 explains its expectations, which generally
          include relevant, problem-free experience and appropriate qualifications. Read more in
          our guide to{" "}
          <Link href="/blog/responsible-manager-requirements-credit-licence">Responsible Manager requirements</Link>.
        </p>

        <h2>4. Build your compliance arrangements</h2>
        <p>
          ASIC will want to understand how you will meet the general conduct obligations once
          licensed. In practice that means having — or being ready to implement — arrangements
          covering:
        </p>
        <ul>
          <li>Responsible lending (or responsible credit assistance) procedures</li>
          <li>Conflicts of interest</li>
          <li>Compliance monitoring and breach reporting</li>
          <li>Risk management</li>
          <li>Training and supervision of staff and representatives</li>
          <li>Internal dispute resolution, and membership of AFCA</li>
          <li>Compensation arrangements, typically professional indemnity insurance</li>
          <li>Adequate financial, technological and human resources</li>
        </ul>

        <h2>5. Prepare the application</h2>
        <p>
          Applications are lodged through the ASIC Regulatory Portal. Alongside the application
          itself, ASIC asks for information about the business and its people, including
          fit-and-proper information about directors, secretaries, senior managers and controllers,
          and details of each Responsible Manager. The exact supporting documents depend on your
          authorisations and business model. Consistency matters: the business description, the
          Responsible Managers&rsquo; experience and the compliance arrangements should all tell the
          same story.
        </p>

        <h2>6. Respond to ASIC</h2>
        <p>
          ASIC commonly asks applicants for further information during its assessment. Prompt,
          accurate responses keep the assessment moving. How long the process takes depends on the
          complexity of the business, the quality of the application and ASIC&rsquo;s workload — no
          adviser can guarantee a timeframe or an outcome.
        </p>

        <h2>7. Be ready for day one</h2>
        <p>
          Once the licence is granted, obligations apply immediately — from responsible lending and
          disclosure to breach reporting, dispute resolution and record-keeping. See{" "}
          <Link href="/blog/ongoing-obligations-australian-credit-licensees">the ongoing obligations of credit licensees</Link>.
        </p>

        <h2>How Grace Advisory can help</h2>
        <p>
          We support credit businesses through every step — scoping authorisations, Responsible
          Manager advisory, compliance frameworks, the application and ASIC liaison. See our{" "}
          <Link href="/credit-licensing/applications">ACL Applications &amp; Variations</Link> service.
        </p>
        <p><em>This article is general information only and is not legal advice.</em></p>
      </>
    ),
  },

  "acl-vs-afsl-which-licence-do-you-need": {
    title: "ACL vs AFSL: Which Licence Does Your Business Need?",
    metaTitle: "ACL vs AFSL — Australian Credit Licence or Financial Services Licence?",
    metaDescription:
      "The difference between an Australian Credit Licence and an Australian Financial Services Licence, when a business needs both, and what the two regimes have in common.",
    eyebrow: "Credit Licensing · 20 Nov 2026",
    body: (
      <>
        <p>
          ASIC issues two main licences to businesses that deal with consumers&rsquo; money: the
          Australian Credit Licence (ACL) and the Australian Financial Services Licence (AFSL).
          They are often confused, sometimes both required, and built on different legislation.
        </p>

        <h2>The short answer</h2>
        <ul>
          <li><strong>ACL</strong> — for consumer credit activities: lending, credit assistance such as broking, consumer leases and related services. Governed by the National Consumer Credit Protection Act 2009.</li>
          <li><strong>AFSL</strong> — for financial services: financial product advice, dealing, making a market, operating managed investment schemes, providing custodial services and similar. Governed by Chapter 7 of the Corporations Act 2001.</li>
        </ul>

        <h2>Different products, different rules</h2>
        <p>
          Consumer credit is regulated under its own regime rather than as a &ldquo;financial
          product&rdquo; under Chapter 7. So a lender or broker dealing only in consumer credit
          generally needs an ACL, not an AFSL. A business that advises on or deals in investments,
          insurance, superannuation or payment products generally needs an AFSL.
        </p>

        <h2>When you need both</h2>
        <p>
          Many businesses straddle the line. Common examples include:
        </p>
        <ul>
          <li>Groups that offer both credit and insurance or investment products</li>
          <li>Financial advisers who also provide credit assistance</li>
          <li>Fintech platforms combining lending with payments or investment features</li>
          <li>Fund managers whose funds lend to consumers</li>
        </ul>
        <p>
          Holding both licences means meeting two sets of obligations — but many can be met
          through shared arrangements.
        </p>

        <h2>What the two regimes share</h2>
        <ul>
          <li>Both are administered by ASIC and require you to act efficiently, honestly and fairly</li>
          <li>Both require Responsible Managers — under RG 105 for an AFSL and RG 206 for an ACL</li>
          <li>Both require internal dispute resolution meeting RG 271, and AFCA membership where you deal with retail clients or consumers</li>
          <li>Both have breach reporting (reportable situations) obligations, explained in RG 78</li>
          <li>Design and distribution obligations can apply to products under either regime</li>
        </ul>

        <h2>Where they differ</h2>
        <ul>
          <li><strong>Conduct rules</strong> — credit licensees have responsible lending obligations; AFSL holders providing personal advice have best interests and disclosure obligations</li>
          <li><strong>Annual reporting</strong> — credit licensees lodge an annual compliance certificate; AFSL holders have their own financial reporting and audit requirements</li>
          <li><strong>Representatives</strong> — credit representatives and authorised representatives are appointed and notified under different rules</li>
        </ul>

        <h2>Getting the structure right</h2>
        <p>
          The right answer depends on exactly what your business does and plans to do. We can map
          your activities to both regimes and, where you need both, design one compliance
          framework that covers them. See our{" "}
          <Link href="/credit-licensing">Credit Licensing</Link> and <Link href="/afsl">AFSL</Link> services.
        </p>
        <p><em>This article is general information only and is not legal advice.</em></p>
      </>
    ),
  },

  "responsible-manager-requirements-credit-licence": {
    title: "Responsible Manager Requirements for an Australian Credit Licence",
    metaTitle: "Credit Licence Responsible Manager Requirements — RG 206 Explained",
    metaDescription:
      "What ASIC expects of Responsible Managers on an Australian Credit Licence — experience, qualifications, fit and proper requirements and how many you need.",
    eyebrow: "Credit Licensing · 20 Nov 2026",
    body: (
      <>
        <p>
          For most Australian Credit Licence applicants, the Responsible Managers are the single
          most important part of the application. ASIC relies on them to judge whether the business
          has the organisational competence to engage in the credit activities it wants to be
          authorised for.
        </p>

        <h2>What is a Responsible Manager?</h2>
        <p>
          A Responsible Manager is a person directly responsible for significant day-to-day
          decisions about the licensee&rsquo;s credit activities. They are not a figurehead: ASIC
          expects them to be genuinely involved, with the time and authority to oversee the
          credit business.
        </p>

        <h2>ASIC&rsquo;s expectations (RG 206)</h2>
        <p>
          Regulatory Guide 206 <em>Credit licensing: Competence and training</em> sets out how ASIC
          assesses competence. In general terms, ASIC expects Responsible Managers to have:
        </p>
        <ul>
          <li><strong>Relevant experience</strong> — generally at least two years of problem-free experience in the credit activities the licence will cover</li>
          <li><strong>Appropriate qualifications</strong> — generally at least a Certificate IV-level credit qualification or a relevant higher qualification, with higher expectations for some activities such as mortgage broking</li>
          <li><strong>Good character</strong> — Responsible Managers must be fit and proper, supported by police and bankruptcy checks</li>
        </ul>
        <p>
          ASIC can accept other ways of demonstrating competence in some cases, but the applicant
          has to explain and evidence why they are sufficient.
        </p>

        <h2>How many do you need?</h2>
        <p>
          There is no fixed number. Collectively, your Responsible Managers must cover every
          authorisation, and ASIC considers the size and complexity of the business. Nominating at
          least two avoids the licence depending on a single person.
        </p>

        <h2>Common pitfalls</h2>
        <ul>
          <li>Experience that does not match the authorisations sought — for example lending experience used to support a broking authorisation</li>
          <li>Responsible Managers with too little time in the business to oversee it</li>
          <li>Vague descriptions of past roles that do not show the decision-making ASIC is looking for</li>
          <li>No plan for what happens if a Responsible Manager leaves</li>
        </ul>

        <h2>After the licence is granted</h2>
        <p>
          The obligation to maintain competence continues. Changes in Responsible Managers need to
          be managed promptly, with suitable replacements appointed and ASIC notified, so the
          business does not lose the competence its licence relies on.
        </p>

        <h2>How Grace Advisory can help</h2>
        <p>
          We assess Responsible Manager candidates against RG 206, help them evidence their
          experience and qualifications, and prepare nominations for new applications, variations
          and changes. See{" "}
          <Link href="/credit-licensing/responsible-managers">Responsible Manager Advisory</Link>.
        </p>
        <p><em>This article is general information only and is not legal advice.</em></p>
      </>
    ),
  },

  "ongoing-obligations-australian-credit-licensees": {
    title: "Ongoing Obligations for Australian Credit Licensees",
    metaTitle: "Ongoing ACL Obligations — What Credit Licensees Must Do After Licensing",
    metaDescription:
      "The ongoing obligations of Australian Credit Licence holders — general conduct obligations, breach reporting, dispute resolution, annual compliance certificates and more.",
    eyebrow: "Credit Licensing · 20 Nov 2026",
    body: (
      <>
        <p>
          Being granted an Australian Credit Licence is the start, not the finish. From day one,
          credit licensees must meet a set of continuing obligations — and be able to show ASIC
          that they do.
        </p>

        <h2>The general conduct obligations</h2>
        <p>
          The National Credit Act requires every credit licensee to, among other things:
        </p>
        <ul>
          <li>Engage in credit activities efficiently, honestly and fairly</li>
          <li>Have adequate arrangements to manage conflicts of interest</li>
          <li>Comply with the conditions of the licence and with the credit legislation</li>
          <li>Take reasonable steps to ensure representatives comply with the law</li>
          <li>Maintain the organisational competence to engage in its credit activities</li>
          <li>Ensure representatives are adequately trained and competent</li>
          <li>Have adequate resources — financial, technological and human — and risk management systems</li>
          <li>Have internal dispute resolution that meets ASIC&rsquo;s standards, and be a member of AFCA</li>
          <li>Have adequate compensation arrangements</li>
        </ul>

        <h2>Responsible lending and disclosure</h2>
        <p>
          Lenders, lessors and brokers must meet responsible lending obligations before entering
          into or helping a consumer apply for credit, and give consumers the required disclosure
          documents, such as credit guides. See our guide to{" "}
          <Link href="/blog/responsible-lending-obligations-explained">responsible lending obligations</Link>.
        </p>

        <h2>Breach reporting</h2>
        <p>
          Credit licensees must report &ldquo;reportable situations&rdquo; to ASIC — including
          significant breaches or likely breaches of core obligations — generally within 30
          calendar days of first knowing, or being reckless about whether, a reportable situation
          has arisen. ASIC&rsquo;s guidance is in RG 78. Licensees need a process to identify,
          assess, record and report incidents quickly.
        </p>

        <h2>Complaints and dispute resolution</h2>
        <p>
          Internal dispute resolution must meet RG 271, including maximum response timeframes —
          generally 30 calendar days, with shorter timeframes for some credit complaints such as
          those about hardship or default notices. Consumers who are not satisfied can take their
          complaint to AFCA.
        </p>

        <h2>Annual compliance certificate</h2>
        <p>
          Credit licensees must lodge an annual compliance certificate with ASIC. The certificate
          should be backed by real evidence that the business has met its obligations — which is
          one reason a regular monitoring program matters.
        </p>

        <h2>Other obligations to keep in view</h2>
        <ul>
          <li>Notifying ASIC of certain changes, including changes to Responsible Managers and credit representatives</li>
          <li>Design and distribution obligations for credit products that are in scope</li>
          <li>Financial hardship obligations under the National Credit Code</li>
          <li>Record-keeping, privacy and, where relevant, credit reporting obligations</li>
          <li>AML/CTF obligations if the business is also an AUSTRAC reporting entity</li>
        </ul>

        <h2>How Grace Advisory can help</h2>
        <p>
          We provide ongoing monitoring, breach assessment, annual compliance certificate support,
          independent reviews and retainer-based compliance support. See{" "}
          <Link href="/credit-licensing/ongoing-compliance">Ongoing Compliance &amp; Reviews</Link>.
        </p>
        <p><em>This article is general information only and is not legal advice.</em></p>
      </>
    ),
  },

  "responsible-lending-obligations-explained": {
    title: "Responsible Lending Obligations Explained for Lenders and Brokers",
    metaTitle: "Responsible Lending Obligations — A Guide for Credit Licensees (RG 209)",
    metaDescription:
      "What responsible lending requires of lenders, lessors and brokers — reasonable inquiries, verification, unsuitability assessments, records and the best interests duty.",
    eyebrow: "Credit Licensing · 20 Nov 2026",
    body: (
      <>
        <p>
          Responsible lending is the centrepiece of Australia&rsquo;s consumer credit regime. Its
          purpose is simple: consumers should not be given credit or a lease that is unsuitable for
          them. Meeting that standard in practice — and evidencing it — takes deliberate design.
        </p>

        <h2>Who it applies to</h2>
        <p>
          Responsible lending obligations apply to credit providers and lessors before they enter
          into a credit contract or consumer lease, and to credit assistance providers, such as
          brokers, before they recommend or help a consumer apply for one. Some products are
          subject to modified obligations — for example certain low cost credit contracts, such as
          buy now pay later — and business-purpose lending generally falls outside the regime.
        </p>

        <h2>The three core steps</h2>
        <ol>
          <li><strong>Make reasonable inquiries</strong> about the consumer&rsquo;s requirements and objectives, and about their financial situation.</li>
          <li><strong>Take reasonable steps to verify</strong> the consumer&rsquo;s financial situation.</li>
          <li><strong>Assess whether the contract or lease is unsuitable</strong> — and do not proceed if it is. Credit is presumed unsuitable if, for example, the consumer could only meet repayments with substantial hardship, or it does not meet their requirements and objectives.</li>
        </ol>
        <p>
          What is &ldquo;reasonable&rdquo; scales with the product and the consumer. ASIC&rsquo;s
          expectations are set out in Regulatory Guide 209 <em>Credit licensing: Responsible
          lending conduct</em>.
        </p>

        <h2>Records and the consumer&rsquo;s copy</h2>
        <p>
          Licensees need records showing what was asked, what was verified and how the assessment
          was reached. Consumers can request a copy of the assessment, so it needs to be clear and
          accurate.
        </p>

        <h2>The best interests duty for mortgage brokers</h2>
        <p>
          Mortgage brokers have additional obligations when providing credit assistance about home
          loans: they must act in the consumer&rsquo;s best interests and, where there is a
          conflict, prioritise the consumer&rsquo;s interests. File notes, product comparison and
          remuneration arrangements all need to support that duty.
        </p>

        <h2>Beyond the application</h2>
        <ul>
          <li>Disclosure documents — credit guides, quotes and other required documents</li>
          <li>Financial hardship — recognising hardship notices and responding as the National Credit Code requires</li>
          <li>Fair treatment in collections and default management</li>
          <li>Design and distribution obligations for in-scope products</li>
        </ul>

        <h2>Making it work in practice</h2>
        <p>
          The best responsible lending frameworks are specific: they tell staff exactly what to ask,
          what to verify and when to escalate, and they are tested through regular file reviews.
          See our{" "}
          <Link href="/credit-licensing/responsible-lending">Responsible Lending &amp; Consumer Protection</Link>{" "}
          service.
        </p>
        <p><em>This article is general information only and is not legal advice.</em></p>
      </>
    ),
  },
} as const;
