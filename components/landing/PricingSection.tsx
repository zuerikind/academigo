import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import { pricingAmounts } from "@/data/pricing";
import { appPricingUrl } from "@/lib/app-links";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/messages/types";
import { cn } from "@/lib/utils";

export function PricingSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const { pricing } = dict;

  return (
    <Section
      id="pricing"
      eyebrow={pricing.eyebrow}
      title={pricing.title}
      subtitle={pricing.subtitle}
      variant="paper"
    >
      <AnimatedGrid className="grid items-stretch gap-6 lg:grid-cols-3">
        {pricingAmounts.tiers.map((amount) => {
          const copy = pricing.tiers.find((t) => t.id === amount.id)!;
          const creditLabel =
            amount.credits === 1
              ? pricing.creditSingular
              : pricing.creditPlural;

          return (
            <AnimatedItem key={amount.id}>
              <Card
                highlight={amount.highlight}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden",
                  amount.highlight && "z-[1] lg:-mt-1 lg:mb-1",
                )}
              >
                {amount.highlight && (
                  <div className="bg-fill-brand-deep px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-on-brand">
                    {pricing.mostPopular}
                  </div>
                )}

                <div
                  className={cn(
                    "flex flex-1 flex-col",
                    amount.highlight ? "p-6 pt-5 sm:p-7" : "p-6 sm:p-7",
                  )}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-academy-slate-muted">
                    {copy.kindLabel}
                  </p>
                  <h3 className="text-subheading mt-2 text-academy-navy">
                    {copy.name}
                  </h3>
                  <p className="text-body mt-3 flex-1">{copy.tagline}</p>

                  <div className="mt-6 rounded-xl border border-academy-line bg-academy-mist/60 p-4">
                    <p className="font-display text-3xl font-semibold tracking-tight text-academy-navy text-numeric">
                      CHF {amount.priceChf}
                      <span className="text-base font-medium text-academy-slate">
                        {" "}
                        · {amount.credits} {creditLabel}
                      </span>
                    </p>
                    {"pricePerLessonChf" in amount &&
                      amount.pricePerLessonChf != null && (
                        <p className="mt-1 text-sm text-academy-slate">
                          CHF {amount.pricePerLessonChf} {pricing.perLesson}
                        </p>
                      )}
                    {"savings" in copy && copy.savings && (
                      <span className="mt-3 inline-flex rounded-full bg-fill-brand-tint px-3 py-1 text-xs font-semibold text-ink-brand-deep">
                        {copy.savings}
                      </span>
                    )}
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-academy-slate-muted">
                      {pricing.includedLabel}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {copy.features.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-snug text-academy-slate"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    href={appPricingUrl(locale)}
                    external
                    variant={amount.highlight ? "accent" : "outline"}
                    size="lg"
                    className="mt-8 w-full"
                  >
                    {pricing.cta}
                  </Button>
                </div>
              </Card>
            </AnimatedItem>
          );
        })}
      </AnimatedGrid>
    </Section>
  );
}
