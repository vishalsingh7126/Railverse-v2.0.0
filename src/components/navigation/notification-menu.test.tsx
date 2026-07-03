import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { NotificationMenu } from "./notification-menu";

describe("NotificationMenu Component", () => {
  it("should render successfully", () => {
    render(
      <NotificationMenu count={2}>
        <div>Notification List</div>
      </NotificationMenu>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <NotificationMenu count={2}>
        <div>List</div>
      </NotificationMenu>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
