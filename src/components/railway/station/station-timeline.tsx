"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StationTimelineItem {
  trainNumber: string;
  trainName: string;
  time: string;
  platform: string | number;
  delayStatus: "onTime" | "delayed" | "cancelled" | "diverted";
  delayLabel?: string;
}

export interface StationTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StationTimelineItem[];
}

export const StationTimeline = React.forwardRef<HTMLDivElement, StationTimelineProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-3", className)} {...props}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 px-3 border border-border/40 rounded-lg bg-muted/10 text-xs font-semibold"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono bg-muted border border-border px-1.5 py-0.5 rounded text-[10px]">
                {item.trainNumber}
              </span>
              <div className="flex flex-col">
                <span className="text-foreground font-bold">{item.trainName}</span>
                <span className="text-[10px] text-muted-foreground">
                  Platform {item.platform} • {item.time}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span
                className={cn(
                  "text-[9px] uppercase font-bold px-2 py-0.5 rounded-full border",
                  item.delayStatus === "onTime"
                    ? "bg-green-500/10 text-green-600 border-green-500/20"
                    : item.delayStatus === "delayed"
                      ? "bg-red-500/10 text-red-600 border-red-500/20"
                      : "bg-slate-500/10 text-slate-500 border-slate-500/20"
                )}
              >
                {item.delayStatus === "onTime" ? "On Time" : item.delayLabel || "Delayed"}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
StationTimeline.displayName = "StationTimeline";
