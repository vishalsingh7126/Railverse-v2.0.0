"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { ChevronDown, Search, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ComboboxOption {
  value: string;
  label: string;
  [key: string]: unknown; // Allows generic typing values
}

export interface ComboboxProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: ComboboxOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyState?: React.ReactNode;
  onSearchChange?: (search: string) => void;
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      options,
      placeholder = "Select option...",
      searchPlaceholder = "Search...",
      emptyState = "No results found.",
      onSearchChange,
      loading = false,
      disabled = false,
      error = false,
      helperText,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue || "");
    const [searchTerm, setSearchTerm] = React.useState("");

    const isControlled = value !== undefined;
    const activeValue = isControlled ? value : uncontrolledValue;

    const selectedOption = options.find((opt) => opt.value === activeValue);

    // Track active item index for keyboard traversal list
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleSelect = (val: string) => {
      if (!isControlled) {
        setUncontrolledValue(val);
      }
      onChange?.(val);
      setOpen(false);
      setSearchTerm("");
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setSearchTerm(val);
      onSearchChange?.(val);
      setActiveIndex(0);
    };

    // Filter options locally if no external onSearchChange handler is supplied
    const filteredOptions = React.useMemo(() => {
      if (onSearchChange) return options;
      return options.filter((opt) => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [options, searchTerm, onSearchChange]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % Math.max(1, filteredOptions.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex(
          (prev) => (prev - 1 + filteredOptions.length) % Math.max(1, filteredOptions.length)
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredOptions[activeIndex]) {
          handleSelect(filteredOptions[activeIndex].value);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <PopoverPrimitive.Root open={open && !disabled} onOpenChange={setOpen}>
          <PopoverPrimitive.Trigger asChild>
            <button
              ref={ref}
              disabled={disabled}
              className={cn(
                "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer text-left [&>span]:line-clamp-1",
                error && "border-destructive focus:ring-destructive",
                className
              )}
            >
              <span className={cn(!selectedOption && "text-muted-foreground")}>
                {selectedOption ? selectedOption.label : placeholder}
              </span>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </PopoverPrimitive.Trigger>

          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              className={cn(
                "z-50 w-[var(--radix-popover-trigger-width)] min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 p-1"
              )}
              onKeyDown={handleKeyDown}
            >
              <div className="flex items-center border-b border-border/60 px-3 py-2 gap-2">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder={searchPlaceholder}
                  className="h-7 w-full bg-transparent text-sm focus:outline-none text-foreground placeholder:text-muted-foreground"
                  autoFocus
                />
              </div>

              <div className="max-h-52 overflow-y-auto mt-1 flex flex-col gap-0.5">
                {loading && (
                  <div className="flex items-center justify-center py-6 text-sm text-muted-foreground gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    <span>Searching...</span>
                  </div>
                )}

                {!loading && filteredOptions.length === 0 && (
                  <div className="py-6 text-center text-sm text-muted-foreground">{emptyState}</div>
                )}

                {!loading &&
                  filteredOptions.map((option, idx) => {
                    const isSelected = activeValue === option.value;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleSelect(option.value)}
                        className={cn(
                          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none text-left transition-colors",
                          isActive ? "bg-accent text-accent-foreground" : "text-foreground",
                          isSelected && "font-semibold"
                        )}
                      >
                        {isSelected && (
                          <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                            <Check className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )}
                        {option.label}
                      </button>
                    );
                  })}
              </div>
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
        {helperText && (
          <span
            className={cn(
              "text-xs leading-none text-muted-foreground",
              error && "text-destructive"
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);
Combobox.displayName = "Combobox";
