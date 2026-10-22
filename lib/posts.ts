export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "caqh-vs-pecos-provider-credentialing",
    title: "CAQH vs PECOS: What's the Difference for Provider Credentialing?",
    description:
      "CAQH and PECOS are both part of getting a provider paid, but they serve different payers. Here is what each one does and when you need it.",
    date: "2026-10-14",
    readMinutes: 4,
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "CAQH ProView is a shared online profile that many commercial health plans use to pull a provider's credentialing information. PECOS, the Provider Enrollment, Chain and Ownership System, is the system Medicare uses to enroll providers and keep their enrollment records current.",
          "In practice, most providers need both: PECOS for Medicare, and CAQH for commercial payers that rely on it.",
        ],
      },
      {
        heading: "What CAQH does",
        paragraphs: [
          "A provider enters education, training, licensure, work history, malpractice coverage and practice locations once, then authorizes health plans to view it. The profile must be re-attested on a regular schedule, and plans may stop processing applications if it is out of date.",
        ],
      },
      {
        heading: "What PECOS does",
        paragraphs: [
          "PECOS is where Medicare enrollment applications are submitted and maintained, including reassignment of benefits to a group and changes to practice location. An accurate PECOS record is also what allows ordering and referring physicians to be recognized on Medicare claims.",
        ],
      },
      {
        heading: "How to avoid delays",
        paragraphs: [
          "Keep both records identical on practice address, tax ID and NPI. Mismatches are one of the most common reasons an application sits in review. Prime Bridge's credentialing team monitors both systems and tracks every re-attestation date for you.",
        ],
      },
    ],
  },
  {
    slug: "how-long-does-provider-credentialing-take",
    title: "How Long Does Provider Credentialing Take in 2026?",
    description:
      "A realistic timeline for provider credentialing and payer enrollment, what slows it down and how to plan so you do not lose revenue.",
    date: "2026-09-25",
    readMinutes: 4,
    sections: [
      {
        heading: "Plan for three to four months",
        paragraphs: [
          "For planning purposes, allow roughly 90 to 120 days for credentialing, contracting and payer setup. Some plans finish sooner and others take longer, especially when applications are incomplete.",
        ],
      },
      {
        heading: "What slows applications down",
        paragraphs: [
          "Expired licenses or malpractice certificates, gaps in work history without explanation, an out-of-date CAQH attestation, and mismatched demographic data are the usual culprits. Payers rarely call to tell you; the file just waits.",
        ],
      },
      {
        heading: "How to protect cash flow",
        paragraphs: [
          "Start the process before the provider's start date, ask each payer about retroactive effective dates, and follow up on a fixed schedule. A credentialing tracker that records submission dates, contacts and next actions keeps every application moving.",
        ],
      },
    ],
  },
  {
    slug: "co-97-denial-code",
    title: "CO-97 Denial Code: Meaning, Causes and How to Fix It",
    description:
      "CO-97 means the payer considers a service included in the payment for another service. Learn the common causes and how to appeal or correct the claim.",
    date: "2026-09-24",
    readMinutes: 3,
    sections: [
      {
        heading: "What CO-97 means",
        paragraphs: [
          "CO-97 is a claim adjustment reason code indicating the benefit for this service is included in the payment or allowance for another service or procedure that has already been adjudicated. The CO group code means the adjustment is a contractual obligation, so the patient generally cannot be billed for it.",
        ],
      },
      {
        heading: "Common causes",
        paragraphs: [
          "Bundling edits such as NCCI pairs, a missing modifier on a separately identifiable service, services billed on different claims that the payer links together, and billing a component of a global package are the most frequent causes.",
        ],
      },
      {
        heading: "How to fix it",
        paragraphs: [
          "Review the documentation to confirm the service was distinct. If it was, submit a corrected claim with the appropriate modifier, such as 25 or 59 where the payer's rules allow, or file an appeal with the notes attached. If the service truly was bundled, write off the contractual adjustment and fix the charge-entry rule so it does not repeat.",
        ],
      },
    ],
  },
  {
    slug: "top-reasons-claims-get-denied",
    title: "Top Reasons Medical Claims Get Denied (and How to Prevent Them)",
    description:
      "The most common reasons payers deny medical claims, from eligibility errors to missing authorizations, and the front-end checks that stop them.",
    date: "2026-10-18",
    readMinutes: 5,
    sections: [
      {
        heading: "Why prevention beats appeals",
        paragraphs: [
          "Most denied claims are never paid in full, even after an appeal. Appeals take staff time, delay cash and often end in a partial recovery. Preventing the denial in the first place is faster and cheaper, which is why the most effective denial programs start before the claim is created.",
        ],
      },
      {
        heading: "Eligibility and coverage problems",
        paragraphs: [
          "Claims sent for patients with inactive coverage, the wrong payer, or an out-of-date plan are denied at a high rate. Verifying eligibility and benefits before each visit catches most of these issues while the patient is still in the office.",
        ],
      },
      {
        heading: "Demographic and identifier mismatches",
        paragraphs: [
          "A misspelled name, a date of birth that does not match the payer's record, or a provider NPI that is not linked to the billing group can all cause automatic rejections. Standardizing registration and checking identifiers at scheduling reduces these errors sharply.",
        ],
      },
      {
        heading: "Coding and bundling errors",
        paragraphs: [
          "Codes that do not match the documentation, unbundled services that should be billed together, and missing modifiers trigger payer edits. Regular coding audits and pre-bill review are the most reliable ways to catch them before submission.",
        ],
      },
      {
        heading: "Missing authorizations and referrals",
        paragraphs: [
          "Many commercial and Medicaid plans require prior authorization for imaging, procedures, therapy visits and some medications. Confirming requirements during verification and tracking each request to approval keeps these claims from being denied for lack of paperwork.",
        ],
      },
      {
        heading: "Timely filing and duplicate claims",
        paragraphs: [
          "A claim submitted after the payer's filing deadline will be denied, and resubmitting a claim that has already been processed can create duplicate denials. Track submission dates and keep proof of every submission so you can respond quickly when a payer disputes either one.",
        ],
      },
    ],
  },
  {
    slug: "medical-billing-outsourcing-cost",
    title: "How Much Does Medical Billing Outsourcing Cost?",
    description:
      "A plain-language guide to medical billing company pricing models, what drives the cost, and how to compare proposals so you know what you are paying for.",
    date: "2026-10-20",
    readMinutes: 5,
    sections: [
      {
        heading: "The most common pricing models",
        paragraphs: [
          "Medical billing companies usually charge in one of three ways. A percentage of collections is the most common, where the fee is a share of the money actually received. A flat monthly fee is more predictable for practices with stable volume. Some companies combine the two, or charge per claim for smaller practices.",
          "Percentage rates are often quoted somewhere between roughly 4% and 9% of collections, but the right figure depends on specialty, claim volume and the services included.",
        ],
      },
      {
        heading: "What drives the price",
        paragraphs: [
          "Specialty complexity matters: cardiology, orthopedics and behavioral health usually need more coding and authorization work than a general primary care clinic. Other factors include your monthly claim volume, payer mix, the number of providers, EHR integration needs and whether the company handles credentialing, denial appeals and A/R recovery or only claim submission.",
        ],
      },
      {
        heading: "How to compare proposals fairly",
        paragraphs: [
          "Two quotes with the same percentage can cost very different amounts once you know what is included. Ask whether denial appeals, payment posting, patient statements, eligibility checks and monthly reporting are part of the price. Ask who your contact is, how quickly claims are submitted, and how they handle timely filing deadlines.",
          "Ask for references from practices in your specialty and a sample monthly report. The cheapest rate is not the best value if denials rise or claims are submitted late.",
        ],
      },
      {
        heading: "Weigh the cost against what you recover",
        paragraphs: [
          "The right comparison is not the fee alone, but the fee against what the practice collects and what it keeps from the revenue it would otherwise lose. Include the staff hours you save, the denials you prevent and the cash flow improvements. Prime Bridge provides a written quote after a free consultation so you can make that comparison with real numbers.",
        ],
      },
    ],
  },
  {
    slug: "timely-filing-limits-explained",
    title: "Timely Filing Limits: What Practices Need to Know",
    description:
      "Timely filing deadlines decide whether a claim can be paid at all. Learn how they differ by payer, how to track them and how to prove a claim was filed on time.",
    date: "2026-10-16",
    readMinutes: 4,
    sections: [
      {
        heading: "What timely filing means",
        paragraphs: [
          "Timely filing is the deadline by which a provider must submit a claim to a payer. A claim received after the deadline is usually denied, and in most cases the patient cannot be billed for it. Because the rule is strict, a missed deadline is one of the few denials that is almost always a permanent loss.",
        ],
      },
      {
        heading: "Deadlines vary by payer",
        paragraphs: [
          "Medicare Part B generally requires claims to be filed within 12 months of the date of service. Many commercial and Medicaid plans use much shorter windows, commonly somewhere in the range of 90 to 180 days, though the exact limit is set in each contract. Check the deadline for every payer you bill, and note any different rules for corrected claims and appeals.",
        ],
      },
      {
        heading: "How to track deadlines",
        paragraphs: [
          "Calculate the deadline from the date of service, not the date the claim was created, and build it into your practice management system or billing tracker. Schedule reviews of claims that are close to their deadline, especially claims that were held back for missing information.",
        ],
      },
      {
        heading: "Keep proof of timely submission",
        paragraphs: [
          "If a payer says a claim arrived late, proof of timely filing is what saves it. Keep clearinghouse acceptance reports, electronic acknowledgments and payer confirmation numbers, and save the submission date with each claim. For paper claims, keep certified mail receipts or payer-stamped copies.",
        ],
      },
      {
        heading: "Get help before the deadline passes",
        paragraphs: [
          "Prime Bridge monitors timely-filing windows on every account and reviews aging claims each month, so the work that needs to happen before a deadline does not get missed. Our A/R recovery team can also assess old balances to see which ones are still recoverable.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
