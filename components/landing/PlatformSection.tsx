import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IconBox } from "@/components/ui/IconBox";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { siteConfig } from "@/config/site";
import {
  BarChart2,
  Brain,
  CheckCircle2,
  ClipboardList,
  LineChart,
  Sparkles,
} from "lucide-react";
import type { Dictionary } from "@/messages/types";

const featureIcons = [
  ClipboardList,
  CheckCircle2,
  Sparkles,
  LineChart,
  Brain,
  BarChart2,
] as const;

export function PlatformSection({
  dict,
  buttons,
  dashboard,
}: {
  dict: Dictionary["platform"];
  buttons: Dictionary["common"]["buttons"];
  dashboard: Dictionary["dashboard"];
}) {
  return (
    <Section
      id="platform"
      eyebrow={dict.eyebrow}
      title={dict.title}
      subtitle={dict.subtitle}
      variant="paper"
      centered={false}
      headerClassName="max-w-2xl text-left"
    >
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-10 xl:gap-12">
        <aside className="min-w-0 lg:sticky lg:top-28">
          <div className="rounded-2xl border border-academy-line bg-white p-5 shadow-card sm:p-6">
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
              {dict.features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <li key={feature.title}>
                    <div className="group flex h-full gap-3 rounded-xl border border-academy-line/80 bg-academy-paper-soft px-3 py-3 transition-colors hover:border-[color-mix(in_srgb,var(--brand)_35%,transparent)] hover:bg-fill-brand-tint">
                      <IconBox
                        size="sm"
                        className="mt-0.5 shrink-0 transition-colors group-hover:bg-[color-mix(in_srgb,var(--brand)_12%,white)]"
                      >
                        <Icon strokeWidth={1.75} aria-hidden />
                      </IconBox>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-semibold leading-snug text-academy-navy">
                          {feature.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-snug text-academy-slate">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 border-t border-academy-line pt-5">
              <Button
                href={siteConfig.links.platform}
                external
                variant="accent"
                size="lg"
                fullWidth
              >
                {buttons.testPlatform}
              </Button>
            </div>
          </div>
        </aside>

        <div className="min-w-0 w-full">
          <DashboardMockup variant="platform" dashboard={dashboard} />
        </div>
      </div>
    </Section>
  );
}
