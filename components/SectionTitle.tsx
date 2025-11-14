"use client"

import { ReactNode } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface SectionTitleProps {
  title?: string
  subtitle?: string
  titleKey?: string
  subtitleKey?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  titleKey,
  subtitleKey,
  centered = false,
  className = '',
}: SectionTitleProps) {
  const { t } = useLanguage()
  const resolvedTitle = titleKey ? t(titleKey) : title
  const resolvedSubtitle = subtitleKey ? t(subtitleKey) : subtitle

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {resolvedTitle}
      </h2>
      {resolvedSubtitle && (
        <p className={`text-lg text-secondary max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {resolvedSubtitle}
        </p>
      )}
    </div>
  )
}
