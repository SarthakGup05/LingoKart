import en from "../../locales/en.json"
import hi from "../../locales/hi.json"
import ta from "../../locales/ta.json"
import bn from "../../locales/bn.json"

const translations: Record<string, Record<string, string>> = {
  en,
  hi,
  ta,
  bn,
}

export function t(key: string, locale: string = "en") {
  return translations[locale]?.[key] ?? translations.en?.[key] ?? key
}
