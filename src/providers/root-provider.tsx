"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

// Helper to construct a QueryClient with resilient fetch/retry policies
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000, // 30 seconds default stale time
        refetchOnWindowFocus: false, // Avoid excessive network polling on tab focus
        retry: 1,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === "undefined") {
    // Server-side: Always create a new query client instance
    return makeQueryClient();
  } else {
    // Client-side: Reuse singleton browser client instance
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

interface RootProviderProps {
  children: React.ReactNode;
}

export function RootProvider({ children }: RootProviderProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MotionConfig
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
            mass: 0.8,
          }}
        >
          {children}
        </MotionConfig>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
