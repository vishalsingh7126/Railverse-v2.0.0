import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ProfileMenu } from "./profile-menu";
import { User, LogOut } from "lucide-react";

const meta = {
  title: "Navigation/ProfileMenu",
  component: ProfileMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallbackText: "VS",
    items: [
      { label: "My Profile", icon: <User className="h-4 w-4" /> },
      { label: "Log Out", icon: <LogOut className="h-4 w-4" />, danger: true },
    ],
  },
};
