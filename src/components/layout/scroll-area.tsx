"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> {
  orientation?: "vertical" | "horizontal" | "both";
}

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className, children, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit] outline-none">
        {children}
      </ScrollAreaPrimitive.Viewport>

      {(orientation === "vertical" || orientation === "both") && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="vertical"
          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-150 ease-out hover:bg-black/5 dark:hover:bg-white/5 w-2"
        >
          <ScrollAreaPrimitive.Thumb className="flex-1 bg-muted-foreground/30 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px] hover:bg-muted-foreground/50 transition-colors" />
        </ScrollAreaPrimitive.Scrollbar>
      )}

      {(orientation === "horizontal" || orientation === "both") && (
        <ScrollAreaPrimitive.Scrollbar
          orientation="horizontal"
          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-150 ease-out hover:bg-black/5 dark:hover:bg-white/5 h-2 flex-col"
        >
          <ScrollAreaPrimitive.Thumb className="flex-1 bg-muted-foreground/30 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px] hover:bg-muted-foreground/50 transition-colors" />
        </ScrollAreaPrimitive.Scrollbar>
      )}

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);
ScrollArea.displayName = "ScrollArea";
