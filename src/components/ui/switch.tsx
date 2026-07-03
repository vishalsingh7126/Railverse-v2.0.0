"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
  description?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, label, description, id, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;
    const labelId = React.useId();

    const switchControl = (
      <SwitchPrimitive.Root
        ref={ref}
        id={switchId}
        disabled={disabled}
        aria-labelledby={label ? labelId : undefined}
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input transition-all duration-200",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 duration-200"
          )}
        />
      </SwitchPrimitive.Root>
    );

    if (!label && !description) {
      return switchControl;
    }

    return (
      <div className="flex items-start gap-3">
        <div className="flex items-center h-5 shrink-0">{switchControl}</div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5 select-none">
            {label && (
              <label
                id={labelId}
                htmlFor={switchId}
                className={cn(
                  "text-sm font-medium leading-tight cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-foreground",
                  disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <span
                className={cn(
                  "text-xs leading-normal text-muted-foreground",
                  disabled && "opacity-50"
                )}
              >
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
Switch.displayName = "Switch";
