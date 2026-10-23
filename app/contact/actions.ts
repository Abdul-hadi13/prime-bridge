"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { countRecentSubmissions, insertContactSubmission, isDatabaseConfigured } from "@/lib/db";
import { CONTACT_SERVICES, type ContactField } from "@/lib/contact";
import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  values?: Record<ContactField, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_MESSAGE = 2000;

// At most this many saved submissions per IP address in the window.
const RATE_LIMIT = 5;
const RATE_WINDOW_MINUTES = 60;

// Returns a salted one-way hash of the sender's IP, or null if the IP is unknown.
// The raw IP is never stored.
async function getIpHash(): Promise<string | null> {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip")?.trim();
  if (!ip) return null;
  const salt = process.env.CONTACT_IP_SALT ?? "prime-bridge-contact";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field. Bots often do.
  // Report success without saving so bots get no signal.
  if (String(formData.get("website") ?? "") !== "") {
    return { status: "success", message: "Thanks! We will be in touch within one business day." };
  }

  const values: Record<ContactField, string> = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: Partial<Record<ContactField, string>> = {};
  if (!values.name || values.name.length > MAX_NAME) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 254) errors.email = "Please enter a valid email address.";
  if (!(CONTACT_SERVICES as readonly string[]).includes(values.service)) errors.service = "Please choose a service.";
  if (values.message.length > MAX_MESSAGE) errors.message = `Please keep your message under ${MAX_MESSAGE} characters.`;

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const fallback = `We could not save your message. Please call ${site.phone} or email ${site.email}.`;
  if (!isDatabaseConfigured()) {
    console.error("contact form: DATABASE_URL is not configured");
    return { status: "error", message: fallback, values };
  }

  try {
    const ipHash = await getIpHash();
    // If the IP is unknown we cannot rate limit, so the submission is accepted.
    if (ipHash && (await countRecentSubmissions(ipHash, RATE_WINDOW_MINUTES)) >= RATE_LIMIT) {
      return {
        status: "error",
        message: `You have sent several messages recently. Please try again later, or call ${site.phone}.`,
        values,
      };
    }

    await insertContactSubmission({ ...values, ipHash });
    return { status: "success", message: "Thanks! We received your request and will reply within one business day." };
  } catch (err) {
    console.error("contact form: failed to save submission", err);
    return { status: "error", message: fallback, values };
  }
}
