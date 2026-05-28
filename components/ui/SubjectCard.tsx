import { Card } from "@/components/ui/Card";
import { DynamicIcon, type IconName } from "@/lib/icons";

export function SubjectCard({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: IconName;
}) {
  return (
    <Card className="group h-full">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-academy-navy/5 text-academy-navy transition-colors group-hover:bg-academy-gold/20 group-hover:text-academy-gold">
        <DynamicIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-academy-navy">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-academy-slate">{description}</p>
    </Card>
  );
}
