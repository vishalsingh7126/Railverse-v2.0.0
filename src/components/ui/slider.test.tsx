import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { Slider } from "./slider";

describe("Slider Component", () => {
  it("should render successfully with label and helperText", () => {
    render(<Slider label="Budget limit" helperText="Select budget" defaultValue={[30]} />);
    expect(screen.getByText("Budget limit")).toBeInTheDocument();
    expect(screen.getByText("Select budget")).toBeInTheDocument();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("should render two thumbs when value is range", () => {
    render(<Slider defaultValue={[20, 80]} />);
    const thumbs = screen.getAllByRole("slider");
    expect(thumbs).toHaveLength(2);
  });

  it("should block inputs when disabled is true", () => {
    render(<Slider defaultValue={[40]} disabled />);
    const thumb = screen.getByRole("slider");
    expect(thumb).toHaveAttribute("aria-disabled", "true");
  });

  it("should support keyboard navigation arrow keys", async () => {
    render(<Slider defaultValue={[50]} min={0} max={100} step={1} />);
    const thumb = screen.getByRole("slider");
    thumb.focus();
    expect(thumb).toHaveFocus();

    await userEvent.keyboard("{arrowright}");
    expect(thumb).toHaveAttribute("aria-valuenow", "51");
  });

  it("should have no accessibility violations on render", async () => {
    const { container } = render(
      <div>
        <label id="slider-label">Slider Control</label>
        <Slider aria-labelledby="slider-label" defaultValue={[20]} />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
