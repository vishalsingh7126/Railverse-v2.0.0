import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { PageContainer } from "./page-container";

const meta = {
  title: "Layout/PageContainer",
  component: PageContainer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "lg",
    children: (
      <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">
        Responsive Page Content (Max-width: 7xl)
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: (
      <div className="bg-accent border border-border rounded-lg p-8 text-center text-accent-foreground font-semibold">
        Small Content Bounds (Max-width: 3xl)
      </div>
    ),
  },
};
