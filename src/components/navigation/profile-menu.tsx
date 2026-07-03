"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export interface ProfileMenuItemProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}

export interface ProfileMenuProps {
  avatarUrl?: string;
  fallbackText?: string;
  items?: ProfileMenuItemProps[];
  children?: React.ReactNode;
  className?: string;
}

export const ProfileMenu = React.forwardRef<HTMLButtonElement, ProfileMenuProps>(
  ({ className, avatarUrl, fallbackText = "U", items, children }, ref) => {
    return (
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            ref={ref}
            type="button"
            className={cn(
              "relative h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer hover:opacity-95 transition-opacity",
              className
            )}
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Avatar"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span>{fallbackText.charAt(0).toUpperCase()}</span>
            )}
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            className="z-50 min-w-[160px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            sideOffset={4}
          >
            {children
              ? children
              : items?.map((item, idx) => (
                  <DropdownMenuPrimitive.Item
                    key={idx}
                    onClick={item.onClick}
                    className={cn(
                      "flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm outline-none cursor-pointer focus:bg-accent focus:text-accent-foreground transition-colors",
                      item.danger
                        ? "text-red-600 focus:bg-red-600/10 focus:text-red-600"
                        : "text-foreground"
                    )}
                  >
                    {item.icon && (
                      <span className="h-4 w-4 flex items-center justify-center">{item.icon}</span>
                    )}
                    <span>{item.label}</span>
                  </DropdownMenuPrimitive.Item>
                ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    );
  }
);
ProfileMenu.displayName = "ProfileMenu";
