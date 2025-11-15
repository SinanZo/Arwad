"use client"

import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  href?: string
}

export default function ServiceCard({
  title,
  description,
  features,
  href,
}: ServiceCardProps) {
  // Ensure features is an array
  const featuresList = Array.isArray(features) ? features : []
  
  const CardContent = (
    <div className="card group hover:border-primary-500 dark:hover:border-primary-400 h-full">
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {title}
      </h3>
      <p className="text-secondary mb-4">{description}</p>
      <ul className="space-y-2">
        {featuresList.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 rtl:space-x-reverse text-sm text-secondary">
            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return href ? (
    <Link href={href} className="block h-full">
      {CardContent}
    </Link>
  ) : (
    CardContent
  )
}
