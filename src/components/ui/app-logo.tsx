import * as React from "react";

interface AppLogoProps {
  showText?: boolean;
  className?: string;
  size?: number;
}

export function AppLogo({ showText = true, className = "", size = 32 }: AppLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Train Emblem (Minimalist Vector) */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        <path
          d="M6 8C6 5.79086 7.79086 4 10 4H22C24.2091 4 26 5.79086 26 8V22C26 25.3137 23.3137 28 20 28H12C8.68629 28 6 25.3137 6 22V8Z"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 16H22M10 20H22M8 12H24M11 6H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="11" cy="24" r="1.5" fill="currentColor" />
        <circle cx="21" cy="24" r="1.5" fill="currentColor" />
      </svg>

      {showText && (
        <span className="font-heading text-lg font-black tracking-wider uppercase text-foreground">
          Rail<span className="text-primary">verse</span>
        </span>
      )}
    </div>
  );
}
