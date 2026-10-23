"use client";

import { useActionState, useState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { CONTACT_SERVICES, type ContactField } from "@/lib/contact";

const MAX_MESSAGE = 2000;
const initialState: ContactState = { status: "idle" };

const input =
  "block w-full rounded-lg border border-slate-300 bg-slate-50/60 px-4 py-3 text-slate-900 placeholder:text-slate-500 transition-all duration-200 focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-teal-100 aria-[invalid=true]:border-red-500 aria-[invalid=true]:bg-red-50/40 aria-[invalid=true]:ring-red-100";

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <span id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-4a1 1 0 00-1 1v3a1 1 0 002 0V7a1 1 0 00-1-1zm0 7a1.25 1.25 0 100-2.5A1.25 1.25 0 0010 13z" clipRule="evenodd" />
      </svg>
      {children}
    </span>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const v = (name: ContactField) => state.values?.[name] ?? "";
  const err = (name: ContactField) => state.errors?.[name];
  const [messageLength, setMessageLength] = useState(v("message").length);
  const succeeded = state.status === "success";

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-900/5">
      <div className="bg-gradient-to-br from-teal-800 via-teal-800 to-teal-700 px-6 py-7 text-white md:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-100">Free consultation</p>
        <h2 className="mt-1 text-2xl font-bold">Tell us about your practice</h2>
        <ul className="mt-4 space-y-2 text-sm text-teal-50">
          {["No obligation, no surprise fees", "Reply within one business day", "Takes about two minutes"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-teal-200">
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l4 4 6.8-6.8a1 1 0 011.2 0z" clipRule="evenodd" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <form action={formAction} noValidate className="relative space-y-5 p-6 md:p-8">
        {/* Honeypot: hidden from people, visible to bots. Leave empty. */}
        <div aria-hidden="true" className="absolute left-[-9999px] h-0 overflow-hidden">
          <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold text-slate-800">
            Name
            <input name="name" autoComplete="name" placeholder="Jane Doe" defaultValue={v("name")} aria-invalid={!!err("name")} aria-describedby={err("name") ? "err-name" : undefined} className={`mt-2 ${input}`} />
            <FieldError id="err-name">{err("name")}</FieldError>
          </label>

          <label className="block text-sm font-semibold text-slate-800">
            Email
            <input name="email" type="email" autoComplete="email" placeholder="you@practice.com" defaultValue={v("email")} aria-invalid={!!err("email")} aria-describedby={err("email") ? "err-email" : undefined} className={`mt-2 ${input}`} />
            <FieldError id="err-email">{err("email")}</FieldError>
          </label>
        </div>

        <label className="block text-sm font-semibold text-slate-800">
          Service needed
          <span className="relative mt-2 block">
            <select name="service" defaultValue={v("service") || CONTACT_SERVICES[0]} aria-invalid={!!err("service")} className={`${input} appearance-none pr-10`}>
              {CONTACT_SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500">
              <path fillRule="evenodd" d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" clipRule="evenodd" />
            </svg>
          </span>
          <FieldError id="err-service">{err("service")}</FieldError>
        </label>

        <label className="block text-sm font-semibold text-slate-800">
          <span className="flex items-baseline justify-between">
            Message <span className="text-xs font-normal text-slate-500">Optional</span>
          </span>
          <textarea
            name="message"
            rows={5}
            placeholder="A few details about your practice, specialty, or current billing challenges"
            defaultValue={v("message")}
            onChange={(e) => setMessageLength(e.target.value.length)}
            aria-invalid={!!err("message")}
            aria-describedby={err("message") ? "err-message" : undefined}
            className={`mt-2 resize-y ${input}`}
          />
          <span className="mt-1.5 flex justify-between text-xs text-slate-500">
            <FieldError id="err-message">{err("message")}</FieldError>
            <span className={`ml-auto tabular-nums ${messageLength > MAX_MESSAGE ? "text-red-600" : ""}`}>
              {messageLength} / {MAX_MESSAGE}
            </span>
          </span>
        </label>

        <button
          type="submit"
          disabled={pending}
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-800 to-teal-700 px-4 py-3.5 font-semibold text-white shadow-lg shadow-teal-700/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-700/30 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-200 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {pending ? (
            <>
              <svg aria-hidden="true" className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send my request
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.64L11.2 6.2a.75.75 0 111.1-1l4.25 4.5a.75.75 0 010 1l-4.25 4.5a.75.75 0 11-1.1-1l3.19-3.55H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </>
          )}
        </button>

        {state.message && (
          <p
            role="status"
            className={`flex items-start gap-3 rounded-lg p-4 text-sm ${succeeded ? "bg-teal-50 text-teal-800 ring-1 ring-teal-200" : "bg-red-50 text-red-700 ring-1 ring-red-200"}`}
          >
            <span aria-hidden="true" className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${succeeded ? "bg-teal-600" : "bg-red-600"}`}>
              {succeeded ? "✓" : "!"}
            </span>
            {state.message}
          </p>
        )}

        <p className="flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-slate-400">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
          </svg>
          Please do not include patient health information in this form.
        </p>
      </form>
    </div>
  );
}
