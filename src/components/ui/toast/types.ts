export type ToastType = "default" | "success" | "warning" | "error" | "loading";

export interface ToastItem {
  id: string;
  message: string;
  title?: string;
  type: ToastType;
  duration?: number;
}
