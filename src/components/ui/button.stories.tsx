import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

const meta = {
  title: "Foundations/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "link", "destructive", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Continue Booking",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "View Schedule",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Cancel Ticket",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Dismiss Alert",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Forgot PNR Number?",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Payment Successful",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete History",
  },
};

export const LoadingState: Story = {
  args: {
    loading: true,
    children: "Fetching Coordinates",
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    children: "Seat Locked",
  },
};
