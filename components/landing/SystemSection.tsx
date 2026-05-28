import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import { BarChart3, GraduationCap, Monitor, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/messages/types";

const pillarIcons = [BarChart3, GraduationCap, Monitor];

export function SystemSection({
  dict,
}: {
  dict: Dictionary["system"];
}) {
  return (
    <Section
      id="system"
      title={dict.title}
      subtitle={dict.subtitle}
      variant="white"
    >
      <AnimatedGrid className="grid gap-8 lg:grid-cols-3">
        {dict.pillars.map((pillar, index) => {
          const Icon = pillarIcons[index];
          return (
            <AnimatedItem key={pillar.title}>
              <Card className="h-full">
                <Icon className="h-10 w-10 text-academy-gold" aria-hidden />
                <h3 className="mt-5 text-xl font-bold text-academy-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-academy-slate">
                  {pillar.description}
                </p>
              </Card>
            </AnimatedItem>
          );
        })}
      </AnimatedGrid>

      <div
        className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        aria-label={dict.flowAria}
      >
        {dict.flow.map((step, i) => (
          <div key={step} className="flex items-center gap-3 sm:gap-4">
            <span className="rounded-2xl bg-academy-navy px-5 py-2.5 text-sm font-semibold text-white shadow-md">
              {step}
            </span>
            {i < dict.flow.length - 1 && (
              <ArrowRight
                className="hidden h-5 w-5 text-academy-gold sm:block"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
