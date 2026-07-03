import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { SeatBadge } from "./seat-badge";
import { CoachBadge } from "./coach-badge";
import { SeatTypeChip } from "./seat-type-chip";
import { AvailabilityMeter } from "./availability-meter";
import { CoachLegend } from "./coach-legend";
import { SeatLegend } from "./seat-legend";

const meta = {
  title: "Railway/Seat",
  component: AvailabilityMeter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AvailabilityMeter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMeter: Story = {
  args: {
    status: "available",
    count: 45,
    totalQuota: 100,
  },
};

export const RACMeter: Story = {
  args: {
    status: "rac",
    count: 12,
    totalQuota: 50,
  },
};

export const WaitlistMeter: Story = {
  args: {
    status: "waitlist",
    count: 8,
    totalQuota: 20,
  },
};

export const BadgesDemo = {
  render: () => (
    <div className="flex gap-3 items-center">
      <SeatBadge tier="3A" />
      <SeatBadge tier="2A" />
      <SeatBadge tier="SL" />
      <CoachBadge coach="B1" />
      <CoachBadge coach="A2" />
      <SeatTypeChip type="Lower Berth" />
      <SeatTypeChip type="Side Upper" />
    </div>
  ),
};

export const CoachLegendDemo = {
  render: () => (
    <CoachLegend
      coaches={[
        { code: "ENG", type: "Engine" },
        { code: "A1", type: "2AC" },
        { code: "B1", type: "3AC", isSelected: true },
        { code: "B2", type: "3AC" },
        { code: "S1", type: "Sleeper" },
      ]}
    />
  ),
};

export const SeatLegendDemo = {
  render: () => (
    <SeatLegend
      items={[
        { label: "Available", colorClass: "bg-green-500" },
        { label: "Booked", colorClass: "bg-muted" },
        { label: "Selected", colorClass: "bg-primary" },
      ]}
    />
  ),
};
