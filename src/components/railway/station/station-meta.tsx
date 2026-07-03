"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StationMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{
    label: string;
    value: React.ReactNode;
  }>;
}

export const StationMeta = React.forwardRef<HTMLDivElement, StationMetaProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-muted-foreground",
          className
        )}
        {...props}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5 font-medium">
            <span className="text-muted-foreground/65 font-bold uppercase text-[9px] tracking-wider">
              {item.label}:
            </span>
            <span className="text-foreground">{item.value}</span>
            {idx < items.length - 1 && <span className="text-muted-foreground/30">•</span>}
          </div>
        ))}
      </div>
    );
  }
);
StationMeta.displayName = "StationMeta";
