import * as React from "react";
import { Header } from "@/components/navigation/header";
import { AppLogo } from "@/components/ui/app-logo";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        variant="transparent"
        glassmorphism={true}
        sticky={true}
        logo={<AppLogo showText={true} />}
      />
      <main id="main-content" className="flex-1">
        {children}
      </main>
    </div>
  );
}
