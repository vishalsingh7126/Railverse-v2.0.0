import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { SeatBadge } from "./seat-badge";
import { CoachBadge } from "./coach-badge";
import { SeatTypeChip } from "./seat-type-chip";
import { AvailabilityMeter } from "./availability-meter";
import { CoachLegend } from "./coach-legend";
import { SeatLegend } from "./seat-legend";

describe("Seat Domain Components", () => {
  it("should render SeatBadge correctly", () => {
    render(<SeatBadge tier="3A" />);
    expect(screen.getByText("3A")).toBeInTheDocument();
  });

  it("should render CoachBadge correctly", () => {
    render(<CoachBadge coach="B1" />);
    expect(screen.getByText("B1")).toBeInTheDocument();
  });

  it("should render SeatTypeChip correctly", () => {
    render(<SeatTypeChip type="Upper Berth" />);
    expect(screen.getByText("Upper Berth")).toBeInTheDocument();
  });

  it("should render AvailabilityMeter correctly", () => {
    render(<AvailabilityMeter status="available" count={45} />);
    // status + count span is split across text nodes; match via textContent
    const badge = screen.getByText(
      (_, el) => el?.textContent?.replace(/\s+/g, " ").trim() === "available (45)"
    );
    expect(badge).toBeInTheDocument();
  });

  it("should render CoachLegend correctly", () => {
    render(<CoachLegend coaches={[{ code: "B1", type: "3AC" }]} />);
    expect(screen.getByText("B1")).toBeInTheDocument();
    expect(screen.getByText("3AC")).toBeInTheDocument();
  });

  it("should render SeatLegend correctly", () => {
    render(<SeatLegend items={[{ label: "Available", colorClass: "bg-green-500" }]} />);
    expect(screen.getByText("Available")).toBeInTheDocument();
  });

  it("should have no accessibility violations on AvailabilityMeter", async () => {
    const { container } = render(<AvailabilityMeter status="available" count={45} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
