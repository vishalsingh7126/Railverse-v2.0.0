import { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { defaultMetadata, defaultViewport } from "@/config/metadata";
import { RootProvider } from "@/providers/root-provider";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
