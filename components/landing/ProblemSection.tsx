import { Section } from "@/components/ui/Section";
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
      variant="mist"
    >
      <AnimatedGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dict.points.map((point, index) => {
          const Icon = icons[index];
          return (
            <AnimatedItem key={point.title}>
              <div className="h-full rounded-3xl border border-academy-mist-dark bg-white p-6 shadow-md">
                <Icon className="h-8 w-8 text-academy-gold" aria-hidden />
                <h3 className="mt-4 font-semibold text-academy-navy">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-academy-slate">
                  {point.description}
                </p>
              </div>
            </AnimatedItem>
          );
        })}
      </AnimatedGrid>
      <p className="mx-auto mt-10 max-w-2xl text-center text-base text-academy-slate">
        {dict.closing}
      </p>
    </Section>
  );
}
