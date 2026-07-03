"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, AlertTriangle, Loader2, X } from "lucide-react";
import { ToastItem } from "./types";
import { toast } from "./use-toast";
import { cn } from "@/lib/utils";

interface ToastCardProps {
  toast: ToastItem;
}

export function ToastCard({ toast: item }: ToastCardProps) {
  const icon = React.useMemo(() => {
    switch (item.type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-emerald-500" aria-hidden="true" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-amber-500" aria-hidden="true" />;
      case "error":
        return <AlertCircle className="h-5 w-5 text-destructive" aria-hidden="true" />;
      case "loading":
        return <Loader2 className="h-5 w-5 animate-spin text-primary" aria-hidden="true" />;
      default:
        return null;
    }
  }, [item.type]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
      className={cn(
        "flex w-full max-w-sm gap-3 rounded-lg border border-border bg-card p-4 shadow-premium-lg text-card-foreground pointer-events-auto items-start justify-between relative"
      )}
    >
      <div className="flex gap-3">
        {icon && <div className="shrink-0 mt-0.5">{icon}</div>}
        <div className="flex flex-col gap-1 text-left">
          {item.title && (
            <h6 className="text-sm font-semibold leading-none tracking-tight">{item.title}</h6>
          )}
          <p className="text-xs text-muted-foreground leading-normal">{item.message}</p>
        </div>
      </div>

      {item.type !== "loading" && (
        <button
          onClick={() => toast.dismiss(item.id)}
          className="text-muted-foreground/60 hover:text-foreground shrink-0 rounded-md p-0.5 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </motion.div>
  );
}
ToastCard.displayName = "ToastCard";
