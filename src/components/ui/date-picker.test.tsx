import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { DatePicker } from "./date-picker";

describe("DatePicker Component", () => {
  it("should render successfully with placeholder", () => {
    render(<DatePicker placeholder="Choose date" />);
    expect(screen.getByText("Choose date")).toBeInTheDocument();
  });

  it("should format single date value correctly", () => {
    const testDate = new Date("2026-07-15");
    render(<DatePicker value={testDate} mode="single" />);
    expect(screen.getByText("July 15th, 2026")).toBeInTheDocument();
  });

  it("should format range date values correctly", () => {
    const fromDate = new Date("2026-07-15");
    const toDate = new Date("2026-07-20");
    render(<DatePicker value={{ from: fromDate, to: toDate }} mode="range" />);
    expect(screen.getByText("Jul 15, 2026 - Jul 20, 2026")).toBeInTheDocument();
  });

  it("should disable trigger when disabled is true", () => {
    render(<DatePicker disabled placeholder="Choose date" />);
    const trigger = screen.getByRole("button");
    expect(trigger).toBeDisabled();
  });

  it("should have no accessibility violations on render", async () => {
    const { container } = render(
      <div>
        <label id="date-label">Departure Date</label>
        <DatePicker aria-labelledby="date-label" placeholder="Choose date" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
