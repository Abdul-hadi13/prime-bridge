"use client";

import { useEffect } from "react";
import "./globals.css";

// Catches errors thrown by the root layout itself, so it must render its own <html> and <body>.
export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white px-4 text-center text-slate-900">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="mt-3 text-slate-600">The site could not load. Please try again.</p>
          <button
            type="button"
            onClick={() => retry()}
            className="mt-6 rounded-md bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
