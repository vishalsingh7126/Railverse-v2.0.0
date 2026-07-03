import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { ThemeProvider } from "next-themes";

const meta = {
  title: "Navigation/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-[150px] flex items-start">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
