import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { ThemeToggle } from "./theme-toggle";
import { ThemeProvider } from "next-themes";

describe("ThemeToggle Component", () => {
  it("should render successfully", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(screen.getByRole("button", { name: "Toggle theme" })).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
