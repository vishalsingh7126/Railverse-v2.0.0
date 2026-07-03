import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Spinner } from "./spinner";

describe("Spinner Component", () => {
  it("should render successfully with a status role", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should output correct size and variant classes", () => {
    const { rerender } = render(<Spinner size="xs" variant="brand" />);
    let spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("h-3 w-3");
    expect(spinner).toHaveClass("text-primary");

    rerender(<Spinner size="lg" variant="default" />);
    spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("h-8 w-8");
    expect(spinner).toHaveClass("text-muted-foreground");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Spinner variant="brand" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
