import { buildStructuredDataGraph } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";

export function StructuredData({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const graph = buildStructuredDataGraph(locale, dict);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
