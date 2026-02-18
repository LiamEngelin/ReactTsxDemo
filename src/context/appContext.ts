import { createContext, useContext } from "react";

export type Theme = "light" | "dark";

export type AppContextValue = {
    theme: Theme;
    toggleTheme: (t: Theme) => void;
    username: string;
    setUsername: (name: string) => void;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

export function useApp(): AppContextValue {
    const ctx = useContext(AppContext);
    if(!ctx) {
        throw new Error("useApp must be used within a AppProvider");
    }
    return ctx;
}