"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface RouteTimelineStop {
  stationCode: string;
  stationName: string;
  arrivalTime: string;
  departureTime: string;
  distanceKm: number;
}

export interface RouteTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  stops: RouteTimelineStop[];
}

export const RouteTimeline = React.forwardRef<HTMLDivElement, RouteTimelineProps>(
  ({ className, stops, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative pl-6 space-y-5 py-1", className)} {...props}>
        <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        {stops.map((stop, idx) => {
          return (
            <div
              key={idx}
              className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="absolute left-[-23px] h-4 w-4 rounded-full border border-border bg-background z-10 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              </div>

              <div className="flex-1 leading-tight min-w-0">
                <span className="text-xs font-bold text-foreground flex items-center gap-2">
                  <span className="font-mono bg-muted border px-1 rounded text-[9px]">
                    {stop.stationCode}
                  </span>
                  <span>{stop.stationName}</span>
                </span>
                <span className="text-[10px] text-muted-foreground mt-0.5 block">
                  Arr: {stop.arrivalTime} • Dep: {stop.departureTime} • {stop.distanceKm} km
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
RouteTimeline.displayName = "RouteTimeline";
