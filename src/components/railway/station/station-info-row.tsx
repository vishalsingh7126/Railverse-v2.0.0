"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StationInfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  stationBadge: React.ReactNode;
  name: string;
  metaDetails?: string;
}

export const StationInfoRow = React.forwardRef<HTMLDivElement, StationInfoRowProps>(
  ({ className, stationBadge, name, metaDetails, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-center gap-3 py-2 border-b border-border/50 text-sm font-semibold",
          className
        )}
        {...props}
      >
        {stationBadge}
        <span className="text-foreground font-bold">{name}</span>
        {metaDetails && (
          <span className="ml-auto text-xs text-muted-foreground font-medium">{metaDetails}</span>
        )}
      </div>
    );
  }
);
StationInfoRow.displayName = "StationInfoRow";
