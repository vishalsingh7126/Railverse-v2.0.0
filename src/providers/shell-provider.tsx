"use client";
import * as React from "react";

export interface ShellState {
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  sidebarPinned: boolean;
  rightSidebarOpen: boolean;
  searchOverlayOpen: boolean;
  commandPaletteOpen: boolean;
}

const defaultState: ShellState = {
  sidebarOpen: true,
  sidebarCollapsed: false,
  sidebarPinned: true,
  rightSidebarOpen: false,
  searchOverlayOpen: false,
  commandPaletteOpen: false,
};

export const ShellContext = React.createContext<ShellState | undefined>(undefined);
export const ShellDispatch = React.createContext<React.Dispatch<Partial<ShellState>> | undefined>(
  undefined
);

export const ShellProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = React.useState<ShellState>(defaultState);
  const setPartial = (partial: Partial<ShellState>) => setState((s) => ({ ...s, ...partial }));

  return (
    <ShellContext.Provider value={state}>
      <ShellDispatch.Provider value={setPartial}>{children}</ShellDispatch.Provider>
    </ShellContext.Provider>
  );
};

export const useShell = () => {
  const ctx = React.useContext(ShellContext);
  const dispatch = React.useContext(ShellDispatch);
  if (!ctx || !dispatch) throw new Error("useShell must be used within ShellProvider");
  return { state: ctx, setState: dispatch };
};
