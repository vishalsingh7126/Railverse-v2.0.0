import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skeletonVariants = cva("animate-pulse rounded-md bg-muted/60 dark:bg-muted/40", {
  variants: {
    variant: {
      text: "h-3 w-full",
      avatar: "h-10 w-10 rounded-full",
      card: "h-32 w-full rounded-lg",
      table: "h-8 w-full",
      custom: "",
    },
  },
  defaultVariants: {
    variant: "custom",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => {
    return <div ref={ref} className={cn(skeletonVariants({ variant }), className)} {...props} />;
  }
);
Skeleton.displayName = "Skeleton";
export { skeletonVariants };
