"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/messages/types";

export function ProcessTimeline({
  steps,
}: {
  steps: Dictionary["process"]["steps"];
}) {
  const reducedMotion = useReducedMotion();

  const grid = (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {steps.map((step, index) => (
        <li key={step.title}>
          <StepCard step={step} number={index + 1} isLast={index === steps.length - 1} />
        </li>
      ))}
    </ol>
  );

  if (reducedMotion) return grid;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
    >
      <motion.ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5" variants={staggerContainer}>
        {steps.map((step, index) => (
          <motion.li key={step.title} variants={fadeUp}>
            <StepCard
              step={step}
              number={index + 1}
              isLast={index === steps.length - 1}
            />
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  );
}

function StepCard({
  step,
  number,
  isLast,
}: {
  step: Dictionary["process"]["steps"][number];
  number: number;
  isLast: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border border-academy-line bg-white p-6 shadow-card",
        "lg:pt-8",
      )}
    >
      {!isLast && (
        <span
          className="absolute -right-3 top-9 hidden h-0.5 w-6 bg-[color:var(--brand)]/35 lg:block"
          aria-hidden
        />
      )}
      <div className="flex items-center gap-3">
        <span
          className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--brand-deep)] text-lg font-bold text-white shadow-[var(--shadow-button)]"
          aria-hidden
        >
          {number}
        </span>
      </div>
      <h3 className="text-subheading mt-5 text-academy-navy">{step.title}</h3>
      <p className="text-body mt-2">{step.description}</p>
    </div>
  );
}
