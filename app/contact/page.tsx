"use client"

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import InfoCard from '@/components/InfoCard'
import SectionTitle from '@/components/SectionTitle'
import ContactForm from '@/components/ContactForm'

const MapPin = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Phone = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const Mail = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const Clock = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle titleKey="contact.title" subtitleKey="contact.subtitle" />
        <div className="mt-6">
          <ContactForm />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.get_in_touch') || 'Get in Touch'}</h3>
            <p className="text-secondary mb-6">{t('contact.intro') || 'Our team is ready to assist you with any questions.'}</p>

            <div className="space-y-4">
              <InfoCard icon={<MapPin />} title={t('contact.address')} content={[t('brand.name'), 'Business Bay', 'Dubai']} />
              <InfoCard icon={<Phone />} title={t('contact.phone')} content={['+971 4 123 4567', '+971 50 123 4567']} />
              <InfoCard icon={<Mail />} title={t('contact.email')} content={['info@arwad.org']} />
              <InfoCard icon={<Clock />} title={t('contact.hours')} content={[t('contact.hours_text') || 'Sun-Thu: 8:00 - 18:00']} />
            </div>
          </div>

          <div>
            {/* Placeholder for map or other info */}
            <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl shadow-custom-lg flex items-center justify-center text-secondary">
              <p>{t('contact.map_placeholder') || 'Map placeholder - Integrate Google Maps or similar service'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
