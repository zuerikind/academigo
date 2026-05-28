import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SetHtmlLang } from "@/components/layout/SetHtmlLang";
import { StructuredData } from "@/components/seo/StructuredData";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo";

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
  return buildPageMetadata(raw, dict);
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  return (
    <>
      <SetHtmlLang locale={raw} />
      <StructuredData locale={raw} />
      {children}
    </>
  );
}
