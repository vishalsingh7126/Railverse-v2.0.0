"use client";

import * as React from "react";

type ShortcutHandler = (event: KeyboardEvent) => void;

interface Shortcut {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  handler: ShortcutHandler;
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]) {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;

      for (const shortcut of shortcuts) {
        const matchesKey = event.key.toLowerCase() === shortcut.key.toLowerCase();

        // Handle Ctrl and Meta modifiers (e.g., Cmd on Mac, Ctrl on Windows/Linux)
        const matchesCtrl = shortcut.ctrlKey === undefined || event.ctrlKey === shortcut.ctrlKey;
        const matchesMeta = shortcut.metaKey === undefined || event.metaKey === shortcut.metaKey;
        const matchesAlt = shortcut.altKey === undefined || event.altKey === shortcut.altKey;
        const matchesShift =
          shortcut.shiftKey === undefined || event.shiftKey === shortcut.shiftKey;

        // Command Palette (e.g. Ctrl/Cmd+K) and Escape should trigger even if an input is focused
        const shouldOverrideInput =
          (shortcut.key.toLowerCase() === "k" && (event.ctrlKey || event.metaKey)) ||
          shortcut.key === "Escape";

        if (matchesKey && matchesCtrl && matchesMeta && matchesAlt && matchesShift) {
          if (isInput && !shouldOverrideInput) {
            continue;
          }
          event.preventDefault();
          shortcut.handler(event);
          break; // Trigger first matching shortcut only
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shortcuts]);
}
