import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { toast } from "./use-toast";
import { ToastProvider } from "./toast-provider";
import { Button } from "../button";

const ToastDemo = () => {
  const triggerSuccess = () => {
    toast.success("Passenger ticket booking has been confirmed!", "Booking Confirmed");
  };

  const triggerWarning = () => {
    toast.warning("Train 12626 is delayed by 1 hour at Nagpur.", "Schedule Alert");
  };

  const triggerError = () => {
    toast.error("IRCTC payment gateway is down. Please try again.", "Gateway Error");
  };

  const triggerLoading = () => {
    const id = toast.loading("Checking berth availability status...");
    setTimeout(() => toast.dismiss(id), 3000);
  };

  const triggerPromise = () => {
    const mockPromise = new Promise((resolve) => {
      setTimeout(() => resolve("Success Data"), 2000);
    });

    toast.promise(mockPromise, {
      loading: "Contacting railway server...",
      success: "Pnr history database synced successfully!",
      error: "Sync error occurred.",
    });
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={triggerSuccess}>Success Toast</Button>
      <Button onClick={triggerWarning} variant="outline">
        Warning Toast
      </Button>
      <Button onClick={triggerError} variant="destructive">
        Error Toast
      </Button>
      <Button onClick={triggerLoading} variant="secondary">
        Loading Toast (3s)
      </Button>
      <Button onClick={triggerPromise} className="bg-indigo-600 text-white hover:bg-indigo-700">
        Promise Toast
      </Button>
    </div>
  );
};

const meta = {
  title: "Feedback/Toast",
  component: ToastDemo,
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="p-10 flex items-center justify-center min-h-[200px]">
          <Story />
        </div>
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="flex gap-2">
      <Button onClick={() => toast.success("تم تأكيد حجز تذكرتك بنجاح!", "تم التأكيد")}>
        عرض إشعار عربي
      </Button>
    </div>
  ),
};
