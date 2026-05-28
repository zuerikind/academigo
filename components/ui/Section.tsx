"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionVariant = "white" | "mist" | "navy";

const backgrounds: Record<SectionVariant, string> = {
  white: "bg-white",
  mist: "bg-academy-mist",
  navy: "bg-academy-navy text-white",
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

  return (
    <section id={id} className={cn("py-20 sm:py-28", backgrounds[variant], className)}>
      <Container>
        <motion.header
          className={cn(
            "mb-12 sm:mb-16",
            centered && "mx-auto max-w-3xl text-center",
            headerClassName,
          )}
          variants={reducedMotion ? undefined : fadeUp}
          {...motionProps}
        >
          <h2
            className={cn(
              "text-3xl font-bold tracking-tight sm:text-4xl",
              variant === "navy" ? "text-white" : "text-academy-navy",
            )}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={cn(
                "mt-4 text-lg leading-relaxed",
                variant === "navy" ? "text-white/80" : "text-academy-slate",
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
