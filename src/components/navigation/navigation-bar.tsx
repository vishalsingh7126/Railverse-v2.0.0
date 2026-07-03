"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  icon?: React.ReactNode;
}

export interface NavigationBarProps extends React.HTMLAttributes<HTMLElement> {
  items: NavigationItem[];
  collapse?: boolean;
}

export const NavigationBar = React.forwardRef<HTMLElement, NavigationBarProps>(
  ({ className, items, collapse = false, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Main Navigation"
        className={cn("flex items-center gap-1", collapse ? "hidden md:flex" : "flex", className)}
        {...props}
      >
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              item.active
                ? "bg-primary/10 text-primary dark:bg-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
          >
            {item.icon && (
              <span className="h-4 w-4 flex items-center justify-center">{item.icon}</span>
            )}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    );
  }
);
NavigationBar.displayName = "NavigationBar";
