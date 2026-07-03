"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ScheduleTableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  stationCode: string;
  stationName: string;
  arrivalTime: string;
  departureTime: string;
  haltMinutes?: number;
  distanceKm?: number;
  day: number;
}

export const ScheduleTableRow = React.forwardRef<HTMLTableRowElement, ScheduleTableRowProps>(
  (
    {
      className,
      stationCode,
      stationName,
      arrivalTime,
      departureTime,
      haltMinutes,
      distanceKm,
      day,
      ...props
    },
    ref
  ) => {
    return (
      <tr
        ref={ref}
        className={cn(
          "border-b border-border/50 hover:bg-muted/10 transition-colors text-xs font-semibold text-foreground",
          className
        )}
        {...props}
      >
        <td className="p-3 font-mono text-[10px] font-bold text-muted-foreground">{stationCode}</td>
        <td className="p-3 text-foreground font-bold">{stationName}</td>
        <td className="p-3">{arrivalTime}</td>
        <td className="p-3">{departureTime}</td>
        <td className="p-3 text-muted-foreground">{haltMinutes ? `${haltMinutes}m` : "-"}</td>
        <td className="p-3 text-muted-foreground">{distanceKm ? `${distanceKm} km` : "-"}</td>
        <td className="p-3 text-muted-foreground">Day {day}</td>
      </tr>
    );
  }
);
ScheduleTableRow.displayName = "ScheduleTableRow";
