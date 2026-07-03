"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

export interface LoadingOverlayProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  visible: boolean;
  message?: string;
  usePortal?: boolean;
}

export const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ className, visible, message, usePortal = true, ...props }, ref) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    const overlayContent = (
      <AnimatePresence>
        {visible && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "absolute inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-background/60 dark:bg-background/40 backdrop-blur-sm transition-all",
              usePortal && "fixed",
              className
            )}
            role="status"
            aria-live="polite"
            aria-busy={visible}
            {...props}
          >
            <Spinner variant="brand" size="lg" />
            {message && (
              <span className="text-sm font-semibold text-foreground tracking-wide">{message}</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );

    if (usePortal) {
      if (!mounted) return null;
      return createPortal(overlayContent, document.body);
    }

    return overlayContent;
  }
);
LoadingOverlay.displayName = "LoadingOverlay";
