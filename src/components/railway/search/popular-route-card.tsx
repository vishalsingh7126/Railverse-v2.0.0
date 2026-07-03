"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PopularRouteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  from: string;
  to: string;
  image?: React.ReactNode;
  trafficVolume?: string;
}

export const PopularRouteCard = React.forwardRef<HTMLDivElement, PopularRouteCardProps>(
  ({ className, from, to, image, trafficVolume, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card overflow-hidden shadow-premium-sm hover:shadow-premium-md transition-all duration-200 cursor-pointer flex flex-col gap-3 p-4",
          className
        )}
        {...props}
      >
        {image && (
          <div className="w-full h-24 rounded-lg bg-muted flex items-center justify-center text-muted-foreground overflow-hidden shrink-0">
            {image}
          </div>
        )}
        <div className="flex flex-col leading-tight min-w-0">
          <span className="text-xs font-bold text-foreground truncate">
            {from} ➜ {to}
          </span>
          {trafficVolume && (
            <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mt-1">
              {trafficVolume} Daily Searches
            </span>
          )}
        </div>
      </div>
    );
  }
);
PopularRouteCard.displayName = "PopularRouteCard";
