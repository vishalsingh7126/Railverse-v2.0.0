"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type ThemeToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, ...props }, ref) => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    const toggleTheme = () => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label="Toggle theme"
        className={cn(
          "relative h-9 w-9 flex items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors cursor-pointer overflow-hidden",
          className
        )}
        onClick={toggleTheme}
        {...props}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!mounted ? (
            <div className="h-4 w-4" />
          ) : resolvedTheme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Moon className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Sun className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }
);
ThemeToggle.displayName = "ThemeToggle";
