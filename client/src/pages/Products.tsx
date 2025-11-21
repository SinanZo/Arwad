import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { ProductCard } from '@/components/Cards';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Products() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('all');

  const productCategories = [
    {
      key: 'ventilation',
      title: t('products.categories.ventilation.title'),
      description: t('products.categories.ventilation.description'),
      imageSrc: '/images/products/ventilation.jpg',
    },
    {
      key: 'inspection',
      title: t('products.categories.inspection.title'),
      description: t('products.categories.inspection.description'),
      imageSrc: '/images/products/inspection.jpg',
    },
    {
      key: 'spareParts',
      title: t('products.categories.spareParts.title'),
      description: t('products.categories.spareParts.description'),
      imageSrc: '/images/products/spare-parts.jpg',
    },
    {
      key: 'waterEquipment',
      title: t('products.categories.waterEquipment.title'),
      description: t('products.categories.waterEquipment.description'),
      imageSrc: '/images/products/water-equipment.jpg',
    },
    {
      key: 'waterTreatment',
      title: t('products.categories.waterTreatment.title'),
      description: t('products.categories.waterTreatment.description'),
      imageSrc: '/images/products/water-treatment.jpg',
    },
    {
      key: 'heavyEquipment',
      title: t('products.categories.heavyEquipment.title'),
      description: t('products.categories.heavyEquipment.description'),
      imageSrc: '/images/products/heavy-equipment.jpg',
    },
    {
      key: 'measurement',
      title: t('products.categories.measurement.title'),
      description: t('products.categories.measurement.description'),
      imageSrc: '/images/products/measurement.jpg',
    },
    {
      key: 'industrial',
      title: t('products.categories.industrial.title'),
      description: t('products.categories.industrial.description'),
      imageSrc: '/images/products/industrial.jpg',
    },
  ];

  const handleRequestQuote = (category: string) => {
    setLocation(`/quote-order?category=${category}`);
  };

  const displayedProducts = activeTab === 'all'
    ? productCategories
    : productCategories.filter(p => p.key === activeTab);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/products/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('products.title')}</h1>
          <p className="text-xl opacity-90">{t('products.subtitle')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container">
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            {t('products.intro')}
          </p>
        </div>
      </section>

      {/* Products Grid with Tabs */}
      <section className="py-12 bg-background">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="overflow-x-auto pb-4">
              <TabsList className="inline-flex w-auto min-w-full justify-start">
                <TabsTrigger value="all">{t('common.viewDetails')}</TabsTrigger>
                {productCategories.map((cat) => (
                  <TabsTrigger key={cat.key} value={cat.key} className="whitespace-nowrap">
                    {cat.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.key}
                    title={product.title}
                    description={product.description}
                    imageSrc={product.imageSrc}
                    onRequestQuote={() => handleRequestQuote(product.key)}
                    quoteButtonText={t('products.requestQuote')}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
