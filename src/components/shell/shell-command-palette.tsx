"use client";

import * as React from "react";
import { useShell } from "@/providers/shell-provider";
import {
  CommandPalette,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
} from "@/components/navigation/command-palette";
import { Train, Search, Settings, Calendar, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/ROUTES";

export function ShellCommandPalette() {
  const { state, setState } = useShell();
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      setState({ commandPaletteOpen: open });
    },
    [setState]
  );

  const navigateTo = (path: string) => {
    handleOpenChange(false);
    router.push(path);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && state.commandPaletteOpen) {
        handleOpenChange(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.commandPaletteOpen, handleOpenChange]);

  return (
    <CommandPalette isOpen={state.commandPaletteOpen} onOpenChange={handleOpenChange}>
      <CommandPaletteInput
        placeholder="Type a command or search..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandPaletteList>
        <CommandPaletteGroup heading="Intelligence Modules">
          <CommandPaletteItem onClick={() => navigateTo(ROUTES.DASHBOARD)}>
            <Settings className="h-4 w-4 mr-2" />
            <span>Go to Dashboard</span>
          </CommandPaletteItem>
          <CommandPaletteItem onClick={() => navigateTo(ROUTES.PNR.ROOT)}>
            <Search className="h-4 w-4 mr-2" />
            <span>Verify PNR Code</span>
          </CommandPaletteItem>
          <CommandPaletteItem onClick={() => navigateTo(ROUTES.TRAINS.ROOT)}>
            <Train className="h-4 w-4 mr-2" />
            <span>Live Train Search</span>
          </CommandPaletteItem>
        </CommandPaletteGroup>

        <CommandPaletteGroup heading="Bookings & Tools">
          <CommandPaletteItem onClick={() => navigateTo(ROUTES.SEAT_AVAILABILITY)}>
            <Calendar className="h-4 w-4 mr-2" />
            <span>Check Seat Availability</span>
          </CommandPaletteItem>
          <CommandPaletteItem onClick={() => navigateTo(ROUTES.FARE_COMPARISON)}>
            <CreditCard className="h-4 w-4 mr-2" />
            <span>Compare Fares</span>
          </CommandPaletteItem>
        </CommandPaletteGroup>
      </CommandPaletteList>
    </CommandPalette>
  );
}
