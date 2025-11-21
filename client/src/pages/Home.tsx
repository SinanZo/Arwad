import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import { Target, Zap, Shield, Factory, Droplets, Cpu, Wrench, Building2, Hammer } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import HeroSlider, { HeroSlide } from '@/components/HeroSlider';
import SectionTitle from '@/components/SectionTitle';
import { ValueCard, IndustryCard, ServiceCard, ProductCard } from '@/components/Cards';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  // Hero slides
  const heroSlides: HeroSlide[] = [
    {
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      ctaPrimary: { text: t('home.hero.cta1'), href: '/quote-order' },
      ctaSecondary: { text: t('home.hero.cta2'), href: '/industries' },
      mediaType: 'video',
      mediaSrc: '/videos/hero.mp4',
    },
    {
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      ctaPrimary: { text: t('home.hero.cta1'), href: '/quote-order' },
      ctaSecondary: { text: t('home.hero.cta2'), href: '/industries' },
      mediaType: 'image',
      mediaSrc: '/images/home/hero-1.jpg',
    },
    {
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      ctaPrimary: { text: t('home.hero.cta1'), href: '/quote-order' },
      ctaSecondary: { text: t('home.hero.cta2'), href: '/industries' },
      mediaType: 'image',
      mediaSrc: '/images/home/hero-2.jpg',
    },
    {
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      ctaPrimary: { text: t('home.hero.cta1'), href: '/quote-order' },
      ctaSecondary: { text: t('home.hero.cta2'), href: '/industries' },
      mediaType: 'image',
      mediaSrc: '/images/home/hero-3.jpg',
    },
  ];

  // Industries data
  const industries = [
    {
      title: t('industries.water.title'),
      description: t('industries.water.description').substring(0, 120) + '...',
      imageSrc: '/images/industries/water.jpg',
    },
    {
      title: t('industries.power.title'),
      description: t('industries.power.description').substring(0, 120) + '...',
      imageSrc: '/images/industries/power.jpg',
    },
    {
      title: t('industries.manufacturing.title'),
      description: t('industries.manufacturing.description').substring(0, 120) + '...',
      imageSrc: '/images/industries/manufacturing.jpg',
    },
    {
      title: t('industries.petrochemicals.title'),
      description: t('industries.petrochemicals.description').substring(0, 120) + '...',
      imageSrc: '/images/industries/petrochemicals.jpg',
    },
    {
      title: t('industries.mining.title'),
      description: t('industries.mining.description').substring(0, 120) + '...',
      imageSrc: '/images/industries/mining.jpg',
    },
    {
      title: t('industries.infrastructure.title'),
      description: t('industries.infrastructure.description').substring(0, 120) + '...',
      imageSrc: '/images/industries/infrastructure.jpg',
    },
  ];

  // Product categories
  const productCategories = [
    {
      title: t('products.categories.ventilation.title'),
      description: t('products.categories.ventilation.description').substring(0, 100) + '...',
      imageSrc: '/images/products/ventilation.jpg',
      category: 'ventilation',
    },
    {
      title: t('products.categories.inspection.title'),
      description: t('products.categories.inspection.description').substring(0, 100) + '...',
      imageSrc: '/images/products/inspection.jpg',
      category: 'inspection',
    },
    {
      title: t('products.categories.spareParts.title'),
      description: t('products.categories.spareParts.description').substring(0, 100) + '...',
      imageSrc: '/images/products/spare-parts.jpg',
      category: 'spareParts',
    },
    {
      title: t('products.categories.waterEquipment.title'),
      description: t('products.categories.waterEquipment.description').substring(0, 100) + '...',
      imageSrc: '/images/products/water-equipment.jpg',
      category: 'waterEquipment',
    },
    {
      title: t('products.categories.waterTreatment.title'),
      description: t('products.categories.waterTreatment.description').substring(0, 100) + '...',
      imageSrc: '/images/products/water-treatment.jpg',
      category: 'waterTreatment',
    },
    {
      title: t('products.categories.heavyEquipment.title'),
      description: t('products.categories.heavyEquipment.description').substring(0, 100) + '...',
      imageSrc: '/images/products/heavy-equipment.jpg',
      category: 'heavyEquipment',
    },
    {
      title: t('products.categories.measurement.title'),
      description: t('products.categories.measurement.description').substring(0, 100) + '...',
      imageSrc: '/images/products/measurement.jpg',
      category: 'measurement',
    },
    {
      title: t('products.categories.industrial.title'),
      description: t('products.categories.industrial.description').substring(0, 100) + '...',
      imageSrc: '/images/products/industrial.jpg',
      category: 'industrial',
    },
  ];

  const handleRequestQuote = (category: string) => {
    setLocation(`/quote-order?category=${category}`);
  };

  return (
    <Layout>
      <SEO
        title="ARWAD Trading - MRO & Supply Chain Solutions"
        description="Leading regional provider of MRO services, spare parts procurement, and supply chain management for industrial and infrastructure sectors."
        keywords="MRO, spare parts, supply chain, industrial equipment, maintenance, repair, operations"
      />
      {/* Hero Section */}
      <HeroSlider slides={heroSlides} />

      {/* About Snapshot */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('home.about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('home.about.description')}
              </p>
              <Button className="mt-6" asChild>
                <a href="/about">{t('common.learnMore')}</a>
              </Button>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src="/images/about/overview.jpg"
                alt="ARWAD Trading"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionTitle
            title={t('home.pillars.title')}
          />
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={Target}
              title={t('home.pillars.ownership.title')}
              description={t('home.pillars.ownership.description')}
            />
            <ValueCard
              icon={Zap}
              title={t('home.pillars.availability.title')}
              description={t('home.pillars.availability.description')}
            />
            <ValueCard
              icon={Shield}
              title={t('home.pillars.reliability.title')}
              description={t('home.pillars.reliability.description')}
            />
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            title={t('home.industries.title')}
            subtitle={t('home.industries.subtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                imageSrc={industry.imageSrc}
                link="/industries"
                linkText={t('common.viewDetails')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionTitle
            title={t('home.services.title')}
            subtitle={t('home.services.subtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Factory}
              title={t('services.procurement.title')}
              description={t('services.procurement.description').substring(0, 150) + '...'}
            />
            <ServiceCard
              icon={Wrench}
              title={t('services.customized.title')}
              description={t('services.customized.description').substring(0, 150) + '...'}
            />
            <ServiceCard
              icon={Cpu}
              title={t('services.automation.title')}
              description={t('services.automation.description').substring(0, 150) + '...'}
            />
            <ServiceCard
              icon={Building2}
              title={t('services.assessment.title')}
              description={t('services.assessment.description').substring(0, 150) + '...'}
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/our-services">{t('common.learnMore')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Highlights */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionTitle
            title={t('home.products.title')}
            subtitle={t('home.products.subtitle')}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                onRequestQuote={() => handleRequestQuote(product.category)}
                quoteButtonText={t('products.requestQuote')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.contactTeaser.title')}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t('home.contactTeaser.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <a href="/quote-order">{t('common.requestQuote')}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="/contact">{t('common.contactUs')}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
