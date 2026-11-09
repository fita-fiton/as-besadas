import type { Metadata } from "next";
import { absoluteUrl, copy, pagePaths, site, type Locale, type PageKey } from "@/content/site";

export function buildMetadata(locale: Locale, page: PageKey): Metadata {
  const [title, description] = copy[locale].meta[page];
  const path = pagePaths[locale][page];
  const fullTitle = `${title} | ${site.name}`;
  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description,
    icons: { icon: [{ url: "/images/product-bottle-250ml-v2.png", type: "image/png" }] },
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        "es-ES": absoluteUrl(pagePaths.es[page]),
        "gl-ES": absoluteUrl(pagePaths.gl[page]),
        "x-default": absoluteUrl(pagePaths.es[page]),
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      locale: locale === "es" ? "es_ES" : "gl_ES",
      alternateLocale: locale === "es" ? ["gl_ES"] : ["es_ES"],
      images: [{ url: absoluteUrl("/images/product-bottle-500ml-v2.png"), width: 1122, height: 1402, alt: `${site.name} · 500 ml` }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [absoluteUrl("/images/product-bottle-500ml-v2.png")] },
  };
}
