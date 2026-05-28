import { BrandLogo } from "@/components/brand/BrandLogo";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { localePath } from "@/lib/i18n/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/messages/types";

export function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const year = new Date().getFullYear();
  const { common, nav, footer, meta } = dict;

  return (
    <footer className="border-t border-academy-navy-light bg-academy-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" brandName={common.brand} />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {meta.description}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-academy-gold">
              {footer.navigation}
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`${localePath(locale)}${item.href}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-academy-gold">
              {footer.contact}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {common.buttons.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {footer.learningPlatform}
                </a>
              </li>
              <li>
                <a href={siteConfig.links.email} className="hover:text-white">
                  {footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/50">
            © {year} {common.brand}. {footer.copyright} {meta.footerSeo}
          </p>
        </div>
      </div>
    </footer>
  );
}
