import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const languageAlternates = Object.fromEntries(
    locales.map((locale) => [locale, `${siteConfig.domain}/${locale}`]),
  );

  return locales.map((locale) => ({
    url: `${siteConfig.domain}/${locale}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "de" ? 1 : 0.9,
    alternates: {
      languages: languageAlternates,
    },
  }));
}
