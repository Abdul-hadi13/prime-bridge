import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-teal-700">
          Prime<span className="text-slate-900">Bridge</span>
        </Link>
        <nav aria-label="Main" className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-teal-700">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-md bg-teal-700 px-3 py-2 text-xs font-semibold text-white hover:bg-teal-800 sm:px-4 sm:text-sm"
          >
            Free Consultation
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm">{site.tagline}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-2 space-y-1 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="inline-flex min-h-6 items-center hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/about" className="inline-flex min-h-6 items-center hover:text-white">About</Link></li>
            <li><Link href="/specialties" className="inline-flex min-h-6 items-center hover:text-white">Specialties</Link></li>
            <li><Link href="/blog" className="inline-flex min-h-6 items-center hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="inline-flex min-h-6 items-center hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="inline-flex min-h-6 items-center hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="inline-flex min-h-6 items-center hover:text-white">Terms</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2"><a href={site.phoneHref} className="inline-flex min-h-6 items-center hover:text-white">{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`} className="inline-flex min-h-6 items-center hover:text-white">{site.email}</a></p>
          <p className="mt-2">{site.hours}</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}

export function CtaBand({ title = "Ready to get paid faster?" }: { title?: string }) {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4">
      <div className="rounded-2xl bg-teal-700 px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mx-auto mt-2 max-w-xl text-teal-50">
          Tell us about your practice and we will show you where revenue is slipping away. No obligation.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-semibold text-teal-800 hover:bg-teal-50">
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-slate-500">
      <ol className="flex flex-wrap gap-2">
        {items.map((it, i) => (
          <li key={it.name} className="flex gap-2">
            {it.href ? <Link href={it.href} className="hover:text-teal-700">{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mx-auto mt-20 max-w-3xl px-4">
      <div className="text-center">
        <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
          Good to know
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">Frequently asked questions</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">Quick answers to the questions practices ask us most often.</p>
      </div>

      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            className="group rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 open:border-teal-300 open:bg-teal-50/40 open:shadow-md hover:border-teal-300"
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-sm font-bold text-teal-800 transition-colors group-open:bg-teal-700 group-open:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-semibold text-slate-900">{f.q}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-teal-700"
              >
                <path fillRule="evenodd" d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" clipRule="evenodd" />
              </svg>
            </summary>
            <div className="border-t border-teal-100 px-5 pb-5 pt-4 pl-18">
              <p className="leading-relaxed text-slate-600">{f.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
