"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const LiveStatusSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border border-border bg-card p-5 flex flex-col gap-4", className)}
    {...props}
  >
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <Skeleton className="h-3 w-28 rounded" />
        <Skeleton className="h-5 w-44 rounded" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 border-t border-border/50 pt-3">
      <div className="space-y-1.5">
        <Skeleton className="h-2 w-16 rounded" />
        <Skeleton className="h-4 w-28 rounded" />
      </div>
      <div className="space-y-1.5">
        <Skeleton className="h-2 w-16 rounded" />
        <Skeleton className="h-4 w-28 rounded" />
      </div>
    </div>
  </div>
));
LiveStatusSkeleton.displayName = "LiveStatusSkeleton";
