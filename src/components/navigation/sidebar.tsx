"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

export interface SidebarSubItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
  items?: SidebarSubItem[];
}

export interface SidebarGroup {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  groups: SidebarGroup[];
  variant?: "persistent" | "floating";
  collapsed?: boolean;
  mini?: boolean;
  pinned?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    { className, groups, variant = "persistent", collapsed = false, mini = false, ...props },
    ref
  ) => {
    const [expandedGroups, setExpandedGroups] = React.useState<Record<string, boolean>>({});

    const toggleGroup = (label: string) => {
      setExpandedGroups((prev) => ({
        ...prev,
        [label]: !prev[label],
      }));
    };

    const isCollapsed = collapsed || mini;

    return (
      <div
        ref={ref}
        className={cn(
          "h-full flex flex-col bg-background text-foreground transition-all duration-300",
          variant === "floating"
            ? "p-3 rounded-xl border border-border m-3 shadow-premium-sm"
            : "border-r border-border",
          isCollapsed ? "w-16" : "w-72",
          className
        )}
        {...props}
      >
        <div className="flex-1 overflow-y-auto py-4 space-y-4 select-none">
          {groups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1 px-3">
              {group.title && !isCollapsed && (
                <h5 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.title}
                </h5>
              )}

              <div className="space-y-1">
                {group.items.map((item, itemIdx) => {
                  const hasSubItems = item.items && item.items.length > 0;
                  const isExpanded = !!expandedGroups[item.label];

                  return (
                    <div key={itemIdx} className="space-y-1">
                      {hasSubItems ? (
                        <>
                          <button
                            type="button"
                            onClick={() => !isCollapsed && toggleGroup(item.label)}
                            className={cn(
                              "w-full flex items-center justify-between gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent/50 cursor-pointer",
                              item.active
                                ? "text-primary bg-primary/5"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <span className="h-4 w-4 shrink-0 flex items-center justify-center">
                                {item.icon}
                              </span>
                              {!isCollapsed && <span>{item.label}</span>}
                            </div>
                            {!isCollapsed && (
                              <span>
                                {isExpanded ? (
                                  <ChevronDown className="h-3 w-3" />
                                ) : (
                                  <ChevronRight className="h-3 w-3" />
                                )}
                              </span>
                            )}
                          </button>

                          {isExpanded && !isCollapsed && (
                            <div className="pl-6 space-y-1 border-l border-border ml-5 mt-1">
                              {item.items?.map((subItem, subIdx) => (
                                <a
                                  key={subIdx}
                                  href={subItem.href}
                                  className={cn(
                                    "block px-3 py-1.5 text-xs font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                    subItem.active
                                      ? "text-primary bg-primary/5"
                                      : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                                  )}
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                            item.active
                              ? "bg-primary/10 text-primary dark:bg-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          )}
                        >
                          <span className="h-4 w-4 shrink-0 flex items-center justify-center">
                            {item.icon}
                          </span>
                          {!isCollapsed && <span>{item.label}</span>}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
Sidebar.displayName = "Sidebar";
