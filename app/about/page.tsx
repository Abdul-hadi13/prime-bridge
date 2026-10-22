import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs, CtaBand } from "@/components/Layout";

export const metadata: Metadata = {
  title: "About Prime Bridge",
  description: "Prime Bridge is a medical billing and revenue cycle partner for independent practices. Learn about our mission, values and approach.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Accuracy", "Clean claims and correct codes, checked before submission."],
  ["Transparency", "You see every report, rate and result. No surprise fees."],
  ["Compliance", "HIPAA-aware workflows and coding that stands up to audits."],
  ["Partnership", "A named team that treats your revenue like its own."],
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-4xl font-bold text-slate-900">About Prime Bridge</h1>
        <p className="mt-4 text-lg text-slate-600">
          We started Prime Bridge because good clinicians should not lose revenue to paperwork. We connect the care you deliver to the payment you earn through accurate billing, coding, credentialing and follow-up.
        </p>
        <Image src="/images/about-bridge.svg" alt="Illustration of a clinic connected to revenue by a bridge, with coins on the far side" width={800} height={500} unoptimized className="mt-8 w-full rounded-2xl shadow-md" />
        <h2 className="mt-10 text-2xl font-bold">How we work with your practice</h2>
        <p className="mt-2 text-slate-600">
          Every engagement starts with a review of your specialty, payer mix, software and current results. We then set up workflows for charge entry, claim submission, payment posting and denial follow-up, and report on them every month. Our medical billing, credentialing and coding audit teams work from the same records, so a problem found in one area is fixed at its source.
        </p>
        <h2 className="mt-10 text-2xl font-bold">Our mission</h2>
        <p className="mt-2 text-slate-600">To protect the financial health of independent practices through precise, transparent and compliant revenue cycle management.</p>
        <h2 className="mt-10 text-2xl font-bold">Our vision</h2>
        <p className="mt-2 text-slate-600">A healthcare system where every practice, large or small, can focus on patients and trust that its billing is in expert hands.</p>
        <h2 className="mt-10 text-2xl font-bold">Our values</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {values.map(([t, d]) => (
            <li key={t} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
