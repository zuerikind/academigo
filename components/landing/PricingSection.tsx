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

  const plans = pricingAmounts.lessons.map((amount) => {
    const copy = pricing.lessons.find((l) => l.id === amount.id)!;
    return { ...amount, ...copy };
  });

  return (
    <Section id="pricing" title={pricing.title} variant="paper">
      <AnimatedGrid className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <AnimatedItem key={plan.id}>
            <Card
              highlight={plan.highlight}
              className={cn(
                "flex h-full flex-col",
                plan.highlight && "relative z-[1] lg:-mt-1 lg:mb-1",
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[color:var(--brand)] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
                  {common.popular}
                </span>
              )}
              <h3 className="text-subheading text-academy-navy">{plan.name}</h3>
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-academy-navy text-numeric">
                CHF {plan.priceChf}
              </p>
              {plan.perLessonChf && (
                <p className="mt-1 text-sm font-medium text-[color:var(--brand-deep)]">
                  CHF {plan.perLessonChf} {common.perLesson}
                </p>
              )}
              <p className="text-caption mt-2">
                {plan.durationMin} {common.minutes}
              </p>
              <p className="text-body mt-4 flex-1">{plan.description}</p>
              <Button
                href={siteConfig.links.consultation}
                external
                variant={plan.highlight ? "accent" : "primary"}
                size="lg"
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          </AnimatedItem>
        ))}
      </AnimatedGrid>

      <div className="mt-10 overflow-hidden rounded-2xl border border-[color:var(--brand)]/20 bg-gradient-to-br from-[color:var(--brand-tint)] via-white to-white shadow-card">
        <div className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-lg">
            <p className="text-meta-brand">{pricing.platformLabel}</p>
            <p className="font-display mt-3 text-3xl font-semibold tracking-tight text-academy-navy text-numeric sm:text-4xl">
              CHF {pricingAmounts.platform.priceChf}
              <span className="text-lg font-medium text-academy-slate">
                {" "}
                / {pricing.platform.period}
              </span>
            </p>
            <p className="text-body mt-3">{pricing.platform.description}</p>
          </div>
          <Button
            href={siteConfig.links.platform}
            external
            variant="accent"
            size="lg"
            className="shrink-0 sm:min-w-[200px]"
          >
            {common.buttons.viewPlatform}
          </Button>
        </div>
      </div>
    </Section>
  );
}
