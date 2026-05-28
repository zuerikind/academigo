import { createOgImageResponse, ogImageSize } from "@/lib/og-card";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";

export const runtime = "nodejs";
export const alt = "Academigo";
export const size = ogImageSize;
export const contentType = "image/png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "de";
  const dict = getDictionary(locale);
  return createOgImageResponse(dict);
}
