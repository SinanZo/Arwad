import React from 'react'

type Props = { titleKey: string; descKey?: string }

export default function IndustryCard({ titleKey, descKey }: Props){
  return (
    <a className="card block hover:shadow-custom transition-shadow" href="#">
      <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4"></div>
      <h4 className="font-semibold">{titleKey}</h4>
      {descKey && <p className="text-muted text-sm mt-2">{descKey}</p>}
    </a>
  )
}
'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface IndustryCardProps {
  title: string
  description: string
  image: string
  href: string
  icon?: ReactNode
}

export default function IndustryCard({
  title,
  description,
  image,
  href,
  icon,
}: IndustryCardProps) {
  return (
    <Link href={href} className="card group cursor-pointer hover:border-primary-500 dark:hover:border-primary-400">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
        {icon && (
          <div className="absolute inset-0 flex items-center justify-center text-primary-600 dark:text-primary-400 opacity-20 group-hover:opacity-30 transition-opacity">
            <div className="w-32 h-32">
              {icon}
            </div>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-secondary line-clamp-3">{description}</p>
    </Link>
  )
}
