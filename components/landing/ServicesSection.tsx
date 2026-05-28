import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import { DynamicIcon } from "@/lib/icons";
import { serviceIcons } from "@/lib/subjects";
import type { Dictionary } from "@/messages/types";

export function ServicesSection({
  dict,
}: {
  dict: Dictionary["services"];
}) {
  return (
    <Section id="services" title={dict.title} variant="paper">
      <AnimatedGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dict.items.map((service) => (
          <AnimatedItem key={service.id}>
            <FeatureCard
              icon={<DynamicIcon name={serviceIcons[service.id]} />}
              title={service.title}
              description={service.description}
            />
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </Section>
  );
}
