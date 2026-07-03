import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { TrainNumberBadge } from "./train-number-badge";
import { TrainTypeBadge } from "./train-type-badge";
import { TrainStatusBadge } from "./train-status-badge";
import { TrainMeta } from "./train-meta";
import { TrainStatCard } from "./train-stat-card";
import { TrainInfoRow } from "./train-info-row";
import { TrainCard } from "./train-card";
import { TrainHero } from "./train-hero";

const meta = {
  title: "Railway/Train",
  component: TrainCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TrainCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  render: () => (
    <TrainCard
      className="w-[450px]"
      headerSlot={
        <div className="flex items-center gap-2">
          <TrainNumberBadge number="12951" />
          <span className="font-bold text-sm">Mumbai Rajdhani</span>
          <TrainTypeBadge type="rajdhani" />
        </div>
      }
      routeSlot={
        <div className="text-xs text-muted-foreground font-semibold flex justify-between">
          <span>NDLS (16:55)</span>
          <span>➜</span>
          <span>MMCT (08:35)</span>
        </div>
      }
      metaSlot={
        <TrainMeta
          items={[
            { label: "Runs On", value: "Daily" },
            { label: "Classes", value: "1A, 2A, 3A" },
          ]}
        />
      }
      actionsSlot={<TrainStatusBadge status="onTime" />}
    />
  ),
};

export const HeroBanner = {
  render: () => (
    <TrainHero
      className="w-[600px]"
      numberBadge={<TrainNumberBadge number="22436" />}
      typeBadge={<TrainTypeBadge type="vandeBharat" />}
      name="New Delhi - Varanasi Vande Bharat Express"
      routeSummary="New Delhi (NDLS) to Varanasi Jn (BSB) • 755 km • 8h 0m"
      statsSlot={
        <>
          <TrainStatCard title="Punctuality" value="98%" description="On-time arrivals" />
          <TrainStatCard title="Avg Delay" value="5m" description="Very clean record" />
          <TrainStatCard title="Clean Index" value="4.9/5" description="Top rated hygiene" />
          <TrainStatCard title="Frequency" value="6 days/wk" description="Except Wednesday" />
        </>
      }
    />
  ),
};

export const InfoRowDemo = {
  render: () => (
    <div className="w-[450px] space-y-2">
      <TrainInfoRow
        numberBadge={<TrainNumberBadge number="12002" />}
        name="Bhopal Shatabdi"
        typeBadge={<TrainTypeBadge type="shatabdi" />}
        schedule="NDLS ➜ RKMP • 06:00"
      />
      <TrainInfoRow
        numberBadge={<TrainNumberBadge number="12260" />}
        name="Howrah Duronto"
        typeBadge={<TrainTypeBadge type="duronto" />}
        schedule="NDLS ➜ HWH • 12:20"
      />
    </div>
  ),
};
