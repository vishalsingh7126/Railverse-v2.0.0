"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TrainStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  description?: string;
  trend?: React.ReactNode;
}

export const TrainStatCard = React.forwardRef<HTMLDivElement, TrainStatCardProps>(
  ({ className, title, value, description, trend, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-4 shadow-premium-sm flex flex-col gap-1.5",
          className
        )}
        {...props}
      >
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-none">
          {title}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold tracking-tight text-foreground leading-none">
            {value}
          </span>
          {trend && <span className="text-xs font-semibold">{trend}</span>}
        </div>
        {description && (
          <span className="text-xs text-muted-foreground font-medium">{description}</span>
        )}
      </div>
    );
  }
);
TrainStatCard.displayName = "TrainStatCard";
