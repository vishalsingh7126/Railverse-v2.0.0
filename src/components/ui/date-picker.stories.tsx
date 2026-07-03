import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import type { DateRange as RDPDateRange } from "react-day-picker";
import { DatePicker } from "./date-picker";

const meta = {
  title: "Forms/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

interface DatePickerWrapperProps {
  mode?: "single" | "range";
  placeholder?: string;
  helperText?: string;
}

const DatePickerWrapper = ({ mode = "single", ...props }: DatePickerWrapperProps) => {
  const [value, setValue] = React.useState<Date | RDPDateRange | undefined>(undefined);
  return <DatePicker {...props} mode={mode} value={value} onChange={setValue} />;
};

export const SingleDate: Story = {
  render: () => (
    <DatePickerWrapper
      mode="single"
      placeholder="Select journey date"
      helperText="You can book tickets up to 120 days in advance"
    />
  ),
};

export const DateRange: Story = {
  render: () => (
    <DatePickerWrapper
      mode="range"
      placeholder="Select onward & return dates"
      helperText="Select onward journey date and return date"
    />
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Booking window closed",
  },
};

export const WithError: Story = {
  args: {
    error: true,
    helperText: "Journey date cannot be in the past.",
    placeholder: "Select journey date",
  },
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[300px]">
      <DatePickerWrapper
        mode="single"
        placeholder="اختر تاريخ السفر"
        helperText="يمكنك الحجز حتى ١٢٠ يوماً مقدماً"
      />
    </div>
  ),
};
