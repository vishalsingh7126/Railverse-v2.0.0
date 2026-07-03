import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { ErrorState } from "./error-state";

describe("ErrorState Component", () => {
  it("should render successfully with default title", () => {
    render(<ErrorState />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("should render successfully with custom title and description", () => {
    render(<ErrorState title="System down" description="Offline status" />);
    expect(screen.getByText("System down")).toBeInTheDocument();
    expect(screen.getByText("Offline status")).toBeInTheDocument();
  });

  it("should trigger onRetry callback when the default retry button is clicked", async () => {
    const handleRetry = vi.fn();
    render(<ErrorState onRetry={handleRetry} />);

    const retryBtn = screen.getByRole("button", { name: "Try Again" });
    await userEvent.click(retryBtn);

    expect(handleRetry).toHaveBeenCalled();
  });

  it("should render custom action blocks", () => {
    render(
      <ErrorState
        actions={
          <div data-testid="act-slot">
            <button>Home</button>
          </div>
        }
      />
    );
    expect(screen.getByTestId("act-slot")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<ErrorState title="A11y verification check" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
