import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Prime Bridge collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

// TODO: have counsel review before launch.
export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">{site.name} collects only the information you choose to send us, such as your name, email address and message, in order to respond to your enquiry.</p>
      <h2 className="mt-8 text-xl font-semibold">Protected health information</h2>
      <p className="mt-2 text-slate-600">Please do not submit patient health information through this website. PHI is handled only under a signed business associate agreement.</p>
      <h2 className="mt-8 text-xl font-semibold">Sharing</h2>
      <p className="mt-2 text-slate-600">We do not sell personal information. We share it only with service providers who help us operate the website and respond to you.</p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-600">Questions about this policy: <a href={`mailto:${site.email}`} className="text-teal-700">{site.email}</a>.</p>
    </article>
  );
}
