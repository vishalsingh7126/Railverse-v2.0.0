import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Cluster } from "./cluster";

describe("Cluster Component", () => {
  it("should render successfully", () => {
    render(
      <Cluster>
        <div>Left</div>
        <div>Right</div>
      </Cluster>
    );
    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  it("should apply justify and wrap classes", () => {
    const { container } = render(
      <Cluster justify="between" wrap={false}>
        <div>Item</div>
      </Cluster>
    );
    expect(container.firstChild).toHaveClass("justify-between");
    expect(container.firstChild).toHaveClass("flex-nowrap");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Cluster>
        <div>Item</div>
      </Cluster>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
