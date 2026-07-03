import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Section } from "./section";

const meta = {
  title: "Layout/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spacing: "md",
    children: (
      <div className="bg-accent border border-border rounded p-6">
        Section spacing md content (paddings: py-10 md:py-12)
      </div>
    ),
  },
};

export const WithDivider: Story = {
  args: {
    spacing: "lg",
    divider: true,
    children: (
      <div className="bg-accent border border-border rounded p-6">
        Section spacing lg content with bottom divider
      </div>
    ),
  },
};
