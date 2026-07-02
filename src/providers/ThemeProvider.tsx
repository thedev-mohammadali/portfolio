import { useEffect, useMemo, useState } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import type { Theme } from "../types/theme";

const STORAGE_KEY = "portfolio-theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isTheme = (value: string | null): value is Theme => {
    return value === "light" || value === "dark" || value === "system";
  };

  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY);

    return isTheme(storedTheme) ? storedTheme : "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      root.classList.remove("light", "dark");

      if (theme === "system") {
        root.classList.add(mediaQuery.matches ? "dark" : "light");
      } else {
        root.classList.add(theme);
      }
    };

    applyTheme();

    localStorage.setItem(STORAGE_KEY, theme);

    if (theme !== "system") return;

    mediaQuery.addEventListener("change", applyTheme);

    return () => {
      mediaQuery.removeEventListener("change", applyTheme);
    };
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
};

export default ThemeProvider;
