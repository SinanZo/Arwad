"use client"

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
    <Link href={href} className="card group cursor-pointer hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl transition-all">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        {icon && (
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 group-hover:opacity-90 transition-opacity">
            <div className="w-24 h-24 drop-shadow-lg">
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
