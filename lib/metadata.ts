import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type BuildMetadataProps = {
  title: string;
  description: string;
};

export function buildMetadata({
  title,
  description,
}: BuildMetadataProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.brand}`;

  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}
