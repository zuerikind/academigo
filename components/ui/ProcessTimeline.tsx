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

  if (reducedMotion) {
    return (
      <ol className="grid gap-8 md:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative text-center">
            <StepCard step={step} number={index + 1} />
          </li>
        ))}
      </ol>
    );
  }

  return (
    <motion.ol
      className="relative grid gap-10 md:grid-cols-4 md:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      <motion.div
        className="absolute left-0 right-0 top-8 hidden h-0.5 origin-left bg-academy-mist-dark md:block"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1, transition: { duration: 1, delay: 0.2 } },
        }}
        aria-hidden
      />
      {steps.map((step, index) => (
        <motion.li key={step.title} className="relative" variants={fadeUp}>
          <StepCard step={step} number={index + 1} animated />
        </motion.li>
      ))}
    </motion.ol>
  );
}

function StepCard({
  step,
  number,
  animated,
}: {
  step: Dictionary["process"]["steps"][number];
  number: number;
  animated?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={cn(
          "relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--brand-deep)] text-lg font-bold text-white shadow-card",
          animated && "ring-4 ring-[color:var(--brand)]/25",
        )}
      >
        {number}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-academy-navy">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-academy-slate">
        {step.description}
      </p>
    </div>
  );
}
