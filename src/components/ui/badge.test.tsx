import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Badge } from "./badge";

describe("Badge Component", () => {
  it("should render successfully with content", () => {
    render(<Badge>AC 3 Tier</Badge>);
    expect(screen.getByText("AC 3 Tier")).toBeInTheDocument();
  });

  it("should apply default variant classes", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toHaveClass("bg-primary");
    expect(badge).toHaveClass("text-primary-foreground");
  });

  it("should apply status variant classes correctly", () => {
    const { rerender } = render(<Badge variant="success">Confirmed</Badge>);
    expect(screen.getByText("Confirmed")).toHaveClass("bg-emerald-500/10");
    expect(screen.getByText("Confirmed")).toHaveClass("text-emerald-700");

    rerender(<Badge variant="danger">Waitlist</Badge>);
    expect(screen.getByText("Waitlist")).toHaveClass("bg-destructive/10");
    expect(screen.getByText("Waitlist")).toHaveClass("text-destructive");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Badge>Confirmed</Badge>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
