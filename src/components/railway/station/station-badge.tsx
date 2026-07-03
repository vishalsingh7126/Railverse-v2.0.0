"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StationBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  code: string;
}

export const StationBadge = React.forwardRef<HTMLSpanElement, StationBadgeProps>(
  ({ className, code, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "font-mono font-extrabold text-[11px] tracking-wider px-2 py-0.5 rounded border border-border bg-muted/60 text-muted-foreground",
          className
        )}
        {...props}
      >
        {code.toUpperCase()}
      </span>
    );
  }
);
StationBadge.displayName = "StationBadge";
