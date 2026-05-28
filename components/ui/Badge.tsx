import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-academy-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-academy-navy",
        className,
      )}
    >
      {children}
    </span>
  );
}
