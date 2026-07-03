import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { SearchOverlay } from "./search-overlay";

const meta = {
  title: "Navigation/SearchOverlay",
  component: SearchOverlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onOpenChange: () => {},
    inputSlot: (
      <input
        type="text"
        placeholder="Search trains, routes, or stations..."
        className="w-full bg-transparent border-0 outline-none text-sm placeholder:text-muted-foreground"
      />
    ),
    filtersSlot: (
      <div className="flex gap-2">
        <span className="text-xs border px-2 py-0.5 rounded-full bg-background cursor-pointer hover:bg-accent">
          All
        </span>
        <span className="text-xs border px-2 py-0.5 rounded-full bg-background cursor-pointer hover:bg-accent">
          Trains
        </span>
        <span className="text-xs border px-2 py-0.5 rounded-full bg-background cursor-pointer hover:bg-accent">
          Stations
        </span>
      </div>
    ),
    resultsSlot: (
      <div className="p-4 text-center text-sm text-muted-foreground">
        Type something to search...
      </div>
    ),
    footerSlot: (
      <div className="flex justify-between w-full">
        <span>Use arrow keys to navigate</span>
        <span>Esc to close</span>
      </div>
    ),
  },
};
