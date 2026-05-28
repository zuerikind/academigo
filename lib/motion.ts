import type { Variants, Transition } from "framer-motion";

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export function getMotionProps(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-60px" as const },
      transition: { duration: 0.2 },
    };
  }
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" as const },
  };
}
