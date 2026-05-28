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
        "inline-flex items-center rounded-full bg-[color:var(--brand-tint)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--brand-deep)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
