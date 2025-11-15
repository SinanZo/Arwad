"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem("language") as Language | null
        if (saved === "ar" || saved === "en") return saved
      }
    } catch {
      // ignore
    }
    return "en"
  })

  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    import(`@/locales/${language}/common.json`)
      .then((m) => setTranslations(m?.default ?? {}))
      .catch(() => setTranslations({}))

    if (typeof document !== "undefined") {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = language
    }

    try {
      localStorage.setItem("language", language)
    } catch {}
  }, [language])

  const setLanguage = (lang: Language) => setLanguageState(lang)

  const t = (key: string): string => {
    const parts = key.split(".")
    let curr: any = translations
    for (const p of parts) {
      if (curr && typeof curr === "object" && p in curr) curr = curr[p]
      else return key
    }
    return typeof curr === "string" ? curr : key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
