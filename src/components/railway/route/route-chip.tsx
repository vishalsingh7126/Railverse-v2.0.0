"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface RouteChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  from: string;
  to: string;
}

export const RouteChip = React.forwardRef<HTMLSpanElement, RouteChipProps>(
  ({ className, from, to, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-card text-xs font-semibold text-foreground",
          className
        )}
        {...props}
      >
        <span className="font-bold">{from}</span>
        <span className="text-muted-foreground opacity-60">➜</span>
        <span className="font-bold">{to}</span>
      </span>
    );
  }
);
RouteChip.displayName = "RouteChip";
