import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { StickyRegion } from "./sticky-region";

describe("StickyRegion Component", () => {
  it("should render successfully", () => {
    render(<StickyRegion>Sticky Element</StickyRegion>);
    expect(screen.getByText("Sticky Element")).toBeInTheDocument();
  });

  it("should apply inline style properties", () => {
    const { container } = render(
      <StickyRegion position="bottom" offset={10} zIndex={45}>
        Content
      </StickyRegion>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.position).toBe("sticky");
    expect(element.style.bottom).toBe("10px");
    expect(element.style.zIndex).toBe("45");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<StickyRegion>Content</StickyRegion>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
