"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RAILWAY_TOKENS } from "@/config/railway-tokens";

export interface JourneyProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  percentage: number;
  currentStation?: string;
  delayStatus?: "onTime" | "delayed" | "cancelled" | "diverted";
  eta?: string;
}

export const JourneyProgress = React.forwardRef<HTMLDivElement, JourneyProgressProps>(
  ({ className, percentage, currentStation, delayStatus = "onTime", eta, ...props }, ref) => {
    const statusToken = RAILWAY_TOKENS.delays[delayStatus];

    return (
      <div ref={ref} className={cn("space-y-2.5 w-full", className)} {...props}>
        <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground">
          {currentStation && (
            <span>
              Current: <strong className="text-foreground">{currentStation}</strong>
            </span>
          )}
          {eta && (
            <span>
              ETA: <strong className="text-foreground">{eta}</strong>
            </span>
          )}
        </div>

        <div className="h-2 w-full rounded-full bg-accent/40 overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={cn(
              "h-full rounded-full transition-colors duration-300",
              delayStatus === "onTime"
                ? "bg-green-500"
                : delayStatus === "delayed"
                  ? "bg-red-500"
                  : "bg-muted-foreground"
            )}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
          <span className={statusToken.text}>{statusToken.label}</span>
          <span className="text-muted-foreground">{percentage}% Complete</span>
        </div>
      </div>
    );
  }
);
JourneyProgress.displayName = "JourneyProgress";
