import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "outlineLight"
  | "ghost"
  | "link";
type ButtonSize = "sm" | "md" | "lg";
type ButtonShape = "rounded" | "pill";

const variants: Record<ButtonVariant, string> = {
  primary:
    "btn-cta-primary border shadow-md",
  secondary:
    "bg-white text-academy-navy border-2 border-academy-line shadow-soft " +
    "hover:border-[color-mix(in_srgb,var(--brand)_50%,transparent)] hover:bg-academy-mist",
  accent: "btn-cta-accent border shadow-md",
  outline:
    "bg-white text-ink-brand-deep border-2 border-[color-mix(in_srgb,var(--brand)_30%,transparent)] shadow-soft " +
    "hover:border-ink-brand hover:bg-fill-brand-tint",
  outlineLight:
    "bg-white/10 text-white border-2 border-white/40 " +
    "hover:bg-white/20 hover:border-white/60",
  ghost:
    "bg-transparent text-academy-navy border-2 border-transparent " +
    "hover:bg-academy-mist",
  link:
    "bg-transparent text-ink-brand-deep border-0 px-0 py-0 shadow-none " +
    "underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 text-[13px] gap-1.5 font-semibold",
  md: "min-h-11 px-5 text-sm gap-2 font-semibold",
  lg: "min-h-12 px-6 text-[15px] gap-2 font-semibold",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  shape = "pill",
  className,
  external,
  onClick,
  type = "button",
  fullWidth,
}: ButtonProps) {
  const radius =
    variant === "link"
      ? ""
      : shape === "pill"
        ? "rounded-full"
        : "rounded-xl";

  const base = cn(
    "inline-flex items-center justify-center tracking-tight transition-colors btn-tactile",
    variant !== "link" && sizes[size],
    radius,
    variants[variant],
    fullWidth && "w-full",
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
