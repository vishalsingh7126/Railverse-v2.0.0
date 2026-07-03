import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { PageContainer } from "./page-container";

describe("PageContainer Component", () => {
  it("should render children correctly", () => {
    render(<PageContainer>Page Content</PageContainer>);
    expect(screen.getByText("Page Content")).toBeInTheDocument();
  });

  it("should apply size class names", () => {
    const { container } = render(<PageContainer size="sm">Content</PageContainer>);
    expect(container.firstChild).toHaveClass("max-w-3xl");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<PageContainer>Content</PageContainer>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
