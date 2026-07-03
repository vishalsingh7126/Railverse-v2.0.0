import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { JourneyCard } from "./journey-card";
import { JourneyHero } from "./journey-hero";
import { JourneySummary } from "./journey-summary";
import { JourneyProgress } from "./journey-progress";
import { JourneyTimeline } from "./journey-timeline";

describe("Journey Domain Components", () => {
  it("should render JourneyCard correctly", () => {
    render(<JourneyCard source="NDLS" destination="MMCT" date="04 Jul" duration="16h" />);
    expect(screen.getByText("NDLS")).toBeInTheDocument();
    expect(screen.getByText("MMCT")).toBeInTheDocument();
    expect(screen.getByText("04 Jul")).toBeInTheDocument();
  });

  it("should render JourneyHero correctly", () => {
    render(<JourneyHero currentStatus="Approaching Kota" trainInfo={<span>Rajdhani</span>} />);
    expect(screen.getByText("Approaching Kota")).toBeInTheDocument();
    expect(screen.getByText("Rajdhani")).toBeInTheDocument();
  });

  it("should render JourneySummary correctly", () => {
    render(<JourneySummary items={[{ label: "Stops", value: "5 Stops" }]} />);
    // CSS text-transform uppercase; DOM text is original casing
    expect(screen.getByText("Stops")).toBeInTheDocument();
    expect(screen.getByText("5 Stops")).toBeInTheDocument();
  });

  it("should render JourneyProgress correctly", () => {
    render(<JourneyProgress percentage={40} currentStation="Kota" />);
    expect(screen.getByText("Kota")).toBeInTheDocument();
    expect(screen.getByText("40% Complete")).toBeInTheDocument();
  });

  it("should render JourneyTimeline correctly", () => {
    render(<JourneyTimeline stops={[{ name: "Kota Jn", time: "22:00", status: "completed" }]} />);
    expect(screen.getByText("Kota Jn")).toBeInTheDocument();
    expect(screen.getByText("22:00")).toBeInTheDocument();
  });

  it("should have no accessibility violations on JourneyCard", async () => {
    const { container } = render(<JourneyCard source="NDLS" destination="MMCT" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
