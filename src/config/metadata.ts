import { Metadata, Viewport } from "next";
import { seoPresets } from "./seo";

export const defaultMetadata: Metadata = {
  title: seoPresets.title,
  description: seoPresets.description,
  keywords: [...seoPresets.keywords],
  authors: [{ name: "TravelCore Technologies Pvt. Ltd." }],
  creator: "TravelCore Technologies",
  publisher: "TravelCore Technologies",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    ...seoPresets.openGraph,
    images: seoPresets.openGraph.images.map((img) => ({
      url: img.url,
      width: img.width,
      height: img.height,
      alt: img.alt,
    })),
  },
  twitter: {
    ...seoPresets.twitter,
    images: [...seoPresets.twitter.images],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const defaultViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
