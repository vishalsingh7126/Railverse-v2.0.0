/**
 * Formats a Date object or ISO string to a human-readable day-month-year format.
 * Example: '12 Jul 2026'
 */
export function formatDate(date: Date | string | number): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "N/A";
  
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Formats a Date object or ISO string to a 24-hour time format.
 * Example: '14:30'
 */
export function formatTime(date: Date | string | number): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return "N/A";

  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

/**
 * Formats delay minutes into a human-readable duration.
 * Example: 45 -> "45 mins", 125 -> "2 hrs 5 mins"
 */
export function formatDelay(minutes: number): string {
  if (minutes <= 0) return "On Time";
  if (minutes < 60) return `${minutes} mins`;
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hrs} hr${hrs > 1 ? "s" : ""} ${mins} min${mins > 1 ? "s" : ""}` : `${hrs} hr${hrs > 1 ? "s" : ""}`;
}

/**
 * Parses Indian Railways standard PNR date format string (DD-MM-YYYY) into a Date object.
 */
export function parseRailwayDate(dateStr: string): Date | null {
  const pattern = /^(\d{2})-(\d{2})-(\d{4})$/;
  const match = dateStr.match(pattern);
  if (!match) return null;

  const [, day, month, year] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
}
