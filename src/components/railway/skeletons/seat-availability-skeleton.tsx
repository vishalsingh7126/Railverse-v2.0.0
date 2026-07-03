"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const SeatAvailabilitySkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border border-border bg-card p-5 flex flex-col gap-4", className)}
    {...props}
  >
    <div className="flex gap-2 flex-wrap">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-14 rounded-lg" />
      ))}
    </div>
    <div className="space-y-3">
      {["3A", "2A", "SL"].map((tier) => (
        <div key={tier} className="space-y-1.5">
          <div className="flex justify-between">
            <Skeleton className="h-3 w-16 rounded" />
            <Skeleton className="h-4 w-24 rounded-full" />
          </div>
          <Skeleton className="h-1.5 w-full rounded-full" />
        </div>
      ))}
    </div>
  </div>
));
SeatAvailabilitySkeleton.displayName = "SeatAvailabilitySkeleton";
