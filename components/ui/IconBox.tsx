import { cn } from "@/lib/utils";

export function IconBox({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-9 w-9 rounded-lg [&_svg]:h-4 [&_svg]:w-4",
    md: "h-11 w-11 rounded-xl [&_svg]:h-5 [&_svg]:w-5",
    lg: "h-14 w-14 rounded-2xl [&_svg]:h-7 [&_svg]:w-7",
  };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-brand-tint text-brand-deep",
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
