"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Train, MapPinOff, LayoutGrid, CircleDollarSign, SearchX, History } from "lucide-react";

type RailwayEmptyStatePreset =
  | "no-journey"
  | "no-live-status"
  | "no-seat-data"
  | "no-fare-data"
  | "no-search-results"
  | "no-recent-searches";

const PRESETS: Record<
  RailwayEmptyStatePreset,
  { icon: React.ReactNode; title: string; description: string }
> = {
  "no-journey": {
    icon: <Train className="h-10 w-10 text-muted-foreground/50" />,
    title: "No Journey Found",
    description: "We couldn't find any active or upcoming journeys. Try searching for a new route.",
  },
  "no-live-status": {
    icon: <MapPinOff className="h-10 w-10 text-muted-foreground/50" />,
    title: "No Live Status Available",
    description:
      "Live tracking data is unavailable for this train right now. Please try again shortly.",
  },
  "no-seat-data": {
    icon: <LayoutGrid className="h-10 w-10 text-muted-foreground/50" />,
    title: "No Seat Data Available",
    description: "Seat availability information couldn't be loaded for this train and date.",
  },
  "no-fare-data": {
    icon: <CircleDollarSign className="h-10 w-10 text-muted-foreground/50" />,
    title: "No Fare Data Found",
    description: "Fare details are not available for this journey. Please check back later.",
  },
  "no-search-results": {
    icon: <SearchX className="h-10 w-10 text-muted-foreground/50" />,
    title: "No Search Results",
    description: "No trains found for this route and date. Try adjusting your search criteria.",
  },
  "no-recent-searches": {
    icon: <History className="h-10 w-10 text-muted-foreground/50" />,
    title: "No Recent Searches",
    description: "Your search history will appear here once you start searching for trains.",
  },
};

export interface RailwayEmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  preset?: RailwayEmptyStatePreset;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const RailwayEmptyState = React.forwardRef<HTMLDivElement, RailwayEmptyStateProps>(
  ({ className, preset, title, description, icon, children, ...props }, ref) => {
    const resolved = preset ? PRESETS[preset] : null;

    const resolvedIcon = icon ?? resolved?.icon;
    const resolvedTitle = title ?? resolved?.title ?? "Nothing here";
    const resolvedDesc = description ?? resolved?.description;

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-4 py-12 px-6 text-center",
          className
        )}
        {...props}
      >
        {resolvedIcon && (
          <div className="rounded-2xl bg-muted/30 p-4 border border-border/40">{resolvedIcon}</div>
        )}
        <div className="space-y-1.5 max-w-xs">
          <h3 className="text-sm font-bold text-foreground">{resolvedTitle}</h3>
          {resolvedDesc && (
            <p className="text-xs text-muted-foreground leading-relaxed">{resolvedDesc}</p>
          )}
        </div>
        {children && <div className="flex items-center gap-2 mt-1">{children}</div>}
      </div>
    );
  }
);
RailwayEmptyState.displayName = "RailwayEmptyState";
