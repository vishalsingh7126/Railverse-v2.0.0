import * as React from "react";

export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-4 left-4 z-[9999] px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary border border-border rounded-md shadow-premium-lg outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-transform duration-200"
    >
      Skip to content
    </a>
  );
}
