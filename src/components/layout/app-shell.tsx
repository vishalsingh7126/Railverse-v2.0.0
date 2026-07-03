"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useShell } from "@/providers/shell-provider";

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  ({ className, header, sidebar, rightSidebar, footer, children, ...props }, ref) => {
    const { state } = useShell();
    const { sidebarOpen, sidebarCollapsed } = state;

    // Determine left sidebar width for responsive layout grid columns
    const leftSidebarWidthClass = React.useMemo(() => {
      if (!sidebar || !sidebarOpen) return "grid-cols-1";
      if (sidebarCollapsed) return "lg:grid-cols-[64px_1fr]";
      return "lg:grid-cols-[280px_1fr]";
    }, [sidebar, sidebarOpen, sidebarCollapsed]);

    return (
      <div
        ref={ref}
        className={cn(
          "min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200",
          className
        )}
        {...props}
      >
        {/* Top Header Slot */}
        {header && <div className="sticky top-0 z-40 w-full">{header}</div>}

        {/* Dashboard layout viewport body */}
        <div className={cn("flex-1 grid w-full relative", leftSidebarWidthClass)}>
          {/* Main Navigation Sidebar Slot */}
          {sidebar && (
            <aside
              className={cn(
                "hidden lg:block border-r border-border h-[calc(100vh-64px)] sticky top-[64px] overflow-y-auto transition-all duration-300",
                sidebarCollapsed ? "w-[64px]" : "w-[280px]",
                !sidebarOpen && "hidden"
              )}
            >
              {sidebar}
            </aside>
          )}

          {/* Main Content Workspace + Right Panel Flex container */}
          <div className="flex flex-row min-w-0 w-full relative">
            <div className="flex-1 flex flex-col min-w-0 w-full">
              <main className="flex-1 min-w-0 w-full p-4 md:p-6 lg:p-8">{children}</main>

              {/* Shell Footer Slot */}
              {footer && (
                <footer className="mt-auto border-t border-border p-4 text-center text-xs text-muted-foreground bg-muted/10">
                  {footer}
                </footer>
              )}
            </div>

            {/* Right details / assistant panel slot */}
            {rightSidebar && (
              <aside className="hidden xl:block w-[320px] shrink-0 border-l border-border h-[calc(100vh-64px)] sticky top-[64px] overflow-y-auto bg-muted/5">
                {rightSidebar}
              </aside>
            )}
          </div>
        </div>
      </div>
    );
  }
);
AppShell.displayName = "AppShell";
