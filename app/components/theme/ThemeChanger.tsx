"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function changeTheme() {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  const light = theme === "light";

  return (
    <button
      onClick={() => changeTheme()}
      className="fixed bottom-5 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-900 dark:text-yellow-400 dark:hover:bg-neutral-700"
    >
      {light ? <Moon /> : <Sun />}
    </button>
  );
}
