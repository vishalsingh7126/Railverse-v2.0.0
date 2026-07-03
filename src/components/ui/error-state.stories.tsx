import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ErrorState } from "./error-state";
import { Button } from "./button";

const meta = {
  title: "Feedback/ErrorState",
  component: ErrorState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Connection Timed Out",
    description:
      "The railway reservation system took too long to respond. Please check your connection and retry.",
    onRetry: () => alert("Retrying connection..."),
  },
};

export const ComposedWithMultipleActions: Story = {
  render: () => (
    <ErrorState
      title="Seat Allocation Aborted"
      description="Your session has expired due to inactivity. The reserved berth layout was released back into the pool."
    >
      <div className="flex gap-2 mt-2">
        <Button size="sm" variant="destructive">
          Release & Start Over
        </Button>
        <Button size="sm" variant="outline">
          Contact Support
        </Button>
        <Button size="sm" variant="ghost">
          Go Home
        </Button>
      </div>
    </ErrorState>
  ),
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[350px]">
      <ErrorState
        title="فشلت عملية الدفع"
        description="انتهت مهلة الاتصال ببوابة الدفع الإلكتروني. يرجى المحاولة مرة أخرى."
        onRetry={() => {}}
      />
    </div>
  ),
};
