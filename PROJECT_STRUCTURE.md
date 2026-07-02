# Project Structure & Architecture Guide

This document defines the architectural patterns and directory layout of the Railverse v2 repository. All developers must adhere to this structure to ensure scalability, ease of onboarding, and component consistency.

---

## ✦ Overview

Railverse is structured as a modern **Next.js 15 App Router** application with end-to-end type safety in **TypeScript**, styled via **Tailwind CSS v4**, using **shadcn/ui** components built on **Radix UI Primitives**, with transitions handled by **Framer Motion**.

The directory structure is organized as follows:

```
src/
├── app/                  # Next.js App Router (Pages, Layouts, API BFF Layer)
├── components/           # UI Elements (Tailwind + shadcn/ui + Framer Motion)
│   ├── ui/               # Lower-level headless primitives (customized)
│   ├── common/           # App-wide layouts (navbars, grids, footers)
│   └── modules/          # Core feature modules (pnr, live-status, seat, etc.)
├── hooks/                # Reusable stateful and lifecycle hooks
├── lib/                  # Shared utilities, API clients, and helper libraries
├── providers/            # React Context Wrappers (Theme, QueryClient, Radix)
├── store/                # Zustand client state slices
└── types/                # Strict TypeScript declaration types
```

---

## ✦ Directory Responsibilities

### 1. `src/app/` (Routing & BFF)
The App Router handles both server-side layouts/pages and the Backend-for-Frontend (BFF) API routing.

- **Page & Layout Files**:
  - `layout.tsx`: Global wrapper containing root providers, fonts, metadata, and HTML container setup.
  - `page.tsx`: The landing experience (dashboard view of modules).
  - `(modules)/`: Route groups to keep the URL clean. Examples:
    - `pnr/page.tsx`: PNR status tracker screen.
    - `live/page.tsx`: Real-time train tracking dashboard.
    - `seat/page.tsx`: Seat availability lookup matrices.
- **BFF API Routes (`src/app/api/`)**:
  - All external API calls to TravelCore Core APIs must pass through local serverless/edge API routes (e.g., `/api/pnr/[id]/route.ts`).
  - **Responsibilities**:
    - Hide authentication tokens/headers.
    - Clean up payload sizes (strip unused fields).
    - Handle edge caching before returning responses.

### 2. `src/components/` (Component-Driven UI)
To prevent spaghetti code, components are organized by architectural layer:

- **`components/ui/` (Design Tokens / Baselines)**:
  - This folder contains foundational components that do not hold domain logic. Examples: `Button`, `Dialog`, `Input`, `Popover`, `Skeleton`, `Toast`.
  - Driven by **Radix UI Primitives** and styled using Tailwind CSS v4 class utilities.
  - Handled via `shadcn/ui` conventions, heavily customized to fit our premium minimal brand identity.
- **`components/common/` (Global Structural Elements)**:
  - Multi-page structural items like the `Header`, `Footer`, `Sidebar`, and layouts.
- **`components/modules/` (Domain-Specific UI)**:
  - Contains full feature widgets grouped by functional area.
  - Example: `components/modules/pnr/` contains:
    - `pnr-search-bar.tsx`
    - `pnr-status-card.tsx` (using Framer Motion for seat map transitions)
    - `passenger-list-table.tsx`

### 3. `src/hooks/` (State & Action Reuse)
Custom hooks isolate business and side-effect logic from presentation rendering.
- `useLiveLocation.ts`: Polls and interpolates current coordinates for live train tracking.
- `useInterval.ts`: Utility for precise polling ticks.
- `useDebounce.ts`: Limits API calls during search queries.

### 4. `src/lib/` (Singletons & Utilities)
Contains configurations and stateless helpers:
- `api-client.ts`: A configured Axios/fetch instance with timeout values and error interception rules.
- `utils.ts`: Global utilities (e.g., Tailwind CSS class merging helper `cn(...)`).
- `formatters.ts`: Specialized helpers for currency, stop distances, and localized Indian Railway dates.

### 5. `src/providers/` (Context Providers)
Wrappers that control global states or supply hooks. They are marked with `"use client"` and injected at the root layout level.
- `query-provider.tsx`: Hooks up the React Query (TanStack Query) client cache.
- `theme-provider.tsx`: Controls dark-mode toggling.
- `toast-provider.tsx`: Emits accessible error notifications using Radix Toast.

### 6. `src/store/` (Zustand Stores)
Houses client-only, light global state slices:
- `use-ui-store.ts`: Side-panel open/close triggers, search history cache, dashboard layout preferences.
- *Rule*: Never store server state (e.g., train seat availability responses) in Zustand. Use TanStack Query for cache synchronization.

### 7. `src/types/` (Type Declarations)
Strong interfaces representing API schemas and domain models:
- `api.d.ts`: Request/Response formats matching the TravelCore backend APIs.
- `railway.ts`: Domain models (e.g., `TrainDetails`, `Station`, `CoachLayout`, `FareDetails`).

---

## ✦ Core Design Flow

To preserve the visual quality of the application, components follow a strict design path:

```
[Server Endpoint]
       │
       ▼ (Fetch & Cache)
[Next.js BFF API Router]
       │
       ▼ (Clean JSON Payload)
[TanStack Query Hook]
       │
       ▼ (Typed Cache State)
[Module Presentational Component] ──► (Styled via Tailwind CSS v4 & Framer Motion)
```

1. **RSC Pages** fetch static data directly from the BFF or Core endpoints.
2. **Client Modules** load real-time states (e.g. tracking locations) via custom hooks wrapping `useQuery`.
3. **Skeleton Loaders** mirror the final layout structure exactly to prevent layout shifts.
