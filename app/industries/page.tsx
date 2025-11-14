"use client"

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Icon = ({ children }: { children: React.ReactNode }) => (
	<div className="w-12 h-12 text-primary-600 dark:text-primary-300">{children}</div>
)

export default function Industries() {
	const { t } = useLanguage()

	const industries = [
		{ id: 'water', icon: (<Icon><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg></Icon>), title: t('industries.water.title'), description: t('industries.water.description') },
		{ id: 'power', icon: (<Icon><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></Icon>), title: t('industries.power.title'), description: t('industries.power.description') },
		{ id: 'manufacturing', icon: (<Icon><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /></svg></Icon>), title: t('industries.manufacturing.title'), description: t('industries.manufacturing.description') },
		{ id: 'petrochemical', icon: (<Icon><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.343L12 24m0 0l-5.657-5.657M12 24V12m0 0L5.343 6.343M12 12l6.657-6.657" /></svg></Icon>), title: t('industries.petrochemical.title'), description: t('industries.petrochemical.description') },
		{ id: 'mining', icon: (<Icon><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 20h12M6 20L3 17m0 0l3-3m-3 3l6-6m6 6l3 3m0 0l3-3m-3 3l-6-6" /></svg></Icon>), title: t('industries.mining.title'), description: t('industries.mining.description') },
		{ id: 'infrastructure', icon: (<Icon><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" /></svg></Icon>), title: t('industries.infrastructure.title'), description: t('industries.infrastructure.description') },
	]

	return (
		<main>
			<section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-800 dark:to-primary-900 text-white">
				<div className="absolute inset-0 bg-black/20" />
				<div className="relative container-custom h-full flex items-center">
					<div>
						<h1 className="text-4xl md:text-5xl font-bold mb-4">{t('industries.title')}</h1>
						<p className="text-xl text-primary-100">{t('industries.subtitle')}</p>
					</div>
				</div>
			</section>

			<section className="section-padding bg-surface">
				<div className="container-custom">
					<div className="grid md:grid-cols-3 gap-6">
						{industries.map((ind) => (
							<div key={ind.id} className="card p-6">
								<div className="mb-4">{ind.icon}</div>
								<h3 className="font-bold text-lg mb-2">{ind.title}</h3>
								<p className="text-secondary">{ind.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}


