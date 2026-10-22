// Single source of truth for brand + contact details.
// TODO: replace placeholders (domain, phone, email, address) before launch.
export const site = {
  name: "Prime Bridge",
  legalName: "Prime Bridge Medical Billing",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.primebridgebilling.com").replace(/\/$/, ""),
  tagline: "Medical billing that bridges your care to your revenue.",
  description:
    "Prime Bridge provides medical billing, coding, provider credentialing and revenue cycle management for independent practices across the United States.",
  phone: "+1 (000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "hello@primebridgebilling.com",
  address: {
    street: "123 Main Street, Suite 100",
    city: "Your City",
    region: "ST",
    postalCode: "00000",
    country: "US",
  },
  hours: "Monday–Friday, 9:00 AM–6:00 PM ET",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/specialties", label: "Specialties" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}
