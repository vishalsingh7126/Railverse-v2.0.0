"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

export interface ETAChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  scheduledTime: string;
  actualTime: string;
  isDelayed?: boolean;
}

export const ETAChip = React.forwardRef<HTMLSpanElement, ETAChipProps>(
  ({ className, scheduledTime, actualTime, isDelayed = false, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-xs font-semibold bg-background",
          isDelayed
            ? "border-red-500/20 text-red-600 dark:text-red-400"
            : "border-border text-muted-foreground",
          className
        )}
        {...props}
      >
        <Clock className="h-3.5 w-3.5 opacity-60" />
        <span>{actualTime}</span>
        {scheduledTime !== actualTime && (
          <span className="line-through text-[10px] opacity-60 font-medium">{scheduledTime}</span>
        )}
      </span>
    );
  }
);
ETAChip.displayName = "ETAChip";
