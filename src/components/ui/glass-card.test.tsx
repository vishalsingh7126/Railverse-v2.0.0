import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { GlassCard } from "./glass-card";
import { CardContent } from "./card";

describe("GlassCard Component", () => {
  it("should render successfully with custom content", () => {
    render(
      <GlassCard>
        <CardContent>Glass card content</CardContent>
      </GlassCard>
    );

    expect(screen.getByText("Glass card content")).toBeInTheDocument();
  });

  it("should apply glassmorphism styling classes", () => {
    render(
      <GlassCard data-testid="glass-card">
        <CardContent>Content</CardContent>
      </GlassCard>
    );

    const card = screen.getByTestId("glass-card");
    expect(card).toHaveClass("backdrop-blur-md");
    expect(card).toHaveClass("bg-background/60");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <GlassCard>
        <CardContent>Accessible Content</CardContent>
      </GlassCard>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
