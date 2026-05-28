import { Section } from "@/components/ui/Section";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import type { Dictionary } from "@/messages/types";
import { cn } from "@/lib/utils";

export function TestimonialsSection({
  dict,
}: {
  dict: Dictionary["testimonials"];
}) {
  return (
    <Section id="testimonials" title={dict.title} variant="mist">
      <AnimatedGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.items.map((t, index) => (
          <AnimatedItem key={t.id}>
            <figure
              className={cn(
                "flex h-full flex-col rounded-2xl border border-academy-line bg-white p-7 shadow-card",
                "border-l-[3px] border-l-[color:var(--brand)]",
                index === 1 && "lg:-mt-2",
              )}
            >
              <div
                className="font-display text-5xl leading-none text-[color:var(--brand)]/25"
                aria-hidden
              >
                &ldquo;
              </div>
              <blockquote className="text-body mt-2 flex-1 text-[15px] leading-relaxed text-academy-navy">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-academy-line pt-4">
                <cite className="text-sm font-semibold not-italic text-[color:var(--brand-deep)]">
                  {t.role}
                </cite>
              </figcaption>
            </figure>
          </AnimatedItem>
        ))}
      </AnimatedGrid>
    </Section>
  );
}
