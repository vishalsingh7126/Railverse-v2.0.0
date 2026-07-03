"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LiveStatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  isActive?: boolean;
}

export const LiveStatusIndicator = React.forwardRef<HTMLSpanElement, LiveStatusIndicatorProps>(
  ({ className, isActive = true, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("inline-flex items-center gap-2 text-xs font-semibold", className)}
        {...props}
      >
        <span className="relative flex h-2 w-2">
          {isActive && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          )}
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              isActive ? "bg-green-500" : "bg-muted-foreground/45"
            )}
          ></span>
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          {isActive ? "Live" : "Offline"}
        </span>
      </span>
    );
  }
);
LiveStatusIndicator.displayName = "LiveStatusIndicator";
