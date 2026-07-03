import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Cluster } from "./cluster";

const meta = {
  title: "Layout/Cluster",
  component: Cluster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Cluster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: "sm",
    justify: "start",
    children: (
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="bg-primary text-primary-foreground p-3 rounded text-xs font-semibold"
          >
            Station Tag {i + 1}
          </div>
        ))}
      </>
    ),
  },
};

export const Between: Story = {
  args: {
    gap: "md",
    justify: "between",
    className: "w-[400px] border border-border p-2 rounded-md",
    children: (
      <>
        <span className="font-semibold text-sm">PNR Status</span>
        <span className="bg-green-500/10 text-green-500 text-xs px-2 py-0.5 rounded font-bold">
          CNF
        </span>
      </>
    ),
  },
};
