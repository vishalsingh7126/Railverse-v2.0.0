import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { RouteChip } from "./route-chip";
import { DistanceIndicator } from "./distance-indicator";
import { HaltIndicator } from "./halt-indicator";
import { ScheduleRow } from "./schedule-row";
import { RouteTimeline } from "./route-timeline";

const meta = {
  title: "Railway/Route",
  component: RouteChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RouteChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {
  args: {
    from: "NDLS",
    to: "MMCT",
  },
};

export const ChipsAndHaltDemo = {
  render: () => (
    <div className="flex gap-3 items-center">
      <RouteChip from="NDLS" to="HWH" />
      <DistanceIndicator distanceKm={1450} />
      <HaltIndicator minutes={10} />
    </div>
  ),
};

export const ScheduleRowDemo = {
  render: () => (
    <div className="w-[450px] border rounded-xl overflow-hidden bg-card">
      <ScheduleRow
        stationCode="NDLS"
        stationName="New Delhi"
        arrivalTime="Start"
        departureTime="16:55"
        distanceKm={0}
      />
      <ScheduleRow
        stationCode="KOTA"
        stationName="Kota Jn"
        arrivalTime="22:10"
        departureTime="22:20"
        haltMinutes={10}
        distanceKm={465}
      />
      <ScheduleRow
        stationCode="RTM"
        stationName="Ratlam Jn"
        arrivalTime="01:55"
        departureTime="02:00"
        haltMinutes={5}
        distanceKm={731}
      />
    </div>
  ),
};

export const TimelineDemo = {
  render: () => (
    <div className="w-[300px]">
      <RouteTimeline
        stops={[
          {
            stationCode: "NDLS",
            stationName: "New Delhi",
            arrivalTime: "Start",
            departureTime: "16:55",
            distanceKm: 0,
          },
          {
            stationCode: "KOTA",
            stationName: "Kota Jn",
            arrivalTime: "22:10",
            departureTime: "22:20",
            distanceKm: 465,
          },
          {
            stationCode: "MMCT",
            stationName: "Mumbai Central",
            arrivalTime: "08:35",
            departureTime: "End",
            distanceKm: 1386,
          },
        ]}
      />
    </div>
  ),
};
