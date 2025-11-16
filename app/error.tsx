"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  const { t } = useLanguage()

  useEffect(() => {
    // You could log the error to an error reporting service here
    // console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-[60vh] flex items-center justify-center bg-background">
          <div className="text-center p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('common.something_went_wrong') as any || 'Something went wrong'}</h1>
            <p className="text-secondary mb-8 max-w-xl mx-auto">
              {(t('common.try_again') as any) || 'Please try again or go back to the homepage.'}
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn-primary" onClick={() => reset()}>{(t('common.retry') as any) || 'Retry'}</button>
              <Link href="/" className="btn-outline">{(t('nav.home') as any) || 'Home'}</Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
