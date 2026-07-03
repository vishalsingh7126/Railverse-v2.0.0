"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TrainHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  numberBadge?: React.ReactNode;
  name: string;
  typeBadge?: React.ReactNode;
  routeSummary?: string;
  statsSlot?: React.ReactNode;
}

export const TrainHero = React.forwardRef<HTMLDivElement, TrainHeroProps>(
  ({ className, numberBadge, name, typeBadge, routeSummary, statsSlot, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-border bg-gradient-to-br from-card to-muted/20 p-6 md:p-8 shadow-premium-md flex flex-col gap-6",
          className
        )}
        {...props}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            {numberBadge}
            {typeBadge}
          </div>
          <h2 className="text-xl md:text-3xl font-extrabold tracking-tight text-foreground">
            {name}
          </h2>
          {routeSummary && (
            <p className="text-sm font-semibold text-muted-foreground leading-relaxed">
              {routeSummary}
            </p>
          )}
        </div>

        {statsSlot && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-border pt-6">
            {statsSlot}
          </div>
        )}
      </div>
    );
  }
);
TrainHero.displayName = "TrainHero";
