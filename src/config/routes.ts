export const routes = {
  home: "/",
  pnr: {
    root: "/pnr",
    status: (id: string) => `/pnr/${id}`,
  },
  trains: {
    root: "/trains",
    details: (number: string) => `/trains/${number}`,
    live: (number: string) => `/trains/${number}/live`,
  },
  seatAvailability: {
    root: "/seat-availability",
  },
  fareComparison: {
    root: "/fare-comparison",
  },
  api: {
    pnr: (id: string) => `/api/pnr/${id}`,
    trainDetails: (number: string) => `/api/trains/${number}`,
    liveStatus: (number: string) => `/api/trains/${number}/live`,
    seatAvailability: "/api/seat-availability",
    fareComparison: "/api/fare-comparison",
  },
} as const;
