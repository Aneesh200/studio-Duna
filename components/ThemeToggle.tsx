"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className="relative w-10 h-10 rounded-full border border-text-muted/30 dark:border-white/20 flex items-center justify-center hover:border-primary dark:hover:border-primary/60 transition-colors duration-300 group"
    >
      <span
        className={`material-symbols-outlined text-lg transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0 absolute"
        }`}
      >
        dark_mode
      </span>
      <span
        className={`material-symbols-outlined text-lg transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0 absolute"
        }`}
      >
        light_mode
      </span>
    </button>
  );
}
