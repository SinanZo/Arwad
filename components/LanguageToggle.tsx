"use client"
import React, { useEffect, useState } from 'react'

export default function LanguageToggle() {
  const [lang, setLang] = useState<'en'|'ar'>(() => (typeof window !== 'undefined' && (localStorage.getItem('lang') as 'en'|'ar')) || 'en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <button onClick={() => setLang('en')} className={`px-3 py-1 rounded ${lang==='en'?'bg-primary-600 text-white':''}`}>EN</button>
      <button onClick={() => setLang('ar')} className={`px-3 py-1 rounded ${lang==='ar'?'bg-primary-600 text-white':''}`}>العربية</button>
    </div>
  )
}
