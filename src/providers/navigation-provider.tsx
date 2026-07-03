"use client";

import * as React from "react";

interface NavigationContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  sidebarPinned: boolean;
  setSidebarPinned: (pinned: boolean) => void;
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: (open: boolean) => void;
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
  searchOverlayOpen: boolean;
  setSearchOverlayOpen: (open: boolean) => void;
}

const NavigationContext = React.createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [sidebarPinned, setSidebarPinned] = React.useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = React.useState(false);
  const [searchOverlayOpen, setSearchOverlayOpen] = React.useState(false);

  return (
    <NavigationContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        sidebarCollapsed,
        setSidebarCollapsed,
        sidebarPinned,
        setSidebarPinned,
        mobileDrawerOpen,
        setMobileDrawerOpen,
        commandPaletteOpen,
        setCommandPaletteOpen,
        searchOverlayOpen,
        setSearchOverlayOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = React.useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
