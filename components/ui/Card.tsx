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
        "rounded-3xl border border-academy-mist-dark/80 bg-white p-6 shadow-lg shadow-academy-navy/5 transition-shadow duration-300 hover:shadow-xl sm:p-8",
        highlight &&
          "ring-2 ring-academy-gold shadow-xl shadow-academy-gold/15",
        className,
      )}
    >
      {children}
    </div>
  );
}
