import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/contexts/ThemeContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import { APP_TITLE, APP_LOGO_LIGHT, APP_LOGO_DARK } from '@/const';

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/industries', label: t('nav.industries') },
    { path: '/products', label: t('nav.products') },
    { path: '/our-services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={theme === 'dark' ? APP_LOGO_DARK : APP_LOGO_LIGHT} 
              alt={APP_TITLE} 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              {t('home.about.description').substring(0, 150)}...
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('nav.home')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {t('contact.info.address.line1')}<br />
                  {t('contact.info.address.line2')}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{t('contact.info.contact.phone')}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{t('contact.info.contact.email')}</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.info.hours.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('contact.info.hours.weekdays')}</li>
              <li>{t('contact.info.hours.weekend')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {APP_TITLE}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Powered by</span>
              <a 
                href="https://www.jawareer.info" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                Jawareer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
