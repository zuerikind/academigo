import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";

function appOrigin() {
  return siteConfig.links.appOrigin.replace(/\/$/, "");
}

export function appSignupUrl(locale: Locale, role: "student" | "teacher") {
  return `${appOrigin()}/${locale}/signup?role=${role}`;
}

export function appLoginUrl(locale: Locale) {
  return `${appOrigin()}/${locale}/login`;
}

/** Main app entry (marketing primary CTA). */
export function appHomeUrl(locale: Locale) {
  return `${appOrigin()}/${locale}`;
}

export function appPricingUrl(locale: Locale) {
  return `${appOrigin()}/${locale}/pricing`;
}
