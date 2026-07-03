import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { LoadingOverlay } from "./loading-overlay";

describe("LoadingOverlay Component", () => {
  it("should render successfully with a status role when visible is true", () => {
    render(<LoadingOverlay visible={true} message="Syncing data" usePortal={false} />);
    expect(screen.getAllByRole("status")[0]).toBeInTheDocument();
    expect(screen.getByText("Syncing data")).toBeInTheDocument();
  });

  it("should not render any overlays when visible is false", () => {
    render(<LoadingOverlay visible={false} usePortal={false} />);
    expect(screen.queryAllByRole("status")).toHaveLength(0);
  });

  it("should render in body portal by default", () => {
    const { baseElement } = render(<LoadingOverlay visible={true} message="Portaled" />);
    // When portaled, the status block is rendered under body, not the container
    expect(baseElement.querySelector("div[role='status']")).toBeInTheDocument();
  });

  it("should have no accessibility violations on visible status", async () => {
    const { container } = render(
      <div className="relative h-40 w-40">
        <LoadingOverlay visible={true} usePortal={false} />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
