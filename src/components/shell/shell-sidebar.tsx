"use client";

import * as React from "react";
import { Sidebar } from "@/components/navigation/sidebar";
import { NAVIGATION_CONFIG } from "@/lib/navigation/navigation-config";
import { useShell } from "@/providers/shell-provider";
import { usePathname } from "next/navigation";
import { isActiveRoute } from "@/lib/navigation/route-utils";

export function ShellSidebar() {
  const { state, setState } = useShell();
  const pathname = usePathname();

  // Dynamically map active state on sidebar items based on current path
  const activeGroups = React.useMemo(() => {
    return NAVIGATION_CONFIG.sidebarGroups.map((group) => ({
      ...group,
      items: group.items.map((item) => {
        const itemActive = isActiveRoute(pathname || "", item.href);
        const subItemsActive = item.items?.map((sub) => ({
          ...sub,
          active: isActiveRoute(pathname || "", sub.href, true),
        }));

        return {
          ...item,
          active: itemActive || subItemsActive?.some((sub) => sub.active),
          items: subItemsActive,
        };
      }),
    }));
  }, [pathname]);

  const handleCollapseChange = (collapsed: boolean) => {
    setState({ sidebarCollapsed: collapsed });
  };

  return (
    <Sidebar
      groups={activeGroups}
      collapsed={state.sidebarCollapsed}
      pinned={state.sidebarPinned}
      onCollapseChange={handleCollapseChange}
      variant="persistent"
    />
  );
}
