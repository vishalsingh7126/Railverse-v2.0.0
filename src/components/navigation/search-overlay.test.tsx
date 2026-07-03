import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { SearchOverlay } from "./search-overlay";

describe("SearchOverlay Component", () => {
  it("should render successfully when open", () => {
    render(
      <SearchOverlay
        isOpen={true}
        onOpenChange={() => {}}
        inputSlot={<div>Search Input</div>}
        resultsSlot={<div>Result List</div>}
      />
    );
    expect(screen.getByText("Search Input")).toBeInTheDocument();
    expect(screen.getByText("Result List")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <SearchOverlay isOpen={true} onOpenChange={() => {}} inputSlot={<div>Search Input</div>} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
