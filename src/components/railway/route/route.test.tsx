import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { RouteChip } from "./route-chip";
import { DistanceIndicator } from "./distance-indicator";
import { HaltIndicator } from "./halt-indicator";
import { ScheduleRow } from "./schedule-row";
import { RouteTimeline } from "./route-timeline";

describe("Route Domain Components", () => {
  it("should render RouteChip correctly", () => {
    render(<RouteChip from="NDLS" to="MMCT" />);
    expect(screen.getByText("NDLS")).toBeInTheDocument();
    expect(screen.getByText("MMCT")).toBeInTheDocument();
  });

  it("should render DistanceIndicator correctly", () => {
    render(<DistanceIndicator distanceKm={1386} />);
    expect(screen.getByText("1386 km")).toBeInTheDocument();
  });

  it("should render HaltIndicator correctly", () => {
    render(<HaltIndicator minutes={10} />);
    expect(screen.getByText("Halt: 10m")).toBeInTheDocument();
  });

  it("should render ScheduleRow correctly", () => {
    render(
      <ScheduleRow
        stationCode="KOTA"
        stationName="Kota Jn"
        arrivalTime="22:10"
        departureTime="22:20"
      />
    );
    expect(screen.getByText("KOTA")).toBeInTheDocument();
    expect(screen.getByText("Kota Jn")).toBeInTheDocument();
    expect(screen.getByText("22:10 / 22:20")).toBeInTheDocument();
  });

  it("should render RouteTimeline correctly", () => {
    render(
      <RouteTimeline
        stops={[
          {
            stationCode: "KOTA",
            stationName: "Kota",
            arrivalTime: "22:10",
            departureTime: "22:20",
            distanceKm: 465,
          },
        ]}
      />
    );
    expect(screen.getByText("KOTA")).toBeInTheDocument();
    expect(screen.getByText("Kota")).toBeInTheDocument();
  });

  it("should have no accessibility violations on RouteChip", async () => {
    const { container } = render(<RouteChip from="NDLS" to="MMCT" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
