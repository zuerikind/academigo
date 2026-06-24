import { Button } from "@/components/ui/Button";
import { appSignupUrl } from "@/lib/app-links";
import { localePath } from "@/lib/i18n/navigation";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/messages/types";

type LandingCtaPanelProps = {
  locale: Locale;
  buttons: Dictionary["common"]["buttons"];
  title?: string;
  subtitle?: string;
  className?: string;
};

export function LandingCtaPanel({
  locale,
  buttons,
  title,
  subtitle,
  className,
}: LandingCtaPanelProps) {
  return (
    <div
      className={
        className ??
        "rounded-2xl border-2 border-academy-line bg-white p-5 shadow-card sm:p-6"
      }
    >
      {title && (
        <p className="text-sm font-semibold text-academy-navy">{title}</p>
      )}
      {subtitle && <p className="text-caption mt-1">{subtitle}</p>}

      <div className={title || subtitle ? "mt-5" : undefined}>
        <Button
          href={siteConfig.links.platform}
          external
          variant="accent"
          size="xl"
          fullWidth
          className="w-full"
        >
          {buttons.openPlatform}
        </Button>

        <p className="text-caption mt-4 text-center text-academy-slate-muted">
          {buttons.registerHint}
        </p>

        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Button
            href={appSignupUrl(locale, "student")}
            external
            variant="secondary"
            size="sm"
            fullWidth
            className="text-center leading-snug"
          >
            {buttons.registerStudent}
          </Button>
          <Button
            href={appSignupUrl(locale, "teacher")}
            external
            variant="outline"
            size="sm"
            fullWidth
            className="text-center leading-snug"
          >
            {buttons.registerTeacher}
          </Button>
        </div>

        <Button
          href={`${localePath(locale)}${siteConfig.links.pricesAnchor}`}
          variant="ghost"
          size="sm"
          fullWidth
          className="mt-2 text-academy-slate hover:text-academy-navy"
        >
          {buttons.viewPricing}
        </Button>
      </div>
    </div>
  );
}
