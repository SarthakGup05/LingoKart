"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available locales
export const LOCALES = ["en", "hi", "ta", "bn"] as const;
export type AppLocale = (typeof LOCALES)[number];

interface LingoContextType {
    locale: AppLocale;
    setLocale: (locale: AppLocale) => void;
    isLoading: boolean;
}

const LingoContext = createContext<LingoContextType | undefined>(undefined);

export function LingoProvider({ children }: { children: ReactNode }) {
    // Default to English
    const [locale, setLocale] = useState<AppLocale>("en");
    const [isLoading, setIsLoading] = useState(false);

    // Optional: Persist to localStorage
    useEffect(() => {
        const saved = localStorage.getItem("lingo-locale");
        if (saved && LOCALES.includes(saved as AppLocale)) {
            setLocale(saved as AppLocale);
        }
    }, []);

    const handleSetLocale = (newLocale: AppLocale) => {
        setLocale(newLocale);
        localStorage.setItem("lingo-locale", newLocale);
    };

    return (
        <LingoContext.Provider value={{ locale, setLocale: handleSetLocale, isLoading }}>
            {children}
        </LingoContext.Provider>
    );
}

export function useLingoContext() {
    const context = useContext(LingoContext);
    if (context === undefined) {
        throw new Error("useLingoContext must be used within a LingoProvider");
    }
    return context;
}
