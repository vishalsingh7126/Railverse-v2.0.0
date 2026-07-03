import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Spinner } from "./spinner";

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandVariant: Story = {
  args: {
    variant: "brand",
    size: "md",
  },
};

export const DefaultVariant: Story = {
  args: {
    variant: "default",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" variant="brand" />
      <Spinner size="sm" variant="brand" />
      <Spinner size="md" variant="brand" />
      <Spinner size="lg" variant="brand" />
    </div>
  ),
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">جاري المعالجة...</span>
      <Spinner size="sm" variant="brand" />
    </div>
  ),
};
