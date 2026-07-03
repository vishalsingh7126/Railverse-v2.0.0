import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { Combobox } from "./combobox";

describe("Combobox Component", () => {
  const options = [
    { value: "delhi", label: "New Delhi" },
    { value: "mumbai", label: "Mumbai" },
  ];

  it("should render successfully with placeholder", () => {
    render(<Combobox options={options} placeholder="Select city" />);
    expect(screen.getByText("Select city")).toBeInTheDocument();
  });

  it("should open the search input when clicked", async () => {
    render(<Combobox options={options} placeholder="Select city" searchPlaceholder="Type city" />);
    const trigger = screen.getByRole("button");

    await userEvent.click(trigger);
    expect(screen.getByPlaceholderText("Type city")).toBeInTheDocument();
  });

  it("should filter options locally based on search input value", async () => {
    render(<Combobox options={options} placeholder="Select city" searchPlaceholder="Type city" />);
    const trigger = screen.getByRole("button");

    await userEvent.click(trigger);
    const searchInput = screen.getByPlaceholderText("Type city");

    await userEvent.type(searchInput, "Delhi");

    expect(screen.getByText("New Delhi")).toBeInTheDocument();
    expect(screen.queryByText("Mumbai")).not.toBeInTheDocument();
  });

  it("should fire onChange when an option item is clicked", async () => {
    const handleChange = vi.fn();
    render(<Combobox options={options} onChange={handleChange} placeholder="Select city" />);

    const trigger = screen.getByRole("button");
    await userEvent.click(trigger);

    const option = screen.getByText("New Delhi");
    await userEvent.click(option);

    expect(handleChange).toHaveBeenCalledWith("delhi");
  });

  it("should support keyboard navigation", async () => {
    const handleChange = vi.fn();
    render(<Combobox options={options} onChange={handleChange} placeholder="Select city" />);

    const trigger = screen.getByRole("button");
    await userEvent.click(trigger);

    // Delhi is index 0. ArrowDown stays or moves to index 1 (Mumbai)
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{enter}");

    expect(handleChange).toHaveBeenCalledWith("mumbai");
  });

  it("should have no accessibility violations on render", async () => {
    const { container } = render(<Combobox options={options} placeholder="Select city" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
