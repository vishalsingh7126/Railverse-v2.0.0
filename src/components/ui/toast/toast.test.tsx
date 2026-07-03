import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { axe } from "jest-axe";
import { useToastStore, toast } from "./use-toast";
import { Toaster } from "./toaster";

describe("Toast System", () => {
  beforeEach(() => {
    act(() => {
      useToastStore.setState({ toasts: [] });
    });
  });

  it("should initialize with no active notifications", () => {
    render(<Toaster />);
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });

  it("should add and display a success toast message", () => {
    render(<Toaster />);

    act(() => {
      toast.success("Train reservation confirmed", "Booking");
    });

    expect(screen.getByText("Train reservation confirmed")).toBeInTheDocument();
    expect(screen.getByText("Booking")).toBeInTheDocument();
  });

  it("should dismiss a toast when clicking the close button", async () => {
    render(<Toaster />);

    act(() => {
      toast.success("Will dismiss soon");
    });

    const closeBtn = screen.getByLabelText("Dismiss notification");
    await userEvent.click(closeBtn);

    expect(screen.queryByText("Will dismiss soon")).not.toBeInTheDocument();
  });

  it("should resolve promise toasts correctly", async () => {
    render(<Toaster />);

    const mockPromise = new Promise((resolve) => setTimeout(() => resolve("Done"), 50));

    act(() => {
      toast.promise(mockPromise, {
        loading: "Saving PNR...",
        success: "Saved successfully!",
        error: "Failed to save.",
      });
    });

    expect(screen.getByText("Saving PNR...")).toBeInTheDocument();

    await act(async () => {
      await mockPromise;
    });

    await waitFor(() => {
      expect(screen.queryByText("Saving PNR...")).not.toBeInTheDocument();
      expect(screen.getByText("Saved successfully!")).toBeInTheDocument();
    });
  });

  it("should have no accessibility violations on visible toasts", async () => {
    const { container } = render(<Toaster />);

    act(() => {
      toast.warning("Warning message");
    });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
