import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { ScrollArea } from "./scroll-area";

describe("ScrollArea Component", () => {
  it("should render content successfully", () => {
    render(
      <ScrollArea className="h-40 w-40">
        <div>Scroll Content</div>
      </ScrollArea>
    );
    expect(screen.getByText("Scroll Content")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <ScrollArea className="h-40 w-40">
        <div>Scroll Content</div>
      </ScrollArea>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
