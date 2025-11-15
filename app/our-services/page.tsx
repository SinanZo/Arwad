"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from '@/components/SectionTitle'
import ServiceCard from '@/components/ServiceCard'
import ValueCard from '@/components/ValueCard'
import React from 'react'
import Image from 'next/image'

const Heart = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
)
const Users = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const CheckCircle = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function OurServices() {
  const { t } = useLanguage()

  return (
    <>
      <section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
            <p className="text-xl text-primary-100">{t('services.subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Heart />}
              title={t('values.integrity.title')}
              description="Transparent communication and ethical practices in every interaction"
            />
            <ValueCard
              icon={<Users />}
              title="Effective Teamwork"
              description="Collaborative approach bringing together expertise from multiple disciplines"
            />
            <ValueCard
              icon={<CheckCircle />}
              title="Quality Assurance"
              description="Rigorous quality control processes ensuring consistent excellence"
            />
          </div>
        </div>
      </section>

      <section id="procurement" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('services.procurement.title')}</h2>
              <p className="text-secondary leading-relaxed mb-6">{t('services.procurement.description')}</p>
              <p className="text-secondary leading-relaxed mb-6">
                Our procurement specialists leverage deep market knowledge and established
                supplier relationships to secure competitive pricing without compromising
                on quality. We handle everything from initial sourcing through delivery,
                providing complete visibility and control throughout the process.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Deliverables:</h3>
                <ul className="space-y-2">
                  {[
                    'Strategic sourcing and vendor qualification',
                    'Competitive bid analysis and negotiation',
                    'Purchase order management and tracking',
                    'Quality inspection and certification',
                    'Logistics coordination and customs clearance',
                    'Inventory management and warehousing solutions',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse text-secondary">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl shadow-custom-lg overflow-hidden">
              <Image
                src="/images/home/company-overview.svg"
                alt="Procurement Services"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="customized" className="section-padding bg-surface scroll-mt-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-6">{t('services.customized.title')}</h2>
              <p className="text-secondary leading-relaxed mb-6">{t('services.customized.description')}</p>
              <p className="text-secondary leading-relaxed mb-6">
                Our engineering team works closely with clients to understand operational
                challenges and develop innovative solutions. From custom fabrication to
                system integration, we deliver results that improve efficiency and reduce
                long-term operating costs.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Deliverables:</h3>
                <ul className="space-y-2">
                  {[
                    'Engineering design and technical specifications',
                    'Custom fabrication and manufacturing',
                    'System integration and compatibility testing',
                    'Installation supervision and commissioning',
                    'Training and knowledge transfer',
                    'Ongoing technical support and optimization',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse text-secondary">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:order-1 relative h-96 rounded-2xl shadow-custom-lg overflow-hidden">
              <Image
                src="/images/products/sensor.svg"
                alt="Customized Solutions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="automation" className="section-padding bg-background scroll-mt-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('services.automation.title')}</h2>
              <p className="text-secondary leading-relaxed mb-6">{t('services.automation.description')}</p>
              <p className="text-secondary leading-relaxed mb-6">
                We implement proven automation technologies that deliver measurable
                improvements in productivity, quality, and safety. Our solutions range
                from simple control upgrades to comprehensive SCADA systems and Industry
                4.0 implementations.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Deliverables:</h3>
                <ul className="space-y-2">
                  {[
                    'Control system design and programming',
                    'SCADA and HMI development',
                    'Sensor networks and data acquisition',
                    'Process monitoring and analytics',
                    'Remote access and control capabilities',
                    'Predictive maintenance integration',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse text-secondary">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl shadow-custom-lg overflow-hidden">
              <Image
                src="/images/products/motor.svg"
                alt="Automation Solutions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="assessment" className="section-padding bg-surface scroll-mt-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-bold mb-6">{t('services.assessment.title')}</h2>
              <p className="text-secondary leading-relaxed mb-6">{t('services.assessment.description')}</p>
              <p className="text-secondary leading-relaxed mb-6">
                Our assessment methodology combines data analysis, field observation,
                and industry best practices to identify actionable improvements. We
                deliver practical recommendations with clear ROI projections and
                implementation roadmaps.
              </p>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Deliverables:</h3>
                <ul className="space-y-2">
                  {[
                    'Current state analysis and documentation',
                    'Performance benchmarking against industry standards',
                    'Root cause analysis of inefficiencies',
                    'Improvement opportunity identification',
                    'Cost-benefit analysis and prioritization',
                    'Implementation roadmap and support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse text-secondary">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:order-1 relative h-96 rounded-2xl shadow-custom-lg overflow-hidden">
              <Image
                src="/images/products/valve.svg"
                alt="Assessment Services"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-900/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="card text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-secondary mb-8">
              Our service experts are ready to discuss your specific requirements and
              develop solutions that deliver real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote-order" className="btn-primary">Request Service Quote</a>
              <a href="/contact" className="btn-outline">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
