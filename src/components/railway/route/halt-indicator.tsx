"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface HaltIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  minutes: number;
}

export const HaltIndicator = React.forwardRef<HTMLSpanElement, HaltIndicatorProps>(
  ({ className, minutes, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded bg-muted/65 text-muted-foreground border border-border/40",
          className
        )}
        {...props}
      >
        Halt: {minutes}m
      </span>
    );
  }
);
HaltIndicator.displayName = "HaltIndicator";
