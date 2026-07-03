import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Stack } from "./stack";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: "md",
    align: "start",
    children: (
      <>
        <div className="bg-primary text-primary-foreground p-3 rounded">Item 1</div>
        <div className="bg-primary text-primary-foreground p-3 rounded">Item 2</div>
        <div className="bg-primary text-primary-foreground p-3 rounded">Item 3</div>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    gap: "lg",
    align: "center",
    children: (
      <>
        <div className="bg-primary text-primary-foreground p-3 rounded w-32 text-center">
          Item 1
        </div>
        <div className="bg-primary text-primary-foreground p-3 rounded w-32 text-center">
          Item 2
        </div>
        <div className="bg-primary text-primary-foreground p-3 rounded w-32 text-center">
          Item 3
        </div>
      </>
    ),
  },
};
