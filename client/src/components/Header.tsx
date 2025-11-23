import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useI18n } from '@/contexts/I18nContext';
import { APP_LOGO_LIGHT, APP_LOGO_DARK, APP_TITLE } from '@/const';

export default function Header() {
  const [location] = useLocation();
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/industries', label: t('nav.industries') },
    { path: '/products', label: t('nav.products') },
    { path: '/our-services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/register', label: t('nav.register') },
    { path: '/quote-order', label: t('nav.quote') },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMobileMenu}>
            <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src={APP_LOGO_DARK} 
                alt={APP_TITLE} 
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === item.path
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              title={language === 'en' ? 'العربية' : 'English'}
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              title={language === 'en' ? 'العربية' : 'English'}
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
             onClick={toggleTheme}

              title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} onClick={closeMobileMenu}>
                <span
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted ${
                    location === item.path
                      ? 'bg-muted text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
