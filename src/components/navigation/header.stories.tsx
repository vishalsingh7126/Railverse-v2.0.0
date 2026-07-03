import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Header } from "./header";

const meta = {
  title: "Navigation/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "solid",
    logo: <span className="font-bold text-lg tracking-tight">Railverse</span>,
    navigation: (
      <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
        <a href="#" className="text-foreground hover:text-foreground">
          Search
        </a>
        <a href="#" className="hover:text-foreground">
          Schedule
        </a>
        <a href="#" className="hover:text-foreground">
          PNR Status
        </a>
      </nav>
    ),
    actions: (
      <div className="flex gap-2">
        <button className="px-3 py-1.5 text-xs border rounded-md">Log In</button>
        <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">
          Sign Up
        </button>
      </div>
    ),
  },
};

export const TransparentScrollAware: Story = {
  args: {
    variant: "transparent",
    scrollAware: true,
    logo: <span className="font-bold text-lg tracking-tight">Railverse</span>,
    navigation: (
      <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
        <a href="#" className="hover:text-foreground">
          Home
        </a>
        <a href="#" className="hover:text-foreground">
          Features
        </a>
      </nav>
    ),
    actions: (
      <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">
        Action
      </button>
    ),
  },
};
