import { Variants } from "framer-motion";
import { SPRING_PRESETS } from "./transitions";

export const drawerVariants = {
  right: {
    hidden: { x: "100%" },
    visible: { x: 0, transition: SPRING_PRESETS.default },
    exit: { x: "100%", transition: { type: "tween", ease: "easeIn", duration: 0.2 } },
  } as Variants,
  left: {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: SPRING_PRESETS.default },
    exit: { x: "-100%", transition: { type: "tween", ease: "easeIn", duration: 0.2 } },
  } as Variants,
  bottom: {
    hidden: { y: "100%" },
    visible: { y: 0, transition: SPRING_PRESETS.default },
    exit: { y: "100%", transition: { type: "tween", ease: "easeIn", duration: 0.2 } },
  } as Variants,
  top: {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: SPRING_PRESETS.default },
    exit: { y: "-100%", transition: { type: "tween", ease: "easeIn", duration: 0.2 } },
  } as Variants,
} as const;
