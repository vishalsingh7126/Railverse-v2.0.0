import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { MobileNavigation } from "./mobile-navigation";
import { Train } from "lucide-react";

describe("MobileNavigation Component", () => {
  const items = [{ label: "Dashboard", href: "#", icon: <Train />, active: true }];

  it("should render successfully", () => {
    render(<MobileNavigation items={items} />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<MobileNavigation items={items} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
