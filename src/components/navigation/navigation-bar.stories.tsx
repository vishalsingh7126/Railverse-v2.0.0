import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { NavigationBar } from "./navigation-bar";
import { Search, Train, Compass } from "lucide-react";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Search Trains", href: "#", active: true, icon: <Train className="h-4 w-4" /> },
      { label: "PNR Status", href: "#", icon: <Search className="h-4 w-4" /> },
      { label: "Explore Quotas", href: "#", icon: <Compass className="h-4 w-4" /> },
    ],
  },
};
