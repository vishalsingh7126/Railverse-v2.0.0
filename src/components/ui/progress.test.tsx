import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Progress } from "./progress";

describe("Progress Component", () => {
  it("should render successfully in linear mode with correct aria properties", () => {
    render(<Progress value={45} variant="linear" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute("aria-valuenow", "45");
  });

  it("should render successfully in circular mode", () => {
    render(<Progress value={80} variant="circular" />);
    const progress = screen.getByRole("progressbar");
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute("aria-valuenow", "80");
  });

  it("should handle indeterminate state by omitting aria-valuenow", () => {
    render(<Progress value={null} />);
    const progress = screen.getByRole("progressbar");
    expect(progress).not.toHaveAttribute("aria-valuenow");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <div>
        <label id="prog-label">Sync progress</label>
        <Progress aria-labelledby="prog-label" value={60} />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
