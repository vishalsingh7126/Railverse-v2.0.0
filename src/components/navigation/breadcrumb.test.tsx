import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Breadcrumb } from "./breadcrumb";

describe("Breadcrumb Component", () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "Trains", href: "#" },
    { label: "Details" },
  ];

  it("should render successfully", () => {
    render(<Breadcrumb items={items} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Trains")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Breadcrumb items={items} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
