"use client";

import * as React from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode;
  "aria-label": string; // Strict accessibility contract
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, "aria-label": ariaLabel, size = "md", ...props }, ref) => {
    // Determine dynamic size class values for icon buttons to remain perfectly round
    const sizeClasses = {
      sm: "h-9 w-9 p-0",
      md: "h-10 w-10 p-0",
      lg: "h-11 w-11 p-0",
    };

    return (
      <Button
        ref={ref}
        size={size}
        aria-label={ariaLabel}
        className={cn(
          "rounded-full flex items-center justify-center shrink-0",
          sizeClasses[size || "md"],
          className
        )}
        {...props}
      >
        {!props.loading && icon}
      </Button>
    );
  }
);
IconButton.displayName = "IconButton";
export type { ButtonProps };
