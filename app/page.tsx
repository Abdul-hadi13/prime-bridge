import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { specialties } from "@/lib/specialties";
import { posts } from "@/lib/posts";
import { CtaBand, Faqs } from "@/components/Layout";
import { JsonLd, faqLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Prime Bridge | Medical Billing, Coding & Credentialing Services" },
  description:
    "Prime Bridge helps independent practices get paid faster with medical billing, coding, credentialing, denial management and A/R recovery. Book a free consultation.",
  alternates: { canonical: "/" },
};

const faqs = [
  { q: "What is medical billing outsourcing?", a: "Outsourcing means a specialized team handles your claims, coding review, payment posting and follow-up so your staff does not have to. You keep control of your patients and data while we manage the revenue cycle." },
  { q: "Which practices does Prime Bridge work with?", a: "We support independent and growing practices across many specialties, including primary care, urgent care, behavioral health, cardiology and more." },
  { q: "Will you work inside my EHR?", a: "Usually yes. We adapt to the EHR and practice management software you already use." },
  { q: "Is patient data kept secure?", a: "We follow HIPAA requirements for handling protected health information, including access controls and business associate agreements." },
];

const phases = [
  { title: "Before the claim", items: "Eligibility checks, charge entry, coding review and provider credentialing." },
  { title: "Submit & follow up", items: "Claim scrubbing, electronic submission, payment posting and A/R follow-up." },
  { title: "After the claim", items: "Denial appeals, underpayment checks and monthly financial reporting." },
];

const reasons = [
  ["Dedicated account manager", "One accountable person who knows your practice, not a ticket queue."],
  ["Transparent reporting", "Monthly dashboards covering collections, denial rate and days in A/R."],
  ["Compliance first", "HIPAA-aligned processes and coding reviewed against current payer rules."],
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <div aria-hidden className="blob -left-24 top-10 h-72 w-72 bg-teal-300" />
        <div aria-hidden className="blob -right-16 top-32 h-96 w-96 bg-sky-300" style={{ animationDelay: "-6s" }} />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
          <p className="hero-item text-sm font-semibold uppercase tracking-wide text-teal-700" style={{ animationDelay: "0.05s" }}>
            Accurate · Scalable · Compliant
          </p>
          <h1 className="hero-item mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl" style={{ animationDelay: "0.15s" }}>
            Medical Billing Services That Bridge Your Care to <span className="gradient-text">Your Revenue</span>
          </h1>
          <p className="hero-item mx-auto mt-5 max-w-2xl text-lg text-slate-600" style={{ animationDelay: "0.25s" }}>
            Prime Bridge handles billing, coding, credentialing and collections for independent practices, so you can stay focused on patient care.
          </p>
          <div className="hero-item mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.35s" }}>
            <Link href="/contact" className="pulse-ring press rounded-md bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800">Book a Free Consultation</Link>
            <Link href="/services" className="press rounded-md border border-slate-300 bg-white/60 px-6 py-3 font-semibold text-slate-800 backdrop-blur hover:bg-slate-50">Explore Services</Link>
          </div>
          <Image
            src="/images/hero-revenue-cycle.svg"
            alt="Four-step revenue cycle flow from patient visit and coding to claim submission and payment"
            width={960}
            height={400}
            unoptimized
            priority
            className="hero-item mx-auto mt-14 w-full max-w-4xl rounded-2xl shadow-lg"
            style={{ animationDelay: "0.45s" }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">Complete revenue cycle management</h2>
          <p className="mt-2 max-w-2xl text-slate-600">One partner for every step between the patient visit and the payment in your bank account.</p>
        </Reveal>
        <Reveal stagger className="mt-8 grid gap-6 md:grid-cols-3">
          {phases.map((p, i) => (
            <div key={p.title} className="lift rounded-xl border border-slate-200 p-6">
              <span className="text-sm font-semibold text-teal-700">Step {i + 1}</span>
              <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.items}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">Why independent practices outsource medical billing</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Payer policies, coding updates and clearinghouse rules change every year. Keeping up in-house takes staff time that is better spent with patients. An outsourced billing partner brings certified coders, claim scrubbing tools and denial specialists to every claim your practice submits.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-700 md:grid-cols-2">
            <li className="rounded-lg border border-slate-200 p-4"><span className="font-semibold text-teal-700">Fewer denials:</span> pre-bill checks catch coding and eligibility errors before the payer does.</li>
            <li className="rounded-lg border border-slate-200 p-4"><span className="font-semibold text-teal-700">Faster payment:</span> claims go out on schedule and follow-up starts early.</li>
            <li className="rounded-lg border border-slate-200 p-4"><span className="font-semibold text-teal-700">Clear reporting:</span> monthly reports on collections, denial rate and days in A/R.</li>
            <li className="rounded-lg border border-slate-200 p-4"><span className="font-semibold text-teal-700">Credentialing included:</span> provider enrollment and CAQH upkeep handled end to end.</li>
          </ul>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900">Our services</h2>
          </Reveal>
          <Reveal stagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="lift overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-teal-600">
                <Image src={s.image} alt={s.imageAlt} width={800} height={500} unoptimized className="aspect-[16/10] w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.summary}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-teal-700">Learn more →</span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">Medical billing for your specialty</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Every specialty has its own coding rules and payer quirks. We build workflows around yours.</p>
        </Reveal>
        <Reveal stagger className="mt-6 flex flex-wrap gap-2">
          {specialties.slice(0, 12).map((s) => (
            <Link key={s.slug} href={`/specialties/${s.slug}`} className="press rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:border-teal-600 hover:text-teal-700">{s.name}</Link>
          ))}
          <Link href="/specialties" className="press rounded-full bg-teal-700 px-4 py-1.5 text-sm font-semibold text-white">See all specialties</Link>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900">Why practices choose Prime Bridge</h2>
          </Reveal>
          <Reveal stagger as="ul" className="mt-8 grid gap-6 md:grid-cols-3">
            {reasons.map(([t, d]) => (
              <li key={t} className="lift rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-3xl font-bold text-slate-900">Latest from the blog</h2>
        </Reveal>
        <Reveal stagger className="mt-6 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="lift rounded-xl border border-slate-200 p-5 hover:border-teal-600">
              <time dateTime={p.date} className="text-xs text-slate-500">{p.date}</time>
              <h3 className="mt-1 font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
            </Link>
          ))}
        </Reveal>
      </section>

      <Reveal>
        <Faqs faqs={faqs} />
      </Reveal>
      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
