"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export const JourneySkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border border-border bg-card p-5 flex flex-col gap-3", className)}
    {...props}
  >
    <div className="flex items-center gap-3">
      <Skeleton className="h-5 w-20 rounded" />
      <Skeleton className="h-4 w-4 rounded" />
      <Skeleton className="h-5 w-20 rounded" />
    </div>
    <div className="flex items-center gap-3">
      <Skeleton className="h-3 w-16 rounded" />
      <Skeleton className="h-3 w-16 rounded" />
      <Skeleton className="h-5 w-14 rounded-full" />
    </div>
  </div>
));
JourneySkeleton.displayName = "JourneySkeleton";
