import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { Switch } from "./switch";

describe("Switch Component", () => {
  it("should render successfully with label and description", () => {
    render(<Switch label="SMS Alerts" description="Send PNR updates" />);
    expect(screen.getByText("SMS Alerts")).toBeInTheDocument();
    expect(screen.getByText("Send PNR updates")).toBeInTheDocument();
  });

  it("should toggle value state on click", async () => {
    render(<Switch label="Toggle" />);
    const switchControl = screen.getByRole("switch");
    expect(switchControl).not.toBeChecked();

    await userEvent.click(switchControl);
    expect(switchControl).toBeChecked();
  });

  it("should block inputs when disabled is true", async () => {
    render(<Switch label="Locked" disabled />);
    const switchControl = screen.getByRole("switch");
    expect(switchControl).toBeDisabled();

    await userEvent.click(switchControl).catch(() => {});
    expect(switchControl).not.toBeChecked();
  });

  it("should support keyboard navigation Spacebar triggers", async () => {
    render(<Switch label="Keyboard" />);
    const switchControl = screen.getByRole("switch");
    switchControl.focus();
    expect(switchControl).toHaveFocus();

    await userEvent.keyboard(" ");
    expect(switchControl).toBeChecked();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Switch label="Accessible Switch" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
