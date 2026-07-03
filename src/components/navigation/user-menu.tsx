"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface UserMenuAction {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}

export interface UserMenuProps {
  avatarUrl?: string;
  name: string;
  email: string;
  groups: {
    label?: string;
    items: UserMenuAction[];
  }[];
  className?: string;
}

export const UserMenu = React.forwardRef<HTMLButtonElement, UserMenuProps>(
  ({ className, avatarUrl, name, email, groups }, ref) => {
    return (
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            ref={ref}
            type="button"
            className={cn(
              "inline-flex items-center gap-2 p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors cursor-pointer",
              className
            )}
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="h-8 w-8 rounded-full object-cover border border-border"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="hidden md:flex flex-col items-start text-xs text-left leading-tight">
              <span className="font-semibold">{name}</span>
              <span className="text-muted-foreground">{email}</span>
            </div>
            <ChevronDown className="h-3 w-3 opacity-50 hidden md:block" />
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            className="z-50 min-w-[200px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            sideOffset={4}
          >
            <div className="px-2 py-1.5 text-xs text-muted-foreground border-b border-border mb-1">
              Signed in as <span className="font-semibold text-foreground">{email}</span>
            </div>

            {groups.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                {group.label && (
                  <DropdownMenuPrimitive.Label className="px-2 py-1 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    {group.label}
                  </DropdownMenuPrimitive.Label>
                )}
                {group.items.map((item, itemIdx) => (
                  <DropdownMenuPrimitive.Item
                    key={itemIdx}
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
                {groupIdx < groups.length - 1 && (
                  <DropdownMenuPrimitive.Separator className="h-px bg-border my-1" />
                )}
              </React.Fragment>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    );
  }
);
UserMenu.displayName = "UserMenu";
