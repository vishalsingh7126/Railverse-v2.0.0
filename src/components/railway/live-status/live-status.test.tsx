import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { DelayIndicator } from "./delay-indicator";
import { LiveStatusIndicator } from "./live-status-indicator";
import { ETAChip } from "./eta-chip";
import { SpeedChip } from "./speed-chip";
import { CurrentLocationCard } from "./current-location-card";
import { JourneyHealthIndicator } from "./journey-health-indicator";

describe("Live Status Domain Components", () => {
  it("should render DelayIndicator correctly", () => {
    render(<DelayIndicator delayMinutes={15} />);
    expect(screen.getByText("Delayed 15m")).toBeInTheDocument();
  });

  it("should render LiveStatusIndicator correctly", () => {
    render(<LiveStatusIndicator isActive={true} />);
    // CSS text-transform uppercase; DOM text is original casing
    expect(screen.getByText("Live")).toBeInTheDocument();
  });

  it("should render ETAChip correctly", () => {
    render(<ETAChip scheduledTime="08:00" actualTime="08:20" isDelayed={true} />);
    expect(screen.getByText("08:20")).toBeInTheDocument();
    expect(screen.getByText("08:00")).toBeInTheDocument();
  });

  it("should render SpeedChip correctly", () => {
    render(<SpeedChip speed={110} />);
    expect(screen.getByText("110 km/h")).toBeInTheDocument();
  });

  it("should render CurrentLocationCard correctly", () => {
    render(
      <CurrentLocationCard
        currentLocation="Ratlam Jn"
        previousStation="Kota Jn"
        nextStation="Vadodara Jn"
      />
    );
    expect(screen.getByText("Ratlam Jn")).toBeInTheDocument();
    expect(screen.getByText("Kota Jn")).toBeInTheDocument();
    expect(screen.getByText("Vadodara Jn")).toBeInTheDocument();
  });

  it("should render JourneyHealthIndicator correctly", () => {
    render(<JourneyHealthIndicator score={80} />);
    expect(screen.getByText("80/100")).toBeInTheDocument();
  });

  it("should have no accessibility violations on CurrentLocationCard", async () => {
    const { container } = render(<CurrentLocationCard currentLocation="New Delhi" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
