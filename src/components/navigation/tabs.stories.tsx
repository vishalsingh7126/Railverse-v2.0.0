import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Tabs } from "./tabs";
import { Train, Info, FileText } from "lucide-react";

const meta = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems = [
  {
    value: "trains",
    label: "Live Status",
    icon: <Train className="h-4 w-4" />,
    badge: 3,
    content: <div className="p-4 border rounded-md">Live train tracking maps.</div>,
  },
  {
    value: "pnr",
    label: "PNR Status",
    icon: <Info className="h-4 w-4" />,
    content: <div className="p-4 border rounded-md">Check ticket conformation details.</div>,
  },
  {
    value: "fare",
    label: "Fare Calc",
    icon: <FileText className="h-4 w-4" />,
    disabled: true,
    content: <div className="p-4 border rounded-md">Compare train ticket rates.</div>,
  },
];

export const Default: Story = {
  args: {
    items: mockItems,
  },
};
