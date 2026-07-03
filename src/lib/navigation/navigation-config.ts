import * as React from "react";
import { SidebarGroup } from "@/components/navigation/sidebar";
import { MobileNavItem } from "@/components/navigation/mobile-navigation";
import { ROUTES } from "@/config/ROUTES";

// We import React to support the ReactNode icons, but define a clean config structure
export interface NavigationConfig {
  sidebarGroups: SidebarGroup[];
  mobileNavItems: MobileNavItem[];
  breadcrumbMap: Record<string, string>;
}

// Inline SVG components or standard string/element tags to avoid Lucide code-splitting issues if any
// However, since Lucide is fully available, we can import them from 'lucide-react' dynamically or normally.
// Let's import standard React elements of Lucide icons.
import { LayoutDashboard, Search, CreditCard, Train, Settings, Compass } from "lucide-react";

export const NAVIGATION_CONFIG: NavigationConfig = {
  sidebarGroups: [
    {
      title: "Intelligence",
      items: [
        {
          label: "Dashboard",
          href: ROUTES.DASHBOARD,
          icon: React.createElement(LayoutDashboard, { className: "h-4 w-4" }),
        },
        {
          label: "PNR Status",
          href: ROUTES.PNR.ROOT,
          icon: React.createElement(Search, { className: "h-4 w-4" }),
        },
        {
          label: "Trains Search",
          href: ROUTES.TRAINS.ROOT,
          icon: React.createElement(Train, { className: "h-4 w-4" }),
        },
      ],
    },
    {
      title: "Tools & Bookings",
      items: [
        {
          label: "Seat Availability",
          href: ROUTES.SEAT_AVAILABILITY,
          icon: React.createElement(Compass, { className: "h-4 w-4" }),
        },
        {
          label: "Fare Comparison",
          href: ROUTES.FARE_COMPARISON,
          icon: React.createElement(CreditCard, { className: "h-4 w-4" }),
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          label: "Account Settings",
          href: "/settings",
          icon: React.createElement(Settings, { className: "h-4 w-4" }),
        },
      ],
    },
  ],
  mobileNavItems: [
    {
      label: "Home",
      href: ROUTES.HOME,
      icon: React.createElement(Compass, { className: "h-5 w-5" }),
    },
    {
      label: "PNR",
      href: ROUTES.PNR.ROOT,
      icon: React.createElement(Search, { className: "h-5 w-5" }),
    },
    {
      label: "Dashboard",
      href: ROUTES.DASHBOARD,
      icon: React.createElement(LayoutDashboard, { className: "h-5 w-5" }),
    },
    {
      label: "Trains",
      href: ROUTES.TRAINS.ROOT,
      icon: React.createElement(Train, { className: "h-5 w-5" }),
    },
  ],
  breadcrumbMap: {
    "/dashboard": "Dashboard",
    "/pnr": "PNR Status",
    "/trains": "Trains Search",
    "/trains/live": "Live Status",
    "/seat-availability": "Seat Availability",
    "/fare-comparison": "Fare Comparison",
    "/settings": "Settings",
  },
};
