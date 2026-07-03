import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { AppShell } from "./app-shell";
import { NavigationProvider } from "@/providers/navigation-provider";

const meta = {
  title: "Layout/AppShell",
  component: AppShell,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <NavigationProvider>
        <Story />
      </NavigationProvider>
    ),
  ],
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: (
      <header className="h-16 border-b border-border bg-card flex items-center px-6 justify-between">
        <span className="font-bold text-lg">Railverse Header</span>
        <div className="h-8 w-8 rounded-full bg-accent" />
      </header>
    ),
    sidebar: (
      <div className="p-4 space-y-4">
        <div className="h-8 bg-accent rounded" />
        <div className="h-8 bg-accent rounded" />
        <div className="h-8 bg-accent rounded" />
      </div>
    ),
    rightSidebar: (
      <div className="p-4 space-y-4">
        <h4 className="font-bold text-sm">Detail Drawer</h4>
        <div className="h-32 bg-accent rounded" />
      </div>
    ),
    footer: <div>© 2026 TravelCore Technologies Pvt. Ltd.</div>,
    children: (
      <div className="border-2 border-dashed border-border rounded-lg p-12 text-center h-[400px] flex items-center justify-center text-muted-foreground font-semibold">
        Main Dashboard Content Space
      </div>
    ),
  },
};
