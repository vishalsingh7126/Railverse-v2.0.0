import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { NotificationMenu } from "./notification-menu";

const meta = {
  title: "Navigation/NotificationMenu",
  component: NotificationMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 3,
    children: (
      <div className="divide-y divide-border text-sm">
        <div className="p-3 hover:bg-accent/30 cursor-pointer">
          <p className="font-medium">Train Delay Alert</p>
          <p className="text-xs text-muted-foreground">Train 12001 is running 15 mins late.</p>
        </div>
        <div className="p-3 hover:bg-accent/30 cursor-pointer">
          <p className="font-medium">Booking Confirmed</p>
          <p className="text-xs text-muted-foreground">Your ticket for NDLS-BCT is confirmed.</p>
        </div>
      </div>
    ),
  },
};
