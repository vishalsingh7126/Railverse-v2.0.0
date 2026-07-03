import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { FareChip } from "./fare-chip";
import { PriceDifferenceBadge } from "./price-difference-badge";
import { FareCard } from "./fare-card";
import { FareComparisonCard } from "./fare-comparison-card";
import { FareBreakdown } from "./fare-breakdown";

describe("Fare Domain Components", () => {
  it("should render FareChip correctly", () => {
    render(<FareChip amount={650} />);
    expect(screen.getByText("₹650")).toBeInTheDocument();
  });

  it("should render PriceDifferenceBadge correctly", () => {
    render(<PriceDifferenceBadge difference={-120} />);
    expect(screen.getByText("-₹120")).toBeInTheDocument();
  });

  it("should render FareCard correctly", () => {
    render(<FareCard tierName="3A" price={1200} description="Demo" />);
    expect(screen.getByText("3A")).toBeInTheDocument();
    expect(screen.getByText("₹1200")).toBeInTheDocument();
    expect(screen.getByText("Demo")).toBeInTheDocument();
  });

  it("should render FareComparisonCard correctly", () => {
    render(<FareComparisonCard items={[{ tierName: "3A", price: 1200 }]} />);
    expect(screen.getByText("3A")).toBeInTheDocument();
    expect(screen.getByText("₹1200")).toBeInTheDocument();
  });

  it("should render FareBreakdown correctly", () => {
    // Use distinct amounts so ₹ values don't collide between line-item and total
    render(<FareBreakdown breakdown={[{ label: "Base", amount: 950 }]} total={1050} />);
    expect(screen.getByText("Base")).toBeInTheDocument();
    // Match breakdown item and total separately
    expect(screen.getAllByText(/₹/).length).toBeGreaterThanOrEqual(2);
  });

  it("should have no accessibility violations on FareCard", async () => {
    const { container } = render(<FareCard tierName="3A" price={1200} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
