"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pageContainerVariants = cva("mx-auto w-full px-4 md:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1400px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface PageContainerProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof pageContainerVariants> {}

export const PageContainer = React.forwardRef<HTMLDivElement, PageContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(pageContainerVariants({ size }), className)} {...props} />
  )
);
PageContainer.displayName = "PageContainer";
