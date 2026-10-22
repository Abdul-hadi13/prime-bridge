import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { getPost } from "@/lib/posts";
import { Breadcrumbs, CtaBand, Faqs } from "@/components/Layout";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: absoluteUrl(`/services/${s.slug}`) },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);
  const related = s.relatedPosts.map(getPost).filter((p) => p !== undefined);

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", url: absoluteUrl("/") }, { name: "Services", url: absoluteUrl("/services") }, { name: s.name, url: absoluteUrl(`/services/${s.slug}`) }])} />
      <JsonLd data={faqLd(s.faqs)} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.metaDescription, image: absoluteUrl(s.image), provider: { "@type": "Organization", name: site.name, url: site.url }, areaServed: "US", url: absoluteUrl(`/services/${s.slug}`) }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: s.name }]} />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">{s.h1}</h1>
          <p className="mt-4 text-lg text-slate-600">{s.intro}</p>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800">Book a Free Consultation</Link>
        </div>
        <Image src={s.image} alt={s.imageAlt} width={800} height={500} unoptimized priority className="w-full rounded-2xl shadow-md" />
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-bold text-slate-900">About {s.name.toLowerCase()}</h2>
        {s.longform.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-slate-700">{p}</p>
        ))}
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4">
        <h2 className="text-2xl font-bold text-slate-900">What&apos;s included</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {s.includes.map((i) => (
            <li key={i.title} className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{i.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-12 max-w-4xl px-4">
        <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
        <ol className="mt-4 space-y-4">
          {s.steps.map((st, i) => (
            <li key={st.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="font-semibold">{st.title}</h3>
                <p className="text-sm text-slate-600">{st.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Faqs faqs={s.faqs} />

      {related.length > 0 && (
        <section className="mx-auto mt-12 max-w-4xl px-4">
          <h2 className="text-xl font-bold">Related reading</h2>
          <ul className="mt-3 space-y-2">
            {related.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="font-medium text-teal-700 hover:underline">{p.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mx-auto mt-12 max-w-4xl px-4">
        <h2 className="text-xl font-bold">Related services</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}><Link href={`/services/${o.slug}`} className="rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:border-teal-600 hover:text-teal-700">{o.name}</Link></li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
