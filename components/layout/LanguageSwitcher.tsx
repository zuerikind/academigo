"use client";

import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  ariaLabel,
}: {
  locale: Locale;
  ariaLabel: string;
}) {
  const hash =
    typeof window !== "undefined" ? window.location.hash : "";

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-academy-mist-dark bg-academy-mist p-1"
      role="group"
      aria-label={ariaLabel}
    >
      {locales.map((l) => {
        const href = `/${l}${hash}`;
        const active = locale === l;
        return (
          <Link
            key={l}
            href={href}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
              active
                ? "bg-[color:var(--brand-deep)] text-white"
                : "text-academy-slate hover:text-academy-navy",
            )}
            aria-current={active ? "true" : undefined}
            lang={l}
          >
            {l === "de" ? "DE" : "EN"}
            <span className="sr-only"> ({localeLabels[l]})</span>
          </Link>
        );
      })}
    </div>
  );
}
