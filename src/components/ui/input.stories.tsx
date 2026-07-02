import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Search, Mail } from "lucide-react";
import { Input } from "./input";

const meta = {
  title: "Foundations/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter PNR Number",
  },
};

export const WithStartIcon: Story = {
  args: {
    placeholder: "Search stations...",
    startIcon: <Search className="h-4 w-4" />,
  },
};

export const WithEndIcon: Story = {
  args: {
    type: "email",
    placeholder: "passenger@travelcore.in",
    endIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithPrefix: Story = {
  args: {
    placeholder: "9876543210",
    prefix: "+91",
  },
};

export const WithSuffix: Story = {
  args: {
    placeholder: "railverse",
    suffix: ".in",
  },
};

export const WithLoading: Story = {
  args: {
    placeholder: "Retrieving availability...",
    loading: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: "12345",
    error: true,
    helperText: "PNR number must be exactly 10 digits",
    value: "12345",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Locked input",
    disabled: true,
    value: "Cannot edit this value",
  },
};
