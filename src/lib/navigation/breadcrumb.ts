"use client";

import { usePathname } from "next/navigation";
import { NAVIGATION_CONFIG } from "./navigation-config";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function useBreadcrumbs(): BreadcrumbItem[] {
  const pathname = usePathname();
  if (!pathname) return [];

  const map = NAVIGATION_CONFIG.breadcrumbMap;
  const segments = pathname.split("/").filter(Boolean);
  const crumbs: BreadcrumbItem[] = [];

  // Add Home as the root breadcrumb
  crumbs.push({ label: "Home", href: "/" });

  let built = "";
  for (const seg of segments) {
    built += `/${seg}`;
    if (map[built]) {
      crumbs.push({ label: map[built], href: built });
    } else {
      // Fallback for dynamic segments (e.g., /pnr/1234567890 -> '1234567890')
      const label = decodeURIComponent(seg);
      // Capitalize if it's not a number/id
      const formattedLabel = isNaN(Number(label))
        ? label.charAt(0).toUpperCase() + label.slice(1)
        : label;
      crumbs.push({ label: formattedLabel, href: built });
    }
  }

  return crumbs;
}
