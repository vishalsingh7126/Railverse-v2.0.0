import { Variants } from "framer-motion";
import { SPRING_PRESETS } from "./transitions";

export const modalVariants = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  } as Variants,
  content: {
    hidden: { opacity: 0, scale: 0.96, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: SPRING_PRESETS.snappy,
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      y: 8,
      transition: { duration: 0.15, ease: "easeIn" },
    },
  } as Variants,
} as const;
