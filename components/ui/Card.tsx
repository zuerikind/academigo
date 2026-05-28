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
        "rounded-2xl border border-academy-line bg-white p-6 shadow-card sm:p-7",
        "transition-[box-shadow,transform] duration-200 hover:shadow-card-hover",
        highlight &&
          "relative border-[color:var(--brand)]/30 ring-2 ring-[color:var(--brand)]/15 shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
