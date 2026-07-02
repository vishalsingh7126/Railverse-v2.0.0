import "@testing-library/jest-dom";
import * as axe from "jest-axe";
import { expect } from "vitest";

// Extend Vitest expect with jest-axe matchers
expect.extend(axe.toHaveNoViolations);
