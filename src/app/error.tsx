"use client";

import { useEffect } from "react";
import Link from "next/link";
import { logger } from "@/lib/logger";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    logger.error("Next.js runtime error caught in boundary", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center select-none">
      <div className="max-w-md space-y-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">System Exception</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            An unexpected error occurred during execution. The team has been notified.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/95 focus-visible:outline-none cursor-pointer"
          >
            Retry Request
          </button>
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-xs font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none cursor-pointer"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
export type { ErrorProps };
