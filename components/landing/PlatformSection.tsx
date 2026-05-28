import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
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
      headerClassName="max-w-3xl"
    >
      <div className="grid items-start gap-10 xl:grid-cols-[0.65fr_1.35fr] xl:gap-10">
        <div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {dict.features.map((label, index) => {
              const Icon = featureIcons[index];
              return (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-academy-mist-dark bg-academy-mist/50 px-4 py-3"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-academy-gold"
                    aria-hidden
                  />
                  <span className="font-medium text-academy-navy">{label}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <Button href={siteConfig.links.platform} external variant="primary">
              {buttons.testPlatform}
            </Button>
          </div>
        </div>
        <div className="w-full xl:justify-self-end">
          <DashboardMockup variant="platform" dashboard={dashboard} />
        </div>
      </div>
    </Section>
  );
}
