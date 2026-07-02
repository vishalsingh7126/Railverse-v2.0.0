import { Variants } from "framer-motion";

export const fadeVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.15, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, ease: "easeIn" },
  },
};

export const slideFadeVariants = (
  direction: "up" | "down" | "left" | "right" = "up",
  distance = 8
): Variants => {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
    }
  };

  const offset = getOffset();

  return {
    initial: { opacity: 0, ...offset },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 380,
        damping: 30,
        mass: 0.8,
      },
    },
    exit: {
      opacity: 0,
      ...offset,
      transition: { duration: 0.12, ease: "easeIn" },
    },
  };
};
