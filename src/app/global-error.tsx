"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    logger.error("Next.js global layout-level crash caught in global-error", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-black text-white font-sans">
        <div className="max-w-md space-y-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500 animate-pulse">
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
            <h2 className="text-2xl font-bold tracking-tight">Critical App Exception</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A root-level layout crash occurred. The system could not initialize the base HTML wrapper.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-xs font-semibold text-black transition-colors hover:bg-zinc-200 focus-visible:outline-none cursor-pointer"
            >
              Recover Application
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
export type { GlobalErrorProps };
