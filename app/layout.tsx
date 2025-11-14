import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/contexts/AuthContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'
import { headers } from 'next/headers'
import { pickLangFromHeader, loadMessages } from '@/lib/i18n'
import { TranslationProvider } from '@/components/TranslationProvider'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export async function generateMetadata(): Promise<Metadata> {
  const h = headers()
  const accept = h.get('accept-language') || ''
  const isArabic = accept.includes('ar')

  const translations = isArabic
    ? (await import('@/locales/ar/common.json')).default
    : (await import('@/locales/en/common.json')).default

  const title = `${translations.brand?.name ?? 'ARWAD Trading'} | MRO Solutions & Supply Chain Excellence`
  const description = translations.about?.description ?? 'Leading regional provider of MRO solutions, spare parts, and supply chain management services.'

  return {
    title,
    description,
    keywords: 'MRO, spare parts, supply chain, industrial, maintenance, procurement, desalination, power generation, manufacturing',
    openGraph: {
      title,
      description,
      url: 'https://arwad.org',
      siteName: translations.brand?.name ?? 'ARWAD Trading',
      locale: isArabic ? 'ar' : 'en_US',
      type: 'website',
    },
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = headers()
  const accept = h.get('accept-language') || ''
  const lang = pickLangFromHeader(accept)
  const messages = await loadMessages(lang)

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.variable}>
        <Providers>
          <TranslationProvider locale={lang} messages={messages}>
            <ThemeProvider>
              <LanguageProvider>
                <AuthProvider>
                  <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                  </div>
                </AuthProvider>
              </LanguageProvider>
            </ThemeProvider>
          </TranslationProvider>
        </Providers>
      </body>
    </html>
  )
}
