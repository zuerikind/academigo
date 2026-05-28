import { Button } from "@/components/ui/Button";
import { appSignupUrl } from "@/lib/app-links";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type Labels = {
  student: string;
  teacher: string;
};

export function SignUpCtaGroup({
  locale,
  labels,
  size = "lg",
  className,
  vertical = false,
}: {
  locale: Locale;
  labels: Labels;
  size?: "sm" | "md" | "lg";
  className?: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={cn(
        vertical
          ? "flex w-full flex-col gap-3"
          : "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      <Button
        href={appSignupUrl(locale, "student")}
        external
        variant="accent"
        size={size}
        className="whitespace-nowrap"
        fullWidth={vertical}
      >
        {labels.student}
      </Button>
      <Button
        href={appSignupUrl(locale, "teacher")}
        external
        variant="primary"
        size={size}
        className="whitespace-nowrap"
        fullWidth={vertical}
      >
        {labels.teacher}
      </Button>
    </div>
  );
}
