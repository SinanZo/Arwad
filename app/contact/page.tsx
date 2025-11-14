import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ContactForm from '../../components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — ARWAD Trading',
  description: 'Contact ARWAD Trading for inquiries and support.'
}

export default function Contact(){
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle titleKey="contact.title" subtitleKey="contact.subtitle" />
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import InfoCard from '@/components/InfoCard'

const MapPin = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const Phone = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const Mail = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const Clock = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t('contact.form.subject')}
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-field"
                  >
                    <option value="">Select a topic</option>
                    <option value="products">Products Inquiry</option>
                    <option value="services">Services Inquiry</option>
                    <option value="quote">Request Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                    {t('contact.form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                    {t('contact.form.error')}
                  </div>
                )}

                <button type="submit" className="btn-primary w-full">
                  {t('contact.form.send')}
                </button>
              </form>
            </div>

            {/* Right Column - Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-secondary mb-8">
                Our team is ready to assist you with any questions about our products, 
                services, or how we can support your operations. We strive to respond 
                to all inquiries within 24 hours.
              </p>

              <div className="space-y-6">
                <InfoCard
                  icon={<MapPin />}
                  title={t('contact.address')}
                  content={[
                    t('brand.name'),
                    'Business Bay',
                    'Dubai, United Arab Emirates',
                  ]}
                />
                <InfoCard
                  icon={<Phone />}
                  title={t('contact.phone')}
                  content={['+971 4 123 4567', '+971 50 123 4567']}
                />
                <InfoCard
                  icon={<Mail />}
                  title={t('contact.email')}
                  content={['info@arwad.org', 'sales@arwad.org']}
                />
                <InfoCard
                  icon={<Clock />}
                  title={t('contact.hours')}
                  content={[
                    'Sunday - Thursday: 8:00 AM - 6:00 PM',
                    'Saturday: 9:00 AM - 2:00 PM',
                    'Friday: Closed',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-surface py-12">
        <div className="container-custom">
          <div className="h-96 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl shadow-custom-lg flex items-center justify-center text-secondary">
            {/* Placeholder for map integration */}
            <p>Map placeholder - Integrate Google Maps or similar service</p>
          </div>
        </div>
      </section>
    </>
  )
}
