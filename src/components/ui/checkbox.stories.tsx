import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "I agree to the terms and conditions",
    helperText: "Your agreement is required to issue the e-ticket.",
  },
};

export const CheckedByDefault: Story = {
  args: {
    label: "Pre-book onboard catering meals",
    defaultChecked: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Senior citizen travel concession options",
    disabled: true,
    defaultChecked: true,
  },
};

export const DisabledUnchecked: Story = {
  args: {
    label: "Wheelchair assistance service request",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Confirm passenger health declarations",
    error: true,
    helperText: "You must confirm health and safety criteria to book.",
  },
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[300px] flex flex-col gap-4">
      <Checkbox
        label="أوافق على الشروط والأحكام الخاصة بالسفر"
        helperText="موافقتك مطلوبة قبل إتمام الحجز."
      />
    </div>
  ),
};
