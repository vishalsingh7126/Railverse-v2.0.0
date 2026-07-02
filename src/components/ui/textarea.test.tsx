import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { Textarea } from "./textarea";

describe("Textarea Component", () => {
  it("should render successfully with placeholder", () => {
    render(<Textarea placeholder="Enter description" />);
    expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
  });

  it("should allow users to type text values", async () => {
    render(<Textarea placeholder="Type feedback" />);
    const textarea = screen.getByPlaceholderText("Type feedback");

    await userEvent.type(textarea, "My feedback about travel");
    expect(textarea).toHaveValue("My feedback about travel");
  });

  it("should render helper text and enforce invalid ARIA role on error", () => {
    render(<Textarea placeholder="Error box" error helperText="Field required" />);

    expect(screen.getByText("Field required")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Error box")).toHaveAttribute("aria-invalid", "true");
  });

  it("should block inputs when disabled is true", () => {
    render(<Textarea placeholder="Locked text" disabled />);
    expect(screen.getByPlaceholderText("Locked text")).toBeDisabled();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-textarea">Bio</label>
        <Textarea id="test-textarea" placeholder="Enter bio" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
