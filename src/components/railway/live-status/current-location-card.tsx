"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CurrentLocationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  previousStation?: React.ReactNode;
  currentLocation?: React.ReactNode;
  nextStation?: React.ReactNode;
  delay?: React.ReactNode;
  speed?: React.ReactNode;
  timestamp?: React.ReactNode;
}

export const CurrentLocationCard = React.forwardRef<HTMLDivElement, CurrentLocationCardProps>(
  (
    { className, previousStation, currentLocation, nextStation, delay, speed, timestamp, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-premium-sm flex flex-col gap-4 relative overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              Current Location
            </span>
            <div className="text-base font-bold text-foreground">{currentLocation}</div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {speed}
            {delay}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-3.5 text-xs font-semibold">
          {previousStation && (
            <div>
              <span className="text-muted-foreground/60 text-[9px] uppercase font-bold tracking-wider">
                Previous Stop
              </span>
              <div className="text-muted-foreground mt-0.5">{previousStation}</div>
            </div>
          )}
          {nextStation && (
            <div>
              <span className="text-muted-foreground/60 text-[9px] uppercase font-bold tracking-wider">
                Next Stop
              </span>
              <div className="text-foreground mt-0.5">{nextStation}</div>
            </div>
          )}
        </div>

        {timestamp && (
          <div className="text-[10px] text-muted-foreground border-t border-border/50 pt-2 text-right font-medium">
            {timestamp}
          </div>
        )}
      </div>
    );
  }
);
CurrentLocationCard.displayName = "CurrentLocationCard";
