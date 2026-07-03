"use client";

import * as React from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

interface CustomChevronProps extends React.SVGProps<SVGSVGElement> {
  orientation?: "up" | "down" | "left" | "right";
}

function MyCustomChevron({ orientation, className, ...props }: CustomChevronProps) {
  if (orientation === "left") {
    return <ChevronLeft className={cn("h-4 w-4", className)} {...props} />;
  }
  if (orientation === "right") {
    return <ChevronRight className={cn("h-4 w-4", className)} {...props} />;
  }
  return <span />;
}

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-popover rounded-md border border-border shadow-premium-md", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-between pt-1 items-center relative px-8",
        caption_label: "text-sm font-semibold text-foreground",
        nav: "flex items-center",
        button_previous: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer absolute left-1"
        ),
        button_next: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer absolute right-1"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex w-full justify-between mt-2",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center",
        week: "flex w-full mt-2 justify-between",
        day: "h-9 w-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
        day_button: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent rounded-md flex items-center justify-center cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground"
        ),
        range_end: "day-range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground font-semibold",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-30 cursor-not-allowed",
        range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground rounded-none",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: MyCustomChevron,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export interface DatePickerProps {
  value?: Date | DateRange;
  onChange?: (date: Date | DateRange | undefined) => void;
  mode?: "single" | "range";
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
}

export const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      mode = "single",
      placeholder = "Pick a date",
      disabled = false,
      error = false,
      helperText,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);

    const displayString = React.useMemo(() => {
      if (!value) return "";
      if (mode === "single" && value instanceof Date) {
        return format(value, "PPP");
      }
      if (mode === "range" && typeof value === "object" && !(value instanceof Date)) {
        const range = value as { from?: Date; to?: Date };
        if (range.from && range.to) {
          return `${format(range.from, "LLL dd, y")} - ${format(range.to, "LLL dd, y")}`;
        }
        if (range.from) {
          return format(range.from, "LLL dd, y");
        }
      }
      return "";
    }, [value, mode]);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <PopoverPrimitive.Root open={open && !disabled} onOpenChange={setOpen}>
          <PopoverPrimitive.Trigger asChild>
            <button
              ref={ref}
              disabled={disabled}
              className={cn(
                "flex h-10 w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all cursor-pointer text-left [&>span]:line-clamp-1",
                !value && "text-muted-foreground",
                error && "border-destructive focus:ring-destructive",
                className
              )}
            >
              <CalendarIcon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="truncate">{displayString || placeholder}</span>
            </button>
          </PopoverPrimitive.Trigger>

          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
              align="start"
              className={cn(
                "z-50 w-auto overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-premium-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 p-0"
              )}
              sideOffset={4}
            >
              {mode === "single" ? (
                <Calendar
                  mode="single"
                  selected={value as Date | undefined}
                  onSelect={(val) => {
                    onChange?.(val);
                    setOpen(false);
                  }}
                  disabled={disabled}
                />
              ) : (
                <Calendar
                  mode="range"
                  selected={value as DateRange | undefined}
                  onSelect={(val) => {
                    onChange?.(val);
                  }}
                  disabled={disabled}
                />
              )}
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
DatePicker.displayName = "DatePicker";
