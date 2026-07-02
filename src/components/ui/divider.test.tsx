import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Divider } from "./divider";

describe("Divider Component", () => {
  it("should render horizontal separator by default", () => {
    render(<Divider data-testid="divider" />);
    const separator = screen.getByTestId("divider");
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("role", "separator");
    expect(separator).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("should render vertical orientation separator classes", () => {
    render(<Divider orientation="vertical" data-testid="divider" />);
    const separator = screen.getByTestId("divider");
    expect(separator).toHaveAttribute("aria-orientation", "vertical");
    expect(separator).toHaveClass("w-[1px]");
  });

  it("should render divider with text label in horizontal mode", () => {
    render(<Divider label="Section Break" />);
    expect(screen.getByText("Section Break")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Divider label="Section Break" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
