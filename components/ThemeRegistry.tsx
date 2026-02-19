"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode, createContext, useContext, useState, useMemo, useEffect } from "react";

type ColorMode = "light" | "dark";

interface ColorModeContextType {
  mode: ColorMode;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextType>({
  mode: "light",
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorMode>(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored as ColorMode;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (e) {
      return "light";
    }
  });

  const toggleColorMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#1a56db",
            dark: "#1e3a8a",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#06b6d4",
          },
          background: {
            default: mode === "light" ? "#ffffff" : "#0a0f1e",
            paper: mode === "light" ? "#ffffff" : "#111827",
          },
          text: {
            primary: mode === "light" ? "#0f172a" : "#f1f5f9",
            secondary: mode === "light" ? "#475569" : "#94a3b8",
          },
        },
        typography: {
          fontFamily: "var(--font-inter), sans-serif",
          h1: { fontWeight: 800, letterSpacing: "-0.02em" },
          h2: { fontWeight: 700, letterSpacing: "-0.01em" },
          h3: { fontWeight: 600 },
          h4: { fontWeight: 600 },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: { textTransform: "none", fontWeight: 600, borderRadius: 8 },
            },
          },
        },
      }),
    [mode]
  );

  useEffect(() => {
    try {
      localStorage.setItem("theme", mode);
    } catch (e) {}
    if (mode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
