import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Button } from "./button";

describe("Button Component", () => {
  it("should render the button text content", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("should execute click handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole("button", { name: "Click me" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled and not execute click handlers when disabled parameter is true", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>
    );

    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeDisabled();

    await userEvent.click(button).catch(() => {});
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should display a loading spinner and disable the button when loading parameter is true", async () => {
    const handleClick = vi.fn();
    render(
      <Button loading onClick={handleClick}>
        Click me
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button.querySelector("svg")).toBeInTheDocument();

    await userEvent.click(button).catch(() => {});
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should support polymorphic rendering via asChild", () => {
    render(
      <Button asChild>
        <a href="https://railverse.in">Link Button</a>
      </Button>
    );
    const link = screen.getByRole("link", { name: "Link Button" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://railverse.in");
    expect(link).toHaveClass("inline-flex");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Button>Accessible Action</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
