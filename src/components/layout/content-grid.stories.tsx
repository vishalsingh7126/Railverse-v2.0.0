import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ContentGrid } from "./content-grid";

const meta = {
  title: "Layout/ContentGrid",
  component: ContentGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContentGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cols: 3,
    gap: "md",
    children: (
      <>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold"
          >
            Grid Item {i + 1}
          </div>
        ))}
      </>
    ),
  },
};

export const SidebarLayout: Story = {
  args: {
    cols: "sidebar",
    gap: "lg",
    children: (
      <>
        <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">
          Sidebar Left Pane (280px)
        </div>
        <div className="bg-accent/40 border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold h-[200px]">
          Main Content Pane (Remaining width)
        </div>
      </>
    ),
  },
};
