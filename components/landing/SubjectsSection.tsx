import { Section } from "@/components/ui/Section";
import { SubjectCard } from "@/components/ui/SubjectCard";
import { Badge } from "@/components/ui/Badge";
import { AnimatedGrid, AnimatedItem } from "@/components/ui/AnimatedGrid";
import { subjectIcons } from "@/lib/subjects";
import type { Dictionary } from "@/messages/types";

export function SubjectsSection({
  dict,
  common,
}: {
  dict: Dictionary["subjects"];
  common: Dictionary["common"];
}) {
  return (
    <Section id="subjects" title={dict.title} subtitle={dict.subtitle} variant="mist">
      <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-10">
        <AnimatedGrid className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {dict.active.map((subject) => (
            <AnimatedItem key={subject.id}>
              <SubjectCard
                name={subject.name}
                description={subject.description}
                icon={subjectIcons[subject.id]}
              />
            </AnimatedItem>
          ))}
        </AnimatedGrid>

        <AnimatedItem>
          <aside className="flex h-full flex-col rounded-2xl border border-dashed border-[color:var(--brand)]/30 bg-[color:var(--brand-tint)]/40 p-6 sm:p-7">
            <Badge>{common.comingSoon}</Badge>
            <p className="text-subheading mt-5 text-academy-navy">
              {dict.expansionNote}
            </p>
            <p className="text-caption mt-2">{dict.plannedLabel}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {dict.comingSoon.map((name) => (
                <li
                  key={name}
                  className="rounded-lg border border-academy-line bg-white px-3 py-1.5 text-sm font-medium text-academy-slate"
                >
                  {name}
                </li>
              ))}
            </ul>
          </aside>
        </AnimatedItem>
      </div>
    </Section>
  );
}
