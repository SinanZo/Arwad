import './globals.css'
import React from 'react'
import Providers from '../components/Providers'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ARWAD Trading | MRO Solutions & Supply Chain Excellence',
  description:
    'ARWAD Trading provides MRO solutions, spare parts and supply chain services for industrial sectors.',
  openGraph: {
    title: 'ARWAD Trading',
    description:
      'ARWAD Trading provides MRO solutions, spare parts and supply chain services for industrial sectors.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { AuthProvider } from '@/contexts/AuthContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export async function generateMetadata(): Promise<Metadata> {
  const h = headers()
  const accept = h.get('accept-language') || ''
  const isArabic = accept.includes('ar')

  // Load translations for the selected language (server-side)
  const translations = isArabic
    ? (await import('../locales/ar/common.json')).default
    : (await import('../locales/en/common.json')).default

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
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
      </body>
    </html>
  )
}
