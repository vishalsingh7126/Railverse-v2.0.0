import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { FareChip } from "./fare-chip";
import { PriceDifferenceBadge } from "./price-difference-badge";
import { FareCard } from "./fare-card";
import { FareComparisonCard } from "./fare-comparison-card";
import { FareBreakdown } from "./fare-breakdown";

const meta = {
  title: "Railway/Fare",
  component: FareCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FareCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    tierName: "AC 3 Tier (3A)",
    price: 1250,
    description: "Includes catering & bedroll services",
    isSelected: false,
  },
};

export const SelectedCard: Story = {
  args: {
    tierName: "AC First Class (1A)",
    price: 3450,
    description: "Coupe/Cabin layout, premium catering",
    isSelected: true,
  },
};

export const ChipsDemo = {
  render: () => (
    <div className="flex gap-3 items-center">
      <FareChip amount={650} />
      <PriceDifferenceBadge difference={-120} />
      <PriceDifferenceBadge difference={45} />
    </div>
  ),
};

export const ComparisonDemo = {
  render: () => (
    <FareComparisonCard
      className="w-[400px]"
      items={[
        {
          tierName: "AC 3 Tier (3A)",
          price: 1250,
          difference: -2200,
          availabilityStatus: "Available 45",
        },
        { tierName: "AC 2 Tier (2A)", price: 2150, difference: -1300, availabilityStatus: "RAC 5" },
        { tierName: "AC First Class (1A)", price: 3450, difference: 0, availabilityStatus: "WL 2" },
      ]}
    />
  ),
};

export const BreakdownDemo = {
  render: () => (
    <FareBreakdown
      className="w-[350px]"
      breakdown={[
        { label: "Base Fare", amount: 1050 },
        { label: "Superfast Charge", amount: 45 },
        { label: "Reservation Fee", amount: 40 },
        { label: "GST (5%)", amount: 65 },
      ]}
      total={1200}
    />
  ),
};
