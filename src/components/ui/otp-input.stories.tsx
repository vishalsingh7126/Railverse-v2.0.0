import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { OTPInput } from "./otp-input";

const meta = {
  title: "Forms/OTPInput",
  component: OTPInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultNumeric: Story = {
  args: {
    length: 6,
    type: "numeric",
    autoFocus: false,
  },
};

export const AlphanumericCode: Story = {
  args: {
    length: 4,
    type: "alphanumeric",
    autoFocus: false,
  },
};

export const MaskedPIN: Story = {
  args: {
    length: 4,
    type: "numeric",
    mask: true,
    autoFocus: false,
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
    defaultValue: "123456",
    autoFocus: false,
  },
};

export const WithError: Story = {
  args: {
    length: 6,
    error: true,
    defaultValue: "12",
    autoFocus: false,
  },
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="flex flex-col gap-2">
      <span className="text-xs text-muted-foreground">أدخل رمز التحقق (OTP)</span>
      <OTPInput length={6} type="numeric" autoFocus={false} />
    </div>
  ),
};
