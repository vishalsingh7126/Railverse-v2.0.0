import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { RadioGroup } from "./radio-group";

describe("RadioGroup Component", () => {
  const options = [
    { value: "yes", label: "Yes option", description: "Choice description text" },
    { value: "no", label: "No option" },
  ];

  it("should render successfully with labels and descriptions", () => {
    render(<RadioGroup options={options} name="test-group" />);
    expect(screen.getByText("Yes option")).toBeInTheDocument();
    expect(screen.getByText("Choice description text")).toBeInTheDocument();
    expect(screen.getByText("No option")).toBeInTheDocument();
  });

  it("should change value when options are clicked", async () => {
    const handleChange = vi.fn();
    render(<RadioGroup options={options} onValueChange={handleChange} name="test-click" />);

    const secondOption = screen.getByRole("radio", { name: "No option" });
    await userEvent.click(secondOption);

    expect(handleChange).toHaveBeenCalledWith("no");
  });

  it("should handle controlled values properly", () => {
    render(<RadioGroup options={options} value="yes" name="test-controlled" />);
    expect(screen.getByRole("radio", { name: "Yes option" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "No option" })).not.toBeChecked();
  });

  it("should block inputs when disabled is set to true", async () => {
    const handleChange = vi.fn();
    render(
      <RadioGroup options={options} disabled onValueChange={handleChange} name="test-disabled" />
    );

    const firstRadio = screen.getByRole("radio", { name: "Yes option" });
    expect(firstRadio).toBeDisabled();

    await userEvent.click(firstRadio).catch(() => {});
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("should support arrow key keyboard navigation", async () => {
    render(<RadioGroup options={options} defaultValue="yes" name="test-keys" />);
    const firstRadio = screen.getByRole("radio", { name: "Yes option" });
    const secondRadio = screen.getByRole("radio", { name: "No option" });

    firstRadio.focus();
    expect(firstRadio).toHaveFocus();

    fireEvent.keyDown(firstRadio, { key: "ArrowDown", code: "ArrowDown" });
    await waitFor(() => {
      expect(secondRadio).toBeChecked();
      expect(secondRadio).toHaveFocus();
    });
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<RadioGroup options={options} name="test-a11y" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
