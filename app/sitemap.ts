import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${siteConfig.domain}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "de" ? 1 : 0.9,
  }));
}
