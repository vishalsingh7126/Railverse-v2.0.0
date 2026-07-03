"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FareChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  amount: number;
}

export const FareChip = React.forwardRef<HTMLSpanElement, FareChipProps>(
  ({ className, amount, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-xs font-bold px-2 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary",
          className
        )}
        {...props}
      >
        ₹{amount}
      </span>
    );
  }
);
FareChip.displayName = "FareChip";
