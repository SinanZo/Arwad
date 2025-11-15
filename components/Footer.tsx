"use client"

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const Mail = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
const Phone = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
const MapPin = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
const Facebook = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const Twitter = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
const Linkedin = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.741 1.395 3.741 4.393v5.601zM5.337 9.341c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.954-1.71 1.184 0 1.915.755 1.915 1.71 0 .951-.73 1.71-1.954 1.71zm1.581 11.111H3.615V9.683h3.303v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
const Instagram = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5m3.106-11.568a3.107 3.107 0 11-6.214 0 3.107 3.107 0 016.214 0zM12 5a7 7 0 100 14 7 7 0 000-14zm4.406-1.235h1.566v1.566h-1.566z"/></svg>

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/industries', label: t('nav.industries') },
    { href: '/products', label: t('nav.products') },
    { href: '/our-services', label: t('nav.services') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/quote-order', label: t('nav.quote') },
  ]

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl text-primary-600 dark:text-primary-400">
                {t('brand.short')}
              </span>
            </div>
            <p className="text-sm text-secondary">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                className="text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
              <a
                href="#"
                className="text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact_info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 rtl:space-x-reverse text-sm text-secondary">
                <MapPin />
                <span>Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-secondary">
                <Phone />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-secondary">
                <Mail />
                <span>info@arwad.org</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact.hours')}</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li>Sunday - Thursday</li>
              <li>8:00 AM - 6:00 PM</li>
              <li className="pt-2">Saturday</li>
              <li>9:00 AM - 2:00 PM</li>
              <li className="pt-2 text-muted">Friday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary">
              © {currentYear} {t('brand.name')}. {t('footer.rights')}
            </p>
            <p className="text-sm text-secondary">
              {t('footer.powered_by')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
