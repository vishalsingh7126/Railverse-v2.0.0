import { describe, expect, it } from "vitest";
import { render, screen, act } from "@testing-library/react";
import * as React from "react";
import { ShellProvider, useShell } from "./shell-provider";

function TestComponent() {
  const { state, setState } = useShell();
  return (
    <div>
      <span data-testid="sidebar-open">{state.sidebarOpen ? "open" : "closed"}</span>
      <span data-testid="sidebar-collapsed">
        {state.sidebarCollapsed ? "collapsed" : "expanded"}
      </span>
      <button onClick={() => setState({ sidebarOpen: false })}>Close Sidebar</button>
      <button onClick={() => setState({ sidebarCollapsed: true })}>Collapse Sidebar</button>
    </div>
  );
}

describe("ShellProvider", () => {
  it("should provide default shell states successfully", () => {
    render(
      <ShellProvider>
        <TestComponent />
      </ShellProvider>
    );

    expect(screen.getByTestId("sidebar-open")).toHaveTextContent("open");
    expect(screen.getByTestId("sidebar-collapsed")).toHaveTextContent("expanded");
  });

  it("should transition states dynamically upon actions", () => {
    render(
      <ShellProvider>
        <TestComponent />
      </ShellProvider>
    );

    const closeBtn = screen.getByText("Close Sidebar");
    const collapseBtn = screen.getByText("Collapse Sidebar");

    act(() => {
      closeBtn.click();
    });
    expect(screen.getByTestId("sidebar-open")).toHaveTextContent("closed");

    act(() => {
      collapseBtn.click();
    });
    expect(screen.getByTestId("sidebar-collapsed")).toHaveTextContent("collapsed");
  });
});
