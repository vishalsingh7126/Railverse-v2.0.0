import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { OTPInput } from "./otp-input";

describe("OTPInput Component", () => {
  it("should render successfully with correct length of input elements", () => {
    render(<OTPInput length={4} autoFocus={false} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(4);
  });

  it("should automatically focus the first input cell on mount by default", () => {
    render(<OTPInput length={4} autoFocus={true} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveFocus();
  });

  it("should auto-advance focus as the user types valid digits", async () => {
    const handleChange = vi.fn();
    render(<OTPInput length={3} onChange={handleChange} autoFocus={true} />);

    const inputs = screen.getAllByRole("textbox");

    await userEvent.type(inputs[0], "1");
    expect(inputs[1]).toHaveFocus();
    expect(handleChange).toHaveBeenCalledWith("1");

    await userEvent.type(inputs[1], "2");
    expect(inputs[2]).toHaveFocus();
    expect(handleChange).toHaveBeenCalledWith("12");
  });

  it("should block non-numeric characters in numeric mode", async () => {
    render(<OTPInput length={3} type="numeric" autoFocus={true} />);
    const inputs = screen.getAllByRole("textbox");

    await userEvent.type(inputs[0], "a");
    expect(inputs[0]).toHaveValue("");
    expect(inputs[0]).toHaveFocus();
  });

  it("should return focus to previous input when backspace is pressed on empty cell", async () => {
    render(<OTPInput length={3} defaultValue="12" autoFocus={false} />);
    const inputs = screen.getAllByRole("textbox");

    // Focus the second input and press Backspace (deletes '2', focus stays)
    inputs[1].focus();
    await userEvent.keyboard("{backspace}");
    expect(inputs[1]).toHaveValue("");
    expect(inputs[1]).toHaveFocus();

    // Press Backspace again on empty cell (focus shifts to inputs[0] and deletes '1')
    await userEvent.keyboard("{backspace}");
    expect(inputs[0]).toHaveValue("");
    expect(inputs[0]).toHaveFocus();
  });

  it("should have no accessibility violations on render", async () => {
    const { container } = render(<OTPInput length={4} autoFocus={false} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
