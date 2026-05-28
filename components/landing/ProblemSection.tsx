import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import { BookOpen, Layers, MessageCircle, Repeat } from "lucide-react";
import type { Dictionary } from "@/messages/types";

const icons = [Layers, MessageCircle, BookOpen, Repeat];

export function ProblemSection({
  dict,
}: {
  dict: Dictionary["problem"];
}) {
  return (
    <Section
      id="problem"
      title={dict.title}
      subtitle={dict.subtitle}
      variant="paper"
    >
      <AnimatedGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dict.points.map((point, index) => {
          const Icon = icons[index];
          return (
            <AnimatedItem key={point.title}>
              <FeatureCard
                icon={<Icon strokeWidth={1.75} aria-hidden />}
                title={point.title}
                description={point.description}
              />
            </AnimatedItem>
          );
        })}
      </AnimatedGrid>
      <p className="text-body mx-auto mt-12 max-w-2xl text-center text-base">
        {dict.closing}
      </p>
    </Section>
  );
}
