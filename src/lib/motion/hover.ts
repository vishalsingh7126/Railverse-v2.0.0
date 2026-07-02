import { TargetAndTransition } from "framer-motion";

export const hoverPresets = {
  brighten: {
    filter: "brightness(1.05)",
    transition: { duration: 0.12 },
  } as TargetAndTransition,

  dim: {
    opacity: 0.85,
    transition: { duration: 0.12 },
  } as TargetAndTransition,

  lift: {
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  } as TargetAndTransition,
} as const;
