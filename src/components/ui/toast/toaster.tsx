"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import { useToastStore } from "./use-toast";
import { ToastCard } from "./toast";

export function Toaster() {
  const { toasts } = useToastStore();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || toasts.length === 0) return null;

  return createPortal(
    <div
      className="fixed bottom-4 right-4 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:bottom-6 sm:right-6 sm:max-w-[380px] pointer-events-none"
      role="region"
      aria-label="Notifications"
    >
      <AnimatePresence mode="popLayout">
        {toasts.map((item) => (
          <ToastCard key={item.id} toast={item} />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
Toaster.displayName = "Toaster";
