import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { AppShell } from "./app-shell";
import { ShellProvider } from "@/providers/shell-provider";

describe("AppShell Component", () => {
  it("should render successfully with custom slots", () => {
    render(
      <ShellProvider>
        <AppShell
          header={<div>Header Panel</div>}
          sidebar={<div>Sidebar Drawer</div>}
          footer={<div>Footer text</div>}
        >
          <div>Main Workspace</div>
        </AppShell>
      </ShellProvider>
    );

    expect(screen.getByText("Header Panel")).toBeInTheDocument();
    expect(screen.getByText("Sidebar Drawer")).toBeInTheDocument();
    expect(screen.getByText("Main Workspace")).toBeInTheDocument();
    expect(screen.getByText("Footer text")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <ShellProvider>
        <AppShell>
          <div>Workspace</div>
        </AppShell>
      </ShellProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
