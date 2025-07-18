"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@heroui/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
        <Button onPress={() => setTheme(theme === "dark" ? "light" : "dark")} variant="light" size="md">
            {theme === "dark" ? <Sun className="size-5"/> : <Moon className="size-5" />}
        </Button>
    </div>
  )
}
