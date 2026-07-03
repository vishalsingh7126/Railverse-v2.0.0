"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SeatBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tier: string;
}

export const SeatBadge = React.forwardRef<HTMLSpanElement, SeatBadgeProps>(
  ({ className, tier, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-xs font-bold px-2 py-0.5 rounded border border-border bg-card text-foreground",
          className
        )}
        {...props}
      >
        {tier.toUpperCase()}
      </span>
    );
  }
);
SeatBadge.displayName = "SeatBadge";
