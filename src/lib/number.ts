/**
 * Formats a number as Indian Currency (INR).
 * Example: 150000 -> "₹1,50,000.00" or "₹1,50,000" if no decimals
 */
export function formatINR(value: number, includeDecimals = false): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: includeDecimals ? 2 : 0,
    maximumFractionDigits: includeDecimals ? 2 : 0,
  }).format(value);
}

/**
 * Returns a rounded number to the specified decimal places.
 */
export function roundTo(value: number, decimals = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

/**
 * Formats a ratio as a percentage.
 * Example: 0.85 -> "85%"
 */
export function formatPercentage(value: number, decimals = 0): string {
  return new Intl.NumberFormat("en-IN", {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
