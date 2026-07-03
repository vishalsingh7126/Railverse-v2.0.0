"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface FavoriteRouteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  from: string;
  to: string;
  trainCount?: number;
}

export const FavoriteRouteCard = React.forwardRef<HTMLDivElement, FavoriteRouteCardProps>(
  ({ className, from, to, trainCount, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-4 shadow-premium-sm hover:shadow-premium-md hover:border-primary/20 transition-all duration-200 cursor-pointer flex justify-between items-center gap-4",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground">
            <span>{from}</span>
            <span className="text-muted-foreground opacity-60">➜</span>
            <span>{to}</span>
          </div>
          {trainCount !== undefined && (
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              {trainCount} Trains
            </span>
          )}
        </div>

        <Star className="h-4 w-4 text-amber-500 fill-amber-500/10 shrink-0" />
      </div>
    );
  }
);
FavoriteRouteCard.displayName = "FavoriteRouteCard";
