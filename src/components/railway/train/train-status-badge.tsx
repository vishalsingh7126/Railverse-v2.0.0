"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RAILWAY_TOKENS } from "@/config/railway-tokens";

export interface TrainStatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: "onTime" | "delayed" | "cancelled" | "diverted";
}

export const TrainStatusBadge = React.forwardRef<HTMLSpanElement, TrainStatusBadgeProps>(
  ({ className, status, ...props }, ref) => {
    const config = RAILWAY_TOKENS.delays[status] || RAILWAY_TOKENS.delays.onTime;

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border",
          config.bg,
          config.text,
          config.border,
          className
        )}
        {...props}
      >
        {config.label}
      </span>
    );
  }
);
TrainStatusBadge.displayName = "TrainStatusBadge";
