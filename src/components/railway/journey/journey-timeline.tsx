"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import { RAILWAY_TOKENS } from "@/config/railway-tokens";

export interface TimelineStop {
  name: string;
  time: string;
  status: "completed" | "current" | "upcoming" | "delayed" | "cancelled" | "skipped";
  platform?: string;
  delayMinutes?: number;
}

export interface JourneyTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  stops: TimelineStop[];
}

export const JourneyTimeline = React.forwardRef<HTMLDivElement, JourneyTimelineProps>(
  ({ className, stops, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative pl-6 space-y-6 py-2", className)} {...props}>
        {/* Connection rail track line */}
        <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        {stops.map((stop, idx) => {
          const isCompleted = stop.status === "completed";
          const isCurrent = stop.status === "current";
          const isDelayed = stop.status === "delayed";
          const isCancelled = stop.status === "cancelled";
          const isSkipped = stop.status === "skipped";

          return (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row md:items-center justify-between gap-2"
            >
              <div
                className={cn(
                  "absolute left-[-23px] h-5 w-5 rounded-full flex items-center justify-center border bg-background z-10 transition-colors",
                  RAILWAY_TOKENS.timelineStatus[stop.status]
                )}
              >
                {!isCompleted && !isDelayed && !isSkipped && (
                  <div
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      isCurrent ? "bg-primary" : "bg-muted-foreground/30"
                    )}
                  />
                )}
                {isCompleted && (
                  <CheckCircle2 className="h-4.5 w-4.5 text-primary-foreground fill-primary" />
                )}
                {isDelayed && <AlertCircle className="h-4.5 w-4.5 text-red-500 fill-red-500/20" />}
                {isSkipped && <HelpCircle className="h-4.5 w-4.5 text-muted-foreground" />}
              </div>

              <div className="flex-1 leading-tight min-w-0">
                <span
                  className={cn(
                    "text-sm font-semibold block",
                    isCancelled && "line-through text-muted-foreground",
                    isCurrent
                      ? "text-foreground font-bold"
                      : "text-muted-foreground hover:text-foreground transition-colors"
                  )}
                >
                  {stop.name}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-2 flex-wrap mt-0.5">
                  <span>{stop.time}</span>
                  {stop.platform && <span>• Platform {stop.platform}</span>}
                  {isDelayed && stop.delayMinutes && (
                    <span className="text-red-500 font-semibold">
                      (Delayed {stop.delayMinutes}m)
                    </span>
                  )}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
JourneyTimeline.displayName = "JourneyTimeline";
