"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CoachLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  coaches: Array<{
    code: string;
    type: string;
    isSelected?: boolean;
  }>;
}

export const CoachLegend = React.forwardRef<HTMLDivElement, CoachLegendProps>(
  ({ className, coaches, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap gap-2 items-center text-xs font-semibold", className)}
        {...props}
      >
        {coaches.map((c, idx) => (
          <div
            key={idx}
            className={cn(
              "px-3 py-1.5 rounded-lg border flex flex-col items-center justify-center min-w-[50px] leading-tight cursor-pointer",
              c.isSelected
                ? "border-primary bg-primary/10 text-primary font-bold"
                : "border-border bg-card text-muted-foreground hover:border-muted-foreground/40 transition-colors"
            )}
          >
            <span className="text-sm font-bold text-foreground">{c.code}</span>
            <span className="text-[9px] uppercase opacity-75">{c.type}</span>
          </div>
        ))}
      </div>
    );
  }
);
CoachLegend.displayName = "CoachLegend";
