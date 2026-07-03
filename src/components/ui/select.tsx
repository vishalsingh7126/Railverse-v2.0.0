"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  placeholder?: string;
  error?: boolean;
  loading?: boolean;
  helperText?: string;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  className?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      placeholder = "Select option",
      error,
      loading,
      helperText,
      options,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const { "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ...rootProps } = props;
    const helperId = React.useId();

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <SelectPrimitive.Root disabled={disabled || loading} {...rootProps}>
          <SelectPrimitive.Trigger
            ref={ref}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer text-left [&>span]:line-clamp-1",
              error && "border-destructive focus:ring-destructive",
              className
            )}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
              )}
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={cn(
                "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
              )}
              position="popper"
              sideOffset={4}
            >
              <SelectPrimitive.Viewport className="h-[var(--radix-select-trigger-height)] max-h-60 w-full min-w-[var(--radix-select-trigger-width)] p-1 overflow-y-auto">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={cn(
                      "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors"
                    )}
                  >
                    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </SelectPrimitive.ItemIndicator>
                    </span>
                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
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
Select.displayName = "Select";
