"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const TrainCardSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border border-border bg-card p-5 flex flex-col gap-4", className)}
    {...props}
  >
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-14 rounded" />
        <Skeleton className="h-5 w-32 rounded" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>
      <Skeleton className="h-5 w-16 rounded-full" />
    </div>
    <div className="flex justify-between">
      <Skeleton className="h-3 w-24 rounded" />
      <Skeleton className="h-3 w-4 rounded" />
      <Skeleton className="h-3 w-24 rounded" />
    </div>
    <div className="border-t border-border/50 pt-3 flex gap-4">
      <Skeleton className="h-3 w-20 rounded" />
      <Skeleton className="h-3 w-20 rounded" />
    </div>
  </div>
));
TrainCardSkeleton.displayName = "TrainCardSkeleton";
