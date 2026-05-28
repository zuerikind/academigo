import { Section } from "@/components/ui/Section";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import type { Dictionary } from "@/messages/types";

export function ProcessSection({
  dict,
}: {
  dict: Dictionary["process"];
}) {
  return (
    <Section
      id="process"
      title={dict.title}
      variant="white"
      eyebrow={dict.eyebrow}
    >
      <ProcessTimeline steps={dict.steps} />
    </Section>
  );
}
