import Image from "next/image";
import { cn } from "@/lib/utils";

export const brandAssetPaths = {
  icon: "/brand/logo-icon.png",
  full: "/brand/logo-full.png",
} as const;

type LogoAppearance = "light" | "dark";

/**
 * White tile so navy line-art PNGs stay visible on dark navy sections.
 * Do not use CSS invert on raster logos with white backgrounds.
 */
function LogoTile({
  children,
  size = "md",
  className,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    sm: "h-11 w-11 p-1.5",
    md: "h-14 w-14 p-2",
    lg: "h-16 w-16 p-2.5",
    xl: "min-h-[7rem] min-w-[7rem] p-4 sm:min-h-[8rem] sm:min-w-[8rem] sm:p-5",
  };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/15 ring-1 ring-white/90",
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}

function LogoIconImage({
  size,
  className,
  priority,
}: {
  size: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={brandAssetPaths.icon}
      alt=""
      width={size}
      height={size}
      unoptimized
      priority={priority}
      className={cn("object-contain", className)}
      style={{ width: size, height: size, maxWidth: "100%", maxHeight: "100%" }}
      aria-hidden
    />
  );
}

function LogoFullImage({
  className,
  priority,
  maxHeight = 112,
}: {
  className?: string;
  priority?: boolean;
  maxHeight?: number;
}) {
  return (
    <Image
      src={brandAssetPaths.full}
      alt=""
      width={200}
      height={220}
      unoptimized
      priority={priority}
      className={cn("w-auto object-contain", className)}
      style={{ height: maxHeight, width: "auto", maxWidth: "100%" }}
      aria-hidden
    />
  );
}

type BrandLogoProps = {
  brandName: string;
  variant: "header" | "footer";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  brandName,
  variant,
  className,
  priority,
}: BrandLogoProps) {
  if (variant === "footer") {
    return (
      <div className={cn("inline-block", className)}>
        <LogoTile size="xl">
          <LogoFullImage priority={priority} maxHeight={120} />
        </LogoTile>
        <span className="sr-only">{brandName}</span>
      </div>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-3", className)}
      aria-label={brandName}
    >
      <LogoIconImage size={40} priority={priority} className="sm:h-11 sm:w-11" />
      <span className="text-xl font-bold tracking-tight text-academy-navy sm:text-[1.35rem]">
        {brandName}
      </span>
    </span>
  );
}

export function BrandMark({
  brandName,
  className,
  size = 40,
  appearance = "light",
  priority,
}: {
  brandName: string;
  className?: string;
  size?: number;
  appearance?: LogoAppearance;
  priority?: boolean;
}) {
  const icon = <LogoIconImage size={size} priority={priority} />;

  if (appearance === "dark") {
    const tileSize = size >= 44 ? "md" : "sm";
    return (
      <span
        className={cn("inline-flex", className)}
        aria-label={brandName}
        role="img"
      >
        <LogoTile size={tileSize}>{icon}</LogoTile>
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex shrink-0", className)}
      aria-label={brandName}
      role="img"
    >
      {icon}
    </span>
  );
}
