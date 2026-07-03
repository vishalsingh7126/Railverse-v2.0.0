import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Pagination } from "./pagination";

describe("Pagination Component", () => {
  it("should render successfully", () => {
    const handlePageChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={handlePageChange} />);
    expect(screen.getByLabelText("Pagination Navigation")).toBeInTheDocument();
  });

  it("should invoke callback when page clicked", () => {
    const handlePageChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={handlePageChange} />);
    const pageButton = screen.getByLabelText("Go to page 3");
    fireEvent.click(pageButton);
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
