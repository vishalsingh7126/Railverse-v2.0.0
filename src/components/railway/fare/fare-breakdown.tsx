"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FareBreakdownItem {
  label: string;
  amount: number;
}

export interface FareBreakdownProps extends React.HTMLAttributes<HTMLDivElement> {
  breakdown: FareBreakdownItem[];
  total: number;
}

export const FareBreakdown = React.forwardRef<HTMLDivElement, FareBreakdownProps>(
  ({ className, breakdown, total, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-premium-sm flex flex-col gap-4 text-xs font-semibold",
          className
        )}
        {...props}
      >
        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
          Fare Breakdown
        </span>

        <div className="space-y-2 border-b border-border/50 pb-3 font-medium">
          {breakdown.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="text-foreground font-bold">₹{item.amount}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-sm font-bold text-foreground">
          <span>Total Fare</span>
          <span>₹{total}</span>
        </div>
      </div>
    );
  }
);
FareBreakdown.displayName = "FareBreakdown";
