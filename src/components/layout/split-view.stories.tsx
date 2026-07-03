import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { SplitView } from "./split-view";

const meta = {
  title: "Layout/SplitView",
  component: SplitView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SplitView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ratio: "1:1",
    gap: "md",
    left: (
      <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">
        Left Column Content
      </div>
    ),
    right: (
      <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">
        Right Column Content
      </div>
    ),
  },
};

export const SidebarLike: Story = {
  args: {
    ratio: "1:3",
    gap: "lg",
    left: (
      <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">
        Left Menu (1/4)
      </div>
    ),
    right: (
      <div className="bg-accent/40 border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold h-[200px]">
        Right Body Content (3/4)
      </div>
    ),
  },
};
