import * as React from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  onRetry?: () => void;
  illustration?: React.ReactNode;
  actions?: React.ReactNode;
}

export const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  (
    {
      className,
      title = "Something went wrong",
      description,
      onRetry,
      illustration,
      actions,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center text-center p-8 rounded-lg border border-destructive/20 bg-destructive/5 text-destructive select-none max-w-md mx-auto gap-4",
          className
        )}
        {...props}
      >
        {illustration && (
          <div className="flex items-center justify-center w-full">{illustration}</div>
        )}

        {!illustration && (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-destructive/10 text-destructive">
            <AlertCircle className="h-6 w-6" aria-hidden="true" />
          </div>
        )}

        <div className="flex flex-col gap-1.5 max-w-sm">
          <h3 className="font-semibold text-base leading-none tracking-tight text-destructive">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-muted-foreground leading-normal">{description}</p>
          )}
        </div>

        {(actions || onRetry) && (
          <div className="flex items-center justify-center gap-2 mt-1">
            {actions}
            {!actions && onRetry && (
              <Button variant="destructive" size="sm" onClick={onRetry}>
                Try Again
              </Button>
            )}
          </div>
        )}

        {children}
      </div>
    );
  }
);
ErrorState.displayName = "ErrorState";
