"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SeatLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string;
    colorClass: string;
  }>;
}

export const SeatLegend = React.forwardRef<HTMLDivElement, SeatLegendProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap gap-4 items-center text-xs font-semibold text-muted-foreground",
          className
        )}
        {...props}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5 font-medium">
            <span className={cn("h-2.5 w-2.5 rounded-sm shrink-0", item.colorClass)} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    );
  }
);
SeatLegend.displayName = "SeatLegend";
