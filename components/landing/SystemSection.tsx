import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
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
      <AnimatedGrid className="grid gap-5 lg:grid-cols-3">
        {dict.pillars.map((pillar, index) => {
          const Icon = pillarIcons[index];
          return (
            <AnimatedItem key={pillar.title}>
              <FeatureCard
                icon={<Icon strokeWidth={1.75} aria-hidden />}
                title={pillar.title}
                description={pillar.description}
              />
            </AnimatedItem>
          );
        })}
      </AnimatedGrid>

      <div
        className="mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        aria-label={dict.flowAria}
      >
        {dict.flow.map((step, i) => (
          <div key={step} className="flex items-center gap-2 sm:gap-3">
            <span className="rounded-full bg-[color:var(--brand-deep)] px-4 py-2 text-[13px] font-semibold text-white shadow-soft">
              {step}
            </span>
            {i < dict.flow.length - 1 && (
              <ArrowRight
                className="h-4 w-4 text-[color:var(--brand)]/70"
                strokeWidth={2}
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
