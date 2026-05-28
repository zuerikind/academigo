import { IconBox } from "@/components/ui/IconBox";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-academy-line bg-white p-6 shadow-card",
        "transition-[box-shadow,transform] duration-200 hover:shadow-card-hover",
        className,
      )}
    >
      <IconBox size="md">{icon}</IconBox>
      <h3 className="text-subheading mt-5 text-academy-navy">{title}</h3>
      <p className="text-body mt-2 flex-1">{description}</p>
    </article>
  );
}
