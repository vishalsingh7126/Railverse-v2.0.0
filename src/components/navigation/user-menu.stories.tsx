import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { UserMenu } from "./user-menu";
import { User, Settings, CreditCard, LogOut } from "lucide-react";

const meta = {
  title: "Navigation/UserMenu",
  component: UserMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Vishal Singh",
    email: "vishal@travelcore.com",
    groups: [
      {
        label: "Settings",
        items: [
          { label: "My Profile", icon: <User className="h-4 w-4" /> },
          { label: "Billings", icon: <CreditCard className="h-4 w-4" /> },
          { label: "Preferences", icon: <Settings className="h-4 w-4" /> },
        ],
      },
      {
        items: [{ label: "Log Out", icon: <LogOut className="h-4 w-4" />, danger: true }],
      },
    ],
  },
};
