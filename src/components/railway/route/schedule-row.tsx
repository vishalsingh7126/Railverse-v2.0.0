"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScheduleRowProps extends React.HTMLAttributes<HTMLDivElement> {
  stationCode: string;
  stationName: string;
  arrivalTime: string;
  departureTime: string;
  haltMinutes?: number;
  distanceKm?: number;
}

export const ScheduleRow = React.forwardRef<HTMLDivElement, ScheduleRowProps>(
  (
    {
      className,
      stationCode,
      stationName,
      arrivalTime,
      departureTime,
      haltMinutes,
      distanceKm,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex justify-between items-center py-2.5 px-3 border-b border-border/50 text-xs font-semibold hover:bg-muted/10 transition-colors",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono bg-muted border border-border px-1.5 py-0.5 rounded text-[10px]">
            {stationCode}
          </span>
          <div className="flex flex-col">
            <span className="text-foreground font-bold">{stationName}</span>
            {distanceKm !== undefined && (
              <span className="text-[10px] text-muted-foreground">{distanceKm} km</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-right font-medium">
          <div className="flex flex-col leading-tight">
            <span className="text-muted-foreground text-[10px]">Arr / Dep</span>
            <span className="text-foreground font-bold">
              {arrivalTime} / {departureTime}
            </span>
          </div>
          {haltMinutes !== undefined && haltMinutes > 0 && (
            <span className="px-1.5 py-0.5 rounded bg-muted border border-border text-[9px] font-bold text-muted-foreground">
              {haltMinutes}m
            </span>
          )}
        </div>
      </div>
    );
  }
);
ScheduleRow.displayName = "ScheduleRow";
