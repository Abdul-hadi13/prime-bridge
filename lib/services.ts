export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  longform: string[];
  includes: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: Faq[];
  relatedPosts: string[]; // blog post slugs shown as related reading
};

export const services: Service[] = [
  {
    slug: "medical-billing",
    name: "Medical Billing & Coding",
    metaTitle: "Medical Billing & Coding Services for Small Practices",
    metaDescription:
      "End-to-end medical billing and coding for independent practices: clean claims, faster payments and fewer denials. Talk to Prime Bridge today.",
    h1: "Medical Billing & Coding Services for Independent Practices",
    summary: "Charge entry, coding review, claim submission and payment posting handled by certified billers.",
    intro:
      "Prime Bridge runs your billing operation from encounter to payment. Our team works inside your EHR or practice management system, reviews every charge for coding accuracy, submits clean claims and posts payments so your staff can stay focused on patients.",
    image: "/images/services/medical-billing.svg",
    imageAlt: "Illustration of a medical claim form with CPT codes and a dollar badge",
    longform: [
      "Medical billing is the process of turning a documented patient encounter into a paid claim. It covers charge capture, ICD-10 and CPT coding, claim scrubbing, submission to the payer, payment posting and patient statements. When any step is slow or inaccurate, practice cash flow suffers, so independent practices increasingly outsource the work to a dedicated medical billing company.",
      "Prime Bridge's medical billing and coding service is built for independent and growing practices. We review each charge against the visit note before the claim is created, apply payer-specific rules for Medicare, Medicaid and commercial plans, and track every claim until the payment is posted. Monthly reports show collections, denial rate and days in accounts receivable so you can see exactly how your revenue cycle is performing.",
    ],
    includes: [
      { title: "Charge entry & coding review", text: "ICD-10, CPT and modifier validation before a claim leaves your office." },
      { title: "Claim scrubbing & submission", text: "Electronic claims checked against payer edits, with paper claims handled where required." },
      { title: "Payment posting & reconciliation", text: "ERA/EOB posting, patient balance transfers and daily deposit matching." },
      { title: "Patient statements & billing support", text: "Clear statements and a responsive line for patient billing questions." },
      { title: "Monthly reporting", text: "Collections, denial rate, days in A/R and payer performance in plain language." },
    ],
    steps: [
      { title: "Discovery call", text: "We review your specialty, payer mix, software and current billing results." },
      { title: "Onboarding", text: "We connect to your systems, load fee schedules and set up payer workflows." },
      { title: "Ongoing billing", text: "Daily claim work with a named account manager and monthly performance review." },
    ],
    faqs: [
      { q: "Do you work with my existing EHR?", a: "In most cases yes. We work inside the EHR or practice management system you already use, so you do not have to switch software." },
      { q: "How is pricing structured?", a: "Billing is typically priced as a percentage of collections or a flat monthly fee, depending on practice size and specialty. We provide a written quote after a free consultation." },
      { q: "How long does onboarding take?", a: "Most practices are live within a few weeks. Timing depends on system access and any payer enrollment that needs to be completed first." },
      { q: "What is the difference between medical billing and medical coding?", a: "Coding assigns standardized codes (ICD-10, CPT and HCPCS) to the diagnoses and services in a visit note. Billing turns those codes into a claim, submits it to the payer and follows it until payment is posted." },
    ],
    relatedPosts: ["co-97-denial-code", "top-reasons-claims-get-denied", "medical-billing-outsourcing-cost"],
  },
  {
    slug: "provider-credentialing",
    name: "Provider Credentialing & Enrollment",
    metaTitle: "Provider Credentialing & Payer Enrollment Services",
    metaDescription:
      "Provider credentialing, CAQH management and payer enrollment handled end to end so you can start billing sooner. Get a free consultation.",
    h1: "Provider Credentialing & Payer Enrollment Services",
    summary: "Applications, CAQH upkeep, payer follow-up and re-credentialing so providers are paid on time.",
    intro:
      "Until a provider is enrolled and credentialed, claims cannot be paid. Prime Bridge manages applications, CAQH profiles, Medicare and Medicaid enrollment and commercial payer contracting, then keeps tracking renewals so coverage never lapses.",
    image: "/images/services/provider-credentialing.svg",
    imageAlt: "Illustration of a provider ID card with a green verified check mark",
    longform: [
      "Provider credentialing verifies a clinician's licenses, education, training, work history and malpractice coverage before a payer agrees to reimburse their services. Payer enrollment then adds the provider to specific health plans and Medicare, and links them to your group and locations. Together these steps decide when a new provider can start billing, which makes them one of the most important parts of opening or growing a practice.",
      "Prime Bridge handles the full process: collecting documents, completing payer applications, maintaining CAQH ProView and PECOS records, following up on pending applications and tracking expiration dates for licenses, DEA registrations and board certifications. Keeping these records accurate and current is how practices avoid unpaid claims while a file sits in a payer queue.",
    ],
    includes: [
      { title: "Initial credentialing & enrollment", text: "Complete applications for Medicare, Medicaid and commercial payers." },
      { title: "CAQH profile setup & attestation", text: "Profile creation, document upload and quarterly re-attestation." },
      { title: "Payer follow-up", text: "Scheduled status checks so applications do not stall in a queue." },
      { title: "Re-credentialing & expiry tracking", text: "Alerts for licenses, DEA registrations and board certifications." },
      { title: "Group & location changes", text: "Updates for new locations, tax IDs, NPIs and added providers." },
    ],
    steps: [
      { title: "Document collection", text: "We gather licenses, certifications, malpractice and work history in one secure checklist." },
      { title: "Submission", text: "Applications go to each target payer with CAQH kept current." },
      { title: "Follow-up & effective dates", text: "We chase approvals, confirm effective dates and load providers into your billing system." },
    ],
    faqs: [
      { q: "How long does credentialing take?", a: "Plan on roughly 90 to 120 days for credentialing and contracting with many payers, though some are faster and some slower. Starting early is the best way to avoid a gap in revenue." },
      { q: "Do you manage CAQH?", a: "Yes. We create or update the profile, keep documents current and complete the required re-attestations." },
      { q: "Can you enroll new providers joining an existing group?", a: "Yes. We handle individual enrollment and link new providers to the group's contracts and billing setup." },
      { q: "What is the difference between CAQH and PECOS?", a: "CAQH ProView is a shared provider profile used by many commercial plans. PECOS is the Medicare enrollment system. Most providers need both kept accurate." },
    ],
    relatedPosts: ["caqh-vs-pecos-provider-credentialing", "how-long-does-provider-credentialing-take"],
  },
  {
    slug: "medical-coding-audit",
    name: "Medical Coding Audit",
    metaTitle: "Medical Coding Audit Services | Find Missed Revenue",
    metaDescription:
      "Independent medical coding audits that uncover undercoding, compliance risk and documentation gaps, with a clear corrective plan.",
    h1: "Medical Coding Audit Services",
    summary: "Documentation and coding reviews that reveal revenue leakage and compliance risk.",
    intro:
      "A coding audit compares what was documented with what was billed. Prime Bridge's certified auditors review a sample of encounters, identify undercoding, overcoding and missing documentation, and give your providers a practical plan to fix it.",
    image: "/images/services/medical-coding-audit.svg",
    imageAlt: "Illustration of a magnifying glass examining a coded medical record",
    longform: [
      "A medical coding audit is an independent review of encounters to confirm that the codes billed match the clinical documentation and current payer and CMS guidelines. Audits look for overcoding that creates compliance risk, undercoding that leaves revenue on the table, and documentation gaps that would fail a payer or government review.",
      "Prime Bridge's auditors use a structured, sample-based method. We score each encounter for accuracy, calculate the financial impact of errors, and deliver a written report with specific recommendations. Providers receive example-based coaching, so improvements show up in the next month's claims rather than in a binder on the shelf.",
    ],
    includes: [
      { title: "Retrospective claim review", text: "Sampled past claims checked for code accuracy and supporting documentation." },
      { title: "Pre-bill audits", text: "Spot checks before submission to prevent errors reaching the payer." },
      { title: "Provider education", text: "Specific, example-based feedback for each provider and coder." },
      { title: "Underpayment checks", text: "Payments compared against contracted fee schedules." },
      { title: "Compliance risk summary", text: "A written report highlighting areas of exposure and recommended fixes." },
    ],
    steps: [
      { title: "Scope & sample", text: "We agree on specialties, providers and a statistically sensible sample." },
      { title: "Audit", text: "Auditors compare notes, codes and payer rules encounter by encounter." },
      { title: "Report & coaching", text: "You receive findings, financial impact and a provider training session." },
    ],
    faqs: [
      { q: "How often should a practice audit its coding?", a: "Many practices audit annually at minimum, and again after adding providers, changing EHRs or seeing denial patterns shift." },
      { q: "Will an audit find money we are owed?", a: "Audits often surface undercoded encounters and underpayments as well as compliance risks. The result depends on your documentation and payer mix." },
    ],
    relatedPosts: ["top-reasons-claims-get-denied", "co-97-denial-code"],
  },
  {
    slug: "denial-management",
    name: "Denial Management & Appeals",
    metaTitle: "Denial Management & Claim Appeals Services",
    metaDescription:
      "Find the root cause of denials, appeal what is worth fighting for and prevent repeat rejections. Denial management by Prime Bridge.",
    h1: "Denial Management & Appeals",
    summary: "Root-cause analysis, timely appeals and prevention so denied claims turn into payments.",
    intro:
      "Resubmitting the same claim rarely fixes the real problem. Our team categorizes every denial, corrects what is wrong, files appeals before deadlines and feeds the lessons back into front-end billing to lower your future denial rate.",
    image: "/images/services/denial-management.svg",
    imageAlt: "Illustration of a rejected claim being turned into an approved payment through an appeal",
    longform: [
      "Claim denials are one of the largest sources of lost revenue for medical practices. A denial can come from eligibility problems, missing authorizations, coding errors, bundling edits, duplicate claims or missed filing deadlines. Many of these are preventable, but they only show up once the payer has rejected the claim.",
      "Prime Bridge's denial management service sorts every denial by reason code, payer and provider, separates the ones that are worth appealing from those that need a corrected claim or a write-off, and tracks each deadline. We then feed what we learn back into front-end checks, so the same denial is less likely to happen again. Monthly denial trends show whether the fixes are working.",
    ],
    includes: [
      { title: "Denial categorization", text: "Every denial grouped by reason code, payer, provider and CPT." },
      { title: "Corrected claims & appeals", text: "Clinical and administrative appeals prepared with supporting documents." },
      { title: "Deadline tracking", text: "Payer timely-filing and appeal windows monitored on every account." },
      { title: "Prevention plan", text: "Front-end edits and staff feedback that stop recurring denials." },
    ],
    steps: [
      { title: "Work the backlog", text: "We triage open denials by value and deadline." },
      { title: "Fix the cause", text: "Coding, eligibility or documentation issues are corrected at the source." },
      { title: "Track results", text: "Monthly denial-rate trends show whether the fixes are working." },
    ],
    faqs: [
      { q: "What does CO-97 mean?", a: "CO-97 means the payer considers the service included in the payment for another service already processed. It often relates to bundling or missing modifiers." },
      { q: "How long do I have to appeal?", a: "Appeal windows vary by payer and plan, often from 60 days to a year. Check your contract and file as early as possible." },
      { q: "What is a good denial rate for a medical practice?", a: "There is no single benchmark that fits every specialty, but practices typically aim to keep initial denials low and track them by payer and reason code. Trends over time matter more than one month's number." },
    ],
    relatedPosts: ["co-97-denial-code", "top-reasons-claims-get-denied", "timely-filing-limits-explained"],
  },
  {
    slug: "ar-recovery",
    name: "A/R Follow-Up & Recovery",
    metaTitle: "Accounts Receivable Follow-Up & A/R Recovery Services",
    metaDescription:
      "Reduce days in A/R and collect aged claims. Prime Bridge follows up on every outstanding balance until it is resolved.",
    h1: "Accounts Receivable Follow-Up & Recovery",
    summary: "Systematic follow-up on unpaid claims and aged balances to bring days in A/R down.",
    intro:
      "Unpaid claims quietly age out of reach. Prime Bridge works your A/R by payer and age bucket, contacts payers for status, corrects errors and escalates stuck claims so cash flow becomes predictable.",
    image: "/images/services/ar-recovery.svg",
    imageAlt: "Bar chart of practice collections rising over time with an upward arrow",
    longform: [
      "Accounts receivable (A/R) is the money your practice has billed but not yet collected. The longer a balance sits unpaid, the less likely it is to be collected at all. Tracking days in A/R, aging buckets and the reasons claims are unpaid is the foundation of a healthy revenue cycle.",
      "Prime Bridge follows up on outstanding claims by payer and age, documents every payer contact, corrects the errors that are holding claims back and escalates balances that are stuck. We also handle patient balances with clear statements and reminders, and we review older A/R when a practice changes billing company or software, so nothing is lost in the transition.",
    ],
    includes: [
      { title: "Aging report review", text: "Accounts prioritized by balance, payer and timely-filing risk." },
      { title: "Payer status follow-up", text: "Calls and portal checks with documented outcomes." },
      { title: "Legacy A/R cleanup", text: "Older balances reviewed after a billing company or software change." },
      { title: "Patient balance collection", text: "Statements and friendly reminders for patient responsibility." },
    ],
    steps: [
      { title: "Analyze", text: "We segment A/R by payer, age and reason unpaid." },
      { title: "Act", text: "Each account gets a specific next step and owner." },
      { title: "Report", text: "You see recoveries and days in A/R every month." },
    ],
    faqs: [
      { q: "Can you work old A/R from a previous biller?", a: "Yes, as long as timely-filing windows are still open. We assess recoverability first so you know what to expect." },
      { q: "What is a good days in A/R number?", a: "Many practices aim for a days-in-A/R figure well under 50, but the right target depends on specialty and payer mix. We set a realistic goal with you during onboarding." },
    ],
    relatedPosts: ["timely-filing-limits-explained", "top-reasons-claims-get-denied"],
  },
  {
    slug: "eligibility-verification",
    name: "Eligibility & Benefits Verification",
    metaTitle: "Insurance Eligibility & Benefits Verification Services",
    metaDescription:
      "Verify coverage before the visit to prevent front-end denials. Eligibility and benefits verification for medical practices.",
    h1: "Insurance Eligibility & Benefits Verification",
    summary: "Coverage, copays and prior-authorization needs confirmed before the patient arrives.",
    intro:
      "Many denials start at the front desk. Prime Bridge verifies active coverage, deductibles, copays and authorization requirements ahead of each appointment, so your team collects the right amount and claims are submitted to the right payer.",
    image: "/images/services/eligibility-verification.svg",
    imageAlt: "Shield with a check mark next to a calendar showing a scheduled appointment",
    longform: [
      "Insurance eligibility verification confirms that a patient has active coverage with the payer on the date of service. Benefits verification goes further and identifies copays, coinsurance, deductibles, out-of-network rules and whether a service needs prior authorization. Doing this before the visit prevents many of the denials that practices otherwise spend months appealing.",
      "Prime Bridge checks eligibility and benefits for upcoming appointments using payer portals and clearinghouse tools, records the results in your chart and flags problems to your front desk early enough to fix them. We also check coordination of benefits when a patient has more than one plan, so the claim goes to the correct primary payer first.",
    ],
    includes: [
      { title: "Pre-visit verification", text: "Active coverage and plan details confirmed before the appointment." },
      { title: "Benefit summaries", text: "Copay, coinsurance and deductible information noted in the chart." },
      { title: "Prior authorization support", text: "Requirements identified and requests tracked to approval." },
      { title: "Coordination of benefits", text: "Primary and secondary payer order checked and corrected." },
    ],
    steps: [
      { title: "Schedule feed", text: "We receive upcoming appointments from your system." },
      { title: "Verify", text: "Coverage is checked via payer portals and clearinghouse tools." },
      { title: "Flag issues", text: "Problems are sent to your front desk in time to resolve them." },
    ],
    faqs: [
      { q: "How far ahead do you verify?", a: "Typically a few days before each appointment, with same-day checks for add-ons and walk-ins." },
      { q: "Does eligibility verification prevent denials?", a: "It prevents many front-end denials, such as inactive coverage or missing authorizations. It does not stop every denial, which is why we also review claims after submission." },
    ],
    relatedPosts: ["top-reasons-claims-get-denied", "timely-filing-limits-explained"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
