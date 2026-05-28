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
    <Section id="pricing" title={pricing.title} variant="white">
      <AnimatedGrid className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <AnimatedItem key={plan.id}>
            <Card
              highlight={plan.highlight}
              className={cn(
                "flex h-full flex-col",
                plan.highlight && "relative scale-[1.02] lg:-mt-2 lg:mb-2",
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-academy-gold px-4 py-1 text-xs font-bold uppercase text-academy-navy">
                  {common.popular}
                </span>
              )}
              <h3 className="text-xl font-bold text-academy-navy">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-bold text-academy-navy">
                  CHF {plan.priceChf}
                </span>
              </p>
              {plan.perLessonChf && (
                <p className="mt-1 text-sm font-medium text-academy-gold">
                  CHF {plan.perLessonChf} {common.perLesson}
                </p>
              )}
              <p className="mt-2 text-sm text-academy-slate">
                {plan.durationMin} {common.minutes}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-academy-slate">
                {plan.description}
              </p>
              <Button
                href={siteConfig.links.consultation}
                external
                variant={plan.highlight ? "accent" : "primary"}
                className="mt-6 w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          </AnimatedItem>
        ))}
      </AnimatedGrid>

      <div className="mt-10 rounded-3xl border border-academy-mist-dark bg-academy-mist p-6 sm:flex sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-academy-gold">
            {pricing.platformLabel}
          </p>
          <p className="mt-2 text-2xl font-bold text-academy-navy">
            CHF {pricingAmounts.platform.priceChf} / {pricing.platform.period}
          </p>
          <p className="mt-2 text-sm text-academy-slate">
            {pricing.platform.description}
          </p>
        </div>
        <Button
          href={siteConfig.links.platform}
          external
          variant="secondary"
          className="mt-4 shrink-0 sm:mt-0"
        >
          {common.buttons.viewPlatform}
        </Button>
      </div>
    </Section>
  );
}
