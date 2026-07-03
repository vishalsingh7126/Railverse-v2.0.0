"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export interface TabItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
  content?: React.ReactNode;
}

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  items: TabItem[];
  tabsClassName?: string;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { className, items, defaultValue, listClassName, triggerClassName, contentClassName, ...props },
    ref
  ) => {
    const defaultVal = defaultValue || items[0]?.value;

    return (
      <TabsPrimitive.Root
        ref={ref}
        defaultValue={defaultVal}
        className={cn("w-full space-y-4", className)}
        {...props}
      >
        <TabsPrimitive.List
          className={cn(
            "flex items-center gap-1 border-b border-border w-full overflow-x-auto scrollbar-none",
            listClassName
          )}
        >
          {items.map((item) => (
            <TabsPrimitive.Trigger
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 border-transparent text-muted-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=active]:border-primary data-[state=active]:text-foreground hover:text-foreground cursor-pointer shrink-0",
                triggerClassName
              )}
            >
              {item.icon && (
                <span className="h-4 w-4 flex items-center justify-center">{item.icon}</span>
              )}
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-accent text-accent-foreground border">
                  {item.badge}
                </span>
              )}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>

        {items.map((item) => (
          <TabsPrimitive.Content
            key={item.value}
            value={item.value}
            className={cn(
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md",
              contentClassName
            )}
          >
            {item.content}
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    );
  }
);
Tabs.displayName = "Tabs";
