import clsx from "clsx";
import { Check, Laptop, Moon, Sun } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

import useTheme from "@/hooks/useTheme";
import Button from "./Button";

const themes = [
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    value: "system",
    label: "System",
    icon: Laptop,
  },
] as const;

const ThemeSelector = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Change theme"
          className="relative overflow-hidden outline-0 hover:scale-105 active:scale-95"
        >
          <Sun
            className={clsx(
              "absolute size-5 transition-all duration-300",
              isDark
                ? "scale-0 -rotate-180 opacity-0"
                : "scale-100 rotate-0 opacity-100",
            )}
          />

          <Moon
            className={clsx(
              "absolute size-5 transition-all duration-300",
              isDark
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 rotate-180 opacity-0",
            )}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {themes.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className="flex items-center justify-between gap-8"
          >
            <div className="flex items-center gap-2">
              <Icon className="size-4" />
              <span>{label}</span>
            </div>

            {theme === value && <Check className="size-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
