"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface StickyRegionProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom";
  offset?: number;
  zIndex?: number;
}

export const StickyRegion = React.forwardRef<HTMLDivElement, StickyRegionProps>(
  ({ className, position = "top", offset = 0, zIndex = 30, ...props }, ref) => {
    const style: React.CSSProperties = {
      position: "sticky",
      zIndex,
      ...(position === "top" ? { top: `${offset}px` } : { bottom: `${offset}px` }),
      ...props.style,
    };

    return (
      <div
        ref={ref}
        style={style}
        className={cn("w-full transition-shadow duration-200", className)}
        {...props}
      />
    );
  }
);
StickyRegion.displayName = "StickyRegion";
