import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex items-center rounded-md border ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all duration-150 overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-input bg-background",
        filled:
          "border-transparent bg-muted/50 focus-within:bg-background focus-within:border-input",
        ghost: "border-transparent bg-transparent focus-within:border-input",
      },
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix" | "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  helperText?: string;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant,
      size,
      error = false,
      helperText,
      loading = false,
      startIcon,
      endIcon,
      prefix,
      suffix,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const helperTextId = React.useId();

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <div
          className={cn(
            inputVariants({ variant, size }),
            error && "border-destructive focus-within:ring-destructive",
            disabled && "opacity-50 bg-muted cursor-not-allowed",
            className
          )}
        >
          {/* Prefix (usually static text or dropdown like +91) */}
          {prefix && (
            <span className="flex items-center justify-center px-3 border-r border-border bg-muted/40 text-muted-foreground select-none h-full font-medium">
              {prefix}
            </span>
          )}

          {/* Start Icon (usually visual graphic like Search or Calendar) */}
          {startIcon && (
            <span className="flex items-center justify-center pl-3 text-muted-foreground select-none shrink-0">
              {startIcon}
            </span>
          )}

          {/* Actual Input element */}
          <input
            id={inputId}
            type={type}
            className={cn(
              "flex h-full w-full bg-transparent px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:pointer-events-none",
              (startIcon || prefix) && "pl-2",
              (endIcon || suffix || loading) && "pr-2"
            )}
            ref={ref}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={helperText ? helperTextId : undefined}
            {...props}
          />

          {/* Loading Indicator */}
          {loading && (
            <span className="flex items-center justify-center pr-3 shrink-0">
              <svg
                className="animate-spin h-4 w-4 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
          )}

          {/* End Icon */}
          {endIcon && !loading && (
            <span className="flex items-center justify-center pr-3 text-muted-foreground select-none shrink-0">
              {endIcon}
            </span>
          )}

          {/* Suffix */}
          {suffix && (
            <span className="flex items-center justify-center px-3 border-l border-border bg-muted/40 text-muted-foreground select-none h-full font-medium">
              {suffix}
            </span>
          )}
        </div>

        {/* Helper/Error Text */}
        {helperText && (
          <span
            id={helperTextId}
            className={cn(
              "text-[11px] leading-none text-muted-foreground",
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
Input.displayName = "Input";
