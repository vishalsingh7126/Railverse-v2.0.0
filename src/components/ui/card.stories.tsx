import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta = {
  title: "Foundations/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>New Delhi Express</CardTitle>
        <CardDescription>Scheduled departure timings and halt sequences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Train Number:</span>
            <span className="font-semibold">12002</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Availability Status:</span>
            <span className="font-semibold text-emerald-600">Available</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Book Ticket
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const InteractiveHover: Story = {
  render: () => (
    <Card className="w-[380px]" hoverEffect>
      <CardHeader>
        <CardTitle>Interactive Train Info</CardTitle>
        <CardDescription>Hover to trigger spring lift elevation</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Lifts slightly using physical spring constants to attract user clicks.
        </p>
      </CardContent>
    </Card>
  ),
};
