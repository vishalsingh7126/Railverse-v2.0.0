import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { EmptyState } from "./empty-state";
import { Train, Search } from "lucide-react";
import { Button } from "./button";

const meta = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Search className="h-6 w-6" />,
    title: "No Trains Found",
    description: "We couldn't find any direct trains matching your origin, destination, or date.",
    action: <Button variant="outline">Modify Journey Search</Button>,
  },
};

export const ComposedWithChildren: Story = {
  render: () => (
    <EmptyState
      icon={<Train className="h-6 w-6" />}
      title="No Live Journeys Active"
      description="You don't have any tickets booked for travel today."
    >
      <div className="mt-2 flex gap-2">
        <Button size="sm">Search Trains</Button>
        <Button size="sm" variant="ghost">
          View PNR History
        </Button>
      </div>
    </EmptyState>
  ),
};

export const WithCustomIllustration: Story = {
  args: {
    title: "Travel History Clear",
    description: "Once you complete booking trips, your journeys list will compile here.",
    illustration: (
      <div className="relative h-24 w-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 rounded-md border border-indigo-500/10 flex items-center justify-center">
        <span className="text-xs font-semibold text-indigo-500">Journey Records empty</span>
      </div>
    ),
  },
};

export const RTLCheck: Story = {
  render: () => (
    <div dir="rtl" className="w-[350px]">
      <EmptyState
        icon={<Search className="h-6 w-6" />}
        title="لم يتم العثور على رحلات"
        description="يرجى تعديل محطة المغادرة أو تاريخ السفر للبحث مرة أخرى."
        action={<Button size="sm">تعديل البحث</Button>}
      />
    </div>
  ),
};
