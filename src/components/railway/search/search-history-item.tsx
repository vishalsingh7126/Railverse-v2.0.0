"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { History, X } from "lucide-react";

export interface SearchHistoryItemProps extends React.HTMLAttributes<HTMLDivElement> {
  query: string;
  timestamp?: string;
  onClear?: (e: React.MouseEvent) => void;
}

export const SearchHistoryItem = React.forwardRef<HTMLDivElement, SearchHistoryItemProps>(
  ({ className, query, timestamp, onClear, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between gap-3 py-1.5 px-2 hover:bg-muted/10 rounded-lg cursor-pointer text-xs font-semibold text-foreground transition-colors",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 min-w-0">
          <History className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
          <span className="font-bold text-foreground truncate">{query}</span>
          {timestamp && (
            <span className="text-[9px] text-muted-foreground font-medium">• {timestamp}</span>
          )}
        </div>

        {onClear && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClear(e);
            }}
            className="p-1 text-muted-foreground hover:text-foreground rounded transition-colors"
            aria-label="Remove history item"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);
SearchHistoryItem.displayName = "SearchHistoryItem";
