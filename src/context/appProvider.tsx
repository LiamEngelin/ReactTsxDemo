import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AppContext, type Theme, type AppContextValue } from "./appContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as Theme) || "dark";
  });
  const [username, setUsernameState] = useState<string>("Guest");

  console.log(theme)

  const toggleTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);

  const setUsername = useCallback((name: string) => {
    setUsernameState(name)
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const value = useMemo<AppContextValue>(() => ({
    theme,
    username,
    toggleTheme,
    setUsername
  }), [theme, username, toggleTheme, setUsername]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};