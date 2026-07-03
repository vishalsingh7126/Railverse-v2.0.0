import "@testing-library/jest-dom";
import * as axe from "jest-axe";
import { expect, vi } from "vitest";

// Extend Vitest expect with jest-axe matchers
expect.extend(axe.toHaveNoViolations);

// Mock ResizeObserver for Radix UI primitives under JSDOM
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

// Mock window.matchMedia for next-themes and media queries
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

