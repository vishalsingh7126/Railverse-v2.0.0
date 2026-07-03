import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Tabs } from "./tabs";

describe("Tabs Component", () => {
  const items = [
    { value: "tab1", label: "Tab 1", content: <div>Tab 1 Content</div> },
    { value: "tab2", label: "Tab 2", content: <div>Tab 2 Content</div> },
  ];

  it("should render successfully", () => {
    render(<Tabs items={items} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Tabs items={items} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
