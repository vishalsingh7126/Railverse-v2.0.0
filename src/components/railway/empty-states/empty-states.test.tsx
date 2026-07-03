import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { RailwayEmptyState } from "./railway-empty-state";

describe("RailwayEmptyState", () => {
  it("renders no-journey preset correctly", () => {
    render(<RailwayEmptyState preset="no-journey" />);
    expect(screen.getByText("No Journey Found")).toBeInTheDocument();
  });

  it("renders no-live-status preset correctly", () => {
    render(<RailwayEmptyState preset="no-live-status" />);
    expect(screen.getByText("No Live Status Available")).toBeInTheDocument();
  });

  it("renders no-seat-data preset correctly", () => {
    render(<RailwayEmptyState preset="no-seat-data" />);
    expect(screen.getByText("No Seat Data Available")).toBeInTheDocument();
  });

  it("renders no-fare-data preset correctly", () => {
    render(<RailwayEmptyState preset="no-fare-data" />);
    expect(screen.getByText("No Fare Data Found")).toBeInTheDocument();
  });

  it("renders no-search-results preset correctly", () => {
    render(<RailwayEmptyState preset="no-search-results" />);
    expect(screen.getByText("No Search Results")).toBeInTheDocument();
  });

  it("renders no-recent-searches preset correctly", () => {
    render(<RailwayEmptyState preset="no-recent-searches" />);
    expect(screen.getByText("No Recent Searches")).toBeInTheDocument();
  });

  it("renders composable children alongside preset", () => {
    render(
      <RailwayEmptyState preset="no-live-status">
        <button>Refresh</button>
      </RailwayEmptyState>
    );
    expect(screen.getByRole("button", { name: "Refresh" })).toBeInTheDocument();
  });

  it("renders custom title and description", () => {
    render(<RailwayEmptyState title="Custom Title" description="Custom description." />);
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom description.")).toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<RailwayEmptyState preset="no-journey" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
