import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { RailwayEmptyState } from "./railway-empty-state";

const meta = {
  title: "Railway/EmptyStates",
  component: RailwayEmptyState,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof RailwayEmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoJourney: Story = { args: { preset: "no-journey" } };
export const NoLiveStatus: Story = { args: { preset: "no-live-status" } };
export const NoSeatData: Story = { args: { preset: "no-seat-data" } };
export const NoFareData: Story = { args: { preset: "no-fare-data" } };
export const NoSearchResults: Story = { args: { preset: "no-search-results" } };
export const NoRecentSearches: Story = { args: { preset: "no-recent-searches" } };

export const WithActionButton: Story = {
  args: {
    preset: "no-live-status",
    children: (
      <button className="px-4 py-2 text-xs bg-primary text-primary-foreground rounded-lg font-bold">
        Refresh
      </button>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    title: "Route Unavailable",
    description: "This route is temporarily suspended. Please check alternative connections.",
    children: (
      <button className="px-4 py-2 text-xs border rounded-lg font-semibold">
        View Alternatives
      </button>
    ),
  },
};
