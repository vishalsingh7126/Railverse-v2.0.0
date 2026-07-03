import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { StationBadge } from "./station-badge";
import { PlatformBadge } from "./platform-badge";
import { StationInfoRow } from "./station-info-row";
import { StationMeta } from "./station-meta";
import { StationCard } from "./station-card";
import { StationTimeline } from "./station-timeline";

describe("Station Domain Components", () => {
  it("should render StationBadge correctly", () => {
    render(<StationBadge code="ndls" />);
    expect(screen.getByText("NDLS")).toBeInTheDocument();
  });

  it("should render PlatformBadge correctly", () => {
    render(<PlatformBadge platform={3} />);
    expect(screen.getByText("PF 3")).toBeInTheDocument();
  });

  it("should render StationInfoRow correctly", () => {
    render(<StationInfoRow stationBadge={<StationBadge code="NDLS" />} name="New Delhi" />);
    expect(screen.getByText("NDLS")).toBeInTheDocument();
    expect(screen.getByText("New Delhi")).toBeInTheDocument();
  });

  it("should render StationMeta correctly", () => {
    render(<StationMeta items={[{ label: "Zone", value: "NR" }]} />);
    // CSS text-transform; label+colon may be split text nodes — match with regex
    expect(screen.getByText(/zone/i)).toBeInTheDocument();
    expect(screen.getByText("NR")).toBeInTheDocument();
  });

  it("should render StationTimeline correctly", () => {
    render(
      <StationTimeline
        items={[
          {
            trainNumber: "12952",
            trainName: "Rajdhani",
            time: "16:55",
            platform: "3",
            delayStatus: "onTime",
          },
        ]}
      />
    );
    expect(screen.getByText("12952")).toBeInTheDocument();
    expect(screen.getByText("Rajdhani")).toBeInTheDocument();
  });

  it("should render StationCard correctly", () => {
    render(<StationCard headerSlot={<div>Station Info</div>} metaSlot={<div>Metadata</div>} />);
    expect(screen.getByText("Station Info")).toBeInTheDocument();
    expect(screen.getByText("Metadata")).toBeInTheDocument();
  });

  it("should have no accessibility violations on StationCard", async () => {
    const { container } = render(<StationCard headerSlot={<div>Info</div>} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
