"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { appSignupUrl } from "@/lib/app-links";
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
    <header className="sticky top-0 z-50 border-b border-academy-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href={localePath(locale)}
          className="rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand)]/40 focus-visible:ring-offset-2"
        >
          <BrandLogo variant="header" brandName={common.brand} priority />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={common.aria.mainNav}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`${localePath(locale)}${item.href}`}
              className="text-[13.5px] font-medium text-academy-slate transition-colors hover:text-academy-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher
            locale={locale}
            ariaLabel={common.aria.languageSwitch}
          />
          <Button
            href={appSignupUrl(locale, "student")}
            external
            variant="accent"
            size="sm"
          >
            {common.buttons.signUpStudent}
          </Button>
          <Button
            href={appSignupUrl(locale, "teacher")}
            external
            variant="secondary"
            size="sm"
          >
            {common.buttons.signUpTeacher}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-academy-navy lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? common.aria.closeMenu : common.aria.openMenu}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-academy-line bg-white lg:hidden",
          open ? "max-h-[640px]" : "max-h-0",
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
              className="rounded-[10px] px-3 py-3 text-base font-medium text-academy-navy hover:bg-academy-mist"
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
            href={appSignupUrl(locale, "student")}
            external
            variant="accent"
            className="mt-3 w-full"
          >
            {common.buttons.signUpStudent}
          </Button>
          <Button
            href={appSignupUrl(locale, "teacher")}
            external
            variant="secondary"
            className="mt-2 w-full"
          >
            {common.buttons.signUpTeacher}
          </Button>
          <Button
            href={siteConfig.links.consultation}
            external
            variant="ghost"
            className="mt-2 w-full"
          >
            {common.buttons.freeConsultation}
          </Button>
        </nav>
      </div>
    </header>
  );
}
