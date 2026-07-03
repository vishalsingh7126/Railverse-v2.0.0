"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface JourneyHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  currentStatus?: React.ReactNode;
  progressSlot?: React.ReactNode;
  eta?: React.ReactNode;
  trainInfo?: React.ReactNode;
  metadata?: React.ReactNode;
  primaryCta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
  statusBanner?: React.ReactNode;
}

export const JourneyHero = React.forwardRef<HTMLDivElement, JourneyHeroProps>(
  (
    {
      className,
      currentStatus,
      progressSlot,
      eta,
      trainInfo,
      metadata,
      primaryCta,
      secondaryCta,
      statusBanner,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-border bg-gradient-to-br from-card to-muted/20 p-6 md:p-8 shadow-premium-md relative overflow-hidden flex flex-col gap-6",
          className
        )}
        {...props}
      >
        {statusBanner && <div className="w-full shrink-0">{statusBanner}</div>}

        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
          <div className="space-y-2 flex-1 min-w-0">
            {trainInfo && <div className="flex items-center gap-2 flex-wrap">{trainInfo}</div>}
            {currentStatus && (
              <div className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                {currentStatus}
              </div>
            )}
            {eta && <div className="text-sm font-semibold text-muted-foreground">{eta}</div>}
          </div>

          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            {secondaryCta}
            {primaryCta}
          </div>
        </div>

        {progressSlot && <div className="w-full shrink-0">{progressSlot}</div>}

        {metadata && (
          <div className="border-t border-border pt-4 w-full text-xs text-muted-foreground">
            {metadata}
          </div>
        )}
      </div>
    );
  }
);
JourneyHero.displayName = "JourneyHero";
