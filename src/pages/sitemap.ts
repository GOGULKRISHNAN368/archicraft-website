import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { materials } from "@/data/materials";
import { blogPosts } from "@/data/blog";

const base = "https://archicraftinteriors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "", "about", "services", "portfolio", "materials", "design-process",
    "why-choose-us", "blog", "faq", "contact", "privacy-policy", "terms-conditions",
  ].map((path) => ({ url: `${base}/${path}`, lastModified: new Date() }));

  const servicePages = services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() }));
  const projectPages = projects.map((p) => ({ url: `${base}/portfolio/${p.slug}`, lastModified: new Date() }));
  const materialPages = materials.map((m) => ({ url: `${base}/materials/${m.slug}`, lastModified: new Date() }));
  const blogPages = blogPosts.map((b) => ({ url: `${base}/blog/${b.slug}`, lastModified: new Date() }));

  return [...staticPages, ...servicePages, ...projectPages, ...materialPages, ...blogPages];
}
