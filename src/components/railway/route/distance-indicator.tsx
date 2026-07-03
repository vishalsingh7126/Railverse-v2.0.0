"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DistanceIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  distanceKm: number;
  label?: string;
}

export const DistanceIndicator = React.forwardRef<HTMLDivElement, DistanceIndicatorProps>(
  ({ className, distanceKm, label = "Distance", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-2 text-xs font-semibold text-muted-foreground",
          className
        )}
        {...props}
      >
        <span className="text-muted-foreground/60 text-[9px] uppercase font-bold tracking-wider">
          {label}:
        </span>
        <span className="text-foreground font-bold">{distanceKm} km</span>
      </div>
    );
  }
);
DistanceIndicator.displayName = "DistanceIndicator";
