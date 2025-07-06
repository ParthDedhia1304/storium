// src/components/theme-toggle.tsx
"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground hover:bg-accent transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
