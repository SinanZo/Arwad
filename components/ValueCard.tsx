"use client"

import { ReactNode } from 'react'

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="card group hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl transition-all">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  )
}
