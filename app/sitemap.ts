import type { MetadataRoute } from "next";
import { absoluteUrl, locales, pagePaths, type PageKey } from "@/content/site";
const pages: PageKey[] = ["home", "product", "stores", "contact"];
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(locale => pages.map(page => ({
    url: absoluteUrl(pagePaths[locale][page]),
    changeFrequency: "monthly" as const,
    priority: page === "home" ? 1 : 0.7,
    alternates: { languages: { es: absoluteUrl(pagePaths.es[page]), gl: absoluteUrl(pagePaths.gl[page]) } },
  })));
}
