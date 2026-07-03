"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  headerSlot?: React.ReactNode;
  metaSlot?: React.ReactNode;
  timelineSlot?: React.ReactNode;
  actionsSlot?: React.ReactNode;
}

export const StationCard = React.forwardRef<HTMLDivElement, StationCardProps>(
  ({ className, headerSlot, metaSlot, timelineSlot, actionsSlot, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-premium-sm hover:shadow-premium-md transition-shadow duration-200 flex flex-col gap-4",
          className
        )}
        {...props}
      >
        {(headerSlot || actionsSlot) && (
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1 min-w-0">{headerSlot}</div>
            {actionsSlot && <div className="shrink-0">{actionsSlot}</div>}
          </div>
        )}

        {timelineSlot && <div className="w-full">{timelineSlot}</div>}

        {metaSlot && <div className="border-t border-border/50 pt-3.5">{metaSlot}</div>}
      </div>
    );
  }
);
StationCard.displayName = "StationCard";
