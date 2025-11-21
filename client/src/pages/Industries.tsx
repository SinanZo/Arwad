import { useTranslation } from 'react-i18next';
import { Droplets, Zap, Factory, Flame, Hammer, Building2 } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Industries() {
  const { t } = useTranslation();

  const industries = [
    {
      icon: Droplets,
      key: 'water',
      image: '/images/industries/water.jpg',
    },
    {
      icon: Zap,
      key: 'power',
      image: '/images/industries/power.jpg',
    },
    {
      icon: Factory,
      key: 'manufacturing',
      image: '/images/industries/manufacturing.jpg',
    },
    {
      icon: Flame,
      key: 'petrochemicals',
      image: '/images/industries/petrochemicals.jpg',
    },
    {
      icon: Hammer,
      key: 'mining',
      image: '/images/industries/mining.jpg',
    },
    {
      icon: Building2,
      key: 'infrastructure',
      image: '/images/industries/infrastructure.jpg',
    },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/industries/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('industries.title')}</h1>
          <p className="text-xl opacity-90">{t('industries.subtitle')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container">
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            {t('industries.subtitle')}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`aspect-video md:aspect-auto ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <img
                      src={industry.image}
                      alt={t(`industries.${industry.key}.title`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <industry.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">
                        {t(`industries.${industry.key}.title`)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {t(`industries.${industry.key}.description`)}
                      </p>
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3 text-foreground">
                          {t('services.title')}:
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• {t('services.procurement.title')}</li>
                          <li>• {t('services.customized.title')}</li>
                          <li>• {t('services.automation.title')}</li>
                          <li>• {t('services.assessment.title')}</li>
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
