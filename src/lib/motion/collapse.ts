import { Variants } from "framer-motion";

export const collapseVariants: Variants = {
  initial: { height: 0, opacity: 0, overflow: "hidden" },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { type: "spring", stiffness: 380, damping: 32, mass: 0.8 },
      opacity: { duration: 0.18, ease: "easeOut" },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { type: "spring", stiffness: 380, damping: 32, mass: 0.8 },
      opacity: { duration: 0.12, ease: "easeIn" },
    },
  },
};
