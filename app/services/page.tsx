import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { Breadcrumbs, CtaBand } from "@/components/Layout";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medical Billing, Credentialing & RCM Services",
  description: "Explore Prime Bridge services: medical billing and coding, provider credentialing, coding audits, denial management, A/R recovery and eligibility verification.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", url: absoluteUrl("/") }, { name: "Services", url: absoluteUrl("/services") }])} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-4xl font-bold text-slate-900">Medical Billing & Revenue Cycle Services</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">Choose a single service or let us manage the whole revenue cycle for your practice.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="lift overflow-hidden rounded-xl border border-slate-200 hover:border-teal-600">
              <Image src={s.image} alt={s.imageAlt} width={800} height={500} unoptimized className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-slate-900">{s.name}</h2>
                <p className="mt-2 text-slate-600">{s.summary}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-teal-700">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
