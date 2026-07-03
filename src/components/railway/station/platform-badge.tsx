"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PlatformBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  platform: string | number;
}

export const PlatformBadge = React.forwardRef<HTMLSpanElement, PlatformBadgeProps>(
  ({ className, platform, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
          className
        )}
        {...props}
      >
        PF {platform}
      </span>
    );
  }
);
PlatformBadge.displayName = "PlatformBadge";
