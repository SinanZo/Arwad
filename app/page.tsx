import React from 'react'
import HeroSection from '../components/HeroSection'
import SectionTitle from '../components/SectionTitle'
import ValueCard from '../components/ValueCard'
import IndustryCard from '../components/IndustryCard'
import ServiceCard from '../components/ServiceCard'
import ProductCard from '../components/ProductCard'
import CTABanner from '../components/CTABanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ARWAD Trading — Availability. Reliability. Ownership.',
  description: 'Leading regional provider of MRO solutions, spare parts and supply chain services.'
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionTitle titleKey="about.title" subtitleKey="about.subtitle" />
              <p className="text-muted mt-4">About paragraph placeholder describing ARWAD Trading.</p>
            </div>
            <div className="card h-64 flex items-center justify-center">Image/Card Placeholder</div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionTitle titleKey="values.title" subtitleKey="values.subtitle" />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ValueCard titleKey="values.ownership.title" descKey="values.ownership.description" />
            <ValueCard titleKey="values.availability.title" descKey="values.availability.description" />
            <ValueCard titleKey="values.reliability.title" descKey="values.reliability.description" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle titleKey="industries.title" subtitleKey="industries.subtitle" />
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {['water','power','manufacturing','petrochemical','mining','infrastructure'].map((k)=> (
              <IndustryCard key={k} titleKey={`industries.${k}.title`} descKey={`industries.${k}.description`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionTitle titleKey="services.title" subtitleKey="services.subtitle" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {['procurement','customized','automation','assessment','inspection'].map((s)=> (
              <ServiceCard key={s} titleKey={`services.${s}.title`} descKey={`services.${s}.description`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle titleKey="products.title" subtitleKey="products.subtitle" />
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {['ventilators','inspection','cooling','desalination','heavy','measurement'].map((p)=> (
              <ProductCard key={p} titleKey={`products.${p}`} />
            ))}
          </div>
          <div className="text-center mt-8"><a className="btn-primary" href="/products">View All</a></div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import HeroSlider, { Slide } from '@/components/HeroSlider'
import SectionTitle from '@/components/SectionTitle'
import ValueCard from '@/components/ValueCard'
import IndustryCard from '@/components/IndustryCard'
import ServiceCard from '@/components/ServiceCard'
import ProductCard from '@/components/ProductCard'

const Shield = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
const Clock = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
const Award = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
const Droplets = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
const Zap = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
const Factory = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /></svg>
const Flame = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657L13.414 22.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
const Mountain = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
const Building2 = () => <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>

export default function Home() {
  const { t } = useLanguage()

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
      mediaType: 'image',
      mediaSrc: '/images/home/hero-industrial-1.svg',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSlider slides={slides} />

      {/* About Snapshot */}
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
            <div className="relative h-96 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl shadow-custom-lg">
              {/* Placeholder for image */}
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
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

      {/* Industries Overview */}
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

      {/* Services Overview */}
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
              features={[
                'Strategic sourcing',
                'Vendor management',
                'Logistics optimization',
                'Cost reduction strategies',
              ]}
              href="/our-services#procurement"
            />
            <ServiceCard
              title={t('services.customized.title')}
              description={t('services.customized.description')}
              features={[
                'Engineering design',
                'Custom fabrication',
                'Technical consulting',
                'Solution integration',
              ]}
              href="/our-services#customized"
            />
            <ServiceCard
              title={t('services.automation.title')}
              description={t('services.automation.description')}
              features={[
                'Control systems',
                'SCADA integration',
                'Process automation',
                'IoT solutions',
              ]}
              href="/our-services#automation"
            />
            <ServiceCard
              title={t('services.assessment.title')}
              description={t('services.assessment.description')}
              features={[
                'Process analysis',
                'Efficiency audits',
                'Performance optimization',
                'Best practice recommendations',
              ]}
              href="/our-services#assessment"
            />
          </div>
        </div>
      </section>

      {/* Products Highlights */}
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

      {/* Contact Teaser */}
      <section className="section-padding bg-primary-600 dark:bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your MRO requirements and discover how {t('brand.short')} can support your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote-order" className="btn-secondary">
              {t('hero.cta_quote')}
            </a>
            <a
              href="/contact"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
