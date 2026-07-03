"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SeatTypeChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: string;
}

export const SeatTypeChip = React.forwardRef<HTMLSpanElement, SeatTypeChipProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded bg-muted/40 text-muted-foreground border border-border/40",
          className
        )}
        {...props}
      >
        {type}
      </span>
    );
  }
);
SeatTypeChip.displayName = "SeatTypeChip";
