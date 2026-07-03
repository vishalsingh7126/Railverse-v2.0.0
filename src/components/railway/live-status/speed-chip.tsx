"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Gauge } from "lucide-react";

export interface SpeedChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  speed: number;
}

export const SpeedChip = React.forwardRef<HTMLSpanElement, SpeedChipProps>(
  ({ className, speed, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-border bg-muted/30 text-xs font-semibold text-muted-foreground",
          className
        )}
        {...props}
      >
        <Gauge className="h-3.5 w-3.5 text-primary opacity-85" />
        <span>{speed} km/h</span>
      </span>
    );
  }
);
SpeedChip.displayName = "SpeedChip";
