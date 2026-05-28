import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

export function JsonLd({
  locale,
  description,
}: {
  locale: Locale;
  description: string;
}) {
  const dict = getDictionary(locale);

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.brand,
    url: `${siteConfig.domain}/${locale}`,
    description,
    inLanguage: locale === "de" ? "de-CH" : "en",
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    knowsAbout: dict.meta.keywords,
    logo: `${siteConfig.domain}/brand/logo-full.png`,
    image: `${siteConfig.domain}/brand/logo-full.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
