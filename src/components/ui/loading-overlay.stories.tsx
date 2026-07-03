import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { LoadingOverlay } from "./loading-overlay";
import { Button } from "./button";

const meta = {
  title: "Feedback/LoadingOverlay",
  component: LoadingOverlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoadingOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper for demonstrating inline overlay content inside a card
const InlineDemo = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="relative border border-border p-6 rounded-lg w-[320px] bg-card text-card-foreground">
      <h3 className="font-semibold text-base mb-2">Passenger Ticket Booking</h3>
      <p className="text-xs text-muted-foreground mb-4">
        Make payments and reserve berths. The tickets will be generated instantly.
      </p>
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 3000);
        }}
        className="w-full"
      >
        Reserve Seats (3s load)
      </Button>

      <LoadingOverlay visible={loading} usePortal={false} message="Reserving ticket..." />
    </div>
  );
};

export const InlineContainer: Story = {
  args: {
    visible: false,
  },
  render: () => <InlineDemo />,
};

// Wrapper for demonstrating portal loading state
const PortalDemo = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 3000);
        }}
      >
        Show Global Loader (3s)
      </Button>
      <LoadingOverlay visible={loading} usePortal={true} message="Syncing with IRCTC gateway..." />
    </div>
  );
};

export const GlobalPortal: Story = {
  args: {
    visible: false,
  },
  render: () => <PortalDemo />,
};

export const RTLCheck: Story = {
  args: {
    visible: true,
  },
  render: () => (
    <div className="relative border p-6 rounded-lg w-[320px]" dir="rtl">
      <h3 className="font-semibold text-base mb-2">تأكيد حجز التذكرة</h3>
      <p className="text-xs text-muted-foreground mb-4">
        سيتم إرسال رسالة التأكيد عبر البريد الإلكتروني.
      </p>
      <LoadingOverlay visible={true} usePortal={false} message="جاري معالجة طلبك..." />
    </div>
  ),
};
