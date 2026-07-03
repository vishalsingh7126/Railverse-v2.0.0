"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Bell } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NotificationMenuProps {
  count?: number;
  children: React.ReactNode;
  className?: string;
  bellClassName?: string;
}

export const NotificationMenu = React.forwardRef<HTMLButtonElement, NotificationMenuProps>(
  ({ className, bellClassName, count = 0, children }, ref) => {
    return (
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            ref={ref}
            type="button"
            aria-label="Open notifications menu"
            className={cn(
              "relative h-9 w-9 flex items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors cursor-pointer",
              className
            )}
          >
            <Bell className={cn("h-4 w-4", bellClassName)} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-red-600 text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            className="z-50 w-80 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 p-0"
            sideOffset={4}
          >
            <div className="px-4 py-2.5 border-b border-border font-semibold text-sm">
              Notifications
            </div>
            <div className="max-h-[300px] overflow-y-auto">{children}</div>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    );
  }
);
NotificationMenu.displayName = "NotificationMenu";
