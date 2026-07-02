import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center select-none">
      <div className="max-w-md space-y-6">
        <h2 className="text-6xl font-extrabold tracking-tight text-muted-foreground/30">404</h2>
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight">Location Not Found</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The route you requested does not exist or may have moved to a different coordinate.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/95 focus-visible:outline-none cursor-pointer"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
