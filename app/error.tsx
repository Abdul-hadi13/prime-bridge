"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl text-red-600" aria-hidden="true">
        !
      </span>
      <h1 className="mt-6 text-3xl font-bold text-slate-900">Something went wrong</h1>
      <p className="mt-3 text-slate-600">
        We hit an unexpected problem loading this page. Please try again. If it keeps happening, reach out and we will help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className="rounded-md bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800"
        >
          Try again
        </button>
        <Link href="/" className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50">
          Back to home
        </Link>
      </div>
    </section>
  );
}
