import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn utility helper", () => {
  it("should merge static class names together", () => {
    expect(cn("flex", "items-center", "bg-card")).toBe("flex items-center bg-card");
  });

  it("should filter out falsy values during evaluation", () => {
    const isPrimary = false;
    const isExpanded = true;
    expect(cn("px-4", isPrimary && "bg-primary", isExpanded && "h-10")).toBe("px-4 h-10");
  });

  it("should resolve conflicts in Tailwind utility classes", () => {
    expect(cn("p-4", "p-6")).toBe("p-6");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });
});
