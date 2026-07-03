"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      xxl: "gap-12",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    gap: "md",
    align: "stretch",
    justify: "start",
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, gap, align, justify, ...props }, ref) => (
    <div ref={ref} className={cn(stackVariants({ gap, align, justify }), className)} {...props} />
  )
);
Stack.displayName = "Stack";
