import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/messages/types";

export function VisionSection({
  dict,
}: {
  dict: Dictionary["vision"];
}) {
  return (
    <Section id="vision" title={dict.title} variant="brand">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        {dict.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-white/80">
            {paragraph}
          </p>
        ))}
        <p className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {dict.goal}
        </p>
      </div>
    </Section>
  );
}
