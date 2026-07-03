import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { axe } from "jest-axe";
import { SearchSuggestion } from "./search-suggestion";
import { SearchHistoryItem } from "./search-history-item";
import { RecentSearchCard } from "./recent-search-card";
import { FavoriteRouteCard } from "./favorite-route-card";
import { PopularRouteCard } from "./popular-route-card";

describe("Search Domain Components", () => {
  it("should render SearchSuggestion correctly", () => {
    render(<SearchSuggestion title="New Delhi (NDLS)" subtitle="Northern Railway" />);
    expect(screen.getByText("New Delhi (NDLS)")).toBeInTheDocument();
    expect(screen.getByText("Northern Railway")).toBeInTheDocument();
  });

  it("should render SearchHistoryItem correctly", () => {
    render(<SearchHistoryItem query="NDLS → MMCT" timestamp="Today" />);
    expect(screen.getByText("NDLS → MMCT")).toBeInTheDocument();
    expect(screen.getByText("• Today")).toBeInTheDocument();
  });

  it("should call onClear when X button is clicked", () => {
    const onClear = vi.fn();
    render(<SearchHistoryItem query="NDLS → MMCT" onClear={onClear} />);
    screen.getByRole("button", { name: /remove history item/i }).click();
    expect(onClear).toHaveBeenCalled();
  });

  it("should render RecentSearchCard correctly", () => {
    render(
      <RecentSearchCard title="My History">
        <div>Item</div>
      </RecentSearchCard>
    );
    // CSS text-transform uppercase: DOM text is original casing
    expect(screen.getByText("My History")).toBeInTheDocument();
    expect(screen.getByText("Item")).toBeInTheDocument();
  });

  it("should render FavoriteRouteCard correctly", () => {
    render(<FavoriteRouteCard from="NDLS" to="MMCT" trainCount={12} />);
    expect(screen.getByText("NDLS")).toBeInTheDocument();
    expect(screen.getByText("MMCT")).toBeInTheDocument();
    expect(screen.getByText("12 Trains")).toBeInTheDocument();
  });

  it("should render PopularRouteCard correctly", () => {
    render(<PopularRouteCard from="NDLS" to="HWH" trafficVolume="9K" />);
    expect(screen.getByText("NDLS ➜ HWH")).toBeInTheDocument();
    expect(screen.getByText("9K Daily Searches")).toBeInTheDocument();
  });

  it("should have no accessibility violations on RecentSearchCard", async () => {
    const { container } = render(
      <RecentSearchCard>
        <SearchHistoryItem query="NDLS → MMCT" />
      </RecentSearchCard>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
