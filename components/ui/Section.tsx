"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionVariant = "white" | "mist" | "paper" | "brand";

const backgrounds: Record<SectionVariant, string> = {
  white: "bg-white",
  mist: "bg-academy-mist",
  paper: "bg-academy-paper-soft",
  brand: "bg-[color:var(--brand-deep)] text-white",
};

export function Section({
  id,
  title,
  subtitle,
  children,
  variant = "white",
  className,
  headerClassName,
  centered = true,
}: {
  id?: string;
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
      className={cn("py-[var(--rhythm-sm)] sm:py-[var(--rhythm-md)]", backgrounds[variant], className)}
    >
      <Container>
        <motion.header
          className={cn(
            "mb-12 sm:mb-14",
            centered && "mx-auto max-w-3xl text-center",
            headerClassName,
          )}
          variants={reducedMotion ? undefined : fadeUp}
          {...motionProps}
        >
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
                onBrand && "text-white/75",
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
