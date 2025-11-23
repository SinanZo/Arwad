import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import { APP_LOGO_DARK, APP_TITLE } from "@/const";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  const handleGoHome = () => {
    setLocation("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const quickLinks = [
    { path: "/", label: t('nav.home'), icon: Home },
    { path: "/products", label: t('nav.products'), icon: Search },
    { path: "/quote-order", label: t('nav.quote'), icon: Mail },
    { path: "/contact", label: t('nav.contact'), icon: Phone },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="w-full max-w-3xl mx-4 px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <img 
              src={APP_LOGO_DARK} 
              alt={APP_TITLE} 
              className="h-16 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>
        </div>

        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
          <CardContent className="pt-12 pb-12 text-center">
            {/* 404 Number */}
            <div className="mb-6">
              <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                404
              </h1>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Page Not Found
            </h2>

            <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
              Sorry, we couldn't find the page you're looking for. It may have been moved, deleted, or never existed.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Button
                onClick={handleGoBack}
                variant="outline"
                className="px-6 py-2.5 rounded-lg transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
              <Button
                onClick={handleGoHome}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </div>

            {/* Quick Links */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.path} href={link.path}>
                      <div className="group cursor-pointer p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
                        <Icon className="w-6 h-6 mx-auto mb-2 text-slate-600 group-hover:text-blue-600 transition-colors" />
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                          {link.label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-slate-600 mb-4">
                Need help? Contact our team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a 
                  href="tel:+971501028312" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +971-50-1028312
                </a>
                <span className="hidden sm:inline text-slate-300">|</span>
                <a 
                  href="mailto:info@arwad.org" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@arwad.org
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Text */}
        <p className="text-center text-sm text-slate-500 mt-8">
          © {new Date().getFullYear()} {APP_TITLE}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
