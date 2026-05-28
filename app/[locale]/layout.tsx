import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales } from "@/lib/i18n/config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);

  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    openGraph: {
      type: "website",
      locale: raw === "de" ? "de_CH" : "en_CH",
      url: `${siteConfig.domain}/${raw}`,
      siteName: siteConfig.brand,
      title: dict.meta.ogTitle,
      description: dict.meta.description,
      images: [
        {
          url: "/brand/logo-full.png",
          alt: siteConfig.brand,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.twitterTitle,
      description: dict.meta.description,
      images: ["/brand/logo-full.png"],
    },
    alternates: {
      canonical: `${siteConfig.domain}/${raw}`,
      languages: {
        de: `${siteConfig.domain}/de`,
        en: `${siteConfig.domain}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const dict = getDictionary(raw);

  return (
    <>
      <SetHtmlLang locale={raw} />
      <JsonLd locale={raw} description={dict.meta.description} />
      {children}
    </>
  );
}
