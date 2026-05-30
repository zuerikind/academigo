import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import { pricingAmounts } from "@/data/pricing";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/messages/types";
import { cn } from "@/lib/utils";

export function PricingSection({ dict }: { dict: Dictionary }) {
  const { pricing, common } = dict;

  return (
    <Section id="pricing" title={pricing.title} variant="paper">
      <AnimatedGrid className="grid items-stretch gap-6 lg:grid-cols-3">
        {pricingAmounts.tiers.map((amount) => {
          const copy = pricing.tiers.find((t) => t.id === amount.id)!;
          const isEssentials = amount.id === "essentials";

          return (
            <AnimatedItem key={amount.id}>
              <Card
                highlight={amount.highlight}
                className={cn(
                  "flex h-full flex-col",
                  amount.highlight && "relative z-[1] lg:-mt-1 lg:mb-1",
                )}
              >
                {amount.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand)] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
                    {common.popular}
                  </span>
                )}

                <p className="text-meta-brand">{copy.name}</p>
                <h3 className="text-subheading mt-2 text-academy-navy">
                  {copy.tagline}
                </h3>
                <p className="text-body mt-3">{copy.description}</p>

                {isEssentials && "options" in amount && "options" in copy && (
                  <ul className="mt-6 space-y-2.5 border-y border-academy-line py-5">
                    {amount.options.map((option) => {
                      const optionCopy = copy.options.find(
                        (o) => o.id === option.id,
                      )!;
                      return (
                        <li
                          key={option.id}
                          className="flex items-baseline justify-between gap-3 text-sm"
                        >
                          <span className="font-medium text-academy-navy">
                            {optionCopy.label}
                          </span>
                          <span className="shrink-0 font-display text-lg font-semibold tabular-nums text-academy-navy">
                            CHF {option.priceChf}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {!isEssentials && "priceChf" in amount && (
                  <div className="mt-6 border-y border-academy-line py-5">
                    <p className="font-display text-4xl font-semibold tracking-tight text-academy-navy text-numeric">
                      CHF {amount.priceChf}
                      <span className="text-base font-medium text-academy-slate">
                        {" "}
                        / {pricing.perMonth}
                      </span>
                    </p>
                  </div>
                )}

                {"included" in copy && copy.included.length > 0 && (
                  <div className="mt-5 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-academy-slate-muted">
                      {pricing.includedLabel}
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {copy.included.map((item) => (
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
                )}

                {"features" in copy && copy.features.length > 0 && (
                  <ul className="mt-5 flex-1 space-y-2.5">
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
                )}

                <Button
                  href={siteConfig.links.consultation}
                  external
                  variant={amount.highlight ? "accent" : "primary"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  {copy.cta}
                </Button>
              </Card>
            </AnimatedItem>
          );
        })}
      </AnimatedGrid>
    </Section>
  );
}
