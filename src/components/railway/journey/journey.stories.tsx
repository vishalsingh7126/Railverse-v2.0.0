import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { JourneyCard } from "./journey-card";
import { JourneyHero } from "./journey-hero";
import { JourneySummary } from "./journey-summary";
import { JourneyProgress } from "./journey-progress";
import { JourneyTimeline } from "./journey-timeline";
import { Clock, Navigation, MapPin } from "lucide-react";

const meta = {
  title: "Railway/Journey",
  component: JourneyCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JourneyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardOnTime: Story = {
  args: {
    source: "NDLS",
    destination: "MMCT",
    date: "Fri, 4 Jul",
    duration: "16h 10m",
    status: "onTime",
    actions: (
      <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">
        View details
      </button>
    ),
  },
};

export const CardDelayed: Story = {
  args: {
    source: "HWH",
    destination: "NDLS",
    date: "Fri, 4 Jul",
    duration: "17h 30m",
    status: "delayed",
    actions: (
      <button className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md">
        View details
      </button>
    ),
  },
};

export const SummaryView = {
  render: () => (
    <JourneySummary
      items={[
        { label: "Train Number", value: "12952", icon: <Navigation className="h-4 w-4" /> },
        { label: "Journey Date", value: "04 Jul 2026", icon: <Clock className="h-4 w-4" /> },
        { label: "Halt Count", value: "7 Stops", icon: <MapPin className="h-4 w-4" /> },
      ]}
    />
  ),
};

export const ProgressIndicator = {
  render: () => (
    <JourneyProgress
      percentage={65}
      currentStation="Ratlam Jn (RTM)"
      delayStatus="onTime"
      eta="08:35 AM"
    />
  ),
};

export const TimelineView = {
  render: () => (
    <JourneyTimeline
      stops={[
        { name: "New Delhi (NDLS)", time: "16:55", status: "completed", platform: "3" },
        { name: "Kota Jn (KOTA)", time: "22:15", status: "completed", platform: "1" },
        {
          name: "Ratlam Jn (RTM)",
          time: "02:00",
          status: "current",
          platform: "4",
          delayMinutes: 10,
        },
        { name: "Vadodara Jn (BRC)", time: "04:50", status: "upcoming", platform: "2" },
        { name: "Mumbai Central (MMCT)", time: "08:35", status: "upcoming", platform: "5" },
      ]}
    />
  ),
};

export const HeroDashboard = {
  render: () => (
    <JourneyHero
      className="w-[600px]"
      trainInfo={<span className="text-xs font-bold text-primary">12952 • Mumbai Rajdhani</span>}
      currentStatus="Approaching Ratlam Jn (RTM)"
      eta="ETA: 08:35 AM • Running 10 mins late"
      progressSlot={
        <JourneyProgress
          percentage={60}
          currentStation="Kota Jn"
          delayStatus="delayed"
          eta="08:45 AM"
        />
      }
      metadata={
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block text-[10px] uppercase font-bold text-muted-foreground">
              Source
            </span>
            <span className="text-sm font-semibold">New Delhi (NDLS)</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-bold text-muted-foreground">
              Destination
            </span>
            <span className="text-sm font-semibold">Mumbai Central (MMCT)</span>
          </div>
        </div>
      }
      primaryCta={
        <button className="px-4 py-2 text-xs bg-primary text-primary-foreground rounded-lg font-bold">
          Track Live
        </button>
      }
      secondaryCta={
        <button className="px-4 py-2 text-xs border rounded-lg font-bold">Share Status</button>
      }
    />
  ),
};
