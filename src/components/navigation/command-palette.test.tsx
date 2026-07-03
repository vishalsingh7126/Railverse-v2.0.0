import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import {
  CommandPalette,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteItem,
} from "./command-palette";

describe("CommandPalette Component", () => {
  it("should render successfully when open", () => {
    render(
      <CommandPalette isOpen={true} onOpenChange={() => {}}>
        <CommandPaletteInput placeholder="Search..." />
        <CommandPaletteList>
          <CommandPaletteItem>Option 1</CommandPaletteItem>
        </CommandPaletteList>
      </CommandPalette>
    );

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <CommandPalette isOpen={true} onOpenChange={() => {}}>
        <CommandPaletteInput placeholder="Search..." />
      </CommandPalette>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
