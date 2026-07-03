export const FEATURES = {
  COMMAND_PALETTE: true,
  SEARCH_OVERLAY: true,
  NOTIFICATIONS: true,
  AI_ASSISTANT: false,
  EXPERIMENTAL_DASHBOARD: false,
} as const;

export type FeatureKey = keyof typeof FEATURES;

export function isFeatureEnabled(feature: FeatureKey): boolean {
  return FEATURES[feature] ?? false;
}
