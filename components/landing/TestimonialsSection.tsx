import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import { Quote } from "lucide-react";
import type { Dictionary } from "@/messages/types";

export function TestimonialsSection({
  dict,
}: {
  dict: Dictionary["testimonials"];
}) {
  return (
    <Section id="testimonials" title={dict.title} variant="white">
      <AnimatedGrid className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {dict.items.map((t) => (
          <AnimatedItem key={t.id}>
            <Card className="relative h-full">
              <Quote className="h-10 w-10 text-academy-gold/40" aria-hidden />
              <blockquote className="mt-4 text-lg leading-relaxed text-academy-navy">
                &laquo;{t.quote}&raquo;
              </blockquote>
              <footer className="mt-6 text-sm font-semibold text-academy-gold">
                — {t.role}
              </footer>
            </Card>
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </Section>
  );
}
