"use client"
import React from 'react'
import { useTranslation } from './TranslationProvider'

export default function CTABanner(){
  const { t } = useTranslation()
  return (
    <section className="bg-blue-600 text-white py-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{t('cta.title') || 'Ready to Optimize Your Supply Chain?'}</h3>
          <p className="mt-2 text-blue-100">{t('cta.subtitle') || 'Contact our team today to discuss your MRO requirements.'}</p>
        </div>
        <div className="flex gap-3 mt-6 md:mt-0">
          <a href="/quote-order" className="btn-secondary">{t('hero.cta_quote') || t('nav.quote') || 'Request Quote'}</a>
          <a href="/contact" className="btn-outline">{t('cta.cta_contact') || 'Contact Us'}</a>
        </div>
      </div>
    </section>
  )
}
