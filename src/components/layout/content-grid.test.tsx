import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { ContentGrid } from "./content-grid";

describe("ContentGrid Component", () => {
  it("should render successfully", () => {
    render(
      <ContentGrid cols={2}>
        <div>Left</div>
        <div>Right</div>
      </ContentGrid>
    );
    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  it("should apply column class names", () => {
    const { container } = render(
      <ContentGrid cols={4}>
        <div>Item</div>
      </ContentGrid>
    );
    expect(container.firstChild).toHaveClass("grid-cols-1");
    expect(container.firstChild).toHaveClass("sm:grid-cols-2");
    expect(container.firstChild).toHaveClass("lg:grid-cols-4");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <ContentGrid cols={3}>
        <div>Item</div>
      </ContentGrid>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
