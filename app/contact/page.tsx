import type { Metadata } from "next";
import { Breadcrumbs, Faqs } from "@/components/Layout";
import { JsonLd, faqLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

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

const channels = [
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "Hours",
    value: site.hours,
    href: undefined,
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqLd(faqs)} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Contact us
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Book a Free Consultation</h1>
          <p className="mt-4 max-w-md text-lg text-slate-600">
            Tell us about your practice and what you need. We will review your billing and tell you where revenue may be slipping.
          </p>

          <ul className="mt-8 space-y-3">
            {channels.map((c) => (
              <li key={c.label} className="lift flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={c.icon} />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="font-medium text-slate-900 hover:text-teal-700">{c.value}</a>
                  ) : (
                    <span className="font-medium text-slate-900">{c.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </section>
      <Faqs faqs={faqs} />
    </>
  );
}
