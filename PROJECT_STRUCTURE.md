# Project Structure & Architecture Guide

This document defines the architectural patterns and directory layout of the Railverse v2 repository. All developers must adhere to this structure to ensure scalability, ease of onboarding, and component consistency.

---

## ✦ Overview

Railverse is structured as a modern **Next.js 15 App Router** application with end-to-end type safety in **TypeScript**, styled via **Tailwind CSS v4**, using **shadcn/ui** components built on **Radix UI Primitives**, with transitions handled by **Framer Motion**.

The directory structure is organized as follows:

```
src/
├── app/                  # Next.js App Router (Pages, Layouts, API BFF Layer)
│   ├── (public)/         # Transparent layout, marketing & landing pages
│   ├── (auth)/           # Center-card layout, login & sign-up gates
│   └── (app)/            # AppShell layout, authenticated railway modules
├── components/           # UI Elements (Tailwind + shadcn/ui + Framer Motion)
│   ├── ui/               # Lower-level headless primitives (customized)
│   ├── navigation/       # Navigation-specific components (Header, Sidebar, etc.)
│   ├── layout/           # Page layout containers (AppShell, ContentGrid, etc.)
│   ├── shell/            # Assembled Shell wrappers (ShellHeader, ShellSidebar, etc.)
│   └── railway/          # Domain-driven railway widgets (journey, train, etc.)
├── config/               # Routing, feature flags, and site metadata configs
├── hooks/                # Reusable stateful and lifecycle hooks
├── lib/                  # Shared utilities, API clients, and navigation libs
├── providers/            # React Context Wrappers (Theme, QueryClient, Shell)
└── types/                # Strict TypeScript declaration types
```

---

## ✦ Directory Responsibilities

### 1. `src/app/` (Routing & BFF)
The App Router handles both server-side layouts/pages and the Backend-for-Frontend (BFF) API routing.

- **Route Groups**:
  - `(public)/`: General access pages with a transparent glassmorphic layout.
  - `(auth)/`: Authentication gates centered on screen.
  - `(app)/`: The core authenticated application workspace wrapped in `AppShell`.
- **BFF API Routes (`src/app/api/`)**:
  - All external API calls to TravelCore Core APIs must pass through local serverless API routes (e.g., `/api/pnr/[id]/route.ts`).
  - **Responsibilities**:
    - Hide authentication tokens/headers.
    - Clean up payload sizes (strip unused fields).
    - Handle edge caching before returning responses.

### 2. `src/components/` (Component-Driven UI)
To prevent spaghetti code, components are organized by architectural layer:

- **`components/ui/` (Design Tokens / Baselines)**:
  - This folder contains foundational components that do not hold domain logic. Examples: `Button`, `Dialog`, `Input`, `Popover`, `Skeleton`, `Toast`.
  - Driven by **Radix UI Primitives** and styled using Tailwind CSS v4 class utilities.
- **`components/navigation/` (Navigation components)**:
  - Base pieces used for routing indicators: `Header`, `Sidebar`, `MobileNavigation`, `Breadcrumb`, `UserMenu`.
- **`components/layout/` (Layout grids and blocks)**:
  - Structural primitives: `AppShell`, `PageContainer`, `ContentGrid`, `SplitView`.
- **`components/shell/` (App Shell Assembly)**:
  - Higher-level assemblies linking the layout shells to context state, route checking, and configuration options. Examples: `ShellHeader`, `ShellSidebar`, `ShellMobileNav`, `SkipNav`.
- **`components/railway/` (Domain-Specific UI)**:
  - Contains full feature widgets grouped by functional area:
    - `/journey`: journey cards, progress tracking, timelines.
    - `/train`: train details, cards, badges.
    - `/station`: timelines, platforms, badges.
    - `/live-status`: delay indicator dots, speeds.
    - `/seat`: seat matrices, availability indicators.
    - `/fare`: cards, comparisons.
    - `/route`: routes, station stops.
    - `/search`: suggestions, route cards.
    - `/skeletons`: loading states.

### 3. `src/lib/` (Singletons & Utilities)
Contains configurations and stateless helpers:
- `lib/navigation/`: House navigation helpers like the `useBreadcrumbs()` hook, navigation configs, and path checking helpers.
- `api-client.ts`: A configured Axios/fetch instance with timeout values and error interception rules.
- `utils.ts`: Global utilities (e.g., Tailwind CSS class merging helper `cn(...)`).

### 4. `src/providers/` (Context Providers)
Wrappers that control global states or supply hooks. They are marked with `"use client"` and injected at the root layout level.
- `shell-provider.tsx`: Controls collapse, open, close, overlay toggle, and keyboard shortcuts state.
- `query-provider.tsx`: Hooks up the React Query (TanStack Query) client cache.
- `theme-provider.tsx`: Controls dark-mode toggling.

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
