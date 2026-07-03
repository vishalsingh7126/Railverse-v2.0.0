"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface MobileNavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

export interface MobileNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MobileNavItem[];
  drawerContent?: React.ReactNode;
}

export const MobileNavigation = React.forwardRef<HTMLDivElement, MobileNavigationProps>(
  ({ className, items, drawerContent, ...props }, ref) => {
    const [open, setOpen] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(
          "lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 dark:bg-background/95 backdrop-blur-md border-t border-border shadow-premium-lg px-4 py-2",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-around max-w-md mx-auto w-full">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1 rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                item.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="h-5 w-5 flex items-center justify-center">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}

          {drawerContent && (
            <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
              <DialogPrimitive.Trigger asChild>
                <button
                  type="button"
                  aria-label="Open menu"
                  className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
                >
                  <Menu className="h-5 w-5" />
                  <span>Menu</span>
                </button>
              </DialogPrimitive.Trigger>
              <AnimatePresence>
                {open && (
                  <DialogPrimitive.Portal forceMount>
                    <DialogPrimitive.Overlay asChild>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                      />
                    </DialogPrimitive.Overlay>
                    <DialogPrimitive.Content asChild>
                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 250 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-border bg-background p-6 shadow-premium-lg flex flex-col focus-visible:outline-none"
                      >
                        <div className="flex items-center justify-between mb-6">
                          <span className="font-semibold text-sm">Navigation</span>
                          <DialogPrimitive.Close asChild>
                            <button
                              type="button"
                              aria-label="Close menu"
                              className="h-8 w-8 flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </DialogPrimitive.Close>
                        </div>
                        <div className="flex-1 overflow-y-auto">{drawerContent}</div>
                      </motion.div>
                    </DialogPrimitive.Content>
                  </DialogPrimitive.Portal>
                )}
              </AnimatePresence>
            </DialogPrimitive.Root>
          )}
        </div>
      </div>
    );
  }
);
MobileNavigation.displayName = "MobileNavigation";
