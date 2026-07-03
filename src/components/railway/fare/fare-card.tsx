"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FareCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  tierName: string;
  price: number;
  description?: string;
  isSelected?: boolean;
  rightSlot?: React.ReactNode;
}

export const FareCard = React.forwardRef<HTMLDivElement, FareCardProps>(
  ({ className, tierName, price, description, isSelected = false, rightSlot, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border p-4 shadow-premium-sm hover:shadow-premium-md transition-all duration-200 flex justify-between items-center gap-4 cursor-pointer",
          isSelected ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-sm font-bold text-foreground">{tierName}</span>
          {description && (
            <span className="text-xs text-muted-foreground font-medium">{description}</span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-base font-extrabold text-foreground">₹{price}</span>
          {rightSlot}
        </div>
      </div>
    );
  }
);
FareCard.displayName = "FareCard";
