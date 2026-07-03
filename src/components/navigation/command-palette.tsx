"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CommandPaletteProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export const CommandPalette = React.forwardRef<HTMLDivElement, CommandPaletteProps>(
  ({ className, isOpen, onOpenChange, children }, ref) => {
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
                    "fixed left-[50%] top-[20%] z-50 w-full max-w-lg translate-x-[-50%] border border-border bg-background shadow-premium-lg rounded-xl overflow-hidden focus-visible:outline-none flex flex-col max-h-[50vh]",
                    className
                  )}
                >
                  <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    );
  }
);
CommandPalette.displayName = "CommandPalette";

export interface CommandPaletteInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onValueChange?: (val: string) => void;
}

export const CommandPaletteInput = React.forwardRef<HTMLInputElement, CommandPaletteInputProps>(
  ({ className, value, onValueChange, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 shrink-0">
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onValueChange?.(e.target.value)}
          className={cn(
            "w-full bg-transparent border-0 outline-none text-sm placeholder:text-muted-foreground text-foreground",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
CommandPaletteInput.displayName = "CommandPaletteInput";

export const CommandPaletteList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-y-auto p-2 min-h-[100px]", className)}
      {...props}
    />
  );
});
CommandPaletteList.displayName = "CommandPaletteList";

export const CommandPaletteGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { heading?: string }
>(({ className, heading, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-1 py-2", className)} {...props}>
      {heading && (
        <div className="px-2 pb-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          {heading}
        </div>
      )}
      <div className="space-y-0.5">{children}</div>
    </div>
  );
});
CommandPaletteGroup.displayName = "CommandPaletteGroup";

export interface CommandPaletteItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const CommandPaletteItem = React.forwardRef<HTMLButtonElement, CommandPaletteItemProps>(
  ({ className, active = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left focus:outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent/40 cursor-pointer",
          active ? "bg-accent text-accent-foreground" : "text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
CommandPaletteItem.displayName = "CommandPaletteItem";
