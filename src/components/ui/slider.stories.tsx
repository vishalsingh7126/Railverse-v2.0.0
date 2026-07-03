import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Slider } from "./slider";

const meta = {
  title: "Forms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleValue: Story = {
  args: {
    defaultValue: [40],
    min: 0,
    max: 100,
    step: 1,
    label: "Alert trigger range (km)",
    helperText: "Trigger alerts within 40km of destination",
  },
};

export const PriceRange: Story = {
  args: {
    defaultValue: [300, 1800],
    min: 0,
    max: 3000,
    step: 50,
    label: "Ticket fare budget range (INR)",
    helperText: "Filter trains within Rs 300 - Rs 1800",
  },
};

export const TicksScale: Story = {
  args: {
    defaultValue: [2],
    min: 0,
    max: 10,
    step: 2,
    showTicks: true,
    label: "Buffer stop-over interval (hours)",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
    label: "Fixed travel window offset",
  },
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[300px]">
      <Slider
        defaultValue={[20, 80]}
        min={0}
        max={100}
        label="مستوى الصوت المفضل"
        helperText="اختر نطاق الصوت المناسب للتنبيهات"
      />
    </div>
  ),
};
