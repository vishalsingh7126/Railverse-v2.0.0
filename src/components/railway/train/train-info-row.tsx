"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TrainInfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  numberBadge: React.ReactNode;
  name: string;
  typeBadge?: React.ReactNode;
  schedule?: string;
}

export const TrainInfoRow = React.forwardRef<HTMLDivElement, TrainInfoRowProps>(
  ({ className, numberBadge, name, typeBadge, schedule, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-center gap-3 py-2 border-b border-border/50 text-sm font-semibold",
          className
        )}
        {...props}
      >
        {numberBadge}
        <span className="text-foreground font-bold">{name}</span>
        {typeBadge}
        {schedule && (
          <span className="ml-auto text-xs text-muted-foreground font-medium">{schedule}</span>
        )}
      </div>
    );
  }
);
TrainInfoRow.displayName = "TrainInfoRow";
