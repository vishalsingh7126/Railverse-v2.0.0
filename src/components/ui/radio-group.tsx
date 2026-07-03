"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> {
  error?: boolean;
  helperText?: string;
  options: Array<{
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
  }>;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    { className, error, helperText, options, disabled, orientation = "vertical", ...props },
    ref
  ) => {
    const helperId = React.useId();

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <RadioGroupPrimitive.Root
          ref={ref}
          disabled={disabled}
          orientation={orientation}
          aria-describedby={helperText ? helperId : undefined}
          className={cn(
            "flex gap-4",
            orientation === "vertical" ? "flex-col" : "flex-row flex-wrap items-center",
            className
          )}
          {...props}
        >
          {options.map((option) => {
            const itemId = `${props.name || "radio"}-${option.value}`;
            const labelId = `label-${itemId}`;
            const isItemDisabled = option.disabled || disabled;
            return (
              <div key={option.value} className="flex items-start gap-2.5">
                <div className="flex items-center h-5 shrink-0">
                  <RadioGroupPrimitive.Item
                    id={itemId}
                    value={option.value}
                    disabled={isItemDisabled}
                    aria-labelledby={labelId}
                    className={cn(
                      "aspect-square h-4 w-4 rounded-full border border-input text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary transition-all cursor-pointer flex items-center justify-center relative",
                      error && "border-destructive focus-visible:ring-destructive"
                    )}
                  >
                    <RadioGroupPrimitive.Indicator className="flex items-center justify-center h-full w-full after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-primary" />
                  </RadioGroupPrimitive.Item>
                </div>
                <div className="flex flex-col gap-0.5 select-none">
                  <label
                    id={labelId}
                    htmlFor={itemId}
                    className={cn(
                      "text-sm font-medium leading-tight cursor-pointer text-foreground",
                      isItemDisabled && "opacity-50 cursor-not-allowed",
                      error && "text-destructive"
                    )}
                  >
                    {option.label}
                  </label>
                  {option.description && (
                    <span
                      className={cn(
                        "text-xs text-muted-foreground",
                        isItemDisabled && "opacity-50"
                      )}
                    >
                      {option.description}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </RadioGroupPrimitive.Root>
        {helperText && (
          <span
            id={helperId}
            className={cn(
              "text-xs leading-none text-muted-foreground",
              error && "text-destructive"
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";
