import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { SearchSuggestion } from "./search-suggestion";
import { SearchHistoryItem } from "./search-history-item";
import { RecentSearchCard } from "./recent-search-card";
import { FavoriteRouteCard } from "./favorite-route-card";
import { PopularRouteCard } from "./popular-route-card";
import { MapPin } from "lucide-react";

const meta = {
  title: "Railway/Search",
  component: RecentSearchCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof RecentSearchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecentSearchDemo: Story = {
  render: () => (
    <RecentSearchCard className="w-[360px]">
      <SearchHistoryItem query="NDLS → MMCT" timestamp="Today" onClear={() => {}} />
      <SearchHistoryItem query="HWH → NDLS" timestamp="Yesterday" onClear={() => {}} />
      <SearchHistoryItem query="BSB → PUNE" timestamp="2 days ago" onClear={() => {}} />
    </RecentSearchCard>
  ),
};

export const SuggestionsDemo = {
  render: () => (
    <div className="w-[360px] border border-border rounded-xl bg-card p-2 space-y-1">
      <SearchSuggestion
        title="New Delhi (NDLS)"
        subtitle="Delhi • Northern Railway"
        icon={<MapPin className="h-4 w-4 text-primary" />}
      />
      <SearchSuggestion title="New Delhi Jn (NDJ)" subtitle="Delhi • Northern Railway" />
      <SearchSuggestion title="Nizamuddin (NZM)" subtitle="Delhi • Northern Railway" />
    </div>
  ),
};

export const FavoriteRoutesDemo = {
  render: () => (
    <div className="w-[360px] space-y-3">
      <FavoriteRouteCard from="New Delhi" to="Mumbai Central" trainCount={12} />
      <FavoriteRouteCard from="Howrah Jn" to="Bengaluru" trainCount={8} />
    </div>
  ),
};

export const PopularRoutesDemo = {
  render: () => (
    <div className="w-[360px] grid grid-cols-2 gap-3">
      <PopularRouteCard from="NDLS" to="MMCT" trafficVolume="12K" />
      <PopularRouteCard from="HWH" to="NDLS" trafficVolume="9K" />
      <PopularRouteCard from="PUNE" to="BSB" trafficVolume="7K" />
      <PopularRouteCard from="MAS" to="SBC" trafficVolume="6K" />
    </div>
  ),
};
