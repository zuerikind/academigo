import { Container } from "@/components/ui/Container";
import { BookOpen, Monitor, Users } from "lucide-react";
import type { Dictionary } from "@/messages/types";

const pillarIcons = [BookOpen, Users, Monitor] as const;

export function VisionSection({
  dict,
}: {
  dict: Dictionary["vision"];
}) {
  return (
    <section
      id="vision"
      className="relative scroll-mt-24 overflow-hidden border-y border-[color-mix(in_srgb,var(--brand-deep)_80%,black)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(145deg,var(--brand-deep)_0%,var(--academy-navy)_48%,#152a45_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[color-mix(in_srgb,var(--brand)_35%,transparent)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[color-mix(in_srgb,var(--accent-blue)_22%,transparent)] blur-3xl"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-meta-brand inline-flex items-center justify-center gap-2.5 text-white/70">
            <span aria-hidden className="h-px w-8 bg-white/30" />
            {dict.eyebrow}
            <span aria-hidden className="h-px w-8 bg-white/30" />
          </p>
          <h2 className="text-display mt-5 text-white">{dict.title}</h2>
          <p className="text-lead-on-dark mx-auto mt-5 max-w-2xl sm:text-lg">
            {dict.lead}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {dict.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            return (
              <li
                key={pillar.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/20">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  {pillar.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/20 bg-white/10 px-6 py-6 text-center backdrop-blur-sm sm:px-8 sm:py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
            {dict.goalLabel}
          </p>
          <p className="font-display mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {dict.goal}
          </p>
        </div>
      </Container>
    </section>
  );
}
