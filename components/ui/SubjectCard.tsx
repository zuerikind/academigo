import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
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
      <IconBox size="lg">
        <DynamicIcon name={icon} />
      </IconBox>
      <h3 className="text-subheading mt-5 text-academy-navy">{name}</h3>
      <p className="text-body mt-2">{description}</p>
    </Card>
  );
}
