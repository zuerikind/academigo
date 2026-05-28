import type { Locale } from "@/lib/i18n/config";

export function localePath(locale: Locale, hash?: string): string {
  const base = `/${locale}`;
  return hash ? `${base}${hash.startsWith("#") ? hash : `#${hash}`}` : base;
}
