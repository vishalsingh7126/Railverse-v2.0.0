import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { Header } from "./header";

describe("Header Component", () => {
  it("should render successfully with custom slots", () => {
    render(
      <Header
        logo={<span>Logo Block</span>}
        navigation={<span>Nav Links</span>}
        actions={<span>Action Trigger</span>}
      />
    );
    expect(screen.getByText("Logo Block")).toBeInTheDocument();
    expect(screen.getByText("Nav Links")).toBeInTheDocument();
    expect(screen.getByText("Action Trigger")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <Header
        logo={<span>Logo</span>}
        navigation={
          <nav>
            <a>Link</a>
          </nav>
        }
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
