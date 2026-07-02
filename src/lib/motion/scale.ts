import { TargetAndTransition } from "framer-motion";

export const scalePresets = {
  tap: {
    scale: 0.98,
    transition: { type: "spring", stiffness: 500, damping: 25, mass: 0.5 },
  } as TargetAndTransition,

  hover: {
    scale: 1.01,
    transition: { type: "spring", stiffness: 450, damping: 25, mass: 0.6 },
  } as TargetAndTransition,

  cardHover: {
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 22 },
  } as TargetAndTransition,
} as const;
