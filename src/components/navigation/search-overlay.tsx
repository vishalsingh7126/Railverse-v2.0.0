"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SearchOverlayProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  inputSlot?: React.ReactNode;
  filtersSlot?: React.ReactNode;
  resultsSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  className?: string;
}

export const SearchOverlay = React.forwardRef<HTMLDivElement, SearchOverlayProps>(
  ({ className, isOpen, onOpenChange, inputSlot, filtersSlot, resultsSlot, footerSlot }, ref) => {
    return (
      <DialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
        <AnimatePresence>
          {isOpen && (
            <DialogPrimitive.Portal forceMount>
              <DialogPrimitive.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
                />
              </DialogPrimitive.Overlay>
              <DialogPrimitive.Content asChild>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className={cn(
                    "fixed left-[50%] top-[20%] z-50 w-full max-w-2xl translate-x-[-50%] border border-border bg-background shadow-premium-lg rounded-xl overflow-hidden focus-visible:outline-none flex flex-col max-h-[70vh]",
                    className
                  )}
                >
                  <div className="flex items-center border-b border-border px-4 py-2 gap-3 shrink-0">
                    <div className="flex-1 min-w-0">{inputSlot}</div>
                    <DialogPrimitive.Close asChild>
                      <button
                        type="button"
                        aria-label="Close search"
                        className="h-8 w-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </DialogPrimitive.Close>
                  </div>

                  {filtersSlot && (
                    <div className="border-b border-border px-4 py-2.5 bg-muted/20 shrink-0">
                      {filtersSlot}
                    </div>
                  )}

                  {resultsSlot && (
                    <div className="flex-1 overflow-y-auto p-2 min-h-[150px]">{resultsSlot}</div>
                  )}

                  {footerSlot && (
                    <div className="border-t border-border px-4 py-2.5 bg-muted/10 shrink-0 text-xs text-muted-foreground">
                      {footerSlot}
                    </div>
                  )}
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    );
  }
);
SearchOverlay.displayName = "SearchOverlay";
