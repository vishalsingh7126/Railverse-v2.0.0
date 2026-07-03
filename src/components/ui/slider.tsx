"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  label?: string;
  helperText?: string;
  showTicks?: boolean;
}

export const Slider = React.forwardRef<HTMLSpanElement, SliderProps>(
  (
    {
      className,
      label,
      helperText,
      showTicks = false,
      disabled,
      step = 1,
      min = 0,
      max = 100,
      ...props
    },
    ref
  ) => {
    const val = props.value || props.defaultValue || [0];
    const labelId = React.useId();

    // Calculate ticks if requested, capped to prevent layout crashes
    const ticks = React.useMemo(() => {
      if (!showTicks || step <= 0) return [];
      const count = Math.floor((max - min) / step) + 1;
      if (count > 21) return []; // Avoid rendering more than 21 ticks
      return Array.from({ length: count }, (_, i) => min + i * step);
    }, [showTicks, min, max, step]);

    return (
      <div className="flex flex-col gap-2 w-full select-none">
        {(label || helperText) && (
          <div className="flex justify-between items-baseline">
            {label && (
              <label id={labelId} className="text-sm font-medium text-foreground">
                {label}
              </label>
            )}
            {helperText && <span className="text-xs text-muted-foreground">{helperText}</span>}
          </div>
        )}

        <div className="relative flex items-center w-full h-5">
          <SliderPrimitive.Root
            ref={ref}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            aria-labelledby={label ? labelId : undefined}
            className={cn(
              "relative flex w-full touch-none select-none items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            {...props}
          >
            <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
              <SliderPrimitive.Range className="absolute h-full bg-primary" />
            </SliderPrimitive.Track>

            {val.map((_, index) => (
              <SliderPrimitive.Thumb
                key={index}
                aria-label={label || props["aria-label"] || "Slider"}
                aria-disabled={disabled ? "true" : undefined}
                className="block h-4 w-4 rounded-full border border-primary/20 bg-background shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none hover:scale-110 active:scale-95 duration-100"
              />
            ))}
          </SliderPrimitive.Root>
        </div>

        {ticks.length > 0 && (
          <div className="flex justify-between px-1 text-[10px] text-muted-foreground font-semibold">
            {ticks.map((tick) => (
              <span key={tick}>{tick}</span>
            ))}
          </div>
        )}
      </div>
    );
  }
);
Slider.displayName = "Slider";
