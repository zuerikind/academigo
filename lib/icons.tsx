import {
  Award,
  Atom,
  BookOpen,
  Calculator,
  ClipboardCheck,
  FlaskConical,
  Globe,
  GraduationCap,
  MapPin,
  Monitor,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap = {
  Award,
  Atom,
  BookOpen,
  Calculator,
  ClipboardCheck,
  FlaskConical,
  Globe,
  GraduationCap,
  MapPin,
  Monitor,
  Target,
  TrendingUp,
  Users,
} as const;

export type IconName = keyof typeof iconMap;

export function DynamicIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon: LucideIcon = iconMap[name];
  return <Icon className={className} aria-hidden />;
}
