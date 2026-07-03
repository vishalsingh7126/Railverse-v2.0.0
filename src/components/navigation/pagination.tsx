"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, currentPage, totalPages, onPageChange, siblingCount = 1, ...props }, ref) => {
    const paginationRange = React.useMemo(() => {
      const totalPageNumbers = siblingCount + 5;

      if (totalPageNumbers >= totalPages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

      const firstPageIndex = 1;
      const lastPageIndex = totalPages;

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
        return [...leftRange, "DOTS", totalPages];
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = Array.from(
          { length: rightItemCount },
          (_, i) => totalPages - rightItemCount + i + 1
        );
        return [firstPageIndex, "DOTS", ...rightRange];
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = Array.from(
          { length: rightSiblingIndex - leftSiblingIndex + 1 },
          (_, i) => leftSiblingIndex + i
        );
        return [firstPageIndex, "DOTS", ...middleRange, "DOTS", lastPageIndex];
      }

      return [];
    }, [currentPage, totalPages, siblingCount]);

    if (totalPages <= 1) return null;

    return (
      <nav
        ref={ref}
        aria-label="Pagination Navigation"
        className={cn("flex justify-between items-center", className)}
        {...props}
      >
        <div className="flex sm:hidden justify-between w-full">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-border bg-background text-foreground hover:bg-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>
          <span className="text-xs font-semibold text-muted-foreground flex items-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border border-border bg-background text-foreground hover:bg-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-1.5 mx-auto">
          <button
            type="button"
            aria-label="Go to previous page"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {paginationRange.map((pageNumber, idx) => {
            if (pageNumber === "DOTS") {
              return (
                <span
                  key={idx}
                  className="h-9 w-9 flex items-center justify-center text-muted-foreground text-sm"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </span>
              );
            }

            const page = pageNumber as number;
            const isCurrent = page === currentPage;

            return (
              <button
                key={idx}
                type="button"
                aria-label={`Go to page ${page}`}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => onPageChange(page)}
                className={cn(
                  "h-9 w-9 inline-flex items-center justify-center rounded-md text-sm font-semibold border transition-all cursor-pointer",
                  isCurrent
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-background text-foreground hover:bg-accent"
                )}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            aria-label="Go to next page"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </nav>
    );
  }
);
Pagination.displayName = "Pagination";
