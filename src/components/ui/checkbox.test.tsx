import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { Checkbox } from "./checkbox";

describe("Checkbox Component", () => {
  it("should render successfully with label and helper text", () => {
    render(<Checkbox label="Travel Insurance" helperText="Secure your trip for Rs 35" />);
    expect(screen.getByText("Travel Insurance")).toBeInTheDocument();
    expect(screen.getByText("Secure your trip for Rs 35")).toBeInTheDocument();
  });

  it("should change checked state when clicked", async () => {
    render(<Checkbox label="Opt-in" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("should handle controlled state correctly", async () => {
    const handleCheckedChange = vi.fn();
    render(<Checkbox label="Opt-in" checked={true} onCheckedChange={handleCheckedChange} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(handleCheckedChange).toHaveBeenCalledWith(false);
    expect(checkbox).toBeChecked(); // Stays checked because controlled checked={true} is static
  });

  it("should block changes and remain unchecked when disabled is true", async () => {
    render(<Checkbox label="Locked" disabled />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();

    await userEvent.click(checkbox).catch(() => {});
    expect(checkbox).not.toBeChecked();
  });

  it("should support keyboard Spacebar toggling", async () => {
    render(<Checkbox label="Keys" />);
    const checkbox = screen.getByRole("checkbox");
    checkbox.focus();
    expect(checkbox).toHaveFocus();

    await userEvent.keyboard(" ");
    expect(checkbox).toBeChecked();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Checkbox label="Accessible Box" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
