"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "py-0",
      sm: "py-6 md:py-8",
      md: "py-10 md:py-12",
      lg: "py-16 md:py-20",
      xl: "py-24 md:py-32",
    },
    divider: {
      true: "border-b border-border",
      false: "",
    },
  },
  defaultVariants: {
    spacing: "md",
    divider: false,
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, divider, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ spacing, divider }), className)}
      {...props}
    />
  )
);
Section.displayName = "Section";
