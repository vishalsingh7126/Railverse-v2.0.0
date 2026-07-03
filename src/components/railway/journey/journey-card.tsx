"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { RAILWAY_TOKENS } from "@/config/railway-tokens";

export interface JourneyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  source?: React.ReactNode;
  destination?: React.ReactNode;
  date?: React.ReactNode;
  duration?: React.ReactNode;
  status?: "onTime" | "delayed" | "cancelled" | "diverted";
  actions?: React.ReactNode;
}

export const JourneyCard = React.forwardRef<HTMLDivElement, JourneyCardProps>(
  (
    { className, source, destination, date, duration, status = "onTime", actions, ...props },
    ref
  ) => {
    const statusToken = RAILWAY_TOKENS.delays[status];

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-5 shadow-premium-sm hover:shadow-premium-md transition-shadow duration-200 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-lg font-bold tracking-tight text-foreground">{source}</span>
            <span className="text-muted-foreground text-sm font-semibold">➜</span>
            <span className="text-lg font-bold tracking-tight text-foreground">{destination}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground flex-wrap">
            {date && <span>{date}</span>}
            {duration && <span>• {duration}</span>}
            <span
              className={cn(
                "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                statusToken.bg,
                statusToken.text,
                statusToken.border
              )}
            >
              {statusToken.label}
            </span>
          </div>
        </div>

        {actions && (
          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end">
            {actions}
          </div>
        )}
      </div>
    );
  }
);
JourneyCard.displayName = "JourneyCard";
