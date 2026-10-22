import type { Metadata } from "next";
import { Breadcrumbs, Faqs } from "@/components/Layout";
import { JsonLd, faqLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Prime Bridge | Free Billing Consultation",
  description: "Contact Prime Bridge for a free medical billing consultation. Call, email or send a message and we will reply within one business day.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  { q: "How quickly will I hear back?", a: "We reply to messages within one business day." },
  { q: "Is the consultation really free?", a: "Yes. We review your current billing results and tell you where we can help, with no obligation." },
  { q: "Is this form for urgent medical issues?", a: "No. Prime Bridge is a billing company and cannot provide medical care. In an emergency, call 911." },
];

const field = "mt-1 w-full rounded-md border border-slate-300 px-3 py-2";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">Book a Free Consultation</h1>
          <p className="mt-3 text-slate-600">Tell us about your practice and what you need. We will respond within one business day.</p>
          <dl className="mt-6 space-y-3 text-slate-700">
            <div><dt className="font-semibold">Phone</dt><dd><a href={site.phoneHref} className="text-teal-700">{site.phone}</a></dd></div>
            <div><dt className="font-semibold">Email</dt><dd><a href={`mailto:${site.email}`} className="text-teal-700">{site.email}</a></dd></div>
            <div><dt className="font-semibold">Hours</dt><dd>{site.hours}</dd></div>
          </dl>
        </div>
        <form action={`mailto:${site.email}`} method="post" encType="text/plain" className="space-y-4 rounded-xl border border-slate-200 p-6">
          <label className="block text-sm font-medium">Name
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block text-sm font-medium">Email
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <label className="block text-sm font-medium">Service needed
            <select name="service" className={field}>
              <option>Medical billing</option>
              <option>Credentialing</option>
              <option>Coding audit</option>
              <option>Denial management</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block text-sm font-medium">Message
            <textarea name="message" rows={4} className={field} />
          </label>
          <button type="submit" className="w-full rounded-md bg-teal-700 px-4 py-3 font-semibold text-white hover:bg-teal-800">Send</button>
          <p className="text-xs text-slate-500">Please do not include patient health information in this form.</p>
        </form>
      </section>
      <Faqs faqs={faqs} />
    </>
  );
}
