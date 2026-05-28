import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ogImageSize } from "@/lib/og-card";
import type { Dictionary } from "@/messages/types";
import type { Locale } from "@/lib/i18n/config";

function openGraphImage(locale: Locale, dict: Dictionary) {
  return {
    url: `/${locale}/opengraph-image`,
    width: ogImageSize.width,
    height: ogImageSize.height,
    alt: dict.meta.ogImageAlt,
    type: "image/png" as const,
  };
}

export function buildPageMetadata(locale: Locale, dict: Dictionary): Metadata {
  const ogImage = openGraphImage(locale, dict);
  const pageUrl = `${siteConfig.domain}/${locale}`;
  const localeTag = locale === "de" ? "de_CH" : "en_CH";

  const languages: Record<string, string> = {
    "de-CH": `${siteConfig.domain}/de`,
    "en-CH": `${siteConfig.domain}/en`,
    "x-default": `${siteConfig.domain}/de`,
  };

  const verification: Metadata["verification"] = {};
  if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  }

  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    applicationName: siteConfig.brand,
    authors: [{ name: siteConfig.brand, url: siteConfig.domain }],
    creator: siteConfig.brand,
    publisher: siteConfig.brand,
    category: dict.meta.category,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: pageUrl,
      languages,
    },
    openGraph: {
      type: "website",
      locale: localeTag,
      url: pageUrl,
      siteName: siteConfig.brand,
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.twitterTitle,
      description: dict.meta.description,
      images: [ogImage.url],
    },
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
    verification,
  };
}

export function buildStructuredDataGraph(
  locale: Locale,
  dict: Dictionary,
): Record<string, unknown> {
  const pageUrl = `${siteConfig.domain}/${locale}`;
  const inLanguage = locale === "de" ? "de-CH" : "en";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.domain}/#organization`,
        name: siteConfig.brand,
        url: siteConfig.domain,
        logo: `${siteConfig.domain}/brand/logo-full.png`,
        image: `${siteConfig.domain}/${locale}/opengraph-image`,
        email: siteConfig.seo.email,
        telephone: siteConfig.seo.telephone,
        description: dict.meta.description,
        areaServed: {
          "@type": "Country",
          name: "Switzerland",
        },
        sameAs: [...siteConfig.seo.sameAs],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: siteConfig.brand,
        description: dict.meta.description,
        inLanguage,
        publisher: { "@id": `${siteConfig.domain}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage,
        isPartOf: { "@id": `${siteConfig.domain}/#website` },
        about: { "@id": `${siteConfig.domain}/#organization` },
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${siteConfig.domain}/#educational-organization`,
        name: siteConfig.brand,
        url: pageUrl,
        description: dict.meta.description,
        areaServed: "Switzerland",
        knowsAbout: dict.meta.keywords,
      },
    ],
  };
}
