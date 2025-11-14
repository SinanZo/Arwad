import React from 'react'

type Props = { titleKey: string; subtitleKey?: string }

export default function SectionTitle({ titleKey, subtitleKey }: Props){
  return (
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-primary">{titleKey}</h2>
      {subtitleKey && <p className="text-muted mt-2">{subtitleKey}</p>}
    </div>
  )
}
'use client'

import { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary max-w-3xl ${centered ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </div>
  )
}
