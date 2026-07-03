"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ThemeSwitcherProps {
  className?: string;
  triggerClassName?: string;
}

export const ThemeSwitcher = React.forwardRef<HTMLButtonElement, ThemeSwitcherProps>(
  ({ className, triggerClassName }, ref) => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    const CurrentIcon = React.useMemo(() => {
      if (!mounted) return Sun;
      if (theme === "system") return Monitor;
      if (resolvedTheme === "dark") return Moon;
      return Sun;
    }, [theme, resolvedTheme, mounted]);

    return (
      <div className={cn("relative inline-block text-left", className)}>
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <button
              ref={ref}
              type="button"
              className={cn(
                "inline-flex items-center justify-between gap-2 h-9 px-3 text-sm font-medium rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors cursor-pointer",
                triggerClassName
              )}
            >
              <CurrentIcon className="h-4 w-4" />
              <span className="capitalize">{mounted ? theme : "Theme"}</span>
              <ChevronDown className="h-3 w-3 opacity-50" />
            </button>
          </DropdownMenuPrimitive.Trigger>

          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              align="end"
              className="z-50 min-w-[120px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
              sideOffset={4}
            >
              <DropdownMenuPrimitive.Item
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                onClick={() => setTheme("light")}
              >
                <Sun className="h-4 w-4" />
                <span>Light</span>
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                onClick={() => setTheme("dark")}
              >
                <Moon className="h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item
                className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors"
                onClick={() => setTheme("system")}
              >
                <Monitor className="h-4 w-4" />
                <span>System</span>
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        </DropdownMenuPrimitive.Root>
      </div>
    );
  }
);
ThemeSwitcher.displayName = "ThemeSwitcher";
