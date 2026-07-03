import "@testing-library/jest-dom";
import * as axe from "jest-axe";
import { expect } from "vitest";

// Extend Vitest expect with jest-axe matchers
expect.extend(axe.toHaveNoViolations);

// Mock ResizeObserver for Radix UI primitives under JSDOM
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

