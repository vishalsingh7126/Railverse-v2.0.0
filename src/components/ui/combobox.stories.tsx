import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Combobox } from "./combobox";

const meta = {
  title: "Forms/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const stationOptions = [
  { value: "ndls", label: "New Delhi (NDLS)" },
  { value: "bct", label: "Mumbai Central (MMCT)" },
  { value: "sbc", label: "KSR Bengaluru City (SBC)" },
  { value: "mas", label: "Chennai Central (MAS)" },
  { value: "hwh", label: "Howrah Junction (HWH)" },
];

export const Default: Story = {
  args: {
    options: stationOptions,
    placeholder: "Search boarding station...",
    searchPlaceholder: "Type station name or code...",
  },
};

export const LoadingState: Story = {
  args: {
    options: stationOptions,
    loading: true,
    placeholder: "Fetching station records...",
  },
};

export const CustomEmptyState: Story = {
  args: {
    options: [],
    placeholder: "Search stations...",
    emptyState: (
      <div className="flex flex-col items-center gap-1 py-4">
        <span className="text-xs font-semibold text-destructive">No stations matched</span>
        <span className="text-[10px] text-muted-foreground">Try spelling the full name</span>
      </div>
    ),
  },
};

export const Disabled: Story = {
  args: {
    options: stationOptions,
    disabled: true,
    placeholder: "Station selection locked",
  },
};

export const WithError: Story = {
  args: {
    options: stationOptions,
    error: true,
    helperText: "Boarding station is mandatory for booking ticket.",
    placeholder: "Search boarding station...",
  },
};

export const RTLCheck: Story = {
  args: {
    options: [
      { value: "cai", label: "محطة رمسيس (القاهرة)" },
      { value: "alx", label: "محطة سيدي جابر (الإسكندرية)" },
    ],
    placeholder: "ابحث عن محطة القيام...",
    searchPlaceholder: "اكتب اسم المحطة...",
    emptyState: "لم يتم العثور على نتائج",
  },
  render: (args) => (
    <div dir="rtl" className="w-[300px]">
      <Combobox {...args} />
    </div>
  ),
};
