import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-current border-t-transparent shrink-0",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        brand: "text-primary",
      },
      size: {
        xs: "h-3 w-3 border-[1.5px]",
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-[3px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof spinnerVariants> {}

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        className={cn(spinnerVariants({ variant, size }), className)}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </span>
    );
  }
);
Spinner.displayName = "Spinner";
export { spinnerVariants };
