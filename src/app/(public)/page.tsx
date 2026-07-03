import * as React from "react";

export default function PublicPage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center select-none py-20">
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Railverse Public Page
        </h1>
        <p className="text-sm text-muted-foreground">
          This is a placeholder public page. Future marketing and landing pages will be integrated
          here.
        </p>
      </div>
    </div>
  );
}
