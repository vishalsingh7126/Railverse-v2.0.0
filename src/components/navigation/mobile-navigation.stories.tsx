import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { MobileNavigation } from "./mobile-navigation";
import { Train, LayoutDashboard } from "lucide-react";

const meta = {
  title: "Navigation/MobileNavigation",
  component: MobileNavigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MobileNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  { label: "Dashboard", href: "#", icon: <LayoutDashboard className="h-5 w-5" />, active: true },
  { label: "Trains", href: "#", icon: <Train className="h-5 w-5" /> },
];

export const Default: Story = {
  args: {
    items: mockItems,
    drawerContent: (
      <div className="space-y-4">
        <div className="font-semibold text-sm border-b pb-2 mb-2">More Options</div>
        <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
          Settings
        </a>
        <a href="#" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
          Help Support
        </a>
      </div>
    ),
  },
};
