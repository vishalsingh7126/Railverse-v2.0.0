import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { JourneySkeleton } from "./journey-skeleton";
import { TrainCardSkeleton } from "./train-card-skeleton";
import { LiveStatusSkeleton } from "./live-status-skeleton";
import { ScheduleSkeleton } from "./schedule-skeleton";
import { SeatAvailabilitySkeleton } from "./seat-availability-skeleton";
import { FareSkeleton } from "./fare-skeleton";

describe("Railway Skeleton Components", () => {
  it("should render JourneySkeleton without crashing", () => {
    const { container } = render(<JourneySkeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render TrainCardSkeleton without crashing", () => {
    const { container } = render(<TrainCardSkeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render LiveStatusSkeleton without crashing", () => {
    const { container } = render(<LiveStatusSkeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render ScheduleSkeleton without crashing", () => {
    const { container } = render(<ScheduleSkeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render SeatAvailabilitySkeleton without crashing", () => {
    const { container } = render(<SeatAvailabilitySkeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render FareSkeleton without crashing", () => {
    const { container } = render(<FareSkeleton />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should have no accessibility violations on JourneySkeleton", async () => {
    const { container } = render(<JourneySkeleton />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
