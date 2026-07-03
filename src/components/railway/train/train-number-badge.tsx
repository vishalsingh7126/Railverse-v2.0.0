"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TrainNumberBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  number: string;
}

export const TrainNumberBadge = React.forwardRef<HTMLSpanElement, TrainNumberBadgeProps>(
  ({ className, number, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "font-mono font-bold text-xs tracking-wider px-2 py-0.5 rounded border border-border bg-muted text-muted-foreground",
          className
        )}
        {...props}
      >
        {number}
      </span>
    );
  }
);
TrainNumberBadge.displayName = "TrainNumberBadge";
