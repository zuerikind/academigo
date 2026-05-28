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
      headerClassName="max-w-2xl text-left sm:text-left"
    >
      <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] xl:gap-12">
        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {dict.features.map((label, index) => {
              const Icon = featureIcons[index];
              return (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-academy-line bg-academy-paper-soft px-4 py-3.5 transition-colors hover:border-[color:var(--brand)]/25 hover:bg-white"
                >
                  <IconBox size="sm">
                    <Icon strokeWidth={1.75} aria-hidden />
                  </IconBox>
                  <span className="text-sm font-medium text-academy-navy">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <Button
              href={siteConfig.links.platform}
              external
              variant="accent"
              size="lg"
            >
              {buttons.testPlatform}
            </Button>
          </div>
        </div>
        <div className="w-full min-w-0 xl:justify-self-stretch">
          <DashboardMockup variant="platform" dashboard={dashboard} />
        </div>
      </div>
    </Section>
  );
}
