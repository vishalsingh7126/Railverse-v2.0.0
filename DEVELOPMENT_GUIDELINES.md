# Development Guidelines

This document details the engineering guidelines, design standards, and technical best practices for building Railverse v2. All contributions must adhere to these rules.

---

## ✦ Coding Standards & Naming Conventions

### General Clean Code Rules
- **Formatting**: We use Prettier for auto-formatting. Do not submit code with styling differences.
- **Linting**: ESLint is run on every commit. Run `npm run lint` locally before pushing.
- **File Extensions**:
  - `.tsx` for React components.
  - `.ts` for pure TypeScript functions, hooks, configurations, or utilities.
  - `.css` for global stylesheets or styling entry points.

### Naming Conventions
- **Components**: PascalCase (e.g., `LiveTrainStatus.tsx`, `SeatMapMatrix.tsx`).
- **Hooks**: camelCase with a `use` prefix (e.g., `useLiveLocation.ts`, `useInterval.ts`).
- **Utilities & Helpers**: camelCase (e.g., `formatCurrency.ts`, `cn.ts`).
- **CSS Variables / Custom Classes**: kebab-case (e.g., `--color-brand-primary`, `animate-fade-in`).
- **Interfaces & Types**: PascalCase. Prefix interfaces with `I` only if standard for a specific API contract, otherwise use plain nouns (e.g., `TrainRoute`, `PassengerDetails`).

---

## ✦ TypeScript Rules

We enforce strict type-checking across the repository.

- **No `any`**: Explicitly type everything. If a type is unknown, use `unknown`. Use `any` only in rare configurations (must be documented with an ESLint bypass comment).
- **Prefer Type over Interface**: Use `type` for unions, intersections, and simple structures. Use `interface` primarily for class implementations or structures intended for public extension.
- **Strict Null Checks**: Explicitly handle `null` and `undefined` properties. Use optional chaining (`?.`) and nullish coalescing (`??`) safely.
- **Strict Generics**: Use descriptive generics where necessary, and add type constraints where possible:
  ```typescript
  type ApiResponse<TData extends Record<string, unknown>> = {
    data: TData;
    status: number;
    error?: string;
  };
  ```

---

## ✦ React & Next.js 15 Best Practices

### React Server Components (RSC) vs. Client Components
Next.js App Router defaults to Server Components. Design components to run on the server by default.

- **React Server Components (RSC)**:
  - Use for layouts, page wrappers, static sections, and data loading endpoints.
  - Keeps bundle sizes minimal by avoiding client-side shipping of heavy packages (e.g., date-fns, marked).
- **Client Components (`"use client"`)**:
  - Use only when interactive features are needed (e.g., event listeners like `onClick`, React state hooks like `useState`/`useEffect`, or browser APIs).
  - Place `"use client"` at the very top of the file.
  - Keep client components low in the tree. Wrap an interactive search input as a client component and inject it into a server page, rather than making the entire page a client component.

### Dependency Injection Pattern
Avoid drilling down props. Pass children down to server layouts, letting the React engine manage rendering.

---

## ✦ Tailwind CSS v4 & UI Development (shadcn/ui + Radix)

### Theme Configuration
We use Tailwind CSS v4. Theme values (colors, spacing, shadows) are defined inside the central CSS file (`src/styles/globals.css`) using CSS variables.

- **Do NOT inject ad-hoc hex values** (e.g., `bg-[#2a4d9c]`) in production markup unless they represent dynamic user values. Use the utility tokens (e.g., `bg-brand-primary`).
- **Accessibility Color Contrast**: Maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text to comply with WCAG AA standards.

### UI Primitives (shadcn/ui & Radix UI)
- All custom inputs, toggles, sheets, and dialogs must extend **Radix UI Primitives** or customized **shadcn/ui** components.
- Ensure all interactive elements retain standard focus-ring states (e.g., `focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:outline-none`).

---

## ✦ Animation Principles (Framer Motion)

Animations are essential to making Railverse feel like a modern, premium SaaS application. They must be organic, clean, and fast.

- **Prefer Springs over Eases**: Use spring physics for physical interactions (modals opening, slides, train trackers) to mimic physical inertia.
  ```typescript
  // Recommended spring config for UI components
  export const SPRING_PRESET = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8
  };
  ```
- **Reduce Motion Support**: Always wrap animated components with Framer Motion's `useReducedMotion()` hook or CSS-level media queries to respect user preference settings.
- **Animations should be fast**: Keep transition durations below `250ms` (0.25 seconds). Long animations slow down navigation and feel laggy.

---

## ✦ Accessibility Guidelines (WCAG 2.1 AA)

- **Semantic HTML**: Use correct tags (`<main>`, `<header>`, `<nav>`, `<article>`, `<aside>`). Never use `<div onClick={...}>` without adding a keypress listener, `role="button"`, and `tabIndex={0}`.
- **Screen Reader Support**: Ensure images contain meaningful descriptive `alt` tags. Use `aria-label` or `aria-labelledby` on abstract control nodes (e.g., close buttons in modal sheets).
- **Keyboard Navigation**: Users must be able to complete a booking, check status, and navigate routes using only the `Tab`, `Arrow`, `Enter`, and `Escape` keys.

---

## ✦ Performance & Render Optimization

- **Bundle Optimization**: Use dynamic imports (`next/dynamic`) to lazy-load complex components (such as graphs or interactive coach layouts) only when visible.
- **Image Optimization**: Always use Next.js's `<Image />` component (`next/image`) for automatic size delivery, modern webp conversion, and layout shift protection.
- **Data Query Optimization**:
  - Keep cache validity durations short (5-10s) for live trains to prevent stale markers.
  - Set longer stale durations (300s+) for static train profiles or fare breakdowns.

---

## ✦ Error Handling & API Integration

### BFF API Routes Error Contract
All local Next.js `/api/...` routes must return a consistent, typed JSON structure on failure, keeping error payloads clean:

```typescript
export type ApiErrorResponse = {
  success: false;
  error: {
    code: string;       // e.g., "PNR_NOT_FOUND"
    message: string;    // Human readable message
    details?: unknown;  // Developer debugging data (omitted in production)
  };
};
```

### React Error Boundaries
- Wrap primary module segments (such as the Live Tracking Map card) inside a custom `ErrorBoundary` component. If one subsystem crashes, the rest of the dashboard should remain operational.
- Create localized `error.tsx` file entry points in page directories.
