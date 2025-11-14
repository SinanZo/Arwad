import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import IndustryCard from '../../components/IndustryCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries — ARWAD Trading',
  description: 'Industries we serve: water, power, petrochemical, mining, infrastructure.'
}

export default function Industries(){
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle titleKey="industries.title" subtitleKey="industries.subtitle" />
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {['water','power','manufacturing','petrochemical','mining','infrastructure'].map((k)=> (
            <IndustryCard key={k} titleKey={`industries.${k}.title`} descKey={`industries.${k}.description`} />
          ))}
        </div>
      </div>
    </div>
  )
}
'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from '@/components/SectionTitle'

const Droplets = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>;
const Zap = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const Factory = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /></svg>;
const Flame = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.343L12 24m0 0l-5.657-5.657M12 24V12m0 0L5.343 6.343M12 12l6.657-6.657" /></svg>;
const Mountain = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20h12M6 20L3 17m0 0l3-3m-3 3l6-6m6 6l3 3m0 0l3-3m-3 3l-6-6" /></svg>;
const Building2 = () => <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /></svg>;

export default function Industries() {
  const { t } = useLanguage()

  const industries = [
    {
      id: 'water',
      icon: <Droplets />,
      title: t('industries.water.title'),
      description: t('industries.water.description'),
      details: [
        'High-pressure pumps and valves for RO systems',
        'Membrane modules and replacement cartridges',
        'Chemical dosing systems and monitoring equipment',
        'Distribution network components and actuators',
        'Control systems for automated operations',
      ],
    },
    {
      id: 'power',
      icon: <Zap />,
      title: t('industries.power.title'),
      description: t('industries.power.description'),
      details: [
        'Turbine components and generator parts',
        'Transformers and switchgear equipment',
        'Protection relays and control panels',
        'High-voltage insulators and conductors',
        'SCADA systems and monitoring solutions',
      ],
    },
    {
      id: 'manufacturing',
      icon: <Factory />,
      title: t('industries.manufacturing.title'),
      description: t('industries.manufacturing.description'),
      details: [
        'Production line spare parts and components',
        'Packaging machinery parts and consumables',
        'Conveyance systems and material handling equipment',
        'Quality control instrumentation',
        'Process automation components',
      ],
    },
    {
      id: 'petrochemical',
      icon: <Flame />,
      title: t('industries.petrochemical.title'),
      description: t('industries.petrochemical.description'),
      details: [
        'High-temperature valves and fittings',
        'Pressure vessels and heat exchangers',
        'Compressor parts and seal systems',
        'Fire and gas detection systems',
        'Specialized alloys and corrosion-resistant materials',
      ],
    },
    {
      id: 'mining',
      icon: <Mountain />,
      title: t('industries.mining.title'),
      description: t('industries.mining.description'),
      details: [
        'Heavy-duty crusher and mill components',
        'Conveyor belts and transfer systems',
        'Hydraulic systems for mobile equipment',
        'Wear-resistant parts and protective linings',
        'Dust collection and air quality systems',
      ],
    },
    {
      id: 'infrastructure',
      icon: <Building2 />,
      title: t('industries.infrastructure.title'),
      description: t('industries.infrastructure.description'),
      details: [
        'HVAC systems and building automation',
        'Electrical distribution equipment',
        'Fire protection and safety systems',
        'Elevators and escalator components',
        'Water and wastewater management systems',
      ],
    },
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('industries.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('industries.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-secondary leading-relaxed">
              {t('brand.name')} serves as a critical partner across diverse industrial sectors, 
              providing specialized MRO solutions, spare parts procurement, and technical 
              support that keeps operations running efficiently. Our deep understanding of 
              each industry&apos;s unique requirements enables us to deliver targeted solutions 
              that address specific operational challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                id={industry.id}
                className={`scroll-mt-24 ${
                  index % 2 === 0 ? '' : 'bg-background'
                } rounded-2xl p-8 md:p-12`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                    <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                      {industry.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{industry.title}</h2>
                    <p className="text-secondary leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    <p className="text-secondary leading-relaxed">
                      Our comprehensive inventory and supplier network ensure rapid access 
                      to critical components, minimizing downtime and supporting continuous 
                      operations across all facility types within this sector.
                    </p>
                  </div>
                  <div className={index % 2 === 0 ? '' : 'md:order-1'}>
                    <div className="card">
                      <h3 className="font-semibold text-lg mb-4">
                        Key Equipment & Services
                      </h3>
                      <ul className="space-y-3">
                        {industry.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 rtl:space-x-reverse text-secondary"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mt-1">
                              •
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="card text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Partner With Industry Experts
            </h2>
            <p className="text-secondary mb-8">
              Our team understands the specific requirements and challenges of your industry. 
              Let us help you optimize your supply chain and maintain operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote-order" className="btn-primary">
                Request a Quote
              </a>
              <a href="/contact" className="btn-outline">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
