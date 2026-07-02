import { create } from "zustand";

interface UiState {
  sidebarOpen: boolean;
  searchHistory: string[];
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  addSearchHistory: (pnrOrTrain: string) => void;
  clearSearchHistory: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  sidebarOpen: false,
  searchHistory: [],
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  addSearchHistory: (item) =>
    set((state) => {
      // Keep only unique items and limit search history to 5 items
      const nextHistory = [item, ...state.searchHistory.filter((i) => i !== item)].slice(0, 5);
      return { searchHistory: nextHistory };
    }),
  clearSearchHistory: () => set({ searchHistory: [] }),
}));
