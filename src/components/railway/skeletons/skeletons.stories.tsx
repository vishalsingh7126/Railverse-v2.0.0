import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { JourneySkeleton } from "./journey-skeleton";
import { TrainCardSkeleton } from "./train-card-skeleton";
import { LiveStatusSkeleton } from "./live-status-skeleton";
import { ScheduleSkeleton } from "./schedule-skeleton";
import { SeatAvailabilitySkeleton } from "./seat-availability-skeleton";
import { FareSkeleton } from "./fare-skeleton";

const meta = {
  title: "Railway/Skeletons",
  component: JourneySkeleton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof JourneySkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Journey: Story = {
  render: () => <JourneySkeleton className="w-[450px]" />,
};

export const TrainCard = {
  render: () => <TrainCardSkeleton className="w-[450px]" />,
};

export const LiveStatus = {
  render: () => <LiveStatusSkeleton className="w-[450px]" />,
};

export const Schedule = {
  render: () => <ScheduleSkeleton className="w-[450px]" />,
};

export const SeatAvailability = {
  render: () => <SeatAvailabilitySkeleton className="w-[450px]" />,
};

export const Fare = {
  render: () => <FareSkeleton className="w-[400px]" />,
};

export const AllSkeletons = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <JourneySkeleton />
      <TrainCardSkeleton />
      <LiveStatusSkeleton />
      <ScheduleSkeleton />
      <SeatAvailabilitySkeleton />
      <FareSkeleton />
    </div>
  ),
};
