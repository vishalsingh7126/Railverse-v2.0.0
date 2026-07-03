import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { StationBadge } from "./station-badge";
import { StationInfoRow } from "./station-info-row";
import { StationMeta } from "./station-meta";
import { StationCard } from "./station-card";
import { StationTimeline } from "./station-timeline";

const meta = {
  title: "Railway/Station",
  component: StationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  render: () => (
    <StationCard
      className="w-[450px]"
      headerSlot={
        <div className="flex items-center gap-2">
          <StationBadge code="NDLS" />
          <span className="font-bold text-sm">New Delhi Railway Station</span>
        </div>
      }
      timelineSlot={
        <StationTimeline
          items={[
            {
              trainNumber: "12952",
              trainName: "Mumbai Rajdhani",
              time: "16:55",
              platform: "3",
              delayStatus: "onTime",
            },
            {
              trainNumber: "12002",
              trainName: "Bhopal Shatabdi",
              time: "06:00",
              platform: "1",
              delayStatus: "delayed",
              delayLabel: "15m delay",
            },
          ]}
        />
      }
      metaSlot={
        <StationMeta
          items={[
            { label: "Zone", value: "NR" },
            { label: "State", value: "Delhi" },
            { label: "Platforms", value: "16" },
          ]}
        />
      }
    />
  ),
};

export const InfoRowDemo = {
  render: () => (
    <div className="w-[400px] space-y-1">
      <StationInfoRow
        stationBadge={<StationBadge code="MMCT" />}
        name="Mumbai Central"
        metaDetails="Zone: WR"
      />
      <StationInfoRow
        stationBadge={<StationBadge code="HWH" />}
        name="Howrah Jn"
        metaDetails="Zone: ER"
      />
    </div>
  ),
};
