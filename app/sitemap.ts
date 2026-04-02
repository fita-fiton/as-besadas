import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "/producto",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/historia",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "/contacto",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
