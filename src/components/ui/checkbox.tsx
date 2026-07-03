"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {
  error?: boolean;
  label?: string;
  helperText?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, error, label, helperText, id, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;
    const labelId = React.useId();
    const helperId = React.useId();

    const checkbox = (
      <CheckboxPrimitive.Root
        ref={ref}
        id={checkboxId}
        disabled={disabled}
        aria-invalid={error}
        aria-describedby={helperText ? helperId : undefined}
        aria-labelledby={label ? labelId : undefined}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary transition-all cursor-pointer flex items-center justify-center",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center text-current")}
        >
          <Check className="h-3 w-3 stroke-[3.5]" aria-hidden="true" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    if (!label && !helperText) {
      return checkbox;
    }

    return (
      <div className="flex items-start gap-2.5">
        <div className="flex items-center h-5 shrink-0">{checkbox}</div>
        {(label || helperText) && (
          <div className="flex flex-col gap-1 select-none">
            {label && (
              <label
                id={labelId}
                htmlFor={checkboxId}
                className={cn(
                  "text-sm font-medium leading-tight cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-foreground",
                  error && "text-destructive",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {label}
              </label>
            )}
            {helperText && (
              <span
                id={helperId}
                className={cn(
                  "text-xs leading-none text-muted-foreground",
                  error && "text-destructive",
                  disabled && "opacity-50"
                )}
              >
                {helperText}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
