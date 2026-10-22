export type Specialty = {
  slug: string;
  name: string;
  challenge: string;
  codes: string;
  overview: string; // unique intro copy for the specialty landing page
};

// Each entry feeds a unique specialty landing page (/specialties/[slug]).
export const specialties: Specialty[] = [
  {
    slug: "family-medicine",
    name: "Family Medicine",
    challenge: "high visit volume, preventive-care coding and chronic care management billing",
    codes: "E/M levels, preventive visit codes, care management codes and immunizations",
    overview: "Family medicine practices see patients of every age in a single day, so claims mix preventive visits, chronic disease management and acute problems. Prime Bridge codes each encounter to the documentation, applies the right preventive and care-management codes, and tracks the payer rules that change by age group.",
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    challenge: "complex multi-diagnosis visits and risk-adjusted documentation",
    codes: "E/M levels, HCC capture, transitional care and chronic care management",
    overview: "Internal medicine visits often involve several chronic conditions addressed in one encounter, which makes accurate E/M leveling and risk-adjustment documentation essential. Our coders review each note for complete diagnosis capture, while staying within payer and CMS guidelines for risk adjustment.",
  },
  {
    slug: "primary-care",
    name: "Primary Care",
    challenge: "wellness visits, screenings and coordination across payers",
    codes: "annual wellness visits, screening codes, same-day procedure modifiers",
    overview: "Primary care is the front door of the health system, and its billing covers wellness visits, screenings, vaccines and same-day procedures across many payers. Prime Bridge keeps those claims clean by matching each service to its own code and modifier, and by following up on the payers that require extra documentation.",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    challenge: "vaccine billing, well-child schedules and Medicaid/CHIP rules",
    codes: "preventive visits, vaccine administration, developmental screening codes",
    overview: "Pediatric billing follows well-child schedules, vaccine administration rules and Medicaid and CHIP requirements that vary by state. Prime Bridge codes age-based preventive visits, vaccine products and administration correctly, and checks claims against the screening and vaccine rules that payers enforce.",
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    challenge: "diagnostic testing, in-office procedures and prior authorizations",
    codes: "EKG, echo, stress testing, device monitoring and global/professional splits",
    overview: "Cardiology practices bill for high-value diagnostic tests and procedures, many of which require prior authorization and careful modifier use. Our team verifies authorization before testing, applies global and professional component rules correctly, and tracks device-monitoring codes that are often denied when documentation is incomplete.",
  },
  {
    slug: "urgent-care",
    name: "Urgent Care",
    challenge: "walk-in volume, mixed payers and same-day procedure billing",
    codes: "E/M with procedures, X-ray, lab, injection and supply codes",
    overview: "Urgent care clinics handle high walk-in volume, mixed payers and many same-day procedures such as X-rays, lab tests and injections. Prime Bridge captures each service on the visit, bills procedures separately from the E/M code where the rules allow, and keeps claims moving so cash does not wait on a visit backlog.",
  },
  {
    slug: "behavioral-health",
    name: "Behavioral Health",
    challenge: "time-based codes, telehealth rules and authorization limits",
    codes: "psychotherapy time codes, E/M add-ons, group therapy and telehealth modifiers",
    overview: "Behavioral health billing depends on documented session time, telehealth rules and payer authorization limits on visit counts. Prime Bridge checks time against the psychotherapy code ranges, applies telehealth modifiers and place-of-service codes correctly, and tracks authorization usage so sessions are not denied after the limit is reached.",
  },
  {
    slug: "psychiatry",
    name: "Psychiatry",
    challenge: "medication management documentation and add-on psychotherapy billing",
    codes: "E/M with psychotherapy add-ons, evaluation codes and telepsychiatry modifiers",
    overview: "Psychiatry practices combine medication management with psychotherapy, which makes the documentation of each service critical. Our team supports correct psychotherapy add-on billing, evaluation codes and telepsychiatry modifiers, so each part of the visit is paid as documented.",
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    challenge: "global periods, DME and surgical modifiers",
    codes: "fracture care, injections, surgical global package and assistant modifiers",
    overview: "Orthopedic billing involves surgical global periods, fracture care, injections and durable medical equipment, each with its own modifier rules. Prime Bridge tracks global periods so follow-up visits are not billed in error, and applies modifiers for assistants and staged procedures.",
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    challenge: "cosmetic versus medical separation and procedure documentation",
    codes: "biopsies, excisions, destruction codes, Mohs and modifier 25 usage",
    overview: "Dermatology practices move between medical and cosmetic care in the same office, and payers scrutinize procedure documentation closely. Prime Bridge separates medically necessary services from cosmetic ones, codes biopsies and excisions by size and site, and uses modifier 25 only when the documentation supports a separate E/M visit.",
  },
  {
    slug: "podiatry",
    name: "Podiatry",
    challenge: "routine foot care coverage rules and Q-modifiers",
    codes: "debridement, nail care with class findings and orthotic billing",
    overview: "Podiatry billing depends on whether routine foot care meets a payer's coverage criteria, such as documented class findings for nail care. Prime Bridge checks those criteria before billing, applies Q-modifiers where required, and manages orthotic billing with the documentation payers expect.",
  },
  {
    slug: "neurology",
    name: "Neurology",
    challenge: "time-based testing and high-cost diagnostic authorizations",
    codes: "EEG, EMG/NCS, botulinum toxin and neuro-imaging coordination",
    overview: "Neurology practices perform high-cost diagnostic tests such as EEG and EMG/NCS, and administer treatments like botulinum toxin that need careful drug and supply billing. Our team confirms authorizations before testing and checks that each test's documentation supports the medical necessity the payer requires.",
  },
  {
    slug: "radiology",
    name: "Radiology",
    challenge: "global versus professional/technical component billing",
    codes: "imaging CPT with -26/-TC modifiers and contrast supply codes",
    overview: "Radiology billing splits every imaging study into professional and technical components, and the wrong split is a common source of denials. Prime Bridge applies the -26 and -TC modifiers correctly, bills contrast supplies separately where allowed, and reconciles reads against orders.",
  },
  {
    slug: "laboratory",
    name: "Laboratory",
    challenge: "panel unbundling edits and medical-necessity rules",
    codes: "CLIA-based lab codes, panels, molecular testing and LCD/NCD coverage",
    overview: "Laboratory claims are shaped by panel unbundling edits, CLIA requirements and medical-necessity rules set by Medicare LCDs and NCDs. Prime Bridge checks test orders against diagnosis codes and coverage policies, and reviews unbundling edits before claims are submitted.",
  },
  {
    slug: "wound-care",
    name: "Wound Care",
    challenge: "skin substitute coverage and documentation of conservative care",
    codes: "debridement, skin substitutes, negative pressure therapy and hyperbaric coding",
    overview: "Wound care billing is one of the most documentation-heavy areas in medicine, with strict payer rules for skin substitutes and proof of conservative care. Prime Bridge tracks wound measurements and treatment history against coverage criteria, so claims for debridement, skin substitutes and negative pressure therapy are supported.",
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    challenge: "8-minute rule units, visit limits and authorization renewals",
    codes: "timed and untimed therapy codes, GP modifiers and KX threshold tracking",
    overview: "Physical therapy claims are billed in timed units, with visit limits, plan-of-care rules and authorization renewals that vary by payer. Prime Bridge converts minutes to units correctly, applies GP modifiers, and tracks KX threshold use and authorization renewals before they lapse.",
  },
  {
    slug: "obgyn",
    name: "OB/GYN",
    challenge: "global obstetric packages and split-care billing",
    codes: "global OB, delivery codes, prenatal screening and gynecologic procedures",
    overview: "Obstetric billing uses global packages that cover prenatal, delivery and postpartum care, and split-care arrangements add complexity when more than one provider is involved. Prime Bridge tracks prenatal visits within the global package, bills delivery and gynecologic procedures separately where the rules allow, and documents the split-care arrangement.",
  },
  {
    slug: "telemedicine",
    name: "Telemedicine",
    challenge: "payer-specific telehealth modifiers and place-of-service codes",
    codes: "telehealth E/M, modifiers 95/GT, POS 02/10 and remote monitoring codes",
    overview: "Telehealth billing changes from payer to payer, with different modifiers, place-of-service codes and rules for audio-only visits. Prime Bridge applies the telehealth modifiers and place-of-service codes each payer requires, and checks remote monitoring claims against the documentation they need.",
  },
];

export function getSpecialty(slug: string) {
  return specialties.find((s) => s.slug === slug);
}
