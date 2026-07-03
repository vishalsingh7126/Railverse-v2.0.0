"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface SearchSuggestionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const SearchSuggestion = React.forwardRef<HTMLDivElement, SearchSuggestionProps>(
  (
    {
      className,
      title,
      subtitle,
      icon = <Search className="h-4 w-4 text-muted-foreground" />,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 py-2 px-3 hover:bg-muted/10 rounded-lg cursor-pointer text-xs font-semibold text-foreground transition-colors",
          className
        )}
        {...props}
      >
        {icon && <div className="shrink-0">{icon}</div>}
        <div className="flex flex-col min-w-0">
          <span className="font-bold text-foreground truncate">{title}</span>
          {subtitle && (
            <span className="text-[10px] text-muted-foreground truncate">{subtitle}</span>
          )}
        </div>
      </div>
    );
  }
);
SearchSuggestion.displayName = "SearchSuggestion";
