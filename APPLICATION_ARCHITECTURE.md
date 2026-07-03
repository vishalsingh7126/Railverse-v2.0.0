# Application Architecture Guide

This document explains the architectural patterns, component layouts, state management, and configuration models used to build the **Railverse Application Shell**.

---

## ✦ Provider Hierarchy

Railverse uses a single, centralized provider hierarchy to prevent nested wrappers on pages. All global context providers are managed within `RootProvider` (`src/providers/root-provider.tsx`).

```
RootLayout (src/app/layout.tsx)
└── RootProvider (src/providers/root-provider.tsx)
    └── QueryClientProvider (TanStack Query)
        └── ThemeProvider (next-themes)
            └── MotionConfig (framer-motion reduced-motion)
                └── ShellProvider (src/providers/shell-provider.tsx)
                    └── ToastProvider (Radix-based toasts)
                        └── {children}
```

### Context Isolation
1. **`ShellProvider`**: Manages all interactive layout state for the application shell (e.g., sidebar collapse, mobile drawer open/close, command palette toggle, search overlay toggle). It is a client-side provider with no server state.
2. **`ToastProvider`**: Houses toast notification queues.
3. **`NavigationProvider`** is fully deprecated and removed. All sidebar, header, and drawer toggle actions consume `useShell()`.

---

## ✦ Routing Groups & Layout Composition

To separate branding, public workflows, auth gates, and authenticated railway modules, the Next.js App Router is organized into **Route Groups**:

```
src/app/
├── layout.tsx                 # RootLayout – fonts, global CSS, accessibility links
├── (public)/
│   ├── layout.tsx             # PublicLayout – transparent Header, no sidebar
│   └── page.tsx               # Public page placeholder
├── (auth)/
│   ├── layout.tsx             # AuthLayout – centered layout card
│   └── page.tsx               # Auth forms placeholder
└── (app)/
    ├── layout.tsx             # DashboardLayout – AppShell, sidebar, headers
    └── page.tsx               # Shell ready page
```

### Layout Responsibilities
- **`PublicLayout`**: Renders pages with a transparent, sticky glassmorphic `Header` and no side navigation (perfect for landing pages, terms of service, and public schedules).
- **`AuthLayout`**: Renders forms (Login, Signup, Reset Password) inside a premium centered glass card.
- **`DashboardLayout`**: Renders the complete, authenticated authenticated application shell using the `AppShell` layout primitive.

---

## ✦ Centralized Route Configuration

Routing states, paths, and page titles are managed through two centralized configurations:

1. **`ROUTES` (`src/config/ROUTES.ts`)**:
   Defines raw path strings and path-building functions. Used throughout code for `router.push()` or `<Link href={...}>` references.
   ```ts
   export const ROUTES = {
     HOME: '/',
     LOGIN: '/login',
     DASHBOARD: '/dashboard',
     PNR: {
       ROOT: '/pnr',
       STATUS: (id: string) => `/pnr/${id}`,
     }
   } as const;
   ```

2. **`APP_ROUTES` (`src/config/APP_ROUTES.ts`)**:
   Enriches raw paths with page titles and public/private accessibility flags. Used by SEO, document titles, page headers, and breadcrumb mappings.
   ```ts
   export const APP_ROUTES = {
     DASHBOARD: { path: ROUTES.DASHBOARD, title: 'Dashboard', public: false },
     PNR: { path: ROUTES.PNR.ROOT, title: 'PNR Status', public: false },
   } as const;
   ```

---

## ✦ Derived Breadcrumbs & Navigation

Navigation config lives under `src/lib/navigation/`.

- **`navigation-config.ts`**: Defines sidebar category groups (e.g., Intelligence, Tools & Bookings), mobile navigation items, and path-to-breadcrumb mappings.
- **`useBreadcrumbs` hook**: Derived entirely from the current URL pathname.
  - Automatically queries `NAVIGATION_CONFIG.breadcrumbMap`.
  - Dynamically formats dynamic parameters (e.g. `/pnr/4218903254` formats the trailing segment to `'4218903254'`).
  - *No state context or provider is required.*

---

## ✦ Lazy-Loading & Performance Optimization

To achieve fast page loads, large overlay modules are **code-split** and loaded only when triggered:

- **Command Palette (`ShellCommandPalette`)**
- **Search Overlay (`ShellSearchOverlay`)**

They are dynamically imported in `DashboardLayout` via Next.js `dynamic()`:
```tsx
const LazyCommandPalette = dynamic(
  () => import("@/components/shell/shell-command-palette").then((m) => m.ShellCommandPalette),
  { ssr: false }
);
```
They are only fetched and rendered when `state.commandPaletteOpen` or `state.searchOverlayOpen` is true.

---

## ✦ Feature Flags Configuration

We support staged rollouts, beta releases, and environment-based features via `src/config/features.ts`:

```ts
export const FEATURES = {
  COMMAND_PALETTE: true,
  SEARCH_OVERLAY: true,
  NOTIFICATIONS: true,
  AI_ASSISTANT: false,
} as const;
```

Components read from `FEATURES` before registering event listeners, keyboard shortcuts, or rendering buttons, preventing code churn during new features enablement.

---

## ✦ Logo Assets

To align with premium design system guidelines, Railverse uses two logo versions:

1. **Brand Badge Logo** (Circular crest with Vande Bharat train image and tagline): Used for marketing pages, landing headers, README files, launch press kits, and branding.
2. **App Wordmark Logo** (`AppLogo` in `src/components/ui/app-logo.tsx`): A clean, lightweight vector train emblem and "RAILVERSE" text designed for tight application headers (56-64px), sidebars, collapsed layouts, and mobile views. Supports dark/light themes natively.
