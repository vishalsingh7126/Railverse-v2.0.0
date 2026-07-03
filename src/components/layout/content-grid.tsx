"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const contentGridVariants = cva("grid w-full", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      sidebar: "grid-cols-1 lg:grid-cols-[280px_1fr]",
      split: "grid-cols-1 lg:grid-cols-[1fr_1fr]",
    },
    gap: {
      none: "gap-0",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "md",
  },
});

export interface ContentGridProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof contentGridVariants> {}

export const ContentGrid = React.forwardRef<HTMLDivElement, ContentGridProps>(
  ({ className, cols, gap, ...props }, ref) => (
    <div ref={ref} className={cn(contentGridVariants({ cols, gap }), className)} {...props} />
  )
);
ContentGrid.displayName = "ContentGrid";
