"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { AppShell } from "@/components/layout/app-shell";
import { ShellHeader } from "@/components/shell/shell-header";
import { ShellSidebar } from "@/components/shell/shell-sidebar";
import { ShellMobileNav } from "@/components/shell/shell-mobile-nav";
import { useShell } from "@/providers/shell-provider";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";
import { FEATURES } from "@/config/features";

// Lazy code-splitting for large overlay modules
const LazyCommandPalette = dynamic(
  () => import("@/components/shell/shell-command-palette").then((mod) => mod.ShellCommandPalette),
  { ssr: false }
);

const LazySearchOverlay = dynamic(
  () => import("@/components/shell/shell-search-overlay").then((mod) => mod.ShellSearchOverlay),
  { ssr: false }
);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { state, setState } = useShell();
  const { commandPaletteOpen, searchOverlayOpen } = state;

  // Register hotkeys for Search Overlay and Command Palette
  useKeyboardShortcuts([
    {
      key: "k",
      ctrlKey: true,
      handler: () => {
        if (FEATURES.COMMAND_PALETTE) {
          setState({ commandPaletteOpen: !commandPaletteOpen });
        }
      },
    },
    {
      key: "k",
      metaKey: true, // Support Command+K on MacOS
      handler: () => {
        if (FEATURES.COMMAND_PALETTE) {
          setState({ commandPaletteOpen: !commandPaletteOpen });
        }
      },
    },
    {
      key: "/",
      handler: (e) => {
        // Only trigger search if not already focused in an input
        const target = e.target as HTMLElement;
        if (
          target.tagName !== "INPUT" &&
          target.tagName !== "TEXTAREA" &&
          !target.isContentEditable &&
          FEATURES.SEARCH_OVERLAY
        ) {
          setState({ searchOverlayOpen: !searchOverlayOpen });
        }
      },
    },
  ]);

  return (
    <AppShell header={<ShellHeader />} sidebar={<ShellSidebar />}>
      <div id="main-content" className="w-full h-full outline-none" tabIndex={-1}>
        {children}
      </div>

      {/* Mobile Sticky TabBar */}
      <ShellMobileNav />

      {/* Code-split Dynamic Overlays loaded only when active */}
      {commandPaletteOpen && FEATURES.COMMAND_PALETTE && <LazyCommandPalette />}
      {searchOverlayOpen && FEATURES.SEARCH_OVERLAY && <LazySearchOverlay />}
    </AppShell>
  );
}
