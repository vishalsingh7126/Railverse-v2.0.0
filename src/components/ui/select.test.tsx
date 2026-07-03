import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Select } from "./select";

describe("Select Component", () => {
  const options = [
    { value: "gn", label: "General Quota" },
    { value: "tq", label: "Tatkal Quota" },
  ];

  it("should render successfully with placeholder", () => {
    render(<Select options={options} placeholder="Select quota" />);
    expect(screen.getByText("Select quota")).toBeInTheDocument();
  });

  it("should handle controlled defaultValue state", () => {
    render(<Select options={options} defaultValue="gn" placeholder="Select quota" />);
    expect(screen.getByText("General Quota")).toBeInTheDocument();
  });

  it("should disable trigger when disabled is true", () => {
    render(<Select options={options} disabled placeholder="Select quota" />);
    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeDisabled();
  });

  it("should disable trigger when loading is true", () => {
    render(<Select options={options} loading placeholder="Select quota" />);
    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeDisabled();
    expect(trigger.querySelector(".animate-spin")).toBeInTheDocument();
  });

  it("should have no accessibility violations on render", async () => {
    const { container } = render(
      <div>
        <label id="select-label">Select Quota</label>
        <Select options={options} aria-labelledby="select-label" placeholder="Select quota" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
