import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { StickyRegion } from "./sticky-region";

const meta = {
  title: "Layout/StickyRegion",
  component: StickyRegion,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StickyRegion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-[400px] overflow-auto border border-border rounded relative p-4 bg-muted/20">
      <div className="h-10 text-xs text-muted-foreground">Scroll down to see sticky effect...</div>
      <StickyRegion className="bg-primary text-primary-foreground p-3 rounded shadow-md text-center font-bold">
        Sticky Header Region
      </StickyRegion>
      <div className="h-[600px] mt-4 text-xs text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. More content scrolling below...
      </div>
    </div>
  ),
};
