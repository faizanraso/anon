"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
