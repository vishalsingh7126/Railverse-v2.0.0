import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Search, ArrowLeft, Settings } from "lucide-react";
import { IconButton } from "./icon-button";

const meta = {
  title: "Foundations/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Search className="h-4 w-4" />,
    "aria-label": "Search for trains",
  },
};

export const BackButton: Story = {
  args: {
    variant: "outline",
    icon: <ArrowLeft className="h-4 w-4" />,
    "aria-label": "Back to dashboard",
  },
};

export const SettingsButton: Story = {
  args: {
    variant: "ghost",
    icon: <Settings className="h-4 w-4" />,
    "aria-label": "Open UI settings",
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
    icon: <Settings className="h-4 w-4" />,
    "aria-label": "Saving configuration",
  },
};
