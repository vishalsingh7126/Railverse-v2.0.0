import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Alert } from "./alert";

describe("Alert Component", () => {
  it("should render successfully with title and description", () => {
    render(<Alert title="Delay Alert" description="Train is late by 30 mins" />);
    expect(screen.getByText("Delay Alert")).toBeInTheDocument();
    expect(screen.getByText("Train is late by 30 mins")).toBeInTheDocument();
  });

  it("should output the correct semantic alert ARIA role", () => {
    render(<Alert title="Important message" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("should render variant classes correctly", () => {
    const { rerender } = render(<Alert variant="success" title="Success" />);
    const alertBox = screen.getByRole("alert");
    expect(alertBox).toHaveClass("bg-emerald-500/10");
    expect(alertBox).toHaveClass("text-emerald-800");

    rerender(<Alert variant="error" title="Error" />);
    expect(alertBox).toHaveClass("bg-destructive/10");
    expect(alertBox).toHaveClass("text-destructive");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Alert variant="info" title="System message" description="Updating buffers" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
