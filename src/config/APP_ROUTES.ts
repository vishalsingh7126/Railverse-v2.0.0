import { ROUTES } from "./ROUTES";

export interface RouteMetadata {
  path: string;
  title: string;
  public: boolean;
}

export const APP_ROUTES = {
  HOME: { path: ROUTES.HOME, title: "Home", public: true },
  LOGIN: { path: ROUTES.LOGIN, title: "Login", public: true },
  DASHBOARD: { path: ROUTES.DASHBOARD, title: "Dashboard", public: false },
  PNR: { path: ROUTES.PNR.ROOT, title: "PNR Status", public: false },
  TRAINS: { path: ROUTES.TRAINS.ROOT, title: "Trains Search", public: false },
  SEAT_AVAILABILITY: { path: ROUTES.SEAT_AVAILABILITY, title: "Seat Availability", public: false },
  FARE_COMPARISON: { path: ROUTES.FARE_COMPARISON, title: "Fare Comparison", public: false },
} as const;
