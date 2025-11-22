import { useTranslation } from 'react-i18next';
import { Shield, Users, Award, Factory, Wrench, Cpu, Building2 } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { ValueCard } from '@/components/Cards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Factory,
      key: 'procurement',
    },
    {
      icon: Wrench,
      key: 'customized',
    },
    {
      icon: Cpu,
      key: 'automation',
    },
    {
      icon: Building2,
      key: 'assessment',
    },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/services/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl opacity-90">{t('services.subtitle')}</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              title={t('services.values.integrity.title')}
              description={t('services.values.integrity.description')}
            />
            <ValueCard
              icon={Users}
              title={t('services.values.teamwork.title')}
              description={t('services.values.teamwork.description')}
            />
            <ValueCard
              icon={Award}
              title={t('services.values.quality.title')}
              description={t('services.values.quality.description')}
            />
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">
                        {t(`services.${service.key}.title`)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {t(`services.${service.key}.description`)}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">
                          Key Deliverables:
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {(t(`services.${service.key}.deliverables`, { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                  <div className={`aspect-video md:aspect-auto bg-muted ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <img
                      src={`/images/services/${service.key}.jpg`}
                      alt={t(`services.${service.key}.title`)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Factory className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{t('industries.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('industries.subtitle')}
                </p>
                <a href="/industries" className="text-primary hover:underline font-medium">
                  {t('common.viewDetails')} →
                </a>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Wrench className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{t('products.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('products.subtitle')}
                </p>
                <a href="/products" className="text-primary hover:underline font-medium">
                  {t('common.viewDetails')} →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
