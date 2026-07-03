import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Alert } from "./alert";
import { Button } from "./button";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "error"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    title: "Schedules Updated",
    description: "New summer train schedule updates are now active.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Platform Allocation Changed",
    description: "Train 12002 will now arrive on Platform 3 instead of Platform 1.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Ticket Confirmed",
    description: "Your PNR seat berth has been booked and synced to your email.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Train Delayed",
    description: "Train 12002 is running late by 45 minutes from Gwalior station.",
  },
};

export const ErrorState: Story = {
  args: {
    variant: "error",
    title: "Payment Transaction Failed",
    description: "Insufficient funds detected. Please choose another payment gateway.",
  },
};

export const WithActionBtn: Story = {
  render: () => (
    <Alert variant="warning" title="Ticket Reservation Expiring">
      <div className="flex flex-col gap-2.5">
        <span className="text-xs">
          Your locked seat booking will release in 2 minutes. Complete booking now.
        </span>
        <Button size="sm" className="w-fit">
          Proceed to Payment
        </Button>
      </div>
    </Alert>
  ),
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-full flex flex-col gap-4">
      <Alert
        variant="info"
        title="تحديثات جدول السفر"
        description="تم تحديث مواعيد قطارات النوم المتجهة إلى أسوان."
      />
    </div>
  ),
};
