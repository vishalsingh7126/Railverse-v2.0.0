export const SPRING_PRESETS = {
  default: {
    type: "spring",
    stiffness: 380,
    damping: 30,
    mass: 0.8,
  },
  gentle: {
    type: "spring",
    stiffness: 180,
    damping: 20,
    mass: 1,
  },
  snappy: {
    type: "spring",
    stiffness: 450,
    damping: 26,
    mass: 0.6,
  },
  bouncy: {
    type: "spring",
    stiffness: 280,
    damping: 15,
    mass: 0.8,
  },
} as const;

export const EASE_PRESETS = {
  default: [0.16, 1, 0.3, 1], // easeOutQuint (standard Vercel/Linear ease)
  inOut: [0.65, 0, 0.35, 1], // easeInOutCubic
  out: [0.25, 1, 0.5, 1], // easeOutQuart
} as const;
