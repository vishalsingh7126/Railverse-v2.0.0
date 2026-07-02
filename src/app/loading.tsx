export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="flex flex-col items-center gap-4 select-none">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase animate-pulse">
          Syncing Railverse...
        </p>
      </div>
    </div>
  );
}
