import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ScrollArea } from "./scroll-area";

const meta = {
  title: "Layout/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[300px] rounded-md border border-border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold leading-none">IRCTC Booking Guidelines</h4>
        {Array.from({ length: 10 }).map((_, i) => (
          <p key={i} className="text-xs text-muted-foreground leading-normal">
            Passenger booking details for ticket reservation under premium quota. Ensure that
            details match valid ID proofs.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea
      orientation="horizontal"
      className="w-[300px] rounded-md border border-border p-4 whitespace-nowrap"
    >
      <div className="flex gap-4 p-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="h-16 w-24 shrink-0 rounded bg-accent flex items-center justify-center text-xs font-semibold"
          >
            Station {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
