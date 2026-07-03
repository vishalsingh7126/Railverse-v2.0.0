"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PriceDifferenceBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  difference: number;
}

export const PriceDifferenceBadge = React.forwardRef<HTMLSpanElement, PriceDifferenceBadgeProps>(
  ({ className, difference, ...props }, ref) => {
    const isCheaper = difference < 0;
    const absDiff = Math.abs(difference);

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border",
          isCheaper
            ? "bg-green-500/10 text-green-600 border-green-500/20"
            : "bg-red-500/10 text-red-600 border-red-500/20",
          className
        )}
        {...props}
      >
        {isCheaper ? `-₹${absDiff}` : `+₹${absDiff}`}
      </span>
    );
  }
);
PriceDifferenceBadge.displayName = "PriceDifferenceBadge";
