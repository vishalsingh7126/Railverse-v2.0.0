import * as React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  label?: React.ReactNode;
  labelAlign?: "start" | "center" | "end";
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", label, labelAlign = "center", ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={cn("w-[1px] h-auto bg-border shrink-0 self-stretch my-1", className)}
          role="separator"
          aria-orientation="vertical"
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center w-full my-4 select-none", className)}
          role="separator"
          aria-orientation="horizontal"
          {...props}
        >
          <div className={cn("grow h-[1px] bg-border", labelAlign === "start" && "grow-0 w-6")} />
          <span className="px-3 text-[11px] font-semibold tracking-wider uppercase text-muted-foreground shrink-0">
            {label}
          </span>
          <div className={cn("grow h-[1px] bg-border", labelAlign === "end" && "grow-0 w-6")} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("w-full h-[1px] bg-border my-4 shrink-0", className)}
        role="separator"
        aria-orientation="horizontal"
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";
