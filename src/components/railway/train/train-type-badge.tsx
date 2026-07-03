"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RAILWAY_TOKENS } from "@/config/railway-tokens";

export interface TrainTypeBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type: "superfast" | "express" | "passenger" | "vandeBharat" | "rajdhani" | "shatabdi" | "duronto";
}

export const TrainTypeBadge = React.forwardRef<HTMLSpanElement, TrainTypeBadgeProps>(
  ({ className, type, ...props }, ref) => {
    const config = RAILWAY_TOKENS.trainTypes[type] || RAILWAY_TOKENS.trainTypes.express;

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border",
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
TrainTypeBadge.displayName = "TrainTypeBadge";
