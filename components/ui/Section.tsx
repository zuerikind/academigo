"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionVariant = "white" | "mist" | "paper" | "brand";

const backgrounds: Record<SectionVariant, string> = {
  white: "bg-white",
  mist: "bg-academy-mist/80",
  paper: "bg-academy-paper-soft",
  brand: "bg-[color:var(--brand-deep)] text-white",
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  variant = "white",
  className,
  headerClassName,
  centered = true,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: SectionVariant;
  className?: string;
  headerClassName?: string;
  centered?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const motionProps = getMotionProps(!!reducedMotion);
  const onBrand = variant === "brand";

  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20 lg:py-24",
        backgrounds[variant],
        className,
      )}
    >
      <Container>
        <motion.header
          className={cn(
            "mb-12 sm:mb-14",
            centered && "mx-auto max-w-2xl text-center",
            headerClassName,
          )}
          variants={reducedMotion ? undefined : fadeUp}
          {...motionProps}
        >
          {eyebrow && (
            <p
              className={cn(
                "text-meta-brand mb-4",
                onBrand && "text-white/60",
                centered && "inline-flex items-center justify-center gap-2.5",
              )}
            >
              {centered && (
                <span
                  aria-hidden
                  className={cn(
                    "h-px w-8",
                    onBrand ? "bg-white/40" : "bg-[color:var(--brand)]/40",
                  )}
                />
              )}
              {eyebrow}
              {centered && (
                <span
                  aria-hidden
                  className={cn(
                    "h-px w-8",
                    onBrand ? "bg-white/40" : "bg-[color:var(--brand)]/40",
                  )}
                />
              )}
            </p>
          )}
          <h2
            className={cn(
              "text-display",
              onBrand ? "text-white" : "text-academy-navy",
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                "text-lead mt-4",
                onBrand ? "text-white/75" : undefined,
              )}
            >
              {subtitle}
            </p>
          )}
        </motion.header>
        {children}
      </Container>
    </section>
  );
}
