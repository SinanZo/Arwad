import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { InfoCard } from '@/components/Cards';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Contact form submitted:', formData);
    toast.success(t('contact.form.success'));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/images/contact/hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl opacity-90">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12">
              {t('contact.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('contact.form.submit')}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t('contact.form.name')}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">{t('contact.form.company')}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleChange('subject', value)}
                      required
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder={t('contact.form.subject')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="products">{t('contact.form.subjects.products')}</SelectItem>
                        <SelectItem value="services">{t('contact.form.subjects.services')}</SelectItem>
                        <SelectItem value="general">{t('contact.form.subjects.general')}</SelectItem>
                        <SelectItem value="support">{t('contact.form.subjects.support')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? '...' : t('contact.form.submit')}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">{t('contact.title')}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t('contact.info.address.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('contact.info.address.line1')}<br />
                        {t('contact.info.address.line2')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t('contact.info.contact.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('contact.info.contact.phone')}<br />
                        {t('contact.info.contact.email')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t('contact.info.hours.title')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('contact.info.hours.weekdays')}<br />
                        {t('contact.info.hours.weekend')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <InfoCard icon={MapPin} title={t('contact.info.address.title')}>
              <p>
                {t('contact.info.address.line1')}<br />
                {t('contact.info.address.line2')}
              </p>
            </InfoCard>
            <InfoCard icon={Phone} title={t('contact.info.contact.title')}>
              <p>
                {t('contact.info.contact.phone')}<br />
                {t('contact.info.contact.email')}
              </p>
            </InfoCard>
            <InfoCard icon={Clock} title={t('contact.info.hours.title')}>
              <p>
                {t('contact.info.hours.weekdays')}<br />
                {t('contact.info.hours.weekend')}
              </p>
            </InfoCard>
          </div>
        </div>
      </section>
    </Layout>
  );
}
