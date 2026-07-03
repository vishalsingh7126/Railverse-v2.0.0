"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const FareSkeleton = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border border-border bg-card p-5 flex flex-col gap-3", className)}
      {...props}
    >
      <Skeleton className="h-3 w-28 rounded" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex justify-between items-center py-2 border-b border-border/50">
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4 w-28 rounded" />
            <Skeleton className="h-3 w-20 rounded" />
          </div>
          <Skeleton className="h-5 w-16 rounded" />
        </div>
      ))}
      <div className="flex justify-between items-center pt-1">
        <Skeleton className="h-4 w-20 rounded" />
        <Skeleton className="h-5 w-20 rounded" />
      </div>
    </div>
  )
);
FareSkeleton.displayName = "FareSkeleton";
