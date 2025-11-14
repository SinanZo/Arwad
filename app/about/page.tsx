import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — ARWAD Trading',
  description: 'About ARWAD Trading — mission, vision and team.'
}

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <SectionTitle titleKey="about.title" subtitleKey="about.subtitle" />
        <p className="mt-6 text-muted">Detailed about content placeholder.</p>
      </div>
    </div>
  )
}
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import ValueCard from '@/components/ValueCard';
import StatCard from '@/components/StatCard';

const Shield = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Clock = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Award = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const Brain = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BookOpen = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3.042.526m15.084 2.698A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3.042.526m-15.084 2.698C9.915 5.9 10.937 5.5 12 5.5s2.085.4 3.042.976m-9.084 0a8.968 8.968 0 00-1.042-.263m15.084 0a8.968 8.968 0 001.042-.263" /></svg>;
const Heart = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container-custom h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              With decades of combined experience and a vast network of trusted suppliers, 
              {t('brand.name')} has established itself as an essential partner for organizations 
              seeking to maintain operational excellence. Our comprehensive approach encompasses 
              strategic procurement, technical support, and customized solutions that address 
              the unique challenges of each sector we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionTitle
            title={t('values.title')}
            centered
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <ValueCard
              icon={<Brain />}
              title={t('values.competence.title')}
              description={t('values.competence.description')}
            />
            <ValueCard
              icon={<BookOpen />}
              title={t('values.knowledge.title')}
              description={t('values.knowledge.description')}
            />
            <ValueCard
              icon={<Heart />}
              title={t('values.integrity.title')}
              description={t('values.integrity.description')}
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                {t('about.vision_title')}
              </h2>
              <p className="text-secondary leading-relaxed">
                {t('about.vision_text')}
              </p>
            </div>
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                {t('about.mission_title')}
              </h2>
              <p className="text-secondary leading-relaxed">
                {t('about.mission_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionTitle
            title="Our Impact"
            subtitle="Delivering results across the region"
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value="20,000" label="Engineers & Workers Supported" />
            <StatCard value="700" label="Factories Served" />
            <StatCard value="2,450" label="Projects Completed" />
            <StatCard value="468" label="Industry Awards" />
          </div>
        </div>
      </section>

      {/* Industries & Services Summary */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Sectors We Serve</h2>
                <p className="text-secondary leading-relaxed mb-4">
                {t('brand.name')} provides specialized support across multiple industrial sectors, 
                including water and desalination facilities, power generation and distribution 
                networks, manufacturing plants (FMCG, chemicals, packaging), petrochemical 
                refineries, mining operations, and major infrastructure projects.
              </p>
              <p className="text-secondary leading-relaxed">
                Each sector presents unique challenges and requirements, and our team brings 
                deep industry knowledge combined with technical expertise to deliver solutions 
                that work in real-world operational environments.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Service Approach</h2>
              <p className="text-secondary leading-relaxed mb-4">
                We offer end-to-end procurement and supply chain management services, developing 
                customized engineering solutions tailored to specific operational needs. Our 
                automation capabilities include modern control systems and process optimization, 
                while our manufacturing process assessment services help identify efficiency 
                opportunities and cost reduction strategies.
              </p>
              <p className="text-secondary leading-relaxed">
                Through strategic partnerships with leading global manufacturers and suppliers, 
                we ensure access to genuine parts, competitive pricing, and reliable delivery 
                schedules that keep your operations running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
