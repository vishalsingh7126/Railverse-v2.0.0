import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import {
  CommandPalette,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
} from "./command-palette";
import { Train, Search, Settings } from "lucide-react";

const meta = {
  title: "Navigation/CommandPalette",
  component: CommandPalette,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onOpenChange: () => {},
    children: (
      <>
        <CommandPaletteInput placeholder="Search trains, settings..." />
        <CommandPaletteList>
          <CommandPaletteGroup heading="Suggestions">
            <CommandPaletteItem active>
              <Train className="h-4 w-4 mr-2" />
              <span>Live Train Status</span>
            </CommandPaletteItem>
            <CommandPaletteItem>
              <Search className="h-4 w-4 mr-2" />
              <span>Verify PNR Code</span>
            </CommandPaletteItem>
          </CommandPaletteGroup>
          <CommandPaletteGroup heading="Account">
            <CommandPaletteItem>
              <Settings className="h-4 w-4 mr-2" />
              <span>User Profile Settings</span>
            </CommandPaletteItem>
          </CommandPaletteGroup>
        </CommandPaletteList>
      </>
    ),
  },
};
