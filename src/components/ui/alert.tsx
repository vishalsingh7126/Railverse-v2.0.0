import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Info, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        info: "bg-blue-500/10 text-blue-800 dark:text-blue-400 border-blue-500/20 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400",
        success:
          "bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-500/20 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400",
        warning:
          "bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-500/20 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400",
        error: "bg-destructive/10 text-destructive border-destructive/20 [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, description, icon, children, ...props }, ref) => {
    const defaultIcon = React.useMemo(() => {
      if (icon) return icon;
      switch (variant) {
        case "info":
          return <Info className="h-4 w-4" aria-hidden="true" />;
        case "success":
          return <CheckCircle className="h-4 w-4" aria-hidden="true" />;
        case "warning":
          return <AlertTriangle className="h-4 w-4" aria-hidden="true" />;
        case "error":
          return <AlertCircle className="h-4 w-4" aria-hidden="true" />;
        default:
          return null;
      }
    }, [variant, icon]);

    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        {defaultIcon}
        <div className="flex flex-col gap-1">
          {title && <h5 className="font-semibold text-sm leading-none tracking-tight">{title}</h5>}
          {description && <div className="text-xs opacity-90 leading-relaxed">{description}</div>}
          {children}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";
export { alertVariants };
