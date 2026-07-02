import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { GlassCard } from "./glass-card";
import { CardHeader, CardTitle, CardDescription, CardContent } from "./card";

const meta = {
  title: "Foundations/GlassCard",
  component: GlassCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-12 rounded-xl bg-gradient-to-tr from-slate-950 via-blue-950/20 to-slate-950 border border-border/20 w-[450px] flex items-center justify-center">
      <GlassCard className="w-full">
        <CardHeader>
          <CardTitle>Glassmorphism Card</CardTitle>
          <CardDescription>Acrylic background blur overlay panels</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Perfect for train tracking maps, dashboard overlay metrics, and context dropdown panels
            where backing content should remain partially visible.
          </p>
        </CardContent>
      </GlassCard>
    </div>
  ),
};
