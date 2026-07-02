import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Search } from "lucide-react";
import { axe } from "jest-axe";
import { IconButton } from "./icon-button";

describe("IconButton Component", () => {
  it("should render and enforce the presence of the aria-label attribute", () => {
    render(<IconButton icon={<Search data-testid="search-icon" />} aria-label="Search" />);

    const button = screen.getByRole("button", { name: "Search" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "Search");
  });

  it("should render the visual icon child element", () => {
    render(<IconButton icon={<Search data-testid="search-icon" />} aria-label="Search" />);

    const icon = screen.getByTestId("search-icon");
    expect(icon).toBeInTheDocument();
  });

  it("should not display the icon element when loading is true", () => {
    render(<IconButton icon={<Search data-testid="search-icon" />} aria-label="Search" loading />);

    const icon = screen.queryByTestId("search-icon");
    expect(icon).not.toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button.querySelector("svg[aria-hidden='true']")).toBeInTheDocument(); // Loading spinner
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<IconButton icon={<Search />} aria-label="Search trains" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
