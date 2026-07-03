"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CoachBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  coach: string;
}

export const CoachBadge = React.forwardRef<HTMLSpanElement, CoachBadgeProps>(
  ({ className, coach, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider",
          className
        )}
        {...props}
      >
        {coach}
      </span>
    );
  }
);
CoachBadge.displayName = "CoachBadge";
