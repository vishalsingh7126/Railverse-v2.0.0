"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface RecentSearchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

export const RecentSearchCard = React.forwardRef<HTMLDivElement, RecentSearchCardProps>(
  ({ className, title = "Recent Searches", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-card p-4 shadow-premium-sm flex flex-col gap-3",
          className
        )}
        {...props}
      >
        {title && (
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            {title}
          </span>
        )}
        <div className="flex flex-col gap-1">{children}</div>
      </div>
    );
  }
);
RecentSearchCard.displayName = "RecentSearchCard";
