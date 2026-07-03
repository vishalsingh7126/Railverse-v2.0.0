import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { UserMenu } from "./user-menu";

describe("UserMenu Component", () => {
  const groups = [
    {
      label: "Account",
      items: [{ label: "Profile" }],
    },
  ];

  it("should render successfully", () => {
    render(<UserMenu name="User" email="user@mail.com" groups={groups} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<UserMenu name="User" email="user@mail.com" groups={groups} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
