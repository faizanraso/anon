"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

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
      className="fixed z-40 bottom-5 right-5 dark:bg-gray-900 dark:text-yellow-400 bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex justify-center items-center"
    >
      {light ? <Moon /> : <Sun />}
    </button>
  );
}
