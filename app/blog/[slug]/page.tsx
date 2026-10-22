import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import Link from "next/link";
import { services } from "@/lib/services";
import { Breadcrumbs, CtaBand } from "@/components/Layout";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, url: absoluteUrl(`/blog/${p.slug}`), publishedTime: p.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", url: absoluteUrl("/") }, { name: "Blog", url: absoluteUrl("/blog") }, { name: p.title, url: absoluteUrl(`/blog/${p.slug}`) }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.description, datePublished: p.date, dateModified: p.date, mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`), author: { "@type": "Organization", name: site.name }, publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } } }} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: p.title }]} />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-4xl font-bold text-slate-900">{p.title}</h1>
        <p className="mt-2 text-sm text-slate-500"><time dateTime={p.date}>{p.date}</time> · {p.readMinutes} min read</p>
        {p.sections.map((s) => (
          <section key={s.heading} className="mt-8">
            <h2 className="text-2xl font-semibold">{s.heading}</h2>
            {s.paragraphs.map((t, i) => (
              <p key={i} className="mt-3 leading-relaxed text-slate-700">{t}</p>
            ))}
          </section>
        ))}
      </article>
      <section className="mx-auto max-w-3xl px-4">
        <h2 className="text-xl font-bold">Related services</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {services.map((sv) => (
            <li key={sv.slug}><Link href={`/services/${sv.slug}`} className="rounded-full border border-slate-300 px-4 py-1.5 text-sm hover:border-teal-600 hover:text-teal-700">{sv.name}</Link></li>
          ))}
        </ul>
      </section>
      <CtaBand title="Need help with credentialing or denials?" />
    </>
  );
}
