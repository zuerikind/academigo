import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-academy-navy text-white hover:bg-academy-navy-light shadow-lg shadow-academy-navy/20",
  secondary:
    "bg-white text-academy-navy border border-academy-mist-dark hover:border-academy-gold/50 shadow-md",
  accent:
    "bg-academy-gold text-academy-navy hover:bg-academy-gold-light shadow-lg shadow-academy-gold/30",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-academy-navy hover:bg-academy-mist",
};

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  onClick,
  type = "button",
}: ButtonProps) {
  const base = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-academy-gold",
    variants[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
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
