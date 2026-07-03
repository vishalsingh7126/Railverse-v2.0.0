import * as React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center bg-background p-6"
    >
      <div className="w-full max-w-md space-y-6 rounded-lg border border-border bg-card p-8 shadow-premium-lg">
        {children}
      </div>
    </main>
  );
}
