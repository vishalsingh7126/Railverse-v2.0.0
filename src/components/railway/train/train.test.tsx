import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { TrainNumberBadge } from "./train-number-badge";
import { TrainTypeBadge } from "./train-type-badge";
import { TrainStatusBadge } from "./train-status-badge";
import { TrainMeta } from "./train-meta";
import { TrainStatCard } from "./train-stat-card";
import { TrainInfoRow } from "./train-info-row";
import { TrainCard } from "./train-card";
import { TrainHero } from "./train-hero";

describe("Train Domain Components", () => {
  it("should render TrainNumberBadge correctly", () => {
    render(<TrainNumberBadge number="12002" />);
    expect(screen.getByText("12002")).toBeInTheDocument();
  });

  it("should render TrainTypeBadge correctly", () => {
    render(<TrainTypeBadge type="rajdhani" />);
    expect(screen.getByText("Rajdhani Express")).toBeInTheDocument();
  });

  it("should render TrainStatusBadge correctly", () => {
    render(<TrainStatusBadge status="onTime" />);
    expect(screen.getByText("On Time")).toBeInTheDocument();
  });

  it("should render TrainMeta correctly", () => {
    render(<TrainMeta items={[{ label: "Runs", value: "Daily" }]} />);
    // CSS text-transform: DOM text is the original casing; label+colon may be split nodes
    expect(screen.getByText(/runs/i)).toBeInTheDocument();
    expect(screen.getByText("Daily")).toBeInTheDocument();
  });

  it("should render TrainStatCard correctly", () => {
    render(<TrainStatCard title="Punctual" value="98%" />);
    // CSS text-transform uppercase: DOM text is original casing
    expect(screen.getByText("Punctual")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
  });

  it("should render TrainInfoRow correctly", () => {
    render(
      <TrainInfoRow numberBadge={<TrainNumberBadge number="12002" />} name="Bhopal Shatabdi" />
    );
    expect(screen.getByText("12002")).toBeInTheDocument();
    expect(screen.getByText("Bhopal Shatabdi")).toBeInTheDocument();
  });

  it("should render TrainCard correctly", () => {
    render(<TrainCard headerSlot={<div>Train Info</div>} routeSlot={<div>Route</div>} />);
    expect(screen.getByText("Train Info")).toBeInTheDocument();
    expect(screen.getByText("Route")).toBeInTheDocument();
  });

  it("should render TrainHero correctly", () => {
    render(<TrainHero name="Rajdhani" routeSummary="NDLS-MMCT" />);
    expect(screen.getByText("Rajdhani")).toBeInTheDocument();
    expect(screen.getByText("NDLS-MMCT")).toBeInTheDocument();
  });

  it("should have no accessibility violations on TrainCard", async () => {
    const { container } = render(<TrainCard headerSlot={<div>Info</div>} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
