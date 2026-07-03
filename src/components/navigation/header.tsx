"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headerVariants = cva("w-full transition-all duration-300 z-40 border-b border-border", {
  variants: {
    variant: {
      solid: "bg-background text-foreground",
      transparent: "bg-transparent text-foreground border-transparent",
    },
    glassmorphism: {
      true: "backdrop-blur-md bg-background/80 dark:bg-background/80",
      false: "",
    },
    sticky: {
      true: "sticky top-0",
      false: "relative",
    },
  },
  defaultVariants: {
    variant: "solid",
    glassmorphism: true,
    sticky: true,
  },
});

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headerVariants> {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
  scrollAware?: boolean;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      variant = "solid",
      glassmorphism = true,
      sticky = true,
      logo,
      navigation,
      actions,
      scrollAware = true,
      ...props
    },
    ref
  ) => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      if (!scrollAware) return;
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollAware]);

    const resolvedVariant = scrollAware && scrolled ? "solid" : variant;
    const resolvedBorder =
      scrollAware && !scrolled && variant === "transparent"
        ? "border-transparent"
        : "border-border";

    return (
      <header
        ref={ref}
        className={cn(
          headerVariants({ variant: resolvedVariant, glassmorphism, sticky }),
          resolvedBorder,
          scrolled && "shadow-premium-sm",
          className
        )}
        {...props}
      >
        <div className="h-16 px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4 max-w-7xl mx-auto w-full">
          {logo && <div className="flex shrink-0 items-center">{logo}</div>}
          {navigation && <div className="hidden md:flex flex-1 justify-center">{navigation}</div>}
          {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
        </div>
      </header>
    );
  }
);
Header.displayName = "Header";
