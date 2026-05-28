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
];

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
      title={dict.title}
      subtitle={dict.subtitle}
      variant="white"
      centered={false}
      headerClassName="max-w-2xl text-left"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-12">
        <div className="flex min-w-0 flex-col">
          <ul className="grid gap-3">
            {dict.features.map((label, index) => {
              const Icon = featureIcons[index];
              return (
                <li
                  key={label}
                  className="flex min-w-0 items-start gap-3 rounded-xl border border-academy-line bg-white p-4 shadow-soft"
                >
                  <IconBox size="sm" className="mt-0.5 shrink-0">
                    <Icon strokeWidth={1.75} aria-hidden />
                  </IconBox>
                  <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-academy-navy">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
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
        <div className="min-w-0 w-full">
          <DashboardMockup variant="platform" dashboard={dashboard} />
        </div>
      </div>
    </Section>
  );
}
