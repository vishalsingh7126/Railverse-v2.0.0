import { logger } from "./logger";

export const safeLocalStorage = {
  getItem<T>(key: string, fallback: T): T {
    if (typeof window === "undefined") return fallback;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : fallback;
    } catch (error) {
      logger.error(`Error reading key "${key}" from localStorage`, error);
      return fallback;
    }
  },

  setItem<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      logger.error(`Error writing key "${key}" to localStorage`, error);
    }
  },

  removeItem(key: string): void {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      logger.error(`Error removing key "${key}" from localStorage`, error);
    }
  },
};
