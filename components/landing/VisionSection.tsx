import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/messages/types";

export function VisionSection({
  dict,
}: {
  dict: Dictionary["vision"];
}) {
  return (
    <Section id="vision" title={dict.title} variant="brand">
      <div className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-white/85">
        {dict.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="text-subheading text-white/90">{dict.goal}</p>
      </div>
    </Section>
  );
}
