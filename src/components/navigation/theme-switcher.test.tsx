import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { ThemeSwitcher } from "./theme-switcher";
import { ThemeProvider } from "next-themes";

describe("ThemeSwitcher Component", () => {
  it("should render successfully", () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
