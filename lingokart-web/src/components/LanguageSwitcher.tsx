"use client";

import { useLingoContext } from "@lingo.dev/compiler/react";

// 1️⃣ Define locales as a literal union
const LOCALES = ["en", "hi", "ta", "bn"] as const;
type AppLocale = (typeof LOCALES)[number];

const OPTIONS: { value: AppLocale; label: string }[] = [
  { value: "en", label: "English" },
  { value: "hi", label: "Hindi" },
  { value: "ta", label: "Tamil" },
  { value: "bn", label: "Bengali" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLingoContext();

  // 2️⃣ Runtime-safe + type-safe guard
  function handleChange(value: string) {
    if (LOCALES.includes(value as AppLocale)) {
      setLocale(value as AppLocale);
    }
  }

  return (
    <select
      value={locale}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-md border px-2 py-1 text-sm"
    >
      {OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
