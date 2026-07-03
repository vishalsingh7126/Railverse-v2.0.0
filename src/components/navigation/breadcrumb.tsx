"use client";

import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  isCollapsedTrigger?: boolean;
  items?: BreadcrumbItem[];
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxVisibleItems?: number;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      className,
      items,
      separator = <ChevronRight className="h-4 w-4 opacity-50" />,
      maxVisibleItems = 4,
      ...props
    },
    ref
  ) => {
    const shouldCollapse = items.length > maxVisibleItems && maxVisibleItems >= 3;

    const renderItems = React.useMemo(() => {
      if (!shouldCollapse) return items;

      const first = items[0];
      const last = items[items.length - 1];
      const middleHidden = items.slice(1, items.length - 1);

      return [first, { label: "...", isCollapsedTrigger: true, items: middleHidden }, last];
    }, [items, shouldCollapse]);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("flex items-center text-sm font-medium text-muted-foreground", className)}
        {...props}
      >
        <ol className="flex items-center gap-1.5 flex-wrap">
          {renderItems.map((item, idx) => {
            const isLast = idx === renderItems.length - 1;

            return (
              <li key={idx} className="flex items-center gap-1.5">
                {item.isCollapsedTrigger ? (
                  <DropdownMenuPrimitive.Root>
                    <DropdownMenuPrimitive.Trigger asChild>
                      <button
                        type="button"
                        aria-label="Show hidden paths"
                        className="h-6 w-6 flex items-center justify-center rounded hover:bg-accent hover:text-foreground cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuPrimitive.Trigger>
                    <DropdownMenuPrimitive.Portal>
                      <DropdownMenuPrimitive.Content
                        align="center"
                        className="z-50 min-w-[150px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-premium-md"
                      >
                        {item.items?.map((hiddenItem: BreadcrumbItem, hiddenIdx: number) => (
                          <DropdownMenuPrimitive.Item key={hiddenIdx} asChild>
                            <a
                              href={hiddenItem.href || "#"}
                              className="flex items-center gap-2 px-2 py-1.5 text-xs rounded-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors font-medium"
                            >
                              {hiddenItem.icon && (
                                <span className="h-3 w-3">{hiddenItem.icon}</span>
                              )}
                              <span>{hiddenItem.label}</span>
                            </a>
                          </DropdownMenuPrimitive.Item>
                        ))}
                      </DropdownMenuPrimitive.Content>
                    </DropdownMenuPrimitive.Portal>
                  </DropdownMenuPrimitive.Root>
                ) : isLast ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-foreground flex items-center gap-1.5"
                  >
                    {item.icon && <span className="h-4 w-4">{item.icon}</span>}
                    <span>{item.label}</span>
                  </span>
                ) : (
                  <a
                    href={item.href || "#"}
                    className="hover:text-foreground transition-colors flex items-center gap-1.5"
                  >
                    {item.icon && <span className="h-4 w-4">{item.icon}</span>}
                    <span>{item.label}</span>
                  </a>
                )}

                {!isLast && <span role="presentation">{separator}</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";
