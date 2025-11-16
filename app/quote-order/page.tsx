"use client"

import React, { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from '../../components/SectionTitle'
import QuoteItemRow from '../../components/QuoteItemRow'

const Plus = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)

interface QuoteItem {
  id: string
  partNumber: string
  description: string
  manufacturer: string
  quantity: string
  category: string
}

export default function QuoteOrder() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
  })

  const [items, setItems] = useState<QuoteItem[]>([
    {
      id: '1',
      partNumber: '',
      description: '',
      manufacturer: '',
      quantity: '',
      category: '',
    },
  ])

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const industries = [
    t('industries.water.title'),
    t('industries.power.title'),
    t('industries.manufacturing.title'),
    t('industries.petrochemical.title'),
    t('industries.mining.title'),
    t('industries.infrastructure.title'),
  ]

  const categories = [
    t('products.ventilators'),
    t('products.inspection'),
    t('products.spare_parts'),
    t('products.cooling'),
    t('products.desalination'),
    t('products.heavy'),
    t('products.measurement'),
    t('products.factory'),
  ]

  const addItem = () => {
    const newItem: QuoteItem = {
      id: Date.now().toString(),
      partNumber: '',
      description: '',
      manufacturer: '',
      quantity: '',
      category: '',
    }
    setItems([...items, newItem])
  }

  const updateItem = (id: string, field: keyof QuoteItem, value: string) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)))
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate
    if (
      !formData.company ||
      !formData.contactPerson ||
      !formData.email ||
      !formData.phone
    ) {
      setStatus('error')
      return
    }

    // Validate at least one item with basic info
    const validItems = items.filter((item) => item.partNumber || item.description)
    if (validItems.length === 0) {
      setStatus('error')
      return
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          items: validItems,
        }),
      })

      if (response.ok) {
        setStatus('success')
        // Reset form
        setFormData({
          company: '',
          contactPerson: '',
          email: '',
          phone: '',
          industry: '',
        })
        setItems([
          {
            id: '1',
            partNumber: '',
            description: '',
            manufacturer: '',
            quantity: '',
            category: '',
          },
        ])
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
      <section className="relative h-72 bg-gradient-to-r from-accent-600 via-accent-700 to-accent-800 dark:from-accent-800 dark:to-accent-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
        <div className="relative container-custom h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('quote.title')}</h1>
            <p className="text-xl text-accent-100">{t('quote.subtitle')}</p>
            <p className="text-accent-200 mt-2">{t('quote.desc')}</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-6xl">
          <div className="mb-8">
            <p className="text-secondary leading-relaxed">{t('quote.desc')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">{t('quote.step_one')}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    {t('quote.company')} *
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium mb-2">
                    {t('quote.contact_person')} *
                  </label>
                  <input
                    id="contactPerson"
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('quote.email')} *
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
                    {t('quote.phone')} *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="industry" className="block text-sm font-medium mb-2">
                    {t('quote.industry')}
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="input-field"
                  >
                    <option value="">{t('quote.industry_placeholder')}</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Quote Items */}
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{t('quote.items')}</h2>
                <button type="button" onClick={addItem} className="btn-outline flex items-center space-x-2 rtl:space-x-reverse">
                  <Plus />
                  <span>{t('quote.add_item')}</span>
                </button>
              </div>

              <div className="space-y-4">
                {items.map((item) => (
                  <QuoteItemRow key={item.id} item={item} onUpdate={updateItem} onRemove={removeItem} categories={categories} />
                ))}
              </div>
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">{t('quote.success')}</div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">{t('quote.error')}</div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button type="submit" className="btn-primary px-12">{t('quote.submit')}</button>
            </div>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-surface">
        <div className="container-custom max-w-4xl">
          <div className="card text-center">
            <h2 className="text-2xl font-bold mb-4">{t('quote.next.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">{t('quote.next.review.title')}</h3>
                <p className="text-sm text-secondary">{t('quote.next.review.desc')}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">{t('quote.next.quote.title')}</h3>
                <p className="text-sm text-secondary">{t('quote.next.quote.desc')}</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">{t('quote.next.delivery.title')}</h3>
                <p className="text-sm text-secondary">{t('quote.next.delivery.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
