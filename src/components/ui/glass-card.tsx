import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

export type GlassCardProps = React.ComponentPropsWithoutRef<typeof Card>;

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "bg-background/60 backdrop-blur-md border-border/80 shadow-premium-md",
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";
