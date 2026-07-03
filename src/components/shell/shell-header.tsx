"use client";

import * as React from "react";
import { Header } from "@/components/navigation/header";
import { AppLogo } from "@/components/ui/app-logo";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { NotificationMenu } from "@/components/navigation/notification-menu";
import { UserMenu } from "@/components/navigation/user-menu";
import { useShell } from "@/providers/shell-provider";
import { FEATURES } from "@/config/features";
import { Search, Settings, LogOut } from "lucide-react";

export interface ShellHeaderProps {
  logo?: React.ReactNode;
  actions?: React.ReactNode;
  utilities?: React.ReactNode;
}

export function ShellHeader({ logo, actions, utilities }: ShellHeaderProps) {
  const { state, setState } = useShell();

  // Define default user actions
  const userGroups = [
    {
      label: "Account",
      items: [
        {
          label: "Profile Settings",
          icon: <Settings className="h-4 w-4 mr-2 text-muted-foreground" />,
          onClick: () => {},
        },
      ],
    },
    {
      label: "Session",
      items: [
        {
          label: "Log Out",
          icon: <LogOut className="h-4 w-4 mr-2 text-red-500" />,
          onClick: () => {},
          danger: true,
        },
      ],
    },
  ];

  // Render defaults if slots are not provided
  const renderedLogo = logo ?? <AppLogo showText={true} />;

  const renderedActions = actions ?? null;

  const renderedUtilities = utilities ?? (
    <div className="flex items-center gap-2">
      {/* Dynamic Search Toggle */}
      {FEATURES.SEARCH_OVERLAY && (
        <button
          type="button"
          onClick={() => setState({ searchOverlayOpen: !state.searchOverlayOpen })}
          className="relative h-9 w-9 md:w-36 md:px-3 flex items-center justify-center md:justify-between rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground text-muted-foreground transition-colors cursor-pointer text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Search"
        >
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 shrink-0" />
            <span className="hidden md:inline text-muted-foreground">Search...</span>
          </div>
          <kbd className="hidden md:inline-flex h-5 select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[9px] font-medium text-muted-foreground opacity-100">
            <span>⌘</span>K
          </kbd>
        </button>
      )}

      <ThemeToggle />

      {/* Dynamic Notifications */}
      {FEATURES.NOTIFICATIONS && (
        <NotificationMenu count={2}>
          <div className="flex flex-col text-xs">
            <div className="p-3 border-b border-border hover:bg-muted/10 transition-colors cursor-pointer">
              <p className="font-bold text-foreground">Shatabdi Express Delayed</p>
              <p className="text-muted-foreground text-[10px] mt-0.5">
                Train 12002 is running 15 mins behind schedule.
              </p>
            </div>
            <div className="p-3 hover:bg-muted/10 transition-colors cursor-pointer">
              <p className="font-bold text-foreground">PNR Ticket Confirmed</p>
              <p className="text-muted-foreground text-[10px] mt-0.5">
                PNR 4218903254 has been updated to CNF status.
              </p>
            </div>
          </div>
        </NotificationMenu>
      )}

      <UserMenu name="Vishal Singh" email="vishal@travelcore.in" groups={userGroups} />
    </div>
  );

  return <Header logo={renderedLogo} navigation={renderedActions} actions={renderedUtilities} />;
}
