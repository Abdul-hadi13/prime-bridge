import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-teal-700 px-6 py-3 font-semibold text-white">Back to home</Link>
    </section>
  );
}
