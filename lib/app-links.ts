import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";

export function appSignupUrl(locale: Locale, role: "student" | "teacher") {
  return `${siteConfig.links.appOrigin}/${locale}/signup?role=${role}`;
}

export function appLoginUrl(locale: Locale) {
  return `${siteConfig.links.appOrigin}/${locale}/login`;
}
