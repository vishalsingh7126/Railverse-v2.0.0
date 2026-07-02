import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta = {
  title: "Foundations/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "success", "warning", "danger", "info"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "General Quota",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "E-Ticket",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "AC 2 Tier",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "CNF (Confirmed)",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "RAC (Reservation Against Cancellation)",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "WL (Waitlisted)",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Vande Bharat",
  },
};
