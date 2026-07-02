import { apiClient, RequestOptions } from "./client";

export const http = {
  get<T>(path: string, options?: RequestOptions): Promise<T> {
    return apiClient<T>(path, { ...options, method: "GET" });
  },

  post<T>(path: string, body: unknown, options?: RequestOptions): Promise<T> {
    return apiClient<T>(path, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  put<T>(path: string, body: unknown, options?: RequestOptions): Promise<T> {
    return apiClient<T>(path, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
  },

  delete<T>(path: string, options?: RequestOptions): Promise<T> {
    return apiClient<T>(path, { ...options, method: "DELETE" });
  },
};
export type { RequestOptions };
