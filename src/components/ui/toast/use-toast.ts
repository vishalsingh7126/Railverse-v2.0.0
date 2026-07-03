import { create } from "zustand";
import { ToastItem, ToastType } from "./types";

interface ToastStore {
  toasts: ToastItem[];
  addToast: (message: string, type?: ToastType, title?: string, duration?: number) => string;
  dismissToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (message, type = "default", title, duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastItem = { id, message, type, title, duration };

    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));

    if (duration > 0) {
      setTimeout(() => {
        set((state) => ({
          toasts: state.toasts.filter((t) => t.id !== id),
        }));
      }, duration);
    }

    return id;
  },
  dismissToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

export const toast = {
  default: (message: string, title?: string) =>
    useToastStore.getState().addToast(message, "default", title),
  success: (message: string, title?: string) =>
    useToastStore.getState().addToast(message, "success", title),
  warning: (message: string, title?: string) =>
    useToastStore.getState().addToast(message, "warning", title),
  error: (message: string, title?: string) =>
    useToastStore.getState().addToast(message, "error", title),
  loading: (message: string, title?: string) =>
    useToastStore.getState().addToast(message, "loading", title, 0),
  dismiss: (id: string) => useToastStore.getState().dismissToast(id),

  promise: <T>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
    }: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((err: unknown) => string);
    }
  ) => {
    const id = toast.loading(loading);
    return promise
      .then((data) => {
        toast.dismiss(id);
        const msg = typeof success === "function" ? success(data) : success;
        toast.success(msg);
        return data;
      })
      .catch((err) => {
        toast.dismiss(id);
        const msg = typeof error === "function" ? error(err) : error;
        toast.error(msg);
        throw err;
      });
  },
};
