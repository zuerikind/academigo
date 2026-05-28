import Image from "next/image";
import { cn } from "@/lib/utils";

export const brandAssetPaths = {
  icon: "/brand/logo-icon.png",
  full: "/brand/logo-full.png",
} as const;

function LogoTile({
  children,
  className,
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
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

type BrandLogoProps = {
  brandName: string;
  variant: "header" | "footer" | "hero";
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
          <Image
            src={brandAssetPaths.full}
            alt=""
            width={220}
            height={140}
            unoptimized
            priority={priority}
            className="h-[7.5rem] w-auto max-w-[220px] object-contain"
            aria-hidden
          />
        </LogoTile>
        <span className="sr-only">{brandName}</span>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <span
        className={cn("inline-flex items-center gap-4", className)}
        aria-label={brandName}
      >
        <Image
          src={brandAssetPaths.icon}
          alt=""
          width={64}
          height={64}
          unoptimized
          priority={priority}
          className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
          aria-hidden
        />
        <Image
          src={brandAssetPaths.full}
          alt=""
          width={200}
          height={80}
          unoptimized
          priority={priority}
          className="hidden h-12 w-auto max-w-[200px] object-contain sm:block md:h-14 md:max-w-[240px]"
          aria-hidden
        />
        <span className="font-display text-2xl font-bold tracking-tight text-academy-navy sm:hidden">
          {brandName}
        </span>
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}
      aria-label={brandName}
    >
      <Image
        src={brandAssetPaths.icon}
        alt=""
        width={48}
        height={48}
        unoptimized
        priority={priority}
        className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
        aria-hidden
      />
      <Image
        src={brandAssetPaths.full}
        alt=""
        width={180}
        height={72}
        unoptimized
        priority={priority}
        className="hidden h-9 w-auto max-w-[160px] object-contain sm:block sm:h-10 sm:max-w-[180px] md:max-w-[200px]"
        aria-hidden
      />
      <span className="font-display text-lg font-bold tracking-tight text-academy-navy sm:text-xl">
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
  appearance?: "light" | "dark";
  priority?: boolean;
}) {
  const icon = (
    <Image
      src={brandAssetPaths.icon}
      alt=""
      width={size}
      height={size}
      unoptimized
      priority={priority}
      className="object-contain"
      style={{ width: size, height: size }}
      aria-hidden
    />
  );

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
