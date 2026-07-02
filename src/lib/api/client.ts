import { env } from "@/config/env";
import { RailverseApiError } from "./errors";
import { ApiFailureResponse, ApiResponse } from "./types";

interface RequestOptions extends RequestInit {
  timeout?: number;
}

export async function apiClient<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { timeout = env.TRAVELCORE_API_TIMEOUT, ...initOptions } = options;
  
  // Use relative paths if starting with /api, otherwise use the core backend API URL
  const isLocalApi = path.startsWith("/api/");
  const baseUrl = isLocalApi ? "" : env.TRAVELCORE_API_URL;
  const url = `${baseUrl}${path}`;

  const headers = new Headers(initOptions.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  
  // Attach key only for external core requests, local BFF routes handle their own authorization
  if (!isLocalApi && env.TRAVELCORE_API_KEY) {
    headers.set("Authorization", `Bearer ${env.TRAVELCORE_API_KEY}`);
  }

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...initOptions,
      headers,
      signal: controller.signal,
    });

    clearTimeout(id);

    const json = await response.json().catch(() => null);

    if (!response.ok) {
      if (json && typeof json === "object" && "success" in json && json.success === false) {
        const failJson = json as ApiFailureResponse;
        throw new RailverseApiError(failJson.error);
      }
      throw new RailverseApiError({
        code: `HTTP_${response.status}`,
        message: response.statusText || `Request failed with status ${response.status}`,
      });
    }

    if (json && typeof json === "object" && "success" in json && json.success === true) {
      const successJson = json as ApiResponse<T>;
      return successJson.data;
    }

    // Fallback if the endpoint returns raw JSON data without custom wrapping
    return json as T;
  } catch (error: unknown) {
    clearTimeout(id);
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new RailverseApiError({
        code: "TIMEOUT",
        message: `Request timed out after ${timeout}ms`,
      });
    }
    throw error;
  }
}
export type { RequestOptions };
