export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PNR: {
    ROOT: "/pnr",
    STATUS: (id: string) => `/pnr/${id}`,
  },
  TRAINS: {
    ROOT: "/trains",
    DETAILS: (number: string) => `/trains/${number}`,
    LIVE: (number: string) => `/trains/${number}/live`,
  },
  SEAT_AVAILABILITY: "/seat-availability",
  FARE_COMPARISON: "/fare-comparison",
  API: {
    PNR: (id: string) => `/api/pnr/${id}`,
    TRAIN_DETAILS: (number: string) => `/api/trains/${number}`,
    LIVE_STATUS: (number: string) => `/api/trains/${number}/live`,
    SEAT_AVAILABILITY: "/api/seat-availability",
    FARE_COMPARISON: "/api/fare-comparison",
  },
} as const;
