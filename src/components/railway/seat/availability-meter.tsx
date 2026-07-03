"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RAILWAY_TOKENS } from "@/config/railway-tokens";

export interface AvailabilityMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "available" | "rac" | "waitlist";
  count: number;
  totalQuota?: number;
}

export const AvailabilityMeter = React.forwardRef<HTMLDivElement, AvailabilityMeterProps>(
  ({ className, status, count, totalQuota = 100, ...props }, ref) => {
    const config = RAILWAY_TOKENS.availability[status] || RAILWAY_TOKENS.availability.available;
    const percentage = Math.min(100, Math.max(0, (count / totalQuota) * 100));

    return (
      <div ref={ref} className={cn("space-y-1.5 w-full", className)} {...props}>
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="text-muted-foreground font-medium">Availability</span>
          <span
            className={cn(
              "font-bold px-2 py-0.5 rounded border text-[10px] uppercase",
              config.bg,
              config.text,
              config.border
            )}
          >
            {status} ({count})
          </span>
        </div>

        <div className="h-1.5 w-full rounded-full bg-accent/40 overflow-hidden relative">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              status === "available"
                ? "bg-green-500"
                : status === "rac"
                  ? "bg-amber-500"
                  : "bg-red-500"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);
AvailabilityMeter.displayName = "AvailabilityMeter";
