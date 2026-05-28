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
    <Section id="subjects" title={dict.title} variant="mist">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <AnimatedGrid className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
          <div className="h-full rounded-3xl border border-academy-mist-dark bg-white p-6 shadow-lg sm:p-8">
            <Badge>{common.comingSoon}</Badge>
            <p className="mt-4 text-lg font-semibold text-academy-navy">
              {dict.expansionNote}
            </p>
            <p className="mt-2 text-sm text-academy-slate">{dict.plannedLabel}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dict.comingSoon.map((name) => (
                <li
                  key={name}
                  className="rounded-xl bg-academy-mist px-3 py-1.5 text-sm font-medium text-academy-slate"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedItem>
      </div>
    </Section>
  );
}
