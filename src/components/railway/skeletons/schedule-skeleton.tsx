"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const ScheduleSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border border-border bg-card overflow-hidden", className)}
    {...props}
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className="flex justify-between items-center px-4 py-3 border-b border-border/50"
      >
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-12 rounded" />
          <Skeleton className="h-4 w-32 rounded" />
        </div>
        <Skeleton className="h-4 w-24 rounded" />
      </div>
    ))}
  </div>
));
ScheduleSkeleton.displayName = "ScheduleSkeleton";
