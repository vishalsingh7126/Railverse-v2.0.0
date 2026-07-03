import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Breadcrumb } from "./breadcrumb";
import { Home } from "lucide-react";

const meta = {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { label: "Home", href: "#", icon: <Home className="h-4 w-4" /> },
  { label: "Trains", href: "#" },
  { label: "Rajdhani Express", href: "#" },
  { label: "Seat Availability" },
];

export const Default: Story = {
  args: {
    items: mockItems,
    maxVisibleItems: 4,
  },
};

export const Collapsed: Story = {
  args: {
    items: mockItems,
    maxVisibleItems: 3,
  },
};
