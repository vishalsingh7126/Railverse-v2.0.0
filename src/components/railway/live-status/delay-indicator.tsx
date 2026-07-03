"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RAILWAY_TOKENS } from "@/config/railway-tokens";

export interface DelayIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  delayMinutes: number;
}

export const DelayIndicator = React.forwardRef<HTMLSpanElement, DelayIndicatorProps>(
  ({ className, delayMinutes, ...props }, ref) => {
    const config =
      delayMinutes === 0 ? RAILWAY_TOKENS.delays.onTime : RAILWAY_TOKENS.delays.delayed;

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-xs font-bold px-2 py-0.5 rounded border",
          config.bg,
          config.text,
          config.border,
          className
        )}
        {...props}
      >
        {delayMinutes === 0 ? "On Time" : `Delayed ${delayMinutes}m`}
      </span>
    );
  }
);
DelayIndicator.displayName = "DelayIndicator";
