/**
 * Checks if a target path is currently active given the current active pathname.
 * Handles root path matching specially.
 */
export function isActiveRoute(currentPath: string, targetPath: string, exact = false): boolean {
  if (exact) {
    return currentPath === targetPath;
  }
  if (targetPath === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(targetPath);
}

/**
 * Clean path helper to ensure single leading slashes and no trailing slashes.
 */
export function cleanPath(path: string): string {
  if (!path) return "/";
  const leading = path.startsWith("/") ? path : `/${path}`;
  if (leading === "/") return "/";
  return leading.endsWith("/") ? leading.slice(0, -1) : leading;
}
