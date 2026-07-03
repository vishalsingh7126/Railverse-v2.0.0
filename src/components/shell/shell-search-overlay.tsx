"use client";

import * as React from "react";
import { useShell } from "@/providers/shell-provider";
import { SearchOverlay } from "@/components/navigation/search-overlay";
import { SearchSuggestion } from "@/components/railway/search/search-suggestion";
import { SearchHistoryItem } from "@/components/railway/search/search-history-item";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/ROUTES";

export function ShellSearchOverlay() {
  const { state, setState } = useShell();
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const [history, setHistory] = React.useState([
    { query: "12002 Shatabdi Exp", timestamp: "10 mins ago" },
    { query: "Mumbai CSMT to New Delhi", timestamp: "1 hr ago" },
    { query: "PNR 4218903254", timestamp: "Yesterday" },
  ]);

  const handleOpenChange = (open: boolean) => {
    setState({ searchOverlayOpen: open });
  };

  const navigateTo = (path: string) => {
    handleOpenChange(false);
    router.push(path);
  };

  const clearHistoryItem = (index: number) => {
    setHistory((prev) => prev.filter((_, idx) => idx !== index));
  };

  const filteredSuggestions = [
    {
      title: "PNR Inquiry",
      subtitle: "Verify passenger status & seat alignment",
      path: ROUTES.PNR.ROOT,
    },
    {
      title: "Live Status Tracker",
      subtitle: "Real-time train running status & GPS tracking",
      path: ROUTES.TRAINS.ROOT,
    },
    {
      title: "Fare Analysis tool",
      subtitle: "Compare budget vs premium class railway pricing",
      path: ROUTES.FARE_COMPARISON,
    },
    {
      title: "Seat Matrix",
      subtitle: "Visualize availability maps across all coach variants",
      path: ROUTES.SEAT_AVAILABILITY,
    },
  ].filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SearchOverlay
      isOpen={state.searchOverlayOpen}
      onOpenChange={handleOpenChange}
      inputSlot={
        <div className="relative w-full flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search trains, stations, PNRs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-transparent text-sm text-foreground focus:outline-none placeholder:text-muted-foreground"
            autoFocus
          />
        </div>
      }
      resultsSlot={
        <div className="space-y-4 p-4">
          {history.length > 0 && !query && (
            <div>
              <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Recent Searches
              </h4>
              <div className="space-y-1">
                {history.map((item, idx) => (
                  <SearchHistoryItem
                    key={idx}
                    query={item.query}
                    timestamp={item.timestamp}
                    onClear={(e) => {
                      e.stopPropagation();
                      clearHistoryItem(idx);
                    }}
                    onClick={() => {
                      setQuery(item.query);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
              {query ? "Suggestions" : "Quick Links"}
            </h4>
            <div className="space-y-1">
              {filteredSuggestions.map((item, idx) => (
                <SearchSuggestion
                  key={idx}
                  title={item.title}
                  subtitle={item.subtitle}
                  onClick={() => navigateTo(item.path)}
                />
              ))}
              {filteredSuggestions.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">
                  No results matching &quot;{query}&quot;
                </p>
              )}
            </div>
          </div>
        </div>
      }
    />
  );
}
