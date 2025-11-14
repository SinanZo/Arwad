import React from 'react'

type Props = { titleKey: string }

export default function ProductCard({ titleKey }: Props){
  return (
    <div className="card">
      <div className="h-36 bg-gradient-to-br from-accent-100 to-accent-200 rounded mb-3"></div>
      <h4 className="font-semibold">{titleKey}</h4>
    </div>
  )
}
'use client'

import Link from 'next/link'

interface ProductCardProps {
  title: string
  description: string
  image: string
  category: string
  href: string
}

export default function ProductCard({
  title,
  description,
  image,
  category,
  href,
}: ProductCardProps) {
  return (
    <Link href={href} className="card group cursor-pointer hover:border-primary-500 dark:hover:border-primary-400">
      <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900 dark:to-accent-800">
        <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-secondary line-clamp-2">{description}</p>
    </Link>
  )
}
