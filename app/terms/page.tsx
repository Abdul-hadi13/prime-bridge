import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Prime Bridge website.",
  alternates: { canonical: "/terms" },
};

// TODO: have counsel review before launch.
export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Terms of Use</h1>
      <p className="mt-4 text-slate-600">This website is provided by {site.legalName} for general information about our services. Content is not legal, medical or coding advice, and payer rules change frequently.</p>
      <h2 className="mt-8 text-xl font-semibold">No guarantees</h2>
      <p className="mt-2 text-slate-600">Results depend on each practice&apos;s documentation, payer mix and processes. Any engagement is governed by a written services agreement.</p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-600"><a href={`mailto:${site.email}`} className="text-teal-700">{site.email}</a></p>
    </article>
  );
}
