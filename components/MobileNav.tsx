"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav } from "@/lib/site";

// Mobile menu toggle. Renders the button in the header bar and the
// dropdown panel below it. Visible only below the md breakpoint.
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  // Close the menu on any route change, including browser back and forward.
  // Comparing during render avoids an extra effect pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-slate-900 hover:bg-slate-100 md:hidden"
      >
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 motion-reduce:transition-none ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute h-0.5 w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/20 md:hidden"
        />
      )}

      <nav
        id={menuId}
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
        className={`absolute inset-x-0 top-full z-40 grid overflow-hidden border-b border-slate-200 bg-white shadow-lg transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 px-4 py-2">
          {nav.map((n) => {
            const active = pathname === n.href || pathname.startsWith(`${n.href}/`);
            return (
              <li key={n.href} className="border-b border-slate-100 last:border-0">
                <Link
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3.5 text-base font-medium transition-colors motion-reduce:transition-none ${
                    active ? "text-teal-700" : "text-slate-800 hover:text-teal-700"
                  }`}
                >
                  {n.label}
                  {active && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-teal-600" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
