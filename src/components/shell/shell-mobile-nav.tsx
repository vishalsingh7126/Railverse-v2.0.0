"use client";

import * as React from "react";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { NAVIGATION_CONFIG } from "@/lib/navigation/navigation-config";
import { ShellSidebar } from "./shell-sidebar";
import { usePathname } from "next/navigation";
import { isActiveRoute } from "@/lib/navigation/route-utils";

export function ShellMobileNav() {
  const pathname = usePathname();

  // Dynamically map active state on mobile items based on current path
  const activeItems = React.useMemo(() => {
    return NAVIGATION_CONFIG.mobileNavItems.map((item) => ({
      ...item,
      active: isActiveRoute(pathname || "", item.href),
    }));
  }, [pathname]);

  return (
    <MobileNavigation
      items={activeItems}
      drawerContent={
        <div className="h-full overflow-y-auto">
          {/* Reuse ShellSidebar content but style specifically for mobile drawer */}
          <ShellSidebar />
        </div>
      }
    />
  );
}
