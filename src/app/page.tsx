import { appConfig } from "@/config/app";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-lg space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          {appConfig.name} {appConfig.apiVersion} Foundation Active
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Railverse v2.0.0
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          The engineering architecture for Railverse is fully configured. The environment supports strict TypeScript checking, Tailwind CSS v4 design systems, Zustand state, TanStack query caching, and Framer Motion spring presets.
        </p>
      </div>
    </main>
  );
}
