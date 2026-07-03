import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Skeleton } from "./skeleton";

describe("Skeleton Component", () => {
  it("should render successfully", () => {
    const { container } = render(<Skeleton />);
    const skel = container.firstChild;
    expect(skel).toBeInTheDocument();
  });

  it("should output correct variants", () => {
    const { container, rerender } = render(<Skeleton variant="avatar" />);
    let skel = container.firstChild;
    expect(skel).toHaveClass("h-10 w-10");
    expect(skel).toHaveClass("rounded-full");

    rerender(<Skeleton variant="card" />);
    skel = container.firstChild;
    expect(skel).toHaveClass("h-32");
    expect(skel).toHaveClass("rounded-lg");
  });

  it("should support extra layout styles passed via className", () => {
    const { container } = render(<Skeleton className="w-[120px] h-4" />);
    const skel = container.firstChild;
    expect(skel).toHaveClass("w-[120px]");
    expect(skel).toHaveClass("h-4");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<Skeleton variant="text" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
