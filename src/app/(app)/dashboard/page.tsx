import * as React from "react";

export default function DashboardPage() {
  return (
    <section className="flex flex-col items-center justify-center p-8 text-center max-w-lg mx-auto py-20 select-none animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Application Shell Ready
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Railverse application shell has been successfully initialized. This screen validates
          that header actions, sidebar navigation, mobile viewports, theme preferences, and global
          search services are fully active. Future railway modules will render here.
        </p>
      </div>
    </section>
  );
}
