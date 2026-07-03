import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { NavigationBar } from "./navigation-bar";

describe("NavigationBar Component", () => {
  const items = [
    { label: "Home", href: "#", active: true },
    { label: "About", href: "#" },
  ];

  it("should render successfully", () => {
    render(<NavigationBar items={items} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<NavigationBar items={items} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
