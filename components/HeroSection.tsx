"use client"
import React from 'react'
import { useTranslation } from './TranslationProvider'

export default function HeroSection(){
  const { t } = useTranslation()
  return (
    <section className="relative h-[520px] lg:h-[680px] bg-gradient-to-r from-primary-600 to-primary-400 text-white">
      <div className="absolute inset-0 opacity-30 bg-[url('/hero-placeholder.svg')] bg-cover bg-center"></div>
      <div className="relative container-custom h-full flex items-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold">{t('hero.title')}</h1>
          <p className="text-lg">{t('hero.subtitle')}</p>
          <div className="flex gap-4">
            <a href="/quote-order" className="btn-secondary">{t('hero.cta_quote')}</a>
            <a href="/industries" className="btn-outline">{t('hero.cta_industries')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
