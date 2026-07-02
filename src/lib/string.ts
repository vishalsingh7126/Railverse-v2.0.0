/**
 * Capitalizes the first letter of each word in a string, typical for city or station names.
 * Example: "MUMBAI CENTRAL" -> "Mumbai Central"
 */
export function capitalizeWords(str: string): string {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Truncates a string to a maximum length and appends an ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "…";
}

/**
 * Sanitizes and extracts the 10-digit number from a raw PNR string.
 */
export function cleanPnr(pnr: string): string {
  return pnr.replace(/\D/g, "").slice(0, 10);
}
