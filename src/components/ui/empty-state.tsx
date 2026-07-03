import * as React from "react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  illustration?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, icon, title, description, action, illustration, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 rounded-lg border border-dashed border-border bg-card/30 text-card-foreground select-none max-w-md mx-auto gap-4",
          className
        )}
        {...props}
      >
        {illustration && (
          <div className="flex items-center justify-center w-full">{illustration}</div>
        )}

        {!illustration && icon && (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-muted/60 text-muted-foreground">
            {icon}
          </div>
        )}

        <div className="flex flex-col gap-1.5 max-w-sm">
          {title && (
            <h3 className="font-semibold text-base leading-none tracking-tight text-foreground">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs text-muted-foreground leading-normal">{description}</p>
          )}
        </div>

        {action && <div className="flex items-center justify-center mt-1">{action}</div>}

        {children}
      </div>
    );
  }
);
EmptyState.displayName = "EmptyState";
