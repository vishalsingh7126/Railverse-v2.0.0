import { describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useBreadcrumbs } from "./breadcrumb";

// Mock next/navigation
const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

describe("useBreadcrumbs Hook", () => {
  it("should return root breadcrumb on home path", () => {
    mockUsePathname.mockReturnValue("/");
    const { result } = renderHook(() => useBreadcrumbs());
    expect(result.current).toEqual([{ label: "Home", href: "/" }]);
  });

  it("should derive breadcrumbs from static pathnames correctly", () => {
    mockUsePathname.mockReturnValue("/pnr");
    const { result } = renderHook(() => useBreadcrumbs());
    expect(result.current).toEqual([
      { label: "Home", href: "/" },
      { label: "PNR Status", href: "/pnr" },
    ]);
  });

  it("should fall back gracefully on dynamic path segments", () => {
    mockUsePathname.mockReturnValue("/pnr/1234567890");
    const { result } = renderHook(() => useBreadcrumbs());
    expect(result.current).toEqual([
      { label: "Home", href: "/" },
      { label: "PNR Status", href: "/pnr" },
      { label: "1234567890", href: "/pnr/1234567890" },
    ]);
  });

  it("should format string dynamic segments by capitalizing", () => {
    mockUsePathname.mockReturnValue("/trains/rajdhani");
    const { result } = renderHook(() => useBreadcrumbs());
    expect(result.current).toEqual([
      { label: "Home", href: "/" },
      { label: "Trains Search", href: "/trains" },
      { label: "Rajdhani", href: "/trains/rajdhani" },
    ]);
  });
});
