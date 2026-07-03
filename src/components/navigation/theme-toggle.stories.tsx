import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { ThemeProvider } from "next-themes";

const meta = {
  title: "Navigation/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
