import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { Search } from "lucide-react";
import { axe } from "jest-axe";
import { Input } from "./input";

describe("Input Component", () => {
  it("should render successfully with placeholder", () => {
    render(<Input placeholder="Enter username" />);
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("should allow user to type in values", async () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");

    await userEvent.type(input, "Railverse");
    expect(input).toHaveValue("Railverse");
  });

  it("should be disabled when disabled parameter is true", () => {
    render(<Input placeholder="Locked" disabled />);
    expect(screen.getByPlaceholderText("Locked")).toBeDisabled();
  });

  it("should render helperText and apply error classes when in error state", () => {
    render(<Input placeholder="Validation" error helperText="Invalid format" />);

    expect(screen.getByText("Invalid format")).toBeInTheDocument();
    expect(screen.getByText("Invalid format")).toHaveClass("text-destructive");
  });

  it("should render prefix, suffix, and icon elements successfully", () => {
    render(
      <Input
        placeholder="Search"
        prefix="HTTP://"
        suffix=".in"
        startIcon={<Search data-testid="search-icon" />}
      />
    );

    expect(screen.getByText("HTTP://")).toBeInTheDocument();
    expect(screen.getByText(".in")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <div>
        <label htmlFor="test-input">Username</label>
        <Input id="test-input" placeholder="Enter username" />
      </div>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
