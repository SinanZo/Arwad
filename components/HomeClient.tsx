"use client"

import React from 'react'
import Image from 'next/image'
import { BLUR_DATA_URL } from '@/lib/blur'
import { useLanguage } from '@/contexts/LanguageContext'
import HeroSlider, { Slide } from '@/components/HeroSlider'
import { brandAssets } from '@/config/brand'
import SectionTitle from '@/components/SectionTitle'
import ValueCard from '@/components/ValueCard'
import IndustryCard from '@/components/IndustryCard'
import ServiceCard from '@/components/ServiceCard'
import ProductCard from '@/components/ProductCard'
import CTABanner from '@/components/CTABanner'

const Shield = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
const Clock = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
const Award = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
const Droplets = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
const Zap = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
const Factory = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /></svg>
const Flame = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657L13.414 22.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
const Mountain = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
const Building2 = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>

export default function HomeClient() {
  const { t } = useLanguage()
  
  // Helper to safely get array from translations
  const getArray = (key: string): string[] => {
    const value = t(key)
    return Array.isArray(value) ? value : []
  }

  const slides: Slide[] = [
    {
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      ctaPrimary: {
        label: t('hero.cta_quote'),
        href: '/quote-order',
      },
      ctaSecondary: {
        label: t('hero.cta_industries'),
        href: '/industries',
      },
      mediaType: brandAssets.heroVideo ? 'video' : 'image',
      mediaSrc: brandAssets.heroVideo || brandAssets.heroPoster,
    },
  ]

  return (
    <>
      <HeroSlider slides={slides} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title={t('about.title')}
                subtitle={t('about.subtitle')}
              />
              <p className="text-secondary mt-6 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="mt-8">
                <a href="/about" className="btn-primary">
                  {t('common.learn_more')}
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-custom-lg">
              <Image
                src="/images/home/company-overview.svg"
                alt="Company Overview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionTitle
            title={t('values.title')}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Shield />}
              title={t('values.ownership.title')}
              description={t('values.ownership.description')}
            />
            <ValueCard
              icon={<Clock />}
              title={t('values.availability.title')}
              description={t('values.availability.description')}
            />
            <ValueCard
              icon={<Award />}
              title={t('values.reliability.title')}
              description={t('values.reliability.description')}
            />
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/home/hero-supply-chain.svg')] opacity-10 bg-cover bg-center" />
        <div className="relative container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="space-y-2">
              <div className="text-5xl font-bold">500+</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Active Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">6</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Industries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">99.8%</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Uptime Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">15+</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle
            title={t('industries.title')}
            subtitle={t('industries.subtitle')}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              title={t('industries.water.title')}
              description={t('industries.water.description')}
              image="/images/industries/water.svg"
              href="/industries#water"
              icon={<Droplets />}
            />
            <IndustryCard
              title={t('industries.power.title')}
              description={t('industries.power.description')}
              image="/images/industries/power.svg"
              href="/industries#power"
              icon={<Zap />}
            />
            <IndustryCard
              title={t('industries.manufacturing.title')}
              description={t('industries.manufacturing.description')}
              image="/images/industries/manufacturing.svg"
              href="/industries#manufacturing"
              icon={<Factory />}
            />
            <IndustryCard
              title={t('industries.petrochemical.title')}
              description={t('industries.petrochemical.description')}
              image="/images/industries/petrochemical.svg"
              href="/industries#petrochemical"
              icon={<Flame />}
            />
            <IndustryCard
              title={t('industries.mining.title')}
              description={t('industries.mining.description')}
              image="/images/industries/mining.svg"
              href="/industries#mining"
              icon={<Mountain />}
            />
            <IndustryCard
              title={t('industries.infrastructure.title')}
              description={t('industries.infrastructure.description')}
              image="/images/industries/infrastructure.svg"
              href="/industries#infrastructure"
              icon={<Building2 />}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionTitle
            title={t('services.title')}
            subtitle={t('services.subtitle')}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title={t('services.procurement.title')}
              description={t('services.procurement.description')}
              features={getArray('services.procurement.features')}
              href="/our-services#procurement"
            />
            <ServiceCard
              title={t('services.customized.title')}
              description={t('services.customized.description')}
              features={getArray('services.customized.features')}
              href="/our-services#customized"
            />
            <ServiceCard
              title={t('services.automation.title')}
              description={t('services.automation.description')}
              features={getArray('services.automation.features')}
              href="/our-services#automation"
            />
            <ServiceCard
              title={t('services.assessment.title')}
              description={t('services.assessment.description')}
              features={getArray('services.assessment.features')}
              href="/our-services#assessment"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle
            title={t('products.title')}
            subtitle={t('products.subtitle')}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard
              title={t('products.ventilators')}
              description="High-efficiency ventilation systems and industrial air filtration solutions."
              image="/images/products/valve.svg"
              category="HVAC"
              href="/products#ventilators"
            />
            <ProductCard
              title={t('products.inspection')}
              description="Precision testing equipment and inspection devices for quality assurance."
              image="/images/products/sensor.svg"
              category="Testing"
              href="/products#inspection"
            />
            <ProductCard
              title={t('products.cooling')}
              description="Industrial cooling towers, heat exchangers, and thermal management systems."
              image="/images/products/motor.svg"
              category="Thermal"
              href="/products#cooling"
            />
            <ProductCard
              title={t('products.desalination')}
              description="Advanced water treatment and desalination equipment for municipal and industrial use."
              image="/images/home/hero-supply-chain.svg"
              category="Water"
              href="/products#desalination"
            />
            <ProductCard
              title={t('products.heavy')}
              description="Heavy machinery components, hydraulic systems, and power transmission parts."
              image="/images/products/motor.svg"
              category="Machinery"
              href="/products#heavy"
            />
            <ProductCard
              title={t('products.measurement')}
              description="Instrumentation, sensors, and control systems for process monitoring."
              image="/images/products/sensor.svg"
              category="Instrumentation"
              href="/products#measurement"
            />
            <ProductCard
              title={t('products.factory')}
              description="Comprehensive spare parts inventory for industrial plants and factories."
              image="/images/home/company-overview.svg"
              category="Spares"
              href="/products#factory"
            />
            <ProductCard
              title={t('products.spare_parts')}
              description="Extensive catalog of OEM and aftermarket spare parts for all industries."
              image="/images/home/company-overview.svg"
              category="General"
              href="/products#spare-parts"
            />
          </div>
          <div className="text-center mt-12">
            <a href="/products" className="btn-primary">
              {t('common.view_all')}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('home.trusted_title') || 'Trusted by Industry Leaders'}</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              {t('home.trusted_desc') || 'We partner with leading organizations across the Middle East to deliver excellence in MRO solutions and supply chain management'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-background rounded-lg flex items-center justify-center text-secondary font-semibold">
                {t('home.partner_logo') || 'Partner Logo'}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 dark:from-primary-800 dark:via-primary-900 dark:to-accent-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/home/hero-industrial-2.svg')] opacity-10 bg-cover bg-center" />
        <div className="relative container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('cta.home_title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('cta.home_subtitle').replace('{brand}', t('brand.short'))}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote-order" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
              {t('hero.cta_quote')}
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
