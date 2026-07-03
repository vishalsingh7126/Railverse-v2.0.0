import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Sidebar } from "./sidebar";
import { Train } from "lucide-react";

describe("Sidebar Component", () => {
  const groups = [
    {
      title: "Services",
      items: [{ label: "Trains", href: "#", icon: <Train data-testid="train-icon" /> }],
    },
  ];

  it("should render successfully", () => {
    render(<Sidebar groups={groups} />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Trains")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Sidebar groups={groups} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
