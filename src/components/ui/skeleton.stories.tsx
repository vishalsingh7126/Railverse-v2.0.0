import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Skeleton } from "./skeleton";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextPreset: Story = {
  args: {
    variant: "text",
  },
  render: (args) => (
    <div className="w-[250px]">
      <Skeleton {...args} />
    </div>
  ),
};

export const AvatarPreset: Story = {
  args: {
    variant: "avatar",
  },
};

export const CardPreset: Story = {
  args: {
    variant: "card",
  },
  render: (args) => (
    <div className="w-[300px]">
      <Skeleton {...args} />
    </div>
  ),
};

export const ComplexCardLayout: Story = {
  render: () => (
    <div className="w-[350px] border border-border p-4 rounded-lg flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="avatar" />
        <div className="flex flex-col gap-1.5 w-full">
          <Skeleton variant="text" className="w-[60%]" />
          <Skeleton variant="text" className="w-[40%]" />
        </div>
      </div>
      <Skeleton variant="card" className="h-40" />
      <div className="flex gap-2 justify-end">
        <Skeleton variant="text" className="h-8 w-20" />
        <Skeleton variant="text" className="h-8 w-20" />
      </div>
    </div>
  ),
};

export const TablePreset: Story = {
  render: () => (
    <div className="w-[400px] flex flex-col gap-2.5">
      <Skeleton variant="table" className="bg-primary/10" />
      <Skeleton variant="table" />
      <Skeleton variant="table" />
      <Skeleton variant="table" />
    </div>
  ),
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[300px] flex items-center gap-3">
      <Skeleton variant="avatar" />
      <div className="flex flex-col gap-1.5 w-full">
        <Skeleton variant="text" className="w-[80%]" />
        <Skeleton variant="text" className="w-[50%]" />
      </div>
    </div>
  ),
};
