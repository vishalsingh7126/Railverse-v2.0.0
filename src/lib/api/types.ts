export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}

export interface ApiResponse<T> {
  success: true;
  data: T;
}

export interface ApiFailureResponse {
  success: false;
  error: ApiError;
}

export type ApiResult<T> = ApiResponse<T> | ApiFailureResponse;
