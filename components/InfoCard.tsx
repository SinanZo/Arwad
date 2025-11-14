'use client'

import { ReactNode } from 'react'

interface InfoCardProps {
  icon: ReactNode
  title: string
  content: string | string[]
}

export default function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="card">
      <div className="flex items-start space-x-4 rtl:space-x-reverse">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-2">{title}</h3>
          {Array.isArray(content) ? (
            <div className="space-y-1">
              {content.map((line, index) => (
                <p key={index} className="text-sm text-secondary">
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-sm text-secondary">{content}</p>
          )}
        </div>
      </div>
    </div>
  )
}
