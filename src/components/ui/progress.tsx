import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number | null; // null triggers indeterminate mode
  variant?: "linear" | "circular";
  size?: "sm" | "md" | "lg";
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = null, variant = "linear", size = "md", ...props }, ref) => {
    const isIndeterminate = value === null || value === undefined;

    if (variant === "linear") {
      const heightMap = {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      };

      return (
        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={isIndeterminate ? undefined : value}
          className={cn(
            "relative w-full overflow-hidden rounded-full bg-secondary",
            heightMap[size],
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out rounded-full",
              isIndeterminate && "animate-progress-indeterminate origin-left"
            )}
            style={{
              transform: isIndeterminate ? undefined : `translateX(-${100 - (value || 0)}%)`,
            }}
          />
        </div>
      );
    }

    const sizeMap = {
      sm: { box: 32, stroke: 3, radius: 13, center: 16 },
      md: { box: 48, stroke: 4, radius: 20, center: 24 },
      lg: { box: 64, stroke: 6, radius: 26, center: 32 },
    };

    const circSpec = sizeMap[size];
    const circumference = 2 * Math.PI * circSpec.radius;
    const strokeDashoffset = isIndeterminate
      ? 0
      : circumference - ((value || 0) / 100) * circumference;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={isIndeterminate ? undefined : value}
        className={cn(
          "relative flex items-center justify-center select-none",
          isIndeterminate && "animate-spin duration-1500",
          className
        )}
        style={{ width: circSpec.box, height: circSpec.box }}
        {...props}
      >
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox={`0 0 ${circSpec.box} ${circSpec.box}`}
        >
          <circle
            cx={circSpec.center}
            cy={circSpec.center}
            r={circSpec.radius}
            className="stroke-secondary fill-transparent"
            strokeWidth={circSpec.stroke}
          />
          <circle
            cx={circSpec.center}
            cy={circSpec.center}
            r={circSpec.radius}
            className={cn(
              "stroke-primary fill-transparent transition-all duration-300 ease-in-out",
              isIndeterminate && "animate-circular-dash"
            )}
            strokeWidth={circSpec.stroke}
            strokeDasharray={circumference}
            strokeDashoffset={isIndeterminate ? circumference / 4 : strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }
);
Progress.displayName = "Progress";
