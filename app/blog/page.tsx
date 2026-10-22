import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { Breadcrumbs } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Medical Billing & Credentialing Blog",
  description: "Practical guides on medical billing, denial codes, provider credentialing and revenue cycle management from the Prime Bridge team.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-4xl font-bold text-slate-900">Medical Billing Insights</h1>
        <div className="mt-8 space-y-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-xl border border-slate-200 p-6">
              <time dateTime={p.date} className="text-sm text-slate-500">{p.date} · {p.readMinutes} min read</time>
              <h2 className="mt-1 text-2xl font-semibold"><Link href={`/blog/${p.slug}`} className="hover:text-teal-700">{p.title}</Link></h2>
              <p className="mt-2 text-slate-600">{p.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
