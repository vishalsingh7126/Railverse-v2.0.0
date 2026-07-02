export const seoPresets = {
  title: {
    default: "Railverse — Railway Intelligence Platform",
    template: "%s | Railverse",
  },
  description: "India's most modern railway intelligence platform with a world-class UI/UX, fast performance, and a premium user experience.",
  keywords: [
    "Railverse",
    "TravelCore",
    "PNR Status",
    "Train Tracking",
    "Seat Availability",
    "Fare Comparison",
    "Indian Railways",
    "IRCTC PNR",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://railverse.in",
    siteName: "Railverse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Railverse — Railway Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Railverse — Railway Intelligence Platform",
    description: "India's most modern railway intelligence platform with a world-class UI/UX.",
    images: ["/og-image.png"],
    creator: "@travelcore",
  },
} as const;
