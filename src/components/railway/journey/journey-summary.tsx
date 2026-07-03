"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface JourneySummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string;
    value: React.ReactNode;
    icon?: React.ReactNode;
  }>;
}

export const JourneySummary = React.forwardRef<HTMLDivElement, JourneySummaryProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-border bg-card shadow-premium-sm",
          className
        )}
        {...props}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {item.icon && (
              <div className="h-8 w-8 rounded-lg bg-accent/40 flex items-center justify-center text-muted-foreground shrink-0">
                {item.icon}
              </div>
            )}
            <div className="flex flex-col leading-tight min-w-0">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-foreground truncate">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
JourneySummary.displayName = "JourneySummary";
