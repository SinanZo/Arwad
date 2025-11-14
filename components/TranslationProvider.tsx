"use client"
import React, { createContext, useContext } from 'react'

type Messages = { [key: string]: any }

const TranslationContext = createContext<{ locale: string; messages: Messages; t: (k: string) => string } | null>(null)

export function TranslationProvider({ locale, messages, children }: { locale: string; messages: Messages; children: React.ReactNode }) {
  const t = (key: string) => {
    try {
      const parts = key.split('.')
      let cur: any = messages
      for (const p of parts) {
        cur = cur?.[p]
        if (cur === undefined) return key
      }
      return typeof cur === 'string' ? cur : key
    } catch {
      return key
    }
  }

  return (
    <TranslationContext.Provider value={{ locale, messages, t }}>{children}</TranslationContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(TranslationContext)
  if (!ctx) throw new Error('useTranslation must be used within TranslationProvider')
  return { t: ctx.t, locale: ctx.locale, messages: ctx.messages }
}
