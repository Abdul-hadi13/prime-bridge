import type { Metadata } from "next";
import Link from "next/link";
import { specialties } from "@/lib/specialties";
import { Breadcrumbs, CtaBand } from "@/components/Layout";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Specialty Medical Billing Services",
  description: "Medical billing and coding tailored to your specialty, from family medicine and cardiology to behavioral health and urgent care.",
  alternates: { canonical: "/specialties" },
};

export default function SpecialtiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", url: absoluteUrl("/") }, { name: "Specialties", url: absoluteUrl("/specialties") }])} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Specialties" }]} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl font-bold text-slate-900">Specialty Medical Billing Services</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">Specialty-specific coding rules, modifiers and payer policies are built into our workflows.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <Link key={s.slug} href={`/specialties/${s.slug}`} className="rounded-xl border border-slate-200 p-5 hover:border-teal-600 hover:shadow-md">
              <h2 className="font-semibold text-slate-900">{s.name} Billing</h2>
              <p className="mt-1 text-sm text-slate-600">Handling {s.challenge}.</p>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-slate-600">Don&apos;t see your specialty? <Link href="/contact" className="font-semibold text-teal-700 underline">Contact us</Link> and we will tell you how we can help.</p>
      </section>
      <CtaBand />
    </>
  );
}
