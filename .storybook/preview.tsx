import type { Preview } from "@storybook/nextjs-vite";
import "@/styles/globals.css";
import * as React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile Viewport",
          styles: { width: "375px", height: "667px" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet Viewport",
          styles: { width: "768px", height: "1024px" },
          type: "tablet",
        },
        desktop: {
          name: "Desktop Viewport",
          styles: { width: "1440px", height: "900px" },
          type: "desktop",
        },
      },
      defaultViewport: "responsive",
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#09090b" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // Determine dark mode based on background selector
      const isDark = context.globals.backgrounds?.value === "#09090b";
      
      React.useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }, [isDark]);

      return (
        <div className="font-sans antialiased">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
