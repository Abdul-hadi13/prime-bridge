export const CONTACT_SERVICES = [
  "Medical billing",
  "Credentialing",
  "Coding audit",
  "Denial management",
  "Other",
] as const;

export type ContactField = "name" | "email" | "service" | "message";
