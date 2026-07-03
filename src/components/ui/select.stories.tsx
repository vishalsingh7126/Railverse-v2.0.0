import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Select } from "./select";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const quotaOptions = [
  { value: "gn", label: "General Quota (GN)" },
  { value: "tq", label: "Tatkal Quota (TQ)" },
  { value: "ld", label: "Ladies Quota (LD)" },
  { value: "df", label: "Defense Quota (DF)", disabled: true },
];

export const Default: Story = {
  args: {
    options: quotaOptions,
    placeholder: "Select quota type",
  },
};

export const LoadingState: Story = {
  args: {
    options: quotaOptions,
    loading: true,
    placeholder: "Fetching available quotas...",
  },
};

export const Disabled: Story = {
  args: {
    options: quotaOptions,
    disabled: true,
    placeholder: "Quota locked",
  },
};

export const WithError: Story = {
  args: {
    options: quotaOptions,
    error: true,
    helperText: "Please select a quota to continue booking.",
    placeholder: "Select quota type",
  },
};

export const RTLCheck: Story = {
  args: {
    options: [
      { value: "cairo", label: "القاهرة" },
      { value: "alex", label: "الإسكندرية" },
      { value: "giza", label: "الجيزة" },
    ],
    placeholder: "اختر محطة المغادرة",
  },
  render: (args) => (
    <div dir="rtl" className="w-[300px]">
      <Select {...args} />
    </div>
  ),
};
