import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Stack } from "./stack";

describe("Stack Component", () => {
  it("should render successfully", () => {
    render(
      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("should apply alignment class names", () => {
    const { container } = render(
      <Stack align="center" gap="lg">
        <div>Item</div>
      </Stack>
    );
    expect(container.firstChild).toHaveClass("items-center");
    expect(container.firstChild).toHaveClass("gap-6");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Stack>
        <div>Item</div>
      </Stack>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
