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
import { brandAssets } from '@/config/brand'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export async function generateMetadata(): Promise<Metadata> {
  const h = headers()
  const accept = h.get('accept-language') || ''
  const isArabic = accept.includes('ar')
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arwad.org'

  const translations = isArabic
    ? (await import('@/locales/ar/common.json')).default
    : (await import('@/locales/en/common.json')).default

  const title = `${translations.brand?.name ?? 'ARWAD Trading'} | MRO Solutions & Supply Chain Excellence`
  const description = translations.about?.description ?? 'Leading regional provider of MRO solutions, spare parts, and supply chain management services.'

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: 'MRO, spare parts, supply chain, industrial, maintenance, procurement, desalination, power generation, manufacturing',
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: translations.brand?.name ?? 'ARWAD Trading',
      locale: isArabic ? 'ar' : 'en_US',
      type: 'website',
      images: brandAssets.ogImage ? [{ url: brandAssets.ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: brandAssets.ogImage ? [brandAssets.ogImage] : undefined,
    },
    alternates: {
      canonical: siteUrl,
    },
    icons: brandAssets.icon ? { icon: brandAssets.icon } : undefined,
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
              <LanguageProvider initialLanguage={lang}>
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
