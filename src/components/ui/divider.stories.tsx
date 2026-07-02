import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Divider } from "./divider";

const meta = {
  title: "Foundations/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalDefault: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const WithLabelMiddle: Story = {
  args: {
    orientation: "horizontal",
    label: "Secured by TravelCore Gate",
    labelAlign: "center",
  },
};

export const WithLabelStart: Story = {
  args: {
    orientation: "horizontal",
    label: "Halt Stations Sequence",
    labelAlign: "start",
  },
};

export const VerticalSplit: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-4 text-xs font-semibold text-muted-foreground select-none">
      <span>PNR Status</span>
      <Divider orientation="vertical" />
      <span>Live Tracking</span>
      <Divider orientation="vertical" />
      <span>Availability Matrix</span>
    </div>
  ),
};
