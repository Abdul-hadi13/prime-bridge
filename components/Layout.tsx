import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

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
        <Link
          href="/contact"
          className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Free Consultation
        </Link>
      </div>
      <nav aria-label="Mobile" className="flex gap-4 overflow-x-auto border-t border-slate-100 px-4 py-2 text-sm md:hidden">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="whitespace-nowrap text-slate-700">
            {n.label}
          </Link>
        ))}
      </nav>
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
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Company</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/specialties" className="hover:text-white">Specialties</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Contact</p>
          <p className="mt-2"><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></p>
          <p><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
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
    <section className="mx-auto mt-16 max-w-3xl px-4">
      <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-slate-200 rounded-lg border border-slate-200">
        {faqs.map((f) => (
          <details key={f.q} className="group p-4">
            <summary className="cursor-pointer font-medium text-slate-900">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
