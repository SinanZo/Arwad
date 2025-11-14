import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import ProductCard from '../../components/ProductCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — ARWAD Trading',
  description: 'Products catalog and solutions.'
}

export default function Products(){
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle titleKey="products.title" subtitleKey="products.subtitle" />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {['ventilators','inspection','cooling','desalination','heavy','measurement'].map((p)=> (
            <ProductCard key={p} titleKey={`products.${p}`} />
          ))}
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from '@/components/SectionTitle'
import ProductCard from '@/components/ProductCard'

export default function Products() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'hvac', label: 'HVAC & Ventilation' },
    { id: 'testing', label: 'Testing & Inspection' },
    { id: 'thermal', label: 'Thermal Systems' },
    { id: 'water', label: 'Water Treatment' },
    { id: 'machinery', label: 'Heavy Machinery' },
    { id: 'instrumentation', label: 'Instrumentation' },
    { id: 'spares', label: 'Spare Parts' },
  ]

  const products = [
    {
      id: 'ventilators',
      title: t('products.ventilators'),
      description: 'Industrial ventilation systems, air handling units, HEPA filters, ducting components, and air quality monitoring equipment.',
      image: '/images/products/valve.svg',
      category: 'hvac',
    },
    {
      id: 'inspection',
      title: t('products.inspection'),
      description: 'NDT equipment, ultrasonic testers, vibration analyzers, thermal imaging cameras, and calibration tools.',
      image: '/images/products/sensor.svg',
      category: 'testing',
    },
    {
      id: 'cooling',
      title: t('products.cooling'),
      description: 'Cooling towers, chillers, heat exchangers, thermal control systems, and temperature management solutions.',
      image: '/images/products/motor.svg',
      category: 'thermal',
    },
    {
      id: 'desalination',
      title: t('products.desalination'),
      description: 'RO membranes, high-pressure pumps, water quality analyzers, chemical dosing systems, and filtration units.',
      image: '/images/home/company-overview.svg',
      category: 'water',
    },
    {
      id: 'heavy',
      title: t('products.heavy'),
      description: 'Hydraulic cylinders, power transmission components, bearings, seals, and heavy-duty mechanical parts.',
      image: '/images/products/motor.svg',
      category: 'machinery',
    },
    {
      id: 'measurement',
      title: t('products.measurement'),
      description: 'Pressure transmitters, flow meters, level sensors, temperature controllers, and PLCs.',
      image: '/images/products/sensor.svg',
      category: 'instrumentation',
    },
    {
      id: 'factory',
      title: t('products.factory'),
      description: 'Motor components, electrical panels, pneumatic systems, conveyor parts, and production line equipment.',
      image: '/images/home/company-overview.svg',
      category: 'spares',
    },
    {
      id: 'spare-parts',
      title: t('products.spare_parts'),
      description: 'Comprehensive inventory of OEM and aftermarket parts for pumps, valves, motors, and industrial equipment.',
      image: '/images/home/company-overview.svg',
      category: 'spares',
    },
  ]

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 bg-gradient-to-r from-accent-600 to-accent-800 dark:from-accent-800 dark:to-accent-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('products.title')}
            </h1>
            <p className="text-xl text-accent-100">
              {t('products.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-secondary leading-relaxed">
              {t('brand.name')} maintains an extensive inventory of industrial components, 
              spare parts, and equipment across all major categories. Our partnerships 
              with leading global manufacturers ensure access to genuine OEM parts, 
              while our aftermarket options provide cost-effective alternatives without 
              compromising quality or reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-surface py-8 sticky top-20 z-40 border-b border-custom">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-background text-secondary hover:bg-surface-hover'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} id={product.id} className="scroll-mt-32">
                <div className="card h-full">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800" />
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-secondary mb-4">{product.description}</p>
                  <a
                    href={`/quote-order?category=${product.id}`}
                    className="btn-primary w-full text-center"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionTitle
            title={`Why Choose ${t('brand.short')} for Your Parts?`}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Genuine OEM Parts</h3>
              <p className="text-secondary">
                Direct partnerships with manufacturers ensure authenticity and warranty coverage
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid Delivery</h3>
              <p className="text-secondary">
                Strategic inventory and logistics network enable fast turnaround times
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Technical Support</h3>
              <p className="text-secondary">
                Expert guidance on part selection, compatibility, and installation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="card text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Cannot Find What You Need?
            </h2>
            <p className="text-secondary mb-8">
              Our extensive supplier network can source specialized parts and equipment 
              for virtually any industrial application. Contact us with your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote-order" className="btn-primary">
                Submit Custom Request
              </a>
              <a href="/contact" className="btn-outline">
                Speak to Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
