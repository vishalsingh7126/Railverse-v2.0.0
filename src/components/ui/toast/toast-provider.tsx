"use client";

import * as React from "react";
import { Toaster } from "./toaster";

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
ToastProvider.displayName = "ToastProvider";
