"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/messages/types";
import { cn } from "@/lib/utils";

export function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const { common, nav } = dict;

  return (
    <header className="sticky top-0 z-50 border-b border-academy-mist-dark/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href={localePath(locale)}
          className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-academy-gold focus-visible:ring-offset-2"
        >
          <BrandLogo
            variant="header"
            brandName={common.brand}
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={common.aria.mainNav}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`${localePath(locale)}${item.href}`}
              className="text-sm font-medium text-academy-slate transition-colors hover:text-academy-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher
            locale={locale}
            ariaLabel={common.aria.languageSwitch}
          />
          <Button href={siteConfig.links.consultation} external>
            {common.buttons.freeConsultation}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-academy-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? common.aria.closeMenu : common.aria.openMenu}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-academy-mist-dark bg-white lg:hidden",
          open ? "max-h-[520px]" : "max-h-0",
        )}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-4"
          aria-label={common.aria.mobileNav}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`${localePath(locale)}${item.href}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-academy-navy hover:bg-academy-mist"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex justify-center">
            <LanguageSwitcher
              locale={locale}
              ariaLabel={common.aria.languageSwitch}
            />
          </div>
          <Button
            href={siteConfig.links.consultation}
            external
            className="mt-3 w-full"
          >
            {common.buttons.freeConsultation}
          </Button>
        </nav>
      </div>
    </header>
  );
}
