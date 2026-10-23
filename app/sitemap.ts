import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";
import { specialties } from "@/lib/specialties";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed date instead of new Date(), so static pages don't look changed on every build.
  // Update this when the site content changes.
  const lastUpdated = new Date("2026-10-23");
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly", lastModified: Date = lastUpdated) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    entry("/", 1, "weekly"),
    entry("/services", 0.9, "monthly"),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9, "monthly")),
    entry("/specialties", 0.8, "monthly"),
    ...specialties.map((s) => entry(`/specialties/${s.slug}`, 0.7, "monthly")),
    entry("/blog", 0.7, "weekly"),
    ...posts.map((p) => entry(`/blog/${p.slug}`, 0.6, "yearly", new Date(p.date))),
    entry("/about", 0.6, "yearly"),
    entry("/contact", 0.7, "yearly"),
    entry("/privacy-policy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
  ];
}
