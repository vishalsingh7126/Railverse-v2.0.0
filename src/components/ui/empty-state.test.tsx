import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { EmptyState } from "./empty-state";

describe("EmptyState Component", () => {
  it("should render successfully with title and description", () => {
    render(<EmptyState title="No records" description="Database is empty" />);
    expect(screen.getByText("No records")).toBeInTheDocument();
    expect(screen.getByText("Database is empty")).toBeInTheDocument();
  });

  it("should render children composability slots correctly", () => {
    render(
      <EmptyState title="No records">
        <button data-testid="composed-btn">Add record</button>
      </EmptyState>
    );
    expect(screen.getByTestId("composed-btn")).toBeInTheDocument();
  });

  it("should render actions and illustrations", () => {
    render(
      <EmptyState
        title="Empty"
        action={<button data-testid="act-btn">Retry</button>}
        illustration={<div data-testid="ill-slot">Drawing</div>}
      />
    );
    expect(screen.getByTestId("act-btn")).toBeInTheDocument();
    expect(screen.getByTestId("ill-slot")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <EmptyState title="Access check" description="Verify checklist parameters" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
