import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  highlight,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-academy-line bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8",
        highlight &&
          "ring-1 ring-[color:var(--brand)]/35 shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
