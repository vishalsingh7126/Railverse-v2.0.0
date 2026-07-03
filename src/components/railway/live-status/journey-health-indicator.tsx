"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface JourneyHealthIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  label?: string;
}

export const JourneyHealthIndicator = React.forwardRef<HTMLDivElement, JourneyHealthIndicatorProps>(
  ({ className, score, label = "Journey Health", ...props }, ref) => {
    const colorClass = React.useMemo(() => {
      if (score >= 90) return "bg-green-500";
      if (score >= 70) return "bg-emerald-500";
      if (score >= 50) return "bg-amber-500";
      return "bg-red-500";
    }, [score]);

    return (
      <div ref={ref} className={cn("space-y-1.5 w-full", className)} {...props}>
        <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground">
          <span>{label}</span>
          <span className="text-foreground font-bold">{score}/100</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-accent/40 overflow-hidden relative">
          <div className={cn("h-full rounded-full", colorClass)} style={{ width: `${score}%` }} />
        </div>
      </div>
    );
  }
);
JourneyHealthIndicator.displayName = "JourneyHealthIndicator";
