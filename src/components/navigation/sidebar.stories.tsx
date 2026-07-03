import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Sidebar } from "./sidebar";
import { Train, LayoutDashboard, Settings } from "lucide-react";

const meta = {
  title: "Navigation/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockGroups = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "#",
        icon: <LayoutDashboard className="h-4 w-4" />,
        active: true,
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        label: "Trains",
        href: "#",
        icon: <Train className="h-4 w-4" />,
        items: [
          { label: "Search Routes", href: "#" },
          { label: "Live Train Status", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Account",
    items: [{ label: "Settings", href: "#", icon: <Settings className="h-4 w-4" /> }],
  },
];

export const Default: Story = {
  args: {
    groups: mockGroups,
    variant: "persistent",
    collapsed: false,
  },
};

export const Floating: Story = {
  args: {
    groups: mockGroups,
    variant: "floating",
  },
};

export const Collapsed: Story = {
  args: {
    groups: mockGroups,
    collapsed: true,
  },
};
