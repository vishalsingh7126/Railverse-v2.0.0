import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { Display, Heading, Text, Overline, Caption, Code, Link, Label } from "./typography";

const meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const AllScales: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-3xl p-6 border border-border rounded-lg bg-background">
      {/* Display Scale */}
      <div className="flex flex-col gap-3">
        <Overline>Display Scales</Overline>
        <Display size="lg">Display Large</Display>
        <Display size="md">Display Medium</Display>
        <Display size="sm">Display Small</Display>
      </div>

      <div className="h-[1px] bg-border" />

      {/* Heading Scale */}
      <div className="flex flex-col gap-3">
        <Overline>Heading Levels</Overline>
        <Heading level="h1">Heading 1 (text-3xl)</Heading>
        <Heading level="h2">Heading 2 (text-2xl)</Heading>
        <Heading level="h3">Heading 3 (text-xl)</Heading>
        <Heading level="h4">Heading 4 (text-lg)</Heading>
        <Heading level="h5">Heading 5 (text-base)</Heading>
        <Heading level="h6">Heading 6 (text-sm)</Heading>
      </div>

      <div className="h-[1px] bg-border" />

      {/* Body & Text scale */}
      <div className="flex flex-col gap-3">
        <Overline>Text Variants</Overline>
        <Text variant="lead">
          Lead Text: India&apos;s most modern railway intelligence platform with exceptional UI,
          accessibility, and speed.
        </Text>
        <Text variant="body">
          Body Text: Standard content rendering. Designed with premium line height and spacing for
          effortless readability.
        </Text>
        <Text variant="subtext">
          Subtext: Small detail information, station codes, or status indicators.
        </Text>
      </div>

      <div className="h-[1px] bg-border" />

      {/* inline helpers */}
      <div className="flex flex-col gap-4">
        <Overline>Inline & Helper Primitives</Overline>
        <div className="flex flex-wrap items-center gap-4">
          <Caption>Caption style (text-xs)</Caption>
          <Code>pnr-prediction-v2</Code>
          <Link href="#link">Text Link</Link>
        </div>
        <div className="flex flex-col gap-1.5 max-w-xs">
          <Label htmlFor="mock-input">Accessible Form Label</Label>
          <input
            id="mock-input"
            className="border border-border p-1 text-sm rounded bg-background"
            placeholder="Mock form control"
          />
        </div>
      </div>
    </div>
  ),
};
