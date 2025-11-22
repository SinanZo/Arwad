import { useTranslation } from 'react-i18next';
import { Target, Zap, Shield, Award, Users, Factory, TrendingUp } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { ValueCard, StatCard } from '@/components/Cards';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const { t } = useTranslation();

  const values = [
    { icon: Target, text: t('about.values.ownership') },
    { icon: Zap, text: t('about.values.availability') },
    { icon: Shield, text: t('about.values.reliability') },
    { icon: Award, text: t('about.values.competence') },
    { icon: Users, text: t('about.values.knowledge') },
    { icon: TrendingUp, text: t('about.values.integrity') },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/about/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl md:text-2xl opacity-90">{t('about.hero')}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle title={t('about.overview.title')} centered={false} />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.overview.description')}
              </p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src="/images/about/overview.jpg"
                alt="ARWAD Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionTitle title={t('about.values.title')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{value.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t('about.vision.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.vision.description')}
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {t('about.mission.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <SectionTitle title={t('about.stats.title')} />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary-foreground" />
                <div className="text-3xl font-bold mb-2">20,000+</div>
                <div className="text-sm opacity-90">{t('about.stats.engineers')}</div>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
              <CardContent className="pt-6">
                <Factory className="h-12 w-12 mx-auto mb-4 text-primary-foreground" />
                <div className="text-3xl font-bold mb-2">700+</div>
                <div className="text-sm opacity-90">{t('about.stats.factories')}</div>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary-foreground" />
                <div className="text-3xl font-bold mb-2">2,450+</div>
                <div className="text-sm opacity-90">{t('about.stats.projects')}</div>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-primary-foreground" />
                <div className="text-3xl font-bold mb-2">468+</div>
                <div className="text-sm opacity-90">{t('about.stats.awards')}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries & Services Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('industries.title')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('industries.subtitle')}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('industries.water.title')}</li>
                <li>• {t('industries.power.title')}</li>
                <li>• {t('industries.manufacturing.title')}</li>
                <li>• {t('industries.petrochemicals.title')}</li>
                <li>• {t('industries.mining.title')}</li>
                <li>• {t('industries.infrastructure.title')}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('services.title')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('services.subtitle')}
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• {t('services.procurement.title')}</li>
                <li>• {t('services.customized.title')}</li>
                <li>• {t('services.automation.title')}</li>
                <li>• {t('services.assessment.title')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
