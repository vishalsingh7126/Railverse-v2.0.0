import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { DelayIndicator } from "./delay-indicator";
import { LiveStatusIndicator } from "./live-status-indicator";
import { ETAChip } from "./eta-chip";
import { SpeedChip } from "./speed-chip";
import { CurrentLocationCard } from "./current-location-card";
import { JourneyHealthIndicator } from "./journey-health-indicator";

const meta = {
  title: "Railway/LiveStatus",
  component: CurrentLocationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CurrentLocationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    currentLocation: "Ratlam Jn (RTM)",
    previousStation: "Kota Jn (KOTA)",
    nextStation: "Vadodara Jn (BRC)",
    delay: <DelayIndicator delayMinutes={15} />,
    speed: <SpeedChip speed={110} />,
    timestamp: "Last updated 2 mins ago",
  },
};

export const LiveDotDemo = {
  render: () => (
    <div className="flex gap-4">
      <LiveStatusIndicator isActive={true} />
      <LiveStatusIndicator isActive={false} />
    </div>
  ),
};

export const ChipsDemo = {
  render: () => (
    <div className="flex gap-3 items-center">
      <ETAChip scheduledTime="08:35" actualTime="08:50" isDelayed={true} />
      <ETAChip scheduledTime="12:00" actualTime="12:00" />
      <SpeedChip speed={130} />
    </div>
  ),
};

export const HealthDemo = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <JourneyHealthIndicator score={95} />
      <JourneyHealthIndicator score={75} />
      <JourneyHealthIndicator score={35} />
    </div>
  ),
};
