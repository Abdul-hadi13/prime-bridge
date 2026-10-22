import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSpecialty, specialties } from "@/lib/specialties";
import { services } from "@/lib/services";
import { Breadcrumbs, CtaBand, Faqs } from "@/components/Layout";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/JsonLd";
import { absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpecialty(slug);
  if (!s) return {};
  const title = `${s.name} Medical Billing Services`;
  const description = `${s.name} billing and coding built around ${s.challenge}. Prime Bridge helps ${s.name.toLowerCase()} practices cut denials and get paid faster.`;
  return { title, description, alternates: { canonical: `/specialties/${s.slug}` }, openGraph: { title, description, url: absoluteUrl(`/specialties/${s.slug}`) } };
}

export default async function SpecialtyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSpecialty(slug);
  if (!s) notFound();
  const lower = s.name.toLowerCase();
  const faqs = [
    { q: `Why do ${lower} practices outsource billing?`, a: `${s.name} billing involves ${s.challenge}. A team that works these rules every day can reduce errors and free your staff for patient care.` },
    { q: `Which codes do you handle for ${lower}?`, a: `Our team works with ${s.codes}, and keeps up with payer policy changes that affect them.` },
    { q: "Can you work in our existing software?", a: "Yes. We normally work inside the EHR or practice management system you already use." },
    { q: `How quickly can Prime Bridge start billing for a ${lower} practice?`, a: "Most practices are live within a few weeks. Timing depends on system access and on any payer enrollment still in progress." },
  ];
  const related = specialties.filter((x) => x.slug !== s.slug).slice(0, 6);

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", url: absoluteUrl("/") }, { name: "Specialties", url: absoluteUrl("/specialties") }, { name: s.name, url: absoluteUrl(`/specialties/${s.slug}`) }])} />
      <JsonLd data={faqLd(faqs)} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Specialties", href: "/specialties" }, { name: s.name }]} />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-4xl font-bold text-slate-900">{s.name} Medical Billing Services</h1>
        <p className="mt-4 text-lg text-slate-600">{s.overview}</p>
        <p className="mt-4 leading-relaxed text-slate-700">
          {s.name} practices face {s.challenge}. Prime Bridge builds your billing workflow around those realities so claims go out clean and payments come back faster.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded-md bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800">Book a Free Consultation</Link>

        <h2 className="mt-12 text-2xl font-bold">Coding areas we manage</h2>
        <p className="mt-2 text-slate-600">{s.name} billing typically includes {s.codes}.</p>

        <h2 className="mt-10 text-2xl font-bold">What we do for {lower} practices</h2>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {services.map((sv) => (
            <li key={sv.slug}>
              <Link href={`/services/${sv.slug}`} className="block rounded-lg border border-slate-200 p-4 hover:border-teal-600">
                <span className="font-semibold">{sv.name}</span>
                <span className="mt-1 block text-sm text-slate-600">{sv.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Faqs faqs={faqs} />
      <section className="mx-auto mt-12 max-w-4xl px-4">
        <h2 className="text-xl font-bold">Other specialties</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {related.map((o) => (
            <li key={o.slug}><Link href={`/specialties/${o.slug}`} className="rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:border-teal-600 hover:text-teal-700">{o.name}</Link></li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
