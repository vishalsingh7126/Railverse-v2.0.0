import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { RadioGroup } from "./radio-group";

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const classOptions = [
  { value: "ac1", label: "AC First Class (1A)", description: "Premium tier with private coupes" },
  { value: "ac2", label: "AC 2 Tier (2A)", description: "Comfortable air-conditioned berths" },
  { value: "sl", label: "Sleeper Class (SL)", description: "Standard non-AC sleeper berths" },
];

const genderOptions = [
  { value: "m", label: "Male" },
  { value: "f", label: "Female" },
  { value: "o", label: "Other" },
];

export const Vertical: Story = {
  args: {
    options: classOptions,
    defaultValue: "ac2",
    name: "travel-class",
    orientation: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    options: genderOptions,
    defaultValue: "m",
    name: "passenger-gender",
    orientation: "horizontal",
  },
};

export const DisabledGroup: Story = {
  args: {
    options: classOptions,
    defaultValue: "ac1",
    name: "disabled-classes",
    disabled: true,
  },
};

export const DisabledOption: Story = {
  args: {
    options: [
      { value: "gp", label: "General Quota" },
      {
        value: "tq",
        label: "Tatkal Quota",
        description: "Not available for this booking class",
        disabled: true,
      },
      { value: "ld", label: "Ladies Quota" },
    ],
    defaultValue: "gp",
    name: "quota-selection",
  },
};

export const WithError: Story = {
  args: {
    options: genderOptions,
    name: "error-gender",
    error: true,
    helperText: "Please select a gender option to complete booking.",
  },
};

export const RTLCheck: Story = {
  args: {
    options: [
      {
        value: "yes",
        label: "نعم، أريد تأمين السفر",
        description: "تغطية تأمينية كاملة ضد الحوادث",
      },
      { value: "no", label: "لا، شكراً لك" },
    ],
    defaultValue: "no",
    name: "rtl-insurance",
  },
  render: (args) => (
    <div dir="rtl" className="w-[300px]">
      <RadioGroup {...args} />
    </div>
  ),
};
