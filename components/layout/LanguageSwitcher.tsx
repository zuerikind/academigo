"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/navigation";
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
  // Hash only after mount — reading window during render caused SSR/client href mismatch.
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
        const href = localePath(l, hash || undefined);
        const active = locale === l;
        return (
          <Link
            key={l}
            href={href}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors",
              active
                ? "bg-fill-brand-deep text-on-brand"
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
