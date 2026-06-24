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
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-10 xl:grid-cols-[minmax(0,360px)_1fr] xl:gap-12">
        <aside className="min-w-0 lg:sticky lg:top-28">
          <div className="rounded-2xl border border-academy-line bg-white p-4 shadow-card sm:p-5">
            <ul className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {dict.features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <li key={feature.title} className="min-w-0">
                    <div className="flex h-full min-w-0 flex-col gap-2.5 rounded-xl border border-academy-line/90 bg-academy-paper-soft p-3 transition-colors hover:bg-fill-brand-tint sm:p-3.5">
                      <IconBox size="sm" className="shrink-0">
                        <Icon strokeWidth={1.75} aria-hidden />
                      </IconBox>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] font-semibold leading-snug text-academy-navy sm:text-[13px]">
                          {feature.title}
                        </p>
                        <p className="mt-1 text-[11px] leading-snug text-[var(--academy-graphite)] sm:text-xs">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 border-t border-academy-line-strong pt-4 sm:mt-5 sm:pt-5">
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
