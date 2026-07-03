"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const splitViewVariants = cva("grid w-full grid-cols-1", {
  variants: {
    ratio: {
      "1:1": "lg:grid-cols-2",
      "2:1": "lg:grid-cols-[2fr_1fr]",
      "1:2": "lg:grid-cols-[1fr_2fr]",
      "3:1": "lg:grid-cols-[3fr_1fr]",
      "1:3": "lg:grid-cols-[1fr_3fr]",
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
    },
  },
  defaultVariants: {
    ratio: "1:1",
    gap: "md",
  },
});

export interface SplitViewProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof splitViewVariants> {
  left: React.ReactNode;
  right: React.ReactNode;
}

export const SplitView = React.forwardRef<HTMLDivElement, SplitViewProps>(
  ({ className, ratio, gap, left, right, ...props }, ref) => (
    <div ref={ref} className={cn(splitViewVariants({ ratio, gap }), className)} {...props}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
);
SplitView.displayName = "SplitView";
