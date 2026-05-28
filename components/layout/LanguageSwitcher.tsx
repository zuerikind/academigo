"use client";

import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  ariaLabel,
  className,
}: {
  locale: Locale;
  ariaLabel: string;
  className?: string;
}) {
  const hash =
    typeof window !== "undefined" ? window.location.hash : "";

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-1 rounded-full border border-academy-line bg-academy-paper-soft p-1",
        className,
      )}
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
