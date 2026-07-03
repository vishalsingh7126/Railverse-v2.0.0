import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Progress } from "./progress";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinearDeterminate: Story = {
  args: {
    value: 65,
    variant: "linear",
    size: "md",
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};

export const LinearIndeterminate: Story = {
  args: {
    value: null,
    variant: "linear",
    size: "md",
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};

export const CircularDeterminate: Story = {
  args: {
    value: 75,
    variant: "circular",
    size: "md",
  },
};

export const CircularIndeterminate: Story = {
  args: {
    value: null,
    variant: "circular",
    size: "md",
  },
};

export const LinearSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Progress value={45} variant="linear" size="sm" />
      <Progress value={45} variant="linear" size="md" />
      <Progress value={45} variant="linear" size="lg" />
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Progress value={45} variant="circular" size="sm" />
      <Progress value={45} variant="circular" size="md" />
      <Progress value={45} variant="circular" size="lg" />
    </div>
  ),
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[300px] flex flex-col gap-2">
      <span className="text-xs text-muted-foreground">جاري تحميل البيانات...</span>
      <Progress value={80} variant="linear" />
    </div>
  ),
};
