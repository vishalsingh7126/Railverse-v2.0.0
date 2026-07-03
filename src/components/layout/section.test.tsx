import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Section } from "./section";

describe("Section Component", () => {
  it("should render children correctly", () => {
    render(<Section>Section Content</Section>);
    expect(screen.getByText("Section Content")).toBeInTheDocument();
  });

  it("should apply divider borders", () => {
    const { container } = render(<Section divider>Content</Section>);
    expect(container.firstChild).toHaveClass("border-b");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Section>Content</Section>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
