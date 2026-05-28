import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
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
    <Section id="services" title={dict.title} variant="mist">
      <AnimatedGrid className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dict.items.map((service) => (
          <AnimatedItem key={service.id}>
            <Card className="h-full">
              <DynamicIcon
                name={serviceIcons[service.id]}
                className="h-8 w-8 text-academy-gold"
              />
              <h3 className="mt-4 font-semibold text-academy-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-academy-slate">
                {service.description}
              </p>
            </Card>
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </Section>
  );
}
