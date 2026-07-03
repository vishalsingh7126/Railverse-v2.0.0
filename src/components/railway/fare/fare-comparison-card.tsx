"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FareComparisonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items: Array<{
    tierName: string;
    price: number;
    difference?: number;
    availabilityStatus?: string;
  }>;
}

export const FareComparisonCard = React.forwardRef<HTMLDivElement, FareComparisonCardProps>(
  ({ className, title = "Fare Comparison", items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-premium-sm flex flex-col gap-4",
          className
        )}
        {...props}
      >
        {title && (
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            {title}
          </span>
        )}

        <div className="flex flex-col gap-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0 text-xs font-semibold"
            >
              <div className="flex flex-col">
                <span className="text-foreground font-bold">{item.tierName}</span>
                {item.availabilityStatus && (
                  <span className="text-[10px] text-muted-foreground mt-0.5">
                    {item.availabilityStatus}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 font-bold text-sm">
                <span>₹{item.price}</span>
                {item.difference !== undefined && (
                  <span
                    className={cn(
                      "text-[9px] uppercase px-1.5 py-0.5 rounded border font-bold",
                      item.difference < 0
                        ? "bg-green-500/10 text-green-600 border-green-500/20"
                        : "bg-red-500/10 text-red-600 border-red-500/20"
                    )}
                  >
                    {item.difference < 0 ? "Cheapest" : `+₹${item.difference}`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
FareComparisonCard.displayName = "FareComparisonCard";
