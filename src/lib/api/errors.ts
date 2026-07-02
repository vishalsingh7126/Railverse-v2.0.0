import { ApiError } from "./types";
import { logger } from "../logger";

export class RailverseApiError extends Error {
  public code: string;
  public details?: unknown;

  constructor(error: ApiError) {
    super(error.message);
    this.name = "RailverseApiError";
    this.code = error.code;
    this.details = error.details;
  }
}

export function parseApiError(error: unknown): RailverseApiError {
  if (error instanceof RailverseApiError) {
    return error;
  }

  // Handle standard HTTP fetch errors
  if (error instanceof Response) {
    return new RailverseApiError({
      code: `HTTP_${error.status}`,
      message: error.statusText || `HTTP response error: ${error.status}`,
    });
  }

  if (error instanceof Error) {
    return new RailverseApiError({
      code: "UNKNOWN_ERROR",
      message: error.message,
    });
  }

  return new RailverseApiError({
    code: "UNKNOWN_ERROR",
    message: "An unexpected error occurred",
    details: error,
  });
}

export function handleApiError(error: unknown, context?: string): never {
  const parsed = parseApiError(error);
  logger.error(
    `API Error in context: ${context || "unknown"} [${parsed.code}] - ${parsed.message}`,
    parsed
  );
  throw parsed;
}
