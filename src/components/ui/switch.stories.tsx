import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Switch } from "./switch";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Receive SMS alerts",
    description: "Get real-time train delay SMS updates.",
  },
};

export const CheckedByDefault: Story = {
  args: {
    label: "Enable notifications",
    defaultChecked: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Auto-renewal booking options",
    disabled: true,
    defaultChecked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: "Wheelchair travel services",
    disabled: true,
  },
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[300px]">
      <Switch
        label="تفعيل الإشعارات بالبريد الإلكتروني"
        description="احصل على تقارير تفصيلية شهرية."
      />
    </div>
  ),
};
