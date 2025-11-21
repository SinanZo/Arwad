import { useState, FormEvent } from 'react';
import { trpc } from '@/lib/trpc';
import { useTranslation } from 'react-i18next';
import { useLocation as useWouterLocation } from 'wouter';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import QuoteItemRow, { QuoteItem } from '@/components/QuoteItemRow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function QuoteOrder() {
  const { t } = useTranslation();
  const [location] = useWouterLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parse category from URL query params
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const preselectedCategory = urlParams.get('category') || '';

  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    industry: '',
  });

  const [items, setItems] = useState<QuoteItem[]>([
    {
      id: '1',
      partNumber: '',
      description: '',
      manufacturer: '',
      quantity: '',
      category: preselectedCategory,
    },
  ]);

  const industries = [
    { value: 'water', label: t('industries.water.title') },
    { value: 'power', label: t('industries.power.title') },
    { value: 'manufacturing', label: t('industries.manufacturing.title') },
    { value: 'petrochemicals', label: t('industries.petrochemicals.title') },
    { value: 'mining', label: t('industries.mining.title') },
    { value: 'infrastructure', label: t('industries.infrastructure.title') },
  ];

  const categories = [
    { value: 'ventilation', label: t('products.categories.ventilation.title') },
    { value: 'inspection', label: t('products.categories.inspection.title') },
    { value: 'spareParts', label: t('products.categories.spareParts.title') },
    { value: 'waterEquipment', label: t('products.categories.waterEquipment.title') },
    { value: 'waterTreatment', label: t('products.categories.waterTreatment.title') },
    { value: 'heavyEquipment', label: t('products.categories.heavyEquipment.title') },
    { value: 'measurement', label: t('products.categories.measurement.title') },
    { value: 'industrial', label: t('products.categories.industrial.title') },
  ];

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleItemUpdate = (id: string, field: keyof QuoteItem, value: string) => {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddItem = () => {
    const newItem: QuoteItem = {
      id: Date.now().toString(),
      partNumber: '',
      description: '',
      manufacturer: '',
      quantity: '',
      category: '',
    };
    setItems(prev => [...prev, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const submitQuoteMutation = trpc.forms.submitQuote.useMutation({
    onSuccess: () => {
      toast.success(t('quote.form.success'));
      // Reset form
      setFormData({
        company: '',
        contact: '',
        email: '',
        phone: '',
        industry: '',
      });
      setItems([
        {
          id: '1',
          partNumber: '',
          description: '',
          manufacturer: '',
          quantity: '',
          category: '',
        },
      ]);
    },
    onError: (error) => {
      toast.error(error.message || t('quote.form.error'));
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate
    const hasEmptyFields = items.some(
      item => !item.partNumber || !item.description || !item.quantity
    );

    if (hasEmptyFields) {
      toast.error(t('quote.form.error'));
      return;
    }

    // Submit via tRPC
    submitQuoteMutation.mutate({
      company: formData.company,
      contact: formData.contact,
      email: formData.email,
      phone: formData.phone,
      industry: formData.industry,
      items: items.map(item => ({
        partNumber: item.partNumber,
        description: item.description,
        manufacturer: item.manufacturer,
        quantity: item.quantity,
        category: item.category,
      })),
    });
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/quote/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('quote.title')}</h1>
          <p className="text-xl opacity-90">{t('quote.subtitle')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container">
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            {t('quote.intro')}
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-12 bg-background">
        <div className="container max-w-6xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Company Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">{t('quote.form.company')}</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleFormChange('company', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact">{t('quote.form.contact')}</Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => handleFormChange('contact', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t('quote.form.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t('quote.form.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="industry">{t('quote.form.industry')}</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => handleFormChange('industry', value)}
                    required
                  >
                    <SelectTrigger id="industry">
                      <SelectValue placeholder={t('quote.form.selectIndustry')} />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind.value} value={ind.value}>
                          {ind.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Quote Items */}
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">{t('quote.form.items.title')}</h2>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <QuoteItemRow
                    key={item.id}
                    item={item}
                    index={index}
                    categories={categories}
                    onUpdate={handleItemUpdate}
                    onRemove={handleRemoveItem}
                    labels={{
                      partNumber: t('quote.form.items.partNumber'),
                      description: t('quote.form.items.description'),
                      manufacturer: t('quote.form.items.manufacturer'),
                      quantity: t('quote.form.items.quantity'),
                      category: t('quote.form.items.category'),
                      selectCategory: t('quote.form.items.selectCategory'),
                    }}
                    canRemove={items.length > 1}
                  />
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={handleAddItem}
                className="mt-4"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t('quote.form.addItem')}
              </Button>
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit" size="lg" disabled={submitQuoteMutation.isPending}>
                {submitQuoteMutation.isPending ? '...' : t('quote.form.submit')}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
