"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import { useLanguage } from "@/contexts/LanguageContext";
import { brandAssets, getActiveLogo } from "@/config/brand";
import Image from "next/image";

const MenuIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SunIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m14.364 4.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H7m6-4h6v2a3 3 0 01-3 3h-6a3 3 0 01-3-3v-2z"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const { language: lang, setLanguage: setLang, dir, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/industries", label: t("nav.industries") },
    { href: "/products", label: t("nav.products") },
    { href: "/our-services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/register", label: t("nav.register") },
    { href: "/quote-order", label: t("nav.quote") },
  ];

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            {(!logoError && (brandAssets.logoLight || brandAssets.logoDark)) ? (
              <Image
                src={getActiveLogo(theme === 'dark')}
                alt="Arwad Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-xl font-bold text-white">
                A
              </div>
            )}
            <span className="text-xl font-bold text-primary dark:text-primary-light">ARWAD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 rtl:space-x-reverse lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary dark:text-primary-light"
                    : "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="rounded-lg bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-200 dark:bg-primary-900/50 dark:text-primary-200 dark:hover:bg-primary-800/70 transition-colors"
              aria-label={t("language.toggle" as any)}
            >
              {mounted && (lang === "en" ? "AR" : "EN")}
            </button>

            {/* Theme Toggle (only after mount to avoid hydration issues) */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="rounded-lg bg-slate-100 p-2.5 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-slate-700 dark:text-slate-200"
                aria-label={t("theme.toggle" as any)}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            )}


            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="pb-4 pt-2 lg:hidden"
            style={{ textAlign: dir === "rtl" ? "right" : "left" }}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary dark:text-primary-light"
                      : "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-light"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
