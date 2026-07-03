import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { ProfileMenu } from "./profile-menu";

describe("ProfileMenu Component", () => {
  it("should render successfully", () => {
    render(<ProfileMenu fallbackText="VS" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<ProfileMenu fallbackText="VS" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
