import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { SplitView } from "./split-view";

describe("SplitView Component", () => {
  it("should render successfully", () => {
    render(<SplitView left={<div>Left Component</div>} right={<div>Right Component</div>} />);
    expect(screen.getByText("Left Component")).toBeInTheDocument();
    expect(screen.getByText("Right Component")).toBeInTheDocument();
  });

  it("should apply grid template and gap classes", () => {
    const { container } = render(
      <SplitView ratio="2:1" gap="lg" left={<div>Left</div>} right={<div>Right</div>} />
    );
    expect(container.firstChild).toHaveClass("lg:grid-cols-[2fr_1fr]");
    expect(container.firstChild).toHaveClass("gap-8");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<SplitView left={<div>Left</div>} right={<div>Right</div>} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
